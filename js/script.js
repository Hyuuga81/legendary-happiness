const content = document.querySelector('main');
const success = document.querySelector('.success');
const subscribe = document.querySelector('.subscribe');
const dismiss = document.querySelector('.dismiss');
const email = document.querySelector('#email');

const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

subscribe.addEventListener('click', (e) => {
        e.preventDefault();
        content.classList.add('hide');
        success.classList.remove('hide');
        console.log('click');    
});

dismiss.addEventListener('click', (e) => {
    e.preventDefault();
    success.classList.add('hide');
    content.classList.remove('hide');
});