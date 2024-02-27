// classes/EventEmitter.js
class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(channel, callback) {
        if (!this.listeners[channel]) {
            this.listeners[channel] = [];
        }
        this.listeners[channel].push(callback);
    }

    emit(channel, ...args) {
        if (this.listeners[channel]) {
            this.listeners[channel].forEach(callback => {
                callback(...args);
            });
        }
    }
}

module.exports = EventEmitter;
