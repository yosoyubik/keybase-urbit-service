const _jsxFileName = "/Users/jose/urbit/keybase/src/js/components/new.js";import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom';
import { deSig } from '/lib/util';
import urbitOb from 'urbit-ob';

export class NewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      version: 1,
      domain: "",
      display_name: "Urbit",
      // A regex for validating usernames on Bee Activists in the re2 format
      // https://github.com/google/re2/wiki/Syntax (inline flags, like for case-insensitivity, are not supported).
      // Keybase will treat these case-insensitively and will only display usernames
      // in lowercase.
      username: {
        re: "~(\w{3,6})-?(\w{3,6})?",
        min: 4,
        max: 14
      },
      brand_color: "#FFFFFF",
      // Your brand logo will appear in various places around the Keybase app.
      // Assets will be rehosted by Keybase, so do let us know about updates.
      // For all SVGs, expand all texts and strokes to shapes.
      logo: {
        // A full-black monochrome SVG for light mode. Should look good at 16px square.
        svg_black: "https://beeactivists.com/small-black-logo.svg",
        // A full-white monochrome SVG for dark mode. Should look good at 16px square.
        svg_white: "https://beeactivists.com/small-white-logo.svg",
        // A full color SVG for light mode. Should look good at 32px square.
        svg_full: "https://beeactivists.com/full-color-lightmode-logo.svg",
        // A full color SVG for dark mode. Should look good at 32px square. (Can be the same as svg_full)
        svg_full_darkmode: "https://beeactivists.com/full-color-darkmode-logo.svg"
      },
      description: "A clean-slate OS and network for the 21st century",
      //  All URLs must be on the given `domain` or a subdomain and accessible via HTTPS.
      prefill_url: "https://zod.arvo.network/~keybase/proof?kb_username=%{kb_username}&username=%{username}&token=%{sig_hash}&kb_ua=%{kb_ua}",
      // Link to a profile page, for when users click from inside Keybase
      profile_url: "https://zod.arvo.network/~keybase/profile/%{username}",
      // Endpoint for checking a user's proofs
      check_url: "https://zod.arvo.network/~keybase/proof-check/%{username}",
      check_path: ["signatures"],
      avatar_path: ["https://zod.arvo.network/~keybase/avatar/%{username}"],
      // A contact for Keybase in case of issues.
      contact: []
    }
    this.domainChange = this.domainChange.bind(this);
    this.contactEmailChange = this.contactEmailChange.bind(this);
  }


  domainChange(event) {
    this.setState({domain: event.target.value});
  }

  contactEmailChange(event) {
    this.setState({contact: event.target.value});
  }

  onClickCreate() {
    const { props, state } = this;

    if (!state.groupName) {
      this.setState({
        groupNameError: true
      });
      return;
    }

    let group = `/~${window.ship}` + `/${state.groupName}`;
    let aud = state.invites.ships.map(ship => `~${ship}`);

    if (this.textarea) {
      this.textarea.value = '';
    }
    this.setState({
      error: false,
      success: true,
      invites: '',
      awaiting: true
    }, () => {
      props.api.contactView.create(
        group,
        aud,
        this.state.title,
        this.state.description
        ).then(() => {
        this.setState({awaiting: false});
        props.history.push(`/~groups${group}`);
      })
    });
  }

  render() {
    let displayNameErrElem = (React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 98}} ));
    if (this.state.displayNameError) {
      displayNameErrElem = (
        React.createElement('span', { className: "f9 inter red2 ml3 mt1 db"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 101}}, "Keybase Identity Service must have a name."

        )
        );
    }

    let domainErrElem = (React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 107}} ));
    if (this.state.domainError) {
      domainErrElem = (
        React.createElement('span', { className: "f9 inter red2 ml3 mt1 db"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}, "Keybase Identity Service must have a contact email."

        )
        );
    }

    return (
      React.createElement('div', { className: "h-100 w-100 mw6 pa3 pt4 overflow-x-hidden bg-gray0-d white-d flex flex-column"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 117}}
        , React.createElement('div', { className: "w-100 dn-m dn-l dn-xl inter pt1 pb6 f8"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}
          , React.createElement(Link, { to: "/~keybase/", __self: this, __source: {fileName: _jsxFileName, lineNumber: 119}}, "⟵ All Groups")
        )
        , React.createElement('div', { className: "w-100 mb4 pr6 pr0-l pr0-xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}}

        , React.createElement('div', { className: "fl ma2 bg-white bg-gray0-d white-d overflow-hidden " +
        "ba b--black b--gray1-d pa2 w-100 lh-copy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}
          , React.createElement('p', { className: "f9", __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}, "To send us the config, you can send us the public URL for your config file or attach it directly in a Keybase chat message to @mlsteele or email miles@keyba.se."                             )
          , React.createElement('p', { className: "f9 pt2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 126}}, "In our example the file is hosted at https://keybase.io/.well-known/example-proof-config.json."        )
        )



          , React.createElement('h2', { className: "f8", __self: this, __source: {fileName: _jsxFileName, lineNumber: 131}}, "Create Keybase Config"  )

          , React.createElement('h2', { className: "f8 pt6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 133}}, "Domain")
          , React.createElement('textarea', {
            className: 
              "f7 ba b--gray3 b--gray2-d bg-gray0-d white-d pa3 db w-100 mt2 " +
              "focus-b--black focus-b--white-d"
            ,
            rows: 1,
            placeholder: `https://${ship}.arvo.network`,
            style: {
              resize: "none",
              height: 48,
              paddingTop: 14
            },
            onChange: this.domainChange, __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}}
          )
          , domainErrElem

          , React.createElement('h2', { className: "f8 pt6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 150}}, "Contact Email" )
          , React.createElement('textarea', {
            className: 
              "f7 ba b--gray3 b--gray2-d bg-gray0-d white-d pa3 db w-100 mt2 " +
              "focus-b--black focus-b--white-d pb6"
            ,
            rows: 1,
            placeholder: `contact@${ship}.arvo.network`,
            style: {
              resize: "none",
              height: 48,
              paddingTop: 14
            },
            onChange: this.contactEmailChange, __self: this, __source: {fileName: _jsxFileName, lineNumber: 151}}
          )
          , domainErrElem

          , React.createElement('button', {
            onClick: this.onClickCreate.bind(this),
            className: "f9 ba pa2 b--green2 green2 pointer bg-transparent"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}, "Save Keybase Config"

          )
          , React.createElement(Link, { to: "/~keybase", __self: this, __source: {fileName: _jsxFileName, lineNumber: 172}}
            , React.createElement('button', { className: "f9 ml3 ba pa2 b--black pointer bg-transparent b--white-d white-d"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 173}}, "Cancel")
          )
        )
      )
    );
  }
}
