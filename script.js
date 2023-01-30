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

// const pokupka = (age, rabota, money) => {
//     if (money >= 2000){
//         return true
//     }
//     else if (money + functionMoney(age,rabota) >= 2000){
//         return true
//     }
//     return false
// }

// function functionMoney(age,rabota){
//     if (age >= 24 && rabota){
//         return 500
//     }
//     else if (age >= 24) {
//         return 100
//     }
//     return 0
// }

// console.log(pokupka(27, false, 1899))

// const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4']

// function addTask(task){
//     tasks.push(task) 
//     return tasks 
// }

// function deleteTask(task){
//     tasks.splice(tasks.indexOf(task),1)
//     return tasks
// }

// function updateTask(task){
//     const oldTask = tasks[tasks.indexOf(task)]
//     tasks.splice(tasks.indexOf(task),1)
//     tasks.unshift(oldTask)
//     return tasks
// }

// console.log(addTask('Task 5'))
// console.log(deleteTask('Task 1'))
// console.log(updateTask('Task 5'))



// 

// const mas = ['!', 'JS', 'люблю', 'Я' ]

// for (let i = mas.length - 1; i >= 0; i--) {
//     console.log(mas[i])
// }

// const users = [
//     {name: 'Сашка', age: 20},
//     {name: 'Алинка', age: 21},
//     {name: 'Лилька', age: 16},
//     {name: 'Макс', age: 2}
// ]

// console.log(users.sort((a, b) => a.age - b.age))

// const users = [
//     {
//         name: 'Сашка',
//         surname: 'Ляпанов',
//         age: 20,
//         skills: ['Джава-разработчик','Спортсмен']
//     },
//     {
//         name: 'Алинка',
//         surname: 'Белова',
//         age: 20,
//         skills: ['Frontend-разработчик','Дизайн']
//     }
// ]

// const updateUsers = users.map(user => {
//     return {
//         fullname: `${user.name}` + ' ' + `${user.surname}`,
//         skillNum: user.skills.length
//     }
// })
// console.log(updateUsers)

// const wallet = { 
//     balance: 0,
//     operations: [],
//     bigBalance: function(money, nameOperation){
//         this.balance += money;
//         this.operations.push({ 
//                 reason: `${nameOperation}`,
//                 sum: money
//             });
//         return true
//     },
//     minBalance: function(money, nameOperation) {
//         if(this.balance - money >= 0) {
//             this.balance -= money,
//             this.operations.push({ 
//                     reason: `${nameOperation}`,
//                     sum: money
//                 });
//             return true
//         } else {
//             return false
//         }
//     },
//     allOperation: function() {
//         return this.operations.length
//     }
// }

// console.log(wallet.bigBalance(1000, 'Зарплата'));
// console.log(`Текущий баланс: ${wallet.balance}`);
// console.log(wallet.minBalance(200, 'Уплата налогов'));
// console.log(`Текущий баланс: ${wallet.balance}`);
// console.log(`Количество операций: ${wallet.allOperation()}`)

// const company = {
//     name: 'ООО Агро',
//     employees: [
//         {
//             name: 'Света',
//             position: 'Разработчик',
//         },
//         {
//             name: 'Диана',
//             position: 'Разработчик',
//         },
//         {
//             name: 'Дима',
//             position: 'Разработчик',
//         },
//     ],
//     ceo: {
//         name: 'Вася',
//     },
//     nameCompany: function () {
//         return `${this.name}`
//     },
//     ceoName: function(){
//         return `${this.ceo.name}`
//     },
//     nameEmployees: function(){
//         const employees = this.employees.map(el => el.name)
//         return employees
//     }
// }

// console.log(company.nameCompany())
// console.log(company.ceoName())
// console.log(company.nameEmployees())

// function a() {
//     console.log(arguments[0]);
// }
// a(1);

// function c() {
//     function b() {
//         console.log(this);
//     }
//     b()
// }
// c()


// const user = {
//     name: 'Alina',
//     surname: 'Belova',
//     email: 'alinka@mail.ru',
//     password: '1111'    
// }

// // const newPas = '2222'

// function removePassword (reset, newPass = undefined) {
//     if (reset) {
//         this.password = undefined,
//         console.log(`Пароль пользователя ${this.name} был удален. Текущий пароль ${this.password}`)
//     } else {
//         this.password = newPass,
//         console.log (`Пароль пользователя ${this.name} был изменен. Текущий пароль ${this.password}`)
//     }
// }

// removePassword.call(user, true);
// removePassword.call(user, false, 3333);
// removePassword.apply(user, [true]);
// removePassword.apply(user, [false, 4444]);
// const removePass = removePassword.bind(user);
// removePass(true);
// removePass(false, 5555);


const userInfo = {
    balance: 0,
    operations: 0,
    increse(sum) {
        this.balance += sum;
        this.operations++;
    }
}

function user() {
    const userObj = userInfo;
    return function() {
        return userObj;
    }
}

const user1 = user();
user1().increse(100);
user1().increse(100);
console.log(user1())

