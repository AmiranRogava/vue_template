<template>
  
    <router-view v-slot="{Component}">
        <nav>
            <router-link :to="{path:'/'}">
                home
            </router-link>

            <router-link :to="{path:'/about'}">
                about
            </router-link>

        </nav>

        <component :is="Component"></component>
    </router-view>
</template>

<script >
export default{
    
}

</script>

<style>

</style>