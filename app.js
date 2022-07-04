const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/sigup.html');
})

mailchimp.setConfig({
    apiKey: "5fade92420e0ed81ab020bb8a9cb30c6-us11",
    server: "us11",
});

app.post('/', function(req, res) {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const addMember = async () => {
        try {
            const response = await mailchimp.lists.addListMember("4fa96a39dd", {
              email_address: email,
              status: "subscribed",
              merge_fields: {
               FNAME: firstName,
                  LNAME: lastName
              }
            });
            res.sendFile(__dirname + '/success.html');
            
        } catch (error) {
            res.sendFile(__dirname + '/failure.html');
        }
    };
    addMember()
})


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando na porta 3000!');
});

//! Chave do mailhip
//! API Key: 5fade92420e0ed81ab020bb8a9cb30c6-us11

//! List ID: 4fa96a39dd.

/**
 *   console.log(response.status);
        console.log(res.statusCode);
        if(response.status === 'subscribed'){
            res.send('Deu certo')
        } else {
            res.send('não deu')
        }
 */