const express = require('express');
const path = require('path');
const app = express();

// Set up Pug as view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    const products = [
        {
            id: 1,
            name: "UltraBook Pro",
            description: "Lightweight and powerful for professionals on the go.",
            price: "160,000",
            image: "laptop1.jpg"
        },
        {
            id: 2,
            name: "Gaming Beast",
            description: "High-performance gaming laptop with RGB lighting.",
            price: "80,000",
            image: "laptop2.jpg"
        },
        {
            id: 3,
            name: "Creative Studio",
            description: "Perfect for designers and content creators.",
            price: "90,000",
            image: "laptop3.jpg"
        }
    ];
    
    res.render('index', { products });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});