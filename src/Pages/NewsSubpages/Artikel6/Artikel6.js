import React, { Component } from "react";
import { Accordion, Icon, Image } from "semantic-ui-react";
import wide_image from "./Artikel6_Titelbild.jpg"

//import logo1 from './Logos/1.png';

let paragraph1 = `
  <div>
<p>
<p>Aktuelle Mobilfunkstandards wie 5G bieten die M&ouml;glichkeit der direkten Kommunikation zwischen Ger&auml;ten und Maschinen auch bei L&uuml;cken in der Abdeckung des &ouml;ffentlichen Mobilfunknetzes. Das HHI hat die Vorteile der sog. Sidelink-Technologie nun gemeinsam mit dem Partner John Deer auf dem Hofgut Neum&uuml;hle im Rahmen des vom BMWK gef&ouml;rderten Projekts NaLamKI demonstriert. Mit Hilfe einer vom HHI entwickelten Software-basierten Sidelink-Kommunikationsplattform konnte dabei ein Videostream von einer Landwirtschaftsmaschine zu einem zentralen Kontrollzentrum &uuml;bertragen. Die vom HHI entwickelte Sidelink-Plattform erlaubt nicht nur den Test des Sidelink-Konzepts, sondern auch eine Aufnahme von Messdaten auf allen Ebenen der Kommunikation, welche von im Projekt NaLamKI entwickelten KI-L&ouml;sungen zur Verbesserung der Verbindung genutzt werden k&ouml;nnen.</p>
</p> </div>
`;



export default class Artikel6 extends Component {
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
        let paragraph_style = { marginTop:"30px", marginBottom:"30px"}
        let width = (this.state.width*16)/16;
        let height = (this.state.width*9)/16;
        width *= .5;
        height *= .5;
        return (
            <>
            <div style={{ width: "100%", height: "30px", paddingTop: "5px", background: "#8fc6cd" }}></div>
              <h1 style={{textAlign:"center"}}><strong>Sidelink Technologie</strong></h1>
                <img src={wide_image} style={{ width: "100%", paddingLeft: "20%", paddingRight: "20%" }} />
                <div style={{ marginLeft: "20%", marginRight:"20%" }}>
                    <div style={paragraph_style}
                        dangerouslySetInnerHTML={{ __html: paragraph1 }}
                    />
                    <div><iframe width={width} height={height} src="https://www.youtube.com/embed/lheOhk_DJtI"></iframe></div>
                </div>
            </>
        );
    }
}