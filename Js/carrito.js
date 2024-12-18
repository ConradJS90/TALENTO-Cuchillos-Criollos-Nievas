document.addEventListener("DOMContentLoaded", function () {
    const carrito = JSON.parse(localStorage.getItem("cart")) || [];

    console.log("Carrito recuperado:", carrito);

    function mostrarCarrito() {
        const sectionCarrito = document.querySelector(".sectionCarrito");
        sectionCarrito.innerHTML = '';

        if (carrito.length === 0) {
            sectionCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
        } else {
            let total = 0;
            carrito.forEach(producto => {
                const divProducto = document.createElement("div");
                divProducto.classList.add("producto-carrito");

                divProducto.innerHTML = `
                    <img src="${producto.image}" alt="${producto.name}">
                    <p>${producto.name}</p>
                    <p>Precio: $${producto.price}</p>
                    <p>Cantidad: <span class="cantidad">${producto.cantidad}</span></p>
                    <button class="eliminar" data-id="${producto.id}">Eliminar</button>
                    <button class="sumar" data-id="${producto.id}">+</button>
                    <button class="restar" data-id="${producto.id}">-</button>
                `;
                sectionCarrito.appendChild(divProducto);
                total += producto.price * producto.cantidad;
            });

            const totalDiv = document.createElement("div");
            totalDiv.classList.add("total");
            totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
            sectionCarrito.appendChild(totalDiv);

            const realizarCompraBtn = document.createElement("button");
            realizarCompraBtn.classList.add("realizar-compra");
            realizarCompraBtn.textContent = "Realizar compra";
            realizarCompraBtn.addEventListener("click", function() {
                alert("Compra realizada con éxito!");
    
            });
            sectionCarrito.appendChild(realizarCompraBtn);
        }
    }

    document.addEventListener('click', function (e) {
        const id = e.target.getAttribute('data-id');

        if (e.target.classList.contains('eliminar')) {
            const index = carrito.findIndex(item => item.id === id);
            if (index !== -1) {
                carrito.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(carrito));
                mostrarCarrito();
            }
        } else if (e.target.classList.contains('sumar')) {
            const producto = carrito.find(item => item.id === id);
            if (producto) {
                producto.cantidad += 1;
                localStorage.setItem("cart", JSON.stringify(carrito));
                mostrarCarrito();
            }
        } else if (e.target.classList.contains('restar')) {
            const producto = carrito.find(item => item.id === id);
            if (producto && producto.cantidad > 1) {
                producto.cantidad -= 1;
                localStorage.setItem("cart", JSON.stringify(carrito));
                mostrarCarrito();
            }
        }
    });

    mostrarCarrito();
});
