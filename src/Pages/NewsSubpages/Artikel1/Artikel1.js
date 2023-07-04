import React, { Component } from "react";
import { Accordion, Icon, Image } from "semantic-ui-react";
import wide_image from "./Artikel1_Titelbild.jpg"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"

//import logo1 from './Logos/1.png';

let paragraph1 = `
  <div>
<p>Das Fraunhofer HHI hat mit der Datenerhebung auf der Apfelplantage eines f&uuml;hrenden lokalen Produzenten f&uuml;r Obst in Brandenburg begonnen. Die Messungen erfolgen in regelm&auml;&szlig;igen Zeitintervallen und decken einen erheblichen Teil der Pflanzreihen zur Sorte Jonagold ab. Ziel ist es, das Pflanzenwachstum im Jahresverlauf zu dokumentieren, Erntemengen abzusch&auml;tzen, Zusammenh&auml;nge mit verschiedenen internen und externen Wachstumsfaktoren aufzudecken und zu untersuchen, wie sich diese auf die wichtigsten Key Performance Indicators (KPIs) auswirken. Im ersten Schritt dienen die Daten als Grundlage f&uuml;r die Entwicklung neuartiger Methoden der K&uuml;nstlichen Intelligenz, welche eine pr&auml;zise Vermessung der Anpflanzung erm&ouml;glichen, mit dem Ziel, eine digitale Repr&auml;sentation des Schlags zu erstellen, und somit die Grundlage f&uuml;r die abgeleiteten Smart-Farming-Solutions darstellen.</p>
 </div>
`;

let paragraph2 = `
  <div>
  <p>Zur Erfassung der Daten kommt ein eigens entwickeltes Stereo-Setup mit zwei DSLR Kameras zum Einsatz, das die Extraktion von Tiefeninformation erlaubt. Durch moderne Structure-from-Motion Ansätze können die verschiedenen Einzelaufnahmen fusioniert und ein digitales Abbild der Pflanzen abgeleitet werden.</p>
 </div>
`;

let paragraph3 = `
  <div>
  <p>Das HHI steht in engem Austausch mit den Partnern RobotMakers und Optoprecision über Möglichkeiten der Automatisierung der Datenaufnahme und die Integration der entwickelten Methoden in autonome Fahrzeuge oder UAVs (“Drohne”). Die Daten und die auf ihrer Grundlage entwickelten intelligenten Verfahren sind insbesondere für die Implementierung in mobilen Agrar-Systemen relevant. Sie stehen allen Partnern zur Verfügung, können perspektivisch in das NaLamKI System eingespeist und über die Plattform verwaltet werden.</p>
 </div>
`;


export default class Artikel1 extends Component {
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
        let paragraph_style = { marginTop:"30px", marginBottom:"30px"}
        return (
            <>
            <div style={{ width: "100%", height: "30px", paddingTop: "5px", background: "#8fc6cd" }}></div>
              <h1 style={{textAlign:"center"}}><strong>HHI beginnt mit Aufnahmen von Obstplantage in Brandenburg</strong></h1>
                <img src={wide_image} style={{ width: "100%", paddingLeft: "20%", paddingRight: "20%" }} />
                <div style={{ marginLeft: "20%", marginRight:"20%" }}>
                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph1 }}
                    />
                    <img src={img1} style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%" }} />

                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph2 }}
                    />
                    <img src={img2} style={{ width: "100%", paddingLeft: "30%", paddingRight: "30%" }} />

                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph3 }}
                    />

                </div>
            </>
        );
    }
}