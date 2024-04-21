const content = document.querySelector('main');
const success = document.querySelector('.success');
const subscribe = document.querySelector('.subscribe');
const dismiss = document.querySelector('.dismiss');
const email = document.querySelector('#email');
const message = document.querySelector('.message');

const emailRegex = /^([a-z\d\.-])+@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

subscribe.addEventListener('click', (e) => {
    if (email.value.match(emailRegex)) {
        e.preventDefault();
        content.classList.add('hide');
        success.classList.remove('hide');
    } else {
        e.preventDefault();
        message.classList.remove('hide');
    }
          
});

dismiss.addEventListener('click', (e) => {
    e.preventDefault();
    success.classList.add('hide');
    content.classList.remove('hide');
    message.classList.add('hide');
    email.value = "";
});