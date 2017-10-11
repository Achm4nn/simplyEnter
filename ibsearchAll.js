/* Rewritten plus_menu by Andrew Hase, so that we may simply
hit enter and the active box will be searched rather than the
cumbersome type the use mouse to hit "Go"
 */

//Job Process Centre

function formHandler1(event) {
    event.preventDefault();
    goProcess();
}



function jobProcess() {
    var input = document.getElementById("process");
    input.onclick = function () {
        input.value = '';
    }
    var form = document.getElementById('jobProcessForm');
    form.onsubmit = formHandler1
}
function goProcess() {
    var jobNumberInput = document.getElementById('process');
    var baseHref = location.protocol + '//bwonline/JobProcess/Default.aspx?id=';
    var extHref = jobNumberInput.value;
    if (extHref == '') {
        alert("You can't search using blank field, this makes it pretty hard for \n the program to figure out what you want to search =)");

    } else {
        window.open(baseHref + extHref);
    }
}