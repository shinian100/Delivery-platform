$(function(){
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(html){
            $(html).replaceAll("#footer");
            $(`<link rel="stylesheet" href="../css/footer.css"/>`).appendTo("head")
        }
    })
});