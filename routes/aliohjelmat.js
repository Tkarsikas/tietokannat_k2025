const express = require('express');
const router = express.Router();
const aliohjelmat = require('../models/aliohjelmat_model');

router.get('/opiskelija_keskiarvo/:id', function(request, response) {
    aliohjelmat.opiskelija_keskiarvo(request.params.id, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

router.get('/opintojakso_keskiarvo/:id', function(request, response) {
    aliohjelmat.opintojakso_keskiarvo(request.params.id, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

module.exports = router;
