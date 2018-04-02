$(document).ready(function(){

    //add to cart
    $('#add-to-cart').on('click', function(e){
        e.stopPropagation();
        var $modal = $('#add-to-cart-modal');
        $modal.modal({
            backdrop: 'static',
            keyboard: true,
            focus: true
        })
        $modal.find('.title').html(book.title)
        $modal.find('.author').html(book.author)
        $modal.find('.price').html(book.price)
        $modal.find('.image').attr('src', book.cover)
        $modal.modal('show');
    });

    //cart
    $('body').on('click', '[data-minus], [data-plus]', function(e){
        e.stopPropagation();
        var $this = $(this);
        var $quantity = $this.closest('[data-quantity]');
        var $value = $quantity.find('[data-value]');
        var valStr = $value.val();
        if(typeof valStr === 'undefined' || valStr.trim().length === 0) {
            valStr = 1;
        }
        var value = parseInt(valStr, 10)
        if($this[0].hasAttribute('data-plus')) {
            if(value < 9) {
                value += 1;
            }
        } else if( $this[0].hasAttribute('data-minus')) {
            if(value > 1) {
                value += -1;
            }
        }
        $value.val(value)
    })

});