function send() {
  var arr = document.getElementsByTagName('input');
  var name = arr[0].value;
  var email = arr[1].value;
  var subject = arr[2].value;
  var message = document.getElementById("message");

  if (name != "" && email != "" && subject != "" && message.value != "") {
    Swal.fire({
      icon: 'success',
      text: "Vui lòng chờ hệ thống xử lí",
    });
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Bạn cần điền đẩy đủ thông tin",
    });
  }
}