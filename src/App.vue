<template>
  <div>
    <my-nav></my-nav>
    <router-view/>
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
