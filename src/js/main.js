/* src/js/main.js －　寫一些 jQuery 效果 */

import '../css/style.css';
import '../css/buttons.css';

import {myButton, myDesc} from './init';

myDesc.hide();
myButton.on('click', function(e){
    myDesc.toggle();    
});