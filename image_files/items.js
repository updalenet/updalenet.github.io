// :::::::: LEAVE THIS -> environment dependant
var secure = document.location.protocol;
var env;
if (document.URL.indexOf("sup") > - 1 || document.URL.indexOf("uat") > - 1) {
    env = "uat.";
} else {
    env = "";
}

// :::: CHANGE only this DATA
var data = {
	"speed": 5000,
	"promo": [

		// start video 
         
        // {
        //     "_comment": "NL: Chaussée d'Amour, FR: Chaussée d'Amour, EN: Chaussée d’Amour",
        //     "startdate": "20160510",                                                                        
        //     "enddate": "20160520",                                                                          
        //     "video": "" + secure + "//static." + env + "telenet.be/webmail/assets/movies/cda-trailer-15sec-webmail_mijntelenet.mp4",   
        //     "autoplay" : "autoplay",
        //     "loop" : "",
        //     "volume": 2,
        //     "utag-video": "video Chaussée d'Amour",            
        //     "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/cda-bg.jpg", 
        //     "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/cda-bg.jpg", 
        //     "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/cda-bg.jpg", 
        //     "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/play-en-more.png",      
        //     "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/spacer.png",      
        //     "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/spacer.png",      
        //     "text-nl": "<p style='color:#fff'><strong>Chaussée d'Amour</strong><br>Een sexy drama over de échte waarde van betaalde liefde waarin sterke vrouwen<br> de hoofdrol spelen, vanaf 10 mei om 21u. <a onClick=\"utag.link({link_name:' Webmail :: Login :: video Chaussée d'Amour - NL'});\" href='http://snap.telenet.be/snapbox/chausseedamour/' target='_blank' style='color:#ffc421'><strong>Meer info <span>></span></strong></a></p><p>De titelsong van Hooverphonic is nu <a onClick=\"utag.link({link_name:' Webmail :: Login :: video Chaussée d'Amour itunes - NL'});\" href='https://itunes.apple.com/ca/album/deep-forest/id1064998496?i=1064998501' target='_blank' style='color:#fff; text-decoration:underline'>beschikbaar op iTunes</a></p>",
        //     "text-fr": "<p style='color:#fff'><strong>Chaussée d'Amour</strong><br>Een sexy drama over de échte waarde van betaalde liefde waarin sterke vrouwen<br> de hoofdrol spelen, vanaf 10 mei om 21u. <a onClick=\"utag.link({link_name:' Webmail :: Login :: video Chaussée d'Amour - FR'});\" href='http://snap.telenet.be/snapbox/chausseedamour/' target='_blank' style='color:#ffc421'><strong>Meer info <span>></span></strong></a></p><p>De titelsong van Hooverphonic is nu <a onClick=\"utag.link({link_name:' Webmail :: Login :: video Chaussée d'Amour itunes - FR'});\" href='https://itunes.apple.com/ca/album/deep-forest/id1064998496?i=1064998501' target='_blank' style='color:#fff; text-decoration:underline'>beschikbaar op iTunes</a></p>",
        //     "text-en": "<p style='color:#fff'><strong>Chaussée d'Amour</strong><br>Een sexy drama over de échte waarde van betaalde liefde waarin sterke vrouwen<br> de hoofdrol spelen, vanaf 10 mei om 21u. <a onClick=\"utag.link({link_name:' Webmail :: Login :: video Chaussée d'Amour - EN'});\" href='http://snap.telenet.be/snapbox/chausseedamour/' target='_blank' style='color:#ffc421'><strong>Meer info <span>></span></strong></a></p><p>De titelsong van Hooverphonic is nu <a onClick=\"utag.link({link_name:' Webmail :: Login :: video Chaussée d'Amour itunes - EN'});\" href='https://itunes.apple.com/ca/album/deep-forest/id1064998496?i=1064998501' target='_blank' style='color:#fff; text-decoration:underline'>beschikbaar op iTunes</a></p>"
        // },  	 

		// end video 

        // start Vollenbak Voorruit

        {
            "_comment": "NL: Vollenbak Vooruit Wave 3, FR: En Avant Toute, EN: Vollenbak Vooruit Wave 3",
            "startdate": "20160430",
            "enddate": "20160630",
            "image-nl": ""+secure +"//static."+env+"telenet.be/webmail/assets/backgrounds/vv-wave3-login-handsets-nl.jpg",
            "image-fr": ""+secure +"//static."+env+"telenet.be/webmail/assets/backgrounds/vv-wave3-login-handsets-fr.jpg",
            "image-en": ""+secure +"//static."+env+"telenet.be/webmail/assets/backgrounds/vv-wave3-login-handsets-nl.jpg",
            "logo-nl": ""+secure +"//static."+env+"telenet.be/webmail/assets/logos/spacer.png",
            "logo-fr": ""+secure +"//static."+env+"telenet.be/webmail/assets/logos/spacer.png",
            "logo-en": ""+secure +"//static."+env+"telenet.be/webmail/assets/logos/spacer.png",
            "text-nl": "<p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: VollenbakVooruitWave3 - NL'});\" href='https://www2.telenet.be/nl/king-en-kong/king-en-kong-met-toestel/' target='_blank' style='color:#ff7e00'>Ontdek ze allemaal <span>></span></a></p>",
            "text-fr": "<p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: VollenbakVooruitWave3 - FR'});\" href='https://www2.telenet.be/fr/king-et-kong/king-kong-avec-appareil/' target='_blank' style='color:#ff7e00'>D&eacute;couvrez-les toutes <span>></span></a></p>",
            "text-en": "<p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: VollenbakVooruitWave3 - EN'});\" href='https://www2.telenet.be/nl/king-en-kong/king-en-kong-met-toestel/' target='_blank' style='color:#ff7e00'>Ontdek ze allemaal <span>></span></a></p>",
        },

        // end Vollenbak Voorruit

        // start scheduling Play weekend

        {
            "_comment": "NL: Play Weekend Chicken Little FR: Tip Top Tour, EN: Play Weekend Chicken Little",
            "startdate": "20160602",
            "enddate": "20160609",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/chicken_little_20160602.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/chicken_little_20160602.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#fff'><strong>Chicken Little, jouw favoriete Play moment voor dit weekend.</strong></p>",
            "text-fr": "<p style='color:#fff'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#fff'><strong>Chicken Little, jouw favoriete Play moment voor dit weekend.</strong></p>",
        },

        // end scheduling Play weekend


        // start scheduling juni


        // WEEK 22

        {
            "_comment": "NL: Guardians Of The Galaxy FR: Tip Top Tour, EN: Guardians Of The Galaxy",
            "startdate": "20160601",
            "enddate": "20160606",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/guardians_of_the_galaxy_2014_webmail_playmore_0306.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/guardians_of_the_galaxy_2014_webmail_playmore_0306.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#fff'><strong>Vanaf 3/6, Guardians Of The Galaxy</strong><br>Ronan, een machtige slechterik met plannen die het hele universum in gevaar dreigen te brengen,<br>had zijn zinnen op een geheimzinnige bol gezet. Peter Quill heeft deze echter gestolen.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: GuardiansOfTheGalaxy - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play-more/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#fff'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#fff'><strong>Vanaf 3/6, Guardians Of The Galaxy</strong><br>Ronan, een machtige slechterik met plannen die het hele universum in gevaar dreigen te brengen,<br>had zijn zinnen op een geheimzinnige bol gezet. Peter Quill heeft deze echter gestolen.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: GuardiansOfTheGalaxy - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play-more/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        }, 

        {
            "_comment": "NL: Paper Towns, FR: Service Client, EN: Paper Towns",
            "startdate": "20160601", 
            "enddate": "20160606",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/paper_towns_2015_webmail_playmore_0406.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/paper_towns_2015_webmail_playmore_0406.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#fff'><strong>Vanaf 4/6, Paper Towns</strong><br>Quentin’s buurmeisje Margo is plotseling verdwenen. De jongeman<br>vertrekt, samen met zijn vrienden, op queeste om haar te vinden. </p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: PaperTowns - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play-more/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#fff'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#fff'><strong>Vanaf 4/6, Paper Towns</strong><br>Quentin’s buurmeisje Margo is plotseling verdwenen. De jongeman<br>vertrekt, samen met zijn vrienden, op queeste om haar te vinden. </p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: PaperTowns - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play-more/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: Deadpool, FR: Service Client, EN: Deadpool",
            "startdate": "20160601", 
            "enddate": "20160606",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/deadpool_2016_webmail_falc_0306.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/deadpool_2016_webmail_falc_0306.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-geel.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-geel.png",
            "text-nl": "<p style='color:#fff'><strong>Vanaf 3/6, Deadpool</strong><br>Nu in onze TV-Theek.</p>",
            "text-fr": "<p style='color:#fff'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#fff'><strong>Vanaf 3/6, Deadpool</strong><br>Nu in onze TV-Theek.</p>",
        },

        // WEEK 23

        {
            "_comment": "NL: Terug Naar Morgen FR: Tip Top Tour, EN: Terug Naar Morgen",
            "startdate": "20160606",
            "enddate": "20160613",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/terug_naar_morgen_2014_webmail_play_1206.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/terug_naar_morgen_2014_webmail_play_1206.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#fff'><strong>Vanaf 12/6, Terug Naar Morgen</strong><br>De geniale professor Viktor  is erin geslaagd om in 2040, e-mails terug in de tijd<br></p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TerugNaarMorgen - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#fff'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#fff'><strong>Vanaf 12/6, Terug Naar Morgen</strong><br>te verzenden. Maar hij ontdekt dat je niet zomaar ongestraft met het verleden morrelt. </p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TerugNaarMorgen - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        }, 

        {
            "_comment": "NL: Love, FR: Service Client, EN: Love",
            "startdate": "20160606", 
            "enddate": "20160613",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/love_2015_webmail_playmore_0806.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/love_2015_webmail_playmore_0806.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#fff'><strong>Vanaf 8/6, Love</strong><br>Murphy zal de rest van die regenachtige dag in zijn eentje in het<br>appartement doorbrengen. Hij blikt terug op de liefde van zijn leven.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Love - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play-more/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#fff'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#fff'><strong>Vanaf 8/6, Love</strong><br>Murphy zal de rest van die regenachtige dag in zijn eentje in het<br>appartement doorbrengen. Hij blikt terug op de liefde van zijn leven.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Love - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play-more/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: Amy FR: Tip Top Tour, EN: Amy",
            "startdate": "20160606",
            "enddate": "20160613",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/amy_2015_webmail_playmore_0706.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/amy_2015_webmail_playmore_0706.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#fff'><strong>Vanaf 7/6, Amy</strong><br>Het tragische levensverhaal van jazzartieste Amy Winehouse, verteld door<br>de enige persoon die daar capabel voor is: Amy zelf, in haar eigen woorden. </p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Amy - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play-more/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#fff'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#fff'><strong>Vanaf 7/6, Amy</strong><br>Het tragische levensverhaal van jazzartieste Amy Winehouse, verteld door<br>de enige persoon die daar capabel voor is: Amy zelf, in haar eigen woorden. </p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Amy - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play-more/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        }, 


        // end scheduling juni



        /* template for falc images

        {
            "_comment": "NL: Broer, FR: Service Client, EN: Broer",
            "startdate": "20160516", 
            "enddate": "20160523",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/broer_2014_webmail_falc_2005.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/broer_2014_webmail_falc_2005.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-geel.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-geel.png",
            "text-nl": "<p style='color:#fff'><strong>Vanaf 20/5, Broer</strong><br>Nu in onze TV-Theek.</p>",
            "text-fr": "<p style='color:#fff'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#fff'><strong>Vanaf 20/5, Broer</strong><br>Nu in onze TV-Theek.</p>",
        },

        */

        ],

    // DEFAULT (if there is no other promo within time range...
        "defaultbackup": [
        {
            "_comment": "******** THIS ONE IS DEFAULT *******",
            "startdate": "20140422",
            "enddate": "20280422",
            "image-nl": "" + secure + "//static.telenet.be/webmail/assets/default.jpg",
            "image-fr": "" + secure + "//static.telenet.be/webmail/assets/default.jpg",
            "image-en": "" + secure + "//static.telenet.be/webmail/assets/default.jpg",
            "logo-nl": "" + secure + "//static.telenet.be/webmail/assets/spacer.png",
            "logo-fr": "" + secure + "//static.telenet.be/webmail/assets/spacer.png",
            "logo-en": "" + secure + "//static.telenet.be/webmail/assets/spacer.png",
            "text-nl": "",
            "text-fr": "",
            "text-en": ""
        }
        ]
}; // :::::: END DATAs
