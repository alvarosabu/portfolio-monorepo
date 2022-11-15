<script lang="ts" setup>
/* eslint-disable max-len */
import { computed } from 'vue'
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const state = reactive({
  isOpen: false,
})

const isFormSubmitted = ref(false)

const title = computed(() => {
  return props.blok.title.content[0].content[0].text
})

function submitHandler() {
  isFormSubmitted.value = true
  state.isOpen = false

  setTimeout(() => {
    isFormSubmitted.value = false
  }, 2000)
}

function onClose(value: boolean) {
  state.isOpen = value
}
</script>
<template>
  <div
    v-editable="blok"
    data-cy="home-hero"
    class="home-hero"
    container
    mx-auto
    w-full
    h-screen
    flex
    justify-between
    items-center
    snap-start
  >
    <div hidden md:flex w="1/2" justify-center>
      <PancakePlanet />
    </div>
    <div
      v-show="true"
      class="home-hero__content prose dark:prose-invert sm:w-2/5 text-primary-500 dark:text-gray-100 flex flex-col justify-center animate__animated animate__fadeIn"
    >
      <h1 mb-8 data-cy="home-hero-title" v-html="title"></h1>
      <RichTextRenderer v-if="blok" :document="blok.content" />
      <SocialLinks mb-8 :items="blok.socialLinks" />
      <footer class="flex justify-end">
        <AsButton outline variant="secondary" @click="state.isOpen = true">{{ blok.contactBtnLabel }}</AsButton>
      </footer>
    </div>
    <teleport to="body">
      <AsModal v-bind="state" :title="blok.modalTitle" @update:is-open="onClose($event)">
        <template #header>
          <h2 id="modal-title" class="sm:mt-8 headline-3 sm:headline-2 sm:w-3/4 sm:mx-auto">
            {{ blok.modalTitle }}
          </h2>
        </template>
        <template #content>
          <div class="w-full sm:w-3/4 sm:mx-auto">
            <RichTextRenderer v-if="blok" :document="blok.modalText.content" />
            <FormKit
              id="contact-form"
              name="contact-form"
              mt-8
              method="POST"
              netlify
              data-netlify="true"
              type="form"
              :config="{ validationVisibility: 'submit' }"
              :submit-label="blok.modalSubmitLabel"
              :submit-attrs="{
                inputClass:
                  'as-btn btn-secondary py-2 px-4 font-semibold transition-all duration-300 disabled:opacity-20 cursor-pointer decoration-none',
              }"
              @submit="submitHandler"
            >
              <FormKit type="hidden" name="form-name" value="contact-form" />

              <FormKit type="text" name="name" label="Your name" />
              <FormKit type="email" name="email" label="Email" validation="required" placeholder="hola@awiwi.dev" />
              <FormKit
                type="textarea"
                name="subject"
                rows="10"
                label="Subject"
                validation="required"
                placeholder="You are a sunshine and I love you"
              />
            </FormKit>
          </div>
        </template>
      </AsModal>
    </teleport>
    <teleport to="body">
      <AsModal :is-open="isFormSubmitted">
        <template #content>
          <div class="w-full sm:w-3/4 sm:mx-auto text-center">
            <p class="text-4xl mb-8">😊</p>
            <div class="text-2xl"><RichTextRenderer v-if="blok" :document="blok.modalSubmitMessage.content" /></div>
          </div>
        </template>
      </AsModal>
    </teleport>
  </div>
</template>

<style lang="scss">
.home-hero {
  &__content p {
    @apply mb-4;
  }
}
.space {
  background: url('/home/space-dust.png');
}

.pancake-planet {
  width: 460px !important;
  height: 460px !important;
  transform: scale(0.75);
}
</style>
