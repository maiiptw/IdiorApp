const mysql = require("mysql");
const express = require("express");
const session = require("express-session");
const app = express();
const port = '5050';
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//     set if not login go to login page
app.get('/sa', function(request, response) {
    console.log('test');
	response.redirect('/login');
});

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "pongthawat.sut",
    password: "Mai@021139",
    database: "idiordb"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Database already connected!");
});

testfind = (id, customers) => {
    return customers.filter(x => x.id == id);
}

app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    res.send(req.body);
});


app.get('/api/customers', (req, res) => {
    const customer = [
        { id: 1, fName: 'Pongthawat', lName: 'Sutthiratana' },
        { id: 1, fName: 'Pongthawat2', lName: 'Sutthiratana2' },
        { id: 2, fname: 'Kwansitha', lName: 'เดือนขุนทด' },
        { id: 3, fname: 'FirstName', lName: 'LastName' }]
    // console.log(JSON.stringify(req.params));
    // if(JSON.stringify(req.query) !== '{}') {
    // if (!req.params)
    // return res.send("NO PARAMS PASSED")
    if (req.query.id) {
        console.log(testfind(req.query.id, customer));
        res.json(testfind(req.query.id, customer));
    }
    else {
        console.log("No Parameter Passed");
        res.sendStatus(404);
    }

    //res.json(testfind(req.query.id,customer));
})

app.post('/auth',(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    if(username&&password){
        var sql = `SELECT * FROM account WHERE username="${username}" AND password="${password}"`;
        console.log(sql);
        db.query(sql,(error,results)=>{
            console.log(results[0].username);
            if(results.length > 0){
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/booklist');
            }else{
                res.send("Incorrect Username or Password!")
            }
            res.end();
        });
    }else{
        res.sent("Please enter username or password !")
        res.end();
    }
});

app.get('/contact', function(request, response) {
    console.log('l');
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(port, () => { console.log(`this server is running on ${port}`) })



