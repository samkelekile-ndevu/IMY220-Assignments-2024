import express from "express";

// Create an Express application
const app = express();

// Serve static files from the 'frontend/public' directory
app.use(express.static("frontend/public"));

// Define the port to listen on
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
