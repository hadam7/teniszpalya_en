## Funkció: Regisztráció
**Azonosító: F01**

**Leírás:**

A regisztráció lehetővé teszi az új felhasználók számára, hogy fiókot hozzanak létre az alkalmazásban. A folyamat során a felhasználó megadja az e-mail címét, jelszavát és egyéb szükséges adatokat.

**Bemenet:**
- E-mail
- Jelszó
- Jelszó megerősítése
- Teljes név
- Telefonszám

**Kimenet:**
- Sikeres regisztráció esetén a felhasználó profiljára irányítás
- Hibás adat esetén az űrlapon visszajelzés, illetve hibaüzenet

**Folyamat:**
- A felhasználó megnyitja a regisztrációs oldalt.
- Megadja a szükséges adatokat.
- A rendszer ellenőrzi az adatokat.
- Ha minden rendben van, létrejön az új fiók, és odairányítjuk a felhasználót.
- Ha hiba van, a felhasználó hibaüzenetet kap.

**Szereplő:** Felhasználó

**Kapcsolódó követelmény:** K01 Regisztráció

---------------------------------------------

## Funkció: Bejelentkezés
**Azonosító: F02**

**Leírás:**

A bejelentkezés lehetővé teszi a regisztrált felhasználók és pályaüzemeltetők számára, hogy hozzáférjenek személyes felületükhöz.

**Bemenet:**
- E-mail
- Jelszó

**Kimenet:**
- Sikeres bejelentkezés esetén a felhasználó vagy üzemeltető felületére irányítás
- Hibás adatok esetén hibaüzenet

**Folyamat:**
- A felhasználó megnyitja a bejelentkezési oldalt.
- Megadja e-mail címét és jelszavát.
- A rendszer ellenőrzi a bejelentkezési adatokat.
- Sikeres ellenőrzés után belépteti a felhasználót.
- Hibás adatok esetén hibaüzenetet jelenít meg.

**Szereplő:** Felhasználó, Pályaüzemeltető

**Kapcsolódó követelmény:** K02 Bejelentkezés

---------------------------------------------

## Funkció: Elfelejtett jelszó
**Azonosító:** F03

**Leírás:**

A funkció lehetővé teszi a felhasználóknak és üzemeltetőknek, hogy új jelszót kérjenek elfelejtett jelszó esetén.

**Bemenet:**
- Regisztrált e-mail cím

**Kimenet:**
- E-mail küldése jelszó-visszaállító linkkel
- Hibás e-mail esetén hibaüzenet

**Folyamat:**
- Felhasználó a bejelentkezési oldalon rákattint az „Elfelejtett jelszó” gombra.
- Megadja regisztrált e-mail címét.
- A rendszer ellenőrzi, hogy az e-mail létezik-e.
- Létező e-mail esetén küld egy visszaállító linket.
- Hibás e-mail cím esetén hibaüzenetet ad.

**Szereplő:** Felhasználó, Pályaüzemeltető

**Kapcsolódó követelmény:** K03 Elfelejtett jelszó

---------------------------------------------

## Funkció: Pályainformációk megtekintése
**Azonosító:** F04

**Leírás:**

A felhasználó megtekintheti az elérhető pályák adatait, mint például pályaszám, anyag, kültéri/beltéri.

**Bemenet:**
- Kérés a pályalistára

**Kimenet:**
- Pályaadatok listája

**Folyamat:**
- Felhasználó megnyitja a pályainformációk oldalt.
- A rendszer lekérdezi a pályák adatait.
- A rendszer megjeleníti a felhasználó számára.

**Szereplő:** Felhasználó

**Kapcsolódó követelmény:** K04 Pályainformációk megtekintése

---------------------------------------------

## Funkció: Galéria
**Azonosító:** F05

**Leírás:**

A felhasználó megtekinthet képeket a pályákról és a létesítményről.

**Bemenet:**
- Kérés a galéria megnyitására

**Kimenet:**
- Képek megjelenítése

**Folyamat:**
- Felhasználó megnyitja a galéria oldalt.
- A rendszer lekéri és megjeleníti a képeket.

**Szereplő:** Felhasználó

**Kapcsolódó követelmény:** K05 Galéria

---------------------------------------------

## Funkció: Árlista megtekintése
**Azonosító:** F06

**Leírás:**

A felhasználó megtekintheti a pályafoglalás aktuális árait.

**Bemenet:**
- Kérés az árlistára

**Kimenet:**
- Árlista megjelenítése

**Folyamat:**
- Felhasználó megnyitja az árlista oldalt.
- A rendszer lekéri és megjeleníti az árakat.

**Szereplő:** Felhasználó

**Kapcsolódó követelmény:** K06 Árlista megtekintése

---------------------------------------------

## Funkció: Pályafoglalás
**Azonosító:** F07

**Leírás:**

A felhasználó szabad időpontban lefoglalhat egy pályát.

**Bemenet:**
- Felhasználó azonosító
- Pályaszám
- Időpont

**Kimenet:**
- Foglalás visszaigazolása
- Hibás adat esetén hibaüzenet

**Folyamat:**
- Felhasználó megnyitja a foglalási oldalt.
- Kiválasztja a pályát és időpontot.
- A rendszer ellenőrzi az elérhetőséget.
- Ha szabad, a foglalás létrejön.
- A felhasználó visszaigazolást kap.

**Szereplő:** Felhasználó

**Kapcsolódó követelmény:** K07 Pályafoglalás

---------------------------------------------

## Funkció: Pályafoglalás lemondása
**Azonosító:** F08

**Leírás:**

A felhasználó lemondhat egy meglévő foglalását.

**Bemenet:**
- Foglalás azonosító

**Kimenet:**
- Foglalás törlése visszaigazolással

**Folyamat:**
- Felhasználó megnyitja foglalásai listáját.
- Kiválasztja a lemondani kívánt foglalást.
- A rendszer törli a foglalást.
- A felhasználó visszaigazolást kap.

**Szereplő:** Felhasználó

**Kapcsolódó követelmény:** K08 Pályafoglalás lemondása

---


## Funkció: Kapcsolatfelvétel
**Azonosító:** F09

**Leírás:**

A felhasználó számára elérhető egy felület, ahol kérdéseket tehet fel a pályaüzemeltetőnek.

**Bemenet:**
- Felhasználó üzenete

**Kimenet:**
- Üzenet elküldése az üzemeltetőnek
- Visszaigazolás a felhasználónak

**Folyamat:**
- Felhasználó megnyitja a kapcsolatfelvételi oldalt.
- Kitölti az üzenet mezőt.
- A rendszer elküldi az üzenetet az üzemeltetőnek.
- A felhasználó visszaigazolást kap.

**Szereplő:** Felhasználó

**Kapcsolódó követelmény:** K09 Kapcsolatfelvétel

---------------------------------------------

## Funkció: Foglalási adatok megtekintése
**Azonosító:** F10

**Leírás:**

A pályaüzemeltető megtekintheti a foglalások listáját különböző nézetekben.

**Bemenet:**
- Kérés a foglalások listájára

**Kimenet:**
- Foglalások listája

**Folyamat:**
- Üzemeltető bejelentkezik.
- Megnyitja a foglalási adatok oldalt.
- A rendszer megjeleníti a foglalások listáját.

**Szereplő:** Pályaüzemeltető

**Kapcsolódó követelmény:** K10 Foglalási adatok megtekintése

---------------------------------------------

## Funkció: Árlista módosítása
**Azonosító:** F11

**Leírás:**

A pályaüzemeltető megváltoztathatja a pályabérlések árait.

**Bemenet:**
- Új árlista adatok

**Kimenet:**
- Árlista frissítése
- Visszaigazolás az üzemeltetőnek

**Folyamat:**
- Üzemeltető bejelentkezik.
- Megnyitja az árlista módosítási oldalt.
- Megadja az új árakat.
- A rendszer frissíti az árlistát.
- Visszaigazolást küld az üzemeltetőnek.

**Szereplő:** Pályaüzemeltető

**Kapcsolódó követelmény:** K11 Árlista módosítása

---------------------------------------------

## Funkció: Kapcsolati információk módosítása
**Azonosító:** F12

**Leírás:**

A pályaüzemeltető megváltoztathatja a hozzá tartozó kapcsolati információkat.

**Bemenet:**
- Új kapcsolati adatok

**Kimenet:**
- Kapcsolati adatok frissítése
- Visszaigazolás az üzemeltetőnek

**Folyamat:**
- Üzemeltető bejelentkezik.
- Megnyitja a kapcsolati információk módosítási oldalt.
- Megadja az új adatokat.
- A rendszer frissíti az információkat.
- Visszaigazolást küld az üzemeltetőnek.

**Szereplő:** Pályaüzemeltető

**Kapcsolódó követelmény:** K12 Kapcsolati információk módosítása

---------------------------------------------

## Funkció: Foglalási visszaigazolás
**Azonosító:** F13

**Leírás:**

A rendszer küld egy visszaigazoló üzenetet e-mailben a sikeres foglalásról.

**Bemenet:**
- Foglalás adatai

**Kimenet:**
- Visszaigazoló e-mail

**Folyamat:**
- Felhasználó foglal.
- A rendszer rögzíti a foglalást.
- E-mailt küld a felhasználónak a visszaigazolással.

**Szereplő:** Felhasználó

**Kapcsolódó követelmény:** K13 Foglalási visszaigazolás

---------------------------------------------

## Funkció: Foglalási értesítés
**Azonosító:** F14

**Leírás:**

A rendszer értesíti a felhasználót a közelgő foglalásáról e-mailben.

**Bemenet:**
- Foglalás adatai

**Kimenet:**
- Értesítő e-mail

**Folyamat:**
- A rendszer ellenőrzi a közelgő foglalásokat.
- Értesítő e-mailt küld a felhasználónak.

**Szereplő:** Felhasználó

**Kapcsolódó követelmény:** K14 Foglalási értesítés

---

## Funkció: Profil kezelése
**Azonosító:** F15

**Leírás:**

A felhasználó módosíthatja személyes adatait a profil oldalán.

**Bemenet:**
- Új személyes adatok (pl. név, telefonszám, e-mail)

**Kimenet:**
- Frissített profil
- Visszaigazolás a felhasználónak

**Folyamat:**
- Felhasználó bejelentkezik.
- Megnyitja a profil szerkesztését.
- Megadja az új adatokat.
- A rendszer frissíti a profilt.
- Visszaigazolást küld a felhasználónak.

**Szereplő:** Felhasználó

**Kapcsolódó követelmény:** K15 Profil kezelése

---------------------------------------------

## Funkció: Üzenetküldés
**Azonosító:** F16

**Leírás:**

A pályaüzemeltető üzenetet küldhet egy felhasználónak, például foglalás módosulásáról.

**Bemenet:**
- Felhasználó azonosító
- Üzenet szövege

**Kimenet:**
- Üzenet elküldése
- Visszaigazolás az üzemeltetőnek

**Folyamat:**
- Üzemeltető bejelentkezik.
- Megnyitja az üzenetküldő felületet.
- Megadja a felhasználót és az üzenetet.
- A rendszer elküldi az üzenetet.
- Visszaigazolást küld az üzemeltetőnek.

**Szereplő:** Pályaüzemeltető

**Kapcsolódó követelmény:** K16 Üzenetküldés

---------------------------------------------

## Funkció: Foglalási előzmények
**Azonosító:** F17

**Leírás:**

A felhasználó megtekintheti a korábbi foglalásait.

**Bemenet:**
- Felhasználó azonosító

**Kimenet:**
- Foglalások listája

**Folyamat:**
- Felhasználó bejelentkezik.
- Megnyitja az előzmények oldalt.
- A rendszer lekérdezi és megjeleníti a korábbi foglalásokat.

**Szereplő:** Felhasználó

**Kapcsolódó követelmény:** K17 Foglalási előzmények