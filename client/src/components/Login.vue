<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
          <v-text-field
            label="email" 
            v-model="email"
            placeholder="email" />
          <br>
          <v-text-field
            label="password" 
            type="password"
            v-model="password"
            placeholder="password" />
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn class="cyan" dark
            @click="login">
            Log in
          </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
