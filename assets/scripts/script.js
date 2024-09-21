
//----------------IDIOMA----------------
const check = document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){

	let id = check.checked;

	if( id === true){
		window.location.href = "index.html"
	}else{
		window.location.href = "index-en.html"
	}
}

function openNav(){
	document.getElementById("mobile-menu") .style.width = "100%";
}

function closeNav(){
	document.getElementById("mobile-menu") .style.width = "0%";
}


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sectionBtns = document.querySelectorAll('.btn-nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});

sectionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        sectionBtns.forEach((btn) => btn.classList.remove('nav-active'));
        btn.classList.add('nav-active');
    });
});



// Select the menu icon element
let menuIcon = document.getElementById('menu-icon');

// Select the first li element in the navbar
let firstNavItem = document.querySelector('.navbar li:first-child');

// Check if the first li element is visible
function isElementVisible(element) {
    return (element.offsetWidth > 0 || element.offsetHeight > 0);
}

// Toggle the menu icon visibility based on the visibility of the first li element
function toggleMenuIcon() {
    if (!isElementVisible(firstNavItem)) {
        menuIcon.style.display = 'block'; // Show the menu icon
    } else {
        menuIcon.style.display = 'none'; // Hide the menu icon
    }
}

// Call toggleMenuIcon initially and whenever the window is resized
toggleMenuIcon();
window.addEventListener('resize', toggleMenuIcon);


const allCard = Array.from(document.querySelectorAll('.card'));
		const container = document.querySelector('.card-wrapper');
		const indicator = document.querySelector('.indicator');

		const arrHeight = allCard.map(item=> {
			return item.offsetHeight
		})
		const maxHeight = Math.max(...arrHeight);

		allCard.forEach((item, idx)=> {
			item.style.height = maxHeight + 'px';
			item.id = 'card-' + idx;

			const a = document.createElement('a');
			a.href = '#' + item.id
			indicator.appendChild(a);
		})

		container.style.maxHeight = maxHeight + 'px';

		const allIndicator = document.querySelectorAll('.indicator a');

		allIndicator[0].classList.add('active');

		allIndicator.forEach(item=> {
			item.addEventListener('click', function () {
				allIndicator.forEach(i=> {
					i.classList.remove('active');
				})
				item.classList.add('active');
			})
		})

		container.addEventListener('scroll', function () {
			let linkActive;
			allCard.forEach(item=> {
				if(this.scrollTop >= item.offsetTop - (item.offsetHeight / 2) - 28 && this.scrollTop <= (item.offsetTop + (item.offsetHeight / 2) - 28)) {
					linkActive = item.id
				}
			})
			allIndicator.forEach(item=> {
				if(item.getAttribute('href') === ("#" + linkActive)) {
					item.classList.add('active');
				} else {
					item.classList.remove('active');
				}
			})
		})


//Dark Mode

var icon = document.getElementById('icon');

// Verificar si no hay un tema guardado, si no, establecerlo en 'light'
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

// Aplicar el tema guardado
if (localData === "light") {
    icon.src = "assets/img/moon.png";
    document.body.classList.remove("dark-theme");
} else if (localData === "dark") {
    icon.src = "assets/img/sun.png";
    document.body.classList.add("dark-theme");
}

// Alternar entre temas cuando se hace clic en el icono
icon.onclick = function() {	
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'assets/img/sun.png';
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = 'assets/img/moon.png';
        localStorage.setItem("theme", "light");
    }
}


// ------------------Preguntas Frecuentes (FAQ) - Script--------------------------------

document.querySelectorAll('.faq-item h3').forEach(item => {
	item.addEventListener('click', function() {
		const answer = this.nextElementSibling;
		answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
	});
});

