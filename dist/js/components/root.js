const _jsxFileName = "/Users/jose/urbit/keybase/src/js/components/root.js";import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import _ from 'lodash';
import { store } from '/store';
import { api } from '/api';
import { HeaderBar } from "./lib/header-bar.js"
import { Skeleton } from '/components/skeleton';
import { NewScreen } from '/components/new';
import { ConfigScreen } from '/components/config';


export class Root extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   new Image().src = "/~keybase/img/Spinner.png";
  // }

  render() {
    const { props, state } = this;

    return (
      React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
        , React.createElement('div', { className: "h-100 w-100" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
          , React.createElement(Route, { exact: true, path: "/~keybase",
            render:  (props) => {
              return (
                React.createElement(Skeleton, {
                  activeDrawer: "keybase",
                  history: props.history,
                  api: api, __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
                  , React.createElement('div', { className: "h-100 w-100 overflow-x-hidden bg-white bg-gray0-d dn db-ns"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
                    , React.createElement('div', { className: "pl3 pr3 pt2 dt pb3 w-100 h-100"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
                      , React.createElement('p', { className: "f9 pt3 gray2 w-100 h-100 dtc v-mid tc"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "Create a config to begin cliking on \"Create Config\"."

                      )
                    )
                  )
                )
              );
            }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}} )
          , React.createElement(Route, { exact: true, path: "/~keybase/new",
            render:  (props) => {
              return (
                React.createElement(Skeleton, {
                  history: props.history,
                  api: api,
                  activeDrawer: "rightPanel", __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
                  , React.createElement(NewScreen, {
                    history: props.history,
                    api: api, __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
                  )
                )
              );
          }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}} )
          , React.createElement(Route, { exact: true, path: "/~keybase/config",
            render:  (props) => {
              return (
                React.createElement(Skeleton, {
                  history: props.history,
                  api: api,
                  activeDrawer: "rightPanel", __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
                  , React.createElement(ConfigScreen, {
                    history: props.history,
                    api: api, __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}
                  )
                )
              );
          }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}} )
        )
      )
    );
  }
}
