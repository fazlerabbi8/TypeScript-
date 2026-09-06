export {}

// problem
// type OrderInfo = {
//   status: "pending" | "shipped" | "cancelled";
//   trackingNumber?: string;
//   cancelReason?: string;
// };

// const order: OrderInfo = {
//   status: "pending",
//   trackingNumber: "TRACK123", // makes no sense — order hasn't shipped!
//   cancelReason: "Changed my mind", // also makes no sense for "pending"
// };


// solution using Discriminated Unions

type PendingOrder = {
    status: 'pending';
};

type ShippedOrder = {
    status: 'shipped';
    trackingNumber: string;
};

type CencelledOrder = {
    status:'cancelled';
    cancelReason: string;
};

type Order = PendingOrder | ShippedOrder | CencelledOrder;


// const order: Order = {
//     status: 'pendding',
//     trackingNumber: 'TRACK123',  //PendingOrder has no trackingNumber
// // }


function describeOrder(order: Order) {
    if(order.status === 'shipped'){
        console.log(order.trackingNumber);
    }else if(order.status === 'cancelled'){
        console.log(order.cancelReason);
    }else{
        console.log("order id pendding");
    }
}

describeOrder({ status: "pending" });

describeOrder({ status: "shipped", trackingNumber: "TRACK123" });

describeOrder({ status: "cancelled", cancelReason: "Out of stock" });


