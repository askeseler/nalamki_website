import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Menu, Dropdown, Segment, Label, Grid } from "semantic-ui-react";
import LandingPage from "./Pages/LandingPage";
import DemonstratorenPage from "./Pages/DemonstratorenPage";
import KonsortiumPage from "./Pages/KonsortiumPage";
import WhoIsPage from "./Pages/WhoIsPage";
import NewsPage from "./Pages/NewsPage";
import KontaktPage from "./Pages/KontaktPage";
import Artikel1 from "./Pages/NewsSubpages/Artikel1/Artikel1.js";
import Artikel2 from "./Pages/NewsSubpages/Artikel2/Artikel2.js";
import Artikel3 from "./Pages/NewsSubpages/Artikel3/Artikel3.js";
import Artikel4 from "./Pages/NewsSubpages/Artikel4/Artikel4.js";
import Artikel5 from "./Pages/NewsSubpages/Artikel5/Artikel5.js";
import Artikel6 from "./Pages/NewsSubpages/Artikel6/Artikel6.js";
import Artikel7 from "./Pages/NewsSubpages/Artikel7/Artikel7.js";
import Artikel8 from "./Pages/NewsSubpages/Artikel8/Artikel8.js";


import SearchComponent from "./Pages/SearchComponent";
import logo from './nalamki_logo.jpg';
import nalamki_header from './nalamki_header.jpg';

let youtube_svg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIj4KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCg0LjczNTggMCAwIDQuNzM1OCAxMzkuMjEgMTM5LjIxKSIgZD0ibTYyLjUgNTAtOS43NTAzIDUuMDEtOS43NDk1IDUuMDAwMXYtMjAuMDJsOS43NDk1IDQuOTk5M3oiLz4KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCg0LjczNTggMCAwIDQuNzM1OCAxMzkuMjEgMTM5LjIxKSIgZD0ibTI4LjUgMjcuNWg0M2M2LjA3NDkgMCAxMSA2LjA3NDkgMTEgMTF2MjNjMCA2LjA3NDktNC45MjUxIDExLTExIDExaC00M2MtNi4wNzQ5IDAtMTEtNi4wNzQ5LTExLTExdi0yM2MwLTYuMDc0OSA0LjkyNTEtMTEgMTEtMTF6Ii8+CiA8L2c+Cjwvc3ZnPgo="
let twitter_svg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEsklEQVRoge3ZaahVVRQH8J9T9dRUzMQyLZozM4nSMjPMoqKgeaIvRRHZh6TIBmggyKCBMGmSqIioaCIKooFAKxpohGZTscECM9JKzbHXh7WP57zrve/d4Twf0fvD4d5z9tr/vdae1tpr04te9OJ/gT493P7+mIxRGIRf8C3exZYe1KsuDMAV+BrtNZ5fcSeG1+Doi/PwKk6tJjADT2L3EhUvYiIWyRVeiaeF0rdgPj4ulK/C+YX6u+KyCo57KxvZActS4ecYVrIRp2BN4v8Sp6FfDdm98ZiYXu3C2PcL78VnYmXlsyoE3sbgkow4DGsT73wxverB8Vhd0GkLFuKP9P5stUpPpMKH8EH6/yFGNK1+YCf5SN/fRP1xmCPWxG54UG7YI3hPjNhWZPNuKobKjVmEg5uxIGF24vkY/VvgGYE3VN8cFhcF/0ofR6b3wXgpfVuLS5povA9+ThwzmqhfRDZjsmdT4XdqUXB9KhhU+NYXt+OfVPYGDmig8cmp3tLmdO+AGXgYM3G93JCZlYI/pYKDapD8kMo3iC1vbB2NX5Xq3NeE4rUwC5tF595QTeCV1OjZNQiGYh42JrmNYriPEyNXDXcl2Wua1boC9xTavqiW0JVJ6OUuyPbDM6JXsvm6HA+InWVUQTbbYS5vUvFKLE98p3cmNFw4rE3qWwd74g6ssO0uslLES1+l9zlNKl6JHxPfmK4E58i3yh3qJO+HaWLYP5VPveLzcMMqV8dviW+XyoJi9PsIhojQYYBwMheLxd0I2jBBhBmjxHb+uIhqW8UG0cE7ig7bBoNUdzRv6bgd9yRGCp1+70yoj3xKrNTRmDO7WcF6cZTQ56NqhVnI0C7OB4fiahFjjcdAXe9i2wtZmLS4UyncLQx6vlvVaR6PCf1mdSV4iPCWm7BvNyvVDJYKQw6vR/g5eUxVy1v3BMbL129dEfRo+WKfq+eTExlulp8/6sY0/JkqPqX8I2+j6IslQp+TG608UX6OWIEbReqmJ3Bq0mOZ2mf8TitnhhSfeSUqWC8WprZndyZUa0EfYduUUDvWta5XQzgRxwpv3lS8tr889XIrpojzyPZEf3yWdLi2FaLMAS3Gzq3r1TCuS+3/IALRpjFcHv+/bvuOyDj8ndo+qQzCCWJ+ZtnB8WWQdoEh+Ca1+WiZxOPwXSLeLLJ7Z2IPreWpqqGfPAX1hfIynVsxELfJHWX2rFc7WdEo+ooDWJa87tZ4b6h8E8hyseeUwNu/wLsGx5TAWRX9cALelBuxRIQzrWKYPBW6DtNL4OyAMSJDP1dHL79aJCkGltDGJHGWz0KhKa2QvSBuiJaKe5Hlomcqw5MlIlVZxjbcJtZclvb8HHu1SvqRbZVeL3aN50WMc2CrjST0x6Xy9OwWcTJtyeFlaBM9XbxQeQ1nqP9CpiuMxk3ye5J2fIKjS+LvgBEiOZ151HYx5Z7AhcJv1Is2HCnC/3d0TK9+g3OVfGirRjYMF4gk8aSKstVJke+FT1mdvg8S8diuYhrupWNkvQEvigh2gTCoVHTVKweLS8zpwqha18WV2CiigbdEnLZA+IduQ6PDOxb7iK15F3l+eK248VolruqWiunUi1781/EvT+Bu8XX4GDwAAAAASUVORK5CYII="
let linked_in_svg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEqElEQVRoge2a328VRRTHP5Xa3gYUbkuFF4hEowFJJfFJCD8MqCX4gCYqCrwh+MKPoK8gPPDLkJCQNPHBJ/8CQkKITZS0VLSK+OPB0oL8CNREIGnQWCnULA/nTGa5d3d2du/uvZLwTTZzd+bMmTM7c858Z+bCI/y/0JSjrnZgGbAEWAA8AzwFTNXyf4A/gUvAb8AA0A+M5WhDZpSAjUAv8B8QpHwmgS+BDUBrnW0HoA34CPgjZNQd4GtgF7AWmA+Ugcf1KWveWmA3cErrmPqjwE7k49QFa4DfQwb8AGwCpmfQNQP4ADgb0ncRWJ2LpTEoAZ+FGvwReC1H/d3ATyH9PRQwOrMRwwPEabcCU/JuRHVuB8axoz0rL+XzkOEOgCFgYV6KHegChrXNC2pDTegMKfwemFmrwhQoIyE6QHxydlZFJex0OoNdD+qJqcB32GmWyWeMYw8hi12j0IGdFT1pK6/BOnaUT7QAh5B1ZBQ4oHlFoQsbALp9K7Vh14mtMTIHqV6l99diqQd2YJ3fa4p9jF0n4kLsqMosRriVWZmLRDPws7a1I0m4hKUdrsXOdGQJtiPXa7XUA6tDbTm52QZshHDhANVTa1/NZiajCRtJ33cJ9qrQpgSFLUhnRpGvs49inT2MLYiNJ+ME2hFafYdsBLBeKAMTwD1Cdj4WEliGOPcZ4HaCsm+onlqnE8oHgJeBL5B14V/EH48D6ypscWEM+BZx/uVRAoe1wV0eyuI2Sknlrucs/pxqj9b51GSEv8J8TX/1VAbifK7tsik3nbyMzPE5iE/NATYj29+XkC/9tEe7v1TY/ABGtMHIwgrEjUDc+xHgc+CJGH3TEOc1ETNpmr2gsuejCm9pYUeCkihDk95BGMNeZEswoekezQfp5CWt925C+zNV7mZU4YQW+oTRtB1pw1LyqCBgKMdmzTuW0H4r9pygCkV2ZK++XwFWIvR8FXBV83er3Fz86I6zI0VOLbPDXFmh51XNH9H3Kfo+mdC+c2oV6eyTRI92C9WGR/lXJaqcPRwdLmj6XIKSLDAs+m5F/t2Kcl88r6kZyQc6MqTpiymVNgJdmkaOyICmK+pmTna8oml/VGEZSxpnJChK6yOueZ9GFoTcGtL4pMkMj8gY8BUS2t52KGo03kGCRC/wV5zQeiyBc6FRI9IEnNPy91wGtiIbpQB43SGXlf1m0RXGG1p2DY9riJ0qfI74sHg6ouH+FOVpdBk0I6w3ALYldQKE95iVeLtPhTrBfOBhUlwKmdOKcWzMbiQWITvKgAxXGT3YL+DDv4pCJ8I6AuBoFgUlZJMTIAfJjTjEngYMqg2D1HDP2InQgAC5VujMwzpPtGMPMS6Sw4XPPOzQDlMfLrYo1OYIfvt4L8zCTrNx5Oy1OS/lITQj0ck49iByV58rStgAECAHynndvjYhVxlmnTCOXejdezd22APkLHYLQjrToh34EEs7zFTK87bYiRIyvQydCRBG2gd8AryJ7OI6EILXor8XAm+pTB/2nMDQjm006B8Qrcip+EnsdjbNcw84gRDAmjqQ559qpiPnx0uRff+zSLg2h3J/AzeQUHoe4Vh9OKj4IzzMuA/HoM0q2UDb3AAAAABJRU5ErkJggg==";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e, { name }) {
    this.setState({ activeItem: name });
  }
  render() {
    const { activeItem } = this.state;
    return (
      <>
        <div>
          <img src={logo} alt="logo" style={{ width: "70px", marginLeft: "20px", marginBottom: "40px", marginTop: "10px" }} />
          <SearchComponent />
          <nav><ul className={"topnav"}>
            <div className={"topnav-right"}>
              <li className={["active", "border"].join(" ")}><a href={"#/LandingPage"}>NaLamKI</a></li>
              <li className={["active", "border"].join(" ")}><a href={"#/KonsortiumPage"}>Konsortium</a></li>
              <li className={["active", "border"].join(" ")}><a href={"#/DemonstratorenPage"}>Demonstratoren</a></li>
              <li className={["active", "border"].join(" ")}><a href={"#/WhoIsPage"}>Who is?</a></li>
              <li className={["active", "border"].join(" ")}><a href={"#/Artikel8"}>Grüne Woche</a></li>
              <li className={["active", "border"].join(" ")}><a href={"#/NewsPage"}>News</a></li>
              <li className={["active", "border"].join(" ")}><a href={"#/KontaktPage"}>Kontakt</a></li>
            </div>
          </ul>
          </nav>
          <div style={{ transform: "translateY(-100px)" }}> <img src={nalamki_header} alt="logo" style={{ width: "100%" }} />

            <Route exact path="/">
              <Redirect to="/LandingPage" />
            </Route>
            <Route path="/LandingPage" component={LandingPage} />
            <Route path="/KonsortiumPage" component={KonsortiumPage} />
            <Route path="/DemonstratorenPage" component={DemonstratorenPage} />
            <Route path="/WhoIsPage" component={WhoIsPage} />
            <Route path="/NewsPage" component={NewsPage} />
            <Route path="/KontaktPage" component={KontaktPage} />
            <Route path="/Artikel1" component={Artikel1} />
            <Route path="/Artikel2" component={Artikel2} />
            <Route path="/Artikel3" component={Artikel3} />
            <Route path="/Artikel4" component={Artikel4} />
            <Route path="/Artikel5" component={Artikel5} />
            <Route path="/Artikel6" component={Artikel6} />
            <Route path="/Artikel7" component={Artikel7} />
            <Route path="/Artikel8" component={Artikel8} />
          </div>

          <table style={{ background: "#8fc6cd", width: "100%", height: "80px" }}>
            <tr style={{ width: "100%" }}>
              <td style={{ width: "33%" }}></td>
              <td style={{ width: "33%" }}>
                <Grid >
                  <Grid.Column textAlign="center"><div><a style={{ color: "black" }} href={window.website_url + "KontaktPage"}>Impressum | Datenschutz | Kontakt</a></div>
                  </Grid.Column>
                </Grid>
              </td>
              <td style={{ width: "33%", paddingRight: "100px" }}>
                <a href="https://www.youtube.com/channel/UC6a6HcjJIJtr2KSF7zmUD-w"><img style={{ float: "right", height: "40px", width: "40px" }} src={youtube_svg}></img></a>
                <a href="https://twitter.com/hashtag/NaLamKI?src=hashtag_click"><img style={{ float: "right", height: "40px", width: "40px", padding: "10px" }} src={twitter_svg}></img></a>
                <img style={{ float: "right", height: "40px", width: "40px", padding: "10px" }} src={linked_in_svg}></img>
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

//className={["topnav", "topnav-right"].join(' ')
export default MainScreen;
