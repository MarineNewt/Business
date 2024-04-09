import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  response: string;
};

var AWS = require("aws-sdk");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if(!req.query.name || !req.query.number || !req.query.email || !req.query.pref || !req.query.plan || !req.query.type || !req.query.industry || !req.query.name ){res.status(400).json({ response: "Invalid Request" });}

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
          Data: `Hello Newt, <br /> You have recieved a new request. <br /><br /> Client: ${req.query.name} <br /> Number: ${req.query.number} <br /> Email: ${req.query.email} <br /> Contact Pref: ${req.query.pref} <br /> Plan: ${req.query.plan} <br /> Website type: ${req.query.type} <br /> Industry: ${req.query.industry} <br /> Additional comments: ${req.query.additional}`
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
  return sendPromise.then(function (data:any) {
      console.log(data.MessageId);
      res.status(200).json({ response: "Success"});
    })
    .catch(function (err:any) {
      console.error(err, err.stack);
      res.status(400).json({ response: "Error" });
    });
}