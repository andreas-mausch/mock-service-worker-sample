<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { PacmanLoader } from 'vue3-spinner'

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
    const response = await axios.get<ArtworkResponse>('https://api.artic.edu/api/v1/artworks')
    artworks.value = response.data.data
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <PacmanLoader v-if="loading" />
  <div v-else>
    <p>I have found these artworks:</p>

    <div v-for="{ id, artist_title, title } in artworks" :key="id">
      {{ artist_title }}: {{ title }}
    </div>
  </div>
</template>
