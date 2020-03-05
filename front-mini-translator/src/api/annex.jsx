import axios from "axios";

const API_KEY =
  "trnsl.1.1.20200205T233005Z.5e79d21d43eacfa9.ecbd7346e852b59ea0cda1c23c191dd957b75ae4";

// const massageLanguaje = languaje => ({
//   languaje: languaje.dirs
// });

export const getLanguaje = lang => {
  axios
    .get(
      `https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=${API_KEY}&ui=${lang}`
    )
    .then(res => res.data);
  // .then(res => res.data.dirs.map(languaje => languaje));
};

// export const getTraslate = text => {
//   axios
//     .get(
//       `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=en-es&format=text&key=${API_KEY}&text=${text}`
//     )
//     .then(res => res.data);
// };

export const getTraslate = (text, langLeft, langRight) => {
  axios
    .get(
      `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${langLeft}-${langRight}&format=text&key=${API_KEY}&text=${text}`
    )
    .then(res => res.data);
};
