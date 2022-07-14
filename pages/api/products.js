// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"
import { isFloat32Array } from "util/types";
//var fs = require("fs");

const products= require("../../products.json")

export default function handler(req, res) {
  
  const { query: { id } } = req;

  if(req.method == "GET"){ 
    if(id != null){
      res.status(200).json({ 
        ...products.find(prod => prod.id === parseInt(id)),
      });
    }
    else{
      res.status(200).json({products })
    }
  }
}
