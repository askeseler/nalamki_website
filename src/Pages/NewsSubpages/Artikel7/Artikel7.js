import React, { Component } from "react";
import { Accordion, Icon, Image } from "semantic-ui-react";
import wide_image from "./Artikel7_Titelbild.jpg"
import img1 from "./Abb1.jpg"
import img2 from "./Abb2.jpg"
import img3 from "./Abb3.jpg"

//import logo1 from './Logos/1.png';

let paragraph1 = `
  <div>
  <p><span size="1">Wie bereits in der Saison 2021, werden auch &acute;22 in Bernburg die Felder fotografiert. Der Unterschied ist, dieses Jahr werden die Kameras durch einen Hexakopter getragen. Die Versuchsfl&auml;chen der DLG in Bernburg eignen sich aufgrund der &Uuml;berwachung sehr gut und wurden f&uuml;r den Versuch bewusst nicht mit Fungiziden gehen Geldrost behandelt.&nbsp;</span></p>
  </div>
`;

let paragraph3 = `
  <div>
  <p><span size="3">Die Bilder sollen Aufschluss &uuml;ber den Zustand der Weizenpflanzen, sowie &uuml;ber einen m&ouml;glichen Krankheitsbefall mit Geldrost geben. In den N&auml;chsten schritten werden die Einzelbilder zu einem Gesamtbild des Feldausschnittes zusammengesetzt und die K&uuml;nstliche Intelligenzen der Partner weiterentwickelt und validiert.&nbsp;</span></p>
 </div>
`;

let paragraph2 = `
  <div>
  <p><p>Ziel ist es auch dieses Mal ein Feldausschnitt l&uuml;ckenlos und &uuml;ber mehrere Tage hinweg aufzunehmen. Die Drohne ist hierf&uuml;r mit einer Multispektralkamera, einer RGB Kamera sowie mit einem Laserentfernungsmesser ausgestattet. Mit dem Aufbau sind wir in der Lage 30min Flugzeit zu realisieren</p>
  </p>
  <p><br>&nbsp;</p>
 </div>
`;

export default class Artikel7 extends Component {
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
              <h1 style={{textAlign:"center"}}><strong>Datenerhebung durch OptoPrecision und die DLG Bernbrug</strong></h1>
                <img src={wide_image} style={{ width: "100%", paddingLeft: "20%", paddingRight: "20%" }} />
                <div style={{ marginLeft: "20%", marginRight:"20%" }}>
                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph1 }}
                    />
                    <img src={img1} style={{ width: "100%", paddingLeft: "30%", paddingRight: "30%" }} />

                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph2 }}
                    />
                    <img src={img2} style={{ width: "100%", paddingLeft: "30%", paddingRight: "30%" }} />
                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph3 }}
                    />
                    <img src={img3} style={{ width: "100%", paddingLeft: "30%", paddingRight: "30%" }} />
                </div>
            </>
        );
    }
}