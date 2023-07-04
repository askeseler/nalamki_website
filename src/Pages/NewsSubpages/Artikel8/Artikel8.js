import React, { Component } from "react";
import { Accordion, Icon, Image } from "semantic-ui-react";
import wide_image from "./Artikel8_Titelbild.jpg"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"

//import logo1 from './Logos/1.png';

let paragraph1 = `
<h1 style='margin-bottom: 0.08in;background: transparent;font-family: "Liberation Serif", serif;font-size:32px;font-weight: bold;'><strong style="font-weight: bold;">Ort &amp; Zeit</strong></h1>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><strong style="font-weight: bold;"><strong style="font-weight: bold;">Am&nbsp;26.01.2023: KI-Anwendungen und Interoperabilit&auml;t als Zukunft der Landwirtschaft</strong></strong></p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><strong style="font-weight: bold;"><strong style="font-weight: bold;">Internationale</strong></strong><strong style="font-weight: bold;">&nbsp;</strong><strong style="font-weight: bold;"><strong style="font-weight: bold;">Gr&uuml;ne</strong></strong><strong style="font-weight: bold;">&nbsp;</strong><strong style="font-weight: bold;"><strong style="font-weight: bold;">Woche</strong></strong><strong style="font-weight: bold;">&nbsp;</strong><strong style="font-weight: bold;"><strong style="font-weight: bold;">2023:&nbsp;</strong></strong>Erlebnis-Bauernhof in Halle 3.2</p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><strong style="font-weight: bold;"><strong style="font-weight: bold;">Anmeldung f&uuml;r die Tagung:&nbsp;</strong></strong>Bitte melden Sie sich bis zum <strong style="font-weight: bold;"><strong style="font-weight: bold;">15.01.2023</strong></strong> an.</p>
<p style="margin-bottom: 0.1in;line-height: 50%;background: transparent;"><br></p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><strong style="font-weight: bold;"><a href="https://www.eventbrite.com/e/ki-anwendungen-und-interoperabilitat-als-zukunft-der-landwirtschaft-tickets-466277978987"><span size="2" style="font-size:13px;"><strong>Hier zur Anmeldung &uuml;ber Eventbribe.</strong></span></a></strong></p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><br></p>
<h1 style='margin-bottom: 0.1in;background: transparent;font-family: "Liberation Serif", serif;font-size:32px;font-weight: bold;margin-top: 0.1in;'>Herzliche Einladung</h1>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;">Digitalisierung macht Landwirtschaft nachhaltig. Der Einsatz von neuesten Technologien bietet die M&ouml;glichkeit umweltfreundlicher sowie ressourcen- schonender zu produzieren und gleichzeitig die Ertr&auml;ge zu steigern. Mit dem Forschungsprojekt&nbsp;&bdquo;Nachhaltige Landwirtschaft mittels K&uuml;nstlicher Intelligenz&ldquo; (NaLamKI) zeigen wir auf, wie die Digitalisierung bei der Berechnung, Planung, Dokumentation und Analyse hilft, zuk&uuml;nftige Arbeiten zu optimieren. Voraussetzung f&uuml;r pr&auml;zises Arbeiten sind Daten und Informationen. Daten, die z.B. von Landmaschinen, Satelliten, Drohnen und Wetterstationen erfasst, abgeglichen, weiter- verarbeitet und beispielsweise mit k&uuml;nstlicher Intelligenz aufbereitet werden. Dabei kommt es vor allem auf die Vernetzung der Daten und Informa- tionen in der Cloud und die Bereitstellung der Informationen f&uuml;r Landwirt*innen an. Die einzelnen Schritte des Produktionssystems k&ouml;nnen dadurch verbunden werden und aufeinander aufbauen. Erfahren Sie mehr auf unserer Tagung&nbsp;&bdquo;KI-Anwendungen und Interoperabilit&auml;t als Zukunft&nbsp;der&nbsp;Landwirtschaft&ldquo;&nbsp;am&nbsp;26.01.2023&nbsp;im Rahmen der Internationalen Gr&uuml;nen Woche.</p>
<p style="margin-bottom: 0.1in;line-height: 50%;background: transparent;"><br>&nbsp;</p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;">Wir freuen uns auf Sie!&nbsp;</p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;">Freundlichst Ihr Prof. Dr. Peter Pickel John Deere GmbH &amp; Co. KG</p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><br>&nbsp;</p>
<h1 style='margin-bottom: 0.1in;background: transparent;font-family: "Liberation Serif", serif;font-size:32px;font-weight: bold;margin-top: 0.1in;'>Teilnahmegeb&uuml;hren</h1>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;">Die Teilnahme an der Tagung ist <strong style="font-weight: bold;"><strong style="font-weight: bold;">kostenfrei</strong></strong>. Die Tagung findet im Rahmen der Internationalen Gr&uuml;nen Woche statt. Tickets hierzu erhalten Sie auf der Website der Internationalen Gr&uuml;nen Woche.</p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><br>&nbsp;</p>
<h1 style='margin-bottom: 0.1in;background: transparent;font-family: "Liberation Serif", serif;font-size:32px;font-weight: bold;margin-top: 0.1in;'><strong style="font-weight: bold;"><strong style="font-weight: bold;">Programm</strong></strong><strong style="font-weight: bold;">&nbsp;</strong><strong style="font-weight: bold;"><strong style="font-weight: bold;">10:00</strong></strong><strong style="font-weight: bold;">&nbsp;</strong><strong style="font-weight: bold;"><strong style="font-weight: bold;">-</strong></strong><strong style="font-weight: bold;">&nbsp;</strong><strong style="font-weight: bold;"><strong style="font-weight: bold;">18:00&nbsp;</strong></strong>(Einlass ab 10:00)</h1>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><br>&nbsp;</p>
<h2 style='margin-top: 0.1in;margin-bottom: 0.1in;background: transparent;font-family: "Liberation Serif", serif;font-size:24px;font-weight: bold;'>10:30 - 12:00</h2>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;">Digitalisierung f&uuml;r eine nachhaltigere Landwirt- schaft &ndash; Rahmenbedingungen Keynotes und Paneldiskussion mit Vertreter*innen vom BMEL, BMWK, vom Projekt NaLamKI und der Landwirt- schaft.&nbsp;</p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><em style="font-style: italic;">Gru&szlig;wort&nbsp;von&nbsp;PSts&nbsp;Dr.&nbsp;Ophelia&nbsp;Nick&nbsp;(BMEL)</em></p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><br>&nbsp;</p>
<h2 style='margin-top: 0.1in;margin-bottom: 0.1in;background: transparent;font-family: "Liberation Serif", serif;font-size:24px;font-weight: bold;'>13:00 - 15:00</h2>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;">Trends und Voraussetzungen f&uuml;r die digitale Landwirtschaft&nbsp;</p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><em style="font-style: italic;">Prof. Dr. J&ouml;rg D&ouml;rr (TUK)&nbsp;</em></p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><em style="font-style: italic;">Herrmann Buitkamp (VDMA)&nbsp;</em></p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><em style="font-style: italic;">Prof. Peter Liggesmeyer (FhG IESE)&nbsp;</em></p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><em style="font-style: italic;">Florian Schiller (DLG)</em></p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><br>&nbsp;</p>
<h2 style='margin-top: 0.1in;margin-bottom: 0.1in;background: transparent;font-family: "Liberation Serif", serif;font-size:24px;font-weight: bold;'>15:30 - 17:30</h2>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;">Aktuelle Aktivit&auml;ten</p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><em style="font-style: italic;">Prof. Dr. Stefan Stiene (DFKI)&nbsp;</em></p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><em style="font-style: italic;">Sida Dai (FhG HHI)</em></p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><em style="font-style: italic;">Sonoko Dorothea&nbsp;Bellingrath-Kimura (ZALF)</em></p>
<p style="margin-bottom: 0.1in;line-height: 115%;background: transparent;"><br>&nbsp;<br>&nbsp;</p>
<p><br></p>
`;

let paragraph2 = `
  <div>
 </div>
`;

let paragraph3 = `
  <div>
 </div>
`;


export default class Artikel8 extends Component {
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
              <h1 style={{textAlign:"center"}}><strong>NaLamKI Tagung auf der Grünen Woche in Berlin</strong></h1>
                <img src={wide_image} style={{ width: "100%", paddingLeft: "20%", paddingRight: "20%" }} />
                <div style={{ marginLeft: "20%", marginRight:"20%" }}>
                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph1 }}
                    />
                </div>
            </>
        );
    }
}