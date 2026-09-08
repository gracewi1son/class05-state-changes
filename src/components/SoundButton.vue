<script setup>
import { ref } from 'vue'


const props = defineProps({
  name: String,
  icon: String,
  sound: String
})
const emit = defineEmits(['play', 'stop'])

const isPlaying = ref(false)

const audio = new Audio()
audio.loop = true
audio.src = props.sound

function toggleSound() {
  if (isPlaying.value) {
    audio.pause()
    isPlaying.value = false
    emit('stop', props.name)
  } else {
    audio.play()
    isPlaying.value = true
    emit('play', props.name)
  }
}
</script>

<template>
  <button type="button" class="sound-button" v-on:click="toggleSound" :class="{ playing: isPlaying }">
    <img v-if="isPlaying" class="status" src="/icons/speaker-active.svg" alt="" width="16" height="16" />
    <img v-else class="status" src="/icons/speaker-mute.svg" alt="" width="16" height="16" />
    <i>
      <img :src="icon" alt="" width="32" height="32" />
    </i>
    <span class="name">{{ name }}</span>
  </button>
</template>

<style scoped>
.sound-button {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1.5rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-background-soft);
  color: var(--color-text);
  cursor: pointer;
  transition:
    background-color 0.2s,
    border-color 0.2s,
    transform 0.1s;
}

.sound-button .status {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  opacity: 0.6;
}

@media (prefers-color-scheme: dark) {
  .sound-button .status,
  .sound-button i img {
    filter: invert(1);
  }
}

.sound-button:hover {
  border-color: var(--color-border-hover);
}

.sound-button:active {
  transform: scale(0.97);
}

.sound-button .name {
  font-weight: 500;
}

.sound-button.playing {
  background: hsla(160, 100%, 37%, 0.15);
  border-color: hsla(160, 100%, 37%, 0.6);
}
</style>
