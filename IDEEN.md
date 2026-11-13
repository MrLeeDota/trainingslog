# Ideen für Trainingslog

Hier stehen die Ideen für die Weiterentwicklung. Der Agent `produkt-scout` füllt „Vorschläge“. Was umgesetzt werden soll, wandert nach „Angenommen“, nach der Umsetzung nach „Erledigt“. Was unter „Abgelehnt“ oder „Erledigt“ steht, wird nicht erneut vorgeschlagen.

## Vorschläge

Erste Runde vom 13.11.2026. NOTIZEN.md war noch leer, die Ideen stammen aus der Recherche zu Strong, Hevy, JEFIT, Fitbod, Apple Fitness, Strava und Runna und aus dem Blick auf `index.html`. Sortiert nach Nutzen im Verhältnis zum Aufwand.

### 11. Übungsbibliothek in der App
- Nutzen und Aufwand: noch nicht bewertet · Datenformat: noch offen

Herkunft: eigener Vorschlag (13.11.2026). Beim Anlegen einer Übung oder Vorlage aus `bibliothek/` auswählen statt alles selbst einzutippen. Eigene Übungen und Daten bleiben unverändert.

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
