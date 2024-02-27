// classes/ProducteurMessage.js
const EventEmitter = require('./EventEmitter');
const Message = require('./Message');

class ProducteurMessage {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }

    publierMessage(auteur, contenu, chaine) {
        const message = new Message(auteur, contenu, chaine);
        this.eventEmitter.emit(chaine, message);
    }
}

module.exports = ProducteurMessage;
