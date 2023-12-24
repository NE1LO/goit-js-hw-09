const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', onformRefInput);
const localStorageKey = 'feedback-form-state';

const inputData = {
  email: '',
  message: '',
};

function onformRefInput(event) {
  if (event.target.type === 'email') {
    inputData.email = event.target.value;
  } else if (event.target.type === 'textarea') {
    inputData.message = event.target.value;
  }

  const inputDataJSON = JSON.stringify(inputData);

  localStorage.setItem(localStorageKey, inputDataJSON);
}

const savedInputData = localStorage.getItem(localStorageKey);
const parsedInputData = JSON.parse(savedInputData);

const textarea = formRef.elements.message;
const email = formRef.elements.email;

window.addEventListener('load', event => {
  if (parsedInputData) {
    textarea.value = parsedInputData.message;
    email.value = parsedInputData.email;
    inputData.email = parsedInputData.email;
    inputData.message = parsedInputData.message;
  }
});

formRef.addEventListener('submit', e => {
  e.preventDefault();
  inputData.message = inputData.message.trim();
  localStorage.removeItem(localStorageKey);
  inputData.email = '';
  inputData.message = '';
  formRef.reset();
});
