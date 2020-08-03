const hamburgerBtn = document.getElementById('hamburger');
const sideNav = document.getElementById('sideNav');
console.log(hamburgerBtn);
console.log(sideNav);
sideNav.style.right = '-250px';
hamburgerBtn.addEventListener('click',function(){
    if(sideNav.style.right == '-250px'){
        sideNav.style.right = '0px';
    }else{
      sideNav.style.right = '-250px';
    }
})
// Reveal JS

ScrollReveal().reveal('#about',{delay:200});
ScrollReveal().reveal('#sideNav',{delay:500});
ScrollReveal().reveal('#features',{delay:250});
ScrollReveal().reveal('#courses',{delay:300});
ScrollReveal().reveal('#offer',{delay:350});
ScrollReveal().reveal('#contact',{delay:400});
