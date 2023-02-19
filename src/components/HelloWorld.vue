<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'

interface ArtworkResponse {
  data: Artwork[]
}

interface Artwork {
  id: number
  artist_title: string
  title: string
}

const artworks = ref<Artwork[]>([])

onMounted(async () => {
  const response = await axios.get<ArtworkResponse>('https://api.artic.edu/api/v1/artworks')
  artworks.value = response.data.data
})
</script>

<template>
  <p>I have found these artworks:</p>

  <div v-for="{ id, artist_title, title } in artworks" :key="id">
    {{ artist_title }}: {{ title }}
  </div>
</template>
