<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'

const artworks = ref([])

onMounted(async () => {
  const response = await axios.get('https://api.artic.edu/api/v1/artworks')
  artworks.value = response.data.data
})
</script>

<template>
  <p>I have found these artworks:</p>

  <div v-for="{ artist_title, title } in artworks">
    {{ artist_title }}: {{ title }}
  </div>
</template>
