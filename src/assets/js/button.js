$(function(){
    $(".dec").on("click",function(){
        // اختيار صف المنتج وزيادة العداد
        let val = $(this).attr("data-val");
        let qt = $(val);
        let qtval = $(val).val();
        console.log(qtval);

        qt.val(--qtval);

        // ====== تديث الاسعار  
        totleProductPrice($(this),qtval,qt)
        allPrice()
    })

    $(".inc").on("click",function(){
        // اختيار صف المنتج وزيادة العداد
        let val = $(this).attr("data-val");
        let qt = $(val);
        let qtval = $(val).val();
        console.log(qtval)
        
        qt.val(++qtval)

        // ====== تحديث الاسعار  
        totleProductPrice($(this),qtval)
        allPrice()

    })

    // حذف المنتج من  السلة
    $(".del").on("click",function(){
        $(this).parent().remove()
        allPrice()
    })

    allPrice()

    // تحديث السعر الاجمالي للمنتج ع حسب الكمية
    function totleProductPrice(qtbtn, qtval, qt){
        let row = $(qtbtn).attr("data-row");
        let price = $( `${row} .price`).text()
        
        $( `${row} .totle-price`).text((qtval)* parseInt(price) + "$");

        if(qtval < 1){
            qt.val(1)
            $( `${row} .totle-price`).text("17" + "$")
        }
    }
    // تحديث السعر الاجمالي لجميع المنتجات
    function allPrice(){
        let allProductPrice = 0;
        $("[data-produc-info]").each(function(){
            let quantity = $(this).find("[data-product-quantity]").val();
            let price = $(this).attr("data-product-price");
            let totalePrice = quantity * price;
            allProductPrice = allProductPrice + totalePrice;
        })
        $("#allprice").text(allProductPrice +"$")
    }
   
})

