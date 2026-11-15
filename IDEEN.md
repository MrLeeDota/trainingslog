# Ideen für Trainingslog

Hier stehen die Ideen für die Weiterentwicklung. Der Agent `produkt-scout` füllt „Vorschläge“. Was umgesetzt werden soll, wandert nach „Angenommen“, nach der Umsetzung nach „Erledigt“. Was unter „Abgelehnt“ oder „Erledigt“ steht, wird nicht erneut vorgeschlagen.

## Vorschläge

### 43. Ton nach dem Neuladen mit jedem Tipp freigeben und fehlenden Ton anzeigen (aus Funktionsvergleich: Pausen-Timer)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

**Zurückgestellt (14.11.2026):** Der Nutzer entscheidet, wenn er die App öfter benutzt hat. Bis dahin stehen lassen, nicht umsetzen.

Nach einem Neuladen läuft die Pause weiter, den Piepton plant die App aber erst nach einem Tipp auf einen Knopf (`unlockAudio()` hängt am Klick-Handler für `data-act`); ein Tipp ins Wdh-Feld reichte im Test nicht, und wer nur wartet, bekommt unbemerkt gar keinen Ton. Hevy, Strong und Fitbod melden das Pausenende nativ per Mitteilung, Live Activity oder Uhr, das kann eine PWA nicht; sie kann aber zeigen, ob ihr Ton kommt. Skizze: `unlockAudio()` zusätzlich einmal bei `pointerup` irgendwo auf der Seite aufrufen, und solange eine Pause läuft und `actx` fehlt oder nicht `running` ist (auch nach der Rückkehr aus dem Hintergrund), steht neben der Restzeit ein durchgestrichener Lautsprecher, ein Tipp auf die Timer-Karte gibt den Ton frei; auf dem iPhone prüfen, ob ein Tipp nach dem Wischen als Berührung zählt.

Aus der Runde Übungsverwaltung (15.11.2026):

## Angenommen

Noch nichts.

## Abgelehnt

Vorerst nicht gebraucht (15.11.2026, aus der Runde Übungsverwaltung):

### 56. Übungen mit Verlauf ausblenden statt löschen
- Nutzen: mittel · Aufwand: M · Datenformat: ja (optionales Feld an der Übung, mit Migration)

Herkunft: Strong blendet Übungen per Wischen aus und holt sie über ein altes Training zurück (gelesen), Exercise.com archiviert statt zu löschen, metric.coach behält beim Löschen den Namen in alten Sätzen, Caliber löscht den Verlauf mit (nur Suche). Bei uns verspricht die Rückfrage „Alte Trainings bleiben erhalten“, danach stehen die Sätze im Verlauf, im Bearbeiten-Sheet und in der CSV aber als „Gelöschte Übung“ (`exName()`), ohne Kurve und ohne Weg zurück, auch im nächsten Backup. Skizze: Hat die Übung gespeicherte Trainings, heißt der Knopf „Übung ausblenden“: Sie fällt wie heute aus den Vorlagen und verschwindet aus dem Auswahl-Sheet, den Alternativen und der Liste im Tab Übungen (dort am Ende zugeklappt „Ausgeblendet (2)“ mit „Einblenden“); Name, Verlauf und Kurve bleiben. Ohne Trainings wird wie bisher gelöscht. Gespeichert wird `hidden:true`; `libOwner()` findet ausgeblendete Übungen weiter, eine Übernahme aus der Bibliothek blendet sie also wieder ein, statt einen Doppelgänger anzulegen. Migration: Fehlt das Feld, ist die Übung sichtbar, und nur `true` zählt (`normalize()` übernimmt Übungen ungeprüft, `save-ex` behält unbekannte Felder); ältere App-Stände zeigen sie einfach wieder an. Nebenbei fragt `save-ex` nach, wenn sich die Erfassungsart einer Übung mit Verlauf ändert („12 Trainings werden dann als Minuten gelesen“). Den `daten-waechter` prüfen lassen.

Vorerst nicht gebraucht (14.11.2026, aus der Runde Vorlagen):

### 47. Ganzes Programm mit einem Tipp übernehmen, Wochenplan im Programm-Sheet
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft: Hevy speichert ein Programm aus der Bibliothek mit „Save Program“ als Ganzes, als Ordner mit allen Routinen; bei JEFIT wird ein neuer Plan sofort der aktive (gelesen). Bei uns kostet der Arnold-Split 8 Tipps plus Scrollen, weil jede Einheit einzeln „Als Vorlage übernehmen“ braucht (Funktionsvergleich „Letztes Mal“). Der `wochenplan` des Programms steht nirgends (laut `bibliothek/README.md` nicht angezeigt), obwohl er Ruhetage und den Umgang mit ausgefallenen Tagen erklärt. Skizze: Im aufgeklappten Programm steht über den Einheiten ein Knopf „Alle 5 Einheiten übernehmen“, solange eine fehlt. Er führt „prog-take“ für jede fehlende Einheit in Programm-Reihenfolge aus und meldet „5 Vorlagen angelegt“; darunter steht der Wochenplan als graue Zeile. Danach 4 Tipps statt 8. Das kommt nur einmal vor, deshalb ist der Nutzen niedrig.

### 48. Vorlage vom Startbildschirm nehmen, ohne sie zu löschen
- Nutzen: niedrig · Aufwand: S · Datenformat: ja (optionales Feld an der Vorlage, mit Migration)

Herkunft: Strong verschiebt unbenutzte Vorlagen in einen Ordner „Archived“ und klappt Ordner per Tipp zu. MCI führt mehrere Pläne, von denen einer aktiv ist; gewechselt wird mit „Switch“ (gelesen). Wer zum Arnold-Split wechselt, behält Push, Pull und Legs auf dem Startbildschirm oder löscht sie und legt sie später neu an. Skizze: Im Vorlagen-Sheet gibt es einen Schalter „Auf dem Startbildschirm zeigen“. Ausgeblendete Vorlagen fehlen auf dem Startbildschirm und bei „Dran“ und stehen im Tab Vorlagen gedämpft am Ende. Gespeichert wird `hidden:true` an der Vorlage. Migration: Fehlt das Feld, ist die Vorlage sichtbar, und nur der Wert `true` gilt, weil `normalize()` Vorlagen beim Import ungeprüft übernimmt; `save-tpl` behält das Feld schon. Alte Backups bleiben gültig, ältere App-Stände zeigen die Vorlage einfach wieder an. Mit Idee 45 rücken alte Vorlagen ohnehin nach unten, deshalb ist der Nutzen niedrig. Den `daten-waechter` prüfen lassen.

Vorerst nicht gebraucht (14.11.2026, aus dem Funktionsvergleich Pausen-Timer):

### 42. Nach Neuladen und Tab-Wechsel zum nächsten Satz springen (aus Funktionsvergleich: Pausen-Timer)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Nach einem Neuladen mitten in der Pause und nach einem Abstecher in den Verlauf zeigte die App im Test den Anfang des Trainings (die Aktion `tab` ruft immer `scrollTo(0, 0)` auf), der markierte Satz lag außerhalb des Bildschirms (z. B. y 888 von 844). Vorbild ist Hevy, das mit „Smart Superset Scrolling“ selbst zur nächsten Übung springt; ein UX-Vergleich von ScreensDesign rät ausdrücklich, die Rückkehr zum nächsten Satz zu prüfen. Skizze: Bei laufendem Training ruft die Aktion `tab` beim Wechsel ins Training statt `scrollTo(0, 0)` nach dem Rendern `revealNext(true)` für den markierten Satz auf (ohne Markierung für den ersten offenen Satz), ebenso `boot()` nach `restoreRest()`, jeweils ohne Animation; das spart 1 bis 3 Wischer und kostet keinen Tipp.

Vorerst nicht gebraucht (14.11.2026, aus der Runde Pausen-Timer):

### 39. Supersätze erkennen: Pause zählt für die Übung, die als Nächstes dran ist
- Nutzen: mittel · Aufwand: M · Datenformat: nein

Die Einheiten des Arnold-Splits schlagen Paare im Wechsel vor, z. B. Bankdrücken mit Klimmzügen (nach dem Paar etwa 2 min Pause) oder Curls mit Stirndrücken (etwa 60 s). Ihr Hinweis rät: „einfach abwechselnd bei beiden Übungen abhaken“. Dann startet aber nach jedem Satz die volle Pause neu, auch zwischen den beiden Übungen eines Paars. MCI bildet Supersätze („Group as super set“); bei Hevy schaltet man den Timer der ersten Übung von Hand aus, und die App scrollt zum Partner. Skizze: Hakt man einen Satz von B ab, während die Pause von A noch läuft und A noch offene Sätze hat, gelten A und B für dieses Training als Paar. Danach zählt der Timer bis zum Ende der Pause der Übung, die als Nächstes dran ist, gerechnet ab deren letztem Satz (Pause aus Idee 36, sonst die allgemeine). Er zeigt dabei „Pause · dann Bankdrücken“; ist diese Pause schon um, steht ohne Ton „Weiter: Klimmzüge“ da. Bei Bankdrücken (3:00) und Klimmzügen (2:30) ergibt das etwa 2:15 nach dem Paar und keine Pause zwischen den Übungen, nah an den 2 min des Programms. Die Regel vorher vom `trainings-experte` prüfen lassen. Wer nicht abwechselt, merkt nichts; hat A keine offenen Sätze mehr, gilt wieder die normale Pause. Rückgängig (Idee 16) und „− Satz“ müssen die Paarung mit zurücknehmen.

### 40. „Pause vorbei“ bleibt sichtbar und zählt die Überzeit
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft ist ein eigener Befund aus der Recherche: Unser Piepton läuft über Web Audio, und das spielt Safari auf dem iPhone als „ambient“ ab. Bei eingeschaltetem Stummschalter ist er deshalb nicht zu hören (WebKit-Fehler 264473, laut WebKit beabsichtigt). StrongLifts schweigt im Lautlos-Modus ebenfalls, hat dafür aber Mitteilungen und die Uhr. Bei uns ist das gold leuchtende „Pause vorbei“ dann das einzige Signal, und es verschwindet nach 8 s. Eine Anzeige der Überzeit war bei Strong und Hevy nicht zu belegen. Skizze: Nach dem Ende schrumpft der Timer auf eine flache Leiste (etwa 48 statt 106 px) mit „Pause vorbei · +0:24“ und „Weiter“. Sie bleibt, bis der nächste Satz abgehakt oder „Weiter“ getippt ist, höchstens 10 min. Das Leuchten endet nach einigen Sekunden, damit nichts dauerhaft blinkt.

### 41. Vorwarnung 10 Sekunden vor Pausenende
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Vorbild ist MyFitCoach: Dort ertönt 10 s vor dem Ende ein „Get-Ready Alarm“, damit man sich wieder in Position bringt. Bei Strong und Hevy ist so etwas nicht belegt. Vor Bankdrücken oder Kniebeugen mit 3 min Pause braucht man ein paar Sekunden, um sich hinzulegen oder unter die Stange zu gehen. Skizze: Ab 10 s Restzeit werden Leiste und Zahl orange. Bei Pausen ab 60 s plant `scheduleBeep` zusätzlich einen einzelnen kurzen, tieferen Ton bei Ende minus 10 s, und −15/+15 sowie Rückgängig verschieben ihn mit. Stört der zweite Ton, bleibt nur der Farbwechsel (der Stummschalter gilt wie bei Idee 40).

Vorerst nicht gebraucht (14.11.2026, aus dem Funktionsvergleich „Letztes Mal“):

### 32. Zusatzgewicht vorschlagen, wenn Körpergewicht ausgereizt ist (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Der Arnold-Split sieht bei Klimmzügen nach allen Sätzen mit 10 Wdh Zusatzgewicht vor. Im Test zeigte die App nach zweimal 4 × 10 ohne Gewicht aber nur „Ziel heute: 4 × 10 Wdh“, und der Hinweis des Programms an der Übung (`hinweis` in `bibliothek/vorlagen.json`) erscheint nirgends, auch nicht im Programm-Sheet. Vorbild ist Hevy Trainer, das erhöht, sobald alle Sätze das obere Ende des Bereichs erreichen. Skizze: Bei Übungen mit Programm wertet `stepUp()` ein leeres Gewicht als 0 und schlägt dann „Zusatzgewicht: 2,5 kg“ vor. Schritt und Bedingung lässt man vorher vom `trainings-experte` prüfen; ohne Programm bleibt es aus, weil es keine Obergrenze gibt. Ein Tipp setzt die kg der offenen Sätze wie bei „Steigern“, mit Rückgängig. Außerdem zeigt `vUnit()` den `hinweis` jeder Übung als graue Zeile im Programm-Sheet.

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

Umgesetzt am 15.11.2026 (Runde Übungsverwaltung; gym-tester ohne Warnung, drei Warnungen des daten-waechter zum Zusammenlegen behoben: nur übertragene Einträge werden zusammengelegt, Felder des zweiten Eintrags bleiben, Markierung des nächsten Satzes wird neu festgehalten):

### 57. Zuletzt trainierte Übungen oben im Auswahl-Sheet
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft: Hevy führt „Recent Exercises“ vor den eigenen Übungen (nur Suche). Bei uns stehen im Auswahl-Sheet alle eigenen Übungen alphabetisch nach Kategorie; wer im freien Training, beim Nachtragen im Verlauf oder beim Bauen einer Vorlage eine Übung sucht, die er ständig macht, muss tippen oder wischen. Skizze: Über den Kategorien steht die Gruppe „Zuletzt“ mit den sechs zuletzt trainierten Übungen, die noch nicht im Training bzw. in der Vorlage sind, jeweils mit „vor 3 Tagen“, berechnet aus `S.workouts`. Beim Tauschen bleibt es bei den Alternativen oben, und die Suche blendet die Gruppe aus wie die anderen. Der Nutzen ist niedrig, weil der Nutzer meist mit Programm-Vorlagen trainiert.

### 58. Verlauf einer Übung auf eine andere übertragen
- Nutzen: niedrig · Aufwand: M · Datenformat: nein (ändert nach Rückfrage `exId` in gespeicherten Trainings)

Herkunft: Strong überträgt im Bearbeiten einer Übung mit „Transfer Exercise Data“ die Daten auf eine andere derselben Kategorie, ohne Rückgängig (gelesen); StrengthLog bietet beim Löschen an, die Daten zu verschieben (nur Suche). Doppelte Übungen entstehen bei uns, wenn eine eigene Übung anders heißt als die Bibliothek (siehe Idee 54); dann sind „Letztes Mal“, „Steigern“ und die Kurve auf zwei Übungen verteilt. Skizze: Im Übungs-Sheet öffnet „Verlauf übertragen auf …“ das Auswahl-Sheet mit eigenen Übungen gleicher Erfassungsart. Nach der Rückfrage „8 Trainings von „Schulterdrücken KH“ zu „Kurzhantel-Schulterdrücken“ übertragen? „Schulterdrücken KH“ wird danach gelöscht.“ setzt die App `exId` in diesen Trainings um (`save({put:id})`), ersetzt die Übung in Vorlagen und im laufenden Training und löscht die alte. Stehen beide in einem Training, kommen die Sätze in einen Eintrag. Vorher ein Backup anbieten und den `daten-waechter` prüfen lassen.

Umgesetzt am 15.11.2026 (Runde Übungsverwaltung; gym-tester und daten-waechter ohne Warnung, dazu umgesetzt: keine Bibliotheks-ID an zwei Übungen, Rückfrage vor dem Verwerfen im Übungs-Sheet):

### 53. Übungsname im Training öffnet Technik, Notiz und letzte Einheiten (MCI)
- Nutzen: hoch · Aufwand: S · Datenformat: nein

Herkunft: MCI öffnet die Übungsdetails als Fenster über dem Trainingsbildschirm (3D-Animation, Anleitung, Einstellungen; gelesen), Strong per Tipp auf den Übungsnamen im laufenden Training (gelesen), Hevy ebenso (nur Suche). Bei uns stehen Technik-Hinweise, Notiz und „Letzte Einheiten“ nur im Tab Übungen; mitten im Training kostet das etwa 4 Tipps und 2 bis 6 Wischer (Tab, Liste mit über 30 Übungen, Übung, Abbrechen, Tab zurück, und das Training beginnt dann oben), aus dem Code gezählt. Skizze: Der Übungsname in der Karte (`vEntry()`) wird ein Knopf über die Breite des Namens, ⇄ und ✕ bleiben, und öffnet das vorhandene Übungs-Sheet mit Technik, Kurve und letzten Einheiten. Die Notiz lässt sich dort ändern und steht nach „Sichern“ sofort in der Karte (z. B. „Sitz Stufe 4“). Mit dem Merker `from:"training"` am Sheet fehlen „Übung löschen“, und die Erfassungsart steht nur als Text da, damit mitten im Training nichts umgedeutet wird. Im normalen Ablauf kostet das keinen Tipp; ein versehentlicher Tipp öffnet nur ein Sheet, das ein Tipp wieder schließt.

### 54. Verknüpfung mit der Bibliothek beim Umbenennen behalten und von Hand herstellen
- Nutzen: mittel · Aufwand: S · Datenformat: nein (nutzt das vorhandene optionale Feld `lib` an Übungen)

Herkunft: eigener Befund im Code; Vorbilder sind Hevy und Fitbod, bei denen eigene Übungen Gerät sowie Haupt- und Nebenmuskeln tragen (gelesen bzw. Suche). Die Startübungen und alle Übungen, die beim Übernehmen am Namen erkannt wurden, haben kein `lib` (`addFromLib()` gibt die vorhandene Übung zurück, ohne es zu setzen), `libOf()` findet sie nur über den gleichen Namen. Wer „Seitheben“ in „Seitheben KH“ umbenennt, verliert ohne Hinweis die Technik-Hinweise, den Gewichtsschritt von 1 kg (dann 2,5 kg) und die Muskelzuordnung (Schultern ohne Bibliothek zählt unter „Ohne Zuordnung“). Umgekehrt erkennt die App eine eigene „Schulterdrücken KH“ beim Übernehmen eines Programms nicht und legt „Kurzhantel-Schulterdrücken“ daneben an, „Letztes Mal“ und „Steigern“ fangen dann bei null an. Skizze: `save-ex` setzt `lib`, wenn die Übung vor dem Umbenennen über ihren Namen einer Bibliotheksübung zugeordnet war. Das Übungs-Sheet zeigt unter der Erfassungsart grau „Bibliothek: Seitheben · Kurzhantel · seitliche Schulter“ mit „Lösen“; ohne Zuordnung steht dort „Mit Bibliothek verknüpfen“, das das Auswahl-Sheet nur mit Bibliotheksübungen gleicher Erfassungsart öffnet (Ziel `link`, gleiche Kategorie oben) und `lib` setzt. Eine Bibliotheksübung, die schon zu einer anderen eigenen Übung gehört, ist dort nicht wählbar.

### 55. Suche im Auswahl-Sheet findet auch Muskel, Gerät und Kategorie, „Neu“ übernimmt das Suchwort
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Herkunft: Hevy filtert die Bibliothek nach Gerät und Muskel (gelesen), MCI hat Kategorie-Tabs, eine Geräteauswahl und beim Tauschen Suche mit Filtern (gelesen, Bildbeschreibungen), Strong filtert nach Körperteil (allgemeines Wissen). Bei uns sucht `filterPick()` nur im Namen und nur als zusammenhängenden Text: „Trizeps“ findet weder Dips noch Stirndrücken, „Kurzhantel Schulter“ findet gar nichts, und „Neu“ öffnet ein leeres Namensfeld, obwohl das Suchwort schon getippt ist. Skizze: `data-name` jeder Zeile bekommt zusätzlich Kategorie, Geräte und Muskeln (bei eigenen Übungen über `libOf()`), und eine Zeile passt, wenn sie alle Suchwörter in beliebiger Reihenfolge enthält. „Neu“ (`new-ex-inline`) setzt das Suchwort als Namen ein; `save-ex` fragt nach, wenn es den Namen in der eigenen Liste schon gibt, und bietet bei einem gleichnamigen Bibliothekseintrag „Aus der Bibliothek übernehmen“ an. Wer will, bekommt dieselbe Suche oben im Tab Übungen.

Umgesetzt am 15.11.2026 (gym-tester ohne Befund; daten-waechter: zwei Warnungen zu Idee 50 behoben, das laufende Training wird bei doppeltem Vorlagennamen nicht mit umbenannt, und die Rückfrage nennt einen schon vergebenen neuen Namen):

### 49. Nächste Einheit für jedes aktive Programm oben (aus Funktionsvergleich: Vorlagen)
- Nutzen: hoch · Aufwand: S · Datenformat: nein

Im Test hatte ich neben dem Arnold-Split drei Einheiten aus „Laufen an 3 Tagen“ übernommen. Nach einem Lauf am Morgen stand „Dran“ bei „Intervalle 4 × 4“, also bei einem zweiten Lauf am selben Tag. Der Arnold-Block rutschte nach unten, und die eigentlich nächste Einheit „Brust & Rücken B“ stand unmarkiert bei y 1323 von 844. Ursache ist die Regel „nur ein Dran, beim zuletzt trainierten Programm“ (`templateDays()`, Zeile 1188–1191); sie trifft jeden, der neben Kraft auch Lauf- oder Padel-Einheiten aus der Bibliothek nutzt. Vorbilder sind MCI, das im Wochenstreifen Trainings verschiedener Art nebeneinander zeigt und laut Roadmap Kraft um Laufen und Padel herum plant, sowie Hevy Trainer und Boostcamp, die je Programm die nächste Einheit der Reihe vorgeben. Skizze: Jedes Programm mit Reihenfolge, das in den letzten 14 Tagen trainiert wurde, bekommt oben eine eigene Dran-Karte mit einer kleinen Programmzeile („Arnold-Split · diese Woche 3 von 5“). Zuerst kommen die Programme, die heute noch nicht trainiert wurden, und davon das mit den meisten Einheiten in 14 Tagen. Gibt es kein aktives Programm, gilt die heutige Regel, alte Probe-Einheiten bekommen so keine Karte. Bei zwei Programmen liegen beide Karten auf dem ersten Bildschirm (etwa y 351–640), der Start bleibt 1 Tipp.

### 50. Umbenennen nimmt die bisherigen Trainings mit (aus Funktionsvergleich: Vorlagen)
- Nutzen: mittel · Aufwand: S · Datenformat: nein (ändert nach Rückfrage nur den Namen gespeicherter Trainings)

„Zuletzt“, „Dran“, „diese Woche“ und der Programm-Richtwert im laufenden Training hängen am Trainingsnamen. Im Test wurde aus „Beine“ „Beine (Arnold)“. Danach stand die tags zuvor trainierte Einheit als „Noch nie trainiert“ da und wurde zur nächsten Arnold-Einheit, „diese Woche“ fiel von 3 auf 2 von 5, ohne Hinweis. Hevy hängt ein Training über `routine_id` an die Routine statt an ihren Namen (nur aus Suchergebnissen, inoffizielle API-Beschreibungen). Skizze: Ändert „Sichern“ (`save-tpl`) den Namen einer Vorlage, zu der gespeicherte Trainings mit dem alten Namen gehören, fragt die App „3 Trainings heißen „Beine“. Auch umbenennen?“ mit „Umbenennen“ und „Nur die Vorlage“. „Umbenennen“ setzt `w.name` dieser Trainings und speichert jedes mit `save({put:id})`; ein laufendes Training mit dem alten Namen bekommt den neuen Namen ebenfalls, damit der Richtwert bleibt. Es kommt kein Feld dazu, alte Backups bleiben gültig. Den `daten-waechter` prüfen lassen, weil gespeicherte Trainings geändert werden.

### 51. Startbildschirm kürzer: übrige Vorlagen als Zeilen (aus Funktionsvergleich: Vorlagen)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Mit Arnold-Split, drei Lauf-Einheiten und fünf eigenen Vorlagen war der Startbildschirm im Test 2806 px hoch (3,3 Bildschirme). Jede Karte ist 120–158 px hoch, weil sie alle Übungen aufzählt, und die eigene Vorlage „Padel“ lag bei y 2278, also 2 bis 3 Wischer tief. Vorbild ist Hevy Trainer, das einen Abschnitt „Next Workout“ über das ganze Programm setzt; Strong klappt Ordner per Tipp zu, und Bevel-Nutzer wünschten sich eine zur Trainingswoche passende, kurze Liste (Bevel-Wunschliste, gelesen). Skizze: Nur die Dran-Karte(n) bleiben groß mit Übungsliste. Alle übrigen Vorlagen werden einzeilige Knöpfe, links der Name, rechts „vor 5 Tagen“, 52 px hoch, die ganze Zeile startet. Dann passen die übrigen vier Arnold-Einheiten auf den ersten Bildschirm, und „Padel“ rückt auf etwa y 1060, mit den Lauf-Einheiten auf etwa y 1300. Der Start bleibt 1 Tipp, die Übungen stehen weiter im Tab Vorlagen.

### 52. Tab Vorlagen nach Programmen ordnen, Anlegen oben (aus Funktionsvergleich: Vorlagen)
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Der Tab Vorlagen zeigt alle Vorlagen flach in der Anlege-Reihenfolge, ohne Programm und ohne „Zuletzt“. Die Arnold-Einheiten beginnen bei y 600, „+ Neue Vorlage“ und „+ Programm aus der Bibliothek“ lagen im Test bei y 1287 und 1341. Im Programm-Sheet sieht man erst nach dem Aufklappen, welche Einheiten schon übernommen sind. Vorbild sind Hevy, das ein Programm aus der Bibliothek als eigenen Ordner anlegt, und Strong mit Ordnern (gelesen). Skizze: Der Tab übernimmt die Gliederung von `vTplList()` mit Programm-Überschriften und „Eigene Vorlagen“, aber ohne Dran-Karte und immer in Programm-Reihenfolge. Die beiden Knöpfe stehen als Zeile über der Liste, und im Programm-Sheet steht hinter dem Programmnamen „5 von 5 übernommen“.

Umgesetzt am 14.11.2026:

### 44. „Dran“ folgt der Reihenfolge des Programms
- Nutzen: hoch · Aufwand: S · Datenformat: nein

Herkunft ist ein eigener Befund im Code. Vorbilder sind Hevy Trainer, das oben „Next Workout“ und darunter das ganze Programm zeigt, und Boostcamp, das laut einem Nutzer einfach die nächste Einheit der Reihe vorschlägt statt nach Kalender (nur Suche). Der Wochenplan des Arnold-Splits verspricht: „Fällt ein Tag aus, mit der nächsten Einheit weitermachen (in der App „Dran“)“. `templateDays()` nimmt aber über alle Vorlagen hinweg die am längsten nicht trainierte und lässt nie trainierte weg. Ohne andere Vorlagen zeigt „Dran“ in der ersten Programmwoche deshalb dienstags nichts und mittwochs, freitags und samstags „Brust & Rücken A“ statt Beine, Brust & Rücken B und Schultern & Arme B (aus dem Code nachgerechnet). Mit alten Vorlagen wie Push oder einer selten genutzten wie Ausdauer landet „Dran“ bei jeder, die länger als eine Woche zurückliegt, im Fünf-Tage-Rhythmus also fast immer dort. Skizze: Vorlagen mit `lib` über `lib.progs` ihrem Programm zuordnen. Je Programm ist zuerst die erste nie trainierte Einheit in Programm-Reihenfolge dran, sonst die am längsten nicht trainierte; bei fester Reihenfolge ist das immer die nächste, und eine übersprungene Einheit wird nachgeholt. Eigene Vorlagen ohne Programm bekommen „Dran“ nur noch nach der alten Regel, wenn es keine Programm-Vorlagen gibt. Programme mit `dauerWochen` (Laufen für Einsteiger, jede Woche dreimal) bleiben außen vor. Solange die Bibliothek nicht geladen ist, gilt die alte Regel, und `loadLib()` zeichnet danach auch den Startbildschirm neu (bisher nur bei laufendem Training). Kein zusätzlicher Tipp.

Umgesetzt in `templateDays()`. Nach dem `gym-tester`: Bei mehreren Programmen gibt es nur ein „Dran“, bei der nächsten Einheit des zuletzt trainierten Programms.

### 45. Nächste Einheit oben, Vorlagen nach Programm geordnet (MCI)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Herkunft: MCI zeigt auf dem Startbildschirm einen Wochenstreifen mit den geplanten Trainings als Karten, an freien Tagen „kein Training geplant“. Hevy Trainer setzt „Next Workout“ über das ganze Programm, und Hevy legt ein Programm aus der Bibliothek als eigenen Ordner an (alles gelesen). Bei uns stehen die Vorlagen in der Reihenfolge, in der sie angelegt wurden, die Arnold-Einheiten also hinter Push, Pull, Legs, Ausdauer und Padel. Aus dem CSS geschätzt (nicht gemessen) beginnt die erste Arnold-Karte bei 390 × 844 unterhalb des Bildschirms, „Schultern & Arme B“ liegt rund 1.600 px tief. Skizze: Unter „Vorlage starten“ steht zuerst die „Dran“-Karte aus Idee 44, bei mehreren Programmen die des zuletzt trainierten. Darunter folgt je Programm eine kleine Überschrift wie „Arnold-Split · diese Woche 3 von 5“ mit den übrigen Einheiten in Programm-Reihenfolge, zuletzt „Eigene Vorlagen“ in der bisherigen Reihenfolge. Ohne geladene Bibliothek bleibt die Liste flach. Die nächste Einheit startet weiter mit 1 Tipp, aber ohne Wischen. Setzt Idee 44 voraus.

Umgesetzt in `vTplList()`: Dran-Karte oben, dann zuerst die übrigen Einheiten ihres Programms, die anderen Programme und „Eigene Vorlagen“. Nebenbei hat das Auswahl-Sheet eine feste Höhe bekommen, damit das Suchfeld beim Tippen nicht wandert (zweimal von Testern bemängelt).

### 46. Übung in der Vorlage tauschen, die Programmwerte bleiben (MCI)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Herkunft: MCI tauscht Übungen gegen Alternativen und fragt danach, ob ausgetauschte, hinzugefügte und entfernte Übungen in den Plan übernommen werden. Bewertungen von 2024 vermissten, Übungen herausnehmen oder hinzufügen zu können, und Hevy ersetzt Übungen auch in Routinen (alles gelesen). Bei uns behält eine Ersatzübung den Programmplatz nur im laufenden Training (Idee 22). Wer im Arnold-Split dauerhaft Kurzhantel-Schulterdrücken statt Schulterdrücken mit der Langhantel machen will, braucht im Vorlagen-Sheet rund 12 bis 16 Tipps (Tab, Vorlage, ✕, „+ Übung hinzufügen“, Suchen und Wählen, fünfmal ↑, „Sichern“; aus dem Code gezählt). Danach fehlt der Richtwert: keine Programm-Zeile, keine Satzzahl aus dem Programm, 1:30 statt 3:00 Pause, „Steigern“ erst bei 10 statt 8 Wdh. Skizze: Jede Zeile im Vorlagen-Sheet bekommt ein ⇄. Es zeigt die passenden Alternativen (`swapAlternatives()`, auf die Übungsliste der Vorlage verallgemeinert) und ersetzt die Übung an derselben Stelle; das kostet 5 Tipps samt Tab und „Sichern“. `planOf(t, exId)` gibt einer Übung, die in der Einheit nicht vorkommt, den Richtwert eines frei gewordenen Programmplatzes mit gleichem Hauptmuskel (`muskeln[0]`), bei mehreren den an derselben Position. Das wirkt auch für Vorlagen, die schon von Hand umgebaut wurden. Im Sheet steht darunter grau „Programmplatz Schulterdrücken · 4 × 6-8 Wdh“. Nach dem Training kommt keine Rückfrage, es ist also nicht die abgelehnte Idee 7; die Regel entspricht der von Idee 22.

Umgesetzt: ⇄ im Vorlagen-Sheet (Picker-Ziel `tpl-swap`), `planOf()` vergibt frei gewordene Programmplätze, im Sheet steht „Programmplatz …“, im Training „Programm wie …“.

### 36. Pause aus dem Programm für den Timer
- Nutzen: hoch · Aufwand: S · Datenformat: nein

Herkunft ist der eigene Befund im Funktionsvergleich „Letztes Mal“: Bankdrücken zeigt „Pause 3:00 min“, der Timer läuft aber mit der allgemeinen Pause von 1:30. Vorbilder sind Fitbod, das die Pause pro Übung nach ihrer Schwierigkeit erzeugt (nur aus Suchergebnissen), und MacroFactor, das z. B. Grundübungen im Unterkörper 3:00 und Isolation im Oberkörper 1:30 gibt; Hevy und Strong stellen sie pro Übung von Hand ein. Im Arnold-Split weicht die Programm-Pause bei 15 der 30 Übungsplätze von 1:30 ab (60 bis 180 s). Für 3:00 braucht man heute pro Pause 6 Tipps auf „+15“, bei Bankdrücken mit 4 Sätzen bis zu 24. Skizze: In der Aktion `check` startet `startTimer((entryPlan(en) || {}).pauseSek || S.settings.rest, s)`. Getauschte Übungen bekommen über `planEx` die Pause ihres Programmplatzes, Übungen ohne Programm behalten die allgemeine Pause. −15/+15 ändern nur die laufende Pause, eine eigene Dauer pro Übung (Idee 8) gibt es also weiterhin nicht. Der Timer zeigt „Pause · Programm“, und unter der Einstellung „Pausen-Timer“ steht „gilt, wenn das Programm keine Pause vorgibt“. Danach `bibliothek/README.md` („Zuordnung zur App“) und `CLAUDE.md` anpassen.

Umgesetzt: `restFor()` nimmt die Programm-Pause (10–600 s), sonst die Einstellung; der Timer zeigt „Pause · Programm“, unter der Einstellung steht ein erklärender Satz. `bibliothek/README.md` ist angepasst.

### 37. Nächsten Satz nicht unter dem Timer verstecken
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Vorbild ist Hevy: Es springt mit „Smart Superset Scrolling“ nach jedem Satz zur nächsten Übung der Gruppe, und die Live Activity zeigt den nächsten Satz samt Vorgabe. Strong springt mit „Weiter“ zum nächsten Satz. Bei uns belegen Timer und Tab-Leiste in der Pause die unteren 180 px; im Funktionsvergleich „Satz-Erfassung“ lag der dritte Satz der zweiten Übung darunter, man musste wischen. Skizze: Nach dem Abhaken sucht die App den nächsten offenen Satz: in derselben Übung, sonst den ersten offenen Satz der folgenden Übungen, mit Idee 39 den des Partners. Sie markiert ihn mit einem orangen Rand links und scrollt sanft, wenn er hinter dem Timer liegt. Beginnt mit ihm eine neue Übung, rückt deren Karte nach oben, dann sind „Letztes Mal“, „Steigern“ und „Ziel heute“ schon in der Pause lesbar. Die App scrollt nicht, wenn der Satz schon zu sehen ist oder ein Feld den Fokus hat, und bei `prefers-reduced-motion` springt sie ohne Animation.

Umgesetzt: `nextOpen()` und `revealNext()`, Markierung mit orangem Strich und oranger Nummer. Nach dem `gym-tester`: Die App scrollt nur noch, wenn Timer oder Tab-Leiste den Satz wirklich verdecken (vorher rückte die Seite bei 390 px nach jedem Haken um 7–8 px), und die Markierung übersteht ein Neuladen.

### 38. Pause übersteht App-Wechsel und Neuladen
- Nutzen: mittel · Aufwand: S · Datenformat: nein (Feld nur im laufenden Training, nicht im gespeicherten Training und nicht im Backup)

Hevy zeigt die Pause per Live Activity auch außerhalb der App, MCI und StrongLifts melden das Ende per Mitteilung. Das kann eine PWA nicht, nach der Rückkehr aber kann sie die richtige Zeit zeigen. Heute fehlt der Timer nach einem Neuladen (Funktionsvergleich „Satz-Erfassung“), und iOS beendet Web-Apps im Hintergrund oft, etwa wenn man in der Pause die Musik-App öffnet (allgemeines Wissen, nicht nachgelesen). Laut WebKit stoppt Audio im Hintergrund; der geplante Piepton könnte nach der Rückkehr deshalb verspätet kommen (Vermutung, auf dem iPhone prüfen). Skizze: `startTimer`, `shiftTimer` und `stopTimer` schreiben `{end, total}` als `S.active.rest` mit. Wie `planEx` gelangt das Feld nicht ins gespeicherte Training, und ins Backup ohnehin nicht, weil `backupJson()` `active:null` setzt. Beim Start stellt die App den Timer daraus wieder her. Beim Verlassen der App (`visibilitychange`) ruft sie `cancelBeep()` auf. Bei der Rückkehr plant sie den Ton für die Restzeit neu oder zeigt gleich „Pause vorbei“ (mit Idee 40 samt Überzeit). Nach einem Neuladen kommt der Ton erst nach dem ersten Tipp, weil iOS Audio nur nach einer Berührung freigibt. Den `daten-waechter` kurz prüfen lassen.

Umgesetzt: `keepRest()`/`restoreRest()` mit `S.active.rest`, Ton im Hintergrund abgesagt und bei der Rückkehr neu geplant. Der `daten-waechter` fand kein Datenrisiko; seine zwei Hinweise sind eingebaut (Import beendet eine laufende Pause, unplausibel lange Pausen werden ignoriert).

### 33. Wiedereinstieg nach langer Pause (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Vorbild ist Fitbod: Es senkt nach einer Trainingspause die vorgeschlagenen Gewichte von selbst, um den Wiedereinstieg zu erleichtern (laut Suchergebnissen aus Fitbods Hilfe). Im Test lag Stirndrücken 53 Tage zurück. Die App zeigte „Letztes Mal (Di., 22.09.)“ ohne Hinweis darauf, wie lange das her ist, und „Ziel heute: 11, 11, 10“, verlangte also mehr als vor der Pause. Skizze: Liegt die letzte Einheit einer Kraftübung länger als eine Schwelle zurück (z. B. 4 Wochen; Schwelle und Abzug vorher vom `trainings-experte` festlegen lassen), zeigt die Zeile zusätzlich „vor 7 Wochen“, und „Ziel heute“ und „Steigern“ entfallen. An ihrer Stelle steht „Wiedereinstieg: 27,5 kg“, abgezogen in ganzen Schritten von `stepSize()` wie bei `stepDown()`; ein Tipp setzt die offenen Sätze, mit Rückgängig. Wer ihn übergeht, trainiert wie bisher.

Umgesetzt nach der Regel des `trainings-experte` (Grundlage Bosquet 2013, Rest Praxis; in `bibliothek/README.md` festgehalten): ab 35 Tagen seit der letzten Einheit der Übung „vor X Wochen“ in „Letztes Mal“, kein Steigern, Entlasten oder Ziel in dieser Einheit, bei Gewicht der Knopf „Wiedereinstieg“ mit 10 % bis 55 Tage und 20 % danach (`comeback()`), mit Rückgängig. Ohne Gewicht und bei Ausdauer nur der Hinweis. Den Vorschlag des Experten, nach einer Pause schneller zum alten Gewicht zurückzusteigern (eine Einheit statt zwei), habe ich noch nicht umgesetzt.

### 35. „Besser als letztes Mal“ nach dem Training (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Vorbild ist Hevy Trainer, das Übungen mit Fortschritt mit einem kleinen Zeichen markiert, dazu die „Focus Metric“ von Strong, die eine Kennzahl mit der letzten Einheit vergleicht. Im Test schaffte Kurzhantel-Schrägbankdrücken das Ziel (+3 Wdh), und Langhantelrudern kam nach dem Entlasten auf 23 statt 16 Wdh. Weder die Karte noch „Training geschafft“ sagten das; dort stehen nur Kampfkraft, Rekorde und Erfolge, und einen Rekord gibt es erst beim Bestwert. Skizze: `finish()` vergleicht jede Übung vor dem Speichern mit `lastFor()` und gibt der Ansicht nach dem Training eine Liste „Besser als letztes Mal“ mit, z. B. „Kurzhantel-Schrägbankdrücken: Ziel geschafft, +3 Wdh“ oder „Bankdrücken: +2,5 kg“. Im Training zeigt die Zeile „Ziel heute“ „Ziel geschafft“, sobald alle Sätze abgehakt sind und das Ziel erreicht ist. Alles wird nur berechnet und kostet keinen Tipp.

Umgesetzt: Liste „Besser als letztes Mal“ in „Training geschafft“ (`betterThanLast()`) und „✓ Ziel geschafft“ in der Übungskarte. Nach dem `gym-tester`: Wdh als Summe klar benannt („+3 Wdh gesamt“), und Hinweise mit Rückgängig verschwinden beim nächsten Tipp an anderer Stelle, damit sie keine Sätze verdecken.

### 31. „Ziel heute“ mit einem Tipp übernehmen (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: hoch · Aufwand: S · Datenformat: nein

Vorbild ist Hevy: Dort übernimmt ein Tipp auf den Vorwert in der Spalte „Previous“ den Satz, und Hevy Trainer zeigt das letzte Mal als Ziel, das man übertreffen soll. Bei uns behalten die Felder die alten Werte. Wer „Ziel heute: 11, 10, 9 Wdh“ bei Kurzhantel-Schrägbankdrücken schafft, braucht im Test 11 Tipps statt 4, bei Bankdrücken (8, 9, 8, 7) sind es 8 statt 5 und bei Reverse Butterfly 9 statt 4 (gerechnet). Skizze: Die Zeile wird ein Knopf im Stil von „Steigern“ (44 px hoch). Ein Tipp setzt die Wdh der offenen Sätze auf das Ziel, und der Hinweis bietet wie bei `setWeight()` „Rückgängig“ an. Wer nicht tippt, trainiert mit den Vorwerten wie bisher, so rutscht kein Zielwert unbemerkt ins Training (die offene Frage aus Idee 21).

Umgesetzt: Solange ein offener Satz andere Wdh hat, ist „Ziel heute“ ein gold umrandeter Knopf „Ziel eintragen: …“, der nur die Werte der offenen Sätze nennt und einträgt (Aktion „goal“, `setValues()` mit Rückgängig). Danach steht das Ziel als Text da, gleich hoch wie der Knopf, damit die Sätze darunter nicht springen (Befund des `gym-tester`).

### 34. Übungskopf über die ganze Kartenbreite (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft ist der eigene Test: ⇄ und ✕ stehen rechts neben dem ganzen Kopf der Karte. Deshalb haben „Letztes Mal“ und „Programm“ nur 215 der 311 px und brechen in jeder Karte auf zwei Zeilen um, obwohl sie mit 221–294 px in eine Zeile passen. Vom Kartenrand bis zur Satztabelle sind es 150–209 px, und keine zwei Übungen passen auf den Bildschirm. Vorbild ist Hevy, das die Vorwerte in einer eigenen Spalte der Satztabelle zeigt statt im Kopf. Skizze: ⇄ und ✕ stehen nur noch in der Zeile des Übungsnamens, darunter laufen Notiz, „Letztes Mal“, Programm, Ziel und die Knöpfe über die volle Breite. Das spart rund 34 px pro Übung, bei „Schultern & Arme B“ mit 7 Übungen etwa 240 px Scrollweg, ohne einen Tipp mehr. Auf dem iPhone mit der Systemschrift nachmessen; bei 375 px Breite wird es knapper.

Umgesetzt: ⇄ und ✕ stehen nur noch in der Namenszeile und ragen in den Kartenrand (Tap-Fläche bleibt 44 × 44). „Letztes Mal“ und „Programm“ passen bei 375 px in je eine Zeile; sehr lange Übungsnamen brechen weiter um, ohne die Knöpfe zu überlappen.

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
