

function formHandler1(event) {

  event.preventDefault();

  goProcess1();
  
}

function setup() {

  var input = document.getElementById("process1");

  input.onclick = function () {
    input.value = '';
  };

  var form = document.getElementById('ourform1');

  form.onsubmit = formHandler1;

}

function goProcess1() {
  var jobNumberInput = document.getElementById("process1");

  var baseHref = location.protocol + '//bwonline/JobProcess1/Default.aspx?id=';

  var extHref = jobNumberInput.value;

  if (extHref == '') {
    alert("You can't search using a blank field, as it makes it extremely difficult\nfor InfoDoc to find any results.\n\nPlease enter a full Project Id.");
  }
  else {
    window.open(baseHref + extHref);
  }

}

setup();
