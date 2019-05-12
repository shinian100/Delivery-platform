(function(){
    var div=document.getElementById("d_button");
    console.log(div);
    var btns=div.getElementsByTagName("button");
    console.log(btns);
    for(var btn of btns){
     btn.onclick=function(){
        var btn=this;
        var input=btn.parentNode.children[1];
         console.log(input);
        var n= parseInt(input.value);
         console.log(n);
        if(btn.innerHTML=="+"){
            n++;
            console.log(n);
        }else if(n>=1){
            n--;
            console.log(n);
        }
        input.value=n;
    }
    }
})();
