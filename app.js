document.addEventListener('DOMContentLoaded', () => {
	const overlay = document.getElementById('overlay');
	const startButton = document.querySelector('.btn__reset');
	const qwerty = document.getElementById('qwerty');
	const phrase = document.getElementById('phrase');
	const misses = 0;
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
						
	startButton.addEventListener('click', () => {
			overlay.style.display = 'none';
	});

	function getRandomPhraseAsArray(array) {
    	const randomPhrase = array[Math.floor(Math.random()*array.length)];
    	const newPhrase = randomPhrase.split('');
    	console.log(newPhrase);
    	return newPhrase;
	}

	const newPhrase = getRandomPhraseAsArray(phrasesArray);

	function addPhraseToDisplay(array) {
		const list = document.querySelector('#phrase ul');
    	for (let i = 0; i < array.length; i++) {
    		const newLi = document.createElement("LI");
    		const letter = document.createTextNode(array[i]);
    		if (array[i] !== ' ') {
    			newLi.className = 'letter';
    		}
    		newLi.appendChild(letter); 
    		list.appendChild(newLi);
    	}
	}

	addPhraseToDisplay(newPhrase);

	function checkLetter(target) {
		for (let i = 0; i < newPhrase.length; i++) {
			if (target == newPhrase[i]) {

			}
		}
	}
});