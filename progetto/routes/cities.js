var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb
const uri = 'mongodb+srv://MolinariDaniele:danielE118@cluster0.dn3hp.mongodb.net/Cluster0?retryWrites=true&w=majority';

/* GET users listing. */
router.get('/', function (req, res, next) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("WORLD_DATA_BANK").collection("sustainable_cities"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
    
});
/* GET users listing. */
router.get('/sust1', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    title = req.params.title;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("WORLD_DATA_BANK").collection("sustainable_cities1"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/sust2', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    title = req.params.title;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("WORLD_DATA_BANK").collection("sustainable_cities2"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});




    
module.exports = router;