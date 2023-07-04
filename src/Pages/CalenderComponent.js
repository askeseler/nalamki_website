import React from "react";
import { Route } from "react-router-dom";
import { Button, Image, Grid, Icon, Segment, Label, List } from "semantic-ui-react";
import events1 from './events.js';
let events = events1//.reverse();

function chunk(arr, len) {
    var chunks = [],
        i = 0,
        n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }
    return chunks;
}

class CalenderComponent extends React.Component {
    constructor(props) {
        super(props);
        let pages = chunk(Array.from(events).reverse(), 5);
        let rendered_pages = [];
        for (let p of pages) {
            let p_out = [];
            for (let n of p) {
                let rendered_news = <><tr>
                    <td style={{ width: "20%", padding: "20px" }}>{n[0]}</td>
                    <td style={{ width: "80%", padding: "20px" }}>{n[2]!==""?<a href={n[2]} style={{color:"black"}}>{n[1]}</a>:n[1]}</td>
                </tr></>
                p_out.push(rendered_news);
            }
            rendered_pages.push(p_out);
        }
        this.state = { rendered_pages: rendered_pages, currentPage: 0 };
    }
    render() {        
        return (
            <><hr style={{ marginTop: "50px", marginBottom: "50px" }} />
                <h1> News und Events</h1>
                <table style={{ width: "100%" }}>
                    <tr style={{ width: "100%", padding: "100px" }}>
                        <td style={{ width: "33%" }}><p style={{ color: "#8fc6cd" }}> Übersicht vergangener und bevorstehender Veranstaltungen</p>	</td>
                        <td style={{ width: "33%" }}>
                        </td>
                        <td style={{ width: "33%", paddingRight: "100px" }}>
                            <Button circular icon='chevron right' style={{ float: "right", height: "40px", width: "40px", backgroundColor: "#8fc6cd", marginLeft: "10px", marginRight: "10px" }}
                                onClick={() => this.state.currentPage < this.state.rendered_pages.length -1 ? this.setState({ currentPage: this.state.currentPage + 1 }) : null} />
                            <Button circular icon='chevron left' style={{ float: "right", height: "40px", width: "40px", backgroundColor: "#8fc6cd", marginLeft: "10px", marginRight: "10px" }}
                                onClick={() => this.state.currentPage > 0 ? this.setState({ currentPage: this.state.currentPage - 1 }) : null} />
                        </td>
                    </tr>
                </table>
                <table style={{ width: "100%", fontSize: "large", fontWeight: "bold" }}>
                    {this.state.rendered_pages[this.state.currentPage].map((e)=>e)}
                </table>
            </>)
    }
}

export default CalenderComponent;