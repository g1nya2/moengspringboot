const KEY_ID = "id_list";
let idList = [];
if(localStorage.getItem(KEY_ID)) {
  const parsedLocalId = JSON.parse(localStorage.getItem(KEY_ID));
  idList = parsedLocalId;
}
function submitForm(event) {
  event.preventDefault();
  if(!idList.includes(document.querySelector("#id").value)) {
    alert("ID that doesn't exist!!");
  }
  const elementId = document.querySelector("#id");
  const elementPw = document.querySelector("#pw");
  elementId.value="";
  elementPw.value="";
}
const elementButtonLogin = document.querySelector("#buttonLogin");
elementButtonLogin.addEventListener("click",submitForm)
