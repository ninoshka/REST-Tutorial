//import a model hence capital
var Contact = require('./contactModel');

//Handles index actions
exports.index=(req,res)=>{
   Contact.get(((err,contacts)=>{
      if(err){ res.json({status:"ERROR"});  }
      res.json({status:"SUCCESS",data:contacts});
  }
 ));
}

exports.new=((req,res)=>{
  var contact =new Contact();
  contact.name=req.body.name ? req.body.name : contact.name;
  contact.gender=req.body.gender;
  contact.email=req.body.email;
  contact.phone=req.body.phone;

  //contact.save((err)=>{res.json({message:"SAVED!",data:contact});});
  contact.save(function (err) {
   if (err)
   res.json(err);
   res.json({
            message: 'New contact created!',
            data: contact
        });
    });
});
