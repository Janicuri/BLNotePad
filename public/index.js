let numbers = [];
let response = null;

function addProductRows(data,table,i){
    let tr = document.createElement("tr");
    tr.setAttribute("valueId",data._id);
    let product = document.createElement("td");
    product.innerHTML = data.Name;
    tr.appendChild(product);
    let value = document.createElement("td");
    value.innerHTML = "0";
    let plus =  document.createElement("td");
    plus.innerHTML = "+";
    plus.addEventListener("click",()=>{
        numbers[i]++;
        value.innerHTML = numbers[i];
        console.log("click")
    },true);
    tr.appendChild(plus);
    let minus =  document.createElement("td");
    minus.innerHTML = "-";
    minus.addEventListener("click",()=>{
        if(numbers[i]>0){
            numbers[i]--;
            value.innerHTML = numbers[i];
        }
    },true);
    tr.appendChild(minus);
    tr.appendChild(value);

    table.appendChild(tr);


}



$.get("/products",(res)=>{
    for(let i=0; i<res.data.length;i++){
        numbers.push(0);
        addProductRows(res.data[i],document.getElementById("table"),i);
    }
    let btn = document.createElement("button");
    btn.addEventListener("click",sendOrder,true);
    btn.innerHTML = "Send Order"
    let row = document.createElement("tr");
    let table = document.getElementById("table");
    row.appendChild(btn);
    table.appendChild(row)
    response = res.data;
});



function sendOrder(){
    let postData = {
        data:[]
    }
    for(let i = 0;i< response.length;i++){
        if(numbers[i] >0 )
            postData.data.push({id:response[i]._id,quantity:numbers[i],ProductName:response[i].Name,Price:response[i].Price});
    }
    if(postData.data.length == 0)
    {
        document.getElementById("span").innerHTML = "No product chosen";
        return;
    }
    fetch("/order",{ method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(postData)
      }).then((res)=>{
        console.log(res);
        document.getElementById("span").innerHTML = "Order Sent";
    });

}