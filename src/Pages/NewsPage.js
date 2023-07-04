import React from "react";
import { Route } from "react-router-dom";
import { Button, Image, Grid, Icon, Segment, Label, List } from "semantic-ui-react";
import CalenderComponent from "./CalenderComponent";
import artikel1 from "./NewsOverviewImages/Artikel1_Titelbild.jpg"
import artikel2 from "./NewsOverviewImages/Artikel2_Titelbild.jpg"
import artikel3 from "./NewsOverviewImages/Artikel3_Titelbild.jpg"
import artikel4 from "./NewsOverviewImages/Artikel4_Titelbild.jpg"
import artikel5 from "./NewsOverviewImages/Artikel5_Titelbild.jpg"
import artikel6 from "./NewsOverviewImages/Artikel6_Titelbild.jpg"
import artikel7 from "./NewsOverviewImages/Artikel7_Titelbild.jpg"
import artikel8 from "./NewsOverviewImages/Artikel8_Titelbild.jpg"


class NewsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <div style={{ width: "100%", height: "30px", paddingTop: "5px", background: "#8fc6cd" }}></div>
            <div style={{ margin: "50px" }}>
                <h2> Nachrichtenübersicht </h2>
                Hier finden Sie eine kalendarische Übersicht zu Ereignissen, aktuellen Events und Nachrichten über das Projekt.
                <CalenderComponent></CalenderComponent>
                <hr />
                <h2> Berichte und Artikel </h2>

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={{ width: "800px"}} src={artikel8} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>NaLamKI auf Grüner Woche </h3><br />
                            Am 26.01.2023 findet im Rahmen der Internationalen Grünen Woche die Tagung KI-Anwendungen und Interoperabilität als Zukunft der Landwirtschaft statt: 
                            Digitalisierung macht Landwirtschaft nachhaltig. Der Einsatz von neuesten Technologien bietet die Möglichkeit umweltfreundlicher sowie ressourcenschonender zu produzieren und gleichzeitig die Erträge zu steigern. Mit dem Forschungsprojekt »Nachhaltige Landwirtschaft mittels Künstlicher Intelligenz« (NaLamKI) wird aufgezeigt, wie die Digitalisierung bei der Berechnung, Planung, Dokumentation und Analyse hilft, zukünftige Arbeiten zu optimieren.
                            <br />
                            <br />
                            <a href={window.website_url + "Artikel8"}> Zum Artikel ...</a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={{ width: "800px"}} src={artikel1} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>HHI beginnt mit Aufnahmen von Obstplantage in Brandenburg </h3><br />
                            Das Fraunhofer HHI hat mit der Datenerhebung auf der Apfelplantage eines führenden lokalen Produzenten für Obst in Brandenburg begonnen. Die Messungen erfolgen in regelmäßigen Zeitintervallen und decken einen erheblichen Teil der Pflanzreihen zur Sorte Jonagold ab. Ziel ist es, das Pflanzenwachstum im Jahresverlauf zu dokumentieren, Erntemengen abzuschätzen, Zusammenhänge mit verschiedenen internen und externen Wachstumsfaktoren aufzudecken und zu untersuchen, wie sich diese auf die wichtigsten Key Performance Indicators (KPIs) auswirken. Im ersten Schritt dienen die Daten als Grundlage für die Entwicklung neuartiger Methoden der Künstlichen Intelligenz, welche eine präzise Vermessung der Anpflanzung ermöglichen, mit dem Ziel, eine digitale Repräsentation des Schlags zu erstellen, und somit die Grundlage für die abgeleiteten Smart-Farming-Solutions­ darstellen.
                            <br />
                            <br />
                            <a href={window.website_url + "Artikel1"}> Zum Artikel ...</a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={{ width: "800px"}} src={artikel2} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>NT.AG: Von der Systemarchitektur zur Implementierung von Cloud Services</h3><br />
                            Die NT.AG übernimmt als starker Partner im Konsortium primär technologische Aufgaben und entwickelt eine Cloud basierte Systemarchitektur auf Basis aktueller Standards und Vorgaben von Gaia-X. Zunächst wurde dafür in einem strengen Prozess der benötigte Softwarestack ausgewählt und zusammengestellt. Dabei lag der Fokus besonders darauf, eine Lösung zu schaffen, welche auf Industrieniveau steht und auch im Praxisbetrieb sicher einsetzbar ist. Im nächsten Schritt wurde die Infrastruktur konzipiert und gemeinsam mit namhaften Herstellern die benötigte Hardware zusammengestellt. Daraufhin erfolgte die Aufbauphase mit abschließender Inbetriebnahme.
                            <br />
                            <br />
                            <a href={window.website_url + "Artikel2"}> Zum Artikel ...</a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={{ width: "800px"}} src={artikel3} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Planet Fusion: Zeitreihen hochaufgelöster Multispektraldaten </h3><br />
                            Nachdem Planet Labs in einem ersten Schritt die genauen Anforderungen der KI-Verfahren und Dienste erfolgreich identifiziert hat, wurden in einer zweiten Phase geeignete Zeitfenster für den Satellitenüberflug abgestimmt um die entsprechenden Datengrundlagen zu schaffen. Im dritten Schritt fanden über den Untersuchungsgebieten erste Aufnahmen mit den Planet Satelliten statt. Aus den täglichen Aufnahmen mit dem PlanetScope Satelliten wurden im täglichen Überflug wolkenfreie, lückenlose, radiometrisch harmonisierte multi-spektrale Zeitreihen generiert, die eine räumliche Auflösung von 3m haben. Diese sogenannten Planet Fusion Daten werden nun ausgewertet mit dem Ziel flächendeckende, räumlich differenzierte Informationen zum aktuellen Pflanzenzustand und deren zeitlicher Entwicklung für Ackerkulturen bereitzustellen. In einer ersten Phase konzentrieren diese sich auf die Bereitstellung von Informationen zur Pflanzenentwicklung.
                            <br />
                            <br />
                            <a href={window.website_url + "Artikel3"}> Zum Artikel ...</a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                {/*<Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={{ width: "800px"}} src={artikel4} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Erster Blick auf die HHI Plattform für interaktives Machine Learning </h3><br />
                            Das HHI arbeitet an interaktiven Lösungen für die Annotation von Daten, die den Einsatz neuartiger KI Methoden demonstrieren. Derzeit wird im Rahmen des NaLamKI Projekts eine Cloud-Plattform demonstriert, die es ermöglicht, im Zusammenspiel zwischen Mensch und Maschine Labels für Bilddaten zu generieren, in einer Datenbank abzuspeichern und mit anderen Datenverwertern online zu teilen. Mit der NaLamKI Plattform für interaktives Machine Learning demonstriert das HHI, wie die gesamte Wertschöpfungskette von Dienstleistungen im Bereich DataScience und Deep Computer Vision durch eine integrierte WebPlattform abgebildet werden können.
                            <br />
                            <br />
                            <a href={window.website_url + "Artikel4"}> Zum Artikel ...</a>
                        </Grid.Column>
                    </Grid.Row>
    </Grid>*/}
                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={{ width: "800px"}} src={artikel5} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Datenerhebung mit Roboter in Obstplantage </h3><br />
                            Die TU Kaiserslautern und die Robot Makers GmbH untersuchen KI-Methoden zur impliziten
                            Durchführung einer automatisierten Bonitur von Obstplantagen. Hierfür zeichnen sie regelmäßig Daten in den Feldern des Obsthof Stockinger in Kallstadt auf. Die Vision, die den Arbeiten zu Grunde liegt, ist die Durchführung einer impliziten Bonitur beim Erledigen sonstiger Arbeiten in der Anlage oder auch gezielt durch autonome Roboter. Die gewonnenen Informationen soll der Landwirt dann bequem in seinem FMIS abrufen können.
                            Zur Datenerfassung wurde ein autonomes Fahrzeug der Robot Makers GmbH von der TU Kaiserslautern mit zusätzlicher Sensorik ausgestattet. Die Zusatzsensorik umfasst aktuell zwei Stereokamerasysteme sowie einen 360° LIDAR.
                            <br />
                            <br />
                            <a href={window.website_url + "Artikel5"}> Zum Artikel ...</a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={{ width: "800px"}} src={artikel6} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Sidelink Technologie</h3><br />
                            Aktuelle Mobilfunkstandards wie 5G bieten die Möglichkeit der direkten Kommunikation zwischen Geräten und Maschinen auch bei Lücken in der Abdeckung des öffentlichen Mobilfunknetzes. Das HHI hat die Vorteile der sog. Sidelink-Technologie nun gemeinsam mit dem Partner John Deer auf dem Hofgut Neumühle im Rahmen des vom BMWK geförderten Projekts NaLamKI demonstriert. Mit Hilfe einer vom HHI entwickelten Software-basierten Sidelink-Kommunikationsplattform konnte dabei ein Videostream von einer Landwirtschaftsmaschine zu einem zentralen Kontrollzentrum übertragen. Die vom HHI entwickelte Sidelink-Plattform erlaubt nicht nur den Test des Sidelink-Konzepts, sondern auch eine Aufnahme von Messdaten auf allen Ebenen der Kommunikation, welche von im Projekt NaLamKI entwickelten KI-Lösungen zur Verbesserung der Verbindung genutzt werden können.
                            <br />
                            <br />
                            <a href={window.website_url + "Artikel6"}> Zum Artikel ...</a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid divided='vertically' style={{ padding: "50px" }}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <img style={{ width: "800px"}} src={artikel7} alt="bosse" />
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Datenerhebung aus der Luft durch die DLG und Optoprecision</h3><br />
                            Wie bereits in der Saison 2021, werden auch ´22 in Bernburg die Felder fotografiert. Der Unterschied ist, dieses Jahr werden die Kameras durch einen Hexakopter getragen. Die Versuchsflächen der DLG in Bernburg eignen sich aufgrund der Überwachung sehr gut und wurden für den Versuch bewusst nicht mit Fungiziden gehen Geldrost behandelt.
                            Ziel ist es auch dieses Mal ein Feldausschnitt lückenlos und über mehrere Tage hinweg aufzunehmen. Die Drohne ist hierfür mit einer Multispektralkamera, einer RGB Kamera sowie mit einem Laserentfernungsmesser ausgestattet. Mit dem Aufbau sind wir in der Lage 30min Flugzeit zu realisieren
                            <br />
                            <br />
                            <a href={window.website_url + "Artikel7"}> Zum Artikel ...</a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </>
    }
}

export default NewsPage;