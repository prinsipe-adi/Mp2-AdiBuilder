// imports
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");



const app = express();

// Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mamapapa",
    database: "login_demo"
})

// multer configuration | to store images in images directory
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "public/images");
    },
    filename: (req, file, cb) =>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage })



// middlewares that will run to any request that our listener will receive
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


// Fetch image API
app.get("/api/image", (req, res) => {
    const q = "SELECT * FROM images ORDER BY id DESC";

    db.query(q, (err, data) => {
        if(err) return res.json({message: "An error occured fetching image"});

        return res.json(data);

    })
})



//API Contact registration
app.post("/api/contact", async (req, res) => {
    // Query to validate if the email is registered
    const qValidate = "SELECT * FROM contact WHERE email = ?";

    // query to insert user's information to user table
    const qInsert = "INSERT INTO contact(`name`, `email`, `phone`, `formQuery`) VALUES (?,?,?,?)";

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const formQuery = req.body.formQuery;

    //to validate first the email
    db.query(qValidate, [email], (err, data) => {
      
        if(err) return res.json({message: 'An error occured validating email'});

        // validate if user exist
        if(data.length > 0) {
            return res.json({message: 'The user already exists. Please use a different email'});
        } else {

            db.query(qInsert, [name, email, phone, formQuery], (err, data) => {   
                if(err) return res.json({message: 'An error occured input contact registration'});

                return res.json({message: 'Thanks for contacting AdiBuilder! We will get intouch with you via phone or email within 24 hours'})
            }) 
        }
        // db.end();
    })
})



// api routes testing
app.get("/test", (req, res) =>{
    res.send("hello from backend")
})



// listerner
app.listen(8000, () => {
    console.log("Server is running on port 8000...")
})
