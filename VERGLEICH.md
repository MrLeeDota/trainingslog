# Funktionsvergleich

Wie gut ist jede Funktion des Trainingslogs im Vergleich zu führenden Fitness-Apps (Strong, Hevy und je nach Thema Fitbod, JEFIT, Strava oder Apple Fitness)? Gepflegt vom Agenten `funktions-tester`, der pro Durchlauf eine Funktion prüft. Urteil: hinten, gleichauf oder vorne.

| Funktion | Urteil | Wichtigste Lücke | Zuletzt geprüft |
|---|---|---|---|
| Satz-Erfassung | gleichauf | Keine Aufwärmsätze (Idee 14); ob das Markieren beim Antippen auf dem iPhone hält, ist ungeprüft | 14.11.2026 |
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

Zweite Prüfung am 14.11.2026, nach der Umsetzung der Ideen 12 und 13 und der Fixes aus der ersten Prüfung (erste Prüfung am selben Tag: „hinten“). Getestet in Chrome am PC im Handy-Rahmen (390 × 844, Gegenprobe 375 × 667) auf localhost: Vorlage Push, dazu Wadenheben und Face Pulls als neue Übungen ohne Vorwerte und Laufen als Ausdauer-Übung. Klicks, Tastatur und Scrollen waren echt; das Mausrad wirkt inzwischen im Rahmen. Die Tipps sind auf die iPhone-Tastatur umgerechnet: Jede Taste zählt als ein Tipp. Als Testdaten wurden per Skript ein Push-Training (Bankdrücken 70 × 8, 8, 7; Schrägbankdrücken 52,5 × 8, 8, 8; Schulterdrücken 40 × 10, 9, 8; Seitheben 10 × 12, 12, 12; Dips KG × 10, 9, 8) und ein Lauf (32 min, 5,4 km) ergänzt. Das Testtraining selbst wurde am Ende verworfen.

**Tipps pro Satz**

| Ablauf | Trainingslog | vorher | Strong / Hevy |
|---|---|---|---|
| Satz unverändert abhaken | 1 | 1 | 1 |
| Gewicht ändern (52,5 → 55) und abhaken | 4 | 8 | etwa 4* |
| Wdh ändern (10 → 9, 8 → 7) und abhaken | 3 | 4–5 | etwa 3* |
| Neues Gewicht in allen 3 Sätzen | 6, weil Satz 2 und 3 mitziehen; mit „Steigern“ 4 | 24 | nicht belegt; ohne Übernahme etwa 12* |
| Satz mit denselben Werten hinzufügen | 2 („+ Satz“ kopiert den letzten Satz) | 2 | 2 |
| Satz mit anderen Werten hinzufügen (70 × 7 → 67,5 × 6) | 9 | 12 | etwa 8–9* |
| Neue Übung, 3 gleiche Sätze (60 × 15, ab der leeren Karte) | 9; dazu 2 zum Hinzufügen, mit Suche 7 | 21 | nicht belegt |
| Ausdauer: km ändern (5,4 → 6,1) und abhaken | 5; min (32 → 35) 4; beides 8 | – | – |
| Abgehakten Satz korrigieren | 2, der Haken bleibt | – | – |
| Falsch abgehakten Satz lösen | 1, aber der Timer läuft weiter; erneutes Abhaken startet ihn mit voller Dauer | 1 | 1 |
| Abgehakten Satz entfernen | 2 (Rückfrage nennt die Werte), nur der letzte, ohne Rückgängig | 1, ohne Rückfrage | Wischen auf der Zeile |

Der gym-tester kam bei der neuen Übung auf 10 Tipps; die Zahl hängt davon ab, wie viele Ziffern die Werte haben.

\* Weiterhin nicht belegt. Gezielt gesucht wurde, ob bei Strong und Hevy eine Eingabe den grauen Vorschlagswert direkt ersetzt. Hevy schreibt nur, dass Gewicht und Wdh vom letzten Mal automatisch eingetragen werden und sich ändern lassen; ob als Platzhalter oder als echter Wert, steht dort nicht. Das Hilfe-Center von Hevy blieb gesperrt. Strong beschreibt in seiner Hilfe nur „Werte eintragen, Haken setzen“. Die Zahlen bleiben deshalb Annahmen aus allgemeinem Wissen. Den Wert „etwa 7“ aus der ersten Prüfung für einen abweichenden neuen Satz habe ich neu gerechnet: „+ Satz“, Feld, vier Tasten, Wechsel ins Wdh-Feld (bei Strong über die „Weiter“-Taste), eine Taste, Haken.

**Bedienung (Messwerte in App-Pixeln bei 390 px)**
- Tap-Flächen: Alles in der Satz-Erfassung hat jetzt mindestens 44 px. Die Felder messen 105 × 48 (bei 375 px: 97 × 48), der Haken 52 × 48. „+ Satz“ und „− Satz“ sind je 63 × 44 groß, mit weiterhin nur 8 px Abstand. „Steigern“ misst 149 × 44, das ✕ 44 × 44, „Verwerfen“ 91 × 44 und die Timer-Knöpfe 48 × 44 bzw. 62 × 44. Die Satznummer (26 × 26) ist nicht antippbar.
- Markieren beim Antippen: Nach dem Antippen war der Inhalt in weniger als 50 ms markiert (Auswahl von 0 bis zur Textlänge), und die erste Ziffer ersetzte ihn. Das gilt für kg, Wdh, min und km. Einmal kam die Testeingabe schneller als die Markierung, und aus „10“ wurde „190“. Auf dem iPhone ist das kaum zu schaffen, weil erst die Tastatur einfährt. Ob iOS die Markierung behält oder beim Loslassen den Cursor setzt und das Kopieren-Menü zeigt, lässt sich nur auf dem Gerät prüfen. Hält sie nicht, kostet das nicht nur Tipps: Es entstehen falsche Werte wie 190, die sich leicht übersehen lassen.
- Übernahme in die folgenden Sätze: 55 in Satz 1 setzte Satz 2 und 3 sofort mit. Abweichende und abgehakte Sätze blieben unverändert: Bei Schulterdrücken (10 → 9) blieben 9 und 8 stehen. Bei Wadenheben ohne Vorwerte füllten 60 und 15 alle drei Sätze. Leere Sätze lassen sich nicht mehr abhaken; es erscheint „Erst die Wiederholungen eintragen“. Der Hinweis setzt den Cursor aber nicht ins Feld, das Feld muss man selbst antippen.
- Daumen: unverändert. Während der Pause belegen Timer (y 664–770) und Tab-Leiste die unteren 180 px. Der dritte Satz der zweiten Übung lag unter dem Timer, man muss also einmal wischen.
- Lesbarkeit: Die Felder sind 18 px groß und fett. Beim Laufen steht „Letztes Mal“ samt Tempo auf zwei Zeilen, sonst bricht nichts um, und bei 375 px läuft nichts über.
- Rückmeldung: Nach dem Abhaken leuchten Zeile und Haken gold, der Zähler steigt, und der Timer startet. Der Rekord-Hinweis erscheint jetzt auch bei Ausdauer („Neuer Rekord: 6,1 km bei Laufen“) und verdeckt weiterhin Titel und „Verwerfen“. „Steigern“ ändert die Werte ohne Hinweis, und die Karte springt etwa 50 px hoch. Die Rückfrage bei „− Satz“ nennt die Werte des abgehakten Satzes; nach dem Entfernen erscheint keine Meldung. Nach einem Neuladen sind Werte und Haken erhalten, der Timer fehlt.

**Was die anderen besser machen**
- Satztypen: Strong, Hevy und JEFIT öffnen sie über die Satznummer (Aufwärmen, Drop, Versagen). Bei Hevy lassen sich Aufwärmsätze per Einstellung aus den Kennzahlen nehmen, der Verlauf wird dann neu berechnet. Bei uns zählen sie bei Rekorden, Kampfkraft und Fortschrittskurve voll mit und verhindern den Steigerungsvorschlag (Idee 14).
- Einen einzelnen Satz löscht man bei Strong, Hevy und Fitbod per Wischen auf der Zeile. Bei uns geht nur der letzte, inzwischen mit Rückfrage, aber ohne Rückgängig (Idee 15).
- Der Timer hängt nicht am Satz: Ein versehentlicher Haken setzt die laufende Pause zurück (Idee 16).
- Extras: RPE (Strong, Hevy), Scheiben- und Aufwärmrechner, ein Abhak-Ton mit eigener Lautstärke (Hevy), Haptik und Apple Watch.

**Was wir besser machen**
- Eine Änderung zieht in die folgenden offenen Sätze mit. Ein neues Gewicht in drei Sätzen kostet 6 Tipps, eine neue Übung mit drei gleichen Sätzen 9. Auf keiner gelesenen Seite von Strong oder Hevy steht etwas Vergleichbares; Hevy übernimmt per Tipp nur den Vorwert vom letzten Mal.
- „Steigern“ setzt mit einem Tipp alle offenen Sätze auf das neue Gewicht.
- Die vorausgefüllten Werte sind echte Werte. Ein unveränderter Satz kostet 1 Tipp, nach einem Neuladen ist alles da, und abgehakte Sätze lassen sich mit 2 Tipps direkt korrigieren.
- Alles läuft offline, ohne Konto und ohne Bezahlschranke.

**Urteil: gleichauf.** Was im Studio ständig vorkommt, kostet jetzt so viele Tipps, wie man nach allgemeinem Wissen bei Strong und Hevy annimmt: ein Satz unverändert, Gewicht oder Wdh ändern, ein Satz anhängen. Beim Ändern mehrerer Sätze und bei neuen Übungen braucht unsere App deutlich weniger. Für „vorne“ reicht es noch nicht: Es fehlen Aufwärmsätze, die Rekorde, Kampfkraft und den Steigerungsvorschlag verfälschen, und das gezielte Löschen eines Satzes. Außerdem ist das Markieren auf dem iPhone noch nicht geprüft, und die Tipp-Zahlen von Strong und Hevy sind nicht belegt. Mit Idee 14 und einer bestandenen Prüfung auf dem iPhone wäre die Funktion vorne.

**Lücken, die sich nicht lohnen:** RPE kostet pro Satz zusätzliche Tipps. Der Scheibenrechner bringt einer Person, die ihre Scheiben kennt, wenig. Drop- und Versagenssätze sind seltener als Aufwärmsätze. Ein Abhak-Ton wie bei Hevy brächte neben Gold, Zähler und Timer kaum etwas. Haptik geht nicht, weil Safari `navigator.vibrate` nicht unterstützt. Apple Watch und Live Activity sind als PWA nicht möglich.

**Quellen**
- Selbst gelesen (erste Prüfung):
  - Strong Help Center, Kategorie „Record a Workout with Strong“: https://help.strongapp.io/category/165-logging-a-workout (bei der zweiten Prüfung erneut gelesen)
  - Strong Help Center, „How do I perform a workout with Strong?“: https://help.strongapp.io/article/229-my-first-workout (erneut gelesen; nichts zu Platzhaltern oder zum Ersetzen)
  - Strong Help Center, „About Warm-up, Drop Sets and Failure Sets“: https://help.strongapp.io/article/166-set-tags
  - Strong Help Center, „About RPE (Rate of Perceived Exertion)“: https://help.strongapp.io/article/230-about-rpe
  - Strong Help Center, „About Plate Calculator“: https://help.strongapp.io/article/169-plate-calculator
  - Strong Help Center, „About Warm-up Calculator“: https://help.strongapp.io/article/171-warm-up-calculator
  - Strong im App Store (UK, Beschreibung und Versionshinweise): https://apps.apple.com/gb/app/id464254577 (bei der zweiten Prüfung nicht erreichbar, Fehler 429)
  - Strong-Website: https://www.strong.app/
  - Hevy, „Track Workouts“: https://www.hevyapp.com/features/track-workouts/
  - Hevy, „Workout Set Types“: https://www.hevyapp.com/features/workout-set-types/
  - Hevy, „Workout Settings“: https://www.hevyapp.com/features/workout-settings/ (erneut gelesen: Abhak-Ton mit eigener Lautstärke, Aufwärmsätze aus den Kennzahlen ausschließbar, Bildschirm bleibt an)
  - Hevy, „Track Exercises“: https://www.hevyapp.com/features/track-exercises/ (erneut gelesen: Vorwerte in der Spalte PREVIOUS, ein Tipp übernimmt sie)
  - JEFIT Blog, „New in Jefit: Customize Your Workouts Sets with Set Types“: https://www.jefit.com/blog/set-types-new-in-jefit-customize-your-workouts-with-set-types
  - RepReturn, „Strong App Review“ (laut eigener Angabe kein Testlabor): https://repreturn.com/strong-app-review/
- Selbst gelesen (zweite Prüfung):
  - Hevy, „How to Write Sets and Reps“: https://www.hevyapp.com/features/how-to-write-sets-and-reps (Werte vom letzten Mal werden automatisch eingetragen und lassen sich ändern; ob als Platzhalter, steht dort nicht)
  - Strong Help Center, „What is a Template and how do I use them?“: https://help.strongapp.io/article/105-about-templates (nichts zu den Feldern)
  - Strong Help Center, „About Focus Metric“: https://help.strongapp.io/article/226-focus-metric (Vergleich einer Kennzahl mit der letzten Einheit, nichts zu den Feldern)
  - Avante IO, „App Design: The Strong App“ (2018): https://enterprise.avante.io/blog/2018/10/the-strong-exersice-tracker-app (Vorwerte werden angezeigt; die „Weiter“-Taste springt ins nächste Feld)
  - MakeUseOf, „I Use This App to Track My Progress at the Gym“ (2024): https://www.makeuseof.com/using-strong-app-to-track-gym-progress/ (nichts zur Eingabe)
  - GitHub, Issue „Active workout: add a per-set "Previous" column“ eines anderen Projekts: https://github.com/traxon99/jim/issues/323 (ein Entwickler beschreibt, dass Strong und Hevy die Vorwerte pro Satz in einer eigenen Spalte zeigen; nur ein Zweitbeleg)
- Nur aus Suchergebnissen (Seite gesperrt oder nicht geöffnet):
  - Hevy Help Center, „Previous Workout Values“: https://help.hevyapp.com/hc/en-us/articles/34105442929943 (Fehler 403)
  - Hevy Help Center, „How to Use Previous Workout Values to Improve Performance in Hevy“: https://help.hevyapp.com/hc/en-us/articles/36011896355479 (Fehler 403)
  - Hevy Help Center, „Set Types in Hevy Explained“: https://help.hevyapp.com/hc/en-us/articles/34896293707927-Set-Types-in-Hevy-Explained-Drop-Sets-Warm-Up-Sets-and-More
  - Strong bei Google Play: https://play.google.com/store/apps/details?id=io.strongapp.strong (Nutzerstimmen laut Suche: Werte vom letzten Mal vorausgefüllt; die Seite selbst war nicht lesbar)
  - Fitbod Help, „Editing Workouts in Fitbod“: https://help.fitbod.me/hc/en-us/articles/360006335593-Editing-Workouts-in-Fitbod
  - Fitbod Help, „Warm Up Sets“: https://help.fitbod.me/hc/en-us/articles/360006337634-Warm-Up-Sets
  - Everfit Help, „Client App: Autofill Weights & Reps“ (andere App: graue Vorschläge, ein Eintrag füllt die leeren Sätze darunter): https://help.everfit.io/en/articles/14617776-client-app-autofill-weights-reps
  - Vergleichsartikel von setgraph.app (SEO-Texte, schwache Belege): https://setgraph.app/ai-blog/hevy-vs-strong
  - Forenstimmen: Auch bei der zweiten Suche waren keine echten Reddit-Threads zu finden.
- Allgemeines Wissen, nicht nachgelesen: graue Vorschlagswerte in den Feldern von Strong und Hevy, die eine Eingabe direkt ersetzt; die eigene Zahlentastatur von Strong; Haptik beim Abhaken in Strong und Hevy.
