<template>
    <div>
      <p>视频</p>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
    export default {
        name: "video",
        data(){
            return{

            }
        },
        methods:{
            ...mapActions(['getVideo'])
        },
        computed:{
            ...mapState({
                video:state=>state.find.video
            })
        },
        mounted(){
            this.getVideo()
            console.log(this.video)
        }
    }
</script>

<style scoped>

</style>
