

function setup() {

  var btn = document.getElementById('jobnumberbtn');

  btn.addEventListener('click', function handler(e) {
    goProcess();
  });

  document.addEventListener('keypress', function(e){

    e.keyCode
  })

}

function goProcess() {
  var jobNumberInput = document.getElementById("input#process");

  var baseHref = location.protocol + '//bwonline/JobProcess/Default.aspx?id=';

  var extHref = jobNumberInput.value;

  if (extHref == '') {
    alert("You can't search using a blank field, as it makes it extremely difficult\nfor InfoDoc to find any results.\n\nPlease enter a full Project Id.");
  }
  else {
    window.open(baseHref + extHref);
  }

}


setup();
