export default class {
    constructor($btn) {
        var self = this;

        this.$btn = $btn;

        this.activeClass = 'is-active';
        this.addAction = 'add-action';
        this.rmAction = 'rm-action';

        this.$itemsCount = $('.js-wish-items_count');
        this.$totalPrice = $('.js-wish-total_price');
        this.$wishListBtnArray = $('.productCard .js-wish-btn');

        this.$btn.on('click', this.btnClickHandler.bind(this));
    }

    btnClickHandler(e) {
        e.preventDefault();

        if (this.$btn.hasClass(this.activeClass)) {
            this.request(this.$btn.data(this.rmAction));
        } else {
            this.request(this.$btn.data(this.addAction));
        }
    }

    request(action) {
        $.ajax({
            url: action,
            dataType: "json",
            type: "POST",
            success: (response) => {
            this.$itemsCount.text(response.itemsCount);

    });
    }

    subscribe() {
        this.$btn.on('click', this.btnClickHandler.bind(this));
    }

    unsubscribe() {
        this.$btn.off('click', this.btnClickHandler.bind(this));
    }
}