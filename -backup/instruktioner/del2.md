# Del 2 - Planering

![flöde](inlog.sv.png)

Upprätta ett planeringsdokument, planering.md.

Ni ska planera följande.

## Databas

Databas ska planeras och skapas.
Tabellen för användare ska heta ```users``` och måste innehålla fält för ```name``` och ```password```. Där password är en varchar för att rymma en bcrypt hash av lösenordet.

Vilka fler fält behöver era användare? Vad ska de användas till? Vilka datatyper ska de ha?

## Routes

Ni behöver planera era routes. Vilka routes behövs för att kunna registrera och logga in användare? Hur ska de skrivas, vilka filer.

Fundera på hur varje route ska designas (CRUD), vad ska sidan innehålla (view) och vad ska backend koden innehålla. Gör anteckningar och fundera på applikationens flöde, rita flödesschema över hur ni tänker er att det sker. I hjälpdokumentet i kursboken finns det ett exempel ni kan titta på.
Om ni skriver i text kan det vara:

Ladda webbroot -> klicka login -> visa formulär -> …

Använd er av whiteboard och fota av eventuellt flöde ni ritar.


* get register
* post register
* get login
* post login

**requires auth**
* post logout
* get profile

## Paket

Vilka paket kommer ni att behöva för att kunna köra projektet.

Åtminstone `bcrypt`, men ni kommer även behöva paket för att spara user för databasen.

[Del 3](del3.md)