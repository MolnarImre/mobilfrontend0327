const express = require('express')
const mysql = require('mysql')
const multer = require('multer');
const bodyParser = require('body-parser');
var connection
var cors = require('cors')
const app = express()
const port = 22008
const fs = require("fs")

function dbconn(){
   connection = mysql.createConnection({
    host: '192.168.0.200',
    user: 'u54_owYC26aHak',
    password: 'fl3.!J9clielm7rzaCKClx31',
    database: 's54_db'
  })
  connection.connect()
}

app.use(cors())

app.use(express.static('kepek'))

app.use(express.json())



app.get('/', (req, res) => {
  res.send('Hello World!')
})
//--------------------------------------------------------------fájl feltöltés


app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './kepek');
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });


app.post('/upload', upload.array('photo', 3), (req, res) => {
  console.log('file', req.files);
  console.log('body', req.body);
  res.status(200).json({
    message: 'success!',
  });
});
//-------------------------------------------------------------Végpontok
app.get('/marka', (req, res) => {

      dbconn()

    connection.query('SELECT * from auto_marka', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

  })

  app.get('/tipus', (req, res) => {

    dbconn()
    
    connection.query('SELECT * from auto_marka INNER JOIN auto_tipus ON auto_marka.marka_id=auto_tipus.marka_id', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

  })

app.get('/kepek', (req, res) => {

    dbconn()
    
    connection.query('SELECT auto_tipus_kep from auto_tipus', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

  })

  app.get('/alkatresz', (req, res) => {

    dbconn()
    
    connection.query('SELECT * from auto_alkatresz_kateg INNER JOIN auto_marka ON auto_alkatresz_kateg.komp_marka=auto_marka.marka_id INNER JOIN auto_tipus on auto_alkatresz_kateg.komp_tipus=auto_tipus.autotipus_id;  ', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

  })

  app.post('/keres', (req, res) => {

   dbconn()

    let parancs='SELECT * from auto_tipus where típus like "%'+req.body.bevitel1+'%"'
    connection.query(parancs, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

  })

  app.post('/alkatreszkereses', (req, res) => {

   dbconn()

    let parancs='SELECT * from auto_alkatresz_kateg where alkatresz_nev like "%'+req.body.bevitel1+'%"'
    connection.query(parancs, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

  })

app.post('/erdekel',(req,res)=>{
    dbconn()
    
    let parancs='INSERT INTO erdekel VALUES (NULL, '+req.body.bevitel1+' , "'+req.body.bevitel2+'", NOW())'
    connection.query(parancs, function (err, rows, fields) {
      if (err) 
          console.log(err)
		else
      res.send("Sikerült a vásárlás rögzítése!")
    })
    
    connection.end()

  
})


 app.post('/feltoltes', (req, res) => {
    const { komptipus, kompmarka, alkatreszgyarto, alkatresznev, alkatreszcikkszam, alkatreszar, alkatreszkepnev, alkatreszkepbase64 } = req.body
    dbconn()

    let parancs = `INSERT INTO auto_alkatresz_kateg VALUES (NULL, ${komptipus}, ${kompmarka}, "${alkatreszgyarto}", "${alkatresznev}", "${alkatreszcikkszam}", ${alkatreszar}, "${alkatreszkepnev}")`
    
    connection.query(parancs, function (err, rows, fields) {
      if (err)
        return console.log(err)

      // Kép mentése a képek mappába
      const imgPath = __dirname + "/kepek/" + alkatreszkepnev
      
      fs.writeFile(imgPath, alkatreszkepbase64, 'base64', function (err) {
          if (err) 
            return console.log(err)

          res.send("Sikerült a felvitel!")
      })
    })
    
    connection.end()
})

//-------------------------------------------------------------------Végpontok vége
app.listen(port, () => {
  console.log(`Example app listening at http://nodejs.dszcbaross.edu.hu:${port}`)
})