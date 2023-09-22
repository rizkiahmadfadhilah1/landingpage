function handleGetFormData() {
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value;
    let zipCode = document.getElementById('zip-code').value;
    let status = document.getElementById('status').checked;
  
    return {
      name,
      email,
      city,
      zipCode,
      status
    }
  }
  
  function isNumber(input) {
    if (!isNaN(input)) {
      return true;
    } else {
      return false;
    }
  }
  
  function checkboxIsChecked() {
    return document.getElementById('status').checked;
  }
  
  function validateFormData(formData) {
    if (formData !== null && isNumber(formData.zipCode) && checkboxIsChecked()) {
      return true;
    } else {
      return false;
    }
  }
  
  const warningMessage = document.getElementById("warning");
  
  function submit() {
    if (validateFormData(handleGetFormData())) {
      warningMessage.innerHTML = ''
    } else {
      warningMessage.innerHTML = 'Periksa form anda sekali lagi'
    }
  }
  
  const myForm = document.getElementById("myForm");
  myForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    submit();
  });
  