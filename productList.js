(function(){
    var imgs=document.querySelectorAll(".container-fluid>div>div>div>div>a>img");
    var d3=document.getElementById("d3");
    var d4=document.getElementById("d4");
    var d5=document.getElementById("d5");
    for(var img of imgs){
        img.onclick=function(){
            // var img=this;

                d3.style.display="block";
                d4.style.display="block";
                d5.style.display="block";

        };
    }
    var divs=document.querySelectorAll(".container-fluid>div>div>div>div>a>.background");
    for(var div of divs) {
        div.onclick = function () {
           // var div=this;
           //  var d3=document.getElementById("d3");
           //  var d4=document.getElementById("d4");
           //  var d5=document.getElementById("d5");
            d3.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
        }
    }
})();
