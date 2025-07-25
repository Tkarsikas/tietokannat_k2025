const db = require('../database');

const aliohjelmat = {
    opiskelija_keskiarvo: function(id, callback) {
        return db.query('call opiskelija_keskiarvo(?)', [id], callback);
    },
    kurssi_keskiarvo: function(id, callback) {
        return db.query('call kurssi_keskiarvo(?)', [id], callback);
    }
};

module.exports = aliohjelmat;