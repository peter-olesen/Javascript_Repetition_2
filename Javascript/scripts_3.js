import { storeProducts } from './storeProducts.js';

let productSort = document.createElement('select')
document.body.appendChild(productSort)

const sortOptions = [
    {value: '', text: 'Sort by..'},
    {value: 'title', text: 'Alphabetical'},
    {value: 'price', text: 'Price'},
    {value: 'popularity', text: 'Popularity'},
    {value: 'quantity', text: 'Quantity'}
];

sortOptions.forEach(option => {
    let opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.text;
    productSort.appendChild(opt);
})

let productContainer = document.createElement('div')
productContainer.id = "productsContainer";
document.body.appendChild(productContainer)

function displayProducts(storeProducts) {
    
    productContainer.innerHTML = '';

    storeProducts.forEach(product => {
        let productCard = document.createElement('div')
        productCard.className = "productCard"
        productCard.innerHTML = `
        <img width="250px" height="250px" src="${product.image}"></img>
        <div class="innerCard">
        <h2>${product.title}</h2>
        <p><b>Popularity:</b> ${product.popularity}</p>
        <p><b>Price:</b> ${product.price}</p>
        <p><b>Quantity:</b> ${product.quantity}</p>
        </div>
        `
        productContainer.appendChild(productCard)

        productCard.addEventListener('click', () => {
            alert('Added "' + product.title + '" to cart')
        });
    });
}

displayProducts(storeProducts);

productSort.addEventListener('change', (e) => {
    const sortBy = e.target.value;

    const sortedProducts = [...storeProducts].sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        }
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });

    displayProducts(sortedProducts);
});