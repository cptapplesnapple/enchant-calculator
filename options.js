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

function thiss(dropdown) {
  var option_value = dropdown.options[dropdown.selectedIndex].value;
  var option_text = dropdown.options[dropdown.selectedIndex].text;
  var lvls = document.querySelector(".levels");
  var lOptions = document.getElementById("lOptions");

  if (option_value !== "0") {
    lvls.style.display = "block";
  } else {
    lvls.style.display = "none";
  }

  alert('The option value is "' + option_value + '"\nand the text is "' + option_text + '"');
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
  if (currNumBox > 1) {
    const container = document.querySelector(".container");
    const boxes = container.querySelectorAll(".box");
    const lastBox = boxes[boxes.length - 1];
    container.removeChild(lastBox);
    currNumBox--;
    
    const pButton = document.getElementById("pButton");
    pButton.style.display = "block";
    
    if (currNumBox <= 1) {
      const mButton = document.getElementById("mButton");
      mButton.style.display = "none";
    }
  }
}
