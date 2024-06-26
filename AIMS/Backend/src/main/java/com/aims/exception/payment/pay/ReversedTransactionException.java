package com.aims.exception.payment.pay;

import com.aims.exception.payment.PaymentException;

public class ReversedTransactionException extends PaymentException {
    public ReversedTransactionException() {
        super("VNPAY: Giao dịch đảo (Khách hàng đã bị trừ tiền tại Ngân hàng nhưng GD chưa thành công ở VNPAY)");
    }
}
