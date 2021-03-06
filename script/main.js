//меню 
const mobile_menu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.nav-items');
const toggleMenu = function () {
    menu.classList.toggle('active-menu');
}


mobile_menu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
});


document.addEventListener('click', function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == mobile_menu;
    const menu_is_active = menu.classList.contains('active-menu');

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }


});


// //соцсети
// const footer_social_mobile = document.querySelector('.footer-social-mobile');
// const social = document.querySelector('.footer-social__items');
// const toggleSocial = function () {
//     social.classList.toggle('active');
//     footer_social_mobile.classList.toggle('active');
// }


// footer_social_mobile.addEventListener('click', function (e) {
//     e.stopPropagation();
//     toggleSocial();
// });

// document.addEventListener('click', function (e) {
//     const targets = e.target;
//     const its_social = targets == social || social.contains(targets);
//     const its_footer_social = targets == footer_social_mobile;
//     const footer_social_is_active = social.classList.contains('active');

//     if (!its_social && !its_footer_social && footer_social_is_active) {
//         toggleSocial();
//     }
// });




//слайдер

const swiper = new Swiper('.main_slider', {
    spaceBetween: 20,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        700: {
            slidesPerView: 1,

        },
        860: {
            slidesPerView: 2,

        },
        1350: {
            slidesPerView: 3,

        },


    },



    // стрелки навигации
    navigation: {

        prevEl: '.main_slider_arrow-prev',
        nextEl: '.main_slider_arrow-next',

    },

});
//слайдер2

const swiper1 = new Swiper('.swiper1', {
    initialSlide: 0,
    effect: 'coverflow',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        700: {
            allowTouchMove: true,
            slidesPerView: 1,
            coverflowEffect: {
                rotate: -40,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
            },
        },
        800: {
            allowTouchMove: true,
            slidesPerView: 3,
            coverflowEffect: {
                rotate: -40,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
            },
        },
        860: {
            allowTouchMove: true,
            slidesPerView: 3,
            coverflowEffect: {
                rotate: -40,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
            },
        },
        980: {
            allowTouchMove: true,
            slidesPerView: 3,
            coverflowEffect: {
                rotate: -20,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
            },
        },

        1350: {

            allowTouchMove: false,

            slidesPerView: 4,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 0,
                slideShadows: false,
            },

        },


    },



    // стрелки навигации
    navigation: {

        prevEl: '.cards-slides-prev',
        nextEl: '.cards-slides-next',

    },

});

const card = document.querySelectorAll('.card');
const skillcard = document.querySelectorAll('.slide_skills');
const skill_1 = document.querySelectorAll('.skill_1');
const skill_2 = document.querySelectorAll('.skill_2');
const skill_3 = document.querySelectorAll('.skill_3');
const skill_4 = document.querySelectorAll('.skill_4');


// window.addEventListener('resize', function (e) {
// });

const windowInnerWidth = document.documentElement.clientWidth;


if (windowInnerWidth > 1350) {
    card.forEach(element => {
        element.classList.remove("mb");

    })

    card.forEach(element => {
        element.classList.remove("tb");

    })

    slidePc();
}
if (windowInnerWidth > 800 && windowInnerWidth < 1350) {
    card.forEach(element => {
        element.classList.remove("mb");
        element.classList.add("tb");
    })
    slideTable();
}
if (windowInnerWidth < 800) {
    card.forEach(element => {
        element.classList.remove("tb");
        element.classList.add("mb");
    })
    slideMobile();
};




// const card1 = document.querySelectorAll('.card1');
// const card2 = document.querySelectorAll('.card2');
// const card3 = document.querySelectorAll('.card3');
// const card4 = document.querySelectorAll('.card4');



//slideTable();

function slideTable() {
    toggskillTable()
    swiper1.on('slideChange', function () {
        remcards();
        indslide = swiper1.realIndex;
        remskill();
        toggskillTable()
    })


};

// slideMobile()

function slideMobile() {
    toggskillMobile()

    swiper1.on('slideChange', function () {
        remcards();
        indslide = swiper1.realIndex;
        remskill();
        toggskillMobile()

    })


};


//slidePc()

function slidePc() {


    card.forEach(card => {
        card.addEventListener('click', (event) => {
            idskill = event.currentTarget.id;

            remcards();
            card.classList.add("active");

            if (idskill == "card1") {
                remskill();
                skill_1.forEach(element => {
                    element.style.display = "flex";
                })

            };
            if (idskill == "card2") {
                remskill();
                skill_2.forEach(element => {
                    element.style.display = "flex";
                })

            };
            if (idskill == "card3") {
                remskill();
                skill_3.forEach(element => {
                    element.style.display = "flex";
                })

            };
            if (idskill == "card4") {
                remskill();
                skill_4.forEach(element => {
                    element.style.display = "flex";
                })

            }
        });
    });
}

function remcards() {
    card.forEach(element => {
        element.classList.remove("active");

    })
}


function remskill() {
    skillcard.forEach(element => {
        element.style.display = "none";

    })
}


function toggskillMobile() {
    indslide = swiper1.realIndex;
    remskill();
    if (indslide == "0") {
        // card1.forEach(element => {
        //     element.classList.add("active")
        // })

        skill_1.forEach(element => {
            element.style.display = "flex";
        })

    };
    if (indslide == "1") {

        // card2.forEach(element => {
        //     element.classList.add("active")
        // })

        skill_2.forEach(element => {
            element.style.display = "flex";
        })

    };
    if (indslide == "2") {

        // card3.forEach(element => {
        //     element.classList.add("active")
        // })

        skill_3.forEach(element => {
            element.style.display = "flex";
        })

    };
    if (indslide == "3") {

        // card4.forEach(element => {
        //     element.classList.add("active")
        // })

        skill_4.forEach(element => {
            element.style.display = "flex";
        })

    }

}


function toggskillTable() {
    indslide = swiper1.realIndex;
    remskill();
    if (indslide == "3") {
        // card1.forEach(element => {
        //     element.classList.add("active")
        // })

        skill_1.forEach(element => {
            element.style.display = "flex";
        })

    };
    if (indslide == "0") {

        // card2.forEach(element => {
        //     element.classList.add("active")
        // })

        skill_2.forEach(element => {
            element.style.display = "flex";
        })

    };
    if (indslide == "1") {

        // card3.forEach(element => {
        //     element.classList.add("active")
        // })

        skill_3.forEach(element => {
            element.style.display = "flex";
        })

    };
    if (indslide == "2") {

        // card4.forEach(element => {
        //     element.classList.add("active")
        // })

        skill_4.forEach(element => {
            element.style.display = "flex";
        })

    }
}