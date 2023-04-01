const products = [
    {
        id: 'sku1',
        qty: 1,
    },
    {
        id: 'sku2',
        qty: 2,
    },
    {
        id: 'sku3',
        qty: 3,
    },
    {
        id: 'sku1',
        qty: 6,
    },
    {
        id: 'sku1',
        qty: 8,
    },
    {
        id: 'sku1',
        qty: 6,
    },
    {
        id: 'sku2',
        qty: 19,
    },
    {
        id: 'sku4',
        qty: 1,
    },
    {
        id: 'sku1',
        qty: 8,
    },
];
function combineProducts(products) {
    const productMap = {};

    products.forEach(product => {
        const { id, qty } = product;

        if (!productMap[id]) {
            productMap[id] = { ...product };
        } else {
            productMap[id].qty += qty;
        }
    });

    const combinedProducts = Object.values(productMap);

    products.splice(0, products.length, ...combinedProducts);
}
combineProducts(products);
console.log(products);
