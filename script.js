
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://mimic-server-api.vercel.app/users");
xhr.onload = () =>{
    if(xhr.status === 200){
        var response = JSON.parse(xhr.response);
        for(var i=0; i<response.length; i++){
            // console.log(response[i]);
            var tabr = document.createElement('tr');
            var tabrd = document.createElement('td');
            tabrd.innerText = response[i].id;
            var tabrd1 = document.createElement('td');
            tabrd1.innerText = response[i].username;
            var tabrd2 = document.createElement('td');
            tabrd2.innerText = response[i].name;
            var tabrd3 = document.createElement('td');
            tabrd3.innerText = response[i].email;
            tabr.append(tabrd);
            tabr.append(tabrd1);
            tabr.append(tabrd2);
            tabr.append(tabrd3);
            userDetails.append(tabr); 
        }
    }
    console.log(xhr);
}
xhr.onerror = () =>{
    console.log(xhr);
}
xhr.send();

var id = document.getElementById('id');
var username = document.getElementById('username');
var name = document.getElementById('name');
var email = document.getElementById('email');
var addBtn = document.getElementById('addUserbtn');
var popUpDiv = document.getElementById('newContainer');
var closeBtn = document.getElementById('closeBtn');
var submitbtn = document.getElementById('submitbutton');
var alert = document.querySelector('small');

addBtn.addEventListener("click", function(){
    popUpDiv.style.display = "block"
})

closeBtn.addEventListener("click", function(){
    popUpDiv.style.display = "none";
})


function showAlter(message, className){
    alert.innerHTML = message;
    alert.className = `alert ${className}`;
    setTimeout(() =>{
        alert.innerHTML = '';
        alert.className = '';
    }, 2000);
}

submitbtn.addEventListener("click", function(e){
    e.preventDefault();

    var inputField = document.getElementById('username').value;
    var profileName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    if(inputField.trim() === ''){
        showAlter('Need username name', "alert-danger");
        return false;
    }

    if(profileName.trim() === ''){
        showAlter('Name requried', "alert-dangername");
        return false;
    }
    
    if(!emailRegex.test(userEmail)){
        showAlter("Enter valid email", "alert-dangeremail");
        return false;
    }

    const userData = {
        username: inputField,
        name: profileName,
        email: userEmail
    }
    let data = JSON.stringify(userData);
    // console.log(userData);
    console.log(data);

    // let upload = new XMLHttpRequest();

    // upload.open('POST', "https://mimic-server-api.vercel.app/users", true);
    // upload.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    // upload.send(data);

    // function uploadUserDetalis(){
       
    // }
    // uploadUserDetalis()
})

