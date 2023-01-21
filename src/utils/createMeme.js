import { useState } from "react";
import axios from 'axios';

export default async function createMeme(  selectedNFTBackgroundImage,
  topText,
  bottomText) {

  const response = await getIt(selectedNFTBackgroundImage,
    topText,
    bottomText);

    // console.log("this is: " + response)
  
  return response
}


async function getIt(
  selectedNFTBackgroundImage,
  topText,
  bottomText
) {
  try {
  var data = JSON.stringify({
    "background": "https://storage.googleapis.com/fractal-launchpad-public-assets/pogs/okb/assets/collectors/assets/2557.png",
    "style": "string",
    "text": [
      "one",
      "two"
    ],
    "layout": "string",
    "font": "string",
    "extension": "string",
    "redirect": true
  })

  var config = {
    method: 'post',
    url: 'https://api.memegen.link/templates/custom',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  const res = await axios(config)
  .then((response) => response.data)
  .catch(function (error) {
    console.log(error);
    throw error;
  });


  const one = `data:image/jpeg;base64,${res}`;

  

  const text = String.fromCharCode(...res);


  const buff = new Buffer.from(one).toString()
  console.log('buff is: ' + text);


  // console.log('this is one: ' + one);
  return res;


  } catch (error) {
    alert(error.message);
  }
}