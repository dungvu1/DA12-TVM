function get() {
  var name = document.getElementById("name");
  var phone = document.getElementById("phone");
  var company = document.getElementById("company");
  var email = document.getElementById("email");
  var flexCheckDefault = document.getElementById("checkbox").checked;
  var textarea = document.getElementById("textarea");

  if (name.value != "" && email.value != "" && phone.value != "" && textarea.value != "" && company.value != "" && flexCheckDefault) {
    Swal.fire({
      icon: 'success',
      text: "Vui lòng chờ hệ thống xử lí",
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Bạn cần điền đẩy đủ thông tin",
    });
  }
}