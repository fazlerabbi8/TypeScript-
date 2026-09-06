function getPaymentSummary(payment) {
    if (payment.status === 'pending') {
        return "Payment pending";
    }
    if (payment.status === 'success') {
        return `Payment successful: ${payment.transactionId}`;
    }
    if (payment.status === 'failed') {
        return `Payment failed: ${payment.errorMessage}`;
    }
    const exhaustiveChecks = payment;
    throw new Error("Unhandled payment status");
}
const s = getPaymentSummary({ status: 'success', transactionId: 'tra123' });
console.log(s);
export {};
