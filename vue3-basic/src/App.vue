<template>
    <div class="container">
        <global-header :user="currentUser"></global-header>
        <loader v-if="isLoading"></loader>
        <router-view></router-view>

        <footer class="text-center py-4 text=secondary bg-light mt-6">
            <small>
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">@ 2020 者也专栏</li>
                    <li class="list-inline-item">课程</li>
                    <li class="list-inline-item">文档</li>
                    <li class="list-inline-item">联系</li>
                    <li class="list-inline-item">更多</li>
                </ul>
            </small>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'
import GlobalHeader from './components/GlobalHeader.vue'
import Loader from './components/Loader.vue'
import axios from 'axios'


export default defineComponent({
    name: 'App',
    components: {
        GlobalHeader,
        Loader
    },
    setup() {
        const store = useStore<GlobalDataProps>()
        const currentUser = computed(() => store.state.user)
        const isLoading = computed(() => store.state.loading)
        const token = computed(() => store.state.token)
        onMounted(() => {
            if (!currentUser.value.isLogin && token.value) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
                store.dispatch('fetchCurrentUser')
            }
        })
        return {
            currentUser,
            isLoading
        }
    }
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 10px;
}
</style>
