const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;

        const userId = "john_doe_17091999";

        const email = "john@xyz.com";
        const rollNumber = "ABCD123";


        let evenNumbers = [];
        let oddNumbers = [];
        let alphabets = [];


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


        const response = {
            "is_success": true,
            "user_id": Satwik_30032003,
            "email": satwik1169.be21 @chitkarauniversity.edu.in,
            "roll_number": 2111981169,
            "even_numbers": evenNumbers,
            "odd_numbers": oddNumbers,
            "alphabets": alphabets
        };


        res.json(response);
    } catch (error) {

        res.status(500).json({ "is_success": false, "error": error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});