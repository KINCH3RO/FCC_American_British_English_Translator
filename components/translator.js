const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(text, locale) {

        let americanToBritish = (locale[0] === 'a')
        let initialText = text;
        let x = "";
        console.log(initialText.includes("favorite"));
        if (americanToBritish) {

            for (const key in americanOnly) {

                let reg = new RegExp(key, "i")
                initialText = initialText.replace(reg, '<span class="highlight">' + americanOnly[key] + '</span>')
            }

            for (const key in americanToBritishSpelling) {
                let reg = new RegExp(key, "i")
                initialText = initialText.replace(reg, '<span class="highlight">' + americanToBritishSpelling[key] + '</span>')
            }

            for (const key in americanToBritishTitles) {

                let reg = new RegExp(key, "i")
                if (initialText.match(reg)) {
                    initialText = initialText.replace(reg, '<span class="highlight">' + americanToBritishTitles[key] + '</span>')
                    break;
                }

            }

            let arrayOfTime = initialText.match(/[0-9]{0,2}:[0-9]{2}/g);
            if (arrayOfTime) {
                let replacement = arrayOfTime.map(x => x.replace(":", "."))
                for (let i = 0; i < arrayOfTime.length; i++) {
                    initialText = initialText.replace(arrayOfTime[i], '<span class="highlight">' + replacement[i] + '</span>')

                }

            }




        } else {
            for (const key in britishOnly) {
                let reg = new RegExp(key, "i")
                initialText = initialText.replace(reg, '<span class="highlight">' + britishOnly[key] + '</span>')
            }
            for (const key in americanToBritishSpelling) {
                let reg = new RegExp(americanToBritishSpelling[key], "i")
                initialText = initialText.replace(reg, '<span class="highlight">' + key + '</span>')
            }

            for (const key in americanToBritishTitles) {
                let reg = new RegExp(americanToBritishTitles[key], "i")
                if (initialText.match(reg)) {
                    initialText = initialText.replace(reg, '<span class="highlight">' + key + '</span>')
                    break;
                }
            }


            let arrayOfTime = initialText.match(/[0-9]{0,2}\.[0-9]{2}/g);
            if (arrayOfTime) {
                let replacement = arrayOfTime.map(x => x.replace(".", ":"))
                for (let i = 0; i < arrayOfTime.length; i++) {
                    initialText = initialText.replace(arrayOfTime[i], '<span class="highlight">' + replacement[i] + '</span>')

                }

            }




        }

        if (initialText == text) {
            return "Everything looks good to me!"

        }
        return initialText;





    }


    highlightTranslation(translation) {
   
        let highlight = translation.match(/<span class="highlight">(.*?)<\/span>/gm)[0].replace('class="highlight"',"").replace(/<\/?span\s*>/g,"")

        return highlight;

    }

}

module.exports = Translator;