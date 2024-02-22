const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validateRegistor(
  name,
  sourname,
  age,
  email,
  username,
  password,
  repassword
) {
  if (name.value.trim().length < 3) {
    alert("Name is empty");
    name.focus();
    return false;
  }
  if (Number(name.value)) {
    alert("Name is should not be number");
    name.focus();
    return false;
  }
  if (sourname.value.trim().length < 3) {
    alert("Sourname is empty");
    sourname.focus();
    return false;
  }
  if (age.value) {
    alert("Age is empty");
    age.focus();
    return false;
  }
  if (age.value < 0 || age.value > 200) {
    alert("This age much more");
    age.focus();
    return false;
  }
  if (!Number(age.value)) {
    alert("Age need to be number");
    age.focus();
    return false;
  }
  if (email.value.trim().length < 3) {
    alert("Email is empty");
    email.focus();
    return false;
  }
  if (!validateEmail(email.value)) {
    alert("Email is not");
    email.focus();
    return false;
  }
  if (username.value.trim().length < 4) {
    alert("Username is empty");
    username.focus();
    return false;
  }
  if (password.value.trim().length < 4) {
    alert("Password is empty");
    password.focus();
    return false;
  }
  if (repassword.value.trim().length < 4) {
    alert("Repassword is empty");
    repassword.focus();
    return false;
  }
  if (password.value != repassword.value) {
    alert("Password and repassword is not fit");
    password.focus();
    repassword.value = "";
    return false;
  }

  return true;
}

function getData() {
    let data = [];
  
    if (localStorage.getItem("users")) {
      data = JSON.parse(localStorage.getItem("users"));
    }
  
    return data;
  }

export { validateRegistor, getData};
