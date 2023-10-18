var stack = [];

function pushItem() {
  var item = document.getElementById("code").value.trim();
  stack.push(item);
  hoGaya();
}

function popItem() {
  stack.pop();
  hoGaya();
}

function hoGaya() {
    var outputDiv = document.getElementById("dabba");
    outputDiv.innerHTML = "";
    for (var i = stack.length - 1; i >= 0; i--) {
      var item = stack[i];
      var itemNode = document.createElement("div");
      var gap = document.createElement("hr");
      itemNode.style.width = "100px";
// itemNode.style.height = "20px";
itemNode.style.backgroundColor = "#333";
itemNode.style.color = "white";
itemNode.style.padding = "10px";
itemNode.style.textDecoration = "underline";
itemNode.style.border = "3px";
itemNode.style.borderColor = "white";

// itemNode.style.fontSize = "16px";
// itemNode.style.border = "4px";
// itemNode.style.borderColor = "white";
// itemNode.style.borderRadius = "30px";
      itemNode.textContent = item;
      outputDiv.appendChild(itemNode);
    }
  }
