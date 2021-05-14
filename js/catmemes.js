function updateText() {
    var userText = document.getElementById("user_text");
    var memeText = document.getElementById("meme_text");
    memeText.innerHTML = userText.value;
}

function updateImage() {
    var img = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];

    img.src = window.URL.createObjectURL(file);
}