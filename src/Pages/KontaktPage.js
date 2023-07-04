import { TextsmsTwoTone, ThirtyFpsRounded, WindowOutlined } from "@mui/icons-material";
import React, { Component } from "react";
import { Accordion, Icon, Image, Form, Input, TextArea, Button } from "semantic-ui-react";

//import logo1 from './Logos/1.png';

let impressum = `
  <div>
  <br/>
  <h3>Anbieter</h3>
  <p>Technische Universit&auml;t Kaiserslautern<br>&nbsp;Gottlieb-Daimler-Stra&szlig;e, Geb&auml;ude 47<br>&nbsp;67663 Kaiserslautern</p>
  <h3>Pr&auml;sident</h3>
  <p>E-Mail:&nbsp;<a href="javascript%3AlinkTo_UnCryptMailto('nbjmup+qsftjefouAvoj.lm%5C/ef');">president(at)uni-kl.de</a><br>&nbsp;Telefon: +49 631 205 0<br>&nbsp;Telefax: +49 631 205 3200</p>
  <p>Die Technische Universit&auml;t Kaiserslautern (TU Kaiserslautern) ist eine K&ouml;rperschaft des &ouml;ffentlichen Rechts. Sie wird durch den Pr&auml;sidenten Prof. Dr. Arnd Poetzsch-Heffter gesetzlich vertreten.</p>
  <p><strong><strong>Umsatzsteueridentifikationsnummer:</strong></strong> DE 148 642 087</p>
  <h3>Aufsichtsbeh&ouml;rde</h3>
  <p>Ministerium f&uuml;r Wissenschaft, Weiterbildung und Kultur</p>
  <p>Mittlere Bleiche 61<br>&nbsp;55116 Mainz</p>
  <h2>Inhaltliche Verantwortung</h2>
  <p>Die inhaltliche Verantwortung f&uuml;r Webangebote, die von Einrichtungen oder Organen der TU Kaiserslautern selbst erstellt werden, tr&auml;gt die Leitung der jeweiligen Einrichtung.</p>
  <p>Auf nalamki.de und den dazugeh&ouml;rigen Unterseiten ist dies</p>
  <pre>Prof. Dr. Karsten Berns Lehrstuhl Robotersysteme, TU Kaiserslautern Gottlieb-Daimler-Str. 48  67663 Kaiserslautern Telefon: 0631/205 2689 Fax: 0631/205 2640 E-Mail: berns@cs.uni-kl.de</pre>
  <h2>Haftungsausschluss &ndash; Disclaimer</h2>
  <p>Die TU Kaiserslautern haftet nur f&uuml;r eigene Inhalte nach den allgemeinen Gesetzen. Sie &uuml;bernimmt keine Gew&auml;hr f&uuml;r die Aktualit&auml;t, Korrektheit, Vollst&auml;ndigkeit oder Qualit&auml;t der bereitgestellten Daten und Informationen.</p>
  <p>Inhalte anderer Anbieter, auf die die TU Kaiserslautern mittels direkter oder indirekter Verkn&uuml;pfungen (Links) hinweist, spiegeln nicht die Meinung der TU Kaiserslautern wider. Sie ist nicht f&uuml;r die Inhalte anderer Anbieter verantwortlich.</p>
  <p>F&uuml;r die Inhalte rechtlich selbst&auml;ndiger Einrichtungen und einzelner zugelassener Nutzer auf den IT-Systemen der TU Kaiserslautern sind diese Anbieter selbst verantwortlich.</p>
  <h2>Webredaktion</h2>
  <p><strong><strong>Kontakt:</strong></strong><a href="mailto:rrlab-webteam@cs.uni-kl.de">&nbsp;rrlab-webteam@cs.uni-kl.de</a></p>
  <p>weitere Informationen unter&nbsp;<a href="https://www.uni-kl.de/impressum/">https://www.uni-kl.de/impressum/</a></p>
  <h1> Haftung f&uuml;r&nbsp;Inhalte</h1>
<p>Die Inhalte unserer&nbsp;Seiten&nbsp;wurden mit gr&ouml;&szlig;ter Sorgfalt&nbsp;erstellt. F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit&nbsp;&nbsp;und Aktualit&auml;t der&nbsp;Inhalte k&ouml;nnen&nbsp;wir&nbsp;jedoch keine&nbsp;Gew&auml;hr &uuml;bernehmen.&nbsp;Als&nbsp;Diensteanbieter&nbsp;sind&nbsp;&nbsp;wir gem&auml;&szlig;&nbsp;&sect;&nbsp;7&nbsp;Abs.1 TMG&nbsp;f&uuml;r eigene&nbsp;Inhalte auf diesen Seiten nach den allgemeinen Gesetzen&nbsp;verantwortlich. Nach &sect;&sect;&nbsp;8&nbsp;bis&nbsp;10&nbsp;TMG sind wir&nbsp;als&nbsp;Diensteanbieter&nbsp;jedoch nicht&nbsp;verpflichtet,&nbsp;&uuml;bermittelte&nbsp;oder gespeicherte fremde&nbsp;Informationen&nbsp;zu&nbsp;&uuml;berwachen&nbsp;oder&nbsp;nach&nbsp;Umst&auml;nden&nbsp;zu&nbsp;forschen,&nbsp;die auf&nbsp;eine&nbsp;rechtswidrige T&auml;tigkeit&nbsp;hinweisen. Verpflichtungen zur Entfernung&nbsp;oder&nbsp;Sperrung der Nutzung&nbsp;von Informationen&nbsp;nach&nbsp;den allgemeinen Gesetzen&nbsp;bleiben&nbsp;hiervon unber&uuml;hrt.&nbsp;Eine diesbez&uuml;gliche Haftung ist&nbsp;jedoch erst ab&nbsp;dem Zeitpunkt der&nbsp;Kenntnis einer konkreten&nbsp;Rechtsverletzung m&ouml;glich.&nbsp;Bei Bekanntwerden&nbsp;von&nbsp;entsprechenden&nbsp;Rechtsverletzungen&nbsp;werden&nbsp;wir&nbsp;diese Inhalte&nbsp;umgehend&nbsp;entfernen.</p>
<p><br></p>
<h1>Haftung f&uuml;r Links</h1>
<p><br></p>
<p>Unser Angebot enth&auml;lt Links zu&nbsp;externen&nbsp;Webseiten&nbsp;Dritter, auf deren Inhalte&nbsp;wir&nbsp;keinen&nbsp;Einfluss&nbsp;haben.&nbsp;Deshalb&nbsp;k&ouml;nnen&nbsp;wir&nbsp;f&uuml;r diese fremden Inhalte&nbsp;auch keine&nbsp;Gew&auml;hr&nbsp;&uuml;bernehmen.&nbsp;F&uuml;r die&nbsp;Inhalte der&nbsp;verlinkten&nbsp;Seiten ist&nbsp;stets der jeweilige Anbieter&nbsp;oder&nbsp;Betreiber&nbsp;der&nbsp;Seiten&nbsp;verantwortlich.&nbsp;Die&nbsp;verlinkten Seiten&nbsp;wurden zum Zeitpunkt der Verlinkung auf&nbsp;m&ouml;gliche Rechtsverst&ouml;&szlig;e&nbsp;&uuml;berpr&uuml;ft.&nbsp;Rechtswidrige Inhalte&nbsp;waren zum&nbsp;Zeitpunkt der Verlinkung nicht&nbsp;erkennbar. Eine&nbsp;permanente&nbsp;inhaltliche Kontrolle der&nbsp;verlinkten Seiten ist&nbsp;jedoch&nbsp;ohne&nbsp;konkrete Anhaltspunkte einer&nbsp;Rechtsverletzung nicht zumutbar. Bei&nbsp;Bekanntwerden&nbsp;von&nbsp;Rechtsverletzungen&nbsp;werden&nbsp;wir derartige&nbsp;Links umgehend&nbsp;entfernen.</p>
<p><br></p>
<h1>Urheberrecht</h1>
<p><br></p>
<p>Die durch&nbsp;die&nbsp;Seitenbetreiber&nbsp;erstellten Inhalte und Werke auf diesen Seiten unterliegen dem&nbsp;deutschen&nbsp;Urheberrecht. Die Vervielf&auml;ltigung,&nbsp;Bearbeitung, Verbreitung und jede&nbsp;Art&nbsp;der Verwertung&nbsp;au&szlig;erhalb&nbsp;der&nbsp;Grenzen&nbsp;des&nbsp;Urheberrechtes&nbsp;bed&uuml;rfen&nbsp;der schriftlichen&nbsp;Zustimmung&nbsp;des jeweiligen&nbsp;Autors bzw.&nbsp;Erstellers.&nbsp;Downloads und Kopien dieser Seite&nbsp;sind&nbsp;nur f&uuml;r&nbsp;den privaten, nicht&nbsp;kommerziellen&nbsp;Gebrauch gestattet. Soweit&nbsp;die&nbsp;Inhalte&nbsp;auf&nbsp;dieser&nbsp;Seite&nbsp;nicht&nbsp;vom Betreiber&nbsp;erstellt&nbsp;wurden, werden&nbsp;die&nbsp;Urheberrechte&nbsp;Dritter&nbsp;beachtet. Insbesondere&nbsp;werden Inhalte Dritter&nbsp;als solche&nbsp;gekennzeichnet. Sollten Sie&nbsp;trotzdem auf&nbsp;eine&nbsp;Urheberrechtsverletzung aufmerksam werden, bitten&nbsp;wir um&nbsp;einen&nbsp;entsprechenden Hinweis. Bei Bekanntwerden&nbsp;von Rechtsverletzungen&nbsp;werden&nbsp;wir&nbsp;derartige Inhalte&nbsp;umgehend entfernen.</p>
<p><br></p>
 </div>
`;
let datenschutz = `
<p><br></p>
<p>Die Nutzung unserer&nbsp;Webseite&nbsp;ist in&nbsp;der&nbsp;Regel&nbsp;ohne&nbsp;Angabe personenbezogener&nbsp;Daten&nbsp;m&ouml;glich.&nbsp;Soweit auf unseren Seiten&nbsp;personenbezogene&nbsp;Daten (beispielsweise Name, Anschrift oder&nbsp;eMail-&nbsp;Adressen)&nbsp;erhoben&nbsp;werden, erfolgt&nbsp;dies,&nbsp;soweit&nbsp;m&ouml;glich, stets&nbsp;auf&nbsp;freiwilliger Basis. Diese&nbsp;Daten&nbsp;werden&nbsp;ohne Ihre&nbsp;ausdr&uuml;ckliche Zustimmung&nbsp;nicht an&nbsp;Dritte&nbsp;weitergegeben.</p>
<p>Wir weisen darauf hin,&nbsp;dass&nbsp;die Daten&uuml;bertragung&nbsp;im Internet (z.B.&nbsp;bei&nbsp;der&nbsp;Kommunikation per&nbsp;E-&nbsp;Mail) Sicherheitsl&uuml;cken aufweisen&nbsp;kann. Ein&nbsp;l&uuml;ckenloser Schutz der&nbsp;Daten vor dem&nbsp;Zugriff durch&nbsp;Dritte ist&nbsp;nicht&nbsp;m&ouml;glich.</p>
<p>Der Nutzung&nbsp;von&nbsp;im&nbsp;Rahmen&nbsp;der Impressumspflicht&nbsp;ver&ouml;ffentlichten Kontaktdaten durch&nbsp;Dritte&nbsp;zur&nbsp;&Uuml;bersendung&nbsp;von&nbsp;nicht ausdr&uuml;cklich angeforderter&nbsp;Werbung&nbsp;und&nbsp;Informationsmaterialien&nbsp;wird</p>
<p>hiermit ausdr&uuml;cklich widersprochen. Die Betreiber der Seiten behalten sich ausdr&uuml;cklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p>
`

let kontakt = `
<p><br>Kontakt
<p>Prof. Dr. Peter Pickel</p>
<p><br></p>
<p>info@nalamki.de</p>
<p><br></p>
<p>JOHN DEERE GmbH &amp; Co. KG</p>
<p>Intelligent Solutions Group (ISG)</p>
<p>External Relations</p>
<p>Stra&szlig;burger Allee 3</p>
<p>67657 Kaiserslautern</p>
<p><br></p>
<p>Germany</p>`

export default class KontaktPage extends Component {
    state = { activeIndex: 0 };

    constructor(props) {
        super(props);
        this.state = {success_send: ""}
        this.handleMailSend = this.handleMailSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e, { name, value }) => {
        console.log(name);
        console.log(value);
        this.setState({ [name]: value })}


    handleMailSend(e) {
        let mail = e.target.elements.user_email.value;
        let name = e.target.elements.user_name.value;
        let message = e.target.elements.user_message.value;

        let data = { "mail": mail, "name": name, "message": message };
        this.setState({ user_name: "", user_email: "", user_message: "" });
        
        let self = this;
        self.setState({success_send: ""}, ()=>{

        emailjs.send("service_oektlbb", "template_v5bg2mm", data).then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
                self.setState({success_send: "Nachricht gesendet"})
            },
            function (error) {
                self.setState({success_send: "Nachricht nicht gesendet. " + error})
                console.log("FAILED...", error);
            }
        );});

    }

    render() {
        const { activeIndex } = this.state;
        let logostyle = { height: "75px", width: "auto" };

        return (
            <>
                <div style={{ width: "100%", height: "30px", paddingTop: "5px", background: "#8fc6cd" }}></div>
                <div style={{ marginLeft: "10%", marginRight: "10%" }}>
                    <h1>Kontaktformular</h1>
                    <Form onSubmit={this.handleMailSend}>
                        <Form.Field
                            id="form-input-control-email"
                            control={Input}
                            label="Email"
                            name="user_email"
                            placeholder="Email…"
                            required
                            icon="mail"
                            iconPosition="left"
                            value={this.state.user_email}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            id="form-input-control-last-name"
                            control={Input}
                            label="Name"
                            name="user_name"
                            placeholder="Name…"
                            required
                            icon="user circle"
                            iconPosition="left"
                            value={this.state.user_name}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            id="form-textarea-control-opinion"
                            control={TextArea}
                            label="Nachricht"
                            name="user_message"
                            placeholder="Nachricht..."
                            required
                            value={this.state.user_message}
                            onChange={this.handleChange}
                        />
                        <table>
                            <tr>
                                <th>
                                    <Button type="submit" color="green">Sende Email</Button>
                                </th>
                                <th>{this.state.success_send}</th>
                            </tr>
                        </table>
                    </Form>

                    <h1>Impressum</h1>
                    <hr />
                    <div
                        dangerouslySetInnerHTML={{ __html: impressum }}
                    />
                    <h1>Datenschutz</h1>
                    <hr />
                    <div
                        dangerouslySetInnerHTML={{ __html: datenschutz }}
                    />
                </div>
            </>
        );
    }
}