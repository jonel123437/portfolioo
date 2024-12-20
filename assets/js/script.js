
// if press home go to top
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down, hide the header
        header.style.top = '-100px';
    } else {
        // Scrolling up, show the header
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});

function goUp() {
    window.scrollTo({
        top: 0,           // Scroll to the top of the page
        behavior: 'smooth' // Optional for smooth scrolling
    });
}

function scrollToSection() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth' // Optional: adds smooth scrolling
    });
}


var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
}

for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
}

currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
    setTimeout(function() {
        cw[i].className = 'letter out';
    }, i*80);
}

function animateLetterIn(nw, i) {
    setTimeout(function() {
        nw[i].className = 'letter in';
    }, 340+(i*80));
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    if (window.innerWidth > 500) { // Only apply scroll behavior for larger screens
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function toggleMenu() {
    const menu = document.getElementById('menu');
    const isVisible = menu.style.display === 'block';
    menu.style.display = isVisible ? 'none' : 'block';

    // Add event listener to close the menu if clicking outside
    if (!isVisible) {
        document.addEventListener('click', handleOutsideClick);
    }
}

function closeMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = 'none';
    document.removeEventListener('click', handleOutsideClick); // Cleanup event listener
}

function handleOutsideClick(event) {
    const menu = document.getElementById('menu');
    const toggleButton = document.querySelector('.cvfdg');

    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        closeMenu();
    }
}