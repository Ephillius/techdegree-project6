document.addEventListener('DOMContentLoaded', () => {
	const overlay = document.getElementById('overlay');
	const h2 = document.querySelector('h2');
	const startButton = document.querySelector('.btn__reset');
	const list = document.querySelector('#phrase ul');
	const qwerty = document.getElementById('qwerty');
	const letters = document.getElementsByClassName('letter');
	const buttons = document.querySelectorAll('button');
	const scoreBoard = Array.from(document.getElementsByClassName('tries'));
	const phrasesArray = [
							'Rain on Your Parade',
							'Easy As Pie',
							'Knock Your Socks Off',
							'All Greek To Me',
							'Needle In a Haystack',
							'Knuckle Down',
							'Down For The Count',
							'Go Out On a Limb',
						];

	let misses = 0;
	let rightAnswers = 0;


	function getRandomPhraseAsArray(array) {
    	const Phrase = array[Math.floor(Math.random()*array.length)];
    	const randomPhrase = Phrase.toUpperCase().split('');
    	return randomPhrase;
	}


	function addPhraseToDisplay(array) {
		list.innerHTML = '';
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
		if (misses === 5) {
			overlay.style.display = '';
			overlay.className = 'lose';
			h2.innerHTML = 'You lost.';
			list.innerHTML = '';
			startButton.innerHTML = 'Try again?';
		} else if (rightAnswers === letters.length) {
			overlay.style.display = '';
			overlay.className = 'win';
			h2.innerHTML = 'You won!';
			list.innerHTML = '';
			startButton.innerHTML = 'Another round?';
		}
	}


	startButton.addEventListener('click', () => {
		overlay.style.display = 'none';
		for (let i = 0; i < scoreBoard.length; i++) {
			scoreBoard[i].style.display = '';
		}
		getRandomPhraseAsArray(phrasesArray);
		const randomPhrase = getRandomPhraseAsArray(phrasesArray);
		console.log(randomPhrase);
		addPhraseToDisplay(randomPhrase);
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].className = '';
			buttons[i].removeAttribute('disabled');
		}
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
