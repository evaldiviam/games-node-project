const grid = document.querySelector('#grid-games');
const getGames = () => {
    fetch("http://localhost:8800/api/games")
    .then(res=>res.json())
    .then(data=>{
            printGames(data);
        }
    );
}

const printGames = (games) => {
    grid.innerHTML="";
    games.forEach(game => {
        grid.innerHTML+=`
            <article >
                <p>${game.name}</p>
                <p>${game.pegi}</p>
                <p>${game.description}</p>
            </article>
        `;
    });
}

function init() {
    getGames();
}
init();