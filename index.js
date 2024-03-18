const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route for /bfhl
app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;

        // Your user ID (replace with your own)
        const userId = "Satwik_Dubey_30032003";

        // Dummy email and college roll number
        const email = "satwik1169.be21@chitkarauniversity.edu.in";
        const rollNumber = "2111981169";

        // Initialize arrays for even numbers, odd numbers, and alphabets
        let evenNumbers = [];
        let oddNumbers = [];
        let alphabets = [];

        // Process the data array
        data.forEach(item => {
            if (typeof item === 'number') {
                if (item % 2 === 0) {
                    evenNumbers.push(item.toString());
                } else {
                    oddNumbers.push(item.toString());
                }
            } else if (typeof item === 'string' && item.length === 1) {
                if (item.match(/[a-zA-Z]/)) {
                    alphabets.push(item.toUpperCase());
                }
            }
        });

        // Response object
        const response = {
            "is_success": true,
            "user_id": userId,
            "email": email,
            "roll_number": rollNumber,
            "even_numbers": evenNumbers,
            "odd_numbers": oddNumbers,
            "alphabets": alphabets
        };

        // Sending the JSON response
        res.json(response);
    } catch (error) {
        // Error handling
        res.status(500).json({ "is_success": false, "error": error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
