// Here starts Infodoc Search

function formHandler(event) {

    event.preventDefault();

    //goInfobase();
    doSearch();

}
var form = document.getElementById('infobaseForm');

form.addEventListener('submit', formHandler);

function doSearch() {
    //alert('test1')
    var R1 = document.getElementsByName('R1');
    for (i = 0; i < R1.length; i++) {
        if (R1[i].checked) {
            srchType = R1[i].value
        }
    }
    // Contact Search
    if (srchType == 'contact') {
        value1 = 'ContactName=' + field1.value
        if (field1.value == '') {
            value1 = ""
        }
        if (field1.value == 'Contact Name') {
            value1 = ""
        }

        value2 = 'OrganisationName=' + field2.value
        if (field2.value == '') {
            value2 = ""
        }
        if (field2.value == 'Contact Organisation') {
            value2 = ""
        }

        baseHref = 'http://bwonline/infobase/contacts/results_contacts.aspx?'
        extHref = ''
        if (value1 != '') {
            if (value2 != '') {
                extHref = value1 + '&' + value2
            }
            else {
                extHref = value1
            }
        }
        else {
            if (value2 != '') {
                extHref = value2
            }
        }

        if (extHref == '') {
            alert('You can\'t search using a blank field, as it makes it extremely\ndifficult for InfoBase to find any results.\n\nPlease enter a search string and try again.')
        }
        else {
            window.open(baseHref + extHref + '&DisplayPage=1')
        }
    }
    // Organisation Search
    if (srchType == 'org') {
        value1 = 'OrganisationName=' + field1.value
        if (field1.value == '') {
            value1 = ""
        }
        if (field1.value == 'Organisation Name') {
            value1 = ""
        }

        value2 = 'IronbarkCode=' + field2.value
        if (field2.value == '') {
            value2 = ""
        }
        if (field2.value == 'Ironbark Client Code') {
            value2 = ""
        }

        baseHref = 'http://bwonline/infobase/organisations/results_organisations.aspx?'
        extHref = ''
        if (value1 != '') {
            if (value2 != '') {
                extHref = value1 + '&' + value2
            }
            else {
                extHref = value1
            }
        }
        else {
            if (value2 != '') {
                extHref = value2
            }
        }

        if (extHref == '') {
            alert('You can\'t search using a blank field, as it makes it extremely difficult\nfor InfoBase to find any results.\n\nPlease enter a search string and try again.')
        }
        else {
            window.open(baseHref + extHref + '&OrganisationType=All&DisplayPage=1')
        }
    }
    // Project Search
    if (srchType == 'proj') {

        value1 = 'ProjectNo=' + field1.value
        if (field1.value == '') {
            value1 = ""
        }
        if (field1.value == 'Project Number') {
            value1 = ""
        }

        value2 = 'ProjectName=' + field2.value
        if (field2.value == '') {
            value2 = ""
        }
        if (field2.value == 'Project Name') {
            value2 = ""
        }

        baseHref = 'http://bwonline/infobase/projects/results_projects.aspx?'
        extHref = ''
        if (value1 != '') {
            if (value2 != '') {
                extHref = value1 + '&' + value2
            }
            else {
                extHref = value1
            }
        }
        else {
            if (value2 != '') {
                extHref = value2
            }
        }

        if (extHref == '') {
            alert('You can\'t search using a blank field, as it makes it extremely difficult\nfor InfoBase to find any results.\n\nPlease enter a search string and try again.');
            console.log("Hahahahahahahahahahaha, you were mildly inconvenienced!")
        }
        else {
            window.open(baseHref + extHref + '&KeyWords=&prjorder=id&prjactive=yes&prjarchived=yes&DisplayPage=1&Zsearch=Start+Search')
        }
    }
}
console.log("What do you want? Why are you even looking here! Stay out!");
console.log("Want to know what I think, you should type \n doSearch();\n Go on, you know you want to :)")