const Datastore = require('nedb');
const products = new Datastore("products.db");
const orders = new Datastore("orders.db");
products.loadDatabase();
orders.loadDatabase()
const express = require('express');
const app = express();
app.use(express.json({limit:"10mb"}));
app.use(express.static('public'));
const port = process.env.port || 3000;


app.get("/products",(req,res) => { 
    let prods = products.getAllData();
    let response = {data:prods}
    res.json(response);
});

app.post('/order', (req, res) => {
    let payload  = req.body;
    if(payload == null){
        res.sendStatus(500);
        return;
    }
    try{
    let array = []
    for(let e of payload.data){
        array.push(e.id);
    }
    products.find({_id:{ $in: array } }, (err, docs) =>{
        if (err) {
            console.error('Error finding products:', err);
        } else {
            const foundIds = docs.map(doc => doc._id);
            const allExist = array.every(id => foundIds.includes(id));
            if (allExist) {
                let date = new Date();
                let fulldate = date.getDate().toString()+"/"+(date.getMonth()+1).toString()+"/"+date.getFullYear().toString();
                orders.insert({order:payload.data,time:fulldate});
                res.sendStatus(200);
            }
        
            
        }
    });
    }
    catch{
        res.sendStatus(500);
    }
});

app.get("/orders",(req,res)=>{
    let order = orders.getAllData();
    let response = {data:order}
    res.json(response);
})

// app.get("/order:id",(req,res)=>{
//     let id = req.params.id;
    
// })

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
