import Message from "./Message.vue";

export default class Dialog {
    constructor() {
        this._id = 0; // 弹窗ID
        this.data = [];
    }

    /**
     * @private
     */
    remove(msg) {
        var idx = this.data.indexOf(msg);
        if (idx >= 0) {
            this.data.splice(idx, 1);
        }
    }

    removeAll(component) {
        if (component) this.data = this.data.filter(item => item.component != component);
        else this.data = [];
    }

    find(component) {
        if (component == null) return this.data[this.data.length - 1];
        return this.data.find(item => item.component == component);
    }

    /**
     * @private
     */
    push(item) {
        let last = this.data[this.data.length - 1];
        if (last && last.component == item.component) {
            last.close();
        }
        let waitClose = new Promise(resolve => (item.onclose = resolve));
        let close = e => {
            item.onclose(e);
            this.remove(item);
        };
        item.close = close;
        item.id = ++this._id;
        this.data.push(item);
        waitClose.close = close;
        return waitClose;
    }

    /**
     * @param {Component|string} component
     * @param {string|any} [transition]
     * @param {any} [props]
     * @returns
     */
    show(component, transition, props) {
        if (typeof transition === "object") {
            props = transition;
            transition = "";
        }
        return this.push({ component, transition, props });
    }

    /**
     * @param {string} msg
     * @param {string|MessageOptions} [opts]
     */
    alert(msg, opts) {
        if (typeof opts === "string") opts = { title: opts };
        else if (Array.isArray(opts)) opts = { btns: opts };
        opts = Object.assign({ msg, btns: ["知道了"] }, opts);
        return this.show(Message, "it-fade", opts);
    }

    /**
     * @param {string} msg
     * @param {string|MessageOptions} [opts]
     */
    confirm(msg, opts) {
        if (typeof opts === "string") opts = { title: opts };
        else if (Array.isArray(opts)) opts = { btns: opts };
        opts = Object.assign({ msg, btns: ["取消", "确定"] }, opts);
        return this.show(Message, "it-fade", opts);
    }

    /**
     * @param {string} msg
     * @param {string} [value]
     * @param {MessageOptions} [opts]
     */
    prompt(msg, value, opts) {
        if (typeof value != "string" && !opts) {
            opts = value;
            value = "";
        }
        opts = Object.assign({ msg, value, btns: ["取消", "确定"] }, opts);
        return this.show(Message, "it-fade", opts);
    }
}
