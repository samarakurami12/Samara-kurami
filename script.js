let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
        })
     }
   })
}

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// const form = document.getElementById('myForm');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const data = {
//     name: formData.get('name'),
//     email: formData.get('email'),
//     phone: formData.get('phone'),
//     subject: formData.get('subject'),
//     message: formData.get('message')
//   };

//   fetch('/your-server-endpoint', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
// });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(event) {
//         event.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior: "smooth"
//         });
//     });
// });

// // Portfolio Filtering Feature
// const filterButtons = document.querySelectorAll(".filter-btn");
// const photos = document.querySelectorAll(".photo");

// filterButtons.forEach(button => {
//     button.addEventListener("click", function() {
//         const category = this.getAttribute("data-category");

//         photos.forEach(photo => {
//             if (category === "all" || photo.classList.contains(category)) {
//                 photo.style.display = "block";
//             } else {
//                 photo.style.display = "none";
//             }
//         });
//     });
// });

// // Hover Effect for Overlay Text
// document.querySelectorAll(".photo").forEach(photo => {
//     photo.addEventListener("mouseenter", function() {
//         this.querySelector(".overlay").style.opacity = "1";
//     });
//     photo.addEventListener("mouseleave", function() {
//         this.querySelector(".overlay").style.opacity = "0";
//     });
// });

// these are other codes for slider images

// const $next = document.querySelector('.next');
// const $prev = document.querySelector('.prev');
// $next.addEventListener(
//     'click',
//     ()=> {
//         const items=document.querySelectorAll('.item');
//         document.querySelector('.slide').appendChild(items[0]);
//     },

// );
// $prev.addEventListener(
//     'click',
//     () => {
//         const items = document.querySelectorAll('.item');
//         document.querySelector('.slide').prepend(items[items.length - 1]);

//     },
// );