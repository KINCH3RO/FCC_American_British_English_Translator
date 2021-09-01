'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      let text = req.body.text;
      let locale = req.body.locale;
      console.log(req.body);
      if (text==undefined || locale==undefined) {
        res.json({ error: 'Required field(s) missing' })
        return;

      }

      if (!text) {
        res.json({ error: 'No text to translate' })
        return;
      }
      if(!["american-to-british","british-to-american"].includes(locale)){
        res.json({ error: 'Invalid value for locale field' })
        return;
      }

      let translation = translator.translate(text, locale)

      res.json({
        text,
        translation
      })
    });
};
