import $ from 'jquery';
let name = null;

// $("#target").submit(function (event) {
//     alert("Handler for .submit() called.");
//     event.preventDefault();
// });

export function titleScreen() {
    $('pre#result').text('Welcome to:\n\n ▄▄▄██▀▀▀▓█████   ██████ ▄▄▄█████▓ ▒█████   ██▓███   ▒█████   ██▓     ██▓  ██████ \n   ▒██   ▓█   ▀ ▒██    ▒ ▓  ██▒ ▓▒▒██▒  ██▒▓██░  ██▒▒██▒  ██▒▓██▒    ▓██▒▒██    ▒ \n   ░██   ▒███   ░ ▓██▄   ▒ ▓██░ ▒░▒██░  ██▒▓██░ ██▓▒▒██░  ██▒▒██░    ▒██▒░ ▓██▄   \n▓██▄██▓  ▒▓█  ▄   ▒   ██▒░ ▓██▓ ░ ▒██   ██░▒██▄█▓▒ ▒▒██   ██░▒██░    ░██░  ▒   ██▒\n ▓███▒   ░▒████▒▒██████▒▒  ▒██▒ ░ ░ ████▓▒░▒██▒ ░  ░░ ████▓▒░░██████▒░██░▒██████▒▒\n ▒▓▒▒░   ░░ ▒░ ░▒ ▒▓▒ ▒ ░  ▒ ░░   ░ ▒░▒░▒░ ▒▓▒░ ░  ░░ ▒░▒░▒░ ░ ▒░▓  ░░▓  ▒ ▒▓▒ ▒ ░\n ▒ ░▒░    ░ ░  ░░ ░▒  ░ ░    ░      ░ ▒ ▒░ ░▒ ░       ░ ▒ ▒░ ░ ░ ▒  ░ ▒ ░░ ░▒  ░ ░\n ░ ░ ░      ░   ░  ░  ░    ░      ░ ░ ░ ▒  ░░       ░ ░ ░ ▒    ░ ░    ▒ ░░  ░  ░  \n ░   ░      ░  ░      ░               ░ ░               ░ ░      ░  ░ ░        ░  \n\nEnter your character name to start:')
    $('form').submit(function (event) {
        name = $('input#interact').val();
        charTypeSelect();
        event.preventDefault();
    });

}

export function charTypeSelect() {
    $('input#interact').val('');
    $('pre#result').text('Hello ' + name + ', what character type are you? ');
    $('div#textbox').hide();
    $('div#other').append('<button id="wizard" value="wizard" type="submit">* Wizard</button>' + '<br><button id="samurai" value="samurai" type="submit">* Samurai</button>' + '<br><button id="warrior" value="warrior" type="submit">* Warrior</button>' + '<br><button id="ninja" value="ninja" type="submit">* Ninja</button>' + '<br><button id="vindiesel" value="vindiesel" type="submit">* Vin Diesel</button>');
    $('button#wizard').hover(function () { $(this).append($("<span> -intelligence: 10, strength: 2, magic: 10, level: 1, hp: 90</span>")); }, function () { $(this).find("span").last().remove(); });
    $('button#samurai').hover(function () { $(this).append($("<span> -intelligence: 10, strength: 10, magic: 0, level: 1, hp: 100</span>")); }, function () { $(this).find("span").last().remove(); });
    $('button#warrior').hover(function () { $(this).append($("<span> -intelligence: 5, strength: 5, magic: 0, level: 1, hp: 90</span>")); }, function () { $(this).find("span").last().remove(); });
    $('button#ninja').hover(function () { $(this).append($("<span> -intelligence: 10, strength: 3, magic: 2, level: 1, hp: 90</span>")); }, function () { $(this).find("span").last().remove(); });
    $('button#vindiesel').hover(function () { $(this).append($("<span> -intelligence: 20, strength: 20, magic: 20, level: 20, hp: 200</span>")); }, function () { $(this).find("span").last().remove(); });
    $("button").submit(function (event) {
        alert("Handler for .submit() called.");
        event.preventDefault();
    });
}

export function confirmCharacter() {
    $('div#textbox').hide();
    $('pre#result').text("Your character's name is: " + name);
    $('div#other').html('<button id="yes" value="true" type="submit">* Yes</button>' + '<br><button id="no" value="false" type="submit">* No</button>');
    // let name = $('input#interact').val();
}