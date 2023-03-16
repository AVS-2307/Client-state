const modalopen = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
    console.log(document.cookie);
};

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '=')) //находим имя cookie
    console.log(cookie.substr(name.length + 1)) 
    return cookie.substr(name.length + 1) //оставляем только значение cookie
};


function handleModalOpen() {
    modalopen.classList.add('modal_active');
};

function handleModalClose() {
    modalopen.classList.remove('modal_active');    
    setCookie('modal_closed', true);

}; 

if (getCookie('modal_closed') !== true) {
    handleModalOpen();
};

closeModal.addEventListener('click', handleModalClose);
