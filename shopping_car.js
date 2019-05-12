(function() {
    var table = document.getElementById("t1");
    var btns = table.getElementsByTagName("button");
    for (var btn of btns) {
        btn.onclick = function () {
            var btn=this;
            var span = btn.parentNode.children[1];
            var n = parseInt(span.innerHTML);
            if (btn.innerHTML == "+") {
                n++;
                // console.log(n)
            }else if(n>=1) {
                n--;
                // console.log(n)
            }
            span.innerHTML = n;
            // 小计
            var price=btn.parentNode.previousElementSibling;
            var cell=btn.parentNode.nextElementSibling;
            var s=parseFloat(price.innerHTML.slice(1)*n).toFixed(2);
            cell.innerHTML=`￥${s}`;
          // 总计
            var tds=table.querySelectorAll("tbody td:last-child");
             var total=0;
             var score=0;
            for(var td of tds){
                total+=parseFloat(td.innerHTML.slice(1));
                score+=parseFloat(td.innerHTML.slice(1));
            }
            var span=document.getElementById("total").innerHTML=`￥${total.toFixed(2)}`;
            var em=document.getElementById("score").innerHTML=`${score}`;
        };
    }
})();
(function(){
   var table=document.getElementById("t1");
   var chbAll=table.previousElementSibling;
   var chbs=table.querySelectorAll("table>tbody>tr>td:first-child>input");
   console.log(chbAll);
   chbAll.onclick=function(){
       for(var chb of chbs){
           chb.checked=chbAll.checked;
       }
   };
   for(var chb of chbs) {
       chb.onclick = function () {
            if(chb.checked==false){
                chbAll.checked=false;
            }else{
                var unchecked=table.querySelector("table>tbody>tr>td:first-child>input:not(:checked)");
                if(unchecked==null){
                    chbAll.checked=true;
                }
            }
       }
   }
     var car=document.getElementById("car");
     car.onclick=function(){
        for(var chb of chbs){
            chb.checked=car.checked;
            chbAll.checked=car.checked;
        }
     }
})();