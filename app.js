document.addEventListener('DOMContentLoaded', () => {
	const overlay = document.getElementById('overlay');
	const startButton = document.querySelector('.btn__reset');
	const qwerty = document.getElementById('qwerty');
	const scoreBoard = Array.from(document.getElementsByClassName('tries'));
	let misses = 0;
	let rightAnswers = 0;
	const phrasesArray = [
							'Rain on Your Parade',
							'Easy As Pie',
							'Knock Your Socks Off',
							'All Greek To Me',
							'Needle In a Haystack',
							'Knuckle Down',
							'Down For The Count',
							'Go Out On a Limb',
							'Between a Rock and a Hard Place'
						];

	function getRandomPhraseAsArray(array) {
    	const randomPhrase = array[Math.floor(Math.random()*array.length)];
    	const randomPhrase = randomPhrase.toUpperCase().split('');
    	console.log(randomPhrase);
    	return randomPhrase;
	}

	const randomPhrase = getRandomPhraseAsArray(phrasesArray);

	function addPhraseToDisplay(array) {
		const list = document.querySelector('#phrase ul');
    	for (let i = 0; i < array.length; i++) {
    		const newLi = document.createElement("LI");
    		const letter = document.createTextNode(array[i]);
    		if (array[i] !== ' ') {
    			newLi.className = 'letter';
    		} else {
    			newLi.className = 'space';
    		}
    		newLi.appendChild(letter); 
    		list.appendChild(newLi);
    	}
	}

	function checkLetter(button) {
		const letters = document.getElementsByClassName('letter');
		let match = null;
		for (let i = 0; i < letters.length; i++) {
			let show = letters[i].textContent.toLowerCase();
			if (show === button.textContent.toLowerCase()) {
				console.log('match');
				letters[i].className += ' show';
				match = true;
				rightAnswers += 1;
			}
		}
		return match;
	}

	function checkWin() {
		const letters = document.getElementsByClassName('letter');
		const h2 = document.querySelector('h2');
		if (misses === 5) {
			overlay.style.display = '';
			overlay.className = 'lose';
			h2.innerHTML = 'You lost.';
			startButton.innerHTML = 'Try again?';
		} else if (rightAnswers === letters.length) {
			overlay.style.display = '';
			overlay.className = 'win';
			h2.innerHTML = 'You won!';
			startButton.innerHTML = 'Another round?';
		}
	}

	startButton.addEventListener('click', () => {
		overlay.style.display = 'none';
		for (let i = 0; i < scoreBoard.length; i++) {
			scoreBoard[i].style.display = '';
		}
		const ul = document.querySelector('ul');
		while (ul.lastChild) {
    		ul.removeChild(ul.lastChild);
		}
		addPhraseToDisplay(randomPhrase);
		misses = 0;
		rightAnswers = 0;
	});

	qwerty.addEventListener('click', (e) => {
		if(e.target.tagName == 'BUTTON') {
			e.target.className = 'chosen';
			e.target.setAttribute('disabled', 'disabled');
			const letterFound = checkLetter(e.target);
			if (letterFound === null) {
				scoreBoard[0].style.display = 'none';
				// picks the 1st heart and hides it
				scoreBoard.push(scoreBoard.shift());
				// this sorts the position of the hidden hearts
				// making them go to the end of the array
				misses += 1;
			}
		}
	checkWin();
	});
});
