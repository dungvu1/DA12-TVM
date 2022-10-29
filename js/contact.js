function send() {
  var arr = document.getElementsByTagName('input');
  var name = arr[0].value;
  var email = arr[1].value;
  var subject = arr[2].value;
  var message = document.getElementById("message");

  if (!name && !email && !subject && !message.value) {
    alert("Bạn cần điền đẩy đủ");
    return;
  } if (!name && !subject && !message.value) {
    alert("Bạn cần điền name ,subject và message");
    return;
  }
  if (!name && !email && !message.value) {
    alert("Bạn cần điền name ,email và message");
    return;
  }
  if (!name && !subject && !email) {
    alert("Bạn cần điền name ,email và subject");
    return;
  }
  if (!email && !subject && !message.value) {
    alert("Bạn cần điền email ,subject và message");
    return;
  }
  if (!subject && !message.value) {
    alert("Bạn cần điền subject và message");
    return;
  }
  if (!message.value) {
    alert("Bạn cần điền message");
    return;
  }
  if (name != "" && email != "" && subject != "" && message.value != "") {
    alert("Vui lòng chờ hệ thống sử lí");
    return;
  }
}