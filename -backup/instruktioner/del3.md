# Del 3 - Setup med Node

Använd er fork av projektet. Startfiler för projektet finns här.
Se över startscript och liknande, se till att ni har en .gitignore som inte checkar in node_modules och eventuellt andra filer som inte ska vara med i repot.

## Paket

Ni behöver installera de paket som behövs.

## Starta

Starta projektet med `npm run dev` och se till att det fungerar.

## Tester

I det här projektet finns ett antal tester, det är en hjälp för er att komma vidare och för att visa vad ni ska arbeta med. De är även en avstämning för när ni ska gå vidare.

För att köra testerna används https://www.npmjs.com/package/jest
Testerna körs med script som finns i ```package.json```.

För att köra alla tester en gång, använd:
```bash	
npm run test
```

Mer användbar är att starta tester med watch (så de körs automatiskt när ni ändrar i projektet):
```bash
npm run test:watch
```

När jest körs i watch läget så kan ni styra hur det ska köra testerna.
Ni kan till exempel välja att filtrera vilka tester som ska köras. För att göra det så väljer ni ```p``` och skriver testets namn. För det här projektet finns följande tester:
* 1-server
* 2-login
* 3-auth
* 4-register

Ni kan även köra dem med de script som finns i package.json.
```bash	
npm run test:1
npm run test:2
npm run test:3
npm run test:4
```

## Gröna tester

Testerna för denna del kör du genom att köra ```npm run test:1```.

Arbeta med att få alla tester att bli gröna. Detta är en avstämning för att se att ni är på rätt väg.

När det är klart kan ni gå vidare till nästa steg.

[Del 4](del4.md)