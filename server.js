// import required packages
const express= require("express");
const request = require("request");
const bodyparser= require("body-parser");

const app= express();

app.use(express.static("public"));

app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}));

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let email = req.body.email;

  const data = {
    members:[{
      email_address: email,
      status: "subscribed",
    }]
  }

  const jsonData= JSON.stringify(data);

  const options = {
    url: 'https://us17.api.mailchimp.com/3.0/lists/8ad78faba0',
    method:'POST',
    headers: {
      Authorization: 'Bearer 0c7b3dd6f004eaaa797e0c229e8ef044-us17'
    },
    body: jsonData
  }

    request(options, (err, response, body) => {
        if (err) {
           return res.redirect('/failure.html')
        }

        if(response.statusCode === 200){
            console.log("true")
            res.sendFile(__dirname + "/success.html");
        } else{
            console.log("false")
            res.sendFile(__dirname + "/failure.html");
        }
        console.log(jsonData)

    });

    // request.write(jsonData)
    // request.end
});

app.get('/success', (req, res) => {
  res.sendFile(__dirname + "/success.html")
})

app.get('/failure', (req, res) => {
  res.sendFile(__dirname + "/failure.html")
})


// Failure route
app.post("/failure",function(req,res){
   res.redirect("/");
})

app.listen(8000,function(){
  console.log("server is running on port 8000   ");
})