import React, { Component } from "react";
import { Accordion, Icon, Image } from "semantic-ui-react";
import wide_image from "./Artikel5_Titelbild.jpg"
import img1 from "./image1.jpg"
import img2 from "./image2.jpg"

//import logo1 from './Logos/1.png';

let paragraph1 = `
  <div>
<p>
<p>Die TU Kaiserslautern und die Robot Makers GmbH untersuchen KI-Methoden zur impliziten</p>
<p>Durchf&uuml;hrung einer automatisierten Bonitur von Obstplantagen. Hierf&uuml;r zeichnen sie regelm&auml;&szlig;ig Daten in den Feldern des Obsthof Stockinger in Kallstadt auf. Die Vision, die den Arbeiten zu Grunde liegt, ist die Durchf&uuml;hrung einer impliziten Bonitur beim Erledigen sonstiger Arbeiten in der Anlage oder auch gezielt durch autonome Roboter. Die gewonnenen Informationen soll der Landwirt dann bequem in seinem FMIS abrufen k&ouml;nnen.</p>
<p>Zur Datenerfassung wurde ein autonomes Fahrzeug der Robot Makers GmbH von der TU Kaiserslautern mit zus&auml;tzlicher Sensorik ausgestattet. Die Zusatzsensorik umfasst aktuell zwei Stereokamerasysteme sowie einen 360&deg; LIDAR.</p>

</p> </div>
`;

let paragraph2 = `
  <div>
  <p>Abb.1 Sensorausstattung zur Datenaufzeichnung 360&deg; LIDAR und 2 Stereokamerasysteme (hier dargestellt)</p>
  <p>Mit diesem Aufbau wurden bereits mehrfach im vergangenen sowie im aktuellen Jahr Daten aufgezeichnet. Die relevanten Zeitpunkte f&uuml;r die Datenaufzeichnung sind dabei insbesondere:</p>
  <ul>
      <li>
          <p>Anfang M&auml;rz &ndash; vor der Bl&uuml;te</p>
      </li>
      <li>
          <p>Ende M&auml;rz/Anfang April &ndash; in der beginnenden Bl&uuml;te</p>
      </li>
      <li>
          <p>Anfang/Mitte April &ndash; in der Vollbl&uuml;te</p>
      </li>
      <li>
          <p>Ende Mai/Anfang Juni &ndash; vor dem Junifall</p>
      </li>
      <li>
          <p>Ende Juni/Anfang Juli &ndash; nach dem Junifall/vor der Ausd&uuml;nnung</p>
      </li>
      <li>
          <p>Anfang Juli &ndash; nach der Ausd&uuml;nnung</p>
      </li>
      <li>
          <p>Mitte Juli &ndash; mittlere Fruchtgr&ouml;&szlig;e</p>
      </li>
      <li>
          <p>September/Oktober &ndash; vor der Ernte</p>
      </li>
      <li>
          <p>Ende Oktober &ndash; nach der Ernte</p>
      </li>
  </ul>
 </div>
`;

let paragraph3 = `
  <div>
  <p>Abb. 2 Datenerhebung w&auml;hren der autonomen Durchfahrt</p>
 </div>
`;

export default class Artikel5 extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
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
        let paragraph_style = { marginTop: "30px", marginBottom: "30px" }
        let width = (this.state.width * 16) / 16;
        let height = (this.state.width * 9) / 16;
        width *= .5;
        height *= .5;

        return (
            <>
                <div style={{ width: "100%", height: "30px", paddingTop: "5px", background: "#8fc6cd" }}></div>
                <h1 style={{ textAlign: "center" }}><strong>Datenerhebung in Obstplantage</strong></h1>
                <img src={wide_image} style={{ width: "100%", paddingLeft: "20%", paddingRight: "20%" }} />
                <div style={{ marginLeft: "20%", marginRight: "20%" }}>
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
                    <div> Bereits heute arbeiten viele Landmaschinen teilautonom. RobotMakers geht den nächsten Schritt und entwickelt vollautonome Agrarroboter. Im Video ist die Plattform zur automatischen Inspektion von Apfelplantagen zu sehen.
                    </div>
                    <br />
                    <br />
                    <div><iframe width={width} height={height} src="https://www.youtube.com/embed/ePNkF0mi2_M"></iframe></div>
                </div>
            </>
        );
    }
}