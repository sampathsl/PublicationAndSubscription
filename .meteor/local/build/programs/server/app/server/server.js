(function(){
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if(Items.find().count() == 0)  {
        for(var i = 0; i < 10 ; i++){
            Items.insert({"creationDate" : new Date() , "sentence" : " This is item " + i});
        }
    }
  });
}

Meteor.methods({
    'addClick' : function(){
        Clicks.insert({"creationDate" : new Date() , "num" : Math.floor(Math.random() * 1000)});
    },
    'addItemClick' : function(){
        Items.insert({"creationDate" : new Date() , "sentence" : " This is item " + (Items.find().count() + 1)});
    }
});

Meteor.publish('showItemCount',function(){
    return Items.find();
});

Meteor.publish('showClickCount',function(){
    return Clicks.find();
});

})();
