var redis = require("redis");
var client = redis.createClient();


let blueCount=0;
let yellowCount=0;
let redCount=0;
let greyCount=0;

client.on("connect", function () {
      
 blueCount=0;
 yellowCount=0;
 redCount=0;
 greyCount=0;

    console.log("Connection Successful!!");
});

exports.home = async (req, res) => {
  
    res.render('home')
}

exports.blue = async (req, res) => {

    if(blueCount==0) {
        client.hmset("colorBlue", {
            color: "Blue",
            counter: 1
        }); 
    }
    
    client.hgetall("colorBlue", (err, data) => {
        if (err) console.log(err);
        else {
            let count = parseInt(data.counter) + 1;
            client.hmset("colorBlue", {
                color: "Blue",
                counter: count
            });
        }
    });
    client.hgetall("colorBlue", (err, data) => {
        if (err) console.log(err);
        else res.send(data)  
    });
    blueCount=blueCount+1;
}

exports.yellow = async (req, res) => {

    if(yellowCount==0) {
        client.hmset("colorYellow", {
            color: "yellow",
            counter: 1
        }); 
    }
    
    client.hgetall("colorYellow", (err, data) => {

        if (err) console.log(err);
        else {
            let count = parseInt(data.counter) + 1;
            client.hmset("colorYellow", {
                color: "yellow",
                counter: count
            });
        }
    });
    client.hgetall("colorYellow", (err, data) => {
        if (err) console.log(err);
        else res.send(data)
    });

    yellowCount=yellowCount+1;
}

exports.grey = async (req, res) => {
    
    if(greyCount==0) {
        client.hmset("colorGrey", {
            color: "yellow",
            counter: 1
        }); 
    }

    client.hgetall("colorGrey", (err, data) => {
        if (err) console.log(err);
        else {
            let count = parseInt(data.counter) + 1;
            client.hmset("colorGrey", {
                color: "Grey",
                counter: count
            });
        }
    });

    client.hgetall("colorGrey", (err, data) => {
        if (err) console.log(err);
        else res.send(data)
    });
    greyCount=greyCount+1;
}
exports.red = async (req, res) => {
    
    if(redCount==0) {
        client.hmset("colorRed", {
            color: "Red",
            counter: 1
        }); 
    }
    client.hgetall("colorRed", (err, data) => {
        if (err) console.log(err);
        else {
            let count = parseInt(data.counter) + 1;
            client.hmset("colorRed", {
                color: "Red",
                counter: count
            });
        }
    });

    client.hgetall("colorRed", (err, data) => {
        if (err) console.log(err);
        else res.send(data)
    });
    redCount=redCount+1;
}