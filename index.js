document.addEventListener('DOMContentLoaded', function(){

    const form = document.querySelector("form");
    statusTxt = form.querySelector(".statusTxt");
    
    form.onsubmit = (e)=>{
        e.preventDefault();
        statusTxt.style.display = "block";

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "message.php", true);
        xhr.onload = ()=>{
            if(xhr.readyState == 4 && xhr.status == 200){
                let response = xhr.response;
                if(response.indexOf("All fields must be filled in...") != -1 || response.indexOf("Enter a valid e-mail address!") != -1 || response.indexOf("Sorry, failed to send your message") != -1){
                    statusTxt.style.color = "red";
                }else{
                    form.reset();
                    setTimeout(()=>{
                        statusTxt.style.display = "none";
                    }, 3000);
                }
                statusTxt.innerText = response;
            }
        }
        let formData = new FormData(form);
        xhr.send(formData); 
    }
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide up script
    
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0});
    });

    // Toggle Menu/Navbar

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Typing Animation
    var typed = new Typed(".typing", {
        strings: ["Web Designer", "Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Designer", "Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //Owl Carousel Script

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            800:{
                items: 2,
                nav: false
            },
            1000:{
                item: 3,
                nav: false
            },
            1250:{
                items: 4,
                nav: false
            }
        }
    });

    $('.skills-carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            370:{
                items: 2,
                nav: false
            },
            600:{
                items: 3,
                nav: false
            },
            1000:{
                items: 5,
                nav: false
            }
        }
    });
});