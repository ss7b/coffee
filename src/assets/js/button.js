$(function(){
    var qt = $(".value-box");
    var qtval = $(".value-box").val();
    $(".dec").on("click",function(){
        qt.val(qtval--)
        if(qtval < 1){
        qtval= 0;
        }
    })
    $(".inc").on("click",function(){
        qt.val(qtval++)
    })
})