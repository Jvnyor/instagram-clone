const removeAccount = document.querySelector('.instagram-logout');
console.log(removeAccount);

const photo = document.querySelector('.profile-photo');

const continueAccount = document.querySelector('.instagram-login');

const divGroup = document.querySelector('.remove');

const removeElement = document.querySelector('.remove-element');

const removeElement1 = document.querySelector('.remove-element1');

const login = document.querySelector('#form-login');

const alterText = document.querySelector('.alter-text');
const alterText1 = document.querySelector('.alter-text1');

const alterColor = document.querySelector('.alter-text');

const removeColor = document.querySelector('.alter-text');

removeAccount.addEventListener('click', Account);

function Account() {
    login.classList.remove('inativo');
    login.classList.add('ativo');
    //divGroup.remove();
    divGroup.classList.add('margin-top');
    divGroup.classList.add('line');
    removeElement.remove();
    removeElement1.remove();
    alterColor.classList.add('alter-color');
    removeColor.classList.remove('not-account');
    alterText.innerHTML="Não tem uma conta?";
    alterText1.innerHTML="Cadastre-se";
    photo.remove();
    continueAccount.remove();
    removeAccount.remove();
}

