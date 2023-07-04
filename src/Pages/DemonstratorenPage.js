import React from "react";
import { Route } from "react-router-dom";
import { Button, Image, Grid, Icon, Segment, Label, List } from "semantic-ui-react";
import CalenderComponent from "./CalenderComponent";
import demonstrator1 from "./DemonstratorenImages/Demonstrator1_Bild.jpg"
import demonstrator2 from "./DemonstratorenImages/Demonstrator2_Bild.jpg"
import demonstrator3 from "./DemonstratorenImages/Demonstrator3_Bild.jpg"
import demonstrator4 from "./DemonstratorenImages/Demonstrator4_Bild.jpg"
import demonstrator5 from "./DemonstratorenImages/Demonstrator5_Bild.jpg"
import demonstrator6 from "./DemonstratorenImages/Demonstrator6_Bild.jpg"
import demonstrator7 from "./DemonstratorenImages/Demonstrator7_Bild.jpg"
import demonstrator8 from "./DemonstratorenImages/Demonstrator8_Bild.jpg"


class DemonstratorenPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let style_images = {
            display: "block",
            width: "auto",
            height: "auto",
            paddingLeft: "50px",
            paddingRight: "50px"
        }
        return <>
            <div style={{ width: "100%", height: "30px", paddingTop: "5px", background: "#8fc6cd" }}></div>
            <div style={{ margin: "50px" }}>
                <h2> Übersicht über die Demonstratoren </h2>
                <hr />

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={style_images} src={demonstrator1} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Demonstrator 1: Bedarfsmengen- und punktgenaues Applizieren von Pflanzenschutzmaßnahmen und flächenspezifische Plausibilisierung der Bodenfeuchte mit Hilfe von KI auf Acker- und Grünland</h3><br />
                            Im Rahmen des Projektes NaLamKI sollen innovative KI-Anwendungen entwickelt und auf Felder praxisgerecht erprobt werden. Hier wird die echtzeitfähige Auswertung von Sensordaten unterschiedlichster Quellen mittels KI möglich, die dann wiederum in Echtzeit landwirtschaftliche Einsätze steuern können („KI in the loop“). Hierbei wird eine zumindest zweistufige, teilweise aber auch dreistufige Cloudinfrastruktur genutzt, die maschinenbezogene, betriebsbezogene und globale (GAIA-X) Datenverarbeitungs- und KI-Infrastruktur umfasst.
                            <br />
                            Um Flächen optimal zu bewässern oder auch Pflanzenschutzmaßnahmen effizient und naturschonend mit (teil-)autonomen Landmaschinen durchführen zu können, ist eine feingranulare Auflösung bzw. Vermessung der jeweiligen Parzellen sowie eine „intelligente“ Aufgabenplanung notwendig. Die Pfadplanung soll unter der Berücksichtigung von Anbaugeräten, wie z. B. Feldspritzen, zeit- und energieeffizient durchgeführt werden und ein Echtzeitabgleich zwischen Planungsdaten mit der Ist-Situation erfolgen, um Feinjustierungen vornehmen zu können.                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={style_images} src={demonstrator2} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Demonstrator 2: Fernerkundliche Detektion von Pflanzeninfektionen</h3><br />
                            Mit dem 2010 gegründeten Internationalen DLG-Pflanzenbauzentrum in Bernburg-Strenzfeld (IPZ) verfügt die DLG über großflächige Versuchsanlagen sowie eine einzigartige Kommunikationsplattform. So können für dieses Projekt geeignete Daten auf den Flächen des IPZ erhoben werden und Erkenntnisse gleichzeitig schnell und praxisorientiert in die Landwirtschaft kommuniziert werden. Der Pflanzenbau am Standort des IPZ, im mitteldeutschen Trockengebiet, leidet vornehmlich unter Wasserdefiziten. Über ein bereits bestehendes Projekt (EIP agri, IrriMode) können Bodenwasserzustände für die KI-basierte Weiterverarbeitung bereitgestellt werden. Eine reduzierte, gezielte und effiziente Applikation von Pflanzenschutzmitteln oder die Wahl von Alternativen ist definiertes Ziel in der landwirtschaftlichen Produktion. Die Auswahl verbesserter Methoden steht und fällt mit der rechtzeitigen Erkennung und Klassifikation von Schadorganismen im Pflanzenbestand. Am DLG IPZ werden im Zuge von NaLamKI Exaktversuche als Referenz für drohnen- bzw. satellitenbasierte fernerkundlich detektierte Pflanzeninfektionen bereitgestellt und Realdaten zur Entwicklung entsprechender Modelle erhoben.
                        </Grid.Column>

                    </Grid.Row>
                </Grid>

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={style_images} src={demonstrator3} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Demonstrator 3: Inspektion von Obstplantagen </h3><br />
                            <p><span size="3">In Obstplantagen werden viele komplexe Entscheidungen getroffen, bei denen ein detailliertes Wissen &uuml;ber die Pflanzen hilft, einen signifikanten Mehrwert f&uuml;r den Obstbauern und dessen Entscheidungsfindung darzustellen. Der Obstbauer kann auf einer fundierten Datenbasis kritische Entscheidungen besser treffen, und so einerseits seinen Ertrag steigern, andererseits aber auch gezielter und damit weniger extensiv Pflanzenschutz- und D&uuml;ngemittel einsetzen. Dies bringt sowohl einen wirtschaftlichen als auch einen &ouml;kologischen Nutzen mit sich. Aus diesem Grund w&uuml;nschen sich Obstbauern eine Art digitale Karte ihrer Plantage, die Informationen zu jeder einzelnen Pflanze beinhaltet.&nbsp;</span></p>
                            <p><span size="3">Ziel des Demonstrators ist die Entwicklung von Methoden zur Durchf&uuml;hrung einer automatisierten Bonitur der Obstplantage. Hierf&uuml;r sollen bodennahe Informationen (mit bodennaher Sensorik gewonnene Informationen, bspw. Kamera, LIDAR usw.) m&ouml;glichst automatisiert und implizit, w&auml;hrend der regelm&auml;&szlig;igen Pflegearbeiten, bspw. des Mulchens, erhoben werden. Zus&auml;tzlich zur bodennahen Sensorik sollen weitere Daten bspw. von Satelliten genutzt werden.&nbsp;</span></p>
                            <p>Zur Durchf&uuml;hrung von Tests und Experimenten stehen die Anlagen des Obsthof Stockinger in Kallstadt zur Verf&uuml;gung. Ein autonomes Fahrzeug der Robot Makers GmbH wurde zusammen mit der TU Kaiserslautern mit Stereokameras, LIDAR, IMU und GPS ausgestattet, um die relevanten Daten zu erfassen. Das Fahrzeug ist in der Lage autonom durch die Obstbaumreihen zu navigieren und dabei verschiedene Anbauger&auml;te zu steuern. Zur Auswertung dieser Daten werden Algorithmen, auf</p>
                            <p>Basis von neuronalen Netzen und multimodaler Sensorverarbeitung entwickelt. Daten von anderen Agenten und Informationen aus der Cloud (verteilte KI) k&ouml;nnen hinzugenommen werden. Durch eine Analyse der Satellitendaten k&ouml;nnen geometrische Informationen des Schlags oder auch negative Hindernisse erkannt werden. Die Auswertung der Sensordaten des</p>
                            <p>Fahrzeugs erfolgt dabei w&auml;hrend der Durchfahrt durch die Plantage. Die so gewonnenen Informationen werden genutzt, um ein digitales Abbild des Schlags zu erstellen.</p>
                            <p>Dieses Abbild soll m&ouml;glichst folgende Aspekte beinhalten:</p>
                            <ul>
                                <li>
                                    <p>geometrische Eigenschaften des Schlags</p>
                                </li>
                                <li>
                                    <p>Anzahl und Position der Bl&uuml;ten pro Baum</p>
                                </li>
                                <li>
                                    <p>Anzahl, Reifegrad und Position der Fr&uuml;chte pro Baum</p>
                                </li>
                                <li>
                                    <p>Astfl&auml;che pro Baum</p>
                                </li>
                                <li>
                                    <p>Verletzungen, Sch&auml;dlingsbefall und Krankheiten</p>
                                </li>
                            </ul>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={style_images} src={demonstrator4} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Demonstrator 4: Umfeldinspektion mittels (Teil-)autonom fahrendem Traktor </h3><br />
                            Die TU Kaiserslautern entwickelt ein verhaltensbasiertes Steuerungskonzept, das eine präzise Steuerung eines John Deere Traktors ermöglicht. Ein mögliches Operationsszenario stellt das Fahren in Reihenkulturen dar. Hierzu müssen neben den Pflanzen, auch Pflanzenreihen und das Umfeld des Fahrzeugs im Allgemeinen erkannt werden. Dabei werden verschiedenste Ansätze der Erfassung bzw. Sensortechnik kombiniert. Pflanzeninformationen, wie auch Umfeldeigenschaften der Pflanze sollen mittels unterschiedlicher Sensoren (z.B. Spektralkamera, Stereo-Kamera und weiteren Sensoren wie z.B. einem Bodenradar) erfasst werden, um Informationen zum Pflanzenzustand, sowie des Bodens vornehmen zu können.
                            Das HHI arbeitet an interaktiven Lösungen für die Annotation von Daten, die den Einsatz neuartiger KI Methoden demonstrieren. Derzeit wird im Rahmen des NaLamKI Projekts eine Cloud-Plattform demonstriert, die es ermöglicht, im Zusammenspiel zwischen Mensch und Maschine Labels für Bilddaten zu generieren, in einer Datenbank abzuspeichern und mit anderen Datenverwertern online zu teilen. Mit der NaLamKI Plattform für interaktives Machine Learning demonstriert das HHI, wie die gesamte Wertschöpfungskette von Dienstleistungen im Bereich DataScience und Deep Computer Vision durch eine integrierte WebPlattform abgebildet werden können.
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={style_images} src={demonstrator5} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Demonstrator 5: GAIA-X konforme Cloud Infrastruktur für KI-gestützte Software as a Service Lösungen im Landwirtschaftsbereich </h3><br />
                            Im Rahmen von NaLamKI wird der Datenaustausch für Bestandsmodelle und deren Datenquellen auf offenen Standards beruhen. Dies betrifft die Schnittstellen zu den KI-Verfahren und zu den integrierten bestehenden SW-Lösungen für den Agrarsektor. Die Daten, KI-Verfahren (Algorithmen) und die SaaS Plattform werden dezentral mit Hilfe von Web-Diensten auf Basis der GAIA-X Referenzarchitektur zur Verfügung gestellt und vernetzt. Dies geschieht in enger Zusammenarbeit mit landwirtschaftlichen Partnerprojekten, aber auch konzeptionell mit bestehenden Gaia-X konformen Farm Management Information Systemen.
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={style_images} src={demonstrator6} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Demonstrator 6: Multi-Skalige Informationsgewinnung mit Fernerkundung</h3><br />
                            Mit dem Europäischen Copernicus Programm sind zeitlich und spektral hochauflösende Systeme wie zum Beispiel Sentinel-1 (Radar) und Sentinel-2 (Optisch) mit einer Bodenauflösung von 10 m x 10 m verfügbar. Die Satelliten des Partners Planet liefern tägliche Überflüge mit einer räumlichen Auflösung von ca. 3 m. Mit UAV (Unmanned Aerial Vehicle) Systemen sind theoretisch beliebig detaillierte Aufnahmen mit einer Bodenauflösung im Zentimeter- bis Subzentimeterbereich möglich. Darüber hinaus können mittels AGVs (Automated Guided Vehicles) Daten verschiedenster Sensoren von mobilen und stationären Bodenplattformen erhoben und verarbeitet werden.
                            Unter der Leitung des Julius Kühn-Institutes wird in Demonstrator 6 die Eignung der verschiedenen Satelliten- und Sensorsysteme zur quantitativen Bestimmung von Bestandesparametern (z.B. Biomasse, Blattflächenindex, phänologische Stadien) unter Nutzung existierender und neuartiger KI-Verfahren für eine nachhaltige und ressourcenschonende Bewirtschaftung untersucht (Abbildung). Ein besonderer Fokus liegt in der Analyse von Skaleneffekten zwischen Satelliten (z.B. Sentinel), Nano-Satelliten (Planet), UAV und Bodensystemen (AGV).
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={style_images} src={demonstrator7} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Demonstrator 7: Landwirt-Dashboard zur Visualisierung der Projektdaten</h3><br />
                            Entwicklung einer Visualisierungs-Bibliothek für ein interaktives webbasiertes Dashboard für Landwirte zur Integration in Farm-Management-Information-Systems (FMIS). Die Sensordaten, Karten, offene Daten sowie KI-Auswertungen der Projektpartner werden visualisiert, in einem Dashboard gesammelt, aggregiert und den Nutzern im Rahmen eines Landwirt-Dashboards zur Verfügung gestellt. Dazu werden GAIA-X konforme „Beispiel“-Datensätze von mehreren Projektpartnern von NaLamKI für eine fiktive landwirtschaftliche Fläche visualisiert und aufbereitet. Der Landwirt kann je nach Use Case seine Daten zur Anzeige und Auswertung auswählen, um das Management seiner landwirtschaftlichen Flächen in Bezug auf die Nachhaltigkeit und Wirtschaftlichkeit zu optimieren.
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={style_images} src={demonstrator8} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Demonstrator 8: 5G Sidelink-Kommunikation zwischen Drohnen und Bodenfahrzeugen</h3><br />
                            Die Vernetzung von Fahrzeugen im landwirtschaftlichen Kontext zwischen Traktoren, Drohnen und Bodenstationen wird im AP5 untersucht. Im Rahmen dieses Demonstrators sollen die Schlüsselkomponenten der 5G-Vernetzung für den Anwendungsfall von einer mit einem Bodenradar ausgestattete Drohne, die die gesammelten Daten an eine Bodenstation bzw. Bodenfahrzeug sendet, im Rahmen des 5G Berlin Testbeds demonstriert werden. Hierzu soll eine direkte Kommunikation zwischen mehreren Teilnehmern im lizensierten Spektrum der 5G Campusnetze verwendet werden.
                            <br />Durch die 5G-Sidelink Kommunikation können die landwirtschaftlichen Fahrzeuge und Drohnen innerhalb ihrer Reichweite untereinander kommunizieren, entweder koordiniert durch eine Basisstation oder, falls keine 4G/5G Verbindung vorhanden ist, durch eines der Fahrzeuge aus dem Verbund. Zur Erhöhung der Robustheit und Datenrate der Sidelink-Kommunikation sollen sogenannte Massive-MIMO Verfahren auf der Seite der Bodenstation bzw. des Bodenfahrzeugs zum Einsatz kommen. Darüber hinaus können die Kommunikationsteilnehmer außerhalb des Abdeckungsbereiches von Basisstation und Sidelink zur zuverlässigen Übermittlung geringer Datenmengen, wie Steuerungs- und Positionsdaten oder aggregierten Vorhersagen und Entscheidungen auf Basis der eingesetzten KI-Technologie, auf öffentlichen C2-Mobilfunk-Sprachkanäle zurückgreifen (Verfügbarkeit von Sprachkanälen bei >99%). Die dafür nötigen Kommunikationselemente werden vom HHI entwickelt und sollen hier zu einem Demonstrator kombiniert werden.                       </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </>
    }
}

export default DemonstratorenPage;