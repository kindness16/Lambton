// const navToggler = document.querySelector('.nav-toggler');
// const navMenu = document.querySelector('.site-navbar ul');
// const navLinks = document.querySelectorAll('.site-navbar a');

// allEventListners();

// function allEventListners() {
//   navToggler.addEventListener('click', togglerClick);
//   navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
// }

// function togglerClick() {
//   navToggler.classList.toggle('toggler-open');
//   navMenu.classList.toggle('open');
// }

// function navLinkClick() {
//   if(navMenu.classList.contains('open')) {
//     navToggler.click();
//   }
// }

// var app = function () {
//   var body = void 0;
//   var menu = void 0;
//   var menuItems = void 0;

//   var init = function init() {
//       body = document.querySelector('body');
//       menu = document.querySelector('.menu-icon');
//       menuItems = document.querySelectorAll('.nav-list-item');

//       applyListeners();
//   };

//   var applyListeners = function applyListeners() {
//       menu.addEventListener('click', function () {
//           return toggleClass(body, 'nav-active');
//       });
//   };

//   var toggleClass = function toggleClass(element, stringClass) {
//       if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
//   };

//   init();
// }();
var linkClicked = document.getElementsByClassName('nav-link');
var numClass = linkClicked.length;

for (var i = 0; i < numClass; i++) {
		linkClicked[i].addEventListener('click', function(){
      var onTheMoment = document.getElementsByClassName('active');
			onTheMoment[0].className = onTheMoment[0].className.replace(' active', '');
			this.className += ' active';
    }, false);
	}