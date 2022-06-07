import { Fn } from '@alvarosabu/utils'
import Velocity from 'velocity-animate'

const STAGGER_DURATION = 200

export function useStaggered(duration = STAGGER_DURATION) {
  function beforeEnter(el: Element) {
    ;(el as HTMLElement).style.opacity = '0'
    /*  el.style.height = 0; */
  }

  function enter(el: Element, done: Fn) {
    // Each element requires a data-index attribute in order for the transition to work properly
    const index = (el as HTMLElement).dataset.index || 1
    const delay = (index as number) * duration
    setTimeout(() => {
      Velocity(el, { opacity: 1 /*  height: 'auto' */ }, { complete: done })
    }, delay)
  }

  function leave(el: Element, done: Fn) {
    // Each element requires a data-index attribute in order for the transition to work properly
    const index = (el as HTMLElement).dataset.index || 1
    const delay = (index as number) * duration
    setTimeout(() => {
      Velocity(el, { opacity: 0 /* height: 0  */ }, { complete: done })
    }, delay)
  }

  return {
    beforeEnter,
    enter,
    leave,
  }
}
