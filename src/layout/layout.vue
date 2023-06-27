<template>
    <div>
        <router-view></router-view>
        <!-- <AppToast :data="dlg"></AppToast> -->
        <!-- <AppDialog :data="dlg"></AppDialog> -->
    </div>
</template>
<script setup>
import AppToast from "@/plugins/toast/AppToast.vue";
import AppDialog from "@/plugins/dialog/AppDialog.vue";
import Dialog from '@/plugins/dialog/dialog'
// let dlg = new Dialog();
// dlg.alert("警告提示，只有一个知道了按钮");
</script>
