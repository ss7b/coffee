$(function(){
    $(".singel-rate").each(function() {
        $(this).on("click",function(e){
            $(".singel-rate").each(function() {
                $(this).removeClass("active");
            })
            $(this).addClass("active");
        })
    });
})