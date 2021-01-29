const gameShowcase = (() => {
	////////// DATA FETCHING/////////
	const searchInput = document.querySelector('input');
	const dropdown = document.querySelector('.dropdown');
	const resultsWrapper = document.querySelector('.results');

	const searchData = async (name) => {
		const key = '4b75a0922bbd41619c3a135bb234a3a5';
		const url = `https://api.rawg.io/api/games?search=${name}&key=${key}`;

		const response = await fetch(url);
		const gameResult = await response.json();

		const { results } = gameResult;

		const filteredResults = results.filter((game) => {
			const currentGame = game.name.toLowerCase()
			return currentGame.includes(name.toLowerCase());
		});

		if (searchInput.value.trim() === '') {
			resultsWrapper.innerHTML = '';
			dropdown.classList.remove('is-active');
			return;
		}
		resultsWrapper.innerHTML = '';
		dropdown.classList.add('is-active');

		for (let item of filteredResults) {
      const option = document.createElement('a');
      const img = document.createElement('img');
      
			option.classList.add('dropdown-item');

			option.textContent = item.name;
      img.src = item.background_image;

      option.prepend(img);
			resultsWrapper.appendChild(option);
		}
	};
	////////// EVENT LISTENERS //////////
	searchInput.addEventListener('input', (e) => {
		searchData(e.target.value);
	});
})();

const testObj = {
	name: "The Witcher 3: Wild Hunt"
}

console.log(testObj.name.toLowerCase().includes('witcher'))