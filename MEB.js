const form = document.getElementById('form');
form.addEventListener('submit', submit)

function submit(event) {
    event.preventDefault();
    const input = document.getElementById('question');
    const currentQuestion = input.value;
    let answer = getAnswer(currentQuestion);
    displayAnswer(answer);
}

function getAnswer (question) {
    const randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch (randomNumber) {
        case 1 :
            eightBall = 'It is certain';
            break;
        case 2 :
            eightBall = 'It is decidedly so';
            break;
        case 3 :
            eightBall = 'Try again later';
            break;
        case 4 :
            eightBall = 'Cannot predict now';
            break;
        case 5 :
            eightBall = 'My sources say no';
            break;
        case 6 :
            eightBall = 'Outlook not so good';
            break;
        case 7 :
            eightBall = 'Signs point to yes';
            break;
        case 8 :
            eightBall = 'Do not count on it';
            break;
        default:
            eightBall = 'It\'s so hard to say';
    }
    return eightBall;
}
function displayAnswer (answer) {
    const mainAnswer = document.getElementById('mainAnswer');
    mainAnswer.innerText = answer;
}