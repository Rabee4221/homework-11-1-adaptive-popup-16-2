$(function () {
    $('.js-nav-toggle').on('click', function () {
        $(this).toggleClass('toggler__icon--open');
        $('.js-nav').toogleClass('nav--open');
    });
})