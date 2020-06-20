require('./style.css')
class Notify {
    config = {
        theme: 'default',
        effect: 'move',
        time: 3000,
        position: 'top-left'
    };
    constructor(config) {
        this.config = config;
        this.validation()

    }

    validation = () => {
        if (!this.config || typeof this.config != "object")
            throw new Error("config must be required and must be object")
    }


    createNotifyBox = () => {
        const box = document.createElement('div')
        box.classList.add("notify-box");
        box.classList.add("notify-" + this.config.position);
        box.classList.add("notify-move-open");
        box.id = "notify-box-id"
        return box
    }



    createNotifyContent = (box, message) => {
        const p = document.createElement('p');
        const close = document.createElement('span')
        close.innerHTML = "&times;";
        close.onclick = this.leaveNotif
        p.innerHTML += `<?xml version="1.0"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 448.011 448.011" style="enable-background:new 0 0 448.011 448.011;" xml:space="preserve" width="10px" height="10px" class="hovered-paths"><g><g>
            <g>
                <path d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4    l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472    l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#374957"/>
            </g>
        </g></g> </svg>
        `
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
            document.getElementById("notify-box-id").classList.remove("notify-move-open")
            document.getElementById("notify-box-id").classList.add("notify-move-leave")
            document.getElementById("notify-box-id").addEventListener('animationend', () => {
                document.getElementById("notify-box-id").remove();
            })
        }

    }
}

module.exports = Notify;