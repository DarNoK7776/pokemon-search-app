function searchPokemon() {
    const name = document.getElementById("search").value;

    fetch(`http://localhost:8000/pokemon/${name}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("result").innerHTML =
                `<h2>${data.name}</h2>`;
        })
        .catch(() => {
            document.getElementById("result").innerHTML =
                "Nie znaleziono Pokemona";
        });
}