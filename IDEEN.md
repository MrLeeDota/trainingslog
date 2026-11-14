# Ideen für Trainingslog

Hier stehen die Ideen für die Weiterentwicklung. Der Agent `produkt-scout` füllt „Vorschläge“. Was umgesetzt werden soll, wandert nach „Angenommen“, nach der Umsetzung nach „Erledigt“. Was unter „Abgelehnt“ oder „Erledigt“ steht, wird nicht erneut vorgeschlagen.

## Vorschläge

Erste Runde vom 13.11.2026. NOTIZEN.md war noch leer, die Ideen stammen aus der Recherche zu Strong, Hevy, JEFIT, Fitbod, Apple Fitness, Strava und Runna und aus dem Blick auf `index.html`. Sortiert nach Nutzen im Verhältnis zum Aufwand.

Aus dem Funktionsvergleich „Satz-Erfassung“ vom 14.11.2026 (Agent `funktions-tester`, Befund in `VERGLEICH.md`):

### 14. Aufwärmsätze markieren (aus Funktionsvergleich: Satz-Erfassung)
- Nutzen: mittel · Aufwand: M · Datenformat: ja (optionales Feld am Satz, mit Migration)

Vorbild ist Strong: Ein Tipp auf die Satznummer öffnet Aufwärmen, Drop und Versagen, und Aufwärmsätze zählen nicht in Diagramme und Kennzahlen; Hevy und JEFIT machen es ähnlich. Heute verfälschen Aufwärmsätze Rekorde, Kampfkraft und Fortschrittskurve, und sie verhindern den Steigerungsvorschlag, weil der in allen Sätzen dasselbe Gewicht verlangt. Skizze: Ein Tipp auf die Satznummer (Fläche auf 44 × 48 px vergrößern) schaltet ein goldenes „A“ um, gespeichert als `w:1` am Satz. `finish()` und `newEntry()` übernehmen das Feld, ab dem zweiten Training kostet es also keinen Tipp mehr. `stepUp`, `exSeries`, `progress()`, die Rekord-Meldung und „Letztes Mal“ überspringen bzw. kennzeichnen A-Sätze, und die CSV bekommt eine Spalte. Migration: Ein Satz ohne das Feld gilt als Arbeitssatz; alte Daten und Backups bleiben gültig, alte Spielwerte bleiben unverändert.

### 15. Rückgängig nach „− Satz“ (aus Funktionsvergleich: Satz-Erfassung)
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Vorbild sind Strong, Hevy und Fitbod: Dort löscht man einen Satz gezielt per Wischen auf der Zeile. Bei uns entfernt „− Satz“, nur 8 px neben „+ Satz“, immer den letzten Satz, auch einen abgehakten, und zwar ohne Rückfrage; im Test ging so ein abgehakter Satz mit 52,5 kg × 7 verloren. Skizze: Nach dem Entfernen erscheint `toast("Satz 3 entfernt", "undo-set")`, der Satz wird solange in `ui` gemerkt, und ein Tipp auf den Hinweis setzt ihn an seiner Stelle wieder ein. Solange nichts schiefgeht, kostet das keinen Tipp mehr als heute.

### 16. Versehentlichen Haken samt Timer zurücknehmen (aus Funktionsvergleich: Satz-Erfassung)
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft ist der eigene Test, Anlehnung an Hevy, das den Timer an den Satz koppelt (vor einem Drop-Satz startet er nicht). Heute startet ein versehentlicher Haken den Timer neu mit voller Dauer; löst man den Haken wieder, läuft der Timer weiter, und die Restzeit der Pause davor ist verloren. Skizze: `startTimer` merkt sich im Speicher den vorherigen Stand (`end`, `total`) und den auslösenden Satz. Wird genau dieser Satz wieder gelöst, solange der Timer noch läuft, stellt `check` den vorherigen Timer wieder her oder stoppt ihn.

Aus dem Funktionsvergleich „Letztes Mal“ vom 14.11.2026 (Agent `funktions-tester`, Befund in `VERGLEICH.md`):

### 17. Steigerungsvorschlag nach Programm-Wiederholungen (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: hoch · Aufwand: S · Datenformat: nein

Vorbild ist Fitbod, das Last oder Wiederholungen automatisch erhöht, wenn die letzte Einheit gut lief, und Hevy mit Wiederholungsbereichen. Heute verlangt `stepUp()` fest 10 Wdh in allen Sätzen; ein Programm wie „3 × 6–8 Wdh“ (Bankdrücken in der Bibliothek) erreicht das nie, der Vorschlag erscheint dort nie. Skizze: `stepUp(exId, plan)` nimmt als Schwelle das obere Ende des Programm-Bereichs (`plan.wdh`, z. B. 8 aus „6-8“), sonst weiter `STEP_REPS`; Anzeige und Tipps bleiben gleich. Im Studio kostet es nichts extra; die Schwelle bleibt für Übungen ohne Programm unverändert.

### 18. Satzzahl aus dem Programm übernehmen (aus Funktionsvergleich: „Letztes Mal“)
- Nutzen: niedrig · Aufwand: S · Datenformat: nein

Herkunft ist der eigene Test: Bei Vorlagen aus der Bibliothek zeigt „Programm: 2 × 8–12“ eine andere Satzzahl, als die Felder vom letzten Mal vorgeben (nach einem Satz bleibt es bei einem). Skizze: `newEntry(exId, plan)` hängt Sätze mit den Werten des letzten Satzes an, bis `plan.saetze` erreicht ist (höchstens 10); es wird nie gekürzt. Wer weniger trainiert, entfernt einen Satz wie bisher (Tipp mehr), wer dem Programm folgt, spart den Tipp auf „+ Satz“.

## Angenommen

Noch nichts.

## Abgelehnt

Vorerst nicht gebraucht (13.11.2026):

### 7. Vorlage nach dem Training anpassen
- Nutzen: mittel · Aufwand: S · Datenformat: nein

Herkunft: Hevy fragt nach dem Training, ob die Routine mit den Änderungen aktualisiert werden soll (allgemeines Wissen, nicht nachgelesen). Skizze: Beim Start merkt sich `S.active` die Vorlagen-ID; hat das Training andere Übungen oder eine andere Reihenfolge als die Vorlage, erscheint nach dem Speichern ein Hinweis mit Aktion „Vorlage übernehmen“ (über `toast(msg, act)`). Das laufende Training geht nicht ins Backup, das gespeicherte Training ändert sich nicht.

### 8. Eigene Pausendauer pro Übung
- Nutzen: mittel · Aufwand: S · Datenformat: ja

Herkunft: Hevy (Pausen-Timer pro Übung von 5 s bis 5 min oder aus); Strong nennt „eigene Timer“, ob pro Übung, ist nicht belegt. Skizze: Im Übungs-Sheet ein Feld „Pause“ (Standard, 45 s bis 4 min, aus); `check` startet `startTimer(ex.rest ?? S.settings.rest)`. So laufen Kniebeugen mit 3 min und Seitheben mit 60 s, ohne dass man im Training mit −15/+15 nachstellt. Migration: optionales Feld an der Übung, fehlt es, gilt die allgemeine Pausendauer; alte Daten und Backups bleiben gültig.

## Erledigt

Umgesetzt am 14.11.2026:

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
