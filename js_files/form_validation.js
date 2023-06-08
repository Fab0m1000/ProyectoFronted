const my_form = document.querySelector('#myForm');
const input_username = document.querySelector('#txt-username');
const input_email = document.querySelector('#txt-email');
const input_password = document.querySelector('#txt-password');
const input_confirm_password = document.querySelector('#txt-password2');

//show input error message
function showError(input,message){
  const form_control = input.parentElement;
  form_control.className ='form-control error';
  const small = form_control.querySelector('small');
  small.innerText = message;
}

//show input success message
function showSuccess(input){
  const form_control = input.parentElement;
  form_control.className = 'form-control success';
}


//check if email is valid using regex
function checkEmail(input){
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(expression.test(input.value.trim())){
    showSuccess(input);
  }else{
    showError(input,'el correo no es válido');
  }
}

//function that returns the name of the field 
function getInputFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check required fields
function checkRequireFields(input_array){
  input_array.forEach(function(input){
      if(input.value.trim() === ''){
        showError(input,'este campo es requerido');
      }else{
        showSuccess(input);
      }
  });
}

//check input lenght
function checkInputLength(input, min,max){
  if(input.value.length < min){
      showError(input,`${getInputFieldName(input)} debe tener al menos ${min} caracteres`);
  }else if(input.value.length > max){
    showError(input,`${getInputFieldName(input)} no debe exceder ${max} caracteres`);
  }else{
    showSuccess(input);
  }
}

//check password match
function checkPasswordMatchWithAnotherPassword(input1,input2){
  if(input1.value !== input2.value){
    showError(input2,'Las contraseñas no coinciden');
  }
}

//function submit
my_form.addEventListener('submit',function(e){
  e.preventDefault();

  checkRequireFields([input_username, input_email,input_password,input_confirm_password]);
   checkInputLength(input_email,7,20);
   checkInputLength(input_username,4,15);
   checkEmail(input_email);
   checkPasswordMatchWithAnotherPassword(input_password,input_confirm_password);
 

   //clear fields
   my_form.reset();
   
});