import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faRobot } from '@fortawesome/free-solid-svg-icons';
import './App.css'
function App() {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const processImage = () => {
    if (!image) {
      alert('Please upload an image first.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const imageData = event.target.result;

      // Perform OCR using Tesseract.js
      Tesseract.recognize(imageData, 'eng').then(({ data: { text } }) => {
        setExtractedText(text);
      });
    };

    reader.readAsDataURL(image);
  };

  const downloadTextFile = () => {
    if (!extractedText) {
      alert('No text to download.');
      return;
    }

    const blob = new Blob([extractedText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'extracted_text.txt';
    link.click();
  };

  return (
      <div>
        <div className='container d-flex align-items-center justify-content-center'>
          <div className='ItoT text-center'>
            <h1 className='text1'>ELTHRA AI{`\u00a0\u00a0`}
              <FontAwesomeIcon icon={faRobot} className="chatbot-icon" />
            </h1>
            <br></br>
            <h3 className='mb-4 text'>Image Text Extractor</h3>
            <input type="file" onChange={handleFileUpload} className='mb-3 text' />
            <button onClick={processImage} className='btn btn-primary'>
              Process Image
            </button>
            <div className='mt-8'>
              <h2>Extracted Text:</h2>
              <p className='border p-3 text'>{extractedText}</p>
              <button className='btn btn-success' onClick={downloadTextFile}>
                Download Text <FontAwesomeIcon icon={faDownload} />
              </button> {`\u00a0\u00a0`} <button className='btn btn-primary' onClick={() => window.location.href = 'https://forms.gle/sfSY3NFuSJksPq5e9'}>
  Feedback
</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
