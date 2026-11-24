function showMessage() {
  var name = document.getElementById("name").value;
  document.getElementById("message").textContent = "Thank you, " + name + "! You are registered.";
  return false;
}