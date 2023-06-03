var allEnchants = [
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
