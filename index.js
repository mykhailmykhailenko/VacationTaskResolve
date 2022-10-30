/* TODO:
Частина 1:
Динамічно створити картки юзерів з даними, що містяться в масиві userData
Приклад вигляду картки юзера:
https://pbs.twimg.com/media/EIopEQ6XYAEqzUk.jpg
(всі картки одночасно на екрані)
В html тільки <div id="root"></div>
Частина 2:
За натиснення на картку юзера картка має підсвітитися червоним бордером - картка "обрана"
Якщо обрати іншу картку, то з попередньої картки підсвітка знімається.
Тобто одночасно може бути обрана тільки одна картка.
*/

// console.log(userData);

const root = document.querySelector('#root');

function logger(event) {
    const currentUserCard = event.currentTarget;
    currentUserCard.style.border = '3px solid red';
    currentUserCard.removeEventListener('click', logger);
 }

function createUser(obj) {

    const div = document.createElement('div');
    div.classList.add('userCard');

    const img = document.createElement('img');
    img.setAttribute('src', obj.profilePicture);
    img.classList.add('userPhoto');

    const h1 = document.createElement('h1');
    h1.innerText = `${obj.name}`;
    h1.classList.add('userName');

    const p = document.createElement('p');
    p.innerText = `${obj.description}`;
    p.classList.add('userInfo');

    const button = document.createElement('button');
    button.innerText = "Connect";
    button.classList.add('btn');

    div.append(img, h1, p, button);

    return div
}


const userArray = userData.map(createUser);


for (let user of userArray) {
    user.addEventListener ('click', logger);
}

function logger (event) {
    for (let user of userArray) {
        user.style.border = '1px solid black'
    }
    event.currentTarget.style.border = '5px solid red'  
}

root.append(...userArray);