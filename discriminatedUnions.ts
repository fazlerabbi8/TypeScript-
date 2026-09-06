export {};

// problem
type OrderInfo = {
  status: "pending" | "shipped" | "cancelled";
  trackingNumber?: string;
  cancelReason?: string;
};

const order: OrderInfo = {
  status: "pending",
  trackingNumber: "TRACK123", // makes no sense — order hasn't shipped!
  cancelReason: "Changed my mind", // also makes no sense for "pending"
};

// solution using Discriminated Unions

type PendingOrder = {
  status: "pending";
};

type ShippedOrder = {
  status: "shipped";
  trackingNumber: string;
};

type CancelledOrder = {
  status: "cancelled";
  cancelReason: string;
};

type RefundedOrder = {
  status: "refunded";
  refundAmount: number;
};

type Order = PendingOrder | ShippedOrder | CancelledOrder | RefundedOrder;

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

function describeOrderTwo(order: Order): string {
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



function describeOrderThree(order: Order): string {
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

  const exhaustiveCheck: never = order;
  throw new Error("Unhandled order status");
}
