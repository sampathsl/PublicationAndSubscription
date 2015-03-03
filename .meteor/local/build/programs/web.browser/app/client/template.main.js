(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw("<h1>Sample Publication And Subscription Application</h1>\n\n  "), Spacebars.include(view.lookupTemplate("items")) ];
}));
Meteor.startup(Template.body.renderToDocument);

})();
