class Notify {
    config = null;
    constructor(config) {
        this.config = config;
        this.validation()
    }

    validation = () => {
        if (!this.config || typeof this.config != "object")
            throw new Error("config must be required and must be object")
    }
}

module.exports = Notify;