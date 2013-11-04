
//Template.content.users = function () {
  //return Meteor.users.find();
//};

if (Meteor.isClient) {
  Template.hello.greetings = function () {
    return "Welcome to gabyapp. Please log in to see your user name: ";
  }
  //Template.messages.messages=function(){
    //return Messages.find({},{sort:{time:-1}});
  //}
  Template.hello.events
  ({'click a' : function () 
    {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
