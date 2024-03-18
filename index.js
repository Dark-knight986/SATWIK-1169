const express = require('express');
const bodyParser = require('body-parser');
const { JSDOM } = require('jsdom');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;

        const userId = "Satwik_Dubey_30032003";

        const email = "satwik1169.be21@chitkarauniversity.edu.in";
        const rollNumber = "2111981169";

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
            "user_id": userId,
            "email": email,
            "roll_number": rollNumber,
            "even_numbers": evenNumbers,
            "odd_numbers": oddNumbers,
            "alphabets": alphabets
        };

        const html = `
      <html>
        <head>
          <title>Response</title>
        </head>
        <body>
          <h1>Response:</h1>
          <pre>${JSON.stringify(response, null, 2)}</pre>
        </body>
      </html>
    `;


        const dom = new JSDOM(html);
        res.send(dom.window.document.documentElement.outerHTML);
    } catch (error) {

        res.status(500).send(`<h1>Error: ${error.message}</h1>`);
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
