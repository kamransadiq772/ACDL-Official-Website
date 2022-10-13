const express = require('express')   //npm install express cors body-parser
const cors = require('cors')
const bodyparser = require('body-parser')
const connection = require('./db')
const path = require('path')
var session = require('express-session')

const app = express()

app.use(cors())
app.use(bodyparser.json())

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false,
}));

// declare react files in build as static
app.use(express.static(path.join(__dirname, "build")));

// serve index.html from the build folder
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});


app.post('/addmsg', (req, res) => {
    const MSG_QUERY = "INSERT INTO contact(name, email, phone,subject, msg) VALUES('" + req.body.scontact.name + "','" + req.body.scontact.email + "','" + req.body.scontact.phone + "','" + req.body.scontact.subject + "','" + req.body.scontact.msg + "')";
    connection.query(MSG_QUERY, (err, result) => {
        if (err) console.log(err)
        else res.send({ status: 200 })
    })
})

app.post('/getjobs', (req, res) => {
    const JOBS_SELECT = "SELECT * FROM jobs WHERE active != 0"
    connection.query(JOBS_SELECT, (err, response) => {
        if (err) console.log(err)
        else res.send(response)
    })
})

app.post('/application', (req, res) => {

    const ADD_QUERY = "INSERT INTO apply(jobid, title, name, email, phone, letter, cv) VALUES('" + req.body.sid.jobid + "','" + req.body.sid.title + "','" + req.body.sid.name + "','" + req.body.sid.email + "','" + req.body.sid.phone + "','" + req.body.sid.letter + "','" + req.body.sid.cv + "')";
    connection.query(ADD_QUERY, (err, respond) => {
        if (err) console.log(err)
        else res.send({status:200})
    })
})

app.post('/companylogin',(req, res)=>{
    let cemail = req.body.clogin.cemail;
    let cpass = req.body.clogin.cpass;
    const CHECK_QEURY_CLOGIN = "SELECT * FROM company WHERE cemail = ? AND cpass = ?";
    connection.query(CHECK_QEURY_CLOGIN, [cemail, cpass] ,(err, response)=>{
        if(err) console.log(err)
        else{
            if(response.length>0){
                res.send({status:400,datain:response})
            }else{
                res.send({status:402})
                console.log("invalid")
            }
        }
        
    })
})

app.post('/uploadthejob', (req, res) => {
    const ADD_QUERY = "INSERT INTO jobs(title, category, type, location, summary, skills, cname, cid) VALUES('" + req.body.jupladdata.title + "','" + req.body.jupladdata.category + "','" + req.body.jupladdata.type + "','" + JSON.stringify(req.body.jupladdata.location) + "','" + req.body.jupladdata.summary + "','" + req.body.jupladdata.skills + "','" + req.body.jupladdata.cname + "','"+ req.body.jupladdata.cid +"')";
    connection.query(ADD_QUERY, (err, respond) => {
        if (err) console.log(err)
        else res.send({status:200})
    })
})

app.post('/uploadthecv', (req, res) => {

    const ADD_QUERY = "INSERT INTO cvs(name, email, phone, letter, cv) VALUES('" + req.body.cvuploaddata.name + "','" + req.body.cvuploaddata.email + "','" + req.body.cvuploaddata.phone + "','" + req.body.cvuploaddata.letter + "','" + req.body.cvuploaddata.cv + "')";
    connection.query(ADD_QUERY, (err, respond) => {
        if (err) console.log(err)
        else {
            res.send({status:200})
        }
    })
})


app.post('/cdetails',(req,res)=>{
    const ADD_QUERY = "INSERT INTO company(cname, cemail, cphone, clocation, cdescription) VALUES('" + req.body.reg.name + "','" + req.body.reg.email + "','" + req.body.reg.phone + "','" + req.body.reg.location + "','" + req.body.reg.description + "')";
    const CHECK_QUERY ="SELECT * FROM company WHERE cemail = '"+req.body.reg.email+"'"

    connection.query(CHECK_QUERY, (err, response) => {
        if(err){
            console.log(err)
        }else{
            if(response.length==0){
                connection.query(ADD_QUERY, (err, respond) => {
                    if (err) console.log(err)
                    else {
                        res.send({status:200})
                    }
                })
            }else{
                res.send({status:400})
            }
        }
    })



    
})

app.post('/getcompanyjobs',(req, res)=>{
    GET_QUERY = "SELECT * FROM jobs WHERE cid = '"+ req.body.cdata[0].cid +"' AND cname = '" + req.body.cdata[0].cname+ "'  AND active = 1"
    connection.query(GET_QUERY,(err, response)=>{
        if (err) console.log(err)
        else{
            res.send(response)
        }
    })
})

app.post('/deletecjob',(req,res)=>{
    // console.log(req.body)
    const DELETE_QUERY = "UPDATE jobs SET active = 0 WHERE jobid = '"+req.body.id+"'"
    connection.query(DELETE_QUERY, (err, response)=>{
        if(err) console.log(err)
        else{
            res.send({status:200})
        }
    })
})

app.post('/editcjob',(req, res)=>{
    // console.log(req.body.edata)
    const EDIT_JOB_QUERY = "UPDATE jobs SET title = '"+req.body.edata.title+"' ,category = '"+req.body.edata.category+"' ,type = '"+req.body.edata.type+"' ,location = '"+JSON.stringify(req.body.edata.location)+"' ,summary = '"+req.body.edata.summary+"' ,skills = '"+req.body.edata.skills+"' WHERE jobid ='"+req.body.edata.jobid+"'"
    // console.log(EDIT_JOB_QUERY)
    connection.query(EDIT_JOB_QUERY,(err)=>{
        if(err) console.log(err)
        else{
            res.send({status:200})
        }
    })
})

app.post('/registermen', (req, res)=>{
    const ADD_QUERY = "INSERT INTO users(name, email, phone, pass, description) VALUES('" + req.body.reg.name + "','" + req.body.reg.email + "','" + req.body.reg.phone + "','" + req.body.reg.pass + "','" + req.body.reg.description + "')";
    const CHECK_QUERY ="SELECT * FROM users WHERE email = '"+req.body.reg.email+"'"

    connection.query(CHECK_QUERY, (err, response) => {
        if(err){
            console.log(err)
        }else{
            if(response.length==0){
                connection.query(ADD_QUERY, (err, respond) => {
                    if (err) console.log(err)
                    else {
                        res.send({status:200})
                    }
                })
            }else{
                res.send({status:400})
            }
        }
    })
})

app.post('/userlogin',(req, res)=>{
    let email = req.body.userlogin.useremail;
    let pass = req.body.userlogin.userpass;
    const CHECK_QEURY_LOGIN = "SELECT * FROM users WHERE email = ? AND pass = ?";
    connection.query(CHECK_QEURY_LOGIN, [email, pass] ,(err, response)=>{
        if(err) console.log(err)
        else{
            if(response.length>0){
                res.send({status:200,datain:response})
            }else{
                res.send({status:402})
                console.log("invalid")
            }
        }
        
    })
})

app.post('/companyeditdata',(req,res)=>{
    const EDIT_COMPANY_QUERY = "UPDATE company SET cphone = '"+req.body.data.phone+"' ,clocation = '"+req.body.data.location+"' ,cpass = '"+req.body.data.pass+"' ,cdescription = '"+req.body.data.details+"' WHERE cid ='"+req.body.data.id+"'"
    connection.query(EDIT_COMPANY_QUERY,(err,response)=>{
        if(err) console.log(err)
        else{
            res.send({status:200})
        }
    })

})


app.get('/checksession',(req, res)=>{
    if(req.session.loggedin == true){
        console.log(req.session)
        console.log('ok')
        res.send({status:200})
    }else{
        console.log('not ok')
        res.send({status:404})
        console.log(req.session)
    }
})

// app.listen(	process.env.PORT || 4000, () => {
//     console.log("port is running on 4000")
// })
app.listen()
