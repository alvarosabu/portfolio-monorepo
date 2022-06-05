import { reactive, watch, toRefs } from 'vue'

import { useTime } from './useTime'

export enum ShevasAnimationTypes {
  IDDLE = 'shevas-iddle',
  CEL = 'shevas-cel',
  EAT = 'shevas-eatsandwich',
  ENTER_THE_MAC = 'shevas-enterthemac',
  IN_THE_MAC = 'shevas-inthemac',
  LEAVING_THE_MAC = 'shevas-leavingthemac',
  GOING_TO_BED = 'shevas-goingtobed',
  SLEEP_TIGHT_LEFT = 'shevas-sleeptightleft',
  SLEEPING_LEFT = 'shevas-sleepingleft',
  SLEEPING_RIGHT = 'shevas-sleepingright',
  SLEEP_TIGHT_RIGHT = 'shevas-sleeptightright',
  LEAVING_THE_BED = 'shevas-leavingthebed',
}

export enum AnimationTriggers {
  TIME = 'time',
  MANUAL = 'manual',
}

export enum StageType {
  ENTER = 'enter',
  LOOP = 'loop',
  LEAVE = 'leave',
}

export type ShevasAnimation = {
  backgroundImage: string
  animation: string
  animationDuration: number
  steps: number
  trigger?: string
  conditions?: any
  previous: ShevasAnimationTypes | null | undefined
  next?: ShevasAnimationTypes | null | undefined
  end?: ShevasAnimationTypes | null | undefined
  repeat?: string | number | null
  priority?: number
  stage?: StageType
}

export type ShevasAnimationsMap = {
  [key in ShevasAnimationTypes]: ShevasAnimation
}

export const ShevasAnimations: ShevasAnimationsMap = {
  [ShevasAnimationTypes.IDDLE]: {
    backgroundImage: 'shevas_iddle_stripe.png',
    animation: 'iddle-play',
    animationDuration: 2,
    steps: 19,
    previous: null,
    repeat: 'infinite',
  },
  [ShevasAnimationTypes.CEL]: {
    backgroundImage: 'shevas_cel_stripe.png',
    animation: 'cel-play',
    animationDuration: 7,
    steps: 51,
    previous: null,
    repeat: null,
  },
  [ShevasAnimationTypes.EAT]: {
    backgroundImage: 'shevas_eatsandwich_stripe.png',
    animation: 'eat-play',
    animationDuration: 15,
    steps: 107,
    previous: null,
    repeat: null,
    trigger: AnimationTriggers.TIME,
    conditions: {
      hours: [9, 13, 20],
    },
    priority: 1,
  },
  [ShevasAnimationTypes.ENTER_THE_MAC]: {
    backgroundImage: 'shevas_enterthemac_stripe.png',
    animation: 'enterthemac-play',
    animationDuration: 3,
    steps: 29,
    previous: null,
    next: ShevasAnimationTypes.IN_THE_MAC,
    repeat: null,
    trigger: AnimationTriggers.TIME,
    stage: StageType.ENTER,
    conditions: {
      hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    },
    priority: 3,
  },
  [ShevasAnimationTypes.IN_THE_MAC]: {
    backgroundImage: 'shevas_inthemac_stripe.png',
    animation: 'inthemac-play',
    animationDuration: 0.5,
    steps: 5,
    stage: StageType.LOOP,
    previous: ShevasAnimationTypes.ENTER_THE_MAC,
    end: ShevasAnimationTypes.LEAVING_THE_MAC,
    repeat: 'infinite',
  },
  [ShevasAnimationTypes.LEAVING_THE_MAC]: {
    backgroundImage: 'shevas_leavingthemac_stripe.png',
    animation: 'leavingthemac-play',
    animationDuration: 2,
    steps: 16,
    previous: null,
    next: null,
    stage: StageType.LEAVE,
    trigger: AnimationTriggers.TIME,
    conditions: {
      hours: [],
    },
  },
  [ShevasAnimationTypes.GOING_TO_BED]: {
    backgroundImage: `shevas_goingtobed_stripe.png`,
    animation: 'goingtobed-play',
    animationDuration: 5,
    steps: 42,
    previous: null,
    next: ShevasAnimationTypes.SLEEPING_RIGHT,
    repeat: null,
    trigger: AnimationTriggers.TIME,
    stage: StageType.ENTER,
    conditions: {
      hours: [23],
    },
    priority: 2,
  },
  [ShevasAnimationTypes.SLEEP_TIGHT_LEFT]: {
    backgroundImage: `shevas_sleeptightleft_stripe.png`,
    animation: 'sleeptightleft-play',
    animationDuration: 1,
    steps: 8,
    previous: null,
    stage: StageType.LOOP,
    next: ShevasAnimationTypes.SLEEPING_LEFT,
    end: ShevasAnimationTypes.LEAVING_THE_BED,
    trigger: AnimationTriggers.TIME,
    conditions: {
      hours: [24, 0, 1, 2, 3, 4, 5, 6],
    },
  },
  [ShevasAnimationTypes.SLEEPING_LEFT]: {
    backgroundImage: `shevas_sleepingleft_stripe.png`,
    animation: 'sleepingleft-play',
    animationDuration: 5,
    steps: 2,
    stage: StageType.LOOP,
    previous: null,
    end: ShevasAnimationTypes.LEAVING_THE_BED,
    next: ShevasAnimationTypes.SLEEP_TIGHT_RIGHT,
    repeat: 10,
  },
  [ShevasAnimationTypes.SLEEPING_RIGHT]: {
    backgroundImage: `shevas_sleepingright_stripe.png`,
    animation: 'sleepingright-play',
    animationDuration: 5,
    steps: 2,
    stage: StageType.LOOP,
    previous: null,
    next: ShevasAnimationTypes.SLEEP_TIGHT_LEFT,
    end: ShevasAnimationTypes.LEAVING_THE_BED,
    repeat: 10,
  },
  [ShevasAnimationTypes.SLEEP_TIGHT_RIGHT]: {
    backgroundImage: `shevas_sleeptightright_stripe.png`,
    animation: 'sleeptightright-play',
    animationDuration: 1,
    steps: 8,
    stage: StageType.LOOP,
    previous: null,
    next: ShevasAnimationTypes.SLEEPING_RIGHT,
    end: ShevasAnimationTypes.LEAVING_THE_BED,
  },
  [ShevasAnimationTypes.LEAVING_THE_BED]: {
    backgroundImage: `shevas_leavingthebed_stripe.png`,
    animation: 'leavingthebed-play',
    animationDuration: 5,
    steps: 41,
    previous: null,
    next: ShevasAnimationTypes.ENTER_THE_MAC,
    trigger: AnimationTriggers.TIME,
    conditions: {
      hours: [7],
    },
  },
}

interface ShevasState {
  animations: ShevasAnimationsMap
  outfit: number
  currentAnimation: ShevasAnimation
  animationQueue: ShevasAnimation[]
}

const state = reactive<ShevasState>({
  animations: ShevasAnimations,
  outfit: 1,
  currentAnimation: ShevasAnimations[ShevasAnimationTypes.IDDLE],
  animationQueue: [],
})

export const orderByPriorityDesc = (a: any, b: any) => b.priority - a.priority
export const orderByPriorityAsc = (a: any, b: any) => a.priority - b.priority

export const useShevas = () => {
  const { hours } = useTime()

  const getTimeBasedAnimation = (animations: ShevasAnimation[]) => {
    const matches = animations
      .filter(animation => animation.conditions.hours.includes(hours.value))
      .sort(orderByPriorityDesc)
    return matches.length > 1
      ? {
          ...matches[0],
          next: matches[1].animation,
        }
      : matches[0]
  }

  watch(
    hours,
    () => {
      updateCurrentAnimation({
        condition: AnimationTriggers.TIME,
      })
    },
    {
      immediate: true,
    },
  )

  function updateCurrentAnimation({
    condition,
    animation,
  }: {
    condition: string
    animation?: ShevasAnimationTypes
  }) {
    let newAnimation
    if (condition) {
      switch (condition) {
        case AnimationTriggers.TIME:
          newAnimation = getTimeBasedAnimation(
            Object.values(state.animations).filter(
              anim => anim.trigger === AnimationTriggers.TIME,
            ),
          )
          break

        default:
          newAnimation =
            state.animations[animation || ShevasAnimationTypes.IDDLE]
          break
      }
    }
    if (newAnimation) {
      state.currentAnimation = newAnimation
    }
  }

  function nextAnimation() {
    let newAnimation
    const { currentAnimation, animations } = state
    if (currentAnimation.next) {
      newAnimation = animations[currentAnimation.next]
    } else {
      newAnimation = getTimeBasedAnimation(
        Object.values(state.animations).filter(
          anim => anim.trigger === AnimationTriggers.TIME,
        ),
      )
    }
    if (newAnimation) {
      state.currentAnimation = newAnimation
    }
  }

  return {
    updateCurrentAnimation,
    nextAnimation,
    ...toRefs(state),
  }
}
