<script setup lang="ts">
import { $fetch } from "ohmyfetch"
import { ref, onMounted } from "vue"

interface ArtworkResponse {
  data: Artwork[]
}

interface Artwork {
  id: number
  artist_title: string
  title: string
}

const artworks = ref<Artwork[]>([])
const loading = ref<boolean>(true)

onMounted(async () => {
  try {
    const response = await $fetch<ArtworkResponse>("https://api.artic.edu/api/v1/artworks")
    artworks.value = response.data
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <img v-if="loading" src="/pacman.svg" class="spinner">
  <div v-else>
    <p>I have found these artworks:</p>

    <div
      v-for="{ id, artist_title, title } in artworks"
      :key="id"
    >
      {{ artist_title }}: {{ title }}
    </div>
  </div>
</template>

<style scoped>
.spinner {
  height: 80px;
}
</style>
