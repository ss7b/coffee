$(function(){
    let citiesByCountry = {
        sa:["الرياض","مكة المكرمة"],
        eg:["اسكندرية","القاهرة"],
        jo:["الزرقاء","عمان"],
        sy:["حماه","حلب","دمشق"],
    };
    function formName(formID){
      $(`#${formID} select[name='country']`).change(function(){
        let country = $(this).val();
        let cities = citiesByCountry[country];
        let citySelect = $(`#${formID} select[name='city']`);
        citySelect.empty();
        citySelect.append(
            `<option disabled selected value="">اختر المدينة</option>`
        );
        
        cities.forEach(function(city){
            let newOPtion = $(`<option></option>`);
            newOPtion.text(city);
            newOPtion.val(city)
            citySelect.append(newOPtion)
        })
    });
    }
    formName("form-area-slection");
    formName("form-checkout");
    // تغيير خيارات الدفع
    $('#form-checkout input[name="payment_method"]').on( "change",function() {
        var paymentMethod = $(this).val();
        console.log(paymentMethod)
      
        if (paymentMethod === 'on_delivery') {
          $('#credit-card-info input').prop('disabled', true);
      
        } else {
          $('#credit-card-info input').prop('disabled', false);
        }
        $('#credit-card-info').toggle();
    });
    
    (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
    })();

})