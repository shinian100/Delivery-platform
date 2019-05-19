$(function(){
    $.ajax({
        url:"header_login.html",
        type:"get",
        success:function(html){
            $(html).replaceAll("#header_login");
            // $(`<link rel="stylesheet" href="../css/header_login.css"/>`).appendTo("head");
        }
    })
});
