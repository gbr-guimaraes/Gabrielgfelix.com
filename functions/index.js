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
      cors(req, res, async () => {
        // Obter todas as coleções do banco de dados
        const collections = await db.listCollections();

        // Criar um array de promises para cada coleção
        const promises = collections.map((collection) => {
          return new Promise((resolve, reject) => {
            db.collection(collection.id).onSnapshot((snapshot) => {
              const sobreData = [];
              snapshot.forEach((doc) => {
                sobreData.push({id: doc.id, ...doc.data()});
              });
              resolve({[collection.id]: sobreData});
            }, (error) => {
              reject(error); // Rejeita a promise caso ocorra um erro
            });
          });
        });

        // Esperar que todas as promises sejam resolvidas
        Promise.all(promises)
            .then((data) => {
            // Junta os dados de todas as coleções em um único array
              const allData = data.flat();
              res.json(allData);
            })
            .catch((error) => {
              res.status(500).json({error: error.message});
            });
      });
    });
