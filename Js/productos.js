document.addEventListener("DOMContentLoaded", function() {
    
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productId = this.getAttribute("data-product-id"); 
            addProductToCart(productId);
        });
    });
});


function addProductToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; 

    const product = getProductById(productId); 

    if (product) {

        const existingProductIndex = cart.findIndex(item => item.id === productId);

        if (existingProductIndex !== -1) {
            
            cart[existingProductIndex].cantidad += 1;
        } else {
            
            product.cantidad = 1;
            cart.push(product); 
        }

       
        localStorage.setItem("cart", JSON.stringify(cart));

   
        alert("Producto agregado al carrito!");

        
        window.location.href = "./carrito.html";  
    }
}


function getProductById(productId) {
    const products = {
        "verijero1": {
            id: "verijero1", 
            name: "Verijero 1", 
            image: "../assets/img/verijero/verijero1-min.jpeg", 
            price: 100
        },
        "verijero2": {
            id: "verijero2", 
            name: "Verijero 2", 
            image: "../assets/img/verijero/verijero2-min.jpeg", 
            price: 110
        },
        "verijero3": {
            id: "verijero3", 
            name: "Verijero 3", 
            image: "../assets/img/verijero/verijero3-min.jpeg", 
            price: 120
        },
        "verijero4": {
            id: "verijero4", 
            name: "Verijero 4", 
            image: "../assets/img/verijero/verijero4-min.jpeg", 
            price: 130
        },
        "verijero5": {
            id: "verijero5", 
            name: "Verijero 5", 
            image: "../assets/img/verijero/verijero5-min.jpeg", 
            price: 140
        },
        "cintura1": {
            id: "cintura1", 
            name: "Cintura 1", 
            image: "../assets/img/cintura/cintura1-min.jpeg", 
            price: 150
        },
        "cintura2": {
            id: "cintura2", 
            name: "Cintura 2", 
            image: "../assets/img/cintura/cintura2-min.jpeg", 
            price: 160
        },
        "cintura3": {
            id: "cintura3", 
            name: "Cintura 3", 
            image: "../assets/img/cintura/cintura3-min.jpeg", 
            price: 170
        },
        "cintura4": {
            id: "cintura4", 
            name: "Cintura 4", 
            image: "../assets/img/cintura/cintura4-min.jpeg", 
            price: 180
        },
        "cintura5": {
            id: "cintura5", 
            name: "Cintura 5", 
            image: "../assets/img/cintura/cintura5-min.jpeg", 
            price: 190
        },
        "facon1": {
            id: "facon1", 
            name: "Facon 1", 
            image: "../assets/img/facon/facon1-min.jpeg", 
            price: 200
        },
        "facon2": {
            id: "facon2", 
            name: "Facon 2", 
            image: "../assets/img/facon/facon2-min.jpeg", 
            price: 210
        },
        "facon3": {
            id: "facon3", 
            name: "Facon 3", 
            image: "../assets/img/facon/facon3-min.jpeg", 
            price: 220
        },
        "facon4": {
            id: "facon4", 
            name: "Facon 4", 
            image: "../assets/img/facon/facon4-min.jpeg", 
            price: 230
        },
        "facon7": {
            id: "facon7", 
            name: "Facon 7", 
            image: "../assets/img/facon/facon7-min.jpeg", 
            price: 240
        },
        "rebenque1": {
            id: "rebenque1", 
            name: "Rebenque 1", 
            image: "../assets/img/rebenque/rebenque1-min.jpeg", 
            price: 150
        },
        "rebenque2": {
            id: "rebenque2", 
            name: "Rebenque 2", 
            image: "../assets/img/rebenque/rebenque2-min.jpeg", 
            price: 160
        },
        "rebenque3": {
            id: "rebenque3", 
            name: "Rebenque 3", 
            image: "../assets/img/rebenque/rebenque3-min.jpeg", 
            price: 170
        },
        "rebenque4": {
            id: "rebenque4", 
            name: "Rebenque 4", 
            image: "../assets/img/rebenque/rebenque4-min.jpeg", 
            price: 180
        },
        "rebenque5": {
            id: "rebenque5", 
            name: "Rebenque 5", 
            image: "../assets/img/rebenque/rebenque5-min.jpeg", 
            price: 190
        },
        "otros1": {
            id: "otros1", 
            name: "Centro de Rastra", 
            image: "../assets/img/otros/centro de rastra-min.jpeg", 
            price: 50
        },
        "otros2": {
            id: "otros2", 
            name: "Letras a Medida", 
            image: "../assets/img/otros/letras a medida-min.jpeg", 
            price: 60
        },
        "otros3": {
            id: "otros3", 
            name: "Pasadores y Bombas", 
            image: "../assets/img/otros/pasadores bombas frentera centro de pretal para emprendado chapeado-min.jpeg", 
            price: 70
        },
        "otros4": {
            id: "otros4", 
            name: "Retranca", 
            image: "../assets/img/otros/retranca-min.jpeg", 
            price: 80
        },
        "otros5": {
            id: "otros5", 
            name: "Tapa de Bastos", 
            image: "../assets/img/otros/tapa de bastos-min.jpeg", 
            price: 90
        }
    };
    return products[productId] || null; 
}