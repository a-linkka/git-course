// const panelText = document.querySelector('.panel').innerText;
// console.log(panelText);
// document.querySelector('.panel').innerText = 'New text';
// document.querySelector('.input').value = 'Text';

// document.querySelector('.button').addEventListener('click', function(){
//     console.log('Hi!')
// })

document.querySelector('.button').addEventListener('click', function(){
    const inp = document.querySelector('.input').value;
    if (!inp) {
        return;
    }
    document.querySelector('.panel').innerText = inp;
    document.querySelector('.input').value = '';
    console.log(inp)
})