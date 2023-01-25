// const a = prompt('Сколько будет 7 + 15?');
// console.log(a == 22 ? 'Успех':'Вы робот')
// switch (true) {
//     case a ==='Я не робот' :
//     case Number(a) === 22:
//         console.log('Успех');
//         break;
//     default:
//         console.log('Вы робот!')
//         break;
// }


// const balance = 1002;
// const bonusBalance = 111;
// const isBanned = true;
// const isExist = true;
// const isSelling = true;
// console.log(((balance > 1000 || bonusBalance > 100) && isBanned && isExist && isSelling) ? 'Можете приобрести игру':'Вы не можете приобрести игру' )

const pokupka = (age, rabota, money) => {
    if (money >= 2000){
        return true
    }
    else if (money + functionMoney(age,rabota) >= 2000){
        return true
    }
    return false
}

function functionMoney(age,rabota){
    if (age >= 24 && rabota){
        return 500
    }
    else if (age >= 24) {
        return 100
    }
    return 0
}

console.log(pokupka(27, false, 1899))