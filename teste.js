const mailchimp = require("@mailchimp/mailchimp_marketing");
//const express = require('express');


mailchimp.setConfig({
  apiKey: "5fade92420e0ed81ab020bb8a9cb30c6-us11",
  server: "us11",
});
/*
async function run() {

    const response = await mailchimp.lists.getAllLists()
    console.log(response)
}

run()
const run = async () => {
  const response = await mailchimp.lists.addListMember("4fa96a39dd", {
    email_address: "teste@gmail.com",
    status: "subscribed",
    merge_fields: {
        FNAME: 'Aliosson',
        LNAME: 'Suassuna'
    }
  });
  console.log(response);
};

run();
*/

const getListMember2 = async () => {
  try {
    const response2 = await mailchimp.lists.getListMembersInfo("4fa96a39dd");
    console.log(response2)
  } catch (err) {
    console.log('deu erro')
  }
 
};

getListMember2()

