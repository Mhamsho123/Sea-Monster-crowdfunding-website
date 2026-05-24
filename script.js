const games = [
    {
        name: "Ocean Explorer",
        raised: 5000,
        goal: 10000
    },
    {
        name: "Deep Sea Battle",
        raised: 15000,
        goal: 12000
    },
    {
        name: "Monster Escape",
        raised: 7000,
        goal: 7000
    }
]


const container = document.getElementById("games-container")

function renderGames(gameList) {

    container.innerHTML = ""

    for (let game of gameList) {

        container.innerHTML += `
            <div class="card">
                <h2>${game.name}</h2>
                <p>Raised: $${game.raised}</p>
                <p>Goal: $${game.goal}</p>
            </div>
        `
    }
}

renderGames(games)
const totalGames = games.length

const totalRaised = games.reduce((total, game) => {
    return total + game.raised
}, 0)

const unfundedGames = games.filter(game => {
    return game.raised < game.goal
})

document.getElementById("total-games").textContent = totalGames

document.getElementById("total-raised").textContent = totalRaised

document.getElementById("unfunded-games").textContent = unfundedGames.length

document.getElementById("funded-btn").addEventListener("click", () => {

    const funded = games.filter(game => {
        return game.raised >= game.goal
    })

    renderGames(funded)
})

document.getElementById("unfunded-btn").addEventListener("click", () => {

    renderGames(unfundedGames)
})

document.getElementById("all-btn").addEventListener("click", () => {

    renderGames(games)
})