import axios from "axios";

function get_basic_meme(top_text, bottom_text, picture) {
    const options = {
        method: 'GET',
        url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',
        params: {
          top: 'Top Text',
          bottom: 'Bottom Text',
          meme: 'Condescending-Wonka',
          font_size: '50',
          font: 'Impact'
        },
        headers: {
          'X-RapidAPI-Key': '0d6275bea6msh5d3c69190c67a59p1d7681jsnff8d04781a1b',
          'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          return response.data;
      }).catch(function (error) {
          console.error(error);
      });
}