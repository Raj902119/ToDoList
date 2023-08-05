import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

let items = [];
app.get('/', (req,res) => {
    let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let currentDay = new Date();
    let a = currentDay.getDate();
    let b = day[currentDay.getDay()];
    let c = month[currentDay.getMonth()];
    let ans = b+" "+a+", "+c+" "+"To Do List!!!";
    res.render('index.ejs', {
        date: ans,
        list: items
    }); 
});

app.post('/',(req,res) => {
    let a = req.body.itemname;
    items.push(a);
    res.redirect('/');
});
app.listen(3000, ()=> {
    console.log("server running on 3000");
})