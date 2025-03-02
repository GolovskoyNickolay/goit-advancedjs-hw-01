import throttle from 'lodash.throttle';

const elements = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('[name="email"]'),
  messageInput: document.querySelector('[name="message"]'),
};

const FORM_KEY = 'feedback-form-state';
const THROTTLE_INTERVAL = 500;

let formData = {
  email: '',
  message: '',
};

function updateLocalStorage() {
  try {
    localStorage.setItem(FORM_KEY, JSON.stringify(formData));
  } catch (error) {
    console.error(`Failed to save data to localStorage: ${error.message}`);
  }
}

function loadFormData() {
  try {
    const savedData = localStorage.getItem(FORM_KEY);
    if (savedData) {
      formData = JSON.parse(savedData);
      elements.emailInput.value = formData.email || '';
      elements.messageInput.value = formData.message || '';
    }
  } catch (error) {
    console.error(`Failed to load data from localStorage: ${error.message}`);
  }
}

function handleInput(event) {
  formData[event.target.name] = event.target.value;
  updateLocalStorage();
}

function handleSubmit(event) {
  event.preventDefault();

  if (!elements.emailInput.value || !elements.messageInput.value) {
    console.error('All form fields must be filled out');
    return;
  }

  console.log('Submitted form data:', formData);

  formData.email = '';
  formData.message = '';

  elements.form.reset();

  try {
    localStorage.removeItem(FORM_KEY);
  } catch (error) {
    console.error(`Failed to remove data from localStorage: ${error.message}`);
  }
}

elements.form.addEventListener('input', throttle(handleInput, THROTTLE_INTERVAL));
elements.form.addEventListener('submit', handleSubmit);

loadFormData();
