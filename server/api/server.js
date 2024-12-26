const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Vercel!');

});




module.exports = app; // Export the app

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);
