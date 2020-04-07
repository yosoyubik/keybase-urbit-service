const _jsxFileName = "/Users/jose/urbit/keybase/src/js/components/lib/proof.js";import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import { makeRoutePath } from '../../lib/util';

export class ProofItem extends Component {
  // drawer to the left

  render() {
    const { props, state } = this;

    let selectedClass = (props.selected)
    ? "bg-gray5 bg-gray1-d"
    : "pointer hover-bg-gray5 hover-bg-gray1-d";

    return (
      React.createElement(Link, { to: makeRoutePath(props.link), __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
        , React.createElement('div', { className: "w-100 v-mid f9 ph4 z1 pv1 " + selectedClass, __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
          , React.createElement('p', { className: "f9 dib" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}, props.name)
          , React.createElement('p', { className: "f9 dib fr"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
            , unseenCount
          )
        )
      )
    );
  }
}
