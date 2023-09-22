//global variable
var xmlHttp = createXmlHttpRequest();

function createXmlHttpRequest() {
    var xmlHttp;
    //TE5 or IE6
    if (window.ActiveXObject) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            xmlHttp = false;
        }
    } else {
        try {
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            xmlHttp = false;
        }
    }

    if (!xmlHttp) {
        alert("ERROR CREATING XMLHTTPREQUEST OBJECT. ");
    } else {
        return xmlHttp;
    }
}

function process() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        name = encodeURIComponent(document.getElementById("username").value);
        xmlHttp.open("GET", "ajax.php?name=" + name, true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
    } else {
        setTimeout('process()', 1000);
    }
}

function handleServerResponse() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            var xmlResponse = xmlHttp.responseXML;
            var xmlDocumentElement = xmlResponse.documentElement;
            var helloeMessage = xmlDocumentElement.firstChild.data;

            document.getElementById("message").innerHTML = '<strong>' + helloeMessage + '</strong>';

            setTimeout('process()', 1000);
        } else {
            alert("There was problem in the Server. " + xmlHttp.statusText);
        }
    }
}