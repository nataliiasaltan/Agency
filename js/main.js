$(document).ready(function() {


    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        dots: true
    });


    $("#nav-list").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    $('.icon-align-justify').click(function() {
        $('.nav-list').slideToggle();
    });

});



function openDrop() {
    $('body').on('click', '.js-open-drop', function() {
        var $this = $(this).closest('.drop-holder');
        if ($this.hasClass('open-drop')) {
            $this.removeClass('open-drop');

        } else {
            $('.drop-holder').removeClass('open-drop');
            $this.addClass('open-drop');
        }
        return false;
    });
}
openDrop()

function search() {
    $('.search-btn').on('click', function() {
        var $this = $(this).closest('.header__container');
        if ($this.hasClass('open')) {
            $this.removeClass('open');
            $(this).children('.icon-iconfinder_cross_214654').removeClass().addClass('icon-search');
        } else {
            $(this).children('.icon-search').removeClass().addClass('icon-iconfinder_cross_214654');
            $this.addClass('open');
        }
        return false;
    });
}
search()