const express = require('express');
// const userRoutes = require('./routes/userRoutes');
// const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(express.json());

// Routes
// app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('Hello, ddsVercel!');
}
);

// Error Handling Middleware
// app.use(errorHandler);

module.exports = app;
