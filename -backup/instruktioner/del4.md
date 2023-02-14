# Del 4 - Login

Ni bör nu vara redo att köra igång och utveckla gruppens applikation.

Validera hela tiden ert arbete mot testerna . Om ni inte kan få testerna att bli gröna så är det något som inte fungerar som det ska.

För att köra tester för denna del så används scriptet ```npm run test:2```.

## Skelett

Börja med att skapa ett skelett för era routes och skapa tillhörande views.
Utgå från er planering.

## Databas

Återanvänd mysql kod från tidigare arbeten. Om ni vill skapa en user/testroute och kolla om kopplingen till databasen fungerar.

## Säkerhet, att hasha lösenord

Innan ni kan spara användare i er databas så behöver ni kunna hasha ett lösenord. Anledningen till att vi gör på det sättet är att vi aldrig ska spara lösenord i läsbar text i en databas, det är av säkerhetsskäl. Så hur sker det då?

Vi behöver använda oss av npm paketet bcrypt för att skapa en lösenordshash.

https://www.npmjs.com/package/bcrypt behöver installeras
Det finns instruktioner för bcrypt på sidan
Skapa en hash/test route att använda för att skapa en hash av ert lösenord

```js
bcrypt.hash(LÖSENORDSSTRÄNG, 10, function (err, hash) {
    // Store hash in your password DB.
    console.log(hash);
    return res.json(hash);
});
```

När det är skapat så använder ni denna output för att skapa/uppdatera en testuser i databasen.

## Login

Vilken route postar ni till?
Vad ska ske på post routen?

Ett flöde kan se ut som följer:

* Skicka data med formulär
* Kontrollera om den kommer fram, req.body
* Vad ska ske sedan?
* Hitta user i databasen, använd WHERE
* Jämför lösenords hash med bcrypt
* Om lösenord och user stämmer
* Sätt session
* redirect
* Om lösenord och user är fel
* Hantera fel
* Hjälp användaren

Kod för att kontrollera lösenord med bcrypt

bcrypt.compare(LÖSENFRÅNFROM, HASHFRÅNDB, function(err, result) {
// result == true logga in, annars buuuu
});

Förfarande kan även skrivas med promises, men då får ni kontrollera detta på bcrypt npm sidan.

## Alla tester är gröna

Snyggt jobbat, dokumentera, comita och pusha till github.

[Del 5](del5.md)