// Here starts Infodoc Search

function formHandler2(event) {
    
        event.preventDefault();
    
        goInfodoc();
    
    }
    
    function infodocProcessing() {
        var input = document.getElementById("infodocid");
    
        input.onclick = function () {
    
            input.value = '';
    
        }
    }
    
    var form = document.getElementById('infodocForm');
    
        form.onsubmit = formHandler2;
    
    
    function goInfodoc() {
    
        var jobNumberInput = document.getElementById('infodocid');
    
        var baseHref = location.protocol + '//bwonline/infodoc/start.aspx?ProjectId=';
    
        var extHref = jobNumberInput.value;
    
    
        if (extHref == '') {
    
            alert("You can't search using blank field, this makes it pretty hard for \n the program to figure out what you want to search =)");
    
        } else {
    
            window.open(baseHref + extHref);
        }
    }
    infodocProcessing();