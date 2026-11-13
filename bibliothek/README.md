# Übungsbibliothek und Vorlagen

Dieser Ordner enthält Trainingsinhalte für den Trainingslog: eine Übungsbibliothek und Programm-Vorlagen. Die App nutzt die Dateien noch nicht. Das Format ist so gewählt, dass sie sich später leicht übernehmen lassen: Name, Kategorie und Erfassungsart heißen wie in der App (`name`, `cat`, `type`).

| Datei | Inhalt |
|---|---|
| `uebungen.json` | Übungen mit Kategorie, Erfassungsart, Gerät, Muskeln und Technik-Hinweisen |
| `vorlagen.json` | Programme mit Trainingseinheiten, Sätzen, Wiederholungen bzw. Dauer und Pausen |
| `README.md` | diese Beschreibung: Format, erlaubte Werte, fachliche Grundlagen, Quellen |

Gepflegt wird der Ordner vom Agenten `trainings-experte`.

## Allgemeine Regeln

- Gültiges JSON in UTF-8, ohne Kommentare.
- Jede Datei hat oben die Formatversion `"v": 1` (wie das Backup der App).
- IDs sind innerhalb einer Datei eindeutig. Jede Vorlage verweist nur auf Übungen, die es in `uebungen.json` gibt.
- Eine vergebene ID wird nie geändert und nie für etwas anderes wiederverwendet. Fällt eine Übung weg, bleibt ihre ID gesperrt.
- Neue Übungen und Vorlagen werden ergänzt, ohne bestehende IDs anzufassen.
- Das Format (Felder, Bedeutung, erlaubte Werte) wird nur nach Absprache geändert. Bei einer Änderung steigt `v`.

### So werden IDs gebildet

- Nur Kleinbuchstaben `a-z`, Ziffern und Bindestriche. Umlaute werden umschrieben: ä → ae, ö → oe, ü → ue, ß → ss.
- Aufbau: Bewegung, dann das Gerät als Endung, wenn es die Bewegung üblicherweise mit mehreren Geräten gibt: `bankdruecken-langhantel`, `bankdruecken-kurzhantel`, `rudern-kabel`.
- Ohne Geräte-Endung, wenn die Übung praktisch an ein Gerät gebunden ist oder ohne Gerät auskommt: `latzug`, `beinpresse`, `klimmzuege`, `plank`.
- Die ID muss nicht wörtlich zum Namen passen: „Langhantelrudern“ hat die ID `rudern-langhantel`, damit alle Rudervarianten nebeneinander stehen.
- Vorlagen: ein kurzer Name des Programms (`push-pull-legs`, `kraft-5x5`). Einheiten: ID der Vorlage plus Kürzel (`push-pull-legs-push`, `lauf-einsteiger-woche-3`).

## uebungen.json

```json
{
  "v": 1,
  "uebungen": [ { …Übung… }, … ]
}
```

Die Übungen stehen nach Kategorien geordnet (Reihenfolge wie unten), innerhalb einer Kategorie die Grundübungen zuerst.

### Felder einer Übung

| Feld | Typ | Pflicht | Bedeutung |
|---|---|---|---|
| `id` | Text | ja | stabile ID, siehe oben |
| `name` | Text | ja | deutscher Name, wie man ihn im Studio sagt; eindeutig in der Datei |
| `cat` | Text | ja | Kategorie, wie das Feld `cat` in der App |
| `type` | Text | ja | Erfassungsart, wie `type` in der App |
| `geraet` | Liste von Texten | ja | alles, was man für die Übung braucht |
| `muskeln` | Liste von Texten | ja | hauptsächlich beteiligte Muskeln, der wichtigste zuerst; bei Ausdauer und Padel leer |
| `grunduebung` | ja/nein | ja | `true` bei mehrgelenkigen Übungen mit viel Muskelmasse, die im Programm vorn stehen |
| `hinweise` | Liste von Texten | ja | 1 bis 2 kurze Technik-Hinweise |

### Erlaubte Werte

**`cat`:** `Brust`, `Schultern`, `Trizeps`, `Rücken`, `Bizeps`, `Beine`, `Rumpf`, `Ausdauer`, `Padel`. Bis auf `Rumpf` sind das die Kategorien aus den Startdaten der App; `Rumpf` ist neu (Bauch, seitliche Bauchmuskeln, Stabilität).

**`type`:**

| Wert | Bedeutung in der App | Satzfelder im Backup |
|---|---|---|
| `kraft` | Gewicht × Wiederholungen | `a` = kg (leer bei Körpergewicht), `b` = Wdh |
| `ausdauer` | Zeit + Strecke | `a` = min, `b` = km |
| `zeit` | nur Zeit | `a` = min |

Halteübungen wie Plank und Seitstütz sind `zeit`. Die App erfasst Minuten, 45 s werden also als `0,75` eingetragen.

**`geraet`:**

| Wert | Bedeutung |
|---|---|
| `Langhantel` | Langhantel oder SZ-Stange |
| `Kurzhantel` | Kurzhanteln; wo es passt, geht auch eine Kettlebell |
| `Maschine` | geführtes Gerät im Studio |
| `Kabel` | Kabelzug, auch Latzug-Station |
| `Körpergewicht` | der eigene Körper ist der Widerstand; in der App bleibt das kg-Feld leer, Zusatzgewicht kommt ins kg-Feld |
| `Bank` | Flach- oder Schrägbank |
| `Hyperextension-Bank` | Rückenstrecker-Bank |
| `Klimmzugstange` | Klimmzugstange |
| `Dipbarren` | Barren für Dips |
| `Medizinball` | Medizinball |
| `Springseil` | Springseil |
| `Laufstrecke` | draußen, auf der Bahn oder auf dem Laufband |
| `Fahrradergometer` | stationäres Rad |
| `Rudergerät` | Rudergerät |
| `Padelschläger` | Padelschläger und Bälle |
| `Padelplatz` | Padelplatz mit Wänden |

Weitere Gerätewerte dürfen ergänzt werden, wenn sie gleichzeitig in diese Tabelle eingetragen werden.

**`muskeln`:** `Brust`, `vordere Schulter`, `seitliche Schulter`, `hintere Schulter`, `Rotatorenmanschette`, `Trizeps`, `Bizeps`, `Unterarme`, `Latissimus`, `oberer Rücken`, `unterer Rücken`, `Bauch`, `seitliche Bauchmuskeln`, `Hüftbeuger`, `Gesäß`, `Quadrizeps`, `Beinbeuger`, `Adduktoren`, `Waden`. Das Feld ist für Auswertungen gedacht, z. B. Sätze pro Muskelgruppe und Woche.

### Beispiel

```json
{
  "id": "bankdruecken-langhantel",
  "name": "Bankdrücken",
  "cat": "Brust",
  "type": "kraft",
  "geraet": ["Langhantel", "Bank"],
  "muskeln": ["Brust", "vordere Schulter", "Trizeps"],
  "grunduebung": true,
  "hinweise": [
    "Schulterblätter zurück und nach unten ziehen, Füße fest am Boden, das Gesäß bleibt auf der Bank.",
    "Stange kontrolliert zur unteren Brust absenken, die Unterarme stehen dabei etwa senkrecht."
  ]
}
```

### Zuordnung zur App

Eine App-Übung ist `{id, name, cat, type}`. `name`, `cat` und `type` lassen sich unverändert übernehmen. Die App vergibt eigene, zufällige IDs (`uid()`); zuordnen lässt sich deshalb über den Namen. Die 15 Startübungen der App (`function seed` in `index.html`) stehen mit gleichem Namen, gleicher Kategorie und gleicher Erfassungsart in der Bibliothek:

| Name in der App | ID in der Bibliothek | Anmerkung |
|---|---|---|
| Bankdrücken | `bankdruecken-langhantel` | |
| Schrägbankdrücken | `schraegbankdruecken-langhantel` | mit Kurzhanteln: `schraegbankdruecken-kurzhantel` |
| Schulterdrücken | `schulterdruecken-langhantel` | stehend; sitzend mit Kurzhanteln: `schulterdruecken-kurzhantel` |
| Seitheben | `seitheben-kurzhantel` | |
| Dips | `dips` | |
| Klimmzüge | `klimmzuege` | |
| Langhantelrudern | `rudern-langhantel` | |
| Latzug | `latzug` | |
| Bizepscurls | `bizepscurls-langhantel` | mit Kurzhanteln: `bizepscurls-kurzhantel` (Kurzhantel-Curls) |
| Kniebeugen | `kniebeugen-langhantel` | |
| Kreuzheben | `kreuzheben-langhantel` | |
| Beinpresse | `beinpresse` | |
| Wadenheben | `wadenheben-stehend` | |
| Laufen | `laufen` | allgemeiner Lauf; gezielte Laufarten haben eigene Einträge |
| Padel-Drills | `padel-drills` | Sammeleintrag; einzelne Schläge haben eigene Einträge |

Bei Namen ohne Gerät (Bankdrücken, Kniebeugen, Schulterdrücken …) meint die Bibliothek die klassische Langhantel-Variante.

## vorlagen.json

```json
{
  "v": 1,
  "vorlagen": [ { …Vorlage… }, … ]
}
```

Eine **Vorlage** ist ein Programm (z. B. Push/Pull/Legs). Sie besteht aus **Einheiten**, also einzelnen Trainingstagen (Push, Pull, Legs). Eine Einheit enthält die **Übungen** in der Reihenfolge, in der sie trainiert werden, jeweils mit Sätzen, Wiederholungen bzw. Dauer und Pause.

### Felder einer Vorlage

| Feld | Typ | Pflicht | Bedeutung |
|---|---|---|---|
| `id` | Text | ja | stabile ID |
| `name` | Text | ja | Name des Programms |
| `beschreibung` | Text | ja | worum es geht, in 1 bis 3 Sätzen |
| `erfahrung` | Liste von Texten | ja | für wen es passt, siehe unten |
| `ziel` | Liste von Texten | ja | wofür es gedacht ist, siehe unten |
| `tageProWoche` | Liste von Zahlen | ja | mögliche Trainingstage pro Woche, z. B. `[3, 6]` |
| `wochenplan` | Text | ja | wie die Einheiten auf die Woche verteilt werden |
| `dauerWochen` | Zahl | nein | nur bei Plänen mit festem Ende, z. B. 9 Wochen |
| `aufwaermen` | Text | nein | Aufwärmen vor jeder Einheit |
| `intensitaet` | Text | nein | wie anstrengend die Sätze sein sollen; gilt für alle Übungen, solange eine Übung nichts anderes sagt |
| `progression` | Text | nein | wie gesteigert wird |
| `einheiten` | Liste | ja | die Trainingstage |

**`erfahrung`:** `einsteiger` (bis etwa 6 Monate regelmäßiges Training oder nach langer Pause), `fortgeschritten` (etwa 6 Monate bis 2 Jahre), `erfahren` (mehr als 2 Jahre). Die Grenzen sind eine Konvention dieser Bibliothek, angelehnt an die Einteilung in novice, intermediate und advanced im ACSM-Positionspapier von 2009.

**`ziel`:** `kraft`, `muskelaufbau`, `ausdauer`, `fitness` (allgemeine Fitness und Gesundheit), `padel`.

### Felder einer Einheit

| Feld | Typ | Pflicht | Bedeutung |
|---|---|---|---|
| `id` | Text | ja | stabile ID: ID der Vorlage plus Kürzel |
| `name` | Text | ja | kurzer Name, so wie er in der App als Vorlage erscheinen würde |
| `hinweis` | Text | nein | Hinweis zur ganzen Einheit |
| `uebungen` | Liste | ja | Übungen in Reihenfolge; jede Übung höchstens einmal pro Einheit |

### Felder einer Übung in der Einheit

| Feld | Typ | Pflicht | Bedeutung |
|---|---|---|---|
| `uebung` | Text | ja | ID aus `uebungen.json` |
| `saetze` | Zahl | ja | Arbeitssätze ohne Aufwärmsätze; bei Läufen die Zahl der Abschnitte (Dauerlauf: 1) |
| `wdh` | Text | bei `kraft` | Wiederholungen pro Satz |
| `jeSeite` | ja/nein | nein | `true`: `wdh` bzw. die Dauer gilt für jede Seite |
| `dauerMin` | Text | bei `ausdauer` und `zeit` (oder `dauerSek`) | Dauer pro Satz bzw. Abschnitt in Minuten |
| `dauerSek` | Text | statt `dauerMin` | Dauer in Sekunden, für kurze Halteübungen |
| `streckeKm` | Text | nein | Strecke pro Satz bzw. Abschnitt in km; bei `ausdauer` statt oder zusätzlich zu `dauerMin` |
| `pauseSek` | Zahl | wenn `saetze` > 1 | Pause nach jedem Satz in Sekunden; bei Läufen die Geh- oder Trabpause |
| `intensitaet` | Text | nein | ersetzt für diese Übung die Angabe der Vorlage |
| `hinweis` | Text | nein | z. B. eine Alternative |

**Werte für `wdh`, `dauerMin`, `dauerSek` und `streckeKm`** sind Texte im Stil der App: eine Zahl (`"5"`) oder ein Bereich mit Bindestrich (`"8-12"`), Dezimalstellen mit Komma (`"1,5"`). Erlaubt ist genau dieses Muster: `^\d+(,\d+)?(-\d+(,\d+)?)?$`. Bei einem Bereich wird die untere Grenze zuerst erreicht, die obere ist das Ziel für die Steigerung.

**Werte für `pauseSek`** stammen aus der Pausen-Auswahl der App: `45`, `60`, `90`, `120`, `150`, `180`, `240`.

### Beispiel

```json
{
  "id": "kraft-5x5",
  "name": "5×5",
  "beschreibung": "Langhantel-Kraftprogramm mit zwei abwechselnden Einheiten …",
  "erfahrung": ["einsteiger", "fortgeschritten"],
  "ziel": ["kraft"],
  "tageProWoche": [3],
  "wochenplan": "Mo A, Mi B, Fr A; in der nächsten Woche B, A, B.",
  "progression": "Alle Sätze mit 5 Wdh geschafft: beim nächsten Mal 2,5 kg mehr …",
  "einheiten": [
    {
      "id": "kraft-5x5-b",
      "name": "5×5 B",
      "uebungen": [
        {"uebung": "kniebeugen-langhantel", "saetze": 5, "wdh": "5", "pauseSek": 180},
        {"uebung": "schulterdruecken-langhantel", "saetze": 5, "wdh": "5", "pauseSek": 180},
        {"uebung": "kreuzheben-langhantel", "saetze": 1, "wdh": "5"}
      ]
    }
  ]
}
```

### Zuordnung zur App

Eine App-Vorlage ist `{id, name, ex:[Übungs-IDs]}`. Aus jeder **Einheit** wird eine App-Vorlage: `name` der Einheit, `ex` = die Übungen der Einheit in Reihenfolge, über den Namen den App-Übungen zugeordnet. Sätze, Wiederholungen, Dauer und Pausen nutzt die App bisher nicht: Sie füllt die Felder mit den Werten vom letzten Mal, hat eine einzige Pausenzeit für alle Übungen und startet den Pausen-Timer nur nach Kraft-Sätzen. `dauerSek` müsste beim Übernehmen in Minuten umgerechnet werden.

## Fachliche Grundlagen

Die Vorlagen folgen diesen Regeln. Wo es keine klare Studienlage gibt, steht „Praxis“.

**Häufigkeit.** Jede große Muskelgruppe mindestens zweimal pro Woche (WHO 2020; ACSM 2026). Bei gleichem Wochenvolumen ist die Verteilung auf die Tage für den Muskelaufbau nahezu egal (Schoenfeld 2019); entscheidend ist, dass genug Sätze zusammenkommen.

**Sätze und Volumen.** Mindestens 2 Sätze pro Übung, für Kraft 2 bis 3 (ACSM 2026). Für Muskelaufbau mindestens 10 Sätze pro Muskelgruppe und Woche; über etwa 18 bis 20 Sätze bringt mehr kaum noch zusätzlichen Nutzen (ACSM 2026). Mehr Wochensätze gehen mit mehr Muskelzuwachs einher (Schoenfeld 2017). Die Vorlagen nutzen 2 bis 4 Sätze pro Übung, bei 5×5 fünf.

**Wiederholungen und Last.** Für Kraft wirken schwere Lasten ab etwa 80 % des Maximums am besten (ACSM 2026). Nach der Epley-Formel, die auch die App nutzt, entsprechen 80 % etwa 7 bis 8 Wiederholungen bis zum Versagen; die Kraft-Schwerpunkte liegen deshalb bei 3 bis 8 Wdh. Für Muskelaufbau spielt die Last zwischen 30 und 100 % des Maximums keine einheitliche Rolle (ACSM 2026). Die Vorlagen nutzen 6 bis 15 Wdh, weil sich das gut steuern lässt und Sätze mit sehr vielen Wiederholungen lange dauern (Praxis; ACSM 2009 nannte 6 bis 12 als Schwerpunkt und 8 bis 12 für Einsteiger).

**Anstrengung.** Training bis zum Muskelversagen bringt keinen zusätzlichen Nutzen; etwa 2 bis 3 Wdh in Reserve reichen (ACSM 2026). Genaue Ziele für die Reserve sind laut ACSM 2026 nicht ausreichend belegt.

**Pausen.** ACSM 2026 fand bei der Kraft keinen Unterschied zwischen Pausen unter und über einer Minute, für Muskelaufbau gab es zu wenige Daten. Grgic 2018: Bei Trainierten bringen Pausen über 2 Minuten die größten Kraftzuwächse, bei Untrainierten reichen 60 bis 120 s. Singer 2024: kleiner Vorteil für Pausen über 60 s beim Muskelaufbau, über 90 s kein erkennbarer Unterschied mehr. ACSM 2009 nannte 3 bis 5 min für schwere Kraftsätze und 1 bis 2 min für Muskelaufbau. Daraus ergeben sich diese Richtwerte:

| Übung | `pauseSek` | Grundlage |
|---|---|---|
| Grundübung, obere Wdh-Grenze bis 8 (z. B. 5×5, 6–8) | 180 | ACSM 2009, Grgic 2018 |
| Grundübung im Bereich 6–10 | 150 | Zwischenstufe (Praxis) |
| Grundübung ab 8 Wdh | 120 | ACSM 2009, Singer 2024 |
| Isolationsübung | 90 | Singer 2024 |
| einarmige oder einbeinige Übung | 90 | Praxis: jede Seite pausiert schon während der anderen |
| Sprünge und Würfe | 90 | Praxis: wenig Menge, jede Wdh mit vollem Tempo |
| Nordic Hamstring Curls | 120 | Praxis: sehr fordernde Übung mit Betonung des Absenkens |
| Rumpf, Rotatorenmanschette, Schulterblatt | 60 | Praxis: geringe Last, es geht um Kontrolle |
| Halteübung je Seite (Seitstütz) | 45 | Praxis: die Seiten wechseln sich ab |

Die App-Voreinstellung von 90 s passt damit gut zu Isolationsübungen; für schwere Grundübungen ist sie eher knapp.

**Progression.** Doppelte Progression: im Wiederholungsbereich bleiben, bis alle Sätze die obere Grenze schaffen, dann um den kleinsten Schritt erhöhen. Das entspricht der Regel im ACSM-Positionspapier 2009, die Last um 2 bis 10 % zu erhöhen, sobald 1 bis 2 Wdh über dem Ziel gelingen. Bei 5×5 wird nach jeder erfolgreichen Einheit gesteigert (StrongLifts); das Absenken um 10 % nach drei Fehlversuchen ist Praxis.

**Aufwärmen.** 5 min locker, dann 2 bis 3 Aufwärmsätze mit steigendem Gewicht vor der ersten Grundübung. Das ist übliche Praxis; die Prozentwerte in den Vorlagen sind Richtwerte, keine Studienergebnisse.

**Laufen.**
- WHO 2020: pro Woche 150 bis 300 min moderate oder 75 bis 150 min intensive Ausdauerbelastung, dazu an mindestens 2 Tagen Krafttraining für alle großen Muskelgruppen.
- Der Einsteigerplan folgt im Aufbau dem NHS-Plan Couch to 5K (9 Wochen, 3 Läufe pro Woche, Lauf-Geh-Wechsel, Wochen dürfen wiederholt werden). Die reinen Laufminuten steigen anfangs prozentual stark, weil die Ausgangsmenge klein ist; die Gehpausen halten die Belastung niedrig.
- Steigerung: Die verbreitete 10-Prozent-Regel ist nicht belegt. In einer randomisierten Studie hatte ein Programm nach dieser Regel nicht weniger Verletzungen als ein schnelleres (Buist 2008). Laufanfänger, die ihre Wochenstrecke innerhalb von zwei Wochen um mehr als 30 % steigerten, hatten tendenziell mehr Überlastungsverletzungen; das Ergebnis war knapp nicht signifikant (Nielsen 2014).
- Intervalle 4 × 4 min bei 90 bis 95 % der maximalen Herzfrequenz mit 3 min Trabpause steigerten die maximale Sauerstoffaufnahme stärker als lockeres Laufen oder Schwellentraining bei gleicher Arbeit (Helgerud 2007, moderat trainierte Männer).
- Überwiegend locker laufen: Bei erfahrenen Ausdauersportlern schnitt polarisiertes Training (viel locker, wenig sehr hart) besser ab als Schwellentraining, bei kleiner Studienbasis (Rosenblat 2019). Für Freizeitläufer ist das übliche Praxis, nicht eigens belegt. Tempolauf und langer Lauf sind ebenfalls Praxis.

**Padel.**
- Am häufigsten betroffen sind im Padel Ellenbogen, Knie, Schulter und unterer Rücken; die Datenlage ist dünn (Dahmen 2023). Studien zu Padel-spezifischem Athletiktraining fehlen weitgehend.
- Die Schulterübungen (Außenrotation, Y-T-W, Face Pulls) entsprechen den Zielen des OSTRC-Schulterprogramms, das bei Handballern Schulterprobleme um 28 % senkte (Andersson 2017). Die Copenhagen-Übung senkte Leistenprobleme bei Fußballern um 41 % (Harøy 2019), Programme mit Nordic Hamstring Curls halbierten Verletzungen der hinteren Oberschenkel in verschiedenen Sportarten (van Dyk 2019). Ob diese Effekte im Padel genauso auftreten, ist nicht untersucht; die Übertragung ist Praxis.
- Sätze und Wiederholungen für Copenhagen und Nordic sind übliche Werte zum Einstieg, nicht die genauen Protokolle der Studien.
- Die Technik-Hinweise zu den Padel-Schlägen sind allgemeines Fachwissen.

## Quellen

Gelesen wurde jeweils, was in Klammern steht.

- American College of Sports Medicine (Currier BS, …, Phillips SM): Resistance Training Prescription for Muscle Function, Hypertrophy, and Physical Performance in Healthy Adults: An Overview of Reviews. Medicine & Science in Sports & Exercise 58(4), 2026, S. 851–872. (Volltext auf PubMed Central, in Teilen)
- American College of Sports Medicine: Progression Models in Resistance Training for Healthy Adults. Medicine & Science in Sports & Exercise 41(3), 2009, S. 687–708. (Abstract)
- Grgic J, Schoenfeld BJ, Skrepnik M, Davies TB, Mikulic P: Effects of Rest Interval Duration in Resistance Training on Measures of Muscular Strength: A Systematic Review. Sports Medicine 48(1), 2018, S. 137–151. (Abstract)
- Singer A, Wolf M, …, Schoenfeld BJ: Give it a rest: a systematic review with Bayesian meta-analysis on the effect of inter-set rest interval duration on muscle hypertrophy. Frontiers in Sports and Active Living 6, 2024. (Abstract)
- Schoenfeld BJ, Ogborn D, Krieger JW: Dose-response relationship between weekly resistance training volume and increases in muscle mass: A systematic review and meta-analysis. Journal of Sports Sciences 35(11), 2017, S. 1073–1082. (Abstract)
- Schoenfeld BJ, Grgic J, Krieger J: How many times per week should a muscle be trained to maximize muscle hypertrophy? A systematic review and meta-analysis of studies examining the effects of resistance training frequency. Journal of Sports Sciences 37(11), 2019, S. 1286–1295. (Abstract)
- World Health Organization (Bull FC et al.): World Health Organization 2020 guidelines on physical activity and sedentary behaviour. British Journal of Sports Medicine 54(24), 2020, S. 1451–1462. (Volltext)
- NHS (National Health Service, Großbritannien): Couch to 5K running plan, nhs.uk. (Webseite, abgerufen November 2026)
- Buist I, Bredeweg SW, van Mechelen W, Lemmink KA, Pepping GJ, Diercks RL: No effect of a graded training program on the number of running-related injuries in novice runners: a randomized controlled trial. American Journal of Sports Medicine 36(1), 2008, S. 33–39. (Abstract)
- Nielsen RØ, Parner ET, Nohr EA, Sørensen H, Lind M, Rasmussen S: Excessive progression in weekly running distance and risk of running-related injuries: an association which varies according to type of injury. Journal of Orthopaedic & Sports Physical Therapy 44(10), 2014, S. 739–747. (Abstract)
- Helgerud J et al.: Aerobic high-intensity intervals improve VO2max more than moderate training. Medicine & Science in Sports & Exercise 39(4), 2007, S. 665–671. (Abstract)
- Rosenblat MA, Perrotta AS, Vicenzino B: Polarized vs. Threshold Training Intensity Distribution on Endurance Sport Performance: A Systematic Review and Meta-Analysis of Randomized Controlled Trials. Journal of Strength and Conditioning Research 33(12), 2019, S. 3491–3500. (Abstract)
- Dahmen J, Emanuel KS, Fontanellas-Fes A, Verhagen E, Kerkhoffs GMMJ, Pluim BM: Incidence, prevalence and nature of injuries in padel: a systematic review. BMJ Open Sport & Exercise Medicine 9(2), 2023, e001607. (Volltext)
- Andersson SH, Bahr R, Clarsen B, Myklebust G: Preventing overuse shoulder injuries among throwing athletes: a cluster-randomised controlled trial in 660 elite handball players. British Journal of Sports Medicine 51(14), 2017, S. 1073–1080. (Abstract)
- Harøy J, Clarsen B, Wiger EG, Øyen MG, Serner A, Thorborg K, Hölmich P, Andersen TE, Bahr R: The Adductor Strengthening Programme prevents groin problems among male football players: a cluster-randomised controlled trial. British Journal of Sports Medicine 53(3), 2019, S. 150–157. (Abstract)
- van Dyk N, Behan FP, Whiteley R: Including the Nordic hamstring exercise in injury prevention programmes halves the rate of hamstring injuries: a systematic review and meta-analysis of 8459 athletes. British Journal of Sports Medicine 53(21), 2019, S. 1362–1370. (Abstract)
- StrongLifts: Stronglifts 5×5 Workout Program, Quick Start Guide, stronglifts.com. (Webseite; Praxisquelle, keine Studie)

Allgemeines Fachwissen ohne eigene Quelle: Auswahl und Namen der Übungen, Technik-Hinweise, Zuordnung der Muskeln, Aufteilung der Splits, Aufwärmsätze, Tempolauf, langer Lauf und Steigerungsläufe, die Padel-Technik.

## Gesundheit

Die Bibliothek gibt allgemeine Trainingsempfehlungen für gesunde Erwachsene. Bei Schmerzen, Verletzungen, Vorerkrankungen oder anderen gesundheitlichen Fragen gehört die Entscheidung über das Training zu einem Arzt oder Physiotherapeuten.
