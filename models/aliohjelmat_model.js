const db = require('../database');

const aliohjelmat = {
    opiskelija_keskiarvo: function(id, callback) {
        return db.query('call opiskelija_keskiarvo(?)', [id], callback);
    },
    opintojakso_keskiarvo: function(id, callback) {
        return db.query('call opintojakso_keskiarvo(?)', [id], callback);
    }
};

module.exports = aliohjelmat;