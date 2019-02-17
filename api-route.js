var router = require('express').Router();
var contactController = require('./contactController');

router.get('/',(req,res)=>{
  res.json({status:'OK Working API ROUTE',message:'Welcome Default '});
});


router.route('/contacts')
.get(contactController.index)
.post(contactController.new);

module.exports = router;
