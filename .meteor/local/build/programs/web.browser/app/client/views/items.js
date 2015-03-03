(function(){/**
 * Created by test on 3/2/15.
 */

Template.items.helpers({
    showItems: function () {
        return Items.find();
    }
});

Template.items.helpers({
    showClicks: function () {
        return Clicks.find();
    }
});

Template.items.events({
    'click #add' : function(){
        Meteor.call('addClick');
    },
    'click #btnAddItem' : function(){
        Meteor.call('addItemClick');
    }
});

})();
