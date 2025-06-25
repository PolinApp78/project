let arr = [
    // Switzerland
    "Zermatt Bus Terminal",
    "Interlaken Ost Bus Station",
    "Grindelwald Bus Terminal",
    "Lauterbrunnen Bahnhof",
    "Lucerne Bahnhofquai",
    "Chamonix-Mont-Blanc Sud (France, near Swiss border)",
    "Geneva Bus Station",
    "Bern PostAuto Terminal",
    "Gstaad Bus Station",
    "St. Moritz Bahnhof PostAuto",
    "Verbier Village",
    "Davos Platz Postautohaltestelle",
    "Andermatt Gotthardpass",
    "Täsch Bahnhof (Shuttle to Zermatt)",
    "Flims Dorf Post",

    // France
    "Chamonix Sud Bus Station",
    "Annecy Gare Routière",
    "Grenoble Gare Routière",
    "Nice Airport (Bus to Alps)",
    "Bourg-Saint-Maurice Gare Routière",
    "Morzine Gare Routière",
    "Les Gets Gare Routière",
    "Val d'Isère Centre",
    "Courchevel 1850",
    "Megève Place du Village",

    // Italy
    "Aosta Autostazione",
    "Bolzano Autostazione",
    "Trento Autostazione",
    "Cortina d'Ampezzo Autostazione",
    "Bormio Bus Station",
    "Livigno Centro",
    "Merano Autostazione",
    "Sestriere Bus Stop",
    "Ortisei (St. Ulrich) Autostazione",
    "Canazei Piazza Marconi",

    // Austria
    "Innsbruck Hauptbahnhof Bus Terminal",
    "Salzburg Süd Busbahnhof",
    "Mayrhofen Bahnhof",
    "Lech am Arlberg Postamt",
    "Kitzbühel Hahnenkammbahn",
    "Ischgl Seilbahn",
    "Zell am See Postplatz",
    "Bad Gastein Bahnhof",
    "St. Anton am Arlberg Bahnhof",
    "Sölden Postamt",

    // Germany
    "Garmisch-Partenkirchen Bahnhof (Bus Station)",
    "Berchtesgaden Busbahnhof",
    "Oberstdorf Busbahnhof",
    "Füssen Bahnhof (Bus Station)",
    "Mittenwald Bahnhof (Bus Station)",

    // Slovenia
    "Bled Bus Station",
    "Bohinj Jezero",
    "Kranjska Gora Avtobusna Postaja"
];

let inputAp = document.getElementById('Arr');
let inputDep = document.getElementById('Dep');
let newlistArr = document.getElementById('listArr');
let newlistDep = document.getElementById('listDep');

let parentDep = document.getElementById('parentDep');
let parentArr = document.getElementById('parentArr');
// let arrSpan = document.getElementById('ArrSpan');
// let depSpan = document.getElementById('DepSpan');




//ARRIVAL PART
//When you click on input, the full list of suggestions pops up


inputAp.addEventListener('focus', function () {

    // newlist.setAttribute('style', 'height: 100px');
    newlistArr.setAttribute('style', 'overflow-y: scroll');

    for (i = 0; i < arr.length; ++i) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        li.classList.add(`liF`);
        li.setAttribute('style', 'width: var(--input-width); padding-left: 0; padding-right: 0;')
        newlistArr.appendChild(li);
    }

    document.querySelectorAll('.liF').forEach(item => {
        item.addEventListener('click', event => {
            console.log(item.textContent);
            inputAp.value = item.textContent;
            newlistArr.setAttribute('style', 'display: none');



        })



    });

}, {once: true});



// When input is changed, the full list is cleared, filtering occurs,
// and the resulting array of hints is displayed,
// which is deleted and the filter is restarted after each change

inputAp.addEventListener('input', function () {
    newlistArr.setAttribute('style', 'display: block');
    newlistArr.setAttribute('style', 'overflow-y: scroll');
    while (newlistArr.firstChild) {
        newlistArr.removeChild(newlistArr.firstChild);
    }

    let filterResult = arr.filter(function(elem) {
        if (elem.includes(inputAp.value)) {
            return true;
        } else {
            return false;
        }
    });







    /////////////////////////////////////////////////////////////////////////////////////////////////////////


    let childspan = document.querySelector('.newText');

    // Clearing after each new action in the form
    while (parentArr.contains(childspan) === true) {
        parentArr.removeChild(childspan);
    }
    // Clearing after each new action in the form

    // The part for verifying the output data

    let firstEl = filterResult[0];
    console.log(firstEl);
    let newArr = firstEl;


    console.log(newArr[0]);

    let inputArr = inputAp.value;

    console.log(inputArr[0]);
    console.log(newArr[0]);


    let inputArrLength = inputArr.length;
    console.log(inputArrLength);

    let newArrLenght = newArr.length;
    console.log(newArrLenght);


    // The part for verifying the output data


    // Adding

    let DopArr = newArr.slice(inputArrLength, newArrLenght);
    console.log(DopArr);

    let newText = document.createElement('span');

    if (inputAp.value != '') {
        newText.textContent = DopArr;
    }


    newText.setAttribute('id', `newText`);
    newText.classList.add(`newText`);

    parentArr.appendChild(newText);


    // very strange line indentation
    // (here we need to do more complicated function which can depend on input.value lenght, but now it is linear dependence)
    let marginCalcCSS = ((inputArrLength*7) + 10);
    newText.setAttribute('style', `left: ${marginCalcCSS}px`);



            // the experimental part of the string addition
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// menu filtration
    for (i = 0; i < filterResult.length; ++i) {
        let li = document.createElement('li');
        li.textContent = filterResult[i];
        li.setAttribute('id', `liF${i}`)
        li.classList.add(`liF`);
        li.setAttribute('style', 'width: var(--input-width); padding-left: 0; padding-right: 0;')
        newlistArr.appendChild(li);

    }


    document.querySelectorAll('.liF').forEach(item => {
        item.addEventListener('click', event => {
            console.log(item.textContent);
            inputAp.value = item.textContent;
            newlistArr.setAttribute('style', 'display: none');


            newText.setAttribute('style', 'display: none');


        })
    });


});
//ARRIVAL PART close



//DEPART (just repeat) open

//When you click on input, the full list of suggestions pops up


inputDep.addEventListener('focus', function () {

    // newlist.setAttribute('style', 'height: 100px');
    newlistDep.setAttribute('style', 'overflow-y: scroll');

    for (i = 0; i < arr.length; ++i) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        li.classList.add(`liF`);
        li.setAttribute('style', 'width: var(--input-width); padding-left: 0; padding-right: 0;')
        newlistDep.appendChild(li);
    }

    document.querySelectorAll('.liF').forEach(item => {
        item.addEventListener('click', event => {
            console.log(item.textContent);
            inputDep.value = item.textContent;
            newlistDep.setAttribute('style', 'display: none');
        })



    });

}, {once: true});



// When input is changed, the full list is cleared, filtering occurs,
// and the resulting array of hints is displayed,
// which is deleted and the filter is restarted after each change

inputDep.addEventListener('input', function () {
    newlistDep.setAttribute('style', 'display: block');
    newlistDep.setAttribute('style', 'overflow-y: scroll');
    while (newlistDep.firstChild) {
        newlistDep.removeChild(newlistDep.firstChild);
    }

    let filterResult = arr.filter(function(elem) {
        if (elem.includes(inputDep.value)) {
            return true;
        } else {
            return false;
        }
    });



    // the experimental part of the string addition
    /////////////////////////////////////////////////////////////////////////////////////////////////////////


    let childspanDep = document.querySelector('#newTextDep');

    while (parentDep.contains(childspanDep) === true) {
        parentDep.removeChild(childspanDep);
    }



    let firstEl = filterResult[0];
    console.log(firstEl);
    let newArr = firstEl;


    console.log(newArr[0]);

    let inputArr = inputDep.value;


    console.log(inputArr[0]);
    console.log(newArr[0]);


    let inputArrLength = inputArr.length;
    console.log(inputArrLength);

    let newArrLenght = newArr.length;
    console.log(newArrLenght);

    let resultlenght = newArrLenght - inputArrLength;

    let DopArr = newArr.slice(inputArrLength, newArrLenght);
    console.log(DopArr);

    let newTextDep = document.createElement('span');

    if (inputDep.value != '') {
        newTextDep.textContent = DopArr;
    }

    newTextDep.setAttribute('id', `newTextDep`);
    newTextDep.setAttribute('class', `newTextDep`);
    parentDep.appendChild(newTextDep);

    let marginCalcCSS = ((inputArrLength*7) + 10);
    newTextDep.setAttribute('style', `left: ${marginCalcCSS}px`);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////


    for (i = 0; i < filterResult.length; ++i) {
        let li = document.createElement('li');
        li.textContent = filterResult[i];
        li.setAttribute('id', `liF${i}`)
        li.classList.add(`liF`);
        li.setAttribute('style', 'width: var(--input-width); padding-left: 0; padding-right: 0;')
        newlistDep.appendChild(li);

    }


    document.querySelectorAll('.liF').forEach(item => {
        item.addEventListener('click', event => {
            console.log(item.textContent);
            inputDep.value = item.textContent;
            newlistDep.setAttribute('style', 'display: none');
            newTextDep.setAttribute('style', 'display: none');


        })
    });


});

//DEPART (just repeat) close



//Check: The departure point is not equal to the destination for the FindMyAlpineRide button.
// If not equal, then the transition to another page on the event can be found in the control.js file
// If equal -  alert with comments

btnFindMyAlpRide.addEventListener('click', function () {

    if (inputAp.value === inputDep.value) {
        inputAp.setAttribute('style', 'color: red');
        inputDep.setAttribute('style', 'color: red');
        alert('The point of arrival and departure cannot be equal or empty!');

    }

});


