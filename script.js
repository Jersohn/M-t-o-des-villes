let villeChoisie = "saint-saulve";
recevoirTemperature(villeChoisie);

let changerDeVille = document.querySelector("#changer");
changerDeVille.addEventListener("click", () => {
	villeChoisie = prompt("Quelle ville souhaitez-vous voir ?");
	recevoirTemperature(villeChoisie);
});

function recevoirTemperature(ville) {
	const url =
		"https://api.openweathermap.org/data/2.5/weather?q=" +
		ville +
		"&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

	fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error("Un problème est intervenu, merci de revenir plus tard.");
		})
		.then((data) => {
			let temperature = data.main.temp;
			let ville = data.name;
			document.querySelector("#temperature_label").textContent = temperature;
			document.querySelector("#ville").textContent = ville;
		})
		.catch((error) => {
			alert(error.message);
		});
}
