console.log("Script loaded");
var allEnchants = [
  "Aqua Affinity",
  "Bane of Arthropods",
  "Blast Protection",
  "Channeling",
  "Curse of Binding",
  "Curse of Vanishing",
  "Depth Strider",
  "Done",
  "Efficiency",
  "Feather Falling",
  "Fire Aspect",
  "Fire Protection",
  "Flame",
  "Fortune",
  "Frost Walker",
  "Impaling",
  "Infinity",
  "Knockback",
  "Looting",
  "Loyalty",
  "Luck of the Sea",
  "Lure",
  "Mending",
  "Multishot",
  "Piercing",
  "Power",
  "Projectile Protection",
  "Protection",
  "Punch",
  "Quick Charge",
  "Respiration",
  "Riptide",
  "Sharpness",
  "Silk Touch",
  "Smite",
  "Soul Speed",
  "Sweeping Edge",
  "Thorns",
  "Unbreaking",
];
var availableLevels = [1, 2, 3, 4, 5];
var selectedEnchants = {};
var maxBox = 8;
var currNumBox = 1;

/*Dropdown Menu*/
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("dropdown");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
        and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

function jsFunction(value) {
  var body = document.getElementsByTagName("body")[0]; // Get the body element
  var color;

  switch (value) {
    case "1":
      color = "red";
      break;
    case "2":
      color = "green";
      break;
    case "3":
      color = "blue";
      break;
    default:
      color = "white";
  }
  body.style.backgroundColor = color; // Set the background color
}

function duplicateBox() {
  if (currNumBox < maxBox){
    const mButton = document.getElementById("mButton")
    const box = document.getElementById("box");
    var clone = box.cloneNode(true);
    document.querySelector(".container").appendChild(clone);
    currNumBox++;
    mButton.style.display = "block";
    if (currNumBox == maxBox){
      const pButton = document.getElementById("pButton")
      pButton.style.display = "none";
    }
  }
}
function removeBox() {
  if (currNumBox > 1){
    const myDiv = document.getElementById("box");
    const pButton = document.getElementById("pButton")
    document.querySelector(".container").removeChild(myDiv);
    currNumBox--;
    pButton.style.display = "block";
    if (currNumBox <= 1){
      const mButton = document.getElementById("mButton")
      mButton.style.display = "none";
    }
  }
}