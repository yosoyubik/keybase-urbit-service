const _jsxFileName = "/Users/jose/urbit/keybase/src/js/components/lib/keybase-sidebar.js";import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import { Sigil } from '/components/lib/icons/sigil';
import { Welcome } from '/components/lib/welcome';
// import { ProofItem } from '/components/lib/proof-item';
import { cite } from '/lib/util';

export class KeybaseSidebar extends Component {
  // drawer to the left

  render() {
    const { props, state } = this;
    console.log(props, state);
    let selectedClass = (props.selected === "me") ? "bg-gray4 bg-gray1-d" : "bg-white bg-gray0-d";

    let rootIdentity = React.createElement(Link, {
            key: 1,
            to: "/~keybase/me", __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
            , React.createElement('div', {
              className: 
                "w-100 pl4 pt1 pb1 f9 flex justify-start content-center " +
                selectedClass, __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
              , React.createElement(Sigil, {
              ship: window.ship,
              color: "#000000",
              classes: "mix-blend-diff",
              size: 32, __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}})
              , React.createElement('p', {
                className: "f9 w-70 dib v-mid ml2 nowrap mono"      ,
                style: {paddingTop: 6}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
                , cite(window.ship)
              )
            )
          )

    let activeClasses = (this.props.activeDrawer === "keybase") ? "" : "dn-s";
    let keybaseProofs = null;
    if (!!props.proofs.signatures) {
      keybaseProofs = props.proofs.signatures.map((each, i) => {
        console.log(each, i);
        return (
          React.createElement(Link, { to: `/~keybase/proofs/${i}`, key: i, __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
            , React.createElement('div', { className: "w-100 v-mid f9 ph4 z1 pv1"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
              , React.createElement('p', { className: "f9 dib" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, each["kb_username"])
            )
          )
        )
      });
    }

    return (
      React.createElement('div', { className: "bn br-m br-l br-xl b--gray4 b--gray1-d lh-copy h-100 " +
       "flex-basis-30-ns flex-shrink-0 mw5-m mw5-l mw5-xl flex-basis-100-s " +
        "relative overflow-hidden pt3 pt0-m pt0-l pt0-xl " + activeClasses, __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
        , React.createElement('a', { className: "db dn-m dn-l dn-xl f8 pb6 pl3"      , href: "/", __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}, "⟵ Landscape" )
        , React.createElement('div', { className: "overflow-auto pb8 h-100"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
          , React.createElement(Link, { to: "/~keybase/new", className: "dib", __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}
            , React.createElement('p', { className: "f9 pt4 pl4 green2 bn"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}}, "Create Config" )
          )
          , React.createElement(Welcome, { proof: props.proof, __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}})
          , React.createElement('h2', { className: "f9 pt4 pr4 pb2 pl4 gray2 c-default"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}, "Your Config" )
          , React.createElement(Link, { to: "/~keybase/config", className: "dib", __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
            , React.createElement('p', { className: "f9 ph4 pb2 fw6 gray3"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}, "config.json")
          )
          , React.createElement('div', { className: "pt1", __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}
            , React.createElement('h2', { className: "f9 pt4 pr4 pb2 pl4 gray2 c-default"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 67}}, "Proofs")
            ,  keybaseProofs 
          )
        )
      )
    );
  }
}
