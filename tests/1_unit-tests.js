const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translate = new Translator().translate;
const highlight = new Translator().highlightTranslation;
let translateTo = ["american-to-british", "british-to-american"]

suite('Unit Tests', () => {
    test("Translate Mangoes are my favorite fruit.", () => {

        let translation = translate("Mangoes are my favorite fruit.", translateTo[0])
        assert.equal(translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    })

    test("Translate I ate yogurt for breakfast.", () => {

        let translation = translate("I ate yogurt for breakfast.", translateTo[0])
        assert.equal(translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    })

    test("Translate We had a party at my friend's condo.", () => {

        let translation = translate("We had a party at my friend's condo.", translateTo[0])
        assert.equal(translation, 'We had a party at my friend\'s <span class="highlight">flat</span>.');
    })

    test("Translate Can you toss this in the trashcan for me?", () => {

        let translation = translate("Can you toss this in the trashcan for me?", translateTo[0])
        assert.equal(translation, 'Can you toss this in the <span class="highlight">rubbish</span>can for me?');
    })

    test("Translate The parking lot was full.", () => {

        let translation = translate("The parking lot was full.", translateTo[0])
        assert.equal(translation, 'The <span class="highlight">car park</span> was full.');
    })

    test("Translate Like a high tech Rube Goldberg machine.", () => {

        let translation = translate("Like a high tech Rube Goldberg machine.", translateTo[0])
        assert.equal(translation, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
    })
    test("Translate To play hooky means to skip class or work.", () => {

        let translation = translate("To play hooky means to skip class or work.", translateTo[0])
        assert.equal(translation, 'To <span class="highlight">bunk off</span> means to skip class or work.');
    })
    test("No Mr. Bond, I expect you to die.", () => {

        let translation = translate("No Mr. Bond, I expect you to die.", translateTo[0])
        assert.equal(translation, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
    })
    test("Dr. Grosh will see you now.", () => {

        let translation = translate("Dr. Grosh will see you now.", translateTo[0])
        assert.equal(translation, '<span class="highlight">Dr</span> Grosh will see you now.');
    })


    test("Lunch is at 12:15 today.", () => {

        let translation = translate("Lunch is at 12:15 today.", translateTo[0])
        assert.equal(translation, 'Lunch is at <span class="highlight">12.15</span> today.');
    })
    test("We watched the footie match for a while.", () => {

        let translation = translate("We watched the footie match for a while.", translateTo[1])
        assert.equal(translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
    })

    test("Paracetamol takes up to an hour to work.", () => {

        let translation = translate("Paracetamol takes up to an hour to work.", translateTo[1])
        assert.equal(translation, '<span class="highlight">Tylenol</span> <span class="highlight">thank you</span>kes up to an hour to work.');
    })

    test("First, caramelise the onions.", () => {

        let translation = translate("First, caramelise the onions.", translateTo[1])
        assert.equal(translation, 'First, <span class="highlight">caramelize</span> the onions.');
    })

    test("I spent the bank holiday at the funfair.", () => {

        let translation = translate("I spent the bank holiday at the funfair.", translateTo[1])
        assert.equal(translation, 'I spent the <span class="highlight"><span class="highlight">bar</span>lic holiday</span> at the <span class="highlight">carnival</span>.');
    })

    test("I had a bicky then went to the chippy.", () => {

        let translation = translate("I had a bicky then went to the chippy.", translateTo[1])
        assert.equal(translation, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.');
    })

    test("I've just got bits and bobs in my bum bag.", () => {

        let translation = translate("I've just got bits and bobs in my bum bag.", translateTo[1])
        assert.equal(translation, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.');
    })


    test("The car boot sale at Boxted Airfield was called off.", () => {

        let translation = translate("The car boot sale at Boxted Airfield was called off.", translateTo[1])
        assert.equal(translation, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    })


    test("Have you met Mrs Kalyani?", () => {

        let translation = translate("Have you met Mrs Kalyani?", translateTo[1])
        assert.equal(translation, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
    })

    test("Prof Joyner of King's College, London.", () => {

        let translation = translate("Prof Joyner of King's College, London.", translateTo[1])
        assert.equal(translation, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
    })

    test("Tea time is usually around 4 or 4.30.", () => {

        let translation = translate("Tea time is usually around 4 or 4.30.", translateTo[1])
        assert.equal(translation, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
    })


    test("Highlight translation in Mangoes are my favorite fruit.", () => {

        let highlightTranslation = highlight(translate("Mangoes are my favorite fruit.", translateTo[0]))
        assert.equal(highlightTranslation, 'favourite');
    })

    test("Highlight translation in I ate yogurt for breakfast.", () => {

      
        let highlightTranslation = highlight(translate("I ate yogurt for breakfast.", translateTo[0]))
        assert.equal(highlightTranslation, 'yoghurt');
    })

    test("Highlight translation in We watched the footie match for a while.", () => {

       
        let highlightTranslation = highlight(translate("We watched the footie match for a while.", translateTo[1]))
        assert.equal(highlightTranslation, 'soccer');
    })

    test("Paracetamol takes up to an hour to work.", () => {

       
        let highlightTranslation = highlight(translate("Paracetamol takes up to an hour to work.", translateTo[1]))
        assert.equal(highlightTranslation, 'Tylenol');
    })

});
