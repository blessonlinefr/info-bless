var indexMenu = document.currentScript.getAttribute('indexMenu');

var menuName = [];
menuName.push('Accueil');
menuName.push('Guide Leveling');
menuName.push('Guide Classes');
menuName.push('Map Elite');
menuName.push('Que faire au lvl max');

var menuUrl = [];

// Index
if (indexMenu == 0) {
  menuUrl.push('index.html');
  menuUrl.push('#');
  menuUrl.push('#');
  menuUrl.push('pages/map-interactive.html');
  menuUrl.push('#');
} else {
  // Autres pages
  menuUrl.push('../index.html');
  menuUrl.push('#');
  menuUrl.push('#');
  menuUrl.push('map-interactive.html');
  menuUrl.push('#');
}

var size = menuName.length;

var menu = document.createElement('ul');
menu.className = 'nav nav-tabs';

var liContainer;
var aContainer;
var aContent;

if (size == menuUrl.length) {
  for (var i = 0; i < size; i++) {
    console.log(i);
    liContainer = document.createElement('li');
    liContainer.className = 'nav-item';

    aContainer = document.createElement('a');
    aContainer.className = 'nav-link';
    if (indexMenu == i) {
      aContainer.className += ' active';
    }
    aContainer.setAttribute('href', menuUrl[i]);

    aContent = document.createTextNode(menuName[i]);

    aContainer.appendChild(aContent);
    liContainer.appendChild(aContainer);
    menu.appendChild(liContainer);
  }
}

var element = document.getElementById('nav');
element.appendChild(menu);
