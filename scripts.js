function addToList(){
   var value = document.getElementById("inputText").value;
   if(value == "")
   {
    alert("To Add Item Enter the name of the Grocery");
   }

   else{
   var li = document.createElement("li");
   var textNode = document.createTextNode(value);
   li.appendChild(textNode);
   document.getElementById("list").appendChild(li);
   li.className="item";
   var close = document.createElement("SPAN");
  //  var closeNode = document.createElement("button");
  var closeNode = document.createTextNode("Delete");
  //  classNode.innerHTML = "  Delete";
  
  //  closeNode.innerHTML = "Delete";
   close.appendChild(closeNode);
   li.appendChild(close);
   close.className= "close";
   }
}

document.body.addEventListener("click", function (event){
  if(event.target.className == "close")
  event.target.parentElement.style.display = "none";
});

document.body.addEventListener("click", function (event){
    if(event.target.tagName == "LI")
    event.target.classList.style.toggle("check");
  });