<template>
    <div class="dialogs-message">
        <div class="box">
            <div class="title">{{ msg }}</div>
            <div v-if="value != null" class="input">
                <input v-model="v" type="text" />
            </div>
            <div class="actions">
                <button v-for="(item, i) in btns" :key="i" :class="btns.length > 1 && i < 1 ? 'failure' : 'success'"
                    @click="$emit('close', v == null ? i : i ? v : null)">
                    {{ item }}
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Message",
    components: {},
    props: {
        name: String,
        msg: String,
        title: {
            type: String,
        },
        timeout: Number, // 超时秒数
        value: String,
        btns: {
            type: Array,
        },
    },
    data() {
        return {
            v: this.value,
            t: 0,
        };
    },
    computed: {
        restTime() {
            if (!this.timeout) return "";
            return `(${this.timeout - this.t}s)`;
        },
    },
    mounted() {
        if (this.timeout) {
            let h = setInterval(() => {
                this.t++;
                if (this.t >= this.timeout) {
                    clearInterval(h);
                    this.$emit("close");
                }
            }, 1e3);
        }
        var input = this.$el.querySelector("input");
        if (input) {
            input.focus();
        }
    },
    methods: {},
};
</script>
<style lang="scss">
.dialogs-message {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);

    .title {
        margin-bottom: 6px;
        font-weight: bold;
    }

    .box {
        min-width: 240px;
        display: inline-block;
        padding: 12px;
        border-radius: 6px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);

        input {
            width: 100%;
        }

        .actions {
            margin-top: 12px;
            text-align: right;
        }
    }
}
</style>
