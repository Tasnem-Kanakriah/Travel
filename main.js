// start navbar
let navbar = document.querySelector('.navbar')
window.onscroll = () => {
    navbar.classList.remove('active')
}
let navbar1 = document.querySelector('.navbar').innerHTMLT
console.log(navbar1);
window.onscroll = () => {
    navbar1.innerHTML.style.background = 'red'
}
// end navbar


// start header slider video
let list = document.querySelector('.slider .list2');
let items = document.querySelectorAll('.slider .list2 .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev1');
let next = document.getElementById('next1');

let active = 0;
let lengthItem = items.length - 1;

next.onclick = function () {
    if (active + 1 > lengthItem) {
        active = 0;
    } else {
        active = active + 1
    }
    reloadSlider();
}
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItem;
    } else {
        active = active - 1
    }
    reloadSlider();
}
// let refreshSlider = setInterval(()=>{next.click()},3000)
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active ');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active')
}
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
})
// end header slider video


// start counterUp
const counters = document.querySelectorAll(" .counters1 span ");
const container = document.querySelector(" .counters1 ");
let activated = false;

window.addEventListener("scroll", () => {
    if (pageYOffset > container.offsetTop - container.offsetHeight - 700 && activated === false) {
        counters.forEach(counter => {
            counter.innerHTML = 0;
            let count = 0

            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if (count < target) {
                    count++;
                    counter.innerHTML = count;
                    setTimeout(updateCount, 2000 / target);
                } else {
                    counter.innerHTML = target;
                }
            }
            updateCount();
            activated = true;
        });
    } else if (pageYOffset < container.offsetTop - container.offsetHeight - 800 || pageYOffset === 0 && activated === true) {
        counters.forEach(counter => {
            counter.innerHTML = 0;
        });
        activated = false;
    }
})
// end counterUp


// start slider_pic 
var slider_pic = new Swiper('.slider_pic', {
    effect: 'cube',

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// end slider_pic 


// start hotel rooms
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive:{
        0:{
            items:1 , 
            margin : 20 ,
        },
        600:{
            items:2 , 
            margin : 10 ,
        },
        1000:{
            items:3 , 
            margin : 20 ,
        }
    }

})
// end hotel rooms


$(window).on("load",function(){
    $(".aside").fadeOut(1000);
})



