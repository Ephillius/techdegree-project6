document.addEventListener('DOMContentLoaded', () => {
	const overlay = document.getElementById('overlay');
	const startButton = document.querySelector('.btn__reset');
	const qwerty = document.getElementById('qwerty');
	const phrase = document.getElementById('phrase');
	const misses = 0;
	const phrasesArray = 
		[
			'',
			'',
			'',
			'',
			''
		];

	startButton.addEventListener('click', () => {
			overlay.style.display = 'none';
	});
}