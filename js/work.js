function get() {
  var name = document.getElementById("name");
  var phone = document.getElementById("phone");
  var company = document.getElementById("company");
  var email = document.getElementById("email");
  var flexCheckDefault = document.getElementById("checkbox").checked;
  var textarea = document.getElementById("textarea");
  if (!name.value && !email.value && !phone.value && !textarea.value && !company.value) {
    alert("Bạn cần điền đẩy đủ");
    return;
  }
  if (!name.value && !email.value && !textarea.value && !company.value) {
    alert("Bạn cần điền name ,company , email và textarea");
    return;
  }
  if (isNaN(phone.value)) {
    alert("Phone phải là dạng số");
    return;
  }
  if (!phone.value && !email.value && !textarea.value && !company.value) {
    alert("Bạn cần điền phone ,company , email và textarea");
    return;
  }
  if (!name.value && !email.value && !textarea.value && !phone.value) {
    alert("Bạn cần điền name ,phone , email và textarea");
    return;
  }
  if (!name.value && !company.value && !textarea.value && !phone.value) {
    alert("Bạn cần điền name ,phone ,company và textarea");
    return;
  }
  if (!name.value && !company.value && !company.value && !phone.value) {
    alert("Bạn cần điền name ,phone ,company và email");
    return;
  }
  if (!email.value && !textarea.value && !company.value) {
    alert("Bạn cần điền company , email và textarea");
    return;
  }
  if (!email.value && !textarea.value) {
    alert("Bạn cần điền email và textarea");
    return;
  }
  if (!textarea.value) {
    alert("Bạn cần điềntextarea.value ");
    return;
  }
  if (name.value != "" && email.value != "" && phone.value != "" && textarea.value != "" && company.value != "" && flexCheckDefault) {
    alert("Vui lòng chờ hệ thống sử lí");
    return;
  } else {
    alert("Bạn cần phải tích vào ô");
  }
}