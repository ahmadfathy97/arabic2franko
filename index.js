let glossary = {
  "ء":"2",
  "أ":"a",
  "إ":"e",
  "ا":"a",
  "ى": "a", // الألف المقصورة
  "ة": "a",
  "ب":"b",
  "ت":"t",
  "ث":"th",
  "ج":"g",
  "ح":"7",
  "خ":"5",
  "د":"d",
  "ذ":"d'",
  "ر":"r",
  "ز":"z",
  "س":"s",
  "ش":"4",
  "ص":"9",
  "ض":"9'",
  "ط":"6",
  "ظ":"z",
  "ع":"3",
  "غ":"3'",
  "ف":"f",
  "ق":"2",
  "ك":"k",
  "ل":"l",
  "م":"m",
  "ن":"n",
  "ه":"h",
  "و":"w",
  "ي":"y",
  "ؤ": "o",
  "ئ": "e",
  "آ": "a",
  "چ": "j",
  "ڤ": "v",
  "ُ": "o", // الضمة
  "َ": "a", // الفتحة
  "ِ": "e",  // الكسرة
  "ٌ": "n",
  "ً": "n",
  "ٍ": "n"
};

module.exports = function(arText = ""){
  let franko = "";
  if(typeof(arText) === "string" || Array.isArray(arText)){
    for(i= 0; i <arText.length; i++) {
      let letter;
      if(arText[i] === "أ" && arText[i + 1] === "ُ" /*الضمة*/){
        letter = "o";
        continue;
      } else if(arText[i] === "ّ" /*الشدة*/){
        letter = glossary[arText[i - 1]];
      } else {
        letter = glossary[arText[i]] ? glossary[arText[i]] : arText[i]
      }
      franko += letter;
    }
  }
  return franko || "يا اسطا فين النص اللي هنحوله ؟";
}
