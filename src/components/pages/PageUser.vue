<template>
    <div class="page-user">
        <h1 v-if="!user">Hello, {{ $route.params.name }}</h1>
        <h1 v-if="user">Hello, {{ user.name }}</h1>
        <h3>Nice to see you again.</h3>
        <h4 v-if="user">You entered by userID " {{ user.id }} ".</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { id: 1, name: 'John' },
                { id: 2, name: 'Tom' }
            ]
        }
    },
    computed: {
        user(){
            return this.users.find(user=>user.id==this.$route.params.num)
        }
    }
}
</script>

<style lang="scss">
.page-user{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
    margin: auto;
    height: 30vh;
}
</style>
