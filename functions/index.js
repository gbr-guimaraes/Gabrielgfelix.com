/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();
const db = admin.firestore();

exports.ptbr = functions
    .region("southamerica-east1")
    .https.onRequest((req, res) => {
      cors(req, res, () => {
        // Monitorar alterações na coleção "sobre"
        db.collection("pt-BR")
            .onSnapshot((snapshot) => {
              const sobreData = [];
              snapshot.forEach((doc) => {
                sobreData.push({id: doc.id, ...doc.data()});
              });
              res.json(sobreData);
            }, (error) => {
              res.status(500).json({error: error.message});
            });
      });
    });

exports.eses = functions
    .region("southamerica-east1")
    .https.onRequest((req, res) => {
      cors(req, res, () => {
        // Monitorar alterações na coleção "sobre"
        db.collection("es-ES")
            .onSnapshot((snapshot) => {
              const sobreData = [];
              snapshot.forEach((doc) => {
                sobreData.push({id: doc.id, ...doc.data()});
              });
              res.json(sobreData);
            }, (error) => {
              res.status(500).json({error: error.message});
            });
      });
    });

exports.itit = functions
    .region("southamerica-east1")
    .https.onRequest((req, res) => {
      cors(req, res, () => {
        // Monitorar alterações na coleção "sobre"
        db.collection("it-IT")
            .onSnapshot((snapshot) => {
              const sobreData = [];
              snapshot.forEach((doc) => {
                sobreData.push({id: doc.id, ...doc.data()});
              });
              res.json(sobreData);
            }, (error) => {
              res.status(500).json({error: error.message});
            });
      });
    });

exports.enus = functions
    .region("southamerica-east1")
    .https.onRequest((req, res) => {
      cors(req, res, () => {
        // Monitorar alterações na coleção "sobre"
        db.collection("en-US")
            .onSnapshot((snapshot) => {
              const sobreData = [];
              snapshot.forEach((doc) => {
                sobreData.push({id: doc.id, ...doc.data()});
              });
              res.json(sobreData);
            }, (error) => {
              res.status(500).json({error: error.message});
            });
      });
    });

exports.teste = functions
    .region("southamerica-east1")
    .https.onRequest((req, res) => {
      cors(req, res, () => {
        // Obter todas as coleções do banco de dados
        db.listCollections()
            .forEach((collection) => {
              console.log("Found subcollection with id:", collection.id);
              db.collection(collection.id).onSnapshot((snapshot) => {
                const sobreData = [];
                snapshot.forEach((doc) => {
                  sobreData.push({id: doc.id, ...doc.data()});
                });
                res.json(sobreData);
              }, (error) => {
                res.status(500).json({error: error.message});
              });
            });
      });
    });
