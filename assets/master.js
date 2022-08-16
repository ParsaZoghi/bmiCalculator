document.querySelector('title').innerHTML = 'BMI Calculator'

document.head.appendChild(document.createElement('style')).innerHTML = `
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

    :root {
        --color1: #4cecc4;
        --color2: #91efda;
        --color3: #0c775d;
        --color4: #7c8484;
        --color5: #b2ccc4;
        --color6: #444444;
        --color7: #f0d240;

        background: var(--color3);
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    li {
        list-style-type: none;
    }

    
    main {
        width: 100%;
        height: 100vh;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    main > section:nth-of-type(1) {
        width: 400px;
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        background: linear-gradient(145deg, #0b6b54, #0d7f64);
        box-shadow:  35px 35px 70px #0a654f,
                    -35px -35px 70px #0e896b;
    }

    main > section:nth-of-type(1) > h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color2);
        font-size: 1.6rem;
    }

    main > section:nth-of-type(1) > div {
        border-radius: inherit;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    
    main > section:nth-of-type(1) > div button {
        padding: 15px 45px;
        color: var(--color5);
        font-size: 1rem;
        background-color: var(--color3);
        border-radius: inherit;
        box-shadow: 0 0 8px 2px var(--color5),
                    0 0 32px 8px var(--color1),
                    inset 0 0 6px 2px var(--color5);
        text-shadow: 0 0 4px var(--color5);
        letter-spacing: .7px;
        transition: .3s;
        cursor: pointer;
        border: 2px solid var(--color5);
    }
    main > section:nth-of-type(1) > div button:hover {
        transform: scale(1.1);
        color: var(--color3);
        background-color: var(--color5);
        box-shadow: 0 0 8px 2px var(--color5),
                    0 0 16px 4px var(--color1),
                    inset 0 0 0 0 var(--color5);
        text-shadow: 0 0 0 var(--color5);
    }
    main > section:nth-of-type(1) > div button:active {
        box-shadow: 0 0 0 0 var(--color5),
                    0 0 0 0 var(--color1),
                    inset 0 0 0 0 var(--color5);
        text-shadow: 0 0 0 var(--color5);
    }

    main > section:nth-of-type(1) > div:nth-of-type(1) {
        height: 180px;
        margin: 40px;
    }

    main > section:nth-of-type(2) {
        width: 130px;
        height: 30px;
        display: flex;
        position: relative;
        color: var(--color2);
        overflow: hidden;
    }

    main > section:nth-of-type(2) > div {
        width: 125%;
        height: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        right: 79%; top: 50%;
        transform: translate(0, -50%);
        transition: .5s;
    }
    main > section:nth-of-type(2) >div:hover{
        right: -25%;
        transform: translate(0, -50%);
    }

    main > section:nth-of-type(2) > div:hover > a:first-child {
        margin-left: 5.5px;
    }

    main > section:nth-of-type(2) >div:hover + a.website {
        transform: translate(200%, -50%);
    }

    main > section:nth-of-type(2) > div > a {
        display: grid;
        place-items: center;
        padding: 3px;
        transition: inherit;
    }

    main > section:nth-of-type(2) > div > a > i {
        font-size: 1.1rem;
        display: grid;
        place-items: center;
    }

    main > section:nth-of-type(2) > div > div {
        font-size: 1.1rem;
        transition: inherit;
    }

    main > section:nth-of-type(2) > a.website {
        width: max-content;
        padding: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%; top: 50%;
        transform: translate(-36%, -50%);
        transition: .5s;
    }

    main > section:nth-of-type(2) a:hover {
        color: var(--color7);
        transition: color .3s;
    }
`

document.body.appendChild(document.createElement('main')).appendChild(document.createElement('section'))

let _selectSection = document.getElementsByTagName('section')

_selectSection[0].appendChild(document.createElement('h1')).innerHTML = 'BMI Calculator'

_selectSection[0].appendChild(document.createElement('div'))
let _selectDiv = document.getElementsByTagName('div')
_selectDiv[0].appendChild(document.createElement('button')).innerHTML = 'Enter your <strong>WEIGHT</strong> (kg)'
_selectDiv[0].appendChild(document.createElement('button')).innerHTML = 'Enter your <strong>HEIGHT</strong> (cm)'

let _weightArgu = ''
let _warningAlert = "DON'T LEAVE THE INPUTS EMPTY"
function _weightFunc() {
    _weightArgu = prompt('Your Weight in kg:')
    if (_weightArgu === null || _weightArgu === '') {
        alert(_warningAlert)
        return false
    }
}

let _heightArgu = ''
function _heightFunc() {
    _heightArgu = prompt('Your Height in cm:')
    if (_heightArgu === null || _heightArgu === '') {
        alert(_warningAlert)
        return false
    }
}

document.getElementsByTagName('button')[0].setAttribute('onclick', '_weightFunc()')
document.getElementsByTagName('button')[1].setAttribute('onclick', '_heightFunc()')

_selectSection[0].appendChild(document.createElement('div'))
let _selectDiv2 = document.getElementsByTagName('div')
_selectDiv2[1].appendChild(document.createElement('button')).innerHTML = 'Calculate <strong>BMI</strong>'

function _bmiFunc() {
    if (_weightArgu === null || _weightArgu === '' || _heightArgu === null || _heightArgu === '') {
        alert(_warningAlert)
        return false
    }
    let _result = (_weightArgu / (_heightArgu / 100) ** 2)
    let _bmi = 'Your BMI is:    ' + _result.toFixed(2) + ',    which means    '
    if (_result < 16) {
        alert(_bmi + "'Severe Thinness'")
    }
    else if (16 <= _result && _result < 17) {
        alert(_bmi + "'Moderate Thinness'")
    }
    else if (17 <= _result && _result < 18.5) {
        alert(_bmi + "'Mild Thinness'")
    }
    else if (18.5 <= _result && _result < 25) {
        alert(_bmi + "'Normal Weight'")
    }
    else if (25 <= _result && _result < 30) {
        alert(_bmi + "'Overweight (Pre-obese)'")
    }
    else if (30 <= _result && _result < 35) {
        alert(_bmi + "'moderately obese'")
    }
    else if (35 <= _result && _result < 40) {
        alert(_bmi + "'severely obese'")
    }
    else if (40 <= _result) {
        alert(_bmi + "'very severely obese'")
    }
    else {
        alert('ERROR: INPUTS must be NUMBERS')
        return false
    }
}
document.getElementsByTagName('button')[2].setAttribute('onclick', '_bmiFunc()')

document.getElementsByTagName('main')[0].appendChild(document.createElement('section'))

_selectSection[1].appendChild(document.createElement('div'))
_selectDiv[2].appendChild(document.createElement('a')).appendChild(document.createElement('i')).classList.add('bi', 'bi-instagram')
let _selectA = document.getElementsByTagName('a')
_selectA[0].href = "https://www.instagram.com/parsa_zoghi_web/"
_selectDiv[2].appendChild(document.createElement('a')).appendChild(document.createElement('i')).classList.add('bi', 'bi-github')
_selectA[1].href = "https://github.com/parsazoghi"
_selectDiv[2].appendChild(document.createElement('a')).appendChild(document.createElement('i')).classList.add('bi', 'bi-linkedin')
_selectA[2].href = "https://www.linkedin.com/in/parsa-zoghi-445ab9210"
_selectDiv[2].appendChild(document.createElement('div')).appendChild(document.createElement('i')).classList.add('bi', 'bi-arrow-right')

_selectSection[1].appendChild(document.createElement('a')).href = "https://parsazoghi.com"
_selectA[3].innerHTML = 'Parsa Zoghi'
_selectA[3].classList.add('website')
