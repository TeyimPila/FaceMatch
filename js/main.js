var numberOfFaces = 5;
var leftSide = document.getElementById('leftSide');
var rightSide = document.getElementById('rightSide');
var theBody = document.getElementsByTagName('body')[0];
var resetButton = document.getElementById('reset');
var score = 0;
var successClicks = 0;

function generateFaces() {
    document.getElementById('score').innerHTML = score;

    for (var i = 1; i <= numberOfFaces; i++) {
        var img = document.createElement('img');
        img.setAttribute('src', 'http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png');
        img.style.top = Math.floor(Math.random() * 400 + 1) + 'px';
        img.style.left = Math.floor(Math.random() * 400 + 1) + 'px';
        leftSide.appendChild(img);
    }

    leftSideImages = leftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);

    while (leftSideImages.hasChildNodes()){
        rightSide.appendChild(leftSideImages.firstChild);
    }

    //adding click event to the lone face
    leftSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        numberOfFaces += 5;
        score += 5;
        successClicks += 1;

        generateFaces();
    };

    document.onclick = function(evt) {
        var evt = window.event || evt; // window.event for IE
        if (!evt.target) evt.target=evt.srcElement; // extend target property for IE

        //reset Game if reset button is pressed
        if(evt.target.id === resetButton.id){
            score = 0;
            successClicks = 0;
            numberOfFaces = 5;
            while (leftSide.hasChildNodes()){
                leftSide.removeChild(leftSide.firstChild);
            }

            while (rightSide.hasChildNodes()){
                rightSide.removeChild(rightSide.firstChild);
            }
            generateFaces();
        }
    };

    // //adding click event for the body
    theBody.onclick = function gameOver() {

        alert("Game Over! \nClicks: " + successClicks + " \nScore: " + score);

        theBody.onclick = null;

        theLeftSide.lastChild.onclick = null;
    };

}

window.onload = generateFaces();



