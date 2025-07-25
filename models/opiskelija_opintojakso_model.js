const db = require('../database');

const opiskelija_opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opiskelija_opintojakso', callback);
  },
  getOpiskelijanOpintojaksot: function(id, callback) {
    return db.query('select * from opiskelija_opintojakso where idopiskelija=?', [id], callback);
  },
   getOpintojaksonOpiskelijat: function(id, callback) {
    return db.query('select * from opiskelija_opintojakso where idopintojakso=?', [id], callback);
  },
  add: function(opiskelija_opintojakso, callback) {
    return db.query(
      'insert into opiskelija_opintojakso (idOpiskelija,idOpintojakso,Arvosana,Päiväys) values(?,?,?,NOW())',
      [opiskelija_opintojakso.idOpiskelija, opiskelija_opintojakso.idOpintojakso, opiskelija_opintojakso.Arvosana],
      callback
    );
  },
  deleteOpiskelijaSuorite: function(idOpiskelija, idOpintojakso, callback) {
    return db.query('delete from opiskelija_opintojakso where idOpiskelija=? and idOpintojakso=?', [idOpiskelija, idOpintojakso], callback);
  },

  update: function(idOpiskelija, idOpintojakso, opiskelija_opintojakso, callback) {
    return db.query(
      'update opiskelija_opintojakso set Arvosana=?, Päiväys=NOW() where idOpiskelija=? and idOpintojakso=?',
      [opiskelija_opintojakso.Arvosana, idOpiskelija, idOpintojakso],
      callback
    );
  }
};
module.exports = opiskelija_opintojakso;