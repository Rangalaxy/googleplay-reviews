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

 app.post("/account", function(req, res) {
    if(!req.body.username || !req.body.password || !req.body.twitter) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
});
}

module.exports = appRouter;
