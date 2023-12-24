const form = document.querySelector('.feedback-form');
const feedbackKey = 'feedback-form';
const inputValue = {
  email: '',
  message: '',
};

const parse = JSON.parse(localStorage.getItem(feedbackKey));
if (parse) {
  inputValue.email = parse.email;
  inputValue.message = parse.message;
  form.elements.email.value = parse.email;
  form.elements.message.value = parse.message;
}

form.addEventListener('input', e => {
  let eType = e.target.nodeName;
  if ((eType = 'INPUT')) {
    inputValue.email = e.target.value.trim();
  }
  if ((eType = 'TEXTAREA')) {
    inputValue.message = e.target.value.trim();
  }
  localStorage.setItem(feedbackKey, JSON.stringify(inputValue));
});

form.addEventListener('submit', e => {
  if (inputValue.email != '' && inputValue.message != '') {
    e.preventDefault;
    console.log(inputValue);
    localStorage.removeItem(feedbackKey);
    form.reset();
  }
});
