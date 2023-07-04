import React from "react";
import { render } from "react-dom";
import { Button, Header, Input, Modal } from "semantic-ui-react";
import search_language from './search_language.jpg';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state= {modalOpen:false};
    this.search_text = React.createRef();
  }

  render() {
    return (
      <>
        <img style={{ float: "right", height: "40px", zIndex: 99 }} src={search_language} onClick={()=>{this.setState({ modalOpen: true });}}/>
        <Modal
          open={this.state.modalOpen}
        >
          <Modal.Header>Gesucht und gefunden</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>
                Nutzen Sie die Suche und finden Sie Inhalte auf der NaLamKI
                Seite
              </Header>
              <p>
                <div className={["ui", "input"].join(" ")}><input ref={this.search_text} style={{ heigth: "10px" }}></input></div>
                <Button
                  className={"primary"}
                  onClick={() => {
                    window.location.href =
                      "https://www.google.com/search?q=site%3Analamki.de+" +
                      this.search_text.current.value;
                  }}
                >
                  Suchen
                </Button>
              </p>
              <p> Für die Suche werden sie zu Google weitergeleitet.</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => this.setState({ modalOpen: false })}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}

export default SearchComponent;
