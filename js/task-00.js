const BUTTON = document.querySelector('button');

const TOGGLE = () => {
    BUTTON.setAttribute('aria-pressed', BUTTON.matches('[aria-pressed=true]') ? false : true);
    document.body.classList.toggle('dark');
};

BUTTON.addEventListener('click', TOGGLE);
