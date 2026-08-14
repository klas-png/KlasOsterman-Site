# Förbättringsplan för klasosterman.se

Målet är att webbplatsen både ska bygga en publik och generera fler bokningar. Den ska därför ha två tydliga vägar: en för fans som vill följa musiken och en för arrangörer och privatpersoner som vill boka.

## Permanent arbetsprincip – mobil först

- Utforma varje ny funktion för mobil från början, inte som en senare efterjustering.
- Säkerställ att innehåll, knappar, formulär, menyer, bilder och videor fungerar lika bra på mobil som på laptop.
- Kontrollera minst små mobiler, större mobiler och laptop före varje publicering.
- Undvik horisontell scroll, för liten text, tätt placerade tryckytor och innehåll som hamnar bakom fasta knappar.
- Optimera bilder och laddning särskilt för mobilnät.
- Prioritera tydliga bokningsvägar och korta, lättlästa avsnitt på små skärmar.

## Genomfört eller påbörjat

- Tydligare bokningsväg från startsidan.
- Automatisk uppdelning mellan kommande och tidigare spelningar.
- Mobilanpassning av de nya spelningarna.
- Grundläggande prestanda- och tillgänglighetsförbättringar.
- Tydligare presentation av vilka typer av evenemang och liveformat som erbjuds.
- Spelningarna har flyttats till `shows.js` och skapas och sorteras automatiskt på sidan.
- En permanent duo-sida har skapats på `/duo/` som grund för bokning och framtida QR-koder.
- Duo-innehållet på startsidan har förenklats till en förhandsvisning som leder vidare till den permanenta duo-sidan.
- Bokningsformulären på Klas-sidan och duo-sidan skickas direkt via Formspree till `info@klasosterman.se` utan att öppna besökarens mejlprogram.
- Mejllisteanmälan på båda sidorna skickas direkt via Formspree och samlar tills vidare adresserna som tydligt märkta inskick.
- Duo-sidan har fått ett mobilanpassat bokningsflöde i tre tydliga steg före förfrågningsformuläret.
- Huvudsidan presenterar solo, duo och fullt band som tre tydliga mobilanpassade val.
- Duo-sidan använder utvalda, mobiloptimerade bilder från ett riktigt bröllopsmingel.
- Duo-sidan visar tre omdömen från olika brudpar i en generell kundsektion som kan uppdateras med fler typer av evenemang.
- Duo-sidan visar separata exempel för bröllop och andra event, med bilder från bröllopsmingel och Ingmarsö krog.
- Duo-sidan har en utvald livevideo för Blood Moon och en samlad videosektion med fungerande externa länkar där inbäddning inte tillåts.
- Mejllistorna har förenklats till e-postadress, samtycke och en tydlig knapp, med genväg redan från sidornas topp.
- Klas-sidan har fått en tydligare, mobilanpassad artistbiografi med en varm solobild som stärker den personliga artistidentiteten.
- Startsidan har fått två tydliga huvudval i toppen: lyssna eller boka live. Musikvideor ligger kvar som en diskret sekundär länk.
- Spelningslistan visar som standard högst tre kommande spelningar. Övriga kommande och hela historiken nås via en knapp; om kommande spelningar saknas visas de tre senaste.
- Sidtiteln har förtydligats för både besökare och sökmotorer till artist, låtskrivare och livemusik.
- Spotify-sektionen har fått en tydlig knapp som öppnar artistprofilen i Spotify-appen för bättre ljudkvalitet.
- Grundläggande teknisk SEO är införd på artist- och duo-sidan: unika sidtitlar och beskrivningar, canonical-adresser, delningsmetadata, strukturerad data, `robots.txt` och XML-sitemap.
- Duon har fått namnet DUOVI på webbplatsen, med Klas Österman och Josefin Blomberg kvar tydligt för igenkänning och sökbarhet.

## Prioritet 1 – publik och bokningar

- [Påbörjat] Koppla mejllisteanmälan till en riktig utskickstjänst. Direkt insamling via Formspree är klar; val av tjänst för utskick, avregistrering och listhantering återstår.
- [Genomfört] Håll anmälan enkel och be till en början bara om e-postadress.
- Ge möjlighet att senare välja ort eller område för lokalt relevanta utskick.
- [Genomfört] Märk varje spelning som offentlig eller privat och förbered märkning för fri entré, biljettbelagd och slutsåld.
- [Påbörjat] Lägg till biljettlänk, kalenderpåminnelse och delningsmöjlighet för offentliga spelningar. Kalender och delning är klara; biljettknappen aktiveras när riktiga länkar läggs in.
- [Påbörjat] Skapa en tydlig bokningsväg för solo, duo, fullt band, bröllop, mingel, företag och privata evenemang. Formulär och huvudsakliga vägar är klara; en eventuell fristående bokningssida kan utvärderas senare.
- [Genomfört] Lägg till ett kort bokningsformulär för datum, ort, lokal, evenemang, liveformat, antal gäster och kontaktuppgifter.
- [Genomfört] Skicka bokningsförfrågningar direkt på sidan via Formspree och visa tydliga tack- och felmeddelanden.
- [Genomfört] Verifiera leveransen från samtliga fyra publicerade formulär. Den 14 augusti 2026 accepterade Formspree nya testinskick från Klas bokning, Klas mejllista, DUOVI bokning och DUOVI mejllista; samtliga mejlaviseringar bekräftades mottagna.
- [Påbörjat] Kontrollera den visuella formulärupplevelsen på fysisk mobil och dator. Formulären används på båda, men en sista systematisk genomgång av validering, laddningsläge och tackmeddelande återstår.
- [Avvaktar] Gör `info@klasosterman.se` till synlig avsändaradress när Klas svarar på bokningar. Första alternativet är att be administratören för `moonsplash.se` aktivera externa SMTP-servrar i Google Workspace. Om det inte går och bokningarna växer, uppgraderas LoopiaDNS med en riktig e-postlåda och SMTP för `info@klasosterman.se`. Tills vidare skickas svar från `klas@moonsplash.se` med `info@klasosterman.se` som svarsadress och i signaturen.

## Prioritet 2 – material och förtroende

- [Genomfört] Lägg in utvalda bilder från riktiga spelningar.
- [Påbörjat] Presentera solo, duo och fullt band med egna bilder, korta videor och tydligare innehåll. Solo, duo och event har stärkts; fullt band avvaktar tills en representativ bandbild eller ett starkare liveklipp finns.
- [Genomfört] Lägg till två eller tre kundomdömen med godkända namn eller arrangörer.
- [Påbörjat] Visa situationsbaserade exempel. Vigsel, mingel, restaurang och event finns; fullt band kan utvecklas vidare.
- [Genomfört] Skapa ett digitalt presskit med presentation, pressbilder, musik, livevideor, teknisk information och kontaktuppgifter. En första permanent version finns på `/press/` och kan kompletteras med fotografnamn och mer detaljerad teknisk rider.
- [Genomfört] Bildoptimera allt nytt material för mobil och dator före publicering.

## Prioritet 3 – musiksläpp och synlighet

- [Påbörjat] Registrera domänen i Google Search Console, verifiera den via DNS, skicka in sitemap och begär indexering av artist- och duo-sidan.
- Skapa en enkel sida eller sektion för varje större musiksläpp.
- Kombinera Spotify-länk, musikvideo, bakgrund till låten, bilder och mejlanmälan.
- Använd mejllistan före, under och efter ett släpp utan att skicka för ofta.
- Bygg genuint innehåll kring relevanta lokala sökningar, exempelvis livemusik till bröllop, akustisk duo och liveband i Stockholm och Roslagen.
- [Avvaktar] Mät bokningsklick, förfrågningar, mejlanmälningar och vilka kanaler besökarna kommer från. Tas upp igen när webbplatsen ger mer återbäring; tills dess används Formspree, Spotify och YouTubes befintliga statistik utan en extra betaltjänst eller cookie-ruta.
- Skapa en egen permanent sida för varje offentlig spelning som ska kunna visas som ett evenemang i Google. Lägg därefter till Event-strukturerad data; privata spelningar ska inte indexeras.

## Teknisk utvecklingsplan

### Steg 1 – instruktioner

Klas skickar tills vidare nya spelningar, släpp och andra ändringar som tydliga instruktioner. Det är enklast medan webbplatsens innehåll och struktur fortfarande utvecklas.

### Steg 2 – strukturerade datafiler

- [Genomfört] Flytta spelningarna till den strukturerade datafilen `shows.js`.
- [Genomfört] Låt sidan automatiskt skapa, datumordna och kategorisera spelningarna.
- Använd samma princip för musiksläpp, omdömen, bilder och nyheter när det blir relevant.
- [Genomfört] Förbered datamodellen för offentligt/privat, biljettlänk, entré och liveformat. Tid läggs till när exakta tider finns.

### Steg 3 – enkelt CMS

Inför ett innehållssystem först när Klas behöver uppdatera ofta, göra ändringar från mobilen eller låta fler personer administrera sidan. Välj då ett enkelt CMS framför en specialbyggd backend.

Ett CMS blir särskilt relevant när:

- flera uppdateringar görs varje månad;
- spelningar ska kunna publiceras direkt från mobilen;
- fler personer ska administrera innehållet;
- publicerade spelningar ska kunna utlösa mejlutskick;
- anmälningar och publiklistor behöver hanteras.

## Gemensamt projekt – Klas, Josefin och Duo

Bygg ett sammanhängande system där Klas och Josefin har varsin personlig webbplats och varsitt dubbelsidigt visitkort, samtidigt som duon presenteras konsekvent på båda webbplatserna.

### Webbplatser

- Färdigställ först Klas webbplats och använd den som teknisk grund för Josefins webbplats.
- Ge Josefin egna färger, bilder, texter, musiklänkar, videor, sociala medier och kontaktuppgifter så att sidan får en egen identitet.
- Återanvänd mobilanpassning, navigation, spelningar, datumhantering, videoöppning, bokningsflöde, prestanda och tillgänglighet.
- Skapa en riktig och permanent duo-adress på båda webbplatserna, exempelvis `/duo`, i stället för att endast länka till `/#duo`.
- Låt sidhuvud och navigation tillhöra respektive artist även när duo-innehållet visas.
- [Beslutat] DUOVI ska finnas på två publika adresser: `klasosterman.se/duo/` och `josefinblomberg.se/duo/`. Det gör att respektive artists DUOVI-sida och visitkort håller besökaren på rätt domän.
- [Beslutat] De två DUOVI-sidorna ska byggas från en gemensam innehållskälla för texter, bilder, videor, repertoar, spelningar och bokningsinformation. Innehållet ska inte underhållas manuellt i två fristående kopior.
- Anpassa endast sidhuvud, tillbaka-länk och spårning av formulär och visitkort till respektive artistdomän.
- Utse en huvudsaklig canonical-adress för DUOVI när Josefins webbplats byggs. Tills en eventuell egen DUOVI-domän finns används `https://klasosterman.se/duo/` som canonical även från Josefins DUOVI-sida, så att de två adresserna inte konkurrerar i Google.

### Gemensam duoidentitet

- [Beslutat] Duon heter **DUOVI**. Använd namnet som huvudrubrik och skriv **Klas Österman & Josefin Blomberg** tydligt under en övergångsperiod för igenkänning och sökbarhet.
- Använd samma namn, presentation, bilder, videor och grafiska uttryck för duon på båda webbplatserna.
- Visa samma repertoar, liveformat, offentliga duospelningar och bokningsinformation.
- Ha en tydlig knapp med **Boka DUOVI**.
- [Beslutat] Strukturera duo-innehållet så att en ändring i den gemensamma innehållskällan kan slå igenom på båda webbplatserna.

### Visitkort

- [Påbörjat] Klas får ett dubbelsidigt kort: ena sidan Klas Österman och andra sidan DUOVI. Första premiumutkastet och tryckfiler med 3 mm utfall är framtagna; fysisk provskanning och provtryck återstår.
- Josefin får ett dubbelsidigt kort: ena sidan Josefin Blomberg och andra sidan DUOVI.
- [Genomfört] Klas-sidans QR-kod leder till `klasosterman.se`.
- Josefins artist-QR leder till hennes startsida.
- Duo-sidan på respektive kort leder till den permanenta duo-sidan på respektive artists webbplats.
- Skriv alltid ut den korta webbadressen bredvid QR-koden så att kortet fungerar även utan skanning.
- Använd spårbara men stabila länkar för att mäta besök från Klas respektive Josefins visitkort.
- [Påbörjat] Provskanna alla QR-koder i flera telefoner och provtryck korten innan en större beställning. Maskinell avkodning från de färdiga Klas- och DUOVI-sidorna är godkänd.

### Flyers och lokala anslag

- [Påbörjat] Skapa flyers för tillåtna anslagstavlor på exempelvis bibliotek, caféer, bygdegårdar, musikställen, kyrkor och eventlokaler. Första A4-utkasten och tryckfilerna är framtagna; provtryck och fysisk QR-testning återstår.
- [Genomfört] Ta fram minst två tydliga varianter: en bokningsinriktad flyer för bröllop, fest, restaurang och företag samt en artistinriktad flyer för musik, spelningar och lokal publik.
- Använd en stark bild, en kort rubrik, få rader text, tydlig kontaktinformation och en stor QR-kod som fungerar på avstånd.
- Skriv alltid ut den korta webbadressen under QR-koden och överväg avrivningsremsor där formatet passar.
- [Genomfört] Låt flygarnas QR-koder leda direkt till de enkla adresser som också står på papperet: `klasosterman.se` för artistflyern och `klasosterman.se/duo/` för DUOVI. Separata kampanjadresser väljs bort i första upplagan för ett enklare och mer transparent flöde; detaljerad kampanjmätning kan införas senare.
- Samordna flyerns färger, bilder och typografi med visitkorten och webbplatsen.
- Provskanna QR-koderna med flera telefoner från ungefär en till två meters avstånd och gör ett provtryck före större upplaga.
- Kontrollera tillstånd, regler och eventuellt nedtagningsdatum för varje anslagstavla.

### Föreslagen arbetsordning

1. Färdigställ Klas webbplats.
2. Skapa den särskilda duo-sidan och bestäm duoidentiteten.
3. Bygg Josefins webbplats från samma tekniska grund.
4. Säkerställ att duo-innehållet är konsekvent på båda webbplatserna.
5. Skapa visitkorten och de spårbara QR-länkarna.
6. Skapa flyers och separata spårbara flyerlänkar för bokningar och publik.
7. Provtryck och testa allt tryckt material innan slutlig beställning eller större uppsättning.

## Material som kan stärka nästa etapp

- En eller två bilder med hela bandet.
- Ett representativt liveklipp med fullt band; befintligt svagare material sparas men används inte tills vidare.
- Ett kundomdöme från en födelsedagsfest, restaurang eller ett företagsevent som kompletterar bröllopsomdömena.
- Bekräftelse på att publiceringstillstånd finns för bilder och kundnamn som används.

Ta upp de kvarvarande punkterna när webbplatsen utvecklas vidare. När formulärtesten är godkända prioriteras riktig utskickstjänst, offentliga spelningar och tydligare solo-/bandmaterial innan en egen backend övervägs.
