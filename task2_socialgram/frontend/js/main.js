const API_URL = "https://shopfusion-backend-aeng.onrender.com/";
// OPEN CATEGORY

function openCategory(category) {
    localStorage.setItem("selectedCategory", category);
    window.location.href = "category.html";
}

// PRODUCTS

const products = [

    {
        id: 1,
        category: "Shoes",
        name: "Nike Air Max",
        price: 3999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        description: "Comfortable running shoes"
    },

    {
        id: 2,
        category: "Shoes",
        name: "Campus Sports Shoes",
        price: 1999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400",
        description: "Lightweight sports shoes"
    },

    {
        id: 3,
        category: "Shoes",
        name: "Bata Casual Shoes",
        price: 1499,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
        description: "Stylish casual shoes"
    },

    {
        id: 4,
        category: "Shoes",
        name: "Walkaroo Sandals",
        price: 999,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400",
        description: "Comfortable daily wear"
    },

    {
        id: 5,
        category: "Watches",
        name: "Titan Watch",
        price: 2999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        description: "Premium analog watch"
    },

    {
        id: 6,
        category: "Watches",
        name: "Fastrack Watch",
        price: 2499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400",
        description: "Trendy youth watch"
    },

    {
        id: 7,
        category: "Mobiles",
        name: "iPhone 15",
        price: 69999,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
        description: "Latest Apple smartphone"
    },

    {
        id: 8,
        category: "Mobiles",
        name: "Samsung Galaxy",
        price: 49999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
        description: "High-performance Android phone"
    },

    {

        id:9,
        category:"Laptops",
        name:"HP Laptop",
        price:49999,
        rating:4.6,
        image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        description:"HP i5 Laptop"

    },

    {

        id:10,

        category:"Laptops",

        name:"Dell Inspiron",

        price:55999,

        rating:4.7,

       image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",

        description:"Dell i5 Laptop"

    },


    {

        id:11,

        category:"Laptops",

        name:"Lenovo ThinkPad",

        price:52999,

        rating:4.5,

        image:"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400",

        description:"Business Laptop"

    },


    {

        id:12,

        category:"Laptops",

        name:"Dell Laptop",

        price:47999,

        rating:4.4,

        image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",

        description:"Slim Laptop"

    },
    {
        id:13,
        category:"Books",
        name:"The Milk And Honey",
        price:499,
        rating:4.9,
        image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
        description:"Self Improvement Book"
    },

    {
        id:14,
        category:"Books",
        name:"Rich Dad Poor Dad",
        price:399,
        rating:4.8,
        image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        description:"Finance Books"
    },

    {
        id:15,
        category:"Books",
        name:"The Alchemist",
        price:299,
        rating:4.7,
        image:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
        description:"Fiction Books"
    },

    {
        id:16,
        category:"Books",
        name:"Deep Work",
        price:450,
        rating:4.8,
        image:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
        description:"Productivity Books"
    },
    {
        id:17,
        category:"Beauty",
        name:"Face Serum",
        price:799,
        rating:4.5,
        image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
        description:"Vitamin C Serum"
    },

    {
        id:18,
        category:"Beauty",
        name:"Sunscreen",
        price:599,
        rating:4.7,
        image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400",
        description:"SPF 50 Sunscreen"
    },

    {
        id:19,
        category:"Beauty",
        name:"Face Wash",
        price:299,
        rating:4.4,
        image:"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400",
        description:"Gentle Face Wash"
    },

    {
        id:20,
        category:"Beauty",
        name:"Moisturizer",
        price:499,
        rating:4.6,
        image:"https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400",
        description:"Hydrating Moisturizer"
    },

{
    id:21,
    category:"Watches",
    name:"Casio Digital Watch",
    price:1999,
    rating:4.4,
    image:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400",
    description:"Classic digital watch"
},

{
    id:22,
    category:"Watches",
    name:"Sonata Analog Watch",
    price:1499,
    rating:4.3,
    image:"https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400",
    description:"Elegant analog watch"
},

{
    id:23,
    category:"Mobiles",
    name:"Iphone 13",
    price:45999,
    rating:4.8,
   image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    description:"Flagship Iphone "
},

{
    id:24,
    category:"Mobiles",
    name:"Realme GT",
    price:28999,
    rating:4.5,
    image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400",
    description:"Gaming smartphone"
},
{
    id:25,
    category:"Fashion",
    name:"Men's Shirt",
    price:899,
    rating:4.4,
    image:"https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400",
    description:"Cotton casual shirt"
},

{
    id:26,
    category:"Fashion",
    name:"Handbag",
    price:1499,
    rating:4.6,
    image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
    description:"Stylish handbag"
},

{
    id:27,
    category:"Fashion",
    name:"Saree",
    price:1199,
    rating:4.7,
    image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
    description:"Traditional saree"
},

{
    id:28,
    category:"Fashion",
    name:"Ear rings",
    price:599,
    rating:4.3,
    image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400",
    description:"Modern ear rings"
}

];
// SHOW PRODUCTS OF SELECTED CATEGORY

const selectedCategory = localStorage.getItem("selectedCategory");

const categoryProducts = document.getElementById("categoryProducts");

console.log("Selected Category:", selectedCategory);

if(categoryProducts){

    const filteredProducts = products.filter(
        product => product.category === selectedCategory
    );

    categoryProducts.innerHTML = "";

    filteredProducts.forEach(product => {

        categoryProducts.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h2>${product.name}</h2>

                <p>${product.description}</p>

                <p>⭐ ${product.rating}</p>

                <h3>₹${product.price}</h3>

                <button onclick="addToCart(${product.id})">
                    Add To Cart
                </button>

            </div>

        </div>

        `;
    });
}

const cartItems = document.getElementById("cartItems");

if(cartItems){

    const product =
    JSON.parse(localStorage.getItem("cartProduct"));

    if(product){

        cartItems.innerHTML = `

        <div class="product-card">

            <img src="${product.image}">

            <div class="product-info">

                <h2>${product.name}</h2>

                <p>${product.description}</p>

                <p>⭐ ${product.rating}</p>

                <h3>₹${product.price}</h3>

            </div>

        </div>

        `;
    }
}

// ADD TO CART

function addToCart(id) {

    const product = products.find(
        p => p.id === id
    );

    localStorage.setItem(
        "cartProduct",
        JSON.stringify(product)
    );

    window.location.href = "cart.html";
}