// JavaScript File

window.onload = function() {
    
    var lookUpBtn = document.getElementById("lookup");
    var result = document.getElementById("result");
    var httpRequest;
    httpRequest = new XMLHttpRequest();
    
    lookUpBtn.addEventListener('click', function(e) {
        
        e.preventDefault();
        if (document.getElementById("check").checked)
        {
           var url = "world.php?all=true";
           httpRequest.onreadystatechange = infoCountry;
        }
        else if (document.getElementById("country").value)
        {
            var inputdata = document.getElementById("country").value;
            url = "world.php?country=" + "" + inputdata; 
            httpRequest.onreadystatechange = infoCountry;
        }
        else {
            url = "world.php";
            httpRequest.onreadystatechange = noInfoCountry;
        }
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
    
   function noInfoCountry() {
       if (httpRequest.readyState === XMLHttpRequest.DONE)
        {
            if (httpRequest.status === 200)
            {
                result.innerHTML = "";
            }
        }
        
    }
    
};





