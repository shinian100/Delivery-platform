(function(){
    var d1=document.getElementById("d1");
    var d2=document.getElementById("d2");
    var d3=document.getElementById("d3");
    var d4=document.getElementById("d4");
    var d5=document.getElementById("d5");
    var d6=document.getElementById("d6");
    var d7=document.getElementById("d7");
    var d8=document.getElementById("d8");
        d2.onclick=function() {
            d3.style.display = "none";
            d4.style.display = "block";
        };
        d1.onclick=function() {
            d3.style.display = "block";
            d4.style.display = "none";
        };
      d6.onclick=function() {
        d5.style.display = "block";
        d8.style.display = "none";
    };
    d7.onclick=function() {
        d8.style.display = "block";
        d5.style.display = "none";
    }
})();
