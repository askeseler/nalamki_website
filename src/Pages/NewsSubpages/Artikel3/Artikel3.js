import React, { Component } from "react";
import { Accordion, Icon, Image } from "semantic-ui-react";
import wide_image from "./Artikel3_Titelbild.jpg"
import img2 from "./image2.jpg"
import img3 from "./image3.jpg"

//import logo1 from './Logos/1.png';

let paragraph1 = `
<p>Nachdem Planet Labs in einem ersten Schritt die genauen Anforderungen der KI-Verfahren und Dienste erfolgreich identifiziert hat, wurden in einer zweiten Phase geeignete Zeitfenster f&uuml;r den Satelliten&uuml;berflug abgestimmt, um die entsprechenden Datengrundlagen zu schaffen. Im dritten Schritt fanden &uuml;ber den Untersuchungsgebieten erste Aufnahmen mit den Planet Satelliten statt. Aus den t&auml;glichen Aufnahmen mit dem PlanetScope Satelliten wurden im t&auml;glichen &Uuml;berflug wolkenfreie, l&uuml;ckenlose, radiometrisch harmonisierte multi-spektrale Zeitreihen generiert, die eine r&auml;umliche Aufl&ouml;sung von 3m haben. Diese sogenannten Planet Fusion Daten werden nun ausgewertet mit dem Ziel fl&auml;chendeckende, r&auml;umlich differenzierte Informationen zum aktuellen Pflanzenzustand und deren zeitlicher Entwicklung f&uuml;r Ackerkulturen bereitzustellen. In einer ersten Phase konzentrieren diese sich auf die Bereitstellung von Informationen zur Pflanzenentwicklung. &nbsp;</p>`;

let paragraph2 = `
  <div>
  <p>
  Zudem erfolgten über ausgewählten Gebieten (Apfelbaumplantagen), Aufnahmen mit dem sehr hoch auflösenden SkySat Satelliten, die für die Erhebung von Schlageigenschaften verwendet werden.  
  </p>
 </div>
`;

export default class Artikel3 extends Component {
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
              <h1 style={{textAlign:"center"}}><strong>Planet Fusion: Zeitreihen hochaufgelöster Multispektraldaten </strong></h1>
                <img src={wide_image} style={{ width: "100%", paddingLeft: "20%", paddingRight: "20%" }} />
                <div style={{ marginLeft: "20%", marginRight:"20%" }}>
                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph1 }}
                    />
                   <img src={img2} style={{ width: "100%", paddingLeft: "30%", paddingRight: "30%" }} />
                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph2 }}
                    />
                   <img src={img3} style={{ width: "100%", paddingLeft: "30%", paddingRight: "30%" }} />

                </div>
            </>
        );
    }
}