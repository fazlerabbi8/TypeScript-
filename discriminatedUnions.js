const order = {
    status: "pending",
    trackingNumber: "TRACK123", // makes no sense — order hasn't shipped!
    cancelReason: "Changed my mind", // also makes no sense for "pending"
};
// const order: Order = {
//     status: 'pendding',
//     trackingNumber: 'TRACK123',  //PendingOrder has no trackingNumber
// // }
// function describeOrder(order: Order) {
//     if(order.status === 'shipped'){
//         console.log(order.trackingNumber);
//     }else if(order.status === 'cancelled'){
//         console.log(order.cancelReason);
//     }else{
//         console.log("order id pendding");
//     }
// }
// describeOrder({ status: "pending" });
// describeOrder({status: "shipped", trackingNumber:'123gdfshgsh'})
// describeOrder({status: "cancelled", cancelReason:'dont fine'})
// exhaustiveness checking. What if someone adds a new order status later ("refunded") and forgets to handle it somewhere?
function describeOrderTwo(order) {
    if (order.status === "shipped") {
        return `Tracking: ${order.trackingNumber}`;
    }
    if (order.status === "cancelled") {
        return `Reason: ${order.cancelReason}`;
    }
    if (order.status === "pending") {
        return "Pending";
    }
    //   what if refunded is missing
    if (order.status === "refunded") {
        return `Refunded amount: ${order.refundAmount}`;
    }
    throw new Error("Unhandled order status");
}
function describeOrderThree(order) {
    if (order.status === "shipped") {
        return `Tracking: ${order.trackingNumber}`;
    }
    if (order.status === "cancelled") {
        return `Reason: ${order.cancelReason}`;
    }
    if (order.status === "pending") {
        return "Pending";
    }
    if (order.status === "refunded") {
        return `Refunded amount: ${order.refundAmount}`;
    }
    const exhaustiveCheck = order;
    throw new Error("Unhandled order status");
}
export {};
