import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import _ from 'lodash';
import { store } from '/store';
import { api } from '/api';
import { HeaderBar } from "./lib/header-bar.js"
import { Skeleton } from '/components/skeleton';
import { NewScreen } from '/components/new';
import { ConfigScreen } from '/components/config';
import { SubmitProof } from '/components/submit-proof';


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
      <BrowserRouter>
        <div className="h-100 w-100">
          <Route exact path="/~keybase"
            render={ (props) => {
              return (
                <Skeleton
                  activeDrawer="keybase"
                  history={props.history}
                  api={api}>
                  <div className="h-100 w-100 overflow-x-hidden bg-white bg-gray0-d dn db-ns">
                    <div className="pl3 pr3 pt2 dt pb3 w-100 h-100">
                      <p className="f9 pt3 gray2 w-100 h-100 dtc v-mid tc">
                        Create a config to begin cliking on "Create Config".
                      </p>
                    </div>
                  </div>
                </Skeleton>
              );
            }} />
          <Route exact path="/~keybase/new"
            render={ (props) => {
              return (
                <Skeleton
                  history={props.history}
                  api={api}
                  activeDrawer="rightPanel">
                  <NewScreen
                    history={props.history}
                    api={api}
                  />
                </Skeleton>
              );
          }} />
          <Route exact path="/~keybase/config"
            render={ (props) => {
              return (
                <Skeleton
                  history={props.history}
                  api={api}
                  activeDrawer="rightPanel">
                  <ConfigScreen
                    history={props.history}
                    api={api}
                  />
                </Skeleton>
              );
          }} />
          <Route exact path="/~keybase/submit-proof/notebook/:kb_username/:patp/:token/:kb_ua?"
            render={ (props) => {
              const keybaseUsername =  props.match.params.kb_username;
              const patp =  props.match.params.patp;
              const token =  props.match.params.token;
              const keybaseAgent =  props.match.params.kb_ua;
              return (
                <Skeleton
                  history={props.history}
                  api={api}
                  activeDrawer="rightPanel">
                  <SubmitProof
                    history={props.history}
                    api={api}
                    keybaseUsername={keybaseUsername}
                    patp={patp}
                    token={token}
                    keybaseAgent={keybaseAgent}
                  />
                </Skeleton>
              );
          }} />
        </div>
      </BrowserRouter>
    );
  }
}
