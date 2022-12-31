<script lang="ts" setup>
import { computed } from 'vue'
import { btnSize, btnVariant, ButtonSize, ButtonVariant } from './const'
import { useLogger } from '@alvarosabu/use'
import AsIcon from '/@/components/as-icon/AsIcon.vue'

const props = defineProps({
  disabled: Boolean,
  outline: Boolean,
  transparent: Boolean,
  flat: Boolean || String,
  link: String,
  label: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: btnVariant.PRIMARY,
    validator: (val: ButtonVariant) => {
      const { error } = useLogger()
      const valid = Object.values(btnVariant).includes(val as btnVariant)
      if (!valid) {
        error(`Invalid button variant specified "${val}". Valid values are [${Object.values(btnVariant)}]`)
      }
      return valid
    },
  },
  size: {
    type: String,
    default: btnSize.DEFAULT,
    validator: (val: ButtonSize) => {
      const { error } = useLogger()

      const valid = Object.values(btnSize).includes(val as btnSize)
      if (!valid) {
        error(`Invalid button size specified "${val}". Valid values are [${Object.values(btnSize)}]`)
      }
      return valid
    },
  },
  target: {
    type: String,
    default: '_blank',
  },
  icon: {
    type: String,
  },
  iconRight: {
    type: String,
  },
})

/* const hasLabel = computed(() => props.label !== '') */

// Classes
const btnClasses = computed(() => {
  const classes: (string | { [key: string]: boolean })[] = ['as-btn']

  if (props.variant) {
    if (props.flat) {
      classes.push(`btn-flat-${props.variant.toLowerCase()}`)
    } else if (props.outline) {
      classes.push(`btn-outline-${props.variant.toLowerCase()}`)
    } else if (props.transparent) {
      classes.push(`btn-transparent-${props.variant.toLowerCase()}`)
    } else {
      classes.push(`btn-${props.variant.toLowerCase()}`)
    }
  }

  if (props.size) {
    classes.push({
      'py-2 px-4': props.size === btnSize.DEFAULT,
      'w-full py-2 px-5': props.size === btnSize.BLOCK,
      'text-xs py-1 px-2': props.size === btnSize.SM,
      'text-sm py-1.5 px-3': props.size === btnSize.MD,
      'text-lg py-2.5 px-5': props.size === btnSize.LG,
    })
  }

  return classes
})

const hasLabel = computed(() => props.label !== '')
</script>

<template>
  <component
    :is="link ? 'a' : 'button'"
    :disabled="disabled"
    :href="link || undefined"
    :target="link ? target : undefined"
    :class="btnClasses"
    font="sans semibold"
    border="2 rounded-sm"
    transition-all
    duration-300
    disabled:opacity-20
    cursor-pointer
    decoration-none
  >
    <slot name="preffix">
      <AsIcon v-if="icon" :name="icon" class="bg-current" :class="hasLabel ? 'mr-2' : ''" />
    </slot>
    <slot name="default">
      {{ label }}
    </slot>
    <slot name="suffix">
      <AsIcon v-if="hasLabel && iconRight" :name="iconRight" class="b-current" :class="hasLabel ? 'ml-2' : ''" />
    </slot>
  </component>
</template>

<style>
.as-btn:not([class*='btn-flat-'], [class*='btn-transparent-']):hover {
  /* TODO: Add transform directives on unocss and replace this */
  /* @apply transform -translate-x-0.5 -translate-y-0.5; */
  transform: translate(-0.125rem, -0.125rem);
}
</style>
