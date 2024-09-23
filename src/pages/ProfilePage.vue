<script setup>
import { AppState } from '@/AppState.js';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const profile = computed(() => AppState.profile)

onMounted(() => {
  getProfileByID()
})

async function getProfileByID() {

  try {
    const profileId = route.params.profileId
    await profilesService.getProfileByID(profileId)
    logger.log('Id of profile from url')
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}


</script>


<template>
  <div v-if="profile" class="container">
    <section class="row cover-img align-items-center" :style="{ backgroundImage: `url(${profile.coverImg})` }">
      <div class="col-12">
        <div class="text-center text-light d-flex justify-content-center align-items-center">
          <h1>
            <span class="me-3">{{ profile.name }}</span>
            <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" title="Check out my LinkedIn!">
              <i class="mdi mdi-linkedin"></i>
            </a>
          </h1>
          <div>
            <img :src="profile.picture" :alt="profile.name" class="profile-img">
            <i v-if="profile.graduated" class="mdi mdi-account-school fs-4"></i>
          </div>
        </div>
      </div>
    </section>
    <div class="row">
      <div class="col-12">
        <div class="fs-2">
          <p>{{ profile.bio }}</p>
        </div>

      </div>
    </div>
  </div>
  <div v-else class="container">
    <section class="row">
      <div class="col-12">
        <h1>Loading <i class="mdi mdi-account-convert mdi-spin"></i></h1>
      </div>
    </section>
  </div>





</template>


<style lang="scss" scoped>
.cover-img {
  min-height: 60dvh;
  background-size: cover;
}

h1 {
  text-shadow: 2px 2px black;
}

.profile-img {
  height: 30dvh;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;

}
</style>