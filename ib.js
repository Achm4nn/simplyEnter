/* function formHandler(event) {

    event.preventDefault();

    test();

}


function jobProcessing() {


    //console.log("hello");

    var input1 = document.getElementById("field1");
    var input2 = document.getElementById("field2")
    
    
        input.onclick = function () {
    
            input.value = '';
           
    
        }
        var form = document.getElementById('jobProcessForm');

    form.onsubmit = formHandler1
}
function test(){
    console.log(input1 + input2);
} */
function test(){
var input1 = document.getElementById("field1").textContent;
var input2 = document.getElementById("field2");
console.log(input1 + input2.value);
console.log("HelloWorld");

}
test();
