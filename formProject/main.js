function submitForm() {
  console.log("Registration completed");
}
function readName() {
  var x = document.getElementById("firstName").value;
  console.log(`User name: ${x}`);
}
function readLastName() {
  var x = document.getElementById("lastName").value;
  console.log(`User Last name: ${x}`);
}
function readEmail() {
  var x = document.getElementById("email").value;
  console.log(`User email: ${x}`);
}
function readPhone() {
  var x = document.getElementById("number").value;
  console.log(`User phone number: ${x}`);
}
function selectDate(e) {
  console.log(e.target.value);
}
function selectAmo(e) {
  console.log(e.target.value);
}
function submitForm() {
  alert("Registration Completed");
}
