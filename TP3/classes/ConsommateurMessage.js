// classes/ConsommateurMessage.js
const EventEmitter = require('./EventEmitter');

class ConsommateurMessage {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }

    sAbonner(chaine) {
        this.eventEmitter.on(chaine, message => {
            this.recevoirMessage(message);
        });
    }

    recevoirMessage(message) {
        console.log(`Message reçu sur la chaîne ${message.chaine} :`, message);
    }
}

module.exports = ConsommateurMessage;
