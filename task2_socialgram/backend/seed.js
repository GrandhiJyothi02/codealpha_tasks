const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/product");

const products = [

    {
        name: "Smart Watch",
        price: 2999,
        image: "images/watch.jpg",
        rating: 4.5,
        description: "Stylish smart watch",
        category: "Electronics"
    },

    {
        name: "Wireless Headphones",
        price: 1999,
        image: "images/headphones.jpg",
        rating: 4.3,
        description: "Noise cancelling headphones",
        category: "Electronics"
    },

    {
        name: "Running Shoes",
        price: 2499,
        image: "images/shoes.jpg",
        rating: 4.4,
        description: "Comfortable running shoes",
        category: "Fashion"
    }

];

async function seedProducts() {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");

        await Product.deleteMany({});

        await Product.insertMany(products);

        console.log("Products Added Successfully");

        mongoose.connection.close();

    } catch (error) {

        console.log(error);

    }

}

seedProducts();