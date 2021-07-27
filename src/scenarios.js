import $ from 'jquery';
import {name} from './main.js'
export function charTypeSelect() {
   $('input#interact').val('');
    $('pre#result').text('Hello ' + name + ', what character type are you? ');
    $('div#textbox').hide();
    $('div#other').append('<button id="wizard" value="wizard" type="submit">* Wizard</button><br><button id="samurai" value="samurai" type="submit">* Samurai</button>')
    // '\n\nWhat character type would you like to be?\n\nNinja, Samurai, Warrior, or Wizard?'
}

export function confirmCharacter() {
    $('div#textbox').hide();
    $('pre#result').text('This is confirmChar');
    // let name = $('input#interact').val();
}