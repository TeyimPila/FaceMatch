var numberOfFaces = 5;
var leftSide = document.getElementById('leftSide');

function generateFaces() {

    for (var i = 1; i <= numberOfFaces; i++) {
        var img = document.createElement('img');
        img.setAttribute('src', 'http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png');
        img.style.top = Math.floor(Math.random() * 400 + 1) + 'px';
        img.style.left = Math.floor(Math.random() * 400 + 1) + 'px';
        leftSide.appendChild(img);
    }

}

window.onload = generateFaces();



