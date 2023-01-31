// const panelText = document.querySelector('.panel').innerText;
// console.log(panelText);
// document.querySelector('.panel').innerText = 'New text';
// document.querySelector('.input').value = 'Text';

// document.querySelector('.button').addEventListener('click', function(){
//     console.log('Hi!')
// })

// document.querySelector('.button').addEventListener('click', function(){
//     const inp = document.querySelector('.input').value;
//     if (!inp) {
//         return;
//     }
//     document.querySelector('.panel').innerText = inp;
//     document.querySelector('.input').value = '';
//     console.log(inp)
// })


// function changeClick() {
//     const inp = document.querySelector('.input').value;
//     if (!inp) {
//         return;
//     }
//     document.querySelector('.panel').innerText = inp;
//     document.querySelector('.input').value = '';
//     document.querySelector('.notification').style.display = 'block';
// }

// function changeInput(e) {
//     if (e.code == 'Enter') {
//         console.log('Enter')
//         changeClick();
//     }
    
// }

// document.querySelector('.input').addEventListener('keydown', function (e) {
//     if (e.code == 'Enter') {
//         console.log('Enter')
//         changeClick();
//     }
// })

// const el1 = document.querySelector('.one').innerText
// console.log(el1)
// const el2 = document.querySelector('.one ~ div').innerText
// console.log(el2)
// console.log(document.querySelectorAll('.one')[0].innerText);
// console.log(document.querySelectorAll('.one')[1].innerText);
// const el3 = document.querySelector('#two').innerText
// console.log(el3)
// console.log(document.getElementById('two').innerText)
// const el4 = document.querySelector('[user-id="4"]').innerText
// console.log(el4)

// const panelText = 'Панель';
// const panelClass = 'button';
// const newEl = document.createElement('div');
// newEl.setAttribute('user-id', 1);
// newEl.classList.add('panel');
// // newEl.innerText = 'Кнопка';
// newEl.innerHTML = `<button class='${panelClass}'>${panelText}</button>`
// document.querySelector('.test').appendChild(newEl);


localStorage.setItem('token', '1111');
localStorage.setItem('token1', 1);
localStorage.setItem('token', true);
const token1 = localStorage.getItem('token1');
console.log(typeof token1);
localStorage.removeItem('token1');
localStorage.clear();
