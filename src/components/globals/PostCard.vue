<script setup>
import { Post } from '@/models/Posts.js';



defineProps({
  PostProp: { type: Post, required: true }
})



</script>


<template>
  <div class="card">
    <img :src="PostProp.creator.coverImg" class="card-img-top" alt="">
    <div>
      <RouterLink :to="{ name: 'Profile', params: { profileId: PostProp.creator.id } }"
        :title="`Go to ${PostProp.creator.name}'s Profile Page!'`">
        <img :src="PostProp.creator.picture" class="creator-img" alt="">
      </RouterLink>
      <div class="card-body">
        <h5 class="card-title">{{ PostProp.creator.name }}</h5>
        <p class="card-text">{{ PostProp.body }}</p>
        <button class="btn btn-primary">Details</button>
      </div>

    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  object-fit: cover;
}


.card-img-top {
  height: 25dvh;

}

.creator-img {
  height: 10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 207px;


}
</style>