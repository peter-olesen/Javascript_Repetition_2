//Opgave 1

// myVar is first defined as 'Peter', and then redefined as 'Christian'
// var myVar = 'Peter';
// console.log(myVar);
// myVar = 'Christian';
// myVar = 'Evelina';
// console.log(myVar);

// // myLet is first defined as 'Cake', and then redefined as 'No cake'
// let myLet = 'Kage';
// console.log(myLet);
// myLet = 'Ingen kage';
// console.log(myLet);

// // myConst is first defined as 'Embrace The Suck', and cannot be redefined
// const myConst = 'Embrace The Suck';
// console.log(myConst);
// // myConst = 'Embrace The Pain';
// // console.log(myConst);

// // Opgave 2 - Math in console.log
// console.log(992 + 237);
// console.log(44 - 12);
// console.log(142 * 23);
// console.log(94 / 23);

// Opgave 3
// let btn = document.createElement('button');
// btn.innerText = 'Click';


// let clicked = document.createElement('p');
// let count = 0;

// btn.addEventListener('click', () => {
//     count++;
//     clicked.innerText = `Button clicked ${count} times`;
//     document.body.appendChild(clicked);
// });

// document.body.appendChild(btn);

// Opgave 4
// let inputElm = document.createElement('input');
// inputElm.type = "text";

// let inputError = document.createElement('p')

// document.body.appendChild(inputElm);

// inputElm.addEventListener('input', () => {
//     if (inputElm.value.length < 8) {
//         inputError.innerText = 'Input should be less than 8 characters';
//         document.body.appendChild(inputError);
//     } else {
//         inputError.innerText = '';
//     }
// });

// Opgave 5
// let container = document.createElement('div');
// document.body.append(container)

// let div1 = document.createElement('div');
// let div2 = document.createElement('div');
// let div3 = document.createElement('div');
// let div4 = document.createElement('div');
// container.append(div1, div2, div3, div4)

// document.body.style.margin = "0";

// container.style.display = "grid";
// container.style.gridTemplate = "1fr 1fr / 1fr 1fr"
// container.style.width = "100vw";
// container.style.height = "100vh";

// div1.style.border = "solid 1px black"
// div2.style.border = "solid 1px black"
// div3.style.border = "solid 1px black"
// div4.style.border = "solid 1px black"

// function getRandomRGB() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// function addColor(div) {
//     div.addEventListener('mouseenter', () => {
//         div.style.backgroundColor = getRandomRGB();
//     });
// }

// addColor(div1);
// addColor(div2);
// addColor(div3);
// addColor(div4);

// Opgave 6
let inputElm = document.createElement('input')
document.body.append(inputElm);

let msgElm = document.createElement('p')
document.body.append(msgElm);

function validateInput(value) {
    const regex = /^(?=.*[A-Z])(?=.*[^A-Za-z]).+$/;

    if (value.length >= 20) {
        msgElm.textContent = 'String is too long. Max twenty characters.';
        msgElm.style.color = 'red';
        return false;
    }

    if (!regex.test(value)) {
        msgElm.textContent = 'Must include at least one uppercase letter and one non-letter character.';
        msgElm.style.color = 'red';
        return false;
    }

    msgElm.textContent = 'Input is valid.';
    msgElm.style.color = 'green';
    return true;

}

inputElm.addEventListener('input', () => {
    let value = inputElm.value;
    validateInput(value);
});