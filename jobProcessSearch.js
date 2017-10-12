/* Rewritten plus_menu by Andrew Hase, so that we may simply
hit enter and the active box will be searched rather than the
cumbersome type the use mouse to hit "Go"
 */

//Job Process Centre
//Handles the forms native inbuilt functions
function formHandler1(event) {

    event.preventDefault();



    goProcess();


}


//getting the value from the input
function jobProcessing() {
    

    //console.log("hello");

    var input = document.getElementById("process");

    input.onclick = function () {

        input.value = '';
       

    }
    var form = document.getElementById('jobProcessForm');

    form.onsubmit = formHandler1
}
//processing the value and adding the url search. 
function goProcess() {

    var jobNumberInput = document.getElementById('process');
    //used location.protocol so that if we change everything to https it will still work. 
    var baseHref = location.protocol + '//bwonline/JobProcess/Default.aspx?id=';

    var extHref = jobNumberInput.value;

    // console.log(jobNumberInput + " Base: " + baseHref + " ext: " + extHref);

    //console.log('Hello Wolrd');

    if (extHref == '') {

        alert("You can't search using blank field, this makes it pretty hard for \n the program to figure out what you want to search =)");

    } else {

        window.open(baseHref + extHref);
    }
}

//So it turns out I wasn't calling the function. 
jobProcessing();






