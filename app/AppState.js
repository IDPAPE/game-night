import { Player } from './models/Players.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  players = [
    new Player(`Amanda`, 0),
    new Player(`George`, 0),
    new Player(`John`, 0)
  ]







}

export const AppState = createObservableProxy(new ObservableAppState())


console.log(AppState)