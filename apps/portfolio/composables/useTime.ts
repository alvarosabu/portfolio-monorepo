import { computed } from 'vue'
import { useNow } from '@vueuse/core'

export enum PartOfDay {
  DAWN = 'dawn',
  MORNING = 'morning',
  NOON = 'noon',
  AFTERNOON = 'afternoon',
  DUSK = 'dusk',
  MIDNIGHT = 'midnight',
  EVENING = 'evening',
  NIGHT = 'night',
}

export const useTime = () => {
  const now = useNow()

  const hours = computed(() => now.value.getHours())
  const minutes = computed(() => now.value.getMinutes())
  const month = computed(() => now.value.getMonth())

  const militaryHours = computed(() =>
    now.value.getHours() < 10
      ? `0${now.value.getHours()}`
      : now.value.getHours(),
  )
  const militaryMinutes = computed(() =>
    now.value.getMinutes() < 10
      ? `0${now.value.getMinutes()}`
      : now.value.getMinutes(),
  )

  const isDawn = computed(
    () =>
      hours.value >= 4 &&
      hours.value < 8 &&
      minutes.value >= 0 &&
      minutes.value < 59,
  )

  const isMorning = computed(
    () =>
      hours.value >= 8 &&
      hours.value < 10 &&
      minutes.value >= 0 &&
      minutes.value < 59,
  )

  const isNoon = computed(
    () =>
      hours.value >= 10 &&
      hours.value < 14 &&
      minutes.value >= 0 &&
      minutes.value < 59,
  )

  const isAfternoon = computed(
    () =>
      hours.value >= 14 &&
      hours.value < 16 &&
      minutes.value >= 0 &&
      minutes.value < 59,
  )

  const isDusk = computed(
    () =>
      hours.value >= 16 &&
      hours.value < 20 &&
      minutes.value >= 0 &&
      minutes.value < 59,
  )

  const isEvening = computed(
    () =>
      hours.value >= 20 &&
      hours.value < 22 &&
      minutes.value >= 0 &&
      minutes.value < 59,
  )

  const isMidnight = computed(
    () =>
      hours.value >= 22 &&
      hours.value < 24 &&
      minutes.value >= 0 &&
      minutes.value < 59,
  )

  const isNight = computed(
    () =>
      hours.value >= 0 &&
      hours.value < 4 &&
      minutes.value >= 0 &&
      minutes.value < 59,
  )

  const getTimeOfTheDay = () => {
    if (isDawn.value) {
      return PartOfDay.DAWN
    }
    if (isNoon.value) {
      return PartOfDay.NOON
    }
    if (isAfternoon.value) {
      return PartOfDay.AFTERNOON
    }
    if (isDusk.value) {
      return PartOfDay.DUSK
    }
    if (isEvening.value) {
      return PartOfDay.EVENING
    }
    if (isMidnight.value) {
      return PartOfDay.MIDNIGHT
    }
    if (isNight.value) {
      return PartOfDay.NIGHT
    }
  }

  /**
   * isSpring
   */
  const isSpring = () => {
    //  March 1 to May 31.

    return month.value >= 2 && month.value < 5
  }

  /**
   * isSummer
   */
  const isSummer = () => {
    //  June 1 to August 31

    return month.value >= 5 && month.value < 7
  }

  /**
   * isFall
   */
  const isFall = () => {
    //  June 1 to August 31

    return month.value >= 8 && month.value < 11
  }

  /**
   * isWinter
   */
  const isWinter = () => {
    // December 1 to February 28

    return month.value >= 11 || (month.value >= 0 && month.value < 2)
  }

  return {
    hours,
    minutes,
    isDawn,
    isMorning,
    isNoon,
    isAfternoon,
    isDusk,
    isEvening,
    isMidnight,
    isNight,
    militaryHours,
    militaryMinutes,
    month,
    getTimeOfTheDay,
    isSpring,
    isSummer,
    isFall,
    isWinter,
  }
}
