let scrn = document.getElementById("output");

// display Number
function display(num) {
  scrn.value += num;
}

//calculate Number
function calculate() {
  try {
    scrn.value = eval(scrn.value);
  } catch (e) {
    swal("Warning", "Invalid Value ⚠️⚠️⚠️", "warning");
  }
}

//clear screen
function Clear() {
  scrn.value = "";
}

//delete Number
function del() {
  scrn.value = scrn.value.slice(0, -1);
}
