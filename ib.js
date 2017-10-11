function formHandler(event) {

    event.preventDefault();

    doSearch();

}


function jobProcessing() {


    //console.log("hello");

    var input1 = document.getElementById("field1");
    console.log(input);
    /* 
        input.onclick = function () {
    
            input.value = '';
           
    
        }
        var form = document.getElementById('jobProcessForm'); */

    form.onsubmit = formHandler1
}
console.log("Error")