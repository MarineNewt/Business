import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  response: string;
};

var AWS = require("aws-sdk");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
const SES_CONFIG = {
  accessKeyId: process.env.SESUSER,
  secretAccessKey: process.env.SESPASS,
  region: 'us-west-2',
};

let params = {
  Source: 'WebService@newt9.dev',
  Destination: {
    ToAddresses: [
      'frankieiii15@comcast.net'
    ],
  },
  ReplyToAddresses: [],
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        Data: 'Hello Newt, <br /> You have recieved a new request. <br /><br /> Account: Newt <br /> Data: True <br /> Details: Present',
      },
    },
    Subject: {
      Charset: 'UTF-8',
      Data: `New Request`,
    }
  },
};

// Create the promise and SES service object
var sendPromise = new AWS.SES(SES_CONFIG)
  .sendEmail(params)
  .promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(function (data:any) {
    console.log(data.MessageId);
    res.status(200).json({ response: "Success"});
  })
  .catch(function (err:any) {
    console.error(err, err.stack);
    res.status(400).json({ response: "Error" });
  });
}