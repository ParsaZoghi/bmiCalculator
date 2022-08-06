document.querySelector('title').innerHTML = 'BMI Calculator'

document.head.appendChild(document.createElement('style')).innerHTML = `
    :root {
        --color1: #4cecc4;
        --color2: #91efda;
        --color3: #0c775d;
        --color4: #7c8484;
        --color5: #b2ccc4;
        --color6: #444444;

        background: var(--color3);
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }

    main {
        width: 100%;
        height: 100vh;
        padding: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    main > section {
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
    main > section > h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color2);
        font-size: 1.6rem;
    }

    main > section > div {
        border-radius: inherit;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    main > section > div:nth-of-type(1) {
        height: 180px;
        margin: 40px;
    }
    
    main > section > div button {
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
        transition: 0.3s;
        cursor: pointer;
        border: 2px solid var(--color5);
    }
    main > section > div button:hover {
        transform: scale(1.1);
        color: var(--color3);
        background-color: var(--color5);
        box-shadow: 0 0 8px 2px var(--color5),
                    0 0 16px 4px var(--color1),
                    inset 0 0 0 0 var(--color5);
        text-shadow: 0 0 0 var(--color5);
    }
    main > section > div button:active {
        box-shadow: 0 0 0 0 var(--color5),
                    0 0 0 0 var(--color1),
                    inset 0 0 0 0 var(--color5);
        text-shadow: 0 0 0 var(--color5);
    }
`

document.body.appendChild(document.createElement('main')).appendChild(document.createElement('section'))

let _selectSection = document.getElementsByTagName('section')

_selectSection[0].appendChild(document.createElement('h1')).innerHTML = 'BMI Calculator'

_selectSection[0].appendChild(document.createElement('div'))
let _selectDiv1 = document.getElementsByTagName('div')
_selectDiv1[0].appendChild(document.createElement('button')).innerHTML = 'Enter your <strong>WEIGHT</strong> (kg)'
_selectDiv1[0].appendChild(document.createElement('button')).innerHTML = 'Enter your <strong>HEIGHT</strong> (cm)'

let _weightArgu = ''
function _weightFunc() {
    _weightArgu = prompt('Your Weight')
    if (_weightArgu === null || _weightArgu === '') {
        alert("DON'T LEAVE THE INPUTS EMPTY")
        return false
    }
}

let _heightArgu = ''
function _heightFunc() {
    _heightArgu = prompt('Your Height')
    if (_heightArgu === null || _heightArgu === '') {
        alert("DON'T LEAVE THE INPUTS EMPTY")
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
        alert("DON'T LEAVE THE INPUTS EMPTY")
        return false
    }
    let _result = (_weightArgu / (_heightArgu / 100) ** 2)
    console.log(_result)
    if (_result < 16) {
        alert(_result + '       Severe Thinness')
    }
    else if (16 <= _result && _result < 17) {
        alert(_result + '       Moderate Thinness')
    }
    else if (17 <= _result && _result < 18.5) {
        alert(_result + '       Mild Thinness')
    }
    else if (18.5 <= _result && _result < 25) {
        alert(_result + '       Normal Weight')
    }
    else if (25 <= _result && _result < 30) {
        alert(_result + '       Overweight (Pre-obese)')
    }
    else if (30 <= _result && _result < 35) {
        alert(_result + '       moderately obese')
    }
    else if (35 <= _result && _result < 40) {
        alert(_result + '       severely obese')
    }
    else if (40 <= _result) {
        alert(_result + '       very severely obese')
    }
    else {
        alert('ERROR: INPUTS must be NUMBERS')
        return false
    }
}
document.getElementsByTagName('button')[2].setAttribute('onclick', '_bmiFunc()')

