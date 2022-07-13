// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"
//var fs = require("fs");

const products= require("../../products.json")

export default function handler(req, res) {
 // fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
  //  console.log( data );
  //  res.status(200).json( data );
 //});
  res.status(200).json({products })
}
