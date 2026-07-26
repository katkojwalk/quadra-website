// Smooth scroll for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });

    });

});

// Navbar shadow on scroll

window.addEventListener("scroll", ()=>{

    const nav=document.querySelector(".navbar");

    if(window.scrollY>50){

        nav.style.boxShadow="0 8px 20px rgba(0,0,0,.25)";

    }else{

        nav.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

    }

});