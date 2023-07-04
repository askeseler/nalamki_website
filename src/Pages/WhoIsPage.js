import React, { Component } from "react";
import { Accordion, Icon, Image, Grid } from "semantic-ui-react";
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
import sebastian_bosse from "./WhoIsPage/HHI/sebastian_bosse.jpg"
import peter_eisert from "./WhoIsPage/HHI/peter_eisert.jpg"
import michael_gerstenberger from "./WhoIsPage/HHI/michael_gerstenberger.jpg"
import peter_pickel from "./WhoIsPage/JD/pickel.jpg"
import hartmut_krause from "./WhoIsPage/NT/krause.jpg"
import mortesa_hussaini from "./WhoIsPage/UNI_HOHENHEIM/mortesa_hussaini.jpg"
import jannes_magnusson from "./WhoIsPage/HHI/jannes_magnusson.jpg"
import anna_hilsmann from "./WhoIsPage/HHI/anna_hilsmann.jpg"
import alexander_burbeck from "./WhoIsPage/NT/alexander_burbeck.jpg"
import karsten_berns from "./WhoIsPage/TUK/karsten_berns.jpg"
import eike_gassen from "./WhoIsPage/TUK/eike_gassen.jpg"
import jakub_pawlak from "./WhoIsPage/TUK/jakub_pawlak.jpg"
import felix_moehrle from "./WhoIsPage/TUK/felix_moehrle.jpg"
import joerg_doerr from "./WhoIsPage/TUK/joerg_doerr.jpg"
import anthony_stein from "./WhoIsPage/UNI_HOHENHEIM/anthony_stein.jpg"
import jochen_hirth from "./WhoIsPage/Robotmakers/jochen_hirth.jpg"

export default class WhoIsPage extends Component {
    state = { activeIndex: -1 };

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
                    <Accordion>
                        <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}
                        >
                            <Image src={logo1} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={sebastian_bosse} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Dr. Sebastian Bosse </h3><br />
                                        Sebastian Bosse leitet die Gruppe "Interactive & Cognitive Systems" am Fraunhofer Heinrich-Hertz-Institut (HHI) in Berlin. Mit seiner Expertise in den Bereichen Künstliche Intelligenz und Bildverarbeitung ist Herr Bosse Ansprechpartner für vielfältige Fragestellungen zu Methoden der Datenverarbeitung im Projekt. Mit seiner Gruppe arbeitet er an der Integration von Expertenwissen durch Interaktive KI-Systeme. Herr Bosse ist Gründungsmitglied von NaLamKI, Vertreter des HHI im Steuerkreis und engagiert sich darüber hinaus in vielfältiger Weise für digitale Landwirtschaft etwa als Vizevorsitzender der Fokusgruppe 'AI and IoT for digital agriculture' der International Telecommunications Union.
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={michael_gerstenberger} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Michael Gerstenberger </h3><br />
                                        Michael Gerstenberger ist Kognitionswissenschaftler und als Teil der Gruppe "Interactive & Cognitive Systems" am Fraunhofer Heinrich-Hertz-Institut derzeit verantwortlich für die Forschung und Entwicklung zu interaktiven KI-Systemen in der Landwirtschaft. Im Rahmen von NaLamKI erarbeitet und untersucht er neuartige Konzepte der Mensch Maschine Interaktion mit welchen Expertenwissen aus der Agrardomäne erhoben und ins NaLamKI System eingespeist werden kann. Als Mitwirkender im Steuerkreis übernimmt Herr Gerstenberger seit kurzem zudem verschiedene Aufgaben für das Projektmanagement.
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={jannes_magnusson} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Jannes Magnusson </h3><br />
                                        <p>Jannes Magnusson ist wissenschaftlicher Mitarbeiter in der Gruppe &quot;Computer Vision and Graphics&quot; in der Abteilung &quot;Vision and Imaging Technologies&quot; am Fraunhofer HHI. Seine Forschung besch&auml;ftigt sich mit grammatikbasierter prozeduralen Modellierung von B&auml;umen aus Bildern und Videos (basierend auf L-Systemen). Ziel ist es, einen digitalen Zwilling von B&auml;umen abzuleiten, der nicht nur Informationen &uuml;ber die geometrische Struktur, sondern auch &uuml;ber Wachstum und weitere Merkmale (Anzahl der Fr&uuml;chte, Bl&uuml;ten, Baumphysiologie) enth&auml;lt. Die abgeleitete Repr&auml;sentation soll unter anderem genutzt werden, um Modelle f&uuml;r die Vorhersage von Wachstum, Ertrag, N&auml;hrstoffversorgung usw. zu lernen.</p>                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={peter_eisert} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Prof. Peter Eistert</h3><br />
                                        <p> Peter Eisert ist Abteilungsleiter der Vision & Imaging Technologies Abteilung des Fraunhofer HHI und Professor für Visual Computing an der Humboldt Universität zu Berlin. Seine Forschungsinteressen umfassen Computer Vision, Visual Computing, Deep Learning sowie Scene Understanding und Modellierung. In NaLamKi ist er in die Koordination der HHI Aktivitäten im Bereich der bildbasierten Pflanzenanalyse involviert.</p>                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={anna_hilsmann} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Anna Hilsmann</h3><br />
                                        <p>Anna Hilsmann leitet die Abteilung Vision and Imaging Technologies (VIT) und die Gruppe Computer Vision and Graphics am Fraunhofer HHI. Ihre Forschungsinteressen liegen in den Bereichen Computer Vision und Visual Computing, Deep Learning und bildbasierte Modellierung. Sie ist verantwortlich für das wissenschaftliche Management der VIT-Beiträge zu NaLamKI.</p>                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
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
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={peter_pickel} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Prof. Peter Pickel </h3><br />
                                        Prof. Dr. Peter Pickel, Manager External Relations, wurde mit Wirkung zum 31. Januar 2019 zum Honorarprofessor an der Technischen Universität Kaiserslautern (TUKL) bestellt. Er lehrt dort seit 2009 das Fach Landtechnik, kooperiert in zahlreichen Forschungs- und Entwicklungsprojekten mit der TUKL und ist in mehreren regionalen und überregionalen Gremien tätig. Unter anderem ist er Vorsitzender der VDI-MEG und leitet in Kaiserslautern den Wissenschaftlichen Beirat des Commercial Vehicle Cluster Südwest. Auf dieser Kooperationsplattform im Bereich Nutzfahrzeuge arbeiten süddeutsche Hochschulen, Industrieunternehmen und Wirtschaftsförderungen zusammen.
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Accordion.Content>
                        <hr />
                        {/* ------------------------------------------------------------------------------- */}

                        <Accordion.Title
                            active={activeIndex === 6}
                            index={6}
                            onClick={this.handleClick}
                        >
                            <Image src={logo6} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 6}>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={hartmut_krause} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Hartmut Krause </h3><br />
                                        Hartmut Krause ist Projektmanager bei der NT.AG (Neue Technologien) und leitet im Rahmen des NaLamKI Projekts die Konzeption und Entwicklung der Systemarchitektur zum Digitalen Zwilling. Herr Krause bringt sich mit seiner Expertise bei der Umsetzung anspruchsvoller Cloud Systeme und mit seiner Praxiserfahrung bei der Implementierung in die hauseigenen Serversystemen der NT.AG ins Konsortium ein. Hierbei greift Herr Krause auch auf weitreichende Erfahrungen mit dem Design geeigneter Datenstrukturen zur Modellierung von (land-) wirtschaftlichen Kenngrößen zurück die das Rückrat der Datenbanken des Systems darstellen.
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={alexander_burbeck} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Alexander Burbeck </h3><br />
                                        Alexander Burbeck vertritt in diesem Projekt den Konsortialpartner NT.AG. Er fungiert dort als technischer Projektleiter für die Aufgaben der NT.AG in diesem Forschungsprojekt. Zu seinen Aufgaben gehört es daher, gemeinsam mit seinen Kollegen und weiteren Partnern, die Systemarchitektur des NaLamKI Systems, unter Berücksichtigung der Gaia-X Vorgaben, zu entwerfen und umzusetzen. Hierbei gilt es besonders auf die Anforderungen der Landwirtschaft an ein solches System einzugehen und eine zukunftssichere Lösung zu schaffen. Zu seinen weiteren Aufgaben gehört die Betreuung des Rechenzentrums der NT.AG.
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Accordion.Content>
                        <hr />
                        {/* ------------------------------------------------------------------------------- */}

                        <Accordion.Title
                            active={activeIndex === 9}
                            index={9}
                            onClick={this.handleClick}
                        >
                            <Image src={logo9} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 9}>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={karsten_berns} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Karsten Berns </h3><br />
                                        <p>Als Leiter des Lehrstuhls Robotersysteme der TUK forscht Professor Berns an Offroad-Anwendungen der Robotik. Im Zusammenhang mit NaLamKI wird unter anderem das autonome Steuern und Navigieren eines  Kompakttraktors in landwirtschaftlicher Anwendung untersucht. In diesem Kontext soll auch das automatische Betreiben von Anbaugeräten realisiert werden. Die Realisierung dieser Aufgabe umfasst den gesamten Prozess der Umwelterkennung durch unterschiedliche Sensoren, die Informationsverarbeitung und Regelung des mechatronischen Systems. In einer Simulationsumgebung werden In einer Simulationsumgebung werden die echten Felder und zum Einsatz kommenden Roboter samt Sensorik nachgebildet und so weitere Daten erzeugt..</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={eike_gassen} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Eike Gassen </h3><br />
                                        <p>Im Rahmen von Demonstrator 1 und 3 beschäftigt sich Eike Gassen mit der Umsetzung der Sensorsysteme zur Erfassung der Feldfrüchte und Fahrbahnerkennung. Die Datenaufzeichnung und Aufbereitung ist hierbei ebenso Teil wie die mechatronische Umsetzung am Fahrzeug. Bei Demonstrator 4 erweitert sich der Aufgabenbereich durch das zusätzliche Ansteuern des Fahrzeuges samt Anbaugeräte. Das Anbringen der benötigten Sensorik an das Fahrzeug, Entwickeln von Software und Feldversuche fallen ebenso in seinen Aufgabenbereich</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={jakub_pawlak} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Jakub Pawlak</h3><br />
                                        <p>Bei der visuellen Erfassung von (Feld-)Früchten forscht Jakub Pawlak an der robusten Wahrnehmung durch Robotersysteme. Hierbei nutzt er generative Deep Learning Methoden. In diesem Kontext liegt auch ein großes Augenmerk auf der Simulationsumgebung, in der die reale Umgebung der Neumühle mit den zur Verfügung stehdenen Feldern nachgebildet werden. Dies dient der Erzeugung von simulierten Sensordaten die zum einen den Trainingsdatensatz erweitern und zum anderen eine Simulation von Fahrzeugdaten ermöglichen. </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={joerg_doerr} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Jörg Dörr</h3><br />
                                        <p>Als Leiter des Lehrstuhls Digital Farming der TUK forscht Professor Dörr zu verschiedenen Themen im Bereich Software und Systems Engineering in der Landwirtschaft. Seine Schwerpunkte liegen auf der Analyse der Anforderungen und Nutzungsakzeptanz der unterschiedlichen Akteure im digitalen Ökosystem, der Verbesserung von Interoperabilität und Vernetzung sowie dem effektiven Datenmanagement. Im Rahmen von NaLamKI zählt das Verständnis der Anforderungen und die Gestaltung einer GAIA-X-konformen Referenzarchitektur zu seinem Aufgabenbereich.</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={felix_moehrle} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Felix Möhrle</h3><br />
                                        <p>Bei der Vernetzung von Akteuren im landwirtschaftlichen Ökosystem ergeben sich einige Herausforderungen, wie z.B. mangelnde Infrastruktur und Bedenken hinsichtlich Datenhoheit. Felix Möhrle forscht an der Entwicklung einer tragfähigen Architektur, die die Vernetzung von Landwirten als Datenproduzenten und verschiedenen Datennutzern auf Basis von GAIA-X ermöglicht.</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            
                        </Accordion.Content>
                        <hr />

                        {/* ------------------------------------------------------------------------------- */}
                        <Accordion.Title
                            active={activeIndex === 10}
                            index={10}
                            onClick={this.handleClick}
                        >
                            <Image src={logo10} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 10}>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={mortesa_hussaini} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Mortesa Hussaini </h3><br />
                                        <p>Mortesa Hussaini ist studierter Mathematiker und forscht im Bereich KI am Fachgebiet&nbsp;<em>&bdquo;K&uuml;nstliche Intelligenz in der Agrartechnik&ldquo;</em> der Universit&auml;t Hohenheim (UHOH). Im Rahmen des NaLamKI Projekts ist er u.a. f&uuml;r die Forschung und Entwicklung m&ouml;glicher Konzepte des&nbsp;<em>verteilten Maschinellen Lernens</em> verantwortlich. Insbesondere die Anbindung und Applikation des&nbsp;<em>Federated Learning</em> Konzepts im agrarwissenschaftlichen Kontext des Digital Farming zur besseren Gew&auml;hrleistung von Datensicherheit und Privatsph&auml;re nimmt in seinem Forschungsbereich eine wichtige Rolle ein.</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={anthony_stein} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Anthony Stein </h3><br />
                                        <p>Anthony Stein ist promovierter Informatiker und Tenure-Track Professor für Künstliche Intelligenz in der Agrartechnik an der Universität Hohenheim. Seit 2020 leitet er am Institut für Agrartechnik das neugegründete KI-Fachgebiet. Mit seinem Team erforscht er im Projekt Methoden und Techniken der Künstlichen Intelligenz für den Einsatz im Kontext einer digitalisierten Landwirtschaft. Dies umfasst insbesondere neuartige föderierte und automatisierte Ansätze des maschinellen Lernens zur Wahrung der Datensouveränität sowie zur Senkung der Nutzungsbarriere landwirtschaftlicher Endnutzer. Seit 2022 gehört Anthony Stein dem Vorstand der Gesellschaft für Informatik in der Land-, Forst- und Ernährungswirtschaft (GIL e.V.) an. </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Accordion.Content>
                        <hr />

                        <></>
                        {/* ------------------------------------------------------------------------------- */}

                        {/* ------------------------------------------------------------------------------- */}
                        <Accordion.Title
                            active={activeIndex === 8}
                            index={8}
                            onClick={this.handleClick}
                        >
                            <Image src={logo8} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 8}>
                            <Grid divided='vertically' style={{}}>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <img style={{ padding: "50px", width: "550px" }} src={jochen_hirth} alt="bosse" />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>Jochen Hirth </h3><br />
                                        <p>Dr. Jochen Hirth ist Leiter der Abteilung Forschung und Entwicklung bei der Robot Makers GmbH und Experte für intelligente kognitive Robotik und autonome mobile Arbeitsmaschinen. Seit Jahren beschäftigt er sich mit Fragestellungen rund um die Automation von landwirtschaftlichen Maschinen, Aufgaben und Prozessen. Insbesondere in den Bereichen Obst- und Weinbau. Mit seinem Team untersucht er dabei u.a. neuartige Methoden der Datenauswertung zur Generierung von Mehrwerten für Endanwender. Im Rahmen des Projekts ist er insbesondere Ansprechpartner für Fragen rund um das Thema Inspektion von Obstplantagen.</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Accordion.Content>
                        <hr />

                        <></>
                        {/* ------------------------------------------------------------------------------- */}

                        {/* ------------------------------------------------------------------------------- 
                        <Accordion.Title
                            active={activeIndex === 9}
                            index={9}
                            onClick={this.handleClick}
                        >
                            <Image src={logo10} style={logostyle} className={["ui", "medium", "image"].join(" ")} />
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 9}>
                        </Accordion.Content>
                        <hr />
                         ------------------------------------------------------------------------------- */}
                    </Accordion>
                </div>
            </>
        );
    }
}