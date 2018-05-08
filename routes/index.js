var express = require('express');
var cors = require('cors');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var mongoDB = 'mongodb://127.0.0.1/HBHD';
var fs = require('fs');
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(mongoDB, (err, client) => {
  if (err) return console.log(err);
  db = client.db('HBHDItems'); // whatever your database name is
});

/* GET home page. */
router.get('/editor', function(req, res, next) {
  res.render('editor.ejs', {});
});

/* GET home page. */
router.post('/editor', function(req, res, next) {
  var filter = req.body.filter;
  db.collection("items").find({section: req.body.filter}).toArray(function(err, results){
    res.render('list.ejs', { choice: filter, item: results });
  });
});

router.get('/addItem', function(req, res, next){
  res.render('addItem.ejs');
})


// SHOW EDIT USER FORM
router.get('/edit/(:id)', function(req, res, next) {
  console.log('testttt');
  var o_id = new ObjectId(req.params.id).toString();


  db.collection('items').find({
    "_id": ObjectId(o_id).toString
  }).toArray(function(err, results) {

    for (var i = 0; i < results.length; i++) {

      if (results[i]._id == o_id) {

        console.log(results[i]);

        res.render('edit.ejs', {
          item: results[i]
        });
      }
    }
  });
});

router.get('/delete/(:id)', function(req, res) {

  var o_id = new ObjectId(req.params.id).toString();
  console.log("Delete get method");

  db.collection('items').find().toArray(function(err, results) {

    for (var i = 0; i < results.length; i++) {
  console.log("Made it here: " +results[i]);
      if (results[i]._id == o_id) {
        console.log("Made it here: " +results[i]);
        db.collection('items').deleteOne({
          "_id": results[i]._id
        }, function(err) {
          if (err) return handleError(err);
          console.log("deleted");
          res.redirect("/editor")
        });
      }
    }
  });
});

router.post('/edit/(:id)', function(req, res) {

  var o_id = new ObjectId(req.params.id).toString();


  db.collection('items').find({
    "_id": ObjectId(o_id).toString
  }).toArray(function(err, results) {
    for (var i = 0; i < results.length; i++) {
      if (results[i]._id == o_id) {
        console.log(results[i]);
        db.collection('items').updateOne({
          "_id": results[i]._id
        }, {
          $set: {
            "item": req.body.name,
            "Description": req.body.Description,
            "price": req.body.price
          }
        }, function(err) {

          console.log("success");
          res.redirect('/editor');
        });
      }
    }
  });
});

router.get('/brewskies',cors(), function(req, res){
  db.collection("items").find({section: 'brew'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/burgers',cors(), function(req, res){
  db.collection("items").find({section: 'burg'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/combos', cors(), function(req, res){
  db.collection("items").find({section: 'comb'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/Deezerts',cors(), function(req, res){
  db.collection("items").find({section: 'deez'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/dippers',cors(), function(req, res){
  db.collection("items").find({section: 'dip'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/hen', cors(),function(req, res){
  db.collection("items").find({section: 'hen'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/homewrecker',cors(), function(req, res){
  db.collection("items").find({section: 'home'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/xtra',cors(), function(req, res){
  db.collection("items").find({section: 'xtra'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/pick',cors(), function(req, res){
  db.collection("items").find({section: 'pick'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/rab',cors(), function(req, res){
  db.collection("items").find({section: 'rab'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/subs',cors(), function(req, res){
  db.collection("items").find({section: 'subs'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/weenies',cors(), function(req, res){
  db.collection("items").find({section: 'wee'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/wet',cors(), function(req, res){
  db.collection("items").find({section: 'wet'}).toArray(function(err, results){
    res.send(results);
  });
})
router.get('/youngins',cors(), function(req, res){
  db.collection("items").find({section: 'youn'}).toArray(function(err, results){
    res.send(results);
  });
})



router.post('/addItem', function(req, res, next){
    db.collection('items').save({section: req.body.section, item: req.body.name, Description: req.body.Description, price: req.body.price});
    res.redirect('/editor');
})


router.get('/Menu', function(req, res, next){
  res.sendFile(__dirname + 'index.html');
})

module.exports = router;
