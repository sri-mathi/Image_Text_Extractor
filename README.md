# ELTHRA AI - Image Text Extractor

ELTHRA AI is a simple React application that allows users to upload an image and extract text content using Optical Character Recognition (OCR) powered by Tesseract.js. The extracted text can be viewed on the web interface and downloaded as a text file.

## Getting Started

To use the ELTHRA AI Image Text Extractor:

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install` in the project directory.
3. Start the development server with `npm start`.
4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Click on the "Choose File" button to upload an image.
2. Press the "Process Image" button to extract text from the uploaded image.
3. The extracted text will be displayed on the page.
4. Click the "Download Text" button to save the extracted text as a text file.

## Dependencies

- React: A JavaScript library for building user interfaces.
- Tesseract.js: An OCR engine for recognizing text in images.
- Bootstrap: A CSS framework for styling the application.
- FontAwesome: Icons for a better user interface.

## File Structure

- `src/App.js`: The main React component containing the application logic.
- `src/App.css`: Styles for the application.
- `public`: Static assets and the `index.html` file.

## Hosting on Firebase

This application is ready to be hosted on Firebase. Follow the steps below:

1. Install the Firebase CLI by running `npm install -g firebase-tools`.
2. Login to your Firebase account using `firebase login`.
3. Initialize Firebase in your project folder with `firebase init`.
   - Choose Hosting as the service to set up.
   - Set the public directory to `build`.
   - Configure as a single-page app (rewrite all URLs to `/index.html`).
4. Build the project with `npm run build`.
5. Deploy the application to Firebase with `firebase deploy`.

Your ELTHRA AI Image Text Extractor is now hosted on Firebase.
