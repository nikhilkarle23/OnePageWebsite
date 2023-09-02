const signUpButton = document.getElementById('customeSignUp');
const signInButton = document.getElementById('customSignIn');
const container = document.getElementById('custom-container');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));