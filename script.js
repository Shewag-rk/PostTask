const xhr = new XMLHttpRequest();
xhr.open("GET", "https://mimic-server-api.vercel.app/users");

xhr.onload = () =>{
    if(xhr.status === 200){
        let response = JSON.parse(xhr.response);
        for(let i=0; i<response.length; i++){
            // console.log(response[i]);
            
            var tableTr = document.createElement('tr');

            var tableTd = document.createElement('td');
            tableTd.innerText = response[i].id;

            var tableTd1 = document.createElement('td');
            tableTd1.innerText = response[i].username;

            var tableTd2 = document.createElement('td');
            tableTd2.innerText = response[i].name;

            var tableTd3 = document.createElement('td');
            tableTd3.innerText = response[i].email;

           

            tableTr.append(tableTd);
            tableTr.append(tableTd1);
            tableTr.append(tableTd2);
            tableTr.append(tableTd3);
            userDetails.append(tableTr); 
        }
    }
    console.log(xhr);
}


xhr.onerror = () =>{
    console.log(xhr);
}
xhr.send();



let id = document.getElementById('id');
let username = document.getElementById('username');
let name = document.getElementById('name');
let email = document.getElementById('email');


var addBtn = document.getElementById('addUserbtn');
var popUpDiv = document.getElementById('newContainer');
var closeBtn = document.getElementById('closeBtn');

addBtn.addEventListener("click", function(){
    popUpDiv.style.display = "block"
})


closeBtn.addEventListener("click", function(){
    popUpDiv.style.display = "none";
})


const rqst = new XMLHttpRequest();
rqst.open("POST", "https://mimic-server-api.vercel.app/users");
