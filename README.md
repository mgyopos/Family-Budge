Dokumentáció

Családi Pénztárca

Rövid Ismertető: A Family Bridge egy olyan alkalmazás, ami abban segít a családoknak, hogy a szülők nyomon tudják követetni a költéseiket illetve gyerekeik költését, és Az admin jogú felhasználó a saját és user jogú felhasználók költéseit is látja, a user csak a sajátját.

(Jelenleg az egyetlen admin jogú felhasználó a   username: admin password: a ,adatokkal tud bejelentkezni. 
Az angular projectből csak a node modulok hiányoznak, azon kívül mindent feltöltöttem.)

A fejlesztői környezet és eszközök bemutatása:

A backend megvalósításához a következő technológiákat, modelleket használtuk:

	Java Spring Boot
	MVC modell
	REST API
	authorizált végpontok
	h2 adatbáziskezelő rendszer
	GitHub, Git
	Fejlesztői környezet: NetBeans
	
A frontend megvalósításához a következő technológiákat, modelleket használtuk:

	Angular 5, TypeScript nyelvi alapon
	Angular Material: design komponensek
	Fejlesztői környezet: Visual Studio Code
	

Funkciók:

	Regisztráció:  email cím és jelszó megadásával történik.

	Bejelentkezés:  email cím és jelszó megadásával történik.

	Kijelentkezés: a felhasználót a rendszer nem engedi a loginon és a regisztráción kívül beengedni.
	
	Tranzakciók megtekintése:A user és az admin is megtudja tekinteni korábbi költéseit és részleteit.

	Tranzakció hozzáadása: A user és az admin felhasználó is hozzá tud adni vagy venni pénzt a számlájához.

	Kérelem: a user felhasználó pénzt tud kérvényezni az admin jogú tagról.

	Kérelmek: csak az admin jogú tag látja, elfogadni vagy elutasítani tudja a kérelmeket.

Felhasználók

	Admin: admin jogú felhasználó a saját és user jogú felhasználók költéseit is látja. hozzá tud adni tranzakciót és jövedelmet,és el tud fogadni kérvényeket a user felhasználóktól.

	User: csak a saját költéseit látja. Hozzá tud adni költést, és tud kérvényezni az admin jogú tagtól pénzt.

	Guest: Csak a login és a register oldal érhető el neki
	
	
Adatbázis kapcsolatok

![alt text](https://github.com/mgyopos/Family-Budge/blob/master/asd.jpg)

