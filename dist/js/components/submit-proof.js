const _jsxFileName = "/Users/jose/urbit/keybase/src/js/components/submit-proof.js";import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom';
import { sigil, stringRenderer } from 'urbit-sigil-js'
import { deSig } from '/lib/util';
import urbitOb from 'urbit-ob';

export class SubmitProof extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keybaseUsername: this.props.keybaseUsername,
      token: this.props.token,
    }
  }

  onClickSave() {
    const { props, state } = this;

    this.setState({
      error: false,
      success: true,
      awaiting: true
    }, () => {
      props.api.proof.add(props.keybaseUsername, props.token)
        .then(() => {
        this.setState({awaiting: false});
        // props.history.push(`/~keybase/proof`);
      })
    });
  }

  render() {
    let displayNameErrElem = (React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 35}} ));
    if (this.props.patp === ship) {
      displayNameErrElem = (
        React.createElement('span', { className: "f9 inter red2 ml3 mt1 db"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "This is not the ship we were looking for..."

        )
        );
    }

    return (
      React.createElement('div', { className: "h-100 w-100 mw6 pa3 pt4 overflow-x-hidden bg-gray0-d white-d flex flex-column"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
        , React.createElement('div', { className: "w-100 dn-m dn-l dn-xl inter pt1 pb6 f8"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}
          , React.createElement(Link, { to: "/~keybase/", __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}, "⟵ All Groups")
        )
        , React.createElement('div', { className: "w-100 mb4 pr6 pr0-l pr0-xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}

          , React.createElement('div', { className: "fl ma2 bg-white bg-gray0-d white-d overflow-hidden " +
          "ba b--black b--gray1-d pa2 w-100 lh-copy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
            , React.createElement('p', { className: "f9", __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}, "This proof should be stored forever unless it is updated or deleted by the user."              )
            , React.createElement('p', { className: "f9 pt2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}, "The Identity Service validates the signature with Keybase and saves this data so it can be served during the Proof Checking flow."                     )
            , React.createElement('p', { className: "f9 pt2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}, "You need to review that your Keybase username is correct."         )
            , React.createElement('p', { className: "f9 pt2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}, "Then by clicking \"Store Proof\" you will authorizes the cryptographic connection and store the proof on your ship."                 )

            , React.createElement('h2', { className: "f8 pt6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}, "Proof Validation" )

            , React.createElement('h2', { className: "f8", __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}, "Keybase Username" )
            , React.createElement('textarea', {
              className: 
                "f7 ba b--gray3 b--gray2-d bg-gray0-d white-d pa3 db w-100 mt2 " +
                "focus-b--black focus-b--white-d"
              ,
              readOnly: true,
              defaultValue: this.props.keybaseUsername,
              rows: 1,
              style: {
                resize: "none",
                height: 48,
                paddingTop: 14
              }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
            
            )
            , displayNameErrElem

            , React.createElement('h2', { className: "f8 pt6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}, "Token")
            , React.createElement('textarea', {
              className: 
                "f7 ba b--gray3 b--gray2-d bg-gray0-d white-d pa3 db w-100 mt2 " +
                "focus-b--black focus-b--white-d"
              ,
              readOnly: true,
              defaultValue: this.props.token,
              rows: 1,
              style: {
                resize: "none",
                height: 48,
                paddingTop: 14
              }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}
              
              )

            , React.createElement('button', {
              onClick: this.onClickSave.bind(this),
              className: "f9 ba pa2 b--green2 green2 pointer bg-transparent"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}, "Store Proof"

            )
          )
        )
      )
    );
  }
}
