const express = require('express');
const router = express.Router();
const opiskelija_opintojakso = require('../models/opiskelija_opintojakso_model');

router.get('/',
    function (request, response) {
        opiskelija_opintojakso.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        })
    });

router.get('/:id/opintojaksot',
    function (request, response) {
        opiskelija_opintojakso.getOpiskelijanOpintojaksot(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

router.get('/:id/opiskelijat',
    function (request, response) {
        opiskelija_opintojakso.getOpintojaksonOpiskelijat(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });



router.post('/', 
function(request, response) {
  opiskelija_opintojakso.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.delete('/:idOpiskelija/:idOpintojakso', 
function(request, response) {
  opiskelija_opintojakso.deleteOpiskelijaSuorite(request.params.idOpiskelija, request.params.idOpintojakso, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:idOpiskelija/:idOpintojakso', 
function(request, response) {
  opiskelija_opintojakso.update(request.params.idOpiskelija, request.params.idOpintojakso, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;