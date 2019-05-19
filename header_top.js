(function(){
    var img=document.querySelector("div.container-fluid>div.row>div>ul>li>a>img");
    var d1=document.getElementById("d1");
    var d2=document.getElementById("d2");
    img.onclick=function(){
        // var img=this;
        if(img.value==="../images/submit.png"){
            d2.style.display="none";
            // d1.style.display="block";
        }else{
            // d1.style.display="none";
            d2.style.display="block";
        }
    };
    var img_one=document.querySelector("div.container-fluid>div>form>a>img");
    img_one.onclick =function(){
        // var img_one=this;
        if(img_one.value==="../images/exits.png"){
            // d1.style.display="none";
            d2.style.display="block";
        }else{
            d2.style.display="none";
            // d1.style.display="block";
        }
    };
})();