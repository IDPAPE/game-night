import { AppState } from "../AppState.js"

class PlayersService {

    addPoints(playerName) {
        const targetPlayer = AppState.players.find(player => player.name == playerName)
        targetPlayer.points++
        console.log(`${targetPlayer.name} gained a point, is now at ${targetPlayer.points}`)
    }
    rmvPoints(playerName) {
        const targetPlayer = AppState.players.find(player => player.name == playerName)
        targetPlayer.points--
        console.log(`${targetPlayer.name} lost a point, is now at ${targetPlayer.points}`)
    }
}

export const playersService = new PlayersService()