// const order: Order = {
//     status: 'pendding',
//     trackingNumber: 'TRACK123',  //PendingOrder has no trackingNumber
// // }
function describeOrder(order) {
    if (order.status === 'shipped') {
        console.log(order.trackingNumber);
    }
    else if (order.status === 'cancelled') {
        console.log(order.cancelReason);
    }
    else {
        console.log("order id pendding");
    }
}
describeOrder({ status: "pending" });
describeOrder({ status: "shipped", trackingNumber: "TRACK123" });
describeOrder({ status: "cancelled", cancelReason: "Out of stock" });
export {};
