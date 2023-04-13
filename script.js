const input = document.getElementById('input');
const listcont = document.getElementById('listcont');
function addTask(){
  if(input.value === ''){
    alert("You must write something!")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listcont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  data();
}

listcont/addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("check");
    data();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    data();
  }
}, false);

function data(){
  localStorage.setItem("data", listcont.innerHTML);
}

function show(){
  listcont.innerHTML = localStorage.getItem("data");
}
show();