import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";

export class PlayersController {

    constructor() {
        console.log(`shits working`)
        this.drawPlayersButtons()
    }

    drawPlayersButtons() {
        let buttonHTML = ` `
        AppState.players.forEach((player) => buttonHTML += `
        <h3 class="mt-2">${player.name} <button class="btn border border-dark" onclick="app.PlayersController.rmvPoints('${player.name}')">-</button> ${player.points} <button class="btn border-dark" onclick="app.PlayersController.addPoints('${player.name}')">+</button><hr /></h3>`)
        let buttonsElm = document.getElementById(`players-buttons`)
        // console.log(buttonHTML)
        buttonsElm.innerHTML = buttonHTML
    }

    addPoints(playerName) {
        console.log(`${playerName} is getting a point`)
        playersService.addPoints(`${playerName}`)
        this.drawPlayersButtons()
    }

    rmvPoints(playerName) {
        console.log(`${playerName} is losing a point`)
        playersService.rmvPoints(`${playerName}`)
        this.drawPlayersButtons()
    }

    addPlayer(name) {
        event.preventDefault()
        console.log('form submitted', name.value);
        playersService.addPlayer(`${name.value}`)
        this.drawPlayersButtons()
    }

}