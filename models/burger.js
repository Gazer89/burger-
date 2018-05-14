var orm = require("../config/orm.js");

var burger = {
selectAll: function(callBack) {
    orm.selectAll("burgers", function(res) {
    callBack(res);
    });
  },
  // The variables cols and vals are arrays.
insertOne: function(colums, values, callBack) {
    orm.insertOne("burgers", colums, values, function(res) {
    callBack(res);
    });
  },
updateOne: function(objColVals, condition, callBack) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
    callBack(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;