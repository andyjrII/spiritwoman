const express = require('express');
const app = express();
const path = require('path');
const indexRoutes = require('./src/routes/index');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes from the "routes" directory
app.use('/', indexRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
