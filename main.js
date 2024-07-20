        let computerChoice = document.getElementById('computer-choice');
        let userChoice = document.getElementById('user-choice');
        let resultDisplay = document.getElementById('result');
        let rock = document.getElementById('rock');
        let paper = document.getElementById('paper');
        let scissors = document.getElementById('scissors');

        rock.addEventListener('click', () => selectChoice('rock'));
        paper.addEventListener('click', () => selectChoice('paper'));
        scissors.addEventListener('click', () => selectChoice('scissors'));

        function selectChoice(id) {
            if (id == 'rock') {
                userChoice.innerHTML = 'Rock';
            } else if (id == 'paper') {
                userChoice.innerHTML = 'Paper';
            } else {
                userChoice.innerHTML = 'Scissors';
            }
            generateChoice();
            getResult();
        }

        function generateChoice() {
            let choice = Math.floor(Math.random() * 3);
            let ch;
            if (choice == 0) {
                ch = 'Rock';
            } else if (choice == 1) {
                ch = 'Paper';
            } else {
                ch = 'Scissors';
            }
            computerChoice.innerHTML = ch;
        }

        function getResult() {
            const computer = computerChoice.innerHTML;
            const user = userChoice.innerHTML;

            if (computer === user) {
                resultDisplay.innerHTML = 'It\'s a draw!';
            } else if ((computer === 'Rock' && user === 'Paper') ||
                       (computer === 'Paper' && user === 'Scissors') ||
                       (computer === 'Scissors' && user === 'Rock')) {
                resultDisplay.innerHTML = 'You win!';
            } else {
                resultDisplay.innerHTML = 'You lose!';
            }
        }