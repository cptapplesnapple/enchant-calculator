var availableEnchants = [
  'Aqua Affinity',
  'Bane of Arthropods',
  'Blast Protection',
  'Channeling',
  'Curse of Binding',
  'Curse of Vanishing',
  'Depth Strider',
  'Done',
  'Efficiency',
  'Feather Falling',
  'Fire Aspect',
  'Fire Protection',
  'Flame',
  'Fortune',
  'Frost Walker',
  'Impaling',
  'Infinity',
  'Knockback',
  'Looting',
  'Loyalty',
  'Luck of the Sea',
  'Lure',
  'Mending',
  'Multishot',
  'Piercing',
  'Power',
  'Projectile Protection',
  'Protection',
  'Punch',
  'Quick Charge',
  'Respiration',
  'Riptide',
  'Sharpness',
  'Silk Touch',
  'Smite',
  'Soul Speed',
  'Sweeping Edge',
  'Thorns',
  'Unbreaking'
];
var availableLevels = [1,2,3,4,5];
var selectedEnchants = {};

function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
}

var enchantmentsList = document.getElementById('enchantments-list');
    availableEnchants.forEach(function(enchantment) {
      var li = document.createElement('li');
      li.textContent = enchantment;
      li.onclick = function() {
        selectEnchantment(this);
      };
      enchantmentsList.appendChild(li);
    });

function selectEnchantment(element) {
  var selectedEnchantment = element.textContent;
  console.log("Selected enchantment: " + selectedEnchantment);
}