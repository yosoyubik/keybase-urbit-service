const _jsxFileName = "/Users/jose/urbit/keybase/src/js/components/root.js";import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import _ from 'lodash';
import { store } from '/store';
import { api } from '/api';
import { HeaderBar } from "./lib/header-bar.js"
import { Skeleton } from '/components/skeleton';
import { NewScreen } from '/components/new';
import { ConfigScreen } from '/components/config';
import { Proof } from '/components/proof';
import { SubmitProof } from '/components/submit-proof';


export class Root extends Component {
  constructor(props) {
    super(props);

    this.state = store.state;
    store.setStateHandler(this.setState.bind(this));
  }

  // componentDidMount() {
  //   new Image().src = "/~keybase/img/Spinner.png";
  // }

  render() {
    const { props, state } = this;
    let config = !!state.config ? state.config : {};
    let proofs = !!state.proofs ? state.proofs : {};
    return (
      React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
        , React.createElement('div', { className: "h-100 w-100" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}
          , React.createElement(Route, { exact: true, path: "/~keybase",
            render:  (props) => {
              return (
                React.createElement(Skeleton, {
                  activeDrawer: "keybase",
                  history: props.history,
                  config: config,
                  proofs: proofs,
                  api: api, __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
                  , React.createElement('div', { className: "h-100 w-100 overflow-x-hidden flex flex-column bg-white bg-gray0-d dn db-ns"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}
                    , React.createElement('div', { className: "pl3 pr3 pt2 dt pb3 w-100 h-100"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
                      , React.createElement('p', { className: "f9 pt3 gray2 w-100 h-100 dtc v-mid tc"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}, "Do Keybase things now or I'll talk to you again"

                      )
                    )
                  )
                )
              );
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}} )
          , React.createElement(Route, { exact: true, path: "/~keybase/new",
            render:  (props) => {
              return (
                React.createElement(Skeleton, {
                  history: props.history,
                  api: api,
                  config: config,
                  proofs: proofs,
                  activeDrawer: "rightPanel", __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}
                  , React.createElement(NewScreen, {
                    history: props.history,
                    api: api, __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
                  )
                )
              );
          }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}} )
          , React.createElement(Route, { exact: true, path: "/~keybase/config",
            render:  (props) => {
              return (
                React.createElement(Skeleton, {
                  history: props.history,
                  api: api,
                  config: config,
                  proofs: proofs,
                  activeDrawer: "rightPanel", __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}
                  , React.createElement(ConfigScreen, {
                    history: props.history,
                    api: api,
                    config: config, __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}
                  )
                )
              );
          }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}} )
          , React.createElement(Route, { exact: true, path: "/~keybase/proofs/:index",
            render:  (props) => {
              return (
                React.createElement(Skeleton, {
                  history: props.history,
                  api: api,
                  config: config,
                  proofs: proofs,
                  activeDrawer: "rightPanel", __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}
                  , React.createElement(Proof, {
                    history: props.history,
                    api: api,
                    proof: proofs.signatures[props.match.params.index], __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}
                  )
                )
              );
          }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}} )
          , React.createElement(Route, { exact: true, path: "/~keybase/submit-proof/:kb_username/:patp/:token/:kb_ua?",
            render:  (props) => {
              const keybaseUsername =  props.match.params.kb_username;
              const patp =  props.match.params.patp;
              const token =  props.match.params.token;
              const keybaseAgent =  props.match.params.kb_ua;
              return (
                React.createElement(Skeleton, {
                  history: props.history,
                  api: api,
                  config: config,
                  proofs: proofs,
                  activeDrawer: "rightPanel", __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}
                  , React.createElement(SubmitProof, {
                    history: props.history,
                    api: api,
                    keybaseUsername: keybaseUsername,
                    patp: patp,
                    token: token,
                    keybaseAgent: keybaseAgent, __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}
                  )
                )
              );
          }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 102}} )
        )
      )
    );
  }
}
