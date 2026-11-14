# Trainingslog – persönliche Fitness-App (PWA)

## Ziel
Ein Trainings-Tracker nur für mich, auf dem iPhone. Er soll als Web-App (PWA) laufen, die ich in Safari über „Teilen → Zum Home-Bildschirm“ installiere. Kein Backend, kein Login, keine Cloud-Datenbank.

## Aktueller Stand
- `index.html` enthält die ganze App: HTML, CSS und JavaScript in einer Datei, ohne Framework. Ursprünglich als Claude-Artifact gebaut; der Code für die Artifact-Umgebung (Claude-Konto, Downloads) ist entfernt.
- PWA-Dateien: `manifest.webmanifest`, `sw.js` (Service Worker) und `icons/` (192 px, 512 px, `apple-touch-icon.png` mit 180×180).
- Funktionen:
  - Übungen mit Kategorien und Erfassungsart (Kraft: kg × Wdh, Ausdauer: min + km, nur Zeit)
  - Vorlagen (Push, Pull, Legs, Ausdauer, Padel), mit einem Tipp startbar. Unter jeder Vorlage steht, wann sie zuletzt trainiert wurde (erkannt am Trainingsnamen); die am längsten nicht trainierte bekommt das Schild „Dran“ (`templateDays()`).
  - Feste Notiz pro Übung (optionales Feld `note`, höchstens 140 Zeichen), steht im Training unter dem Übungsnamen.
  - Fortschritt-Ansicht mit Monatskalender (Trainingstage als Kugeln, `vCalendar()`), Vergleich dieser Woche mit dem Schnitt der vier Wochen davor und Sätzen pro Kategorie der letzten 7 Tage (`vWeekCompare()`).
  - Übungsbibliothek: Die App lädt `bibliothek/uebungen.json` und `bibliothek/vorlagen.json` im Hintergrund (auch offline, beide stehen in `PRECACHE`). Übungen lassen sich im Auswahl-Sheet und im Tab Übungen („+ Aus der Bibliothek“) übernehmen, Programm-Einheiten im Tab Vorlagen („+ Programm aus der Bibliothek“) als Vorlage. Das Übungs-Sheet zeigt die Technik-Hinweise der Bibliothek. Sätze, Wiederholungen und Pausen der Programme sind nur Richtwerte in der Anzeige.
  - Tempo bei Ausdauer: Bei Minuten und km zeigt die App überall auch min/km (`fmtPace()`, `paceOf()`); die CSV hat dafür hinten die Spalte `Tempo_min_km`.
  - Tracker: „Letztes Mal“-Anzeige pro Übung, Felder mit den Werten vom letzten Mal vorausgefüllt
  - Schnelle Satz-Erfassung: Beim Antippen eines Satzfelds ist der Inhalt markiert, die erste Ziffer ersetzt ihn. Was man in einem Satz einträgt, übernehmen die folgenden offenen Sätze derselben Übung, solange dort noch der alte Wert oder nichts stand (`link` in den `focusin`-/`input`-Handlern). Ein leerer Satz übernimmt beim Abhaken die Werte des Satzes darüber; ganz leere Sätze lassen sich nicht abhaken, „− Satz“ fragt bei einem abgehakten Satz nach.
  - Steigerungsvorschlag: Wurden in den letzten zwei Einheiten einer Kraftübung alle Sätze mit demselben Gewicht und mindestens 10 Wdh geschafft, zeigt der Tracker „Steigern: +2,5 kg“; ein Tipp setzt das Gewicht in allen offenen Sätzen (`stepUp()`, Werte in `STEP_REPS` und `STEP_KG`).
  - Fortschrittskurve im Übungs-Sheet ab zwei Einheiten (`vChart()`, `exSeries()`): Kraft als geschätztes Maximum für 1 Wdh nach Epley, ohne Gewicht die meisten Wdh, Ausdauer als Tempo, „nur Zeit“ als Minuten. Wird wie die Spielwerte nur berechnet.
  - Automatischer Pausen-Timer nach jedem abgehakten Kraft-Satz (−15/+15/Weiter, Piepton)
  - Verlauf, Einstellung der Pausendauer, Backup als JSON, Export als CSV, Import
  - Bildschirm bleibt an, solange ein Training läuft (`keepAwake()`, Screen Wake Lock; auf dem iPhone in der installierten App ab iOS 18.4)
  - Backup-Erinnerung: Gibt es seit dem letzten Backup neue Trainings und liegt es mehr als 14 Tage zurück oder fehlen 10 Trainings, zeigt die Ansicht nach dem Training „Jetzt sichern“ (`backupDue()`). Der Verlauf zeigt, wann zuletzt gesichert wurde.
- Design: Look in Anlehnung an Dragon Ball, ohne Originalfiguren und ohne Logo. Tiefes Blau als Grund, Orange für Aktionen, Gold für Energie (Timer, erledigte Sätze), Grün für die „Letztes Mal“-Werte; schräge, schmale Titelschrift aus Systemfonts. Auf dem Startbildschirm stehen sieben Sternkugeln, die sich mit den Trainings der letzten 7 Tage füllen. Alle Farben liegen als CSS-Variablen in `:root`.
- Spielelemente: Kampfkraft (Punkte pro Satz), Stufen mit Rängen, Wochenserie, Rekorde und zwölf Erfolge. Der Startbildschirm zeigt Stufe, Kampfkraft und Serie; ein Tipp darauf öffnet die Ansicht „Fortschritt“. Beim Abhaken meldet die App neue Rekorde, nach dem Speichern zeigt sie, was das Training gebracht hat. Alles wird in `progress()` aus den gespeicherten Trainings berechnet und nicht gespeichert, das Datenformat ist dadurch unverändert.
- Datenhaltung: IndexedDB, Datenbank `trainingslog` (Schema-Version 1). Der Store `meta` hält einen Eintrag `state` (Übungen, Vorlagen, Einstellungen, laufendes Training), der Store `workouts` einen Eintrag pro gespeichertem Training. Im Arbeitsspeicher und im Backup gilt weiter das Datenformat v1 des Prototyps, alte Backups bleiben importierbar. Erweiterungen, alle optional: die Felder `note` und `lib` an Übungen, `lib` an Vorlagen (ID aus der Bibliothek) und das Feld `settings.lastBackup` (Zeitpunkt des letzten Backups, steht auch im Backup selbst; fehlt es, gilt „noch kein Backup“, beim Import älterer Backups wird es aus `exportedAt` übernommen). Beim Speichern von Übungen und Vorlagen bleiben Felder erhalten, die die App nicht kennt.
- Migration: Findet die App beim Start keine Daten in IndexedDB, übernimmt sie den alten `localStorage`-Eintrag `trainingslog-v1`. Der Eintrag bleibt als Sicherheitskopie liegen und wird danach nicht mehr gelesen.
- Offline: `sw.js` liefert die App-Dateien aus dem Cache und frischt ihn im Hintergrund auf. Eine geänderte `index.html` ist dadurch erst beim nächsten Öffnen aktiv; die App zeigt dann den Hinweis „Neue Version bereit“. Eine Versionsnummer muss dafür nicht gepflegt werden.
- Export (JSON, CSV): auf dem Handy über das Teilen-Menü (Web Share API), sonst als Datei-Download. Wo beides nicht geht, zeigt die App den Text zum Kopieren an.

## Lokal testen
- Im Projektordner `python -m http.server 8080` starten und `http://localhost:8080` öffnen.
- Der Service Worker läuft nur über `localhost` oder HTTPS, also nicht bei `file://` und nicht über die IP-Adresse im WLAN.
- Wo der Browser keinen Speicher zulässt (z. B. in einer Datei-Vorschau), startet die App im Vorschau-Modus und speichert nichts.
- Handy-Rahmen für Tests in echter iPhone-Breite: `http://localhost:8080/.claude/handy.html` (390 × 844, mit `?w=375&h=667` wie ein iPhone SE). Die Seite gehört nicht zur App; sie bietet Hilfen für Tests per JavaScript (`appEval`, `pos`, `posText`), beschrieben im Kommentar oben in der Datei.

## Veröffentlichung
- Repository: https://github.com/MrLeeDota/trainingslog (öffentlich), Zweig `main`.
- Die App läuft über GitHub Pages unter https://mrleedota.github.io/trainingslog/. Pages liefert den Zweig `main` aus dem Hauptordner aus; `.nojekyll` schaltet die Jekyll-Verarbeitung ab.
- Änderungen veröffentlichen: committen und `git push`. Nach wenigen Minuten ist die neue Version online; in der installierten App erscheint sie beim nächsten Öffnen mit dem Hinweis „Neue Version bereit“.
- Alle Pfade in `index.html`, `manifest.webmanifest` und `sw.js` sind relativ, weil die App in einem Unterordner liegt. Das so beibehalten.

## Agenten
In `.claude/agents/` liegen fünf Subagenten. Sie liefern Ideen oder prüfen; umgesetzt wird immer in der Hauptsitzung, nicht von den Agenten.
- Ideen für die Weiterentwicklung → `produkt-scout`. Er wertet `NOTIZEN.md` (meine Notizen aus dem Training) aus, recherchiert Vorbild-Apps und schreibt Vorschläge nach `IDEEN.md`.
- Änderungen an Daten, Backup oder Import → `daten-waechter`. Er prüft den git diff auf Datenverlust.
- Änderungen an Oberfläche oder Abläufen → `gym-tester`. Er spielt die App in Chrome auf `http://localhost:8080` im iPhone-Format durch, nie auf der Live-Seite.
- Übungen, Vorlagen, Trainingslogik → `trainings-experte`. Er pflegt die Übungsbibliothek und Programm-Vorlagen in `bibliothek/` (Format in `bibliothek/README.md`), prüft fachliche Regeln wie Progression, 1RM-Schätzung, Pausen und Kampfkraft und wertet auf Wunsch ein Backup aus.
- Wie gut ist eine vorhandene Funktion im Vergleich zu anderen Apps → `funktions-tester`. Er prüft pro Durchlauf eine Funktion im Handy-Rahmen und per Recherche (Strong, Hevy und eine dritte App), pflegt `VERGLEICH.md` und trägt höchstens 5 Verbesserungen in `IDEEN.md` ein, markiert mit „(aus Funktionsvergleich: …)“.
- Ablauf: Idee in `IDEEN.md` nach „Angenommen“ verschieben → umsetzen → passende Agenten prüfen lassen → nach „Erledigt“ verschieben → committen und pushen.
- Nach einer neuen Funktion: erst `gym-tester` (Fehler), dann `funktions-tester` (Vergleich und Verbesserungen).

## Nächste Schritte
1. Erledigt: Aus dem Prototyp eine echte PWA machen: `manifest.webmanifest`, App-Icons (inkl. `apple-touch-icon` 180×180), Service Worker für den Offline-Betrieb.
2. Erledigt: Speicherung auf IndexedDB umstellen, weil das robuster ist als localStorage. Das Backup-Format beibehalten, damit alte Backups aus dem Prototyp importierbar bleiben.
3. Erledigt: Export als echter Datei-Download oder über die Web Share API (Teilen-Menü auf dem iPhone).
4. Erledigt: Hosting über GitHub Pages, da Service Worker HTTPS brauchen.

## Konventionen
- Vanilla JS ohne Build-Tools, solange das Projekt überschaubar bleibt.
- UI-Texte auf Deutsch.
- Mobile-first: große Tap-Flächen, wenig Klicks während des Trainings, dunkles Design.
- Bei Änderungen am Datenformat immer eine Migration für alte Daten und Backups mitliefern.
- Bei Änderungen am Datenbank-Schema `DB_VERSION` erhöhen und in `onupgradeneeded` einen weiteren Schritt ergänzen.
- Dateien, die offline gebraucht werden, in `PRECACHE` in `sw.js` eintragen.
