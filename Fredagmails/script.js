window.onload = function() {
    bigPicture = document.getElementById("bigPicture")
    pictureText = document.getElementById("title")
}

function showPhoto(num) {
    photo = "bilde"+ num +".png";
    bigPicture.src = photo;
    altText = document.getElementById("bilde"+num).alt;
    pictureText.innerHTML = altText;
}