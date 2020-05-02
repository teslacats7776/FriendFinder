var friendsData = require("../app/data/friends");
var fs = require("fs");
module.exports = function (app) {

        app.get("/api/friends", function (req, res) {
            res.json(friendsData);
        });


        app.post("/api/friends", function (req, res) {
                // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
                // It will do this by sending out the value "true" have a table
                // req.body is available since we're using the body parsing middleware
                var newFriend =  req.body.scores;
                var totalDiffCount = 0;
                for (var i = 0; i < friendsData.length; i++) {
                    for (var j = 0; j < newFriend.length; j++) {

                        friendsData[i].scores[j]=parseInt(  friendsData[i].scores[j])
                        totalDiffCount += friendsData[i].scores[j] -  parseInt(newFriend[j]) 

                    };
                
                    friendsData[i].totalDifference = totalDiffCount;
                    console.log(friendsData)

                } ;


                friendsData.sort(function(a, b){return a.totalDifference - b.totalDifference});


                    friendsData.push(req.body);



                    fs.writeFile("./app/data/friends.json", JSON.stringify(friendsData), function (err) {
                        if (err) throw err;
                        console.log("success");
                    })

                    console.log(req.body)







                    res.json(friendsData);


                });

            // ---------------------------------------------------------------------------
            // I added this below code so you could clear out the table while working with the functionality.
            // Don"t worry about it!

            app.post("/api/clear", function (req, res) {
                // Empty out the arrays of data
                friendsData.length = 0;


                res.json({
                    ok: true
                });
            });
        };