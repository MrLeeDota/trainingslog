# Ideen für Trainingslog

Hier stehen die Ideen für die Weiterentwicklung. Der Agent `produkt-scout` füllt „Vorschläge“. Was umgesetzt werden soll, wandert nach „Angenommen“, nach der Umsetzung nach „Erledigt“. Was unter „Abgelehnt“ oder „Erledigt“ steht, wird nicht erneut vorgeschlagen.

## Vorschläge

Aus dem Funktionsvergleich „Letztes Mal“ vom 14.11.2026 (zweite Prüfung, mit dem Arnold-Split; Befund in `VERGLEICH.md`). Die MCI-Runde vom selben Tag ist ganz einsortiert; was über MCI und die anderen Apps bekannt ist, steht mit Quellen in `APPS.md`.

### 31. „Ziel heute“ mit einem Tipp übernehmen (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: hoch · Aufwand: S · Datenformat: nein

Vorbild ist Hevy: Dort übernimmt ein Tipp auf den Vorwert in der Spalte „Previous“ den Satz, und Hevy Trainer zeigt das letzte Mal als Ziel, das man übertreffen soll. Bei uns behalten die Felder die alten Werte. Wer „Ziel heute: 11, 10, 9 Wdh“ bei Kurzhantel-Schrägbankdrücken schafft, braucht im Test 11 Tipps statt 4, bei Bankdrücken (8, 9, 8, 7) sind es 8 statt 5 und bei Reverse Butterfly 9 statt 4 (gerechnet). Skizze: Die Zeile wird ein Knopf im Stil von „Steigern“ (44 px hoch). Ein Tipp setzt die Wdh der offenen Sätze auf das Ziel, und der Hinweis bietet wie bei `setWeight()` „Rückgängig“ an. Wer nicht tippt, trainiert mit den Vorwerten wie bisher, so rutscht kein Zielwert unbemerkt ins Training (die offene Frage aus Idee 21).

### 32. Zusatzgewicht vorschlagen, wenn Körpergewicht ausgereizt ist (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Der Arnold-Split sieht bei Klimmzügen nach allen Sätzen mit 10 Wdh Zusatzgewicht vor. Im Test zeigte die App nach zweimal 4 × 10 ohne Gewicht aber nur „Ziel heute: 4 × 10 Wdh“, und der Hinweis des Programms an der Übung (`hinweis` in `bibliothek/vorlagen.json`) erscheint nirgends, auch nicht im Programm-Sheet. Vorbild ist Hevy Trainer, das erhöht, sobald alle Sätze das obere Ende des Bereichs erreichen. Skizze: Bei Übungen mit Programm wertet `stepUp()` ein leeres Gewicht als 0 und schlägt dann „Zusatzgewicht: 2,5 kg“ vor. Schritt und Bedingung lässt man vorher vom `trainings-experte` prüfen; ohne Programm bleibt es aus, weil es keine Obergrenze gibt. Ein Tipp setzt die kg der offenen Sätze wie bei „Steigern“, mit Rückgängig. Außerdem zeigt `vUnit()` den `hinweis` jeder Übung als graue Zeile im Programm-Sheet.

### 33. Wiedereinstieg nach langer Pause (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Vorbild ist Fitbod: Es senkt nach einer Trainingspause die vorgeschlagenen Gewichte von selbst, um den Wiedereinstieg zu erleichtern (laut Suchergebnissen aus Fitbods Hilfe). Im Test lag Stirndrücken 53 Tage zurück. Die App zeigte „Letztes Mal (Di., 22.09.)“ ohne Hinweis darauf, wie lange das her ist, und „Ziel heute: 11, 11, 10“, verlangte also mehr als vor der Pause. Skizze: Liegt die letzte Einheit einer Kraftübung länger als eine Schwelle zurück (z. B. 4 Wochen; Schwelle und Abzug vorher vom `trainings-experte` festlegen lassen), zeigt die Zeile zusätzlich „vor 7 Wochen“, und „Ziel heute“ und „Steigern“ entfallen. An ihrer Stelle steht „Wiedereinstieg: 27,5 kg“, abgezogen in ganzen Schritten von `stepSize()` wie bei `stepDown()`; ein Tipp setzt die offenen Sätze, mit Rückgängig. Wer ihn übergeht, trainiert wie bisher.

### 34. Übungskopf über die ganze Kartenbreite (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft ist der eigene Test: ⇄ und ✕ stehen rechts neben dem ganzen Kopf der Karte. Deshalb haben „Letztes Mal“ und „Programm“ nur 215 der 311 px und brechen in jeder Karte auf zwei Zeilen um, obwohl sie mit 221–294 px in eine Zeile passen. Vom Kartenrand bis zur Satztabelle sind es 150–209 px, und keine zwei Übungen passen auf den Bildschirm. Vorbild ist Hevy, das die Vorwerte in einer eigenen Spalte der Satztabelle zeigt statt im Kopf. Skizze: ⇄ und ✕ stehen nur noch in der Zeile des Übungsnamens, darunter laufen Notiz, „Letztes Mal“, Programm, Ziel und die Knöpfe über die volle Breite. Das spart rund 34 px pro Übung, bei „Schultern & Arme B“ mit 7 Übungen etwa 240 px Scrollweg, ohne einen Tipp mehr. Auf dem iPhone mit der Systemschrift nachmessen; bei 375 px Breite wird es knapper.

### 35. „Besser als letztes Mal“ nach dem Training (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Vorbild ist Hevy Trainer, das Übungen mit Fortschritt mit einem kleinen Zeichen markiert, dazu die „Focus Metric“ von Strong, die eine Kennzahl mit der letzten Einheit vergleicht. Im Test schaffte Kurzhantel-Schrägbankdrücken das Ziel (+3 Wdh), und Langhantelrudern kam nach dem Entlasten auf 23 statt 16 Wdh. Weder die Karte noch „Training geschafft“ sagten das; dort stehen nur Kampfkraft, Rekorde und Erfolge, und einen Rekord gibt es erst beim Bestwert. Skizze: `finish()` vergleicht jede Übung vor dem Speichern mit `lastFor()` und gibt der Ansicht nach dem Training eine Liste „Besser als letztes Mal“ mit, z. B. „Kurzhantel-Schrägbankdrücken: Ziel geschafft, +3 Wdh“ oder „Bankdrücken: +2,5 kg“. Im Training zeigt die Zeile „Ziel heute“ „Ziel geschafft“, sobald alle Sätze abgehakt sind und das Ziel erreicht ist. Alles wird nur berechnet und kostet keinen Tipp.

## Angenommen

Noch nichts.

## Abgelehnt

Vorerst nicht gebraucht (14.11.2026, aus der MCI-Runde):

### 23. Restzeit im laufenden Training
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft: MCI hat laut Roadmap eine „Live-Anzeige für Trainingsdauer und verbleibende Zeit“ umgesetzt, damit man das Training um andere Termine herum planen kann. Skizze: Die Kopfzeile im Training zeigt „24 min · 7 Sätze erledigt · noch ca. 30 min“; die Restzeit ist die Zahl der offenen Sätze mal der Zeit pro Satz aus den letzten gespeicherten Trainings (`(end − date) / Sätze`, Median der letzten fünf), ohne solche Daten ersatzweise Pausendauer plus 45 s, bei Ausdauer und „nur Zeit“ die Minuten vom letzten Mal. Kein Tipp; die Zeile wird wie `#elapsed` in `tick()` aufgefrischt.

### 24. Aufwärmen aus dem Programm im Training zeigen
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft: MCI führt vor dem Training durch eine Aufwärm-Anleitung („Finish Warming Up“), und eine Bewertung lobt die Mobility-Routine zu jedem Training; Strong (nur PRO) und Hevy haben einen Aufwärmrechner. Unsere Programme bringen das Aufwärmen schon mit (`aufwaermen` in `bibliothek/vorlagen.json`, z. B. „2 bis 3 Aufwärmsätze … mit 50, 70 und 85 % des Arbeitsgewichts“), die App zeigt den Text aber nirgends an, auch nicht im Programm-Sheet. Skizze: Bei Vorlagen aus einem Programm steht über der ersten Übung eine Zeile „Aufwärmen: 5 min locker, dann 35 · 50 · 60 kg“, die Kilo als 50, 70 und 85 % des vorausgefüllten Gewichts der ersten Grundübung, gerundet mit `stepSize()`; reine Anzeige, es werden keine Aufwärmsätze erfasst (Idee 14 bleibt abgelehnt), und die Prozentwerte gehören besser in ein eigenes Feld der Bibliothek (mit dem `trainings-experte` abstimmen).

### 27. Serie bei Urlaub oder Krankheit pausieren
- Nutzen: mittel · Aufwand: M · Datenformat: ja (optionales Feld in `settings`, mit Migration)

Herkunft: MCI kennt den Status „Aktiv“, „Krank“ oder „Im Urlaub“ mit Schutz der Serie (Urlaubsmodus laut Roadmap mit 542 Stimmen umgesetzt), Apple Fitness lässt seit watchOS 11 und iOS 18 die Ringe pausieren; bei Hevy beginnt die Serie nach einer Woche ohne Training neu. Bei uns beendet schon eine Kalenderwoche ohne Training die Serie auf dem Startbildschirm, und „Monatsserie“ und „Vierteljahr“ rücken nach jedem Urlaub wieder in die Ferne. Skizze: Im Fortschritt unter der Serie „Pause eintragen“ (diese Woche, 2 Wochen oder bis Datum; ganze Wochen ab Montag, höchstens 12, nicht rückwirkend), gespeichert als `settings.pauses = [{from, to}]`; `progress()` überspringt Wochen in einer Pause, sodass sie die Serie weder brechen noch verlängern, und der Kalender zeigt Pausentage gedämpft. Migration: Fehlt das Feld, gibt es keine Pausen, `cleanSettings()` verwirft ungültige Einträge, und das Feld kommt mit `settings` ins Backup.

### 28. Kurz-Training für Tage mit wenig Zeit
- Nutzen: mittel · Aufwand: M · Datenformat: ja (optionales Feld am Training, mit Migration)

Herkunft: MCI hat laut Roadmap einen „Zeitsparmodus für kurze, effektive Trainingseinheiten“ umgesetzt (391 Stimmen): weniger Übungen oder Sätze auf Knopfdruck. Skizze: Jede Vorlagen-Karte bekommt einen kleinen zweiten Knopf „Kurz“, der dieselbe Vorlage mit höchstens zwei Sätzen pro Übung startet (laut `bibliothek/README.md` nennt ACSM 2026 mindestens zwei Sätze pro Übung); der Name bleibt, damit „Zuletzt“ und „Dran“ weiter stimmen, und der normale Start kostet nichts extra. Damit das nächste normale Training nicht nur zwei Sätze vorausfüllt, bekommt das gespeicherte Training `short:true`, `newEntry()` nimmt die Satzzahl aus der letzten normalen Einheit, und `stepUp()` überspringt kurze Einheiten; Migration: Fehlt das Feld, war es ein normales Training.

### 29. Trainingskarte als Bild teilen
- Nutzen: niedrig · Aufwand: M · Datenformat: nein

Herkunft: MCI zeigt nach dem Training eine Zusammenfassung mit „Share my progress“, Stickern und Foto; Hevy erzeugt nach jedem Training Bilder mit Rekorden, Volumen und Muskelverteilung (hell, dunkel oder transparent), Strong teilt nur einen Link zum Import. Skizze: In „Training geschafft“ und im Verlauf ein Knopf „Als Bild teilen“, der per Canvas ein Hochformat-PNG im App-Look zeichnet (Trainingsname, Datum, Dauer, bester Satz pro Übung, Kampfkraft, Rekorde, Stufe, Sternkugeln der Woche; keine Originalfiguren, -namen oder Logos) und es wie das Backup über `navigator.share({files})` anbietet, sonst als Download. Im Training kostet das keinen Tipp, danach nur, wenn man teilen will.

Vorerst nicht gebraucht (13.11.2026):

### 7. Vorlage nach dem Training anpassen
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Herkunft: Hevy fragt nach dem Training, ob die Routine mit den Änderungen aktualisiert werden soll (allgemeines Wissen, nicht nachgelesen). Skizze: Beim Start merkt sich `S.active` die Vorlagen-ID; hat das Training andere Übungen oder eine andere Reihenfolge als die Vorlage, erscheint nach dem Speichern ein Hinweis mit Aktion „Vorlage übernehmen“ (über `toast(msg, act)`). Das laufende Training geht nicht ins Backup, das gespeicherte Training ändert sich nicht.

### 8. Eigene Pausendauer pro Übung
- Nutzen: mittel · Aufwand: S · Datenformat: ja

Herkunft: Hevy (Pausen-Timer pro Übung von 5 s bis 5 min oder aus); Strong nennt „eigene Timer“, ob pro Übung, ist nicht belegt. Skizze: Im Übungs-Sheet ein Feld „Pause“ (Standard, 45 s bis 4 min, aus); `check` startet `startTimer(ex.rest ?? S.settings.rest)`. So laufen Kniebeugen mit 3 min und Seitheben mit 60 s, ohne dass man im Training mit −15/+15 nachstellt. Migration: optionales Feld an der Übung, fehlt es, gilt die allgemeine Pausendauer; alte Daten und Backups bleiben gültig.

Vorerst nicht gebraucht (14.11.2026):

### 14. Aufwärmsätze markieren (aus Funktionsvergleich: Satz-Erfassung)
- Nutzen: mittel · Aufwand: M · Datenformat: ja (optionales Feld am Satz, mit Migration)

Vorbild ist Strong: Ein Tipp auf die Satznummer öffnet Aufwärmen, Drop und Versagen, und Aufwärmsätze zählen nicht in Diagramme und Kennzahlen; Hevy und JEFIT machen es ähnlich. Heute verfälschen Aufwärmsätze Rekorde, Kampfkraft und Fortschrittskurve, und sie verhindern den Steigerungsvorschlag, weil der in allen Sätzen dasselbe Gewicht verlangt. Skizze: Ein Tipp auf die Satznummer (Fläche auf 44 × 48 px vergrößern) schaltet ein goldenes „A“ um, gespeichert als `w:1` am Satz. `finish()` und `newEntry()` übernehmen das Feld, ab dem zweiten Training kostet es also keinen Tipp mehr. `stepUp`, `exSeries`, `progress()`, die Rekord-Meldung und „Letztes Mal“ überspringen bzw. kennzeichnen A-Sätze, und die CSV bekommt eine Spalte. Migration: Ein Satz ohne das Feld gilt als Arbeitssatz; alte Daten und Backups bleiben gültig, alte Spielwerte bleiben unverändert.

## Erledigt

Umgesetzt am 14.11.2026:

### 22. Übung im Training tauschen
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Herkunft: MCI, dort tauscht man im Workout-Player Übungen samt Gerät aus, ein UX-Showcase lobt genau diese Flexibilität, und „Gezielt Übungen ausschließen“ steht mit über 250 Stimmen auf der Wunschliste. Ist bei uns ein Gerät besetzt, kostet das ✕, Rückfrage, „+ Übung hinzufügen“, Suchen und Auswählen, und die neue Übung landet am Ende statt an ihrem Platz. Skizze: Ein Knopf „⇄“ (44 px) neben dem ✕ öffnet das Auswahl-Sheet im Modus „Tauschen“ mit „Passende Alternativen“ oben (eigene Übungen und Bibliothek mit gleichem Hauptmuskel `muskeln[0]`, sonst gleicher Kategorie); die Wahl ersetzt den Eintrag an derselben Stelle per `newEntry(id, planFor(id))`, sind schon Sätze abgehakt, kommt die neue Übung direkt darunter, und die Vorlage bleibt unverändert (Idee 7 ist abgelehnt). Danach 2 Tipps statt 5 und mehr.

Umgesetzt: „⇄“ neben dem ✕, Auswahl-Sheet „Übung tauschen“ mit „Statt …“ oben (`swapAlternatives()`). Die Ersatzübung übernimmt den Programm-Richtwert der ersetzten Übung (`planEx`, nur im laufenden Training). Sind schon Sätze abgehakt, bleiben sie, und die neue Übung kommt mit den restlichen Sätzen darunter.

### 25. Entlasten-Vorschlag bei Stillstand
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft: MCI wirbt mit Periodisierung und einem Plan, der sich nach Leistung und Erholung anpasst; `bibliothek/README.md` nennt bei 5×5 als Praxis, nach drei Fehlversuchen um 10 % abzusenken. Der Tracker kennt bisher nur den Weg nach oben („Steigern“). Skizze: Lag eine Kraftübung aus einem Programm in den letzten drei Einheiten mit demselben Gewicht jedes Mal in mindestens einem Satz unter der unteren Grenze von `plan.wdh`, erscheint an der Stelle von „Steigern“ der Knopf „Entlasten: 62,5 kg“ (−10 %, gerundet mit `stepSize()`), ein Tipp setzt die offenen Sätze; die Regel vorher vom `trainings-experte` prüfen lassen.

Umgesetzt nach der Fachprüfung des `trainings-experte` mit geänderter Regel: Auslöser sind drei Einheiten mit gleichem Gewicht, jedes Mal ein Satz unter der unteren Grenze und keine Steigerung der Wdh-Summe. Abzug 5 % bei einem Bereich, 10 % bei 5×5, in ganzen Gewichtsschritten (`stepDown()`). Nach dem `gym-tester`: kein „Ziel heute“ neben „Entlasten“, und „Rückgängig“ nach Steigern und Entlasten.

### 26. Sätze pro Muskel und Woche mit Zielbereich
- Nutzen: mittel · Aufwand: M · Datenformat: nein

Herkunft: MCI plant laut Roadmap eine „Muskelkarte mit Trainingshäufigkeit, Satz-Übersicht und Erholungszeit“ (269 Stimmen), Hevy zeigt Sätze pro Muskelgruppe und Woche und eine Körperkarte der letzten 7 Tage. Wir zählen bisher Sätze nach Kategorie (Idee 10), obwohl die Bibliothek das Feld `muskeln` genau für diese Auswertung hat und `bibliothek/README.md` als Richtwert 10 bis etwa 20 Sätze pro Muskelgruppe und Woche nennt (ACSM 2026). Skizze: Im Fortschritt „Sätze pro Muskel, letzte 7 Tage“ als Balken mit markiertem Bereich 10–20 und „zuletzt vor X Tagen“ als einfachem Erholungsstand; der Hauptmuskel zählt einen Satz, die übrigen einen halben (Praxis, vom `trainings-experte` prüfen lassen), Übungen ohne Bibliothekseintrag laufen unter ihrer Kategorie, alles berechnet wie `vWeekCompare()`.

Umgesetzt im Fortschritt anstelle von „Sätze nach Kategorie“ (`vMuscleWeek()`). Nach der Fachprüfung ohne Zielbereich bei Schulter vorn, Gesäß und Bauch; Kategorien Schultern, Beine und Rumpf ohne Bibliothekseintrag laufen unter „Ohne Zuordnung“. Nach dem `gym-tester`: feste Skala bis 24 Sätze, deutlichere Bereichsgrenzen, Legende.

### 30. Gewichtsschritt bei schweren Kurzhanteln (aus Fachprüfung: Arnold-Split)
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft: `trainings-experte` beim Anlegen des Arnold-Splits am 14.11.2026. `stepSize()` schlägt bei Kurzhantel-Isolationsübungen immer +1 kg vor. Beim Kurzhantel-Pullover (eine schwere Hantel, oft 20 bis 30 kg) ist der kleinste Schritt im Studio aber meist 2 kg, oft schon ab etwa 10 kg. Skizze: In `stepSize()` das aktuelle Gewicht mitgeben und bei Isolation unter 10 kg 1 kg, ab 10 kg 2 kg vorschlagen; das ist übliche Praxis und hängt vom Studio ab.

Umgesetzt in `stepSize()`: Kurzhantel-Isolation ab 10 kg 2 kg; beim Entlasten gilt der Schritt im Bereich darunter (10 kg → 9 kg).

### 20. Gespeichertes Training im Verlauf korrigieren
- Nutzen: hoch · Aufwand: M · Datenformat: nein

Herkunft: MCI hat „Gewichte nachträglich ändern können“ auf Nutzerwunsch umgesetzt (Roadmap, 225 Stimmen), Strong bietet im Verlauf „Edit Workout“ samt Start- und Endzeit. Bei uns lässt sich ein gespeichertes Training nur ganz löschen: Ein Tippfehler wie 190 statt 10 Wdh bleibt in Rekorden, Kampfkraft und Fortschrittskurve stehen und landet beim nächsten Mal sogar als Vorwert in den Feldern. Skizze: Im aufgeklappten Training neben „Training löschen“ ein Knopf „Bearbeiten“, der ein Sheet mit denselben Satzzeilen wie im Tracker öffnet (Werte ändern, einzelnen Satz oder Übung entfernen, Datum und Uhrzeit per `datetime-local`, `end` rückt mit); „Sichern“ ersetzt den Eintrag, sortiert `S.workouts` nach Datum und ruft `save({put:id})` auf, die Spielwerte rechnen sich von selbst neu, und der `daten-waechter` prüft den Diff.

Umgesetzt: Sheet „Bearbeiten“ mit Name, Beginn, Dauer, Satzzeilen, „+ Satz“, ✕ für Satz und Übung und „+ Übung hinzufügen“. Nach dem Befund des `daten-waechter` fallen beim Sichern nur ganz leere Sätze weg (sonst wären bei gelöschten Übungen Sätze verschwunden); nach dem `gym-tester` markiert auch das Dauer-Feld beim Antippen, und der Dialog heißt „Weiter bearbeiten“ statt „Abbrechen“.

### 21. Wiederholungsziel für heute anzeigen
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Herkunft: MCI gibt pro Satz Gewicht und Wdh nach der tatsächlichen Leistung vor; Bewertungen loben, dass der Algorithmus beim Steigern hilft, eine kritisiert aber unpassende Vorgaben. Bei uns sagt der Tracker zwischen zwei Gewichtsstufen nicht, was heute dran ist; „Steigern“ erscheint erst, wenn alle Sätze das obere Ende geschafft haben. Skizze: Bei Kraftübungen ohne Steigerungsvorschlag zeigt die Programm- bzw. „Letztes Mal“-Zeile „Ziel: 9, 9, 8“, also pro Satz eine Wdh mehr als letztes Mal, höchstens bis zum oberen Ende von `plan.wdh` bzw. `STEP_REPS` (doppelte Progression wie in `bibliothek/README.md`); die Felder behalten die Vorwerte, ob sie gleich das Ziel bekommen sollen, erst nach einem Test entscheiden (spart Tipps, birgt aber das Risiko unbemerkt falscher Werte).

Umgesetzt: `repGoal()` und `fmtGoal()`; die Zeile „Ziel heute“ steht unter „Letztes Mal“ und dem Programm-Richtwert, nur bei gleichem Gewicht wie letztes Mal und nicht neben „Steigern“. Die Felder behalten die Vorwerte.

### 18. Satzzahl aus dem Programm übernehmen (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft ist der eigene Test: Bei Vorlagen aus der Bibliothek zeigt „Programm: 2 × 8–12“ eine andere Satzzahl, als die Felder vom letzten Mal vorgeben (nach einem Satz bleibt es bei einem). Skizze: `newEntry(exId, plan)` hängt Sätze mit den Werten des letzten Satzes an, bis `plan.saetze` erreicht ist (höchstens 10); es wird nie gekürzt. Wer weniger trainiert, entfernt einen Satz wie bisher (Tipp mehr), wer dem Programm folgt, spart den Tipp auf „+ Satz“.

### 19. Gewichtsschritt beim Steigern nach Übung staffeln (aus Fachprüfung: Steigerungsvorschlag)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Heute schlägt „Steigern“ immer +2,5 kg vor. Bei Isolationsübungen mit Kurzhanteln wie Seitheben oder Curls sind das 15–30 % mehr, zu viel; bei Kniebeugen und Kreuzheben im 5×5 steigern Anfänger üblicherweise 5 kg (Praxis nach Starting Strength und StrongLifts, ACSM nennt 2–10 % Laststeigerung; laut Agent aus Fachwissen, nicht nachgelesen). Skizze: Den Schritt aus dem Gerät der Bibliothek ableiten (`libOf()`): Kurzhantel-Isolation 1 kg, Kurzhantel-Grundübung 2 kg, Langhantel, Kabel und Maschine 2,5 kg, Langhantel-Beinübung im 5×5 5 kg; ohne Bibliothekseintrag weiter 2,5 kg.

### 17. Steigerungsvorschlag nach Programm-Wiederholungen (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: hoch · Aufwand: S · Datenformat: nein

Vorbild ist Fitbod, das Last oder Wiederholungen automatisch erhöht, wenn die letzte Einheit gut lief, und Hevy mit Wiederholungsbereichen. Heute verlangt `stepUp()` fest 10 Wdh in allen Sätzen; ein Programm wie „3 × 6–8 Wdh“ (Bankdrücken in der Bibliothek) erreicht das nie, der Vorschlag erscheint dort nie. Skizze: `stepUp(exId, plan)` nimmt als Schwelle das obere Ende des Programm-Bereichs (`plan.wdh`, z. B. 8 aus „6-8“), sonst weiter `STEP_REPS`; Anzeige und Tipps bleiben gleich. Im Studio kostet es nichts extra; die Schwelle bleibt für Übungen ohne Programm unverändert.

### 15. Rückgängig nach „− Satz“ (aus Funktionsvergleich: Satz-Erfassung)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Vorbild sind Strong, Hevy und Fitbod: Dort löscht man einen Satz gezielt per Wischen auf der Zeile. Bei uns entfernt „− Satz“, nur 8 px neben „+ Satz“, immer den letzten Satz, auch einen abgehakten, und zwar ohne Rückfrage; im Test ging so ein abgehakter Satz mit 52,5 kg × 7 verloren. Skizze: Nach dem Entfernen erscheint `toast("Satz 3 entfernt", "undo-set")`, der Satz wird solange in `ui` gemerkt, und ein Tipp auf den Hinweis setzt ihn an seiner Stelle wieder ein. Solange nichts schiefgeht, kostet das keinen Tipp mehr als heute.

### 16. Versehentlichen Haken samt Timer zurücknehmen (aus Funktionsvergleich: Satz-Erfassung)
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft ist der eigene Test, Anlehnung an Hevy, das den Timer an den Satz koppelt (vor einem Drop-Satz startet er nicht). Heute startet ein versehentlicher Haken den Timer neu mit voller Dauer; löst man den Haken wieder, läuft der Timer weiter, und die Restzeit der Pause davor ist verloren. Skizze: `startTimer` merkt sich im Speicher den vorherigen Stand (`end`, `total`) und den auslösenden Satz. Wird genau dieser Satz wieder gelöst, solange der Timer noch läuft, stellt `check` den vorherigen Timer wieder her oder stoppt ihn.

### 12. Geänderte Werte in die folgenden Sätze übernehmen (aus Funktionsvergleich: Satz-Erfassung)
- Nutzen: hoch · Aufwand: S · Datenformat: nein

Vorbild ist Hevy: Ein Tipp auf den Vorwert übernimmt den ganzen Satz, statt jeden Satz neu einzutippen. Heute kostet ein neues Gewicht in drei Sätzen 24 Tipps und eine neue Übung mit drei gleichen Sätzen 21 Tipps, weil die übrigen Sätze leer bzw. beim alten Wert bleiben. Skizze: Der `input`-Handler setzt den neuen Wert auch in den folgenden offenen Sätzen derselben Übung, sofern dort noch der alte Wert oder nichts steht; abgehakte und abweichende Sätze bleiben, wie sie sind, und es wird nur das Feld gesetzt, ohne `render()`, damit die Tastatur offen bleibt. Ein leerer Satz übernimmt beim Abhaken die Werte des Satzes darüber, statt leer gespeichert zu werden. Danach kosten drei Sätze mit neuem Gewicht 10 Tipps statt 24.

### 13. Feldinhalt beim Antippen markieren (aus Funktionsvergleich: Satz-Erfassung)
- Nutzen: hoch · Aufwand: S · Datenformat: nein

Vorbild sind Strong und Hevy: Dort ersetzt eine Eingabe den grauen Vorschlagswert direkt (allgemeines Wissen, nicht nachgelesen). Bei uns muss „52,5“ erst gelöscht werden, „52,5 → 55“ kostet deshalb 8 Tipps statt 4. Skizze: Beim Fokus auf ein Satzfeld (`data-f`) den Inhalt mit `setSelectionRange(0, value.length)` markieren (auf iOS leicht verzögert, nach dem Fokus), dann ersetzt die erste Ziffer den alten Wert. Auf dem iPhone prüfen, ob die Markierung in der installierten App hält und ob das Kopieren-Menü dabei stört.

### 11. Übungsbibliothek in der App
- Nutzen: hoch · Aufwand: M · Datenformat: ja (optionales Feld `lib` an Übungen und Vorlagen)

Herkunft: eigener Vorschlag (13.11.2026). Beim Anlegen einer Übung oder Vorlage aus `bibliothek/` auswählen statt alles selbst einzutippen. Eigene Übungen und Daten bleiben unverändert.

### 9. Feste Notiz pro Übung
- Nutzen: mittel · Aufwand: S · Datenformat: ja

Herkunft: Hevy (angeheftete Übungsnotizen, die bei jedem Training wieder erscheinen). Skizze: Textfeld „Notiz“ im Übungs-Sheet, im Tracker eine kleine graue Zeile unter dem Übungsnamen (z. B. „Sitz Stufe 4, enger Griff“); im Training kein zusätzlicher Tipp. Migration: optionales Feld `note` an der Übung, ohne Feld wird nichts angezeigt.

### 10. Kalender und Wochenvergleich im Fortschritt
- Nutzen: mittel · Aufwand: M · Datenformat: nein

Herkunft: JEFIT (Kalender als Heatmap für Regelmäßigkeit, Volumen pro Muskelgruppe), Strava (Trainingslog mit Wochen- und Monatssummen), Apple Fitness (Trends: letzte 90 Tage gegen die letzten 365). Skizze: Im Fortschritt-Sheet ein Monatsraster, Trainingstage eingefärbt; darunter „diese Woche gegen Durchschnitt der letzten 4 Wochen“ (Trainings, Sätze, km) und die Sätze pro Kategorie der letzten 7 Tage. Alles wird wie die Spielwerte aus `S.workouts` berechnet.

Umgesetzt am 13.11.2026 (dritte Runde):

### 5. „Zuletzt vor X Tagen“ an jeder Vorlage
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Herkunft: Fitbod führt pro Muskelgruppe einen Erholungsstand und plant danach; hier reicht die einfache Form davon. Skizze: Auf dem Startbildschirm unter jeder Vorlage „zuletzt vor 5 Tagen“, ermittelt über den Trainingsnamen (`w.name === t.name`); die Vorlage, die am längsten her ist, bekommt einen orangen Rand „Dran“. Kein zusätzlicher Tipp; nach dem Umbenennen einer Vorlage zählen alte Trainings nicht mehr mit.

### 6. Tempo (min/km) bei Ausdauer
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Herkunft: Strava (Bestleistungen und schnellstes Tempo nach Distanz), Runna (Lauftraining nach Tempovorgaben). Skizze: `fmtSets()` hängt bei Ausdauer mit Minuten und km „· 5:12 /km“ an, damit steht das Tempo in „Letztes Mal“, im Verlauf und in der Übungshistorie; die CSV bekommt eine Spalte „Tempo“. Ein Tempo-Rekord wäre ein zweiter Schritt, er würde aber die Rekordzahl und den Erfolg „Rekordjäger“ rückwirkend ändern.

Umgesetzt am 13.11.2026 (zweite Runde):

### 3. Steigerungsvorschlag beim Gewicht
- Nutzen: hoch · Aufwand: M · Datenformat: nein

Herkunft: Fitbod erhöht Gewicht oder Wiederholungen automatisch, wenn die letzte Einheit gut lief; Hevy arbeitet mit Wiederholungsbereichen (z. B. 6–8). Skizze: Haben die letzten zwei Einheiten einer Kraftübung in allen Sätzen dasselbe Gewicht mit mindestens 10 Wdh, erscheint neben „Letztes Mal“ ein kleiner Knopf „Steigern: 62,5 kg“ (+2,5 kg); ein Tipp setzt das Gewicht in allen offenen Sätzen der Übung. Wer ihn ignoriert, trainiert wie bisher mit den vorausgefüllten Werten; wer steigern will, spart das Ändern jedes einzelnen kg-Felds. Schwelle und Schritt erst als feste Werte, einstellbar pro Übung wäre eine spätere Formatänderung.

### 4. Fortschrittskurve pro Übung
- Nutzen: hoch · Aufwand: M · Datenformat: nein

Herkunft: Strong (Diagramme zu Volumen und 1RM, „Verlauf der besten Sätze“ im Pro-Abo), JEFIT (Diagramme pro Übung, 1RM über die Zeit). Skizze: Im Übungs-Sheet über „Letzte Einheiten“ eine kleine Inline-SVG-Linie aus `S.workouts`: bei Kraft das geschätzte Maximum pro Einheit (Epley: kg × (1 + Wdh/30)), bei Ausdauer das Tempo, bei „nur Zeit“ die Minuten. Rekorde und Kampfkraft bleiben wie sie sind, damit sich alte Spielwerte nicht nachträglich ändern.

Umgesetzt am 13.11.2026 (erste Runde):

### 1. Bildschirm bleibt während des Trainings an
- Nutzen: hoch · Aufwand: S · Datenformat: nein

Herkunft: Blick auf die App und PWA-Recherche (firt.dev: Screen Wake Lock geht in Home-Bildschirm-Apps ab iOS 18.4). Hevy löst dasselbe Problem nativ mit Live Activity und Mitteilung, das kann eine PWA nicht. Heute sperrt sich das iPhone in der Pause, dann pausiert die App und der Piepton kommt vermutlich nicht (nicht auf dem Gerät geprüft); Vibration fällt als Ersatz weg, weil Safari `navigator.vibrate` nicht unterstützt. Skizze: beim Start eines Trainings `navigator.wakeLock.request("screen")`, im vorhandenen `visibilitychange`-Handler neu anfordern, bei „Beenden“ und „Verwerfen“ freigeben; ohne Unterstützung läuft alles wie bisher. Auf dem iPhone testen.

### 2. Backup-Erinnerung
- Nutzen: hoch · Aufwand: S · Datenformat: ja (klein)

Herkunft: Blick auf die App; Strong sichert über „Strong Cloud“, hier gibt es keine Cloud, und der Hinweis im Verlauf nennt keinen Zeitpunkt. Skizze: Nach erfolgreichem Backup `S.settings.lastBackup = Date.now()` setzen; liegt das letzte Backup mehr als 14 Tage oder 10 Trainings zurück, zeigt die Belohnungs-Ansicht nach dem Training eine Zeile „Letztes Backup vor 23 Tagen“ mit Knopf „Jetzt sichern“. Migration: Das Feld ist optional, `normalize()` füllt `settings` schon per `Object.assign` mit Standardwerten auf, alte Daten und Backups laufen ohne Umschreiben.
