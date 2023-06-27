<template>
    <div>
        <router-view></router-view>
        <BackHome v-if="route.path !== '/'"></BackHome>
        <!-- <AppToast :data="dlg"></AppToast> -->
        <!-- <AppDialog :data="dlg"></AppDialog> -->
    </div>
</template>
<script setup>
import AppToast from "@/plugins/toast/AppToast.vue";
import AppDialog from "@/plugins/dialog/AppDialog.vue";
import Dialog from '@/plugins/dialog/dialog'
import { useRoute } from "vue-router";
// let dlg = new Dialog();
// dlg.alert("警告提示，只有一个知道了按钮");
let route = useRoute()
</script>
