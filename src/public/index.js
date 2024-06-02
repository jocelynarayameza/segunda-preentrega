const socketClient = io();

socket.on('newProduct', (product) => {
    const productList = document.getElementById('productsList');
    const productItem = createProductItem(product);
    productList.appendChild(productItem);
});

socket.on('deleteProduct', (pid) => {
    const productList = document.getElementById('productsList');
    const productItem = document.getElementById(`product-${pid}`);
    if (productItem) {
        productList.removeChild(productItem);
    }
});
