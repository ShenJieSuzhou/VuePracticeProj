<template>
    <div>
        <itemcontainer father-component="item"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer.vue'

export default {
    name: 'item',
    components: {
        itemcontainer
    },
    created () {
        this.$store.commit('REMBER_TIME');
    }
}
</script>

<style>

</style>