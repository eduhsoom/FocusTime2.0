import * as elements from "./elements.js";
import state from "./state.js";

import * as timer from "./timer.js"

export function toggleRunning() {

state.isRunning = document.documentElement.classList.toggle('running')

timer.countdown()


} 

export function reset() {
state.isRunning = false
document.documentElement.classList.remove('running')
timer.updateDisplay()

}

export function set() {
  elements.minutes.setAttribute('contenteditable', true)
  elements.minutes.focus()
}


export function plus() {

    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)
    
    seconds = 0

    if(minutes < 100){
      minutes+=2.5
    }
    timer.updateDisplay(minutes , seconds)
    
  }

export function minus() {

  let minutes = Number(elements.minutes.textContent)
  let seconds = Number(elements.seconds.textContent)
  
  seconds = 0

  if(minutes){
    minutes-=2.5
  }
 
  timer.updateDisplay(minutes , seconds)
  


}
