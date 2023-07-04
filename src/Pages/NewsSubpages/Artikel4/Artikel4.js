import React, { Component } from "react";
import { Accordion, Icon, Image } from "semantic-ui-react";
import wide_image from "./Artikel4_Titelbild.jpg"
import img1 from "./image1.jpg"

//import logo1 from './Logos/1.png';

let paragraph1 = `
  <div>
<p>Die NT.AG übernimmt als starker Partner im Konsortium primär technologische Aufgaben und entwickelt eine Cloud basierte Systemarchitektur auf Basis aktueller Standards und Vorgaben von Gaia-X. Zunächst wurde dafür in einem strengen Prozess der benötigte Softwarestack ausgewählt und zusammengestellt. Dabei lag der Fokus besonders darauf, eine Lösung zu schaffen, welche auf Industrieniveau steht und auch im Praxisbetrieb sicher einsetzbar ist. Im nächsten Schritt wurde die Infrastruktur konzipiert und gemeinsam mit namhaften Herstellern die benötigte Hardware zusammengestellt. Daraufhin erfolgte die Aufbauphase mit abschließender Inbetriebnahme.</p> </div>
`;

let paragraph2 = `
  <div>
  <p>Auf dem geschaffenen Stand entwickelt die NT.AG gemeinsam mit dem Konsortium nun die Dienste und Anwendungen, welche das Backbone der NaLamKI Plattform darstellen. Die eingesetzten Technologien ermöglichen dabei auch modernste Lösungen, wie beispielsweise das Training der benötigten neuronalen Netze. Einen wichtigen Teil des Projektes NaLamKI stellt die Konzeption und Entwicklung des digitalen Schlags dar. Er stellt kombiniert die Ergebnisse aller Demonstratoren und sonstigen Daten, um ein digitales Abbild eines realen Feldes zu generieren. Dieser sogenannte digitale Zwilling soll künftig ermöglichen, dass die Landwirtschaft und Technologie auf Basis von Gaia-X miteinander verbunden werden, in dem er beispielsweise Kompatibilitätsprobleme beseitigt und einen Standard schafft. Dieser Aufgabe widmet sich die NT.AG vorrangig und bringt dabei ihr gesamtes technologisches Know-How in das Projekt ein. 
  </p>
 </div>
`;

export default class Artikel4 extends Component {
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
              <h1 style={{textAlign:"center"}}><strong>Die NT Neue Technologie AG entwickelt die Systemarchitektur von NaLamKi</strong></h1>
                <img src={wide_image} style={{ width: "100%", paddingLeft: "20%", paddingRight: "20%" }} />
                <div style={{ marginLeft: "20%", marginRight:"20%" }}>
                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph1 }}
                    />
                    <img src={img1} style={{ width: "100%", paddingLeft: "30%", paddingRight: "30%" }} />

                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph2 }}
                    />
                </div>
            </>
        );
    }
}