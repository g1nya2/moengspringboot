const KEY_ID = "id_list";
const idList = [];
function reload2Catalog(item) {
  idList.push(item);
}
if(localStorage.getItem(KEY_ID)) {
  const parsedLocalId = JSON.parse(localStorage.getItem(KEY_ID));
  idCatalog = parsedLocalId;
  idCatalog.forEach(reload2Catalog);
}

const elementButtonSignup = document.querySelector("#buttonSignup");
const elementInputId = document.querySelector("#id");
function id2Local(event) {
  // event.preventDefault();
  if(!idList.includes(elementInputId.value)) {
    idList.push(elementInputId.value);
    localStorage.setItem(KEY_ID, idList);
  }
  else {
    alert("Same ID Already Exists");
  }
  localStorage.setItem(KEY_ID, JSON.stringify(idList));
}
elementButtonSignup.addEventListener("click", id2Local);