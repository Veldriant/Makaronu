input.onblur = function() {
  if (!input.value.includes("[A-Z][A-Za-z]")) {
    input.classList.add('invalid');
    error.innerHTML = 'completa correttamente il campo: nome'
  }
};

input.onfocus = function() {
  if (this.classList.contains('invalid')) {

    this.classList.remove('invalid');
    error.innerHTML = " ";
  }
};

input1.onblur = function() {
  if (!input1.value.includes('[A-Z][A-Za-z]')) {
    input1.classList.add('invalid');
    error1.innerHTML = 'completa correttamente il campo: cognome'
  }
};

input1.onfocus = function() {
  if (this.classList.contains('invalid')) {

    this.classList.remove('invalid');
    error1.innerHTML = " ";
  }
};


input2.onblur = function() {
  if (!input2.value.includes('@')) {
    input2.classList.add('invalid');
    error2.innerHTML = 'completa correttamente il campo: email'
  }
};

input2.onfocus = function() {
  if (this.classList.contains('invalid')) {

    this.classList.remove('invalid');
    error2.innerHTML = " ";
  }
};

//
// let btn = document.querySelector("#item1");
// let mb = document.querySelector(".form__lable");
//
// btn.addEventListener('click', function () {
//   mb.classList.add('newLable')
// })();
