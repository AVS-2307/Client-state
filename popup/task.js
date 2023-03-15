const modalopen = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

function handleModalOpen() {
    modalopen.classList.add('modal_active');
};

function handleModalClose() {
    modalopen.classList.remove('modal_active');
    localStorage.setItem('modal_closed', 'true');
}; 

if (localStorage.getItem('modal_closed') !== 'true') {
    handleModalOpen();
};

closeModal.addEventListener('click', handleModalClose);
