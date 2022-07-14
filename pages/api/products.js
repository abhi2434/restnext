// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"
import { isFloat32Array } from "util/types";
//var fs = require("fs");

const products= require("../../products.json")

export default function handler(req, res) {
  
  const { query: { id, name } } = req;
  var filter = null;
  if(id != null)
    filter = prod => prod.id === parseInt(id);
  else if(name != null)
    filter = prod => prod.title.indexOf(name) >= 0;
  
  if(req.method == "GET"){ 
    if(filter != null){
      var prod =products.find(filter);
      if(prod == null){
        res.status(400).json({ error: 'Not found' });
      } 
      else{
        res.status(200).json({ 
          ...prod,
        });
      }
    }
    else{
      res.status(200).json({products })
    }
  }
  else if(req.method == "POST"){
    var body = req.body;
    return res.status(200).json({ body });
  }
}
