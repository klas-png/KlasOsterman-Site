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
- Bokningsformulär finns på Klas-sidan och duo-sidan och skapar färdiga bokningsmejl utan att lagra personuppgifter.
- En första mejllisteanmälan finns på båda sidorna via besökarens mejlprogram.
- Duo-sidan har fått ett mobilanpassat bokningsflöde i tre tydliga steg före förfrågningsformuläret.
- Huvudsidan presenterar solo, duo och fullt band som tre tydliga mobilanpassade val.

## Prioritet 1 – publik och bokningar

- Koppla den förberedda mejllisteanmälan till en riktig utskickstjänst när tjänst och konto har valts.
- Håll anmälan enkel och be till en början bara om e-postadress.
- Ge möjlighet att senare välja ort eller område för lokalt relevanta utskick.
- [Genomfört] Märk varje spelning som offentlig eller privat och förbered märkning för fri entré, biljettbelagd och slutsåld.
- Lägg till biljettlänk, kalenderpåminnelse och delningsmöjlighet för offentliga spelningar.
- Skapa en tydlig bokningssida för solo, duo, fullt band, bröllop, mingel, företag och privata evenemang.
- [Genomfört] Lägg till ett kort bokningsformulär för datum, ort, lokal, evenemang, liveformat, antal gäster och kontaktuppgifter.

## Prioritet 2 – material och förtroende

- Lägg in utvalda bilder från riktiga spelningar.
- Presentera solo, duo och fullt band med egna bilder, korta videor och tydligare innehåll.
- Lägg till två eller tre kundomdömen med godkända namn eller arrangörer.
- Visa situationsbaserade exempel, till exempel vigsel, mingel, akustisk duo och fullt band.
- Skapa ett digitalt presskit med presentation, pressbilder, musik, livevideor, teknisk information och kontaktuppgifter.
- Bildoptimera allt nytt material för mobil och dator före publicering.

## Prioritet 3 – musiksläpp och synlighet

- Skapa en enkel sida eller sektion för varje större musiksläpp.
- Kombinera Spotify-länk, musikvideo, bakgrund till låten, bilder och mejlanmälan.
- Använd mejllistan före, under och efter ett släpp utan att skicka för ofta.
- Bygg genuint innehåll kring relevanta lokala sökningar, exempelvis livemusik till bröllop, akustisk duo och liveband i Stockholm och Roslagen.
- Mät bokningsklick, förfrågningar, mejlanmälningar och vilka kanaler besökarna kommer från.

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

### Gemensam duoidentitet

- Använd samma namn, presentation, bilder, videor och grafiska uttryck för duon på båda webbplatserna.
- Visa samma repertoar, liveformat, offentliga duospelningar och bokningsinformation.
- Ha en tydlig knapp med exempelvis **Boka Klas & Josefin**.
- Strukturera duo-innehållet så att en ändring enkelt kan hållas synkroniserad mellan webbplatserna.

### Visitkort

- Klas får ett dubbelsidigt kort: ena sidan Klas Österman och andra sidan Klas & Josefin Duo.
- Josefin får ett dubbelsidigt kort: ena sidan Josefin Blomberg och andra sidan Klas & Josefin Duo.
- Klas-sidans QR-kod leder till `klasosterman.se`.
- Josefins artist-QR leder till hennes startsida.
- Duo-sidan på respektive kort leder till den permanenta duo-sidan på respektive artists webbplats.
- Skriv alltid ut den korta webbadressen bredvid QR-koden så att kortet fungerar även utan skanning.
- Använd spårbara men stabila länkar för att mäta besök från Klas respektive Josefins visitkort.
- Provskanna alla QR-koder i flera telefoner och provtryck korten innan en större beställning.

### Föreslagen arbetsordning

1. Färdigställ Klas webbplats.
2. Skapa den särskilda duo-sidan och bestäm duoidentiteten.
3. Bygg Josefins webbplats från samma tekniska grund.
4. Säkerställ att duo-innehållet är konsekvent på båda webbplatserna.
5. Skapa visitkorten och de spårbara QR-länkarna.
6. Provtryck och testa innan slutlig beställning.

## Material som behövs från Klas

- Tre till fem livebilder från olika spelningar.
- En tydlig solobild.
- Två till tre duobilder med Josefin.
- En eller två bilder med hela bandet.
- En bra porträttbild till biografin.
- Eventuellt en bild från bröllop eller mingel där publicering är godkänd.
- Godkända kundomdömen och namn på de personer eller arrangörer som får anges.

Ta upp de kvarvarande punkterna när webbplatsen utvecklas vidare. Prioritera mejllista, offentliga spelningar och bokningssida innan en egen backend övervägs.
