<script setup>
import Navbar from './components/Navbar.vue';
import { adsService } from './services/AdsService.js';
import Pop from './utils/Pop.js';
import { logger } from './utils/Logger.js';
import { computed, onMounted } from 'vue';
import { AppState } from './AppState.js';


const ads = computed(() => AppState.ad)

onMounted(() => {
  getAds()
})


async function getAds() {
  try {
    await adsService.getAds()
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}



</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="container d-flex">
      <div class="row">
        <div v-for="ad in ads" :key="ad.tall" class="col-2">
          {{ ads }}
        </div>
      </div>
    </div>
    <router-view />
  </main>
  <footer>

  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
