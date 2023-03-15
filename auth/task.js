const form = document.getElementById('signin__form');
const welcome = document.querySelector('.welcome');
const userName = document.getElementById('user_id');
let xhr = new XMLHttpRequest();

function auth() {
form.addEventListener('submit', (e) => {
    const formData = new FormData(document.forms.signin__form);    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');    
    xhr.send(formData);
    e.preventDefault();    
});
}

function greeting() {
    xhr.addEventListener('load', () => {
        let answer = JSON.parse(xhr.responseText);        
        if (answer.success || localStorage.getItem("userName") != null) {          
            welcome.classList.add('welcome_active');
            localStorage.setItem("userName", answer.user_id);
            userName.innerText = localStorage.getItem("userName");
        }
        else {
            alert('Неверные логин/пароль')
        };
    });
};

function greetingAfterPageReload() {
    if (localStorage.getItem("userName") != null) {
        welcome.classList.add('welcome_active');
        userName.innerText = localStorage.getItem("userName");
    };
};

auth();
greeting();
greetingAfterPageReload();