import $ from 'jquery';
// export function Scenarios(){
export function charTypeSelect() {
    let interact = $('input#interact').val();
    $('pre#result').text('Your character name is: ' + interact + '\n\nWhat character type would you like to be?\n\nNinja, Samurai, Warrior, or Wizard?');
}

export function confirmCharacter() {
    $('div#textbox').hide();
    $('div#console').append('<input type="radio" id="html" name="fav_language" value="HTML"><label for="html">HTML</label><br><input type="radio" id="css" name="fav_language" value="CSS"><label for="css">CSS</label><br><input type="radio" id="javascript" name="fav_language" value="JavaScript"><label for="javascript">JavaScript</label>');
}

// }