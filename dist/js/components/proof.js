const _jsxFileName = "/Users/jose/urbit/keybase/src/js/components/proof.js";import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom';
import { sigil, stringRenderer } from 'urbit-sigil-js'
import { deSig } from '/lib/util';
import urbitOb from 'urbit-ob';

export class Proof extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props, state } = this;
    console.log(props, state);
    return (
      React.createElement('div', { className: "h-100 w-100 mw6 pa3 pt4 overflow-x-hidden bg-gray0-d white-d flex flex-column"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
        , React.createElement('div', { className: "w-100 dn-m dn-l dn-xl inter pt1 pb6 f8"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
          , React.createElement(Link, { to: "/~keybase/", __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}, "⟵ Keybase")
        )
        , React.createElement('div', { className: "w-100 mb4 pr6 pr0-l pr0-xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}

          , React.createElement('div', { className: "fl ma2 bg-white bg-gray0-d white-d overflow-hidden " +
          "ba b--black b--gray1-d pa2 w-100 lh-copy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
            , React.createElement('p', { className: "f9", __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}, "Keybase needs to check the proof periodically on the Identity Service to ensure that the user has not removed it. Similarly, the Identity Service may want to know if the user has revoked the proof on Keybase. For this reason, there is a protocol for both services to request the current state from one another. Keybase will always check the Identity Services’ proofs, but it is optional for Identity Services to check Keybase’s proofs."                                                                         )
            , React.createElement('p', { className: "f9 pt2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}, "Keybase clients check all of the proofs of all of the users they interact with at most once-per-day. So you can expect load correlated with the number of proofs and related activity on Keybase."                                 )
          )
          , React.createElement('div', { className: "fl ma2 bg-white bg-gray0-d white-d overflow-hidden " +
          "ba b--black b--gray1-d pa2 w-100 lh-copy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
            , React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, JSON.stringify(props.proof, null, 2))
          )
        )
      )
    );
  }
}
