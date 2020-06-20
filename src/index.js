require('./style.css')
class Notify {
    config = {
        theme: 'default',
        effect: 'move',
        time: 3000,
        position: 'top-left'
    };


    iconSvgs = {
        success: `<?xml version="1.0"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 477.867 477.867;" xml:space="preserve" width="15px" height="15px" class=""><g><g>
            <g>
                <path d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933    C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8    s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
            </g>
        </g><g>
            <g>
                <path d="M370.046,141.534c-6.614-6.388-17.099-6.388-23.712,0v0L187.733,300.134l-56.201-56.201    c-6.548-6.78-17.353-6.967-24.132-0.419c-6.78,6.548-6.967,17.353-0.419,24.132c0.137,0.142,0.277,0.282,0.419,0.419    l68.267,68.267c6.664,6.663,17.468,6.663,24.132,0l170.667-170.667C377.014,158.886,376.826,148.082,370.046,141.534z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
            </g>
        </g></g> </svg>
        `,
        danger: `<?xml version="1.0"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve" width="15px" height="15px" class="hovered-paths"><g><g>
            <g>
                <path d="M503.839,395.379l-195.7-338.962C297.257,37.569,277.766,26.315,256,26.315c-21.765,0-41.257,11.254-52.139,30.102    L8.162,395.378c-10.883,18.85-10.883,41.356,0,60.205c10.883,18.849,30.373,30.102,52.139,30.102h391.398    c21.765,0,41.256-11.254,52.14-30.101C514.722,436.734,514.722,414.228,503.839,395.379z M477.861,440.586    c-5.461,9.458-15.241,15.104-26.162,15.104H60.301c-10.922,0-20.702-5.646-26.162-15.104c-5.46-9.458-5.46-20.75,0-30.208    L229.84,71.416c5.46-9.458,15.24-15.104,26.161-15.104c10.92,0,20.701,5.646,26.161,15.104l195.7,338.962    C483.321,419.836,483.321,431.128,477.861,440.586z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#FFFFFF"/>
            </g>
        </g><g>
            <g>
                <rect x="241.001" y="176.01" width="29.996" height="149.982" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#FFFFFF"/>
            </g>
        </g><g>
            <g>
                <path d="M256,355.99c-11.027,0-19.998,8.971-19.998,19.998s8.971,19.998,19.998,19.998c11.026,0,19.998-8.971,19.998-19.998    S267.027,355.99,256,355.99z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#FFFFFF"/>
            </g>
        </g></g> </svg>
        ` ,
        warning: `<?xml version="1.0"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="15px" height="15px" class=""><g><g>
            <g>
                <path d="M501.362,383.95L320.497,51.474c-29.059-48.921-99.896-48.986-128.994,0L10.647,383.95    c-29.706,49.989,6.259,113.291,64.482,113.291h361.736C495.039,497.241,531.068,433.99,501.362,383.95z M256,437.241    c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30C286,423.779,272.538,437.241,256,437.241z     M286,317.241c0,16.538-13.462,30-30,30c-16.538,0-30-13.462-30-30v-150c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30    V317.241z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
            </g>
        </g></g> </svg>
        `
        ,
        info: `<?xml version="1.0"?>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="15px" viewBox="0 0 512 512" width="15px" class="hovered-paths"><g><g><path d="m256 512c-44.112 0-80-35.888-80-80v-160c0-44.112 35.888-80 80-80s80 35.888 80 80v160c0 44.112-35.888 80-80 80zm0-288c-26.467 0-48 21.533-48 48v160c0 26.467 21.533 48 48 48 26.468 0 48-21.533 48-48v-160c0-26.467-21.532-48-48-48z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#FFFFFF"/><path d="m256 160c-44.112 0-80-35.888-80-80s35.888-80 80-80 80 35.888 80 80-35.888 80-80 80zm0-128c-26.467 0-48 21.533-48 48s21.533 48 48 48 48-21.533 48-48-21.533-48-48-48z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#FFFFFF"/></g></g> </svg>
        `
        ,
        default: `<?xml version="1.0"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 448.011 448.011" style="enable-background:new 0 0 448.011 448.011;" xml:space="preserve" width="10px" height="10px" class="hovered-paths"><g><g>
            <g>
                <path d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4    l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472    l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#374957"/>
            </g>
        </g></g> </svg>        
        `
    }

    constructor(config) {
        this.config = config;
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
        box.classList.add("notify-move-open");
        box.id = "notify-box-id"
        return box
    }

    getSvg = () => {
        if (["success", "danger", "warning", "info", "default"].includes(this.config.theme)) {
            return this.iconSvgs[this.config.theme]
        }
        return this.iconSvgs.default;
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
        // setTimeout(this.leaveNotif, this.config.time || 3000);
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


// JUST FOR TEST
const btn = document.createElement('button')
btn.innerHTML = "click";
btn.onclick = () => {
    const notify = new Notify({ theme: 'fsfsfs' })
    notify.show("My Name Is Hamidreza");
}

document.body.appendChild(btn)