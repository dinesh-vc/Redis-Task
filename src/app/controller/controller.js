var redis = require("redis");
var client = redis.createClient();

client.on("connect", function () {
    console.log("Connection Successful!!");
});

exports.home = async (req, res) => {
  
    res.render('home')
}

exports.blue = async (req, res) => {

    
    client.hgetall("colorBlue", (err, data) => {
        if (err) console.log(err);
        else {

            client.incr('counterBlue', function(err, counter) {
                client.hmset('colorBlue',{
                    color: "Blue",
                    counter: counter
                });
            });
        }
    });

    client.hgetall("colorBlue", (err, data) => {
        if (err) console.log(err);
        else res.send(data)  
    });
    
}

exports.yellow = async (req, res) => {
    
    client.hgetall("colorYellow", (err, data) => {
        if (err) console.log(err);
        else {
            client.incr('counterYellow', function(err, counter) {
                
                client.hmset('colorYellow',{
                    color: "Yellow",
                    counter: counter
                });
            });
        }
    });
    client.hgetall("colorYellow", (err, data) => {
        if (err) console.log(err);
        else res.send(data)
    });
}

exports.grey = async (req, res) => {


    client.hgetall("colorGrey", (err, data) => {
        if (err) console.log(err);
        else {

            client.incr('counterGrey', function(err, counter) {
                client.hmset('colorGrey',{
                    color: "Grey",
                    counter: counter
                });
            });
        }
    });

    client.hgetall("colorGrey", (err, data) => {
        if (err) console.log(err);
        else res.send(data)
    });
}
exports.red = async (req, res) => {
    
    client.hgetall("colorRed", (err, data) => {
        if (err) console.log(err);
        else {

            client.incr('counterRed', function(err, counter) {
                client.hmset('colorRed',{
                    color: "Red",
                    counter: counter
                });
            });
        }
    });

    client.hgetall("colorRed", (err, data) => {
        if (err) console.log(err);
        else res.send(data)
    });

}