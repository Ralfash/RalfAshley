/* =========================================
FILE 3: script.js
Save as: script.js
========================================= */

// ================= MOBILE MENU =================

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

// ================= ACTIVE NAV LINK =================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

  sections.forEach(sec => {

    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){

      navLinks.forEach(links => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  navbar.classList.remove('active');
};

// ================= TYPING EFFECT =================

const text = [
  "Frontend Developer",
  "Web Designer",
  "Freelancer",
  "JavaScript Developer"
];

let speed = 100;
const typing = document.getElementById("typing");

let charIndex = 0;
let textIndex = 0;

function typeWriter(){

  if(charIndex < text[textIndex].length){
    typing.innerHTML += text[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  }
  else{
    setTimeout(eraseText, 1000);
  }
}

function eraseText(){

  if(typing.innerHTML.length > 0){
    typing.innerHTML = typing.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  }
  else{
    textIndex = (textIndex + 1) % text.length;
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;

// ================= CONTACT FORM =================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();
});