import React, { Component } from "react";
import { Accordion, Icon, Image } from "semantic-ui-react";
import logo1 from './Logos/1.png';
import logo2 from './Logos/2.png';
import logo3 from './Logos/3.png';
import logo4 from './Logos/4.png';
import logo5 from './Logos/5.png';
import logo6 from './Logos/6.png';
import logo7 from './Logos/7.png';
import logo8 from './Logos/8.png';
import logo9 from './Logos/9.png';
import logo10 from './Logos/10.png';
import partner_overview_1 from './KonsortiumPage/partner_overview_1.jpg'

// using https://wordtohtml.net/

  let partner_description1 = `
  <div>
  <p align="justify">Das <a href="https://www.hhi.fraunhofer.de/">Fraunhofer Institut f&uuml;r Nachrichtentechnik</a> (Heinrich-Hertz-Institut, HHI) ist weltweit f&uuml;hrend in der Forschung und Entwicklung von mobilen und festen Breitband-Kommunikationsnetzen, Computer Vision-Technologien und K&uuml;nstlicher Intelligenz.&nbsp;Am Projekt NaLamKI ist das HHI mit den Forschungsgruppen <a href="https://www.hhi.fraunhofer.de/en/departments/vit/research-groups/computer-vision-graphics.html">Computer Vision &amp; Graphics (CVG</a>) und <a href="https://www.hhi.fraunhofer.de/en/departments/vit/research-groups/interactive-cognitive-systems.html">Interaktive &amp; Cognitive Systems (ICS)</a> aus der Abteilung <a href="https://www.hhi.fraunhofer.de/en/departments/vit.html">Vision &amp; Imaging Technologies</a> sowie mit der Abteilung <a href="https://www.hhi.fraunhofer.de/en/departments/wn.html">Wireless Communication &amp; Networks</a> beteiligt.&nbsp;Im Mittelpunkt der Beitr&auml;ge stehen die Entwicklung von KI-basierter prozeduraler digital Twin Modellierung,&nbsp;von interaktiver K&uuml;nstlicher Intelligenz und versatilen Methoden zur Erkennung von Pflanzen und Fr&uuml;chten auf den Anbaufl&auml;chen. Au&szlig;erdem liefert das HHI das Know-how f&uuml;r die Vernetzung von landwirtschaftlichen Maschinen und Sensoren, sowie L&ouml;sungen f&uuml;r deren KI-basierte Optimierung.</p>
  <p align="justify">Die Beitr&auml;ge des HHI erm&ouml;glichen die drahtlose Kommunikation zu, von und zwischen Landmaschinen, neuartige Methoden des nachhaltigen Pflanzenschutzes, hochgenaue Ertragsprognosen und die nutzerzentrierte Auswertung gro&szlig;er und komplexer Datenmengen.</p>
  <p align="justify"><strong>Website</strong></p>
  <ul>
      <li>
          <p><a href="https://www.hhi.fraunhofer.de/">https://www.hhi.fraunhofer.de/</a><strong>&nbsp;</strong></p>
      </li>
  </ul>  </div>
`;

let partner_description2 = `
<div>
<p><strong>John Deere</strong></p>
<p><span size="3">John Deere (JD) ist die Marke von Deere &amp; Company, dem weltweit f&uuml;hrenden Hersteller von Maschinen f&uuml;r die Land-, Forst- und Bauwirtschaft sowie von Maschinen f&uuml;r Rasen- und Grundst&uuml;ckspflege mit Sitz in den USA. Deere &amp; Company besch&auml;ftigt weltweit rund 75.500 Mitarbeiter (2021), ist mit 80 Werken, Entwicklungs- und Ersatzteilzentren in&nbsp;<s>ca.</s> 20 L&auml;ndern vertreten und verkauft seine Produkte in &uuml;ber 160 L&auml;ndern. Als Deutschlands gr&ouml;&szlig;ter Landtechnikhersteller besch&auml;ftigt die John Deere GmbH &amp; Co. KG rund 6.000 Mitarbeiter an sechs Standorten in der Bundesrepublik.&nbsp;</span></p>
<p>Das European Technology Innovation Center (ETIC) ist die ausf&uuml;hrende Stelle und Teil des globalen John Deere Forschungsnetzwerkes am Standort Kaiserslautern. Es untersucht und entwickelt in enger Zusammenarbeit mit verschiedenen Forschungseinrichtungen zuk&uuml;nftige Trends und Technologien im Bereich mobiler Land- und Baumaschinen. In dem Entwicklungszentrum arbeiten Ingenieure, IT- und Marketingspezialisten an Zukunftstechnologien und an &bdquo;intelligenten L&ouml;sungen&ldquo; f&uuml;r die Pr&auml;zisionslandwirtschaft (Intelligent Solutions Group). &nbsp;John Deere ist Koordinator von Projekt NaLamKI und haupts&auml;chlich an den Arbeitspaketen AP2, AP4, AP5, AP7 und AP9 beteiligt, wo John Deere neben eigener Expertise &uuml;ber gute Vernetzung in den entsprechenden Forschungsfeldern und vorhandener Infrastruktur im Bereich privater (Edge-)Cloud-Netze und modellbasierter Agrarmanagementsysteme verf&uuml;gt.</p>
<p><br></p>
<p><strong>Website</strong></p>
<ul>
    <li>
        <p><a href="https://www.deere.de/de/">https://www.deere.de/de/</a></p>
    </li>
</ul>
<p><br>&nbsp;</p></div>
`;

let partner_description3 = `
<div>
<p><span size="4"><strong>OptoPrecision GmbH&nbsp;</strong></span></p>
<p><span size="3">Die&nbsp;</span><span size="3">OptoPrecision GmbH</span><span size="3"><strong>&nbsp;(</strong></span><span size="3">OP</span><span size="3"><strong>)&nbsp;</strong></span>hat sich auf die Entwicklung, Konstruktion und Fertigung von kundenspezifischen L&ouml;sungen f&uuml;r die optische Mess-, &Uuml;berwachungs- und Steuerungstechnik spezialisiert. Die vielf&auml;ltigen L&ouml;sungen gliedern sich in die Bereiche &bdquo;Industrial Solutions&ldquo; und &bdquo;Security Systems&ldquo;. &nbsp;Dabei liegt der Schwerpunkt des Know-hows auf innovativer Kameratechnik mit und ohne aktive laserbasierte Beleuchtung, der Systemtechnik, um eine Bilderfassung an unterschiedlichsten Orten zu erm&ouml;glichen und der Bilddatenanalyse und echtzeitnaher Bildauswertung mit k&uuml;nstlicher Intelligenz. So sind die Schiffe der Bundespolizei See und des Zolls in den letzten Jahren mit der OptoPrecision Multisensorplattform MODAR mit einem integrierten Range-Gated-Kamerasystem ausgestattet worden. In Kooperation mit der DGzRS wurde im Rahmen des LARUS Projektes ein Gimbal f&uuml;r den Einsatz auf Drohnen entwickelt, die vollautomatisch im Wasser schwimmende Objekte erkennen kann. Inzwischen verf&uuml;gt OptoPrecision auch &uuml;ber die Technologie senkrecht startender Drohnen (VTOL), die gegenw&auml;rtig f&uuml;r den Einsatz in Nord- und Ostsee geh&auml;rtet werden. So stehen unterschiedliche Tr&auml;gersysteme f&uuml;r Nutzlasten bis 10 kg und einer Flugzeit bis 6 Stunden f&uuml;r die Nutzung in diesem Projekt zur Verf&uuml;gung</p>
<p><br></p>
<p><strong>Website</strong></p>
<ul>
    <li>
        <p>Universit&auml;t Hohenheim: <a href="https://www.optoprecision.de/">https://www.optoprecision.de/</a></p>
    </li>
</ul>
</div>
`;

let partner_description4 = `
<div>
<p><span size="4"><strong>DFKI&nbsp;</strong></span></p>
<p>Das Deutsche Forschungszentrum f&uuml;r K&uuml;nstliche Intelligenz GmbH (DFKI) wurde 1988 als gemeinn&uuml;tzige Public-Private Partnership (PPP) gegr&uuml;ndet. Es unterh&auml;lt mehrere Standorte und Labore innerhalb von Deutschland. Im Rahmen von <em>Industrie 4.0&nbsp;</em>und des <em>Internet of Things&nbsp;</em>gibt es eine immer st&auml;rkere Verschmelzung von virtueller und physikalischer Welt. Auf dieser Basis werden die Telekommunikation und Informationstechnik als eine der wesentlichen Sektoren der sogenannten Kritischen Infrastruktur gesehen, die den &ouml;konomischen Erfolg in Deutschland sicherstellen.&nbsp;</p>
<p>Vor diesem Hintergrund arbeitet der Forschungsbereich Intelligente Netze (IN) an innovativen Konzepten f&uuml;r die Implementierung von besonders anspruchsvollen Kommunikationsl&ouml;sungen, f&uuml;r das landwirtschaftliche und industrielle Umfeld. Hierf&uuml;r m&uuml;ssen moderne Kommunikationsnetze &uuml;ber intelligente Funktionalit&auml;ten (z.B. Selbstorganisation) und ad&auml;quate Schnittstellen zu produktionsbezogenen Systemen (z.B. MES) verf&uuml;gen, um eine autonome, sichere und zuverl&auml;ssige, drahtlose oder drahtgebundene Vernetzung einzelner Ger&auml;te und Komponenten bereitzustellen. Der Fokus des Forschungsbereichs liegt auf der Entwicklung neuester anwendungsnaher Technologien, wie bspw. die Einbindung von 5G in landwirtschaftliche Anwendungen.</p>
<p><br></p>
<p><strong>Website</strong></p>
<ul>
    <li>
        <p><a href="https://www.dfki.de/web">https://www.dfki.de/web</a></p>
    </li>
</ul>
<p><br>&nbsp;</p>
</div>
`;

let partner_description5 = `
<div>
<p><strong>JKI</strong></p>
<p>Das Julius K&uuml;hn‐Institut (JKI) ist das Bundesforschungsinstitut f&uuml;r Kulturpflanzen und eine selbst&auml;ndige Bundesoberbeh&ouml;rde im Gesch&auml;ftsbereich des Bundesministeriums f&uuml;r Ern&auml;hrung und Landwirtschaft (BMEL). Das dort angesiedelte Forschungszentrum f&uuml;r landwirtschaftliche Fernerkundung ist eine instituts&uuml;bergreifende Einheit, in der Fragen der landwirtschaftlichen Prim&auml;rproduktion und des Schutzes ihrer nat&uuml;rlichen Ressourcen unter Einsatz von Methoden der Fernerkundung, Online-Sensorik und Geoinformationssystemen bearbeitet werden. Eine wichtige Datenquelle sind die Sentinel-Satellitenbilddaten des Europ&auml;ischen Copernicus-Programms.&nbsp;</p>
<p>Im JKI &ndash;Teilvorhaben MussIF sollen analysefertige Satellitenbilddaten und &ndash;datenprodukte f&uuml;r das Monitoring landwirtschaftlicher Kulturpflanzenbest&auml;nde als Grundlage einer nachhaltigen und ressourcen‐effizienten Bewirtschaftung operationell zum Einsatz kommen. Hierf&uuml;r sollen sowohl SAR‐Systeme ebenso wie optische Systeme unterschiedlicher r&auml;umlicher und zeitlicher Aufl&ouml;sung, prozessiert, raum‐zeitliche Fusionsprodukte generiert und das Potenzial KI‐basierter Verfahren und Big Data f&uuml;r die Landwirtschaft analysiert werden. Die erarbeiteten Anwendungen werden in einem Demonstrator prototypisch auf Eignung und Praxistauglichkeit getestet. Um dies zu realisieren, nutzt das FLF modernste digitale Infrastruktur zur Verarbeitung von Satelliten- bzw. Geo-Massendaten. Darunter z&auml;hlen die Cloud-Plattform CODE-DE zur skalierbaren Prozessierung von Erdbeobachtungsdaten und wie die JKI-DataCube-Programmumgebung, die eine effiziente Datenhaltung, multi-skalare Datenintegration und Datenbereitstellung &uuml;ber standardisierte GAIA-X konforme Schnittstellen (Web‐Dienste) erlaubt.&nbsp;</p>
<p><br>&nbsp;</p>
<p><strong>Website</strong></p>
<ul>
    <li>
        <p><span size="3">JKI:&nbsp;</span><a href="https://www.julius-kuehn.de/">https://www.julius-kuehn.de/</a></p>
    </li>
    <li>
        <p>FLF:&nbsp;<a href="https://flf.julius-kuehn.de/">https://flf.julius-kuehn.de/</a> (im Aufbau)</p>
    </li>
</ul>
<p><br>&nbsp;</p>
<p><br>&nbsp;</p>
</div>
`;

let partner_description6 = `
<div>
<div>
    <div>
        <p>Die NT.AG ist ein solides und ideenreiches, inhabergef&uuml;hrtes Unternehmen im Zentrum von Erfurt, der Landeshauptstadt Th&uuml;ringens. Die besondere Expertise liegt in der Digitalisierung von Gesch&auml;ftsprozessen und Umsetzung von Digitalisierungsprojekten. Dazu betreibt die NT.AG ein hochverf&uuml;gbares, nach ISO 27001 zertifiziertes Rechenzentrum der Stufe 3 tekPlus Hochverf&uuml;gbar 24/7. Mit seinen ca. 200 Mitarbeiter im Firmenverbund tritt die NT.AG dar&uuml;ber hinaus als innovativer Entwickler und Anbieter von Dienstleistungen auf. Im Rahmen des NaLamKI Projektes zeichnet sich die NT.AG f&uuml;r den Entwurf und die Gestaltung der Gaia-X-konformen Systemumgebung verantwortlich. In diesem Zusammenhang arbeitet die NT.AG aktiv in der Gaia_X Community und &uuml;bertr&auml;gt somit neustes Wissen in das NaLamKI Konsortium.&nbsp;</p>
    </div>
    <div>
        <p>Webseite:&nbsp;</p>
    </div>
    <div>
        <div>
            <ul>
                <li>
                    <p><a href="http://www.nt.ag/" rel="noreferrer noopener" target="_blank">www.nt.ag</a>&nbsp;</p>
                </li>
                <li>
                    <p><a href="http://www.rechenzentrum-mitteldeutschland.de/" rel="noreferrer noopener" target="_blank">www.rechenzentrum-mitteldeutschland.de</a>&nbsp;</p>
                </li>
            </ul>
        </div>
    </div>
</div>
<div>
    <div><br></div>
</div>
</div>
`;

let partner_description7 = `
<div>
<p><strong>Planet</strong></p>
<p>Ans&auml;ssig in Berlin und San Francisco ist Planet ist ein deutsch-amerikanisches Unternehmen und einer der f&uuml;hrenden Anbieter von optischen Satellitendaten. Die Mission von Planet ist es, nahezu t&auml;glich die Landmasse der Erde abzubilden und globale Ver&auml;nderungen sichtbar zu machen. Planet baut eigene Satelliten und betreibt die gr&ouml;&szlig;te Erdbeobachtungsflotte mit derzeit &uuml;ber 240 Satelliten. Diese Satellitendaten werden &uuml;ber eine browser-basierte Plattform und APIs zur Verf&uuml;gung gestellt; des Weiteren stellt Planet Analyse-M&ouml;glichkeiten bereit, die von Nutzern f&uuml;r die Informationsextraktion benutzt werden k&ouml;nnen.&nbsp;</p>
<p>Das B&uuml;ro in Berlin ist Planets europ&auml;isches Zentrum f&uuml;r Softwareentwicklung, Prozessentwicklung, Kundenservice, Marketing und Vertrieb. Insbesondere unterst&uuml;tzt das Mission Control Center in Berlin den zuverl&auml;ssigen, sicheren und koordinierten Betrieb der mehr als 240 Satelliten im Orbit. Die Abteilung f&uuml;r die Sicherstellung der Bildqualit&auml;t in Berlin ist f&uuml;r die Qualit&auml;t und wissenschaftliche Integrit&auml;t der Datenprodukte verantwortlich.&nbsp;</p>
<p>Planet strebt an, im Rahmen von NaLamKI den Nachweis der Nutzbarkeit und des Nutzungspotentials von zeitlich, r&auml;umlich und spektral hochaufgel&ouml;sten Satellitendaten f&uuml;r die verbesserte und robustere Ableitung von nachhaltigen, landwirtschaftlichen Managemententscheidungen mittels moderner KI-Ans&auml;tze zu erbringen. Hier liegt der Fokus vor allem auf dem bereitgestellten Mehrwert radiometrisch harmonisierter Satellitenbild-Zeitreihen, als auch der Multi-Skalenniveau-Analyse, welche Bilddaten unterschiedlicher Aufl&ouml;sungsstufen integriert.&nbsp;</p>
<p><br></p>
<p><strong>Website</strong></p>
<ul>
    <li>
        <p><a href="https://www.planet.com/" target="_blank"><u>https://www.planet.com/</u></a>&nbsp;</p>
    </li>
</ul>
<p><br>&nbsp;</p>
</div>
`;

let partner_description8 = `
<div>
<p><strong>Robot Makers GmbH</strong></p>
<p><span size="3">Die Robot Makers GmbH entwickelt intelligente Steuerungssoftware zur Realisierung von (teil-)autonomen mobilen Arbeitsmaschinen. Das Unternehmen bietet Produkte und Dienstleistungen auf h&ouml;chstem technischem Niveau und spezialisiert sich mehr und mehr auf Zulieferprodukte in den Bereichen Landtechnik, Baumaschinen und Spezialfahrzeuge. Dabei fokussiert Robot Makers insbesondere auf den Bereich der in Reihen gepflanzten Sonderkulturen, wie bspw. Obst oder auch Wein. Hierf&uuml;r hat Robot Makers bereits Steuerungen f&uuml;r autonome Fahrzeuge entwickelt.&nbsp;</span></p>
<p>Ziel der Robot Makers GmbH ist es neuartige intelligente Assistenzfunktionen f&uuml;r die Inspektion von Obstplantagen zu entwickeln. Grundlage hierf&uuml;r bilden die verschiedenen Sensorinformationen, die im Rahmen des Projekts mit Mitteln der KI gewonnen werden. Sowohl durch die Vernetzung der Daten als auch durch den Einsatz neuartiger KI-Methoden k&ouml;nnen so Informationen und Erkenntnisse gewonnen werden. Aufbauend darauf will Robot Makers sein Produktportfolio um Algorithmen zur automatisierten Analyse und Dokumentation der Pflanzungen erweitern. Hierdurch k&ouml;nnen dem Landwirt Informationen und Handlungsempfehlungen gegeben werden, die ihn seine Arbeit effektiver und effizienter gestalten lassen.</p>
<p><br>&nbsp;</p>
<p><strong>Website</strong></p>
<ul>
    <li>
        <p><a href="http://www.robotmakers.de/">www.robotmakers.de</a></p>
    </li>
</ul>
</div>
`;

let partner_description9 = `
<div>
<h1>Technischen Universit&auml;t Kaiserslautern</h1>
<p>Der Lehrstuhl Robotersystem (RRLab) der Technischen Universit&auml;t Kaiserslautern besch&auml;ftigt sich seit &uuml;ber einem Jahrzehnt mit Outdoorfahrzeugen im landwirtschaftlichen Einsatz. Schwerpunkt liegt hierbei auf den Steuerungsarchitekturen und elektronischen Konzepten.</p>
<p><br>&nbsp;Durch Zusammenarbeit mit Industriepartnern wie John Deere und Landesbeh&ouml;rden wie dem DLR wurden bereits Projekte an M&auml;hdreschern, Traktoren und Plantagenrobotern mit dem Ziel umgesetzt, die Arbeit (teil-)autonom und zuverl&auml;ssig zu gestalten.</p>
<p><br></p>
<p><strong>Website</strong></p>
<ul>
    <li>
        <p><a href="https://agrosy.informatik.uni-kl.de/forschung/projekte/nalamki">https://agrosy.informatik.uni-kl.de/forschung/projekte/nalamki</a>&nbsp;</p>
    </li>
</ul>
</div>
`;

let partner_description10 = `
<div>
<p><strong>Universit&auml;t Hohenheim</strong></p>
<p><span size="3">Die Universit&auml;t Hohneheim (UHOH) ist mit dem an der Fakult&auml;t f&uuml;r Agrarwissenschaften angesiedelten Institut f&uuml;r Agrartechnik am NaLamKI-Verbund beteiligt.&nbsp;</span></p>
<p><span size="3">Das Fachgebiet f&uuml;r K&uuml;nstliche Intelligenz in der Agrartechnik unter der Leitung von Tenure-Track Professor Dr. Anthony Stein erg&auml;nzt seit M&auml;rz 2020 die breitgef&auml;cherte Expertise der Hohenheimer Agrartechnik durch fundiertes fachliches Know-how in der Erforschung und Anwendung von Methoden der K&uuml;nstlichen Intelligenz (KI). Es bildet somit die Schnittstelle zwischen dem agrarwissenschaftlichen Sektor und der Informatik, genauer dem Entwurf und der Entwicklung von intelligenten (informations-)technischen Systemen f&uuml;r die digitalisierte Landwirtschaft. Weiterhin steht das Fachgebiet f&uuml;r Verfahrenstechnik in der Pflanzenproduktion, geleitet von Professor Dr. Hans Werner Griepentrog, dem Konsortium beratend in agronomischen und verfahrenstechnischen Fragestellungen zur Verf&uuml;gung.&nbsp;</span></p>
<p><span size="3">Konkret ist die</span><span size="3">&nbsp;Universit&auml;t Hohenheim (UHOH) im Projektverbund ma&szlig;geblich bei der Anforderungsanalyse, der Erhebung und Spezifikation von KI-Anwendungsf&auml;llen beteiligt und tr&auml;gt zum Entwurf der NaLamKI-Systemarchitektur bei. Schwerpunktm&auml;&szlig;ig arbeitet die UHOH an der zielorientierten Auswahl, Adaption bzw. Neuentwicklung von m&ouml;glichst automatisierbaren KI-Verfahren f&uuml;r eine zentralen Analyse landwirtschaftlicher Daten in der Cloud sowie eine dezentrale Datenvorverarbeitung &bdquo;on the edge&ldquo;. Einen weiteren Schwerpunkt setzt sie auf die Erforschung von neuartigen f&ouml;derierten KI-Konzepten, um einerseits nur dezentral vorliegende Datenbest&auml;nde besser nutzbar zu machen und andererseits dem &uuml;bergeordneten Ziel der Datensouver&auml;nit&auml;t Rechnung zu tragen. Vor diesem Hintergrund werden vorranging moderne Verfahren des maschinellen Lernens entwickelt, insbesondere Automated Machine Learning (AutoML) und Federated Learning, welche in Hinblick auf die im Projekt identifizierten landwirtschaftlichen Anwendungsf&auml;lle f&uuml;r KI zur Demonstration datensouver&auml;ner und automatisierbarer KI-Anwendungen innerhalb der angestrebten NaLamKI-Plattform dienen werden.&nbsp;</span></p>
<p><strong>Website</strong></p>
<ul>
    <li>
        <p>Hauptbeteiligtes KI-Fachgebiet: <a href="https://ki-agrartechnik.uni-hohenheim.de/">https://ki-agrartechnik.uni-hohenheim.de/</a></p>
    </li>
    <li>
        <p>Universit&auml;t Hohenheim: <a href="https://www.uni-hohenheim.de/">https://www.uni-hohenheim.de/</a></p>
    </li>
</ul>
</div>
`;


export default class KonsortiumPage extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    let logostyle = { height: "75px", width: "auto" };
    return (
      <>
        <div style={{ width: "100%", height: "30px", paddingTop: "5px", background: "#8fc6cd" }}></div>
        <div style={{ margin: "50px" }}>
        <h2>Konsortium</h2><hr/>
          <img src ={partner_overview_1} style={{width:"100%", paddingLeft:"20%", paddingRight:"20%"}}/>
          <Accordion>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Image src={logo1} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>

              <div
                dangerouslySetInnerHTML={{ __html: partner_description1 }}
              />
            </Accordion.Content>
            <hr />
            {/* ------------------------------------------------------------------------------- */}


            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Image src={logo2} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
            <div
                dangerouslySetInnerHTML={{ __html: partner_description2 }}
              />
            </Accordion.Content>
            <hr />
            {/* ------------------------------------------------------------------------------- */}

            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Image src={logo3} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
            <div
                dangerouslySetInnerHTML={{ __html: partner_description3 }}
              />
            </Accordion.Content>
            <hr />
            {/* ------------------------------------------------------------------------------- */}

            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <Image src={logo4} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
            <div
                dangerouslySetInnerHTML={{ __html: partner_description4 }}
              />
            </Accordion.Content>
            <hr />
            {/* ------------------------------------------------------------------------------- */}
            <Accordion.Title
              active={activeIndex === 4}
              index={4}
              onClick={this.handleClick}
            >
              <Image src={logo5} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
            <div
                dangerouslySetInnerHTML={{ __html: partner_description5 }}
              />
            </Accordion.Content>
            <hr />
            {/* ------------------------------------------------------------------------------- */}
            <Accordion.Title
              active={activeIndex === 5}
              index={5}
              onClick={this.handleClick}
            >
              <Image src={logo6} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
            <div
                dangerouslySetInnerHTML={{ __html: partner_description6 }}
              />
            </Accordion.Content>
            <hr />
            {/* ------------------------------------------------------------------------------- */}
            <Accordion.Title
              active={activeIndex === 6}
              index={6}
              onClick={this.handleClick}
            >
              <Image src={logo7} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 6}>
            <div
                dangerouslySetInnerHTML={{ __html: partner_description7 }}
              />
            </Accordion.Content>
            <hr />
            {/* ------------------------------------------------------------------------------- */}
            <Accordion.Title
              active={activeIndex === 7}
              index={7}
              onClick={this.handleClick}
            >
              <Image src={logo8} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 7}>
            <div
                dangerouslySetInnerHTML={{ __html: partner_description8 }}
              />
            </Accordion.Content>
            <hr />
            {/* ------------------------------------------------------------------------------- */}
            <Accordion.Title
              active={activeIndex === 8}
              index={8}
              onClick={this.handleClick}
            >
              <Image src={logo9} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 8}>
            <div
                dangerouslySetInnerHTML={{ __html: partner_description9 }}
              />
            </Accordion.Content>
            <hr />
            {/* ------------------------------------------------------------------------------- */}
            <Accordion.Title
              active={activeIndex === 9}
              index={9}
              onClick={this.handleClick}
            >
              <Image src={logo10} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 9}>
            <div
                dangerouslySetInnerHTML={{ __html: partner_description10 }}
              />
            </Accordion.Content>
            <hr />
            {/* ------------------------------------------------------------------------------- */}
          </Accordion>
        </div>
      </>
    );
  }
}