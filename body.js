import AjaxForm from './ajax-form'

export default class extends AjaxForm {
    successSubmit(response) {
        super.successSubmit(response);

        if (!response.redirect) {
            $('.js-customer-form-errors').html('');
            $('.js-success-order-popup').show();

            $('.js-cartTotalPrice').text('0');
            $('.js_cart_items_count').text('0');
            $('.js-to_order-button').hide();
        }
    }

    errorSubmit(response) {
        let $errorsBlock = $('.js-customer-form-errors');

            $.each(response.responseJSON.errors, function (i, v) {
                if (i == 'delivery') {
                    $deliveryRadio.siblings('label').find('span.box').addClass('radio-error');
                }
                if (i == 'payment') {
                    $paymentRadio.siblings('label').find('span.box').addClass('radio-error');
                }
            });
        }

        if (response.status == 500) {
            $errorsBlock.html('');
        }
    }
}