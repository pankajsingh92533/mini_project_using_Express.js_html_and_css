//first we have to require express 
const express=require("express");
//requiring body parser for parsing data sended by calculator and fetching value
const bodyParser=require("body-parser");

//object of express
const app=express();
//using body parser
app.use(bodyParser.urlencoded({extended:true}));

//what to do ,call back function means what to do as a response when "/" will hit
app.get("/",(req,res)=>{
    res.send("hi there,i am pankaj");
});
app.get("/About",(req,res)=>{
    res.send("this is aout us page");
});

app.get("/contactUs",(req,res)=>{
    res.send("this is contact us page");
});

//agar mujhe ek file ko send krna hai
app.get("/calculator",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

//now what to do after clicked on calculate
app.post("/calculator",(req,res)=>{
    // res.send("thank you for clicking on calculate");
    console.log(req.body);

    //ye number wala property url encoded ke wajah se aaya
    //pehle req.body string mei rhta hai
    let  n1=Number(req.body.value1);
    let n2=Number(req.body.value2);
    let sum=n1+n2;
    res.send("sum of the two no is:"+sum);
});


//we have to listen
app.listen(5000,(req,res)=>{
    console.log("listenng at port no 5000");
});