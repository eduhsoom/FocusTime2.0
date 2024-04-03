import state from "./state.js";
import * as elements from "./elements.js";
import * as sounds from'./sounds.js'

export function musicOne() {

state.isMute = document.documentElement.classList.toggle('music-on')



if(state.isMute){
sounds.buttonPressAudioOne.play()
return
}

sounds.buttonPressAudioOne.pause()

}

export function musicTwo(){
  state.isMute = document.documentElement.classList.toggle('music-on')

  if(state.isMute){
    sounds.buttonPressAudioTwo.play()
    return
    }
    
    sounds.buttonPressAudioTwo.pause()


}

export function musicTree() {

  state.isMute = document.documentElement.classList.toggle('music-on')

  if(state.isMute){
    sounds.buttonPressAudioTree.play()
    return
    }
    
    sounds.buttonPressAudioTree.pause()



}

export function musicFour() {

  state.isMute = document.documentElement.classList.toggle('music-on')

  if(state.isMute){
    sounds.buttonPressAudioFour.play()
    return
    }
    
    sounds.buttonPressAudioFour.pause()




}