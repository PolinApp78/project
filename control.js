
// after click + and - in nubber of guests
let personPlus = document.getElementById('guestPlus');
let personMinus = document.getElementById('guestMinus');
let a = 1;
let personNumer = document.getElementById('guestNum');

personPlus.addEventListener('click', function() {

    if (a < 12) {
        a++;
    }
    else  {
        console.log('12 is a max');
    }

    console.log(`${a}`);
    personNumer.textContent = `${a}`;
});


personMinus.addEventListener('click', function() {
    if (a > 1) {
        a--;
    }
    else  {
        console.log('1 is a min');
    }

    console.log(`${a}`);

    personNumer.textContent = `${a}`;

});


// control calendar img


let departbtn = document.getElementById('date-one');
let returnbtn = document.getElementById('date-two');
let justDate = document.getElementById('justdate');
let dateImgDep = document.getElementById('dateImgDep');
let dateImgRet = document.getElementById('dateImgRet');


departbtn.addEventListener('focus', function () {
    justDate.setAttribute('style', 'display: flex; justify-content: center; flex-grow: 0; flex-shrink: 0;');
});

returnbtn.addEventListener('focus', function () {
    justDate.setAttribute('style', 'display: flex; justify-content: center; flex-grow: 0; flex-shrink: 0;');
});


departbtn.addEventListener('blur', function () {
    justDate.removeAttribute('style', 'display: flex; justify-content: center; flex-grow: 0; flex-shrink: 0;');
    if (departbtn.value != '') {
        dateImgDep.setAttribute('style', 'display: none;');
    }
});

returnbtn.addEventListener('blur', function () {
    justDate.removeAttribute('style', 'display: flex; justify-content: center; flex-grow: 0; flex-shrink: 0;');
    if (returnbtn.value != '') {
        dateImgDep.setAttribute('style', 'display: none;');
    }
});

departbtn.addEventListener('input', function () {
    dateImgDep.setAttribute('style', 'display: none;');
});

returnbtn.addEventListener('input', function () {
    dateImgRet.setAttribute('style', 'display: none;');
});




// after click in button Find My Alpine Ride

let btnFindMyAlpRide = document.getElementById('btnFindMyAlpRide');
let round = document.getElementById('round');
let oneway = document.getElementById('oneway');

btnFindMyAlpRide.addEventListener('click', function () {
    if ((round.checked || oneway.checked) && (departbtn.value != '') && (returnbtn.value != '') && (inputAp.value != '') && (inputDep.value != '')) {
        console.log('Form is correct');
        window.location = 'bus-list.html';
    }
    else  {
        alert('You should fill out the form in full');
    }

});



//faq-section

let plusNum1 = document.getElementById('plus-num1');
let plusNum2 = document.getElementById('plus-num2');
let plusNum3 = document.getElementById('plus-num3');
let plusNum4 = document.getElementById('plus-num4');
let plusNum5 = document.getElementById('plus-num5');
let plusNum6 = document.getElementById('plus-num6');

let closefaq1 = document.getElementById('close-faq1');
let closefaq2 = document.getElementById('close-faq2');
let closefaq3 = document.getElementById('close-faq3');
let closefaq4 = document.getElementById('close-faq4');
let closefaq5 = document.getElementById('close-faq5');
let closefaq6 = document.getElementById('close-faq6');

let faqP1 = document.getElementById('faq-p1');
let faqP2 = document.getElementById('faq-p2');
let faqP3 = document.getElementById('faq-p3');
let faqP4 = document.getElementById('faq-p4');
let faqP5 = document.getElementById('faq-p5');
let faqP6 = document.getElementById('faq-p6');


plusNum1.addEventListener('click', function () {
    faqP1.setAttribute('style', 'display: block;');
    closefaq1.setAttribute('style', 'display: block;');
    plusNum1.setAttribute('style', 'display: none;');
});


closefaq1.addEventListener('click', function () {
    faqP1.setAttribute('style', 'display: none;');
    closefaq1.setAttribute('style', 'display: none;');
    plusNum1.setAttribute('style', 'display: block;');
});

//

plusNum2.addEventListener('click', function () {
    faqP2.setAttribute('style', 'display: block;');
    closefaq2.setAttribute('style', 'display: block;');
    plusNum2.setAttribute('style', 'display: none;');
});


closefaq2.addEventListener('click', function () {
    faqP2.setAttribute('style', 'display: none;');
    closefaq2.setAttribute('style', 'display: none;');
    plusNum2.setAttribute('style', 'display: block;');
});

//

plusNum3.addEventListener('click', function () {
    faqP3.setAttribute('style', 'display: block;');
    closefaq3.setAttribute('style', 'display: block;');
    plusNum3.setAttribute('style', 'display: none;');
});


closefaq3.addEventListener('click', function () {
    faqP3.setAttribute('style', 'display: none;');
    closefaq3.setAttribute('style', 'display: none;');
    plusNum3.setAttribute('style', 'display: block;');
});

//
plusNum4.addEventListener('click', function () {
    faqP4.setAttribute('style', 'display: block;');
    closefaq4.setAttribute('style', 'display: block;');
    plusNum4.setAttribute('style', 'display: none;');
});


closefaq4.addEventListener('click', function () {
    faqP4.setAttribute('style', 'display: none;');
    closefaq4.setAttribute('style', 'display: none;');
    plusNum4.setAttribute('style', 'display: block;');
});

//

plusNum5.addEventListener('click', function () {
    faqP5.setAttribute('style', 'display: block;');
    closefaq5.setAttribute('style', 'display: block;');
    plusNum5.setAttribute('style', 'display: none;');
});


closefaq5.addEventListener('click', function () {
    faqP5.setAttribute('style', 'display: none;');
    closefaq5.setAttribute('style', 'display: none;');
    plusNum5.setAttribute('style', 'display: block;');
});

//

plusNum6.addEventListener('click', function () {
    faqP6.setAttribute('style', 'display: block;');
    closefaq6.setAttribute('style', 'display: block;');
    plusNum6.setAttribute('style', 'display: none;');
});


closefaq6.addEventListener('click', function () {
    faqP6.setAttribute('style', 'display: none;');
    closefaq6.setAttribute('style', 'display: none;');
    plusNum6.setAttribute('style', 'display: block;');
});


// NAV control


let menu = document.getElementById('menu');
let closeNav = document.getElementById('closeNav');
let newNav = document.getElementById('newNav');
let header = document.getElementById('navFix')

menu.addEventListener('click', function () {
    menu.setAttribute('style', 'display: none;');
    closeNav.setAttribute('style', 'display: flex;');

    newNav.setAttribute('style', 'display: flex; flex-direction: column; justify-content: start; align-items: start;');

    header.setAttribute('style', 'box-sizing: border-box; position: fixed; top: 0px; background-color: white; z-index: 1000;' );

});

closeNav.addEventListener('click', function () {
    menu.setAttribute('style', 'display: flex;');
    closeNav.setAttribute('style', 'display: none;');

    newNav.removeAttribute('style', 'display: flex; flex-direction: column; justify-content: start; align-items: start;');

    header.removeAttribute('style', 'position: fixed; top: 0px; background-color: white; z-index: 1000;' );

});