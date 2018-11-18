// JavaScript File

window.onload = function() {
    
    var lookUpBtn = document.getElementById("lookup");
    var result = document.getElementById("result");
    var httpRequest;
    httpRequest = new XMLHttpRequest();
    
    lookUpBtn.addEventListener('click', function(e) {
        
        e.preventDefault();
        var inputdata = document.getElementById("country").value;
        var url = "world.php?country=" + "" + inputdata;
        httpRequest.onreadystatechange = infoCountry;
        httpRequest.open('GET', url);
        httpRequest.send();
        
    });
    
    function infoCountry() {
        if (httpRequest.readyState === XMLHttpRequest.DONE)
        {
            if (httpRequest.status === 200)
            {
                var response = httpRequest.responseText;
                //alert(response); /*Used to make information about the country appears as an alert*/
                result.innerHTML = response;
            }
        }
    }
    
};





