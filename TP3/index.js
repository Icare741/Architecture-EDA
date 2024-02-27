// index.js
const EventEmitter = require('./classes/EventEmitter');
const ProducteurMessage = require('./classes/ProducteurMessage');
const ConsommateurMessage = require('./classes/ConsommateurMessage');
const Message = require('./classes/Message');

// Création de l'émetteur d'événements central
console.log("Initialisation de l'émetteur d'événements central...");
const eventEmitter = new EventEmitter();
console.log("Émetteur d'événements central initialisé.");

// Création d'un producteur de messages
console.log("Initialisation du producteur de messages...");
const producteur = new ProducteurMessage(eventEmitter);
console.log("Producteur de messages initialisé.");

// Création de deux consommateurs de messages
console.log("Initialisation des consommateurs de messages...");
const consommateur1 = new ConsommateurMessage(eventEmitter);
const consommateur2 = new ConsommateurMessage(eventEmitter);
console.log("Consommateurs de messages initialisés.");

// Simulation de publication de messages
console.log("Publication de messages...");
producteur.publierMessage("Utilisateur1", "Contenu du message 1", "chaine1");
producteur.publierMessage("Utilisateur2", "Contenu du message 2", "chaine2");

// Simulation d'abonnement et réception de messages
console.log("Abonnement aux chaînes et réception de messages...");
consommateur1.sAbonner("chaine1");
consommateur2.sAbonner("chaine2");
