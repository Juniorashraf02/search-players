
document.getElementById('btn').addEventListener('click', function () {
    document.getElementById('player-container').innerHTML = '';
    const inputField = document.getElementById('input');
    const inputValue = inputField.value;
    inputField.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayPlayerInfo(data.player))

});

function displayPlayerInfo(players) {

    for (const player of players) {
        const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = `
    <div class="bg-light text-center my-5 rounded mx-5 w-50">
                    <div>
                        <img src="${player.strCutout}" alt="Player picture" srcset="" class="mt-3 w-50">
                    </div>
                    <h4>Player Name: ${player.strPlayer}</h4>
                    <div>
                        <button id="" class="btn btn-primary mb-2">delete</button>
                        <button onclick='details(${player.idPlayer})' class="btn btn-success mb-2">details</button>
                    </div>
                </div>
    `;
        parent.appendChild(div);
    }
    console.log(players);
};

const details = (data) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${data}`;

    fetch(url)
        .then(response => response.json())
        .then(data => setDetails(data.players[0]))
};

const setDetails = (info) => {
    const parent = document.getElementById('player-info');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="p-2 mt-5 mx-3">
    <h2>Name: ${info.strPlayer}</h2>
    <h2>Gender: ${info.strGender}</h2>
    <h2>Country: ${info.strNationality}</h2>
    <h2>Height: ${info.strHeight}</h2>
    <h2>Weight: ${info.strWeight}</h2>
    </div>

    `
    parent.appendChild(div);
}




