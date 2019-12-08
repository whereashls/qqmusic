<template>
  <div>
    <router-view/>
    <my-nav></my-nav>
  </div>
</template>

<script>
// @ is an alias to /src
import './assets/styles/reset.css'
import MyNav from '@/components/nav'

export default {
  // name: 'music',
  components: {
    MyNav
  }
}
</script>
