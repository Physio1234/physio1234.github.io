eisreich – Kältekammer Lübeck · Website-Paket (überarbeitet)
============================================================

STRUKTUR
- index.html ............ Startseite (schlank: CSS/JS/Bilder ausgelagert, ~29 KB statt 334 KB)
- 11 Themenseiten ....... rheuma-arthrose, gewichtsmanagement, depressionen-stress, schlafstoerungen,
                          sportler-regeneration, multiple-sklerose, immunsystem-staerken,
                          chronische-schmerzen-fibromyalgie, restless-legs-syndrom, neurodermitis, long-covid
                          (jeweils ~900–1100 Wörter: Überblick, Wirkung, Vorteile, Ablauf,
                           Kontraindikationen, Lübeck-Bezug, Studienlage, FAQ, interne Links)
- wissenschaft.html ..... Evidenzseite: echte PubMed/Cochrane-Quellen, Studienboxen, Evidenz-Ampel, ehrliche Einordnung
- impressum.html / datenschutz.html ... VORLAGEN (rechtlich prüfen!)
- sitemap.xml / robots.txt ............ für die Google Search Console
- assets/styles.css, assets/script.js . ausgelagert (Startseite)
- assets/img/*.webp ................... Bilder als WebP in 2 Größen (srcset, lazy load)

WAS UMGESETZT WURDE (Feedback)
1. Medizinische Aussagen entschärft (HWG): "kann unterstützen", "viele berichten",
   "Studien deuten auf ... hin", "begleitend, nicht ersetzend". "Depressionen" -> "Stress & mentale Belastung".
2. Startseite leicht gemacht: Base64 entfernt, Bilder als externe WebP + srcset + lazy load,
   CSS und JS in assets/ ausgelagert, Hero-Bild wird vorgeladen.
3. Unterseiten stark ausgebaut (Kontraindikationen, Ablauf, Lübeck-Bezug, Studienlage, mehr FAQ, interne Links).
4. Impressum & Datenschutz als /impressum und /datenschutz (statt terms-and-conditions).
5. Google-Trust-Block auf der Startseite (oben), einsatzbereit mit Platzhalter + "Auf Google bewerten".

NOCH ZU ERLEDIGEN (wichtig)
- Impressum: USt-IdNr., Steuernummer, Firmensitz bestätigen ([…]-Felder).
- Datenschutz: Hoster eintragen; Vollversion mit DSGVO-Generator/Anwalt erstellen.
  EMPFEHLUNG: Google Fonts lokal selbst hosten (sonst wird die IP an Google übertragen).
- Rheuma-Befragung: nur die Schmerz-Werte sind echt. "Beispiel"-Werte + Warnbanner
  vor Veröffentlichung durch echte Wochenwerte ersetzen.
- Google-Trust-Block: X,X / XX Bewertungen sind Platzhalter -> erst zeigen, wenn echte
  Bewertungen vorhanden sind (Profil aktuell "Keine Rezensionen"). Bewertungen aktiv sammeln.
- Instagram im Footer der index.html ist ein Platzhalter -> echten Account eintragen.
- Bilder sind aus Screenshots erzeugt -> für HD die Originalfotos einsetzen.
- Vor Livegang: Heil-/Werbeaussagen + Befragung rechtlich prüfen (HWG/UWG).

VEROEFFENTLICHEN
- Alle Dateien inkl. Ordner assets/ ins Web-Stammverzeichnis von eis-reich.de laden.
- Seiten am besten unter sauberen URLs ausliefern (/rheuma-arthrose, /impressum ...);
  die internen .html-Links funktionieren auch direkt. Canonicals zeigen auf die sauberen URLs.
- sitemap.xml in der Google Search Console einreichen.

Stand: Mai 2026
