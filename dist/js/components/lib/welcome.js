const _jsxFileName = "/Users/jose/urbit/keybase/src/js/components/lib/welcome.js";import React, { Component } from 'react';


export class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
    this.disableWelcome = this.disableWelcome.bind(this);
  }

  disableWelcome() {
    this.setState({ show: false });
    localStorage.setItem("urbit-groups:wasWelcomed", JSON.stringify(true));
  }

  render() {
    let wasWelcomed = localStorage.getItem("urbit-groups:wasWelcomed");
    if (wasWelcomed === null) {
      localStorage.setItem("urbit-groups:wasWelcomed", JSON.stringify(false));
      return wasWelcomed = false;
    } else {
      wasWelcomed = JSON.parse(wasWelcomed);
    }

    let proof = !!this.props.proof ? this.props.proof : {};

    return ((!wasWelcomed && this.state.show) && (proof.length !== 0)) ? (
      React.createElement('div', { className: "ma4 pa2 bg-welcome-green bg-gray1-d white-d"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
        , React.createElement('p', { className: "f8 lh-copy" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}, "Keybase is a service to aggregate multiple web2 identities and offers secure p2p messaging and file storage. Keybase assumes each ID service has multiple users. In the Urbit paradigm, each Uribt ID is a self-sovereign host (personal server). Each Urbit ID is one service and one user."                                              )
        , React.createElement('p', { className: "f8 pt2 dib pointer bb"    ,
          onClick: (() => this.disableWelcome()), __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, "Close this"

      )
      )
    ) : React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 37}} )
  }
}

export default Welcome
