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
        <h1>${player.name} <button class="btn border border-dark" onclick="app.PlayersController.rmvPoints('${player.name}')">-</button> ${player.points} <button class="btn border-dark" onclick="app.PlayersController.addPoints('${player.name}')">+</button></h1>`)
        let buttonsElm = document.getElementById(`players-buttons`)
        console.log(buttonHTML)
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



}