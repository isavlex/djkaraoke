import Cleave from 'cleave.js'
import "cleave.js/dist/addons/cleave-phone.ru"

$('#callback').on('click', function () {
  var name = $('input[name=name]').val()
  var phone = $('input[name=phone]').val()
  var corname = $('.correct__name')
  var corphone = $('.correct__phone')
  var userData = {name: name, phone: phone}
  if (name == false || name.length < 2) {
    corname.text('Введите корректное имя, длинна которого более 2-х символов.')
    return false
  }
  if (phone == false || phone.length < 3) {
    corphone.text('Введите корректный телефон.')
    return false
  }
  $.ajax({
    type: 'POST',
    url: 'mail.php',
    data: userData,
  })
  $('#call-request').arcticmodal('close')
  return false
})

var cleave = new Cleave('.phone-box', {
	phone: true
})
