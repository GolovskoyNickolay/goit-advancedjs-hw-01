import { save, load } from "./localStorage";
import iziToast from "izitoast";

document.body.style.fontFamily = "'Montserrat', sans-serif";
const form = document.querySelector("form");
const labels = document.querySelectorAll("label");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const submitButton = document.querySelector("button")

const formData = {
    email: '',
    message: '',
};

const fillFormField = () => {
    const formDataFromLS = load('feedback-form-state');

    if (formDataFromLS === undefined) {
        return;
    }

    const formDataFromLSKeys = Object.keys(formDataFromLS);

    formDataFromLSKeys.forEach(key => {
        form.elements[key].value = formDataFromLS[key];
        formData[key] = formDataFromLS[key];
    });

  console.log(formData);
};

fillFormField();

const onFormFieldChange = event => {
    const { target: formField } = event;

    const fieldName = formField.name;
    const fieldValue = formField.value;

    formData[fieldName] = fieldValue;

    save('feedback-form-state', formData);
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();

    const formDataValues = Object.values(formData);

    if (formDataValues.some(el => el === '')) {
        iziToast.error({
        message: 'Fill please all fields',
        position: 'topRight',
        });
        return;
    }
    
    console.log(formData);

    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
};

form.addEventListener('input', onFormFieldChange);
form.addEventListener('submit', onFeedbackFormSubmit);

form.style.display = "inline-flex";
form.style.padding = "24px";
form.style.flexDirection = "column";
form.style.gap = "8px";
form.style.borderRadius = "8px";
form.style.background = "#fff";

labels.forEach(label => {
    label.style.display = "flex";
    label.style.flexDirection = "column";
    label.style.gap = "8px";
    label.style.color = "#2e2f42";
    label.style.fontFamily = "'Montserrat', sans-serif";
    label.style.fontSize = "16px";
    label.style.fontStyle = "normal";
    label.style.fontWeight = "400";
    label.style.lineHeight = "24px";
    label.style.letterSpacing = "0.64px";
})

input.style.outline = "none";
input.style.width = "360px";
input.style.height = "40px";
input.style.borderRadius = "4px";
input.style.border = "1px solid #808080";
input.style.padding = "8px 16px";
input.style.fontFamily = "'Montserrat', sans-serif";

textarea.style.outline = "none";
textarea.style.width = "360px";
textarea.style.height = "80px";
textarea.style.borderRadius = "4px";
textarea.style.border = "1px solid #808080";
textarea.style.padding = "8px 16px";
textarea.style.fontFamily = "'Montserrat', sans-serif";

input.addEventListener("mouseenter", () => {
    input.style.border = "1px solid #000";
});
input.addEventListener("mouseleave", () => {
    input.style.border = "1px solid #808080";
});

textarea.addEventListener("mouseenter", () => {
    textarea.style.border = "1px solid #000";
});
textarea.addEventListener("mouseleave", () => {
    textarea.style.border = "1px solid #808080";
});

submitButton.style.outline = "none";
submitButton.style.marginTop = "8px";
submitButton.style.width = "86px";
submitButton.style.height = "40px";
submitButton.style.display = "flex";
submitButton.style.justifyContent = "center";
submitButton.style.alignItems = "center";
submitButton.style.padding = "8px 16px";
submitButton.style.borderRadius = "8px";
submitButton.style.border = "none";
submitButton.style.background = "#4E75FF";
submitButton.style.color = "#FFF";
submitButton.style.fontFamily = "'Montserrat', sans-serif";
submitButton.style.fontSize = "16px";
submitButton.style.fontStyle = "normal";
submitButton.style.fontWeight = "500";
submitButton.style.lineHeight = "24px";
submitButton.style.letterSpacing = "0.64px";

submitButton.addEventListener("mouseenter", () => {
    submitButton.style.background = "#6C8CFF";
});
submitButton.addEventListener("mouseleave", () => {
    submitButton.style.background = "#4E75FF";
});