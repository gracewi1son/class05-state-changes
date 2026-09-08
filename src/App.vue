<script setup>
import { ref } from 'vue'
import SoundButton from './components/SoundButton.vue'

const sounds = [
  { name: 'White Noise', sound: '/sounds/white-noise.mp3', icon: '/icons/radio.svg' },
  { name: 'Rain', sound: '/sounds/rain.mp3', icon: '/icons/rain.svg' },
  { name: 'Waves', sound: '/sounds/waves.mp3', icon: '/icons/waves.svg' },
  { name: 'Wind', sound: '/sounds/wind.mp3', icon: '/icons/wind.svg' },
]
const currentSounds = ref([])

function removeCurrentSound(name) {
  currentSounds.value = currentSounds.value.filter((s) => s !== name)
}

</script>

<template>
  <main class="player">
    <SoundButton v-for="s in sounds" :key="s.sound" :name="s.name" :sound="s.sound" :icon="s.icon"
    @play="$emit('removeCurrentSound')"/>
  </main>

  <p class="now-playing">Now playing: </p>

  <footer class="credits">
    Sounds from <a href="https://www.wnoise.org/white-noise-sounds.html" target="_blank" rel="noopener">wNoise.org</a>.
    Icons from <a href="https://phosphoricons.com/" target="_blank" rel="noopener">Phosphor Icons</a>.
  </footer>
</template>

<style scoped>
.player {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.now-playing {
  max-width: 640px;
  margin: 1.5rem auto 0;
  text-align: center;
}

.credits {
  max-width: 640px;
  margin: 1.5rem auto 0;
  text-align: center;
  font-size: 0.8rem;
  color: var(--color-text);
  opacity: 0.75;
}

.credits a {
  color: inherit;
}

@media (max-width: 480px) {
  .player {
    padding: 2rem 0.5rem;
    grid-template-columns: 1fr;
  }
}
</style>
