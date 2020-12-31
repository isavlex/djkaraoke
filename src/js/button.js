$('.menu__icon').on('click', function () {
  $(this).closest('.menu').toggleClass('menu_state_open')
})
$('.menu__links-item').on('click', function () {
  $(this).closest('.menu').toggleClass('menu_state_open')
})
