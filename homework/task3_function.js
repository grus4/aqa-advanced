let checkOrder = (availableItems, orderedItems) => {
    if (orderedItems === 0) return (`Your order is empty`);
    if (availableItems < orderedItems) return (`Your order is too large, we don’t have enough goods.`);
    if (availableItems >= orderedItems) return (`Your order is accepted`);
}
console.log(checkOrder(0, 1));
console.log(checkOrder(2, 2));
console.log(checkOrder(100, 0));
