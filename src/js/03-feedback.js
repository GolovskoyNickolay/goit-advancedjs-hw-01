import throttle from 'lodash.throttle';

const elements = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('[name="email"]'),
  messageInput: document.querySelector('[name="message"]'),
};

const FORM_KEY = 'feedback-form-state';
const THROTTLE_INTERVAL = 500;

function setFormData() {
  const formData = {
    email: elements.emailInput.value,
    message: elements.messageInput.value,
  };

  try {
    localStorage.setItem(FORM_KEY, JSON.stringify(formData));
  } catch (error) {
    console.error(`Failed to save data to localStorage: ${error.message}`);
  }
}

function getFormData() {
  try {
    const savedFormData = localStorage.getItem(FORM_KEY);
    return savedFormData ? JSON.parse(savedFormData) : null;
  } catch (error) {
    console.error(
      `Failed to retrieve data from localStorage: ${error.message}`
    );
    return null;
  }
}

function resetFormAndRemoveData(event) {
  event.preventDefault();

  if (elements.emailInput.value && elements.messageInput.value) {
    const formData = {
      email: elements.emailInput.value,
      message: elements.messageInput.value,
    };

    console.log('Submitted form data:', formData);
    elements.form.reset();

    try {
      localStorage.removeItem(FORM_KEY);
    } catch (error) {
      console.error(
        `Failed to remove data from localStorage: ${error.message}`
      );
    }
  } else {
    console.error('All form fields must be filled out');
  }
}

const throttledSetFormData = throttle(setFormData, THROTTLE_INTERVAL);

elements.form.addEventListener('input', throttledSetFormData);
elements.form.addEventListener('submit', resetFormAndRemoveData);

const savedFormData = getFormData();
if (savedFormData) {
  elements.emailInput.value = savedFormData.email || '';
  elements.messageInput.value = savedFormData.message || '';
}
