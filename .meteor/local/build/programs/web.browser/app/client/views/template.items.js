(function(){
Template.__checkName("items");
Template["items"] = new Template("Template.items", (function() {
  var view = this;
  return [ HTML.Raw('<button class="btn btn-primary" id="btnAddItem">Add Items!</button>\n    '), Blaze.Each(function() {
    return Spacebars.call(view.lookup("showItems"));
  }, function() {
    return [ "\n        ", HTML.P(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("sentence"));
    }), " : ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("creationDate"));
    })), "\n    " ];
  }), HTML.Raw('\n    <button class="btn btn-primary" id="add">Click Me!</button>\n    <br>\n    '), Blaze.Each(function() {
    return Spacebars.call(view.lookup("showClicks"));
  }, function() {
    return [ "\n        ", HTML.P(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("num"));
    }), " : ", Blaze.View(function() {
      return Spacebars.mustache(view.lookup("creationDate"));
    })), "\n    " ];
  }) ];
}));

})();
