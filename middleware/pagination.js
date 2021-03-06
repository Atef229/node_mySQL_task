const db = require('../config/db');
const async = require('async');

const pagination = (model,join) => (req, res, next) => {

const perPage = 25;
const page = req.query.page;
async.parallel([
  function(callback) {
    db.query(`SELECT COUNT(*) FROM ${model}`,
    (err, rows) => {
        var total = rows[0]['COUNT(*)'];
        callback(err, total);  
    })
  },
  function(callback) {
   const offset=(perPage * page)
   const limit= (perPage)
    db.query(`SELECT * FROM ${model} ${join} LIMIT ${limit} OFFSET ${offset}`,
    (err, rows) => {
        if(err) return next(err);
        callback(err, rows);
    })
  }
], function(err, results) {
  var total = results[0];
  var rows = results[1];
 
  res.json({
    success: true,
    Data: rows,
    total: total,
    pages: Math.ceil(total / perPage)
  });
});
};

module.exports = pagination;
