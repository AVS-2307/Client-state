const form = document.getElementById('signin__form');
const welcome = document.querySelector('.welcome');
const userName = document.getElementById('user_id');
let xhr = new XMLHttpRequest();

function auth() {
    form.addEventListener('submit', (e) => {
        const formData = new FormData(document.forms.signin__form);    
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        xhr.responseType = 'json'; // дальнейший парсинг json в responce не нужен  
        xhr.send(formData);
        form.reset();
        e.preventDefault();    
    });    
};

function greeting() {
    xhr.addEventListener('load', () => {        
        let answer = xhr.response;     
        if (answer.success) {    
            localStorage.setItem("userName", answer.user_id);
            greetingAfterPageReload();            
        }
        else {
            alert('Неверные логин/пароль');
            welcome.classList.remove('welcome_active');
            form.reset();
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