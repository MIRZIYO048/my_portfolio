let settings = document.querySelector('.settings');
let body = document.querySelector('body');
let dark = document.querySelector('.dark');
let blue = document.querySelector('.lightblue');
let green = document.querySelector('.lightgreen');
let pink = document.querySelector('.pink');
let crimson = document.querySelector('.crimson');
let red = document.querySelector('.lightred');
let light = document.querySelector('.light');
let act = document.querySelector('.circle');
let con = document.querySelector('.con');
let wrapper = document.querySelectorAll('.about-h1')


light.addEventListener('click', () =>{
    body.style.background = 'wheat'
    act.style = `transition: 1.5s; background: wheat`
    con.style = `box-shadow: 0 4px 4px 0 grey;`
    // alert('IT IS MODE : LIGHT')
    body.style.transition = '1.5s'
})
dark.addEventListener('click', () =>{
    
    act.style = `transition: 1.5s; background: #2c3e50`
    body.style.background = '#2c3e50'
    con.style = `box-shadow: 0 4px 4px 0 rgba(238, 230, 230, 0.37);`
    // alert('IT IS MODE : Dark')
    body.style.transition = '1.5s'
})
blue.addEventListener('click', () =>{
    act.style = `transition: 1.5s; background: lightblue;`
    body.style.background = 'lightblue'
    con.style = `box-shadow: 0 4px 4px 0 rgba(238, 230, 230, 0.37);`
    // alert('IT IS MODE : Dark')
    body.style.transition = '1.5s'
})
red.addEventListener('click', () =>{
    act.style = `transition: 1.5s; background: rgba(199, 40, 0, 0.712);`
    body.style.background = 'red'
    con.style = `box-shadow: 0 4px 4px 0 rgba(238, 230, 230, 0.37);`
    // alert('IT IS MODE : Dark')
    body.style.transition = '1.5s'
})

green.addEventListener('click', () =>{
    act.style = `transition: 1.5s; background: lightgreen;`
    body.style.background = 'lightgreen'
    con.style = `box-shadow: 0 4px 4px 0 rgba(238, 230, 230, 0.37);`
    // alert('IT IS MODE : Dark')
    body.style.transition = '1.5s'
})
pink.addEventListener('click', () =>{
    
    act.style = `transition: 1.5s; background: crimson;`
    body.style.background = 'crimson'
    con.style = `box-shadow: 0 4px 4px 0 rgba(238, 230, 230, 0.37);`
    // alert('IT IS MODE : Dark')
    body.style.transition = '1.5s'
})




const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector(".inputss");
const searchData = document.querySelector(".search-data");
searchBtn.onclick =()=>{
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
  searchInput.focus();
  if(searchInput.value != ""){
    var values = searchInput.value;
    searchData.classList.remove("active");
    searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
  }else{
    searchData.textContent = "";
  }
}
cancelBtn.onclick =()=>{
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchData.classList.toggle("active");
  searchInput.value = "";
}



function sendmail(){
    
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var subject = $('#Subject').val();
var message = $('#Message').val();

    // var body = $('#body').val();

    var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
    //console.log(name, phone, email, message);

    Email.send({
SecureToken:"",
        To: 'mirzeeyo2007@gmail.com',
        From: "Portfolio",
        Subject: "New message on contact from "+'👩🏻‍🤝‍🧑🏽'+name,
        Body: Body
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
            alert('Your mail has been send. Thank you for connecting.');
            }
            else{
                console.error (message);
                alert('There is error at sending message. ')
                
            }

        }
    );



}
