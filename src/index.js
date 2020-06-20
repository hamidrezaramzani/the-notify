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
        box.id = "notify-box-id"
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


    show = (message) => {
        let notifyBox = this.createNotifyBox();
        notifyBox = this.createNotifyContent(notifyBox, message)
        document.body.appendChild(notifyBox);
        setTimeout(this.leaveNotif, this.config.time || 3000);
    }


    leaveNotif = () => {
        if (document.getElementById('notify-box-id')) {
            document.getElementById("notify-box-id").classList.remove("notify-move-open-" + this.config.position)
            document.getElementById("notify-box-id").classList.add("notify-move-leave-" + this.config.position)
            document.getElementById("notify-box-id").addEventListener('animationend', () => {
                document.getElementById("notify-box-id").remove();
            })
        }

    }
}

module.exports = Notify;


// JUST FOR TEST
const btn = document.createElement('button')
btn.innerHTML = "click";
btn.onclick = () => {
    const notify = new Notify({ theme: 'success', position: 'bottom-left' })
    notify.show("My Name Is Hamidreza");
}

document.body.appendChild(btn)