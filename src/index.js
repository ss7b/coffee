import "normalize.css/normalize.css";
import "./assets/sass/style.scss";

import "jquery/dist/jquery.min.js"
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import "@fortawesome/fontawesome-free/css/all.min.css";

let citiesByCountry = {
    sa:["الرياض","مكة المكرمة"],
    eg:["اسكندرية","القاهرة"],
    jo:["الزرقاء","عمان"],
    sy:["حماه","حلب","دمشق"],
};
$("#form-area-slection select[name='country']").change(function(){
    let country = $(this).val();
    let cities = citiesByCountry[country];
    let citySelect = $("#form-area-slection select[name='city']");
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
