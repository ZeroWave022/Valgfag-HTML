function setButtonColor(button, r, g, b) {
    button.setAttribute('style',
                        'background-color: rgb('+ r +','+ g +','+ b +');');
}

function genColorValue() {
    return Math.round(Math.random()*255);
}

function startGame() {
    answerMessage.innerHTML = "";
    document.getElementsByTagName('body')[0].setAttribute('style', 'background-color: rgb(255, 255, 255);');
    var answerButton = Math.round(Math.random() * (buttons.length - 1));

    for (var i = 0; i < buttons.length; i++) {
        var red = genColorValue();
        var green = genColorValue();
        var blue = genColorValue()
        setButtonColor(buttons[i], red, green, blue)

        if (i === answerButton) {
            heading.innerHTML = `(${red}, ${green}, ${blue})`
        }

        buttons[i].addEventListener('click', function() {
            if (this === buttons[answerButton]) {
                answerMessage.innerHTML = "Correct!";
                document.getElementsByTagName('body')[0].setAttribute('style', 'background-color: rgba(0, 255, 0, 0.25);');
            } else {
                answerMessage.innerHTML = "Wrong answer. Guess again.";
                document.getElementsByTagName('body')[0].setAttribute('style', 'background-color: rgba(255, 0, 0, 0.5);');
            }
        });
    }
}

var heading = document.getElementById('colorValue');
var buttons = document.getElementsByClassName('colorButton');
var answerButton = Math.round(Math.random() * (buttons.length - 1));
var answerMessage = document.getElementById('answer');

startGame();

document.getElementById('resetButton').addEventListener('click', startGame);
