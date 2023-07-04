import React from "react";
import { Route } from "react-router-dom";
import { Button, Image, Grid, Icon, Segment, Label, List } from "semantic-ui-react";
import CalenderComponent from "./CalenderComponent.js"
import CustomTicker from '../Ticker.js'

import startseite1 from './LandingPage/startseite1a.jpg';
import startseite2 from './LandingPage/startseite2.jpg';
import startseite3 from './LandingPage/startseite3.jpg';

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

function img2Base64(file, cb) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    //eine cloudbasierte Software-as-a-Service-Plattform mit offenen Schnittstellen für Anbieter aus den Bereichen der Landwirtschaft, der Industrie, und den Serviceanbietern im Pflanzenbau"

  }
  render() {
    let logostyle = { width: "auto", height: "100px", padding: "20px" }
    return (

      <>
        <div style={{ width: "100%", height: "30px", paddingTop: "5px", background: "#8fc6cd" }}><CustomTicker /></div>
        <div style={{ margin: "50px" }}>
        <Grid>
          <Grid.Column textAlign="center">
            <h1>NaLamKI</h1><br />
            Im Forschungsprojekt NaLamKI werden KI-Dienste für die Anwendung in der Landwirtschaft entwickelt, welche Daten aus konventionellen und autonomen Landmaschinen, Satelliten und Drohnen auswerten, in einer Software-Service Plattform zusammenführen und Ergebnisse über offene Schnittstellen zugänglich machen. </Grid.Column>
        </Grid>

        <Grid divided='vertically' style={{ marginTop: "50px" }}>
          <Grid.Row columns={2}>
            <Grid.Column>
              <h2>Projektübersicht</h2><br />
              NaLamKI steht für Nachhaltige Landwirtschaft mit Künstlicher Intelligenz. Im Projekt werden spezielle Methoden der KI entwickelt und auf Fragestellungen aus Agrartechnik und Wissenschaft angepasst. Außerdem werden die Voraussetzungen geschaffen, um die erhobenen Datensätze und KI-Modelle in Form von Cloudanwendungen mit offenen Schnittstellen für Entwickler und Endanwender von Smart-Farming-Solutions zugänglich zu machen.
              <List as='ul' style={{ marginLeft: "50px" }}>
                <List.Item style={{ padding: "20px" }} as='li'>NaLamKI demonstriert den Einsatz von Künstlicher Intelligenz in (teil-) autonomen Landmaschinen unter anderem zur Einsparung von Saatgut, zur Reduzierung der Pestizid- und Stickstoffbelastung und der Früherkennung von Pflanzeninfektionen.</List.Item>
                <List.Item style={{ padding: "20px" }} as='li'>NaLamKI schafft die Voraussetzungen für einen Agricultural-Data-Space in welchem Datensätze und KI-Methoden durch eine Edge-Cloud skalierbar verwaltet und über offene Schnittstellen für Frontendlösungen und Drittnutzer zugänglich gemacht werden.</List.Item>
                <List.Item style={{ padding: "20px" }} as='li'>NaLamKI fördert den Austausch zwischen Ingenieuren und Wissenschaftlern, die eine gemeinsame Vision vereint: Erkenntnisse aus der Grundlagenforschung in Technologien zu überführen, die Smart-Farming nicht nur möglich, sondern auch nachhaltig machen.</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <img style={{ padding: "50px" }} src={startseite1} alt="startseite1" style={{ width: "100%" }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <hr style={{ marginTop: "50px", marginBottom: "50px" }} />
        <Grid divided='vertically' style={{ marginTop: "50px" }}>
          <Grid.Row columns={2}>
            <Grid.Column style={{ paddingTop: "10px", margin: "0px" }}>
              <img src={startseite2} alt="startseite2" style={{ width: "100%" }} />
              <h3 style={{ paddingLeft: "10px" }}>Unsere Motivation</h3>
              <div style={{ padding: "10px", textAlign: "justify" }}>Nachhaltig, ressourcensparend, intelligent und vernetzt: Das ist unsere Vision für die moderne Landwirtschaft. In Zeiten von Big-Data zeichnen Landmaschinen bereits heute fortlaufend Prozessdaten auf, welche zur Optimierung der Verfahren herangezogen werden können. Durch den Einsatz von künstlicher Intelligenz werden darüber hinaus aber auch vollkommen neue Methoden möglich welche die Wegbereiter der Landwirtschaft von morgen sind: Von einem verbesserten Nährstoff- und Pflanzenschutzmanagement oder der Überwachung der Bodenfeuchte bis hin zur Erkennung von Pflanzenerkrankungen per Satellit. Der Einsatz künstlicher Intelligenz verspricht Mehrwerte in allen Stadien von Acker und Gartenbau. Voraussetzung dafür innovative KI-Modelle in Spitzentechnologie zu überführen ist jedoch der Zugang zu Datensätzen aus der Agrardomäne mit entsprechenden Metadaten, welche häufig aus externen Quellen stammen.</div>
            </Grid.Column>
            <Grid.Column style={{ paddingTop: "10px", textAlign: "justify" }}>
              <img src={startseite3} alt="startseite2" style={{ width: "100%" }} />
              <h3 style={{ paddingLeft: "10px" }}>Unsere Ziele</h3>
              <div style={{ padding: "10px" }}>Um die Potentiale durch intelligente Systeme in der Landwirtschaft heben zu können, müssen einerseits die KI-Methoden auf landwirtschaftliche Use-Cases angepasst werden. Andererseits müssen domänenspezifische Daten für das Training der Modelle aufbereitet und zugänglich gemacht werden. Durch Aggregierung von Sensor und Maschinendaten, die mittels Fernerkundung, Bodensensorik, Robotik, manueller Datenerhebung und Bestandsdaten gewonnen werden, entsteht ein wertvoller Datenpool, aus dem landwirtschaftliche Prozesse wie Bewässerung, Düngung und Schädlingsbekämpfung durch moderne KI-Methoden, autonome Fahrzeug- und Agentenverbünde nachhaltiger, effizienter und transparenter optimiert werden können. Durch den Aufbau eines International Data Space for Agriculture (IDSA) und GAIA-X konformer Dienste wird die Plattform interoperabel zwischen verschiedenen zentralen und dezentralen Cloud-Anbietern und Anwendern agieren.</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <hr style={{ marginTop: "50px", marginBottom: "50px" }} />

        <Grid style={{ marginBottom: "50px" }}>
          <Grid.Column textAlign="center"><h2>Unsere Partner</h2>
          </Grid.Column>
        </Grid>

        <Grid columns={5}>
          <Grid.Row>
            <Grid.Column>
              <Image src={logo1} style={logostyle} className={["ui", "centered", "medium", "image"].join(" ")} />
            </Grid.Column>
            <Grid.Column>
              <Image src={logo2} style={logostyle} className={["ui", "centered", "medium", "image"].join(" ")} />
            </Grid.Column>
            <Grid.Column>
              <Image src={logo3} style={logostyle} className={["ui", "centered", "medium", "image"].join(" ")} />
            </Grid.Column>
            <Grid.Column>
              <Image src={logo4} style={logostyle} className={["ui", "centered", "medium", "image"].join(" ")} />
            </Grid.Column>
            <Grid.Column>
              <Image src={logo5} style={logostyle} className={["ui", "centered", "medium", "image"].join(" ")} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Image src={logo6} style={logostyle} className={["ui", "centered", "medium", "image"].join(" ")} />
            </Grid.Column>
            <Grid.Column>
              <Image src={logo7} style={logostyle} className={["ui", "centered", "medium", "image"].join(" ")} />
            </Grid.Column>
            <Grid.Column>
              <Image src={logo8} style={logostyle} className={["ui", "centered", "medium", "image"].join(" ")} />
            </Grid.Column>
            <Grid.Column>
              <Image src={logo9} style={logostyle} className={["ui", "centered", "medium", "image"].join(" ")} />
            </Grid.Column>
            <Grid.Column>
              <Image src={logo10} style={logostyle} className={["ui", "centered", "medium", "image"].join(" ")} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <CalenderComponent></CalenderComponent>
      </div>
      </>

    );
  }
}

export default LandingPage;
