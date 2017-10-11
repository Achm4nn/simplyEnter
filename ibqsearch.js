/* /* 

/**
 * @param {Event} e 
 */
////function formHandler1(e) {

//  e.preventDefault();

 // goProcess1();

//} */
 //*/

function setup() {

  var input = document.getElementById("process");

  input.onclick = function (e) {
    input.value = '';
  };

  var form = document.getElementById('jobProcessForm');

  form.onsubmit = formHandler1;

}

function goProcess() {
  var jobNumberInput = document.getElementById("process");

  var baseHref = location.protocol + '//bwonline/JobProcess/Default.aspx?id=';

  var extHref = jobNumberInput.value;
  console.log(jobNumberInput + " Base: " + baseHref + " ext: " + extHref );

  if (extHref == '') {
    alert("You can't search using a blank field, as it makes it extremely difficult\nfor InfoDoc to find any results.\n\nPlease enter a full Project Id.");
  }
  else {
    window.open(baseHref + extHref);
  }

}

setup();
