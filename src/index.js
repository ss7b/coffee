import "normalize.css/normalize.css";
import "./assets/sass/style.scss";

import "jquery/dist/jquery.min.js"
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import "@fortawesome/fontawesome-free/js/all.min.js";


// search button
$('.search-icon').on('click', function(){
    console.log("ss")
    $('.search-input').toggleClass('active')
})
