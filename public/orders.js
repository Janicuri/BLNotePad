$.get("/orders",(response)=>{
    let div = document.getElementById("list");
    for(let i =0;i<response.data.length;i++){
        let table = document.createElement("table");
        let sum = 0;
        let list = document.createElement("tr");
        let header1 =document.createElement("th");
        let header2 =document.createElement("th");
        let header3 =document.createElement("th");
        header1.innerHTML = "Name";
        header2.innerHTML = "Quantity";
        header3.innerHTML = "Price";
        list.appendChild(header1);
        list.appendChild(header2);
        list.appendChild(header3);
        table.appendChild(list);
        for(let e of response.data[i].order){
            let row  = document.createElement("tr");
            let a =document.createElement("td");
            let b =document.createElement("td");
            let c =document.createElement("td");
            a.innerHTML = e.ProductName;
            b.innerHTML = e.quantity;
            c.innerHTML = e.Price;
            row.appendChild(a);
            row.appendChild(b);
            row.appendChild(c);
            sum += e.quantity*e.Price;
            table.appendChild(row);
        }
        let l = document.createElement("tr");
        l.innerHTML = "Total : " + sum + " \t Date: " + response.data[i].time;
        table.append(l);
        div.appendChild(table);    
    }
});