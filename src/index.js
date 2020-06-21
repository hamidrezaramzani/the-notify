require('./style.css')
const icons = require('./icons')
class Notify {
    config = {
        theme: 'default',
        effect: 'move',
        time: 3000,
        position: 'top-left'
    };

    constructor(config) {
        this.config = { ...this.config, ...config };
        this.validation()

    }

    validation = () => {
        if (!this.config || typeof this.config != "object")
            throw new Error("config must be required and must be object")
    }



    getTheme = () => {
        if (!this.config.theme || !["success", "danger", "warning", "info", "default"].includes(this.config.theme)) {
            return "default"
        }
        return this.config.theme;
    }


    createNotifyBox = () => {
        const box = document.createElement('div')
        box.classList.add("notify-box");
        box.classList.add(`notify-${this.getTheme()}`)
        box.classList.add("notify-" + this.config.position);
        box.classList.add("notify-move-open-" + this.config.position);
        return box
    }

    getSvg = () => {
        if (["success", "danger", "warning", "info", "default"].includes(this.config.theme)) {
            return icons[this.config.theme]
        }
        return icons.default;
    }

    createNotifyContent = (box, message) => {
        const p = document.createElement('p');
        const close = document.createElement('span')
        close.innerHTML = "&times;";
        close.onclick = this.leaveNotif
        p.innerHTML += this.getSvg();
        p.innerHTML += message;
        p.classList.add("notify-content")
        box.appendChild(close)
        box.appendChild(p)
        return box;
    }


    notifySpace = () => {
        const boxes = document.getElementsByClassName("notify-box");
        if (boxes.length) {
            for (const item of boxes) {
                const positon = this.config.position.split('-')[0];
                const styles = getComputedStyle(item)
                const numeric = Math.round(Number(styles[positon].replace("px", "")))
                item.style[positon] = numeric + 50 + "px";
            }
        }

    }

    show = (message) => {
        let notifyBox = this.createNotifyBox();
        notifyBox = this.createNotifyContent(notifyBox, message)
        this.notifySpace();
        document.body.appendChild(notifyBox);
        setTimeout(this.leaveNotif.bind(this, notifyBox, true), this.config.time || 3000);
    }

    leaveNotif = (e, status = false) => {
        let element = e;
        if (!status)
            element = e.target.closest(".notify-box")


        if (element) {
            element.classList.remove("notify-move-open-" + this.config.position)
            element.classList.add("notify-move-leave-" + this.config.position)
            element.addEventListener('animationend', () => {
                element.remove();
            })
        }

    }
}

module.exports = Notify;

