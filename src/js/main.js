/* src/js/main.js －　寫一些 jQuery 效果 */

// import '../css/style.css';   // 改使用 scss
// import '../css/buttons.css'; // 改使用 scss

import 'jquery';                // 導入 jQuery

import 'bootstrap';                     // importing bootstrap.js
import 'bootstrap/scss/bootstrap.scss'; // bootstrap.scss

import '../scss/_colors.scss';  // 加入潮潮的 scss
import '../scss/style.scss';    // 加入潮潮的 scss
import '../scss/buttons.scss';  // 加入潮潮的 scss

import {myButton, myDesc} from './init';

myDesc.hide();
myButton.on('click', function(e){
    myDesc.toggle();    
});