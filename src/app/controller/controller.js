var redis = require("redis");
var client = redis.createClient();

client.on("connect", function () {
    console.log("Connection Successful!!");
});

exports.home = async (req, res) => {
    res.render('home')
}

exports.blue = async (req, res) => {

            client.incr('counterBlue', function (err, counter) {
                res.send({
                    color: "Blue",
                    counter: counter
                })
    });


}

exports.yellow = async (req, res) => {

    client.incr('counterYellow', function (err, counter) {
        res.send({
            color: "Yellow",
            counter: counter
        })
});
   
}
exports.grey = async (req, res) => {

    client.incr('counterGrey', function (err, counter) {
        res.send({
            color: "Grey",
            counter: counter
        })
});
}

// using redis object

exports.red = async (req, res) => {

    client.hgetall("colorRed", (err, data) => {
        if (err) console.log(err);
        else {
            client.incr('counterRed', function (err, counter) {
                client.hmset('colorRed', {
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