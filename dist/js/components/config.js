const _jsxFileName = "/Users/jose/urbit/keybase/src/js/components/config.js";import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom';
import { sigil, stringRenderer } from 'urbit-sigil-js'
import { deSig } from '/lib/util';
import urbitOb from 'urbit-ob';

export class ConfigScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props, state } = this;

    return (
      React.createElement('div', { className: "h-100 w-100 mw6 pa3 pt4 overflow-x-hidden bg-gray0-d white-d flex flex-column"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
        , React.createElement('div', { className: "w-100 dn-m dn-l dn-xl inter pt1 pb6 f8"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
          , React.createElement(Link, { to: "/~keybase/", __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}, "⟵ Keybase")
        )
        , React.createElement('div', { className: "w-100 mb4 pr6 pr0-l pr0-xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}

          , React.createElement('div', { className: "fl ma2 bg-white bg-gray0-d white-d overflow-hidden " +
          "ba b--black b--gray1-d pa2 w-100 lh-copy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
            , React.createElement('p', { className: "f9", __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}, "To send us the config, you can send us the public URL for your config file or attach it directly in a Keybase chat message to @mlsteele or email miles@keyba.se."                             )
            , React.createElement('p', { className: "f9 pt2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}, "In our example the file is hosted at https://keybase.io/.well-known/example-proof-config.json."        )
          )
          , React.createElement('div', { className: "fl ma2 bg-white bg-gray0-d white-d overflow-hidden " +
          "ba b--black b--gray1-d pa2 w-100 lh-copy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
            , React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, JSON.stringify(props.config, null, 2))
          )
        )
      )
    );
  }
}
