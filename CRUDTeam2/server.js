
const express = require("express");
const app = express();

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'persondb'
});
const router = express.Router();
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    console.log(' connection = mysql.createConnection ');
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: true});
app.use(express.static("src"));

app.get("/", function(request, response){
    response.sendFile("/src/index.html", { root: __dirname });
});

app.post("/writetodb", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log('request.body =======  '+ request.body.firstName);
    console.dir('console.dir = '+ request.body);
    writeToDB(request.body);
});

app.listen(3000);

// router.post('/create', function (req, res) {
//     console.log(req.body);
//       let user = req.body;
//
//     let sql = "INSERT INTO users (id, first_name, last_name, age) VALUES ?";
//     let values = [
//         [
//             user.id,
//             user.firstName,
//             user.lastName,
//             user.age
//         ]
//     ];
//     connection.query(sql, [values], function (err, result) {
//         if (err) throw err;
//         console.log("New user" + result.affectedRows);
//     });
//
//     connection.query('SELECT * FROM users', function (error, results, fields) {
//         res.send({results});
//     });
//
// });
//


function writeArrayToDB(arr) {
    for (let i = 0; i < arr.length; i++) {
        writeObjectToMySQL(arr[i]);
    }
};
function writeToDB(person) {
    const dataPerson = [person.id, person.firstName, person.lastName, person.age];
    // const dataPerson = [1, 'Vasya', 'Vasin', 112];
    const sql = "INSERT INTO PERSONTABLE(NATIVEID, FIRSTNAME, LASTNAME, AGE) VALUES(?, ?, ?, ?)";

    connection.query(sql, dataPerson, function (err, results) {
        if (err) console.log(err);
        else console.log("Данные добавлены");
    });
};

function readMongoDB() {
    Quote.find((err, candles) => {
        // Note that this error doesn't mean nothing was found,
        // it means the database had an error while searching, hence the 500 status
        if (err) return res.status(500).send(err)
        // send the list of all people
        model.setStringFromMongoDB(candles);
        // return res.status(200).send(candles);
    });
}
