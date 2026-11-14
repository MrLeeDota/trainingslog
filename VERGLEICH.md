# Funktionsvergleich

Wie gut ist jede Funktion des Trainingslogs im Vergleich zu führenden Fitness-Apps (Strong, Hevy und je nach Thema Fitbod, JEFIT, Strava oder Apple Fitness)? Gepflegt vom Agenten `funktions-tester`, der pro Durchlauf eine Funktion prüft. Urteil: hinten, gleichauf oder vorne.

| Funktion | Urteil | Wichtigste Lücke | Zuletzt geprüft |
|---|---|---|---|
| Satz-Erfassung | gleichauf | Keine Aufwärmsätze (Idee 14); ob das Markieren beim Antippen auf dem iPhone hält, ist ungeprüft | 14.11.2026 |
| „Letztes Mal“ | vorne | „Ziel heute“ ist nur Text: Das Ziel zu schaffen kostet 8–11 Tipps pro Übung, mit Übernahme per Tipp wären es 4–5 (Idee 31) | 14.11.2026 |
| Pausen-Timer | gleichauf | Das Pausenende meldet nur ein Piepton (still bei Stummschalter, im Hintergrund abgesagt) und 8 s Gold. Nach Neuladen oder Tab-Wechsel steht das Training oben statt beim markierten Satz (Ideen 42, 43) | 14.11.2026 |
| Vorlagen | offen | – | – |
| Übungsverwaltung | offen | – | – |
| Verlauf | offen | – | – |
| Fortschritt & Rekorde | offen | – | – |
| Spielelemente | offen | – | – |
| Ausdauer-Erfassung | offen | – | – |
| Backup & Export | offen | – | – |

## Befunde

### Pausen-Timer

Erste Prüfung am 14.11.2026, nach den Ideen 36–38. Getestet in Chrome am PC im Handy-Rahmen (390 × 844, Gegenprobe 375 × 667) auf localhost, mit echten Klicks und Tastatureingaben. Über Vorlagen → „+ Programm aus der Bibliothek“ → „Arnold-Split an 5 Tagen“ habe ich „Brust & Rücken A“ und „Schultern & Arme A“ übernommen. Für vorausgefüllte Felder kamen per Skript zwei Trainings dazu (Brust & Rücken A am 10.11.2026, Schultern & Arme A am 11.11.2026, gespeichert mit `save({put:id})`). „Brust & Rücken A“ (mit Tausch des Kurzhantel-Pullovers gegen Schrägbankdrücken) und die eigene Vorlage Push ohne Programm habe ich gestartet und am Ende verworfen. Danach war der alte Stand wiederhergestellt: 23 Trainings, 22 Übungen, 7 Vorlagen und die Einstellungen, nach dem Neuladen identisch. Das Verlassen der App ließ sich im Rahmen nicht echt auslösen; ich habe es per Skript nachgestellt (Sichtbarkeit „hidden“, dann „visible“).

**Tipps pro Ablauf**

| Ablauf | Trainingslog | Strong | Hevy |
|---|---|---|---|
| Satz abhaken, Pause startet mit der passenden Dauer (Arnold-Split) | 1, die Pause kommt aus dem Programm (Bankdrücken 3:00, Klimmzüge 2:30) | 1, wenn die Pause der Übung vorher eingestellt ist | 1, ebenso |
| Dasselbe in einer eigenen Vorlage ohne Programm (Bankdrücken 3:00 statt 1:30) | 1 + 6 (+15) pro Pause | 1 | 1 |
| Pause um 15 s ändern | 1 | Dauer im Vollbild ändern, erst ein Tipp auf den Timer; ±-Knöpfe nennt die Hilfe nicht | 1 |
| Pause beenden | 1 („Weiter“) | 2 (Timer antippen, „Skip“) | 1* |
| Versehentlich abgehakt, Haken lösen | 1, die Pause davor läuft mit Restzeit weiter (getestet: 2:30 statt neuer 3:00) | nicht belegt | nicht belegt |
| Übung getauscht, Satz abhaken | 1, Pause des Programmplatzes (1:30 vom Pullover) | – | – |
| Nach Neuladen mitten in der Pause weiter zum nächsten Satz | 0 für den Timer, aber 1–3 Wischer zum markierten Satz; der Ton kommt erst nach einem Tipp auf einen Knopf | Position bleibt* | Position bleibt* |
| Nach einem Abstecher in den Verlauf zurück ins Training | 1 Tipp auf den Tab und 1 Wischer, weil das Training oben beginnt | – | – |

\* Allgemeines Wissen, nicht nachgelesen.

**Bedienung (Messwerte in App-Pixeln)**
- Start und Dauer: Nach jedem Kraft-Satz startet der Timer sofort mit „Pause · Programm“ und der Pause aus der Programm-Zeile darüber (Bankdrücken „Pause 3:00 min“ → 3:00, Klimmzüge 2:30, getauschte Übung 1:30). Ohne Programm steht nur „Pause“ und die Einstellung (1:30). Der Satz unter der Einstellung im Verlauf erklärt das: „Bei Vorlagen aus einem Programm gilt die Pause des Programms.“ −15 und +15 ändern Restzeit und Gesamtdauer, der Ton wird jedes Mal neu geplant (3 Töne).
- Tap-Flächen: −15 und +15 je 48 × 44, „Weiter“ 62 × 44, zwischen −15 und +15 nur 6 px Abstand. Die Auswahl der Pausendauer misst 109 × 47.
- Daumen: Die Knöpfe liegen bei y 705–749 von 844 (Gegenprobe y 528–572 von 667), also tief im unteren Drittel. Timer (351 × 106 bzw. 336 × 106) und Tab-Leiste (67) belegen zusammen 180 px, das sind 21 % des Bildschirms bzw. 27 % auf dem SE.
- Lesbarkeit: Die Restzeit steht 34 px groß in Gold, „Pause · Programm“ 13 px blassblau. Gegen das hellere Blau oben in der Karte gerechnet ergibt das einen Kontrast von etwa 7,1 : 1 bzw. 5,0 : 1. „Pause vorbei · Nächster Satz!“ steht 24 px groß mit pulsierendem Goldrand und verschwindet nach 8 s. Nichts bricht um, auch nicht bei 375 px.
- Nächster Satz (Idee 37): Nach dem Abhaken ist der nächste offene Satz orange markiert. Innerhalb einer Übung scrollt die App nur, wenn der Satz verdeckt ist (einmal 76 px, sonst gar nicht). Nach dem letzten Bankdrücken-Satz rückte die Karte „Klimmzüge“ um 475 px (SE: 399 px) direkt unter die Kopfzeile, „Letztes Mal“, Programm und Ziel waren in der Pause lesbar. Der Hinweis mit „Rückgängig“ sitzt unmittelbar über dem Timer, ohne zu überlappen, und „Training beenden & speichern“ bleibt über dem Timer erreichbar (589–644 gegen 664).
- Neuladen und App-Wechsel (Idee 38): Nach einem Neuladen standen Restzeit, „Pause · Programm“ und die Markierung richtig da, die Seite aber ganz oben, der markierte Satz außerhalb des Bildschirms. Ein Tipp ins Wdh-Feld gab den Ton nicht frei, erst +15 (danach 3 Töne geplant). Wer nach dem Neuladen nur wartet, bekommt also keinen Ton. Beim nachgestellten Verlassen der App wurden die Töne abgesagt, bei der Rückkehr für die Restzeit neu geplant.
- Andere Ansichten: Der Timer bleibt in allen Tabs sichtbar. Ein Tab-Wechsel setzt das Training aber an den Anfang zurück (`window.scrollTo(0, 0)` in der Aktion `tab`), der markierte Satz lag danach bei y 888 von 844. Sheets wie „Übung tauschen“ liegen über dem Timer (z-index 60 gegen 40), dort sieht man die Restzeit nicht.
- Rückmeldung: Haken und Zeile leuchten gold, der Timer fährt sofort ein, Rücknahme und ±15 sind sofort zu sehen. Nach dem Lösen eines Hakens verschwindet allerdings die Markierung des nächsten Satzes ganz (Nebenbefund, siehe unten). Konsole: keine Meldungen. Der Wake Lock war im Chrome während des Trainings aktiv.
- Supersätze im Arnold-Stil (Programm-Hinweis: Bankdrücken und Klimmzüge im Wechsel, danach etwa 2 min): Jeder Haken startet die volle Pause der Übung neu (3:00, dann 2:30). Wer im Wechsel trainiert, tippt „Weiter“ oder ignoriert den Timer. Das ist die abgelehnte Idee 39.

**Was die anderen besser machen**
- Das Pausenende kommt auch an, wenn man nicht hinschaut. Hevy zeigt den Timer per Live Activity auf dem Sperrbildschirm, mit ±15 und Überspringen, und schickt am Ende eine Mitteilung. Fitbod schickt eine Mitteilung statt des Tons, wenn man die App verlässt oder der Bildschirm ausgeht (nur Suche). StrongLifts zeigt ein Banner und lässt die Uhr vibrieren. Strong läuft auf der Uhr, dort ändert man die laufende Pause mit der Digital Crown; ein Nutzer berichtet, dass er Strongs Ton über AirPods hörte (nur Suche). Bei uns gibt es nur den Piepton als Web Audio. Den spielt Safari als „ambient“: still bei eingeschaltetem Stummschalter, im Hintergrund abgesagt, ohne Vibration. Dazu kommt das goldene „Pause vorbei“ für 8 s. Auch native Apps sind bei Stummschalter nur per Mitteilung oder Uhr zu spüren (RepCount, Strongsplit, nur Suche).
- Pause pro Übung auch ohne Programm: Hevy (5 s bis 5 min oder aus) und Strong (getrennt für Aufwärm- und Arbeitssätze) stellt man von Hand ein, MacroFactor gibt Standardwerte nach Übungsart, Fitbod erzeugt sie selbst. Bei uns gilt außerhalb von Programmen eine Pause für alles.
- Ton-Auswahl und eigene Lautstärke (Hevy, Strong), Supersätze mit Sprung zum Partner (Hevy „Smart Superset Scrolling“, MCI „Group as super set“).
- Ein UX-Vergleich von ScreensDesign empfiehlt, während der Pause den nächsten Satz zu zeigen, die Rückkehr zum nächsten Satz zu testen und den Ton nicht als einziges Signal zu nutzen. Den ersten Punkt erfüllt die App mit Idee 37, den zweiten nach Neuladen und Tab-Wechsel nicht.

**Was wir besser machen**
- Die richtige Pause kommt ohne Einstellen aus dem Programm, pro Übungsplatz, auch für getauschte Übungen. Im Arnold-Split weicht sie an 15 von 30 Plätzen von 1:30 ab. Ohne Idee 36 kostete jede dieser Pausen bis zu 6 Tipps, bei Hevy und Strong muss man sie einmal pro Übung von Hand einstellen, Fitbod macht es nur im Abo mit eigenem Plan.
- −15, +15 und „Weiter“ kosten je 1 Tipp und liegen in der Daumenzone; bei Strong öffnet man laut Hilfe erst das Vollbild.
- Ein versehentlicher Haken lässt sich mit 1 Tipp samt Pause zurücknehmen, die alte Pause läuft mit Restzeit weiter. Bei Strong und Hevy ist das nicht belegt.
- Der nächste Satz ist markiert, und die nächste Übung rückt nach dem letzten Satz von selbst nach oben, sodass „Letztes Mal“ und Ziel in der Pause lesbar sind. Die Pause übersteht ein Neuladen, der Bildschirm bleibt an. Alles kostenlos und offline.

**Urteil: gleichauf.** Im Ablauf im Studio (abhaken, passende Pause, anpassen, überspringen, Fehler zurücknehmen) ist die App so schnell wie Strong und Hevy, beim Arnold-Split dank Programm-Pause schneller als jede App, in der man die Pausen erst einstellt. Was ein Pausen-Timer vor allem leisten muss, kann sie als PWA aber nur halb: das Ende melden, wenn man nicht hinschaut oder das iPhone lautlos ist. Strong, Hevy, Fitbod und StrongLifts lösen das mit Mitteilung, Live Activity oder Uhr. Dazu kommt, dass man nach einem Neuladen oder einem Tab-Wechsel den nächsten Satz suchen muss und der Ton nach dem Neuladen erst nach einem Knopf-Tipp kommt; das lässt sich beheben (Ideen 42 und 43). Ob der Piepton im Studio überhaupt zu hören ist, entscheidet sich auf dem iPhone und ist nicht geprüft.

**Lücken, die nicht vorgeschlagen werden:** Mitteilung bei gesperrtem Bildschirm, Live Activity, Uhr und Vibration gehen als PWA ohne Push-Server nicht (Safari kennt `navigator.vibrate` nicht). Eine Pause pro Übung außerhalb von Programmen, auch automatisch nach Übungsart wie bei MacroFactor (die Bibliothek kennt `grunduebung`), berührt die abgelehnte Idee 8; der Nutzer trainiert mit Programm-Vorlagen. Supersätze (39), Überzeit (40) und Vorwarnung (41) sind abgelehnt. Eine Ton-Auswahl bringt wenig, die Lautstärke folgt dem iPhone. Die Restzeit in Sheets anzuzeigen lohnt kaum, weil „Übung tauschen“ selten und nur kurz offen ist. Einen flacheren Timer schlage ich nicht vor: Die 34 px große Zeit ist von der Bank aus lesbar, und Idee 37 scrollt den nächsten Satz ohnehin frei.

**Nebenbefunde für die Hauptsitzung** (Fehlersuche gehört zum `gym-tester`)
- Beim Lösen eines Hakens verschwindet die Markierung des nächsten Satzes ganz, statt auf den gelösten Satz zurückzugehen: `index.html` Zeile 1596, `ui.next = s.done ? nextOpen(…) : null`.
- Nach „Weiter“ wird `S.active.rest` gelöscht, die Markierung übersteht dann kein Neuladen mehr (`keepRest()` speichert `next` nur bei laufender Pause). Klein.

**Quellen**
- Selbst gelesen (diese Prüfung):
  - ScreensDesign, „Rest timer UX: keep the next set within reach“ (ohne Datum; nennt JEFIT, Zing AI, Boostcamp u. a., nicht Strong und Hevy): https://screensdesign.com/articles/workout-app-rest-timer-controls-ux/
  - Strong Help Center, Kategorie „Strong for Apple Watch“: https://help.strongapp.io/category/129-apple-watch
  - Strong Help Center, „Perform a Workout with Strong for Apple Watch (Overview)“: https://help.strongapp.io/article/224-workout-on-apple-watch
  - JEFIT Blog, „Best Apps to Log Sets and Reps on Smartwatch in 2026“ (16.03.2026; zum Timer von Strong steht dort nichts): https://www.jefit.com/blog/best-apps-to-log-sets-and-reps-on-smartwatch-in-2026-top-7-tested
- Nur aus Suchergebnissen:
  - Fitbod Help, Artikel zum Rest Timer (Fehler 403): https://help.fitbod.me/hc/en-us/articles/360006340194
  - Fitbod Help, „Apple Watch“: https://help.fitbod.me/hc/en-us/articles/360006499194-Apple-Watch
  - Bevel, Wunsch „Sound when rest period ends“ (Nutzer über Strong und AirPods): https://feedback.bevel.health/feature-requests/p/sound-when-rest-period-ends
  - Strongsplit, Wunsch „rest period over notification“ (Stummschalter, Critical Alerts): https://strongsplit.userjot.com/board/p/rest-period-over-notification
  - RepCount Help, „No sound on the timer“: https://intercom.help/repcount/en/articles/11363383-no-sound-on-the-timer-here-is-how-to-fix-it
  - Arvo, Apple-Watch-Seite (Tabelle eines Wettbewerbers, Strong ohne Live Activity): https://arvo.guru/apple-watch-app
  - Hevy Help Center, „How to Use Hevy's Live Activity“: https://help.hevyapp.com/hc/en-us/articles/35649846517399-How-to-Use-Hevy-s-Live-Activity-on-iOS-and-Android
  - Forenstimmen: Echte Reddit-Threads zum Pausen-Timer waren nicht zu finden.
- Vom `produkt-scout` am selben Tag gelesen (Einzelheiten in `APPS.md`, Abschnitt „Pausen-Timer“): Hevy „Workout Rest Timer“, „Workout Settings“, „Live Activity“, „Supersets“; Strong „About Rest Timer“; MCI-Roadmap und Wunschliste; MacroFactor; MyFitCoach; StrongLifts; WebKit-Fehler 264473; What PWA Can Do Today.
- Allgemeines Wissen, nicht nachgelesen: „Skip“ in der Hevy-App mit 1 Tipp; native Apps behalten ihre Position nach einem App-Wechsel.

### „Letztes Mal“

Zweite Prüfung am 14.11.2026, nach den Ideen 17–22, 25 und 30 (erste Prüfung am selben Tag: „gleichauf“). Getestet in Chrome am PC im Handy-Rahmen (390 × 844) auf localhost, mit echten Klicks und Tastatureingaben. Über Vorlagen → „+ Programm aus der Bibliothek“ wurden die Arnold-Split-Einheiten „Brust & Rücken A“, „Schultern & Arme A“ und „Schultern & Arme B“ übernommen. Für einen realistischen Verlauf habe ich die vorhandenen Testtrainings vorübergehend herausgenommen und per Skript neun Arnold-Split-Trainings vom 22.09. bis 10.11.2026 angelegt (mit `save({put:id})`). Darin: Bankdrücken zweimal 80 × 8, 8, 8, 8, Klimmzüge zuletzt ohne Gewicht 4 × 10, Kurzhantel-Schrägbankdrücken 26 × 10, 9, 8, Langhantelrudern dreimal 70 kg mit Sätzen unter 6, Kurzhantel-Pullover zuletzt nur 2 Sätze, Stirndrücken zuletzt am 22.09. und Hängendes Beinheben nie. Ein Training „Brust & Rücken A“ wurde über den echten Ablauf gespeichert und im Verlauf korrigiert, drei weitere wurden gestartet und verworfen (B&R A, S&A A, S&A B, dazu die eigene Vorlage Push ohne Programm). Am Ende wurde der alte Stand wiederhergestellt (23 Trainings, 22 Übungen, 7 Vorlagen, Einstellungen; nach dem Neuladen verglichen). Nicht geprüft: iPhone (Schrift, Tastatur, Daumen), MCI aus eigener Anschauung.

**Tipps pro Ablauf**

| Ablauf | Tipps |
|---|---|
| Vorlage starten bis zum ersten abgehakten, unveränderten Satz | 2 |
| Bankdrücken: „Steigern: 82,5 kg“, dann 8, 7, 7, 6 Wdh | 9 (1 + 1 + 3 + 1 + 3) |
| Langhantelrudern: „Entlasten: 67,5 kg“, dann 8, 8, 7 Wdh | 10 (1 + 3 + 3 + 3) |
| Kurzhantel-Schrägbankdrücken: „Ziel heute: 11, 10, 9 Wdh“ schaffen (Felder zeigen 10, 9, 8) | 11 (4 + 4 + 3); stünde das Ziel in den Feldern, wären es 3, mit Übernahme per Tipp 4. Gerechnet: Bankdrücken (Ziel 8, 9, 8, 7) 8, Reverse Butterfly (15, 15, 14) 9 |
| Steigern oder Entlasten zurücknehmen | 1 (Tipp auf den Hinweis) |
| Übung tauschen (⇄, Ersatz wählen) | 2; neue Übung 60 × 12 in 3 Sätzen danach 9 |
| Gespeicherten Satz im Verlauf korrigieren | 4 (Bearbeiten, Feld, Ziffer, Sichern), „Letztes Mal“ zeigt den neuen Wert sofort |
| Arnold-Einheit als Vorlage übernehmen | 4 für die erste (Tab, Programm, Arnold-Split, Übernehmen) plus Scrollen, je 1 für weitere |

**Bedienung (Messwerte in App-Pixeln bei 390 px)**
- Regeln: Alle Vorschläge stimmten mit `CLAUDE.md` überein. „Steigern: 82,5 kg“ nach zweimal 4 × 8 bei 6–8 Wdh (Idee 17), Arnold-Drücken 18 → 20 kg (Kurzhantel-Grundübung), Seitheben 10 → 12 kg (Kurzhantel-Isolation ab 10 kg, +20 %), Pallof-Press 15 → 17,5 kg. „Entlasten: 67,5 kg“ mit dem Grund „3 Einheiten ohne Fortschritt“ (Idee 25). „Ziel heute“ zeigte z. B. 11, 10, 9 und 12, 11, 10, bei Wdh über dem Bereich hält es (8, 9, 8, 7). Kurzhantel-Pullover nach 2 Sätzen: 3 vorausgefüllte Sätze nach dem Programm (Idee 18), „Steigern“ blieb aus, weil die letzte Einheit nur 2 Sätze hatte. Die getauschte Übung zeigte „Programm wie Kurzhantel-Pullover: 3 × 10-12 Wdh“ mit 3 leeren Sätzen (Idee 22), auch nach dem Neuladen.
- Die eigene Vorlage Push ohne Programm zeigt für dasselbe Bankdrücken „Ziel heute: 9, 10, 8, 7“ (Obergrenze 10 statt 8). Das ist gewollt, für den Nutzer aber eine zweite Zielvorgabe zur selben Übung.
- Tap-Flächen: „Steigern“ 151 × 44, „Entlasten“ 161 × 44, ⇄ und ✕ je 44 × 44, der Hinweis mit „Rückgängig“ 298 × 47. „Ziel heute“ ist nur Text (18 px hoch), nicht antippbar.
- Lesbarkeit: „Letztes Mal“ grün, „Programm“ gelb, „Ziel heute“ blassblau mit goldenen Zahlen, alle 13 px; Kontrast auf dem Kartenblau 11,4 : 1, 10,2 : 1 und 7,3 : 1. Weil ⇄ und ✕ rechts neben dem ganzen Kopf stehen, hat der Text nur 215 der 311 px Kartenbreite. „Letztes Mal“ und „Programm“ brechen deshalb in jeder Karte auf zwei Zeilen um (je 35 px), obwohl sie mit 221–294 px in die volle Breite passen würden. Vom Kartenrand bis zur Satztabelle sind es 150–209 px, eine Karte mit 4 Sätzen ist 461–493 px hoch. Es passen also keine zwei Übungen auf den Bildschirm (844 px); „Schultern & Arme B“ mit 7 Übungen ist 3518 px lang.
- Daumen: „Steigern“ und „Entlasten“ stehen oben in der Karte (bei Karte am Bildschirmrand oben etwa y 278 von 844, also im oberen Drittel). Der Hinweis mit „Rückgängig“ erscheint unten (y 533–647), gut erreichbar. Der Rekord-Hinweis oben verdeckt weiter Titel und „Verwerfen“.
- Rückmeldung: Steigern und Entlasten melden „Gewicht auf 82,5 kg erhöht · Rückgängig“; die Karte springt um 52 px (Steigern) bzw. etwa 70 px (Entlasten samt Begründungszeile). „Steigern“ nennt keinen Grund, „Entlasten“ schon. Ist „Ziel heute“ geschafft, ändert sich nichts an der Zeile, und „Training geschafft“ zeigt nur Rekorde, nicht „besser als letztes Mal“. Nach dem Neuladen mitten im Training war alles erhalten (Werte, Haken, Tausch).
- Körpergewicht: Klimmzüge zweimal 4 × 10 ohne Gewicht, das Programm sieht dann laut seinem Hinweis Zusatzgewicht vor. Die App zeigt nur „Ziel heute: 4 × 10 Wdh“, also dasselbe wie letztes Mal; der Hinweis des Programms an der Übung (`hinweis`) erscheint weder im Training noch im Programm-Sheet.
- Lange Pause: Stirndrücken zuletzt am 22.09. (53 Tage). Die Zeile zeigt „Letztes Mal (Di., 22.09.)“ ohne Hinweis aufs Alter, die Felder 30 × 10, 10, 9 und „Ziel heute: 11, 11, 10“, verlangt nach sieben Wochen Pause also mehr als vorher.
- Programm-Pause: Die Zeile sagt „Pause 3:00 min“ (Bankdrücken), der Timer läuft mit der allgemeinen Pause von 1:30. Das gehört zum Pausen-Timer (siehe unten).
- Konsole: keine Meldungen.

**Was die anderen besser machen**
- Hevy Trainer (nur Pro) erhöht das Gewicht nach derselben Regel wie wir (oberes Ende des Bereichs in allen Sätzen), markiert Übungen mit Fortschritt, erinnert bei Stillstand und plant auf Wunsch alle sechs Wochen eine Entlastungswoche mit 40 % weniger. Die Spalte „Previous“ zeigt das letzte Mal als Ziel; per Einstellung kommen die Vorwerte aus irgendeinem Training oder nur aus derselben Routine (Hilfe-Center gesperrt, nur Suche).
- Fitbod senkt die Vorschläge nach einer Trainingspause von selbst und lernt aus geänderten Werten (nur Suche). MCI arbeitet mit einem Krafttest samt „Reps in Reserve“-Regler und einer „Progression Engine“; was pro Satz vorgegeben wird, zeigen die Bildbeschreibungen nicht.
- Strong übernimmt nach dem Training auf Wunsch die Werte in die Vorlage („Update Values Only“) und zeigt Vorwerte pro Satz; Vorschläge zum Steigern gibt es laut Hilfe nicht.

**Was wir besser machen**
- Vorwerte sind echte Werte in den Feldern, ein unveränderter Satz kostet 1 Tipp, nach dem Neuladen ist alles da.
- „Steigern“ folgt jetzt dem Programm-Bereich, mit einem Gewichtsschritt passend zum Gerät, und „Entlasten“ greift nach drei Einheiten Stillstand. Beides kostet 1 Tipp, lässt sich mit 1 Tipp zurücknehmen und ist kostenlos und offline. Bei Hevy gibt es das nur im Pro-Abo (Trainer); einen Gewichtsschritt pro Gerät nennt Hevy nicht. Strong hat nichts davon.
- „Ziel heute“ setzt die doppelte Progression des Programms Satz für Satz um, und Programm-Richtwert, Satzzahl und Tausch passen zusammen.
- Korrekturen im Verlauf wirken sofort auf „Letztes Mal“.

**Urteil: vorne.** Im Alltag (Vorlage starten, Werte stimmen, 1 Tipp pro Satz) ist die App so schnell wie Strong und Hevy. Darüber hinaus sagt sie bei einem Programm wie dem Arnold-Split, wann gesteigert, gehalten oder entlastet wird, nach derselben Regel wie Hevy Trainer, aber ohne Abo und ohne Konto. Fitbod und MCI passen sich stärker automatisch an, kosten aber Abo und teils zusätzliche Eingaben. Schwächen bleiben: Das Ziel steht nur als Text da (wer es schafft, braucht 8–11 Tipps pro Übung statt 4–5), Körpergewichtsübungen bekommen am oberen Ende keinen Hinweis, nach einer langen Pause wird mehr verlangt als vorher, und der schmale Kopf kostet Scrollweg.

**Lücken, die nicht vorgeschlagen werden:** Die Pause aus dem Programm für den Timer zu übernehmen, berührt die abgelehnte Idee 8 und gehört zum Pausen-Timer; das sollte dessen Prüfung bewerten. Vorwerte nur aus derselben Vorlage (Hevy) bringen beim Arnold-Split nichts, weil Seitheben in A und B denselben Bereich hat. Eine feste Entlastungswoche alle sechs Wochen (Hevy Trainer) braucht einen Wochenplan, den die App nicht kennt; „Entlasten“ greift bei echtem Stillstand. RiR und Erholungsstand wie bei Fitbod und MCI kosten pro Satz zusätzliche Tipps. Nach „Steigern“ bleiben die Wdh beim alten Wert (z. B. 8); die untere Grenze vorzubelegen, kostet Tipps, wenn man mehr schafft.

**Quellen**
- Selbst gelesen (zweite Prüfung):
  - Hevy, „Workout Plan Generator“ (Hevy Trainer): https://www.hevyapp.com/features/workout-plan-generator/
  - Hevy, „Exercise Programming Options“ (Wdh-Bereiche, Ziel pro Satz): https://www.hevyapp.com/features/exercise-programming-options/
  - Hevy, „Progressive Overload“ (Spalte „Previous“): https://www.hevyapp.com/progressive-overload/
  - Strong Help Center, „Save a Workout as a Template / Update a Template when completing a Workout“: https://help.strongapp.io/article/177-update-template
  - ScreensDesign, App-Seite MCI (Bildbeschreibungen): https://screensdesign.com/apps/mci-personal-training-ai/
- Nur aus Suchergebnissen (Seiten mit Fehler 403):
  - Hevy Help Center, „Previous Workout Values“: https://help.hevyapp.com/hc/en-us/articles/34105442929943
  - Hevy Help Center, „Hevy Trainer Explained“: https://help.hevyapp.com/hc/en-us/articles/38385724273047-Hevy-Trainer-Explained-How-It-Builds-Your-Workout-Program
  - Fitbod Help, „How Fitbod Creates Your Workout“: https://help.fitbod.me/hc/en-us/articles/360004429814-How-Fitbod-Creates-Your-Workout
  - Fitbod Help, „Took a Break? Here's How to Recalibrate Your Fitbod Recommendations“: https://help.fitbod.me/hc/en-us/articles/34320813009431-Took-a-Break-Here-s-How-to-Recalibrate-Your-Fitbod-Recommendations
  - Fitbod Blog, „How Fitbod's AI Knows Exactly When You Should Lift Heavier And When To Recover“: https://fitbod.me/blog/how-fitbods-ai-knows-exactly-when-you-should-lift-heavier-and-when-to-recover/
  - Alpha Progression, „Alpha Progression vs. Hevy“ (Aussage eines Wettbewerbers): https://alphaprogression.com/en/blog/alpha-progression-vs-hevy
  - Forenstimmen: Auch diesmal waren keine echten Reddit-Threads zu finden.
- Aus der ersten Prüfung und von `produkt-scout` (Einzelheiten in `APPS.md`, Abschnitt „Letztes Mal“): MCI im App Store, WorldsApps-Bewertungen, Strong „Focus Metric“, Hevy „Track Exercises“.

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
