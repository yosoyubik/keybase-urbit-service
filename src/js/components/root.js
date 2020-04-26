import React, { Component } from 'react';
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
      <BrowserRouter>
        <div className="h-100 w-100">
          <Route exact path="/~keybase"
            render={ (props) => {
              return (
                <Skeleton
                  activeDrawer="keybase"
                  history={props.history}
                  config={config}
                  proofs={proofs}
                  api={api}>
                  <div className="h-100 w-100 overflow-x-hidden flex flex-column bg-white bg-gray0-d dn db-ns">
                    <div className="pl3 pr3 pt2 dt pb3 w-100 h-100">
                      <p className="f9 pt3 gray2 w-100 h-100 dtc v-mid tc">
                      Do Keybase things now or I'll talk to you again
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
                  config={config}
                  proofs={proofs}
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
                  config={config}
                  proofs={proofs}
                  activeDrawer="rightPanel">
                  <ConfigScreen
                    history={props.history}
                    api={api}
                    config={config}
                  />
                </Skeleton>
              );
          }} />
          <Route exact path="/~keybase/proofs/:index"
            render={ (props) => {
              return (
                <Skeleton
                  history={props.history}
                  api={api}
                  config={config}
                  proofs={proofs}
                  activeDrawer="rightPanel">
                  <Proof
                    history={props.history}
                    api={api}
                    proof={proofs.signatures[props.match.params.index]}
                  />
                </Skeleton>
              );
          }} />
          <Route exact path="/~keybase/submit-proof/:kb_username/:patp/:token/:kb_ua?"
            render={ (props) => {
              const keybaseUsername =  props.match.params.kb_username;
              const patp =  props.match.params.patp;
              const token =  props.match.params.token;
              const keybaseAgent =  props.match.params.kb_ua;
              return (
                <Skeleton
                  history={props.history}
                  api={api}
                  config={config}
                  proofs={proofs}
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
