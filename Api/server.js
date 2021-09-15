let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// homepage route
app.get('/', (req, res) => {
    return res.send({ 
        error: false, 
        message: 'Welcome to RESTful CRUD API with NodeJS, Express, MYSQL',
        written_by: 'Patiphan',
        published_on: 'https://milerdev.dev'
    })
})

// connection to mysql database
let dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wmwash'
})
dbCon.connect();

// retrieve all Location 
app.get('/location', (req, res) => {
    dbCon.query('SELECT  DISTINCT Location_name , Location_ID FROM location', (error, results, fields) => {
        if (error) throw error;
        return res.send(results);
    })
})
app.get('/location3', (req, res) => {
    dbCon.query('SELECT COUNT (DISTINCT Location_ID) AS total FROM location ', (error, results, fields) => {
        if (error) throw error;
        return res.send(results);
    })
})
app.get('/Location1', (req, res) => {
    dbCon.query('SELECT * FROM location', (error, results, fields) => {
        if (error) throw error;
        return res.send(results);
    })
})
app.get('/report1', (req, res) => {
    dbCon.query('SELECT * FROM report1', (error, results, fields) => {
        if (error) throw error;
        return res.send(results);
    })
})


app.get('/fanction', (req, res) => {
    dbCon.query('SELECT * FROM fanction_machine', (error, results, fields) => {
        if (error) throw error;
        return res.send(results);
    })
})
app.get('/fanction1', (req, res) => {
    dbCon.query('SELECT DISTINCT Machine_Model ,Fanction_machine FROM fanction_machine', (error, results, fields) => {
        if (error) throw error;
        return res.send(results);
    })
})


// app.post('/book', (req, res) => {
//     let name = req.body.name;
//     let author = req.body.author;

//     // validation
//     if (!name || !author) {
//         return res.status(400).send({ error: true, message: "Please provide book name and author."});
//     } else {
//         dbCon.query('INSERT INTO books (name, author) VALUES(?, ?)', [name, author], (error, results, fields) => {
//             if (error) throw error;
//             return res.send({ error: false, data: results, message: "Book successfully added"})
//         })
//     }
// });

  

/*app.get('/washingmachine/:Wash_ID', (req, res) => {
    dbCon.query("SELECT *  FROM washingmachine WHERE Wash_ID LIKE 'L01%'", (error, results, fields) => {
        if (error) throw error;
        return res.send(results);
    })
})*/
// app.get('/location/:id', (req, res) => {
//     var pageid = req.params.id;
//     var sql = "SELECT * FROM  washingmachine HID = " + pageid; 
//     var properties = "SELECT * FROM Location_name WHERE HID = " + pageid;
//     var research = "SELECT * FROM Location_ID WHERE HID = " + pageid;
//     dbCon.query((sql),(err,result) => {
//         if(err){
//             console.log(err);
//         }else {
//             res.send(result);
//         }
//     });
// });

// add a new book
app.post('/add', (req, res) => {
    let Location_name = req.body.Location_name;
    let Wash_ID = req.body.Wash_ID;
    let Location_ID = req.body.Location_ID;
    let Wash_Amount = req.body.Wash_Amount;

    // validation
    if (Location_name && !Wash_ID && Location_ID && Wash_Amount) {
        return res.status(400).send({ error: true, message: "Please provide ."});
    } else {
        dbCon.query("INSERT INTO  location  (Location_name,Wash_ID,Location_ID,Wash_Amount) VALUES(?, ?, ?, ?)", [Location_name,Wash_ID,Location_ID,Wash_Amount], (error, results, fields) => {
            if (error) throw error;
            return res.send({ error: false, data: results, message: "WMWASH successfully added"})
        })
    }
});
app.post('/report', (req, res) => {
    let Location_name = req.body.Location_name;
    let Wash_ID = req.body.Wash_ID;
    let report = req.body.report;

    // validation
    if (Location_name && !Wash_ID && report) {
        return res.status(400).send({ error: true, message: "Please provide ."});
    } else {
        dbCon.query("INSERT INTO  report1  (Location_name,Wash_ID,report) VALUES(?, ?, ?)", [Location_name,Wash_ID,report], (error, results, fields) => {
            if (error) throw error;
            return res.send({ error: false, data: results, message: "WMWASH successfully added"})
        })
    }
});


// retrieve location by id 
app.get('/location/:Wash_ID', (req, res) => {
    let id = req.params.Wash_ID;

    if (!id) {
        return res.status(400).send({ error: true, message: "Please provide location id"});
    } else {
        dbCon.query("SELECT COUNT(*) FROM location WHERE Location_ID = ? ", id, (error, results, fields) => {
            if (error) throw error;

            let message = "";
            if (results === undefined || results.length == 0) {
                message = "ID not found";
            } else {
                message = "Successfully retrieved ID data";
            }

            return res.send({ error: false, data: results[0], message: message })
        })
    }
})

// update book with id 
// app.put('/book', (req, res) => {
//     let id = req.body.id;
//     let name = req.body.name;
//     let author = req.body.author;

//     // validation
//     if (!id || !name || !author) {
//         return res.status(400).send({ error: true, message: 'Please provide book id, name and author'});
//     } else {
//         dbCon.query('UPDATE books SET name = ?, author = ? WHERE id = ?', [name, author, id], (error, results, fields) => {
//             if (error) throw error;

//             let message = "";
//             if (results.changedRows === 0) {
//                 message = "Book not found or data are same";
//             } else {
//                 message = "Book successfully updated";
//             }

//             return res.send({ error: false, data: results, message: message })
//         })
//     }
// })

// delete book by id
app.delete('/De', (req, res) => {
    let id = req.body.Wash_ID;

    if (!id) {
        return res.status(400).send({ error: true, message: "Please provide book id"});
    } else {
        dbCon.query('DELETE FROM location WHERE Wash_ID = ?', [id], (error, results, fields) => {
            if (error) throw error;

            let message = "";
            if (results.affectedRows === 0) {
                message = "Book not found";
            } else {
                message = "Book successfully deleted";
            }

            return res.send({ error: false, data: results, message: message })
        })
    }
}) 

app.listen(8000, () => {
    console.log('Node App is running on port 8000');
})

module.exports = app;