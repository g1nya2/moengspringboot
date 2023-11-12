// dateUpdate
const date = new Date();
const elementDayLine = document.querySelector("#dayLine");
elementDayLine.innerText = `Today’s TOPiC >${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;

// memo2Local
let memoCatalog = [];
let TARGET_ID;
function catalogFilter(item) {
  console.log("✅");
  console.log("FILTER OPERATION");
  // console.log("item: ", item);
  console.log("Is Identical: ", item.id == TARGET_ID);
  console.log("itemId: ", item.id);
  console.log("targetId: ", TARGET_ID);
  if(item.id == TARGET_ID) {
    return false;
  }
  else return true;
}
function listenClickDelete(event) {
  event.preventDefault();
  TARGET_ID = event.target.parentElement.id;
  console.log("Clicked Lister: ", event.target.parentElement);
  event.target.parentElement.remove();
  console.log("Current Catalog: ", memoCatalog);
  const updatedMemoCatalog = memoCatalog.filter(catalogFilter);
  // console.log(DEBUGGER);
  console.log("Updated Memo Catalog", updatedMemoCatalog);
  memoCatalog = updatedMemoCatalog;
  localStorage.setItem(KEY_MEMO, JSON.stringify(memoCatalog));
}
/*
function create0appendElement(text) {
  const newLister = document.createElement("li");
  const newSpan = document.createElement("span");
  const newButton = document.createElement("button");
  
  newSpan.innerText = text;
  newButton.innerText = "❌";
  newButton.addEventListener("click", listenClickDelete);
  newLister.appendChild(newSpan);
  newLister.appendChild(newButton);
  const newID = Date.now();
  newLister.id = newID;
  memoCatalog.push({ id: newID, content: elementRightInput.value });
  
  elementRightList.appendChild(newLister);
}
*/
const KEY_MEMO = "key_memo"
const elementRight = document.querySelector("#rightSection");
const elementRightInputForm = elementRight.querySelector("form");
const elementRightInput = elementRight.querySelector("input");
const elementRightList = elementRight.querySelector("ul");
function memo2Local() {
  localStorage.setItem(KEY_MEMO, JSON.stringify(memoCatalog));
}
function listenSubmit(event) {
  event.preventDefault();
  // create0appendElement(elementRightInput.value);
  const newLister = document.createElement("li");
  const newSpan = document.createElement("span");
  const newButton = document.createElement("button");
  
  const newID = Date.now();
  newSpan.innerText = elementRightInput.value;
  newButton.innerText = "❌";
  newButton.addEventListener("click", listenClickDelete);
  newLister.appendChild(newSpan);
  newLister.appendChild(newButton);
  newLister.id = newID;
  memoCatalog.push({ id: newID, content: elementRightInput.value });
  elementRightList.appendChild(newLister);

  elementRightInput.value = "";
  memo2Local();
}
elementRightInputForm.addEventListener("submit", listenSubmit);

function reload2Catalog(item) {
  // create0appendElement(item.content);
  const newLister = document.createElement("li");
  const newSpan = document.createElement("span");
  const newButton = document.createElement("button");
  
  // const newID = Date.now();
  newSpan.innerText = item.content;
  newButton.innerText = "❌";
  newButton.addEventListener("click", listenClickDelete);
  newLister.appendChild(newSpan);
  newLister.appendChild(newButton);
  newLister.id = item.id;
  // memoCatalog.push({ id: item.id, content: elementRightInput.value });
  elementRightList.appendChild(newLister);
}
if(localStorage.getItem(KEY_MEMO)) {
  const parsedLocalMemo = JSON.parse(localStorage.getItem(KEY_MEMO));
  memoCatalog = parsedLocalMemo;
  memoCatalog.forEach(reload2Catalog);
}
