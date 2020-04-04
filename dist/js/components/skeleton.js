const _jsxFileName = "/Users/jose/urbit/keybase/src/js/components/skeleton.js";import React, { Component } from 'react';
import classnames from 'classnames';

import { HeaderBar } from '/components/lib/header-bar';
import { KeybaseSidebar } from '/components/lib/keybase-sidebar';

export class Skeleton extends Component {
  render() {
    const { props } = this;
    let rightPanelClasses =
      props.activeDrawer === "keybase" ? "dn flex-m flex-l flex-xl" : "flex";

    return (
      React.createElement('div', { className: "h-100 w-100 ph4-m ph4-l ph4-xl pb4-m pb4-l pb4-xl"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
        , React.createElement(HeaderBar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 15}} )
        , React.createElement('div', { className: "cf w-100 h-100 h-100-m-40-ns flex ba-m ba-l ba-xl b--gray4 b--gray1-d br1"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
          , React.createElement(KeybaseSidebar, {
            activeDrawer: props.activeDrawer,
            history: props.history,
            api: api, __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
          )
          , React.createElement('div', {
            className: "h-100 w-100 relative " + rightPanelClasses,
            style: { flexGrow: 1 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
            , props.children
          )
        )
      )
    );
  }
}
