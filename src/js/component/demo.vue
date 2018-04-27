<template>
  <div>
    <font-awesome-icon :icon="icon" />
    <br>

    <font-awesome-icon :icon="faAnchor" />
    <br>

    <b-button variant="success">Disabled</b-button>

    <div
      class="alert alert-primary"
      role="alert">
      This is a primary alert—check it out!
    </div>
    <br>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
    import faAnchor from '@fortawesome/fontawesome-free-solid/faAnchor'
    import store from '../store/vuexStoreDemo'
    import bButton from 'bootstrap-vue/es/components/button/button'

    export default {
        components: {
            FontAwesomeIcon,
            'b-button': bButton
        },
        computed: {
            count () {
                return store.state.count
            },
            icon () {
                return faCoffee
            },
            faAnchor () {
                return faAnchor
            }
        },
        // actions
        methods: {
            increment () {
                store.commit('increment')
            },
            decrement () {
                store.commit('decrement')
            }
        }
    }
</script>

<style scoped src="../../../node_modules/bootstrap/dist/css/bootstrap.min.css"></style>
<style scoped src="../../../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css"></style>

