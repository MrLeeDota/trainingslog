# Funktionsvergleich

Wie gut ist jede Funktion des Trainingslogs im Vergleich zu führenden Fitness-Apps (Strong, Hevy und je nach Thema Fitbod, JEFIT, Strava oder Apple Fitness)? Gepflegt vom Agenten `funktions-tester`, der pro Durchlauf eine Funktion prüft. Urteil: hinten, gleichauf oder vorne.

| Funktion | Urteil | Wichtigste Lücke | Zuletzt geprüft |
|---|---|---|---|
| Satz-Erfassung | hinten | Werte ändern kostet Löschtipps und gilt nur für einen Satz; keine Aufwärmsätze | 14.11.2026 |
| „Letztes Mal“ | offen | – | – |
| Pausen-Timer | offen | – | – |
| Vorlagen | offen | – | – |
| Übungsverwaltung | offen | – | – |
| Verlauf | offen | – | – |
| Fortschritt & Rekorde | offen | – | – |
| Spielelemente | offen | – | – |
| Ausdauer-Erfassung | offen | – | – |
| Backup & Export | offen | – | – |

## Befunde

### Satz-Erfassung

Geprüft am 14.11.2026 in Chrome am PC im Handy-Rahmen (390 × 844, Gegenprobe 375 × 667) auf localhost, Vorlage Push. Klicks und Tastatur waren echt, gescrollt wurde per Skript, weil das Mausrad im Rahmen nicht wirkt. Die Tipps sind auf die iPhone-Tastatur umgerechnet: Jede Taste zählt als ein Tipp, auch das Löschen. Damit die Übungen mehrere Sätze vom letzten Mal haben, wurden zwei Push-Trainings als Testdaten ergänzt (06.11. und 10.11.2026).

**Tipps pro Satz**

| Ablauf | Trainingslog | Strong / Hevy |
|---|---|---|
| Satz unverändert abhaken | 1 | 1 |
| Gewicht ändern (52,5 → 55) und abhaken | 8, davon 4 zum Löschen | etwa 4* |
| Wdh ändern (8 → 7) und abhaken | 4 (bei „10“ → „9“: 5) | etwa 3* |
| Neues Gewicht in allen 3 Sätzen | 24; mit „Steigern“ 4, falls die Regel greift | nicht belegt |
| Satz mit denselben Werten hinzufügen | 2 („+ Satz“ kopiert den letzten Satz) | 2 |
| Satz mit anderen Werten hinzufügen (55 × 9 → 52,5 × 7) | 12 | etwa 7* |
| Neue Übung, 3 gleiche Sätze | 21, weil Satz 2 und 3 leer bleiben | nicht belegt |
| Falsch abgehakten Satz lösen | 1, aber der Timer läuft mit voller Dauer weiter | 1 |
| Abgehakten Satz entfernen | 1 („− Satz“, nur der letzte, ohne Rückfrage) | Wischen auf der jeweiligen Zeile |

\* Annahme aus allgemeinem Wissen, nicht nachgelesen: Bei Strong und Hevy stehen die Vorwerte als graue Vorschläge im Feld, und eine Eingabe ersetzt sie direkt.

**Bedienung (Messwerte in App-Pixeln bei 390 px)**
- Tap-Flächen: kg- und Wdh-Felder 104 × 48, Haken 52 × 48, „+ Satz“ und „− Satz“ je 63 × 44 mit nur 8 px Abstand. Unter 44 px liegen „Steigern“ (148 × 32), das ✕ zum Entfernen der Übung (33 × 38, mit Rückfrage), „Verwerfen“ (91 × 38, mit Rückfrage) und die Timer-Knöpfe (47 × 37 bzw. 62 × 37). Die Satznummer (26 × 26) ist nicht antippbar.
- Daumen: Die Haken liegen rechts außen (x 330–382), für die rechte Hand gut erreichbar. Während der Pause belegen Timer und Tab-Leiste die unteren 180 px (y 664–844), also genau den bequemsten Bereich. Frei bleiben 576 px, das sind etwa 1,75 Übungskarten. Ein neu angehängter Satz rutscht halb unter den Timer, pro Übung ist ungefähr einmal Wischen nötig. Nach einem Neuladen steht die Ansicht wieder oben und der Timer fehlt; die Werte bleiben erhalten.
- Lesbarkeit: Felder 18 px fett, also kein Zoom auf iOS beim Antippen. „Letztes Mal“ steht in 13 px Grün und hat einen hohen Kontrast, die Spaltenköpfe sind 12 px groß. Bei 390 und 375 px bricht nichts um (Felder bei 375 px: 97 px breit).
- Rückmeldung: Nach dem Abhaken leuchten Zeile und Haken gold, oben zählt „x Sätze erledigt“ hoch und der Timer fährt ein. Bei einem neuen Bestwert erscheint 2,2 s lang „Neuer Rekord: 55 kg bei Schrägbankdrücken“; der Hinweis verdeckt dabei Titel und „Verwerfen“. Nach „Steigern“ ändert sich nur der Wert, der Knopf verschwindet und die Karte springt etwa 35 px hoch. „− Satz“ gibt keine Rückmeldung. Ein Ton oder eine Vibration beim Abhaken fehlt; Vibration geht in Safari ohnehin nicht.
- Auffällig im Test: Ein leerer Satz lässt sich abhaken, er startet den Timer und würde leer gespeichert. Den Wert eines schon abgehakten Satzes kann man direkt im goldenen Feld korrigieren, ohne den Haken zu lösen. Das ist gut.

**Was die anderen besser machen**
- Eine Eingabe ersetzt den Vorschlag, ohne dass man vorher löscht (Strong, Hevy; siehe Annahme oben). Hevy übernimmt außerdem mit einem Tipp auf den Vorwert den ganzen Satz.
- Satztypen: Strong, Hevy und JEFIT öffnen sie über einen Tipp auf die Satznummer (Aufwärmen, Drop, Versagen). Fitbod fügt Aufwärmsätze über „Mehr“ hinzu. Strong rechnet Aufwärmsätze nicht in Diagramme und Kennzahlen ein, bei Hevy ist das einstellbar. Bei uns zählen Aufwärmsätze bei Rekorden, Kampfkraft und Fortschrittskurve voll mit. Außerdem verhindern sie den Steigerungsvorschlag, denn der verlangt dasselbe Gewicht in allen Sätzen.
- Einen einzelnen Satz löscht man bei Strong, Hevy und Fitbod per Wischen auf der Zeile. Bei uns geht nur der letzte, und zwar auch dann, wenn er schon abgehakt ist, ohne Rückfrage und ohne Rückgängig.
- RPE gibt es optional bei Strong (Knopf auf der eigenen Tastatur, Skala 6–10) und bei Hevy (eigene Spalte, in den Einstellungen einschaltbar). Einen Scheibenrechner bieten Hevy kostenlos und Strong nur mit PRO an, den Aufwärmrechner Strong (PRO) und Hevy. Dazu kommen Haptik, ein Abhak-Ton (Hevy) und die Apple Watch.

**Was wir besser machen**
- Der vorausgefüllte Satz ist ein echter Wert. Ein unveränderter Satz kostet 1 Tipp, und das Training bleibt auch nach einem Neuladen vollständig.
- „Steigern: 72,5 kg“ setzt mit einem Tipp alle offenen Sätze. Auf den gelesenen Seiten von Strong und Hevy steht nichts von einem Steigerungsvorschlag im Training (Fitbod steigert über seinen Algorithmus).
- Rekord-Meldung direkt beim Abhaken (das kann Hevy auch), große Zeilen von 48 px, alles offline, ohne Konto und ohne Bezahlschranke (bei Strong ist der Scheibenrechner PRO).

**Urteil: hinten.** Der häufigste Fall, ein unveränderter Satz, ist mit 1 Tipp gleichauf. Jede Abweichung kostet aber etwa doppelt so viele Tipps wie bei Strong oder Hevy: Löschtipps vor jeder Eingabe, keine Übernahme in die folgenden Sätze und leere Sätze bei neuen Übungen. Im Studio wiegt das schwerer als fehlende Extras wie RPE oder der Scheibenrechner. Aufwärmsätze verfälschen dazu Rekorde, Kampfkraft und den Steigerungsvorschlag. Mit den Vorschlägen 12 und 13 in `IDEEN.md` wäre die Funktion gleichauf.

**Lücken, die sich nicht lohnen:** RPE kostet pro Satz zusätzliche Tipps. Der Scheibenrechner bringt einer Person, die ihre Scheiben kennt, wenig. Drop- und Versagenssätze sind seltener als Aufwärmsätze. Haptik geht nicht, weil Safari `navigator.vibrate` nicht unterstützt. Apple Watch und Live Activity sind als PWA nicht möglich.

**Quellen**
- Selbst gelesen:
  - Strong Help Center, Kategorie „Record a Workout with Strong“: https://help.strongapp.io/category/165-logging-a-workout
  - Strong Help Center, „How do I perform a workout with Strong?“: https://help.strongapp.io/article/229-my-first-workout
  - Strong Help Center, „About Warm-up, Drop Sets and Failure Sets“: https://help.strongapp.io/article/166-set-tags
  - Strong Help Center, „About RPE (Rate of Perceived Exertion)“: https://help.strongapp.io/article/230-about-rpe
  - Strong Help Center, „About Plate Calculator“: https://help.strongapp.io/article/169-plate-calculator
  - Strong Help Center, „About Warm-up Calculator“: https://help.strongapp.io/article/171-warm-up-calculator
  - Strong im App Store (UK, Beschreibung und Versionshinweise): https://apps.apple.com/gb/app/id464254577
  - Strong-Website: https://www.strong.app/
  - Hevy, „Track Workouts“: https://www.hevyapp.com/features/track-workouts/
  - Hevy, „Workout Set Types“: https://www.hevyapp.com/features/workout-set-types/
  - Hevy, „Workout Settings“: https://www.hevyapp.com/features/workout-settings/
  - Hevy, „Track Exercises“: https://www.hevyapp.com/features/track-exercises/
  - JEFIT Blog, „New in Jefit: Customize Your Workouts Sets with Set Types“: https://www.jefit.com/blog/set-types-new-in-jefit-customize-your-workouts-with-set-types
  - RepReturn, „Strong App Review“ (laut eigener Angabe kein Testlabor): https://repreturn.com/strong-app-review/
- Nur aus Suchergebnissen (Seite gesperrt oder nicht geöffnet):
  - Hevy Help Center, „Set Types in Hevy Explained“: https://help.hevyapp.com/hc/en-us/articles/34896293707927-Set-Types-in-Hevy-Explained-Drop-Sets-Warm-Up-Sets-and-More
  - Fitbod Help, „Editing Workouts in Fitbod“: https://help.fitbod.me/hc/en-us/articles/360006335593-Editing-Workouts-in-Fitbod
  - Fitbod Help, „Warm Up Sets“: https://help.fitbod.me/hc/en-us/articles/360006337634-Warm-Up-Sets
  - Vergleichsartikel von setgraph.app (SEO-Texte, schwache Belege): https://setgraph.app/ai-blog/hevy-vs-strong
  - Forenstimmen: Echte Reddit-Threads waren über die Suche nicht zu finden.
- Allgemeines Wissen, nicht nachgelesen: graue Vorschlagswerte in den Feldern von Strong und Hevy, die eigene Zahlentastatur von Strong mit „Weiter“-Taste, Haptik beim Abhaken in Strong und Hevy.
