var appRouter = function(app) {
 app.get("/", function(req, res) {
    res.send("Hello World");
 });

 app.get("/reviews", function(req, res) {
    var gplay = require('google-play-scraper');

    gplay.reviews({appId: req.query.id})
    .then(function(resp){
  	    res.send(resp);
	    //console.log(resp);
    });

});

}

module.exports = appRouter;
