<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
      <v-text-field
            label="Title" 
            required
            :rules="[required]"
            v-model="song.title"
      />
      <v-text-field
            label="Artist" 
            required
            :rules="[required]"
            v-model="song.artist"
      />
      <v-text-field
            label="Genre" 
            required
            :rules="[required]"
            v-model="song.genre"
      />
      <v-text-field
            label="Album" 
            required
            :rules="[required]"
            v-model="song.album"
      />
      <v-text-field
            label="Album Image Url" 
            required
            :rules="[required]"
            v-model="song.albumImageUrl"
      />
      <v-text-field
            label="YouTube ID" 
            required
            :rules="[required]"
            v-model="song.youtubeId"
      />
    </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
      <v-text-field
            required
            :rules="[required]"
            multi-line
            label="Tab" 
            v-model="song.tab"
      />
      <v-text-field
            required
            :rules="[required]"
            multi-line
            label="Lyrics" 
            v-model="song.lyrics"
      />
      </panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <v-btn class="cyan" dark
            @click="create">
            Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data: () => ({
    song: {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    },
    required: (value) => !!value || 'Required.',
    error: null
  }),
  methods: {
    async create() {
      this.error = null;
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if(!areAllFieldsFilledIn){
        this.error = 'Please fill in all the required fields.'
        return;
      }
      await SongsService.create(this.song)
      this.$router.push({
        name: 'songs'
      })
    }
  },
  components: {
    Panel
  }
}
</script>

<style>

</style>
