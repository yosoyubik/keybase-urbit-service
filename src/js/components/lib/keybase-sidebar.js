import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import { Sigil } from '/components/lib/icons/sigil';
import { Welcome } from '/components/lib/welcome';
import { cite } from '/lib/util';

export class KeybaseSidebar extends Component {
  // drawer to the left

  render() {
    const { props, state } = this;

    let selectedClass = (props.selected === "me") ? "bg-gray4 bg-gray1-d" : "bg-white bg-gray0-d";

    let rootIdentity = <Link
            key={1}
            to={"/~keybase/me"}>
            <div
              className={
                "w-100 pl4 pt1 pb1 f9 flex justify-start content-center " +
                selectedClass}>
              <Sigil
              ship={window.ship}
              color="#000000"
              classes="mix-blend-diff"
              size={32}/>
              <p
                className="f9 w-70 dib v-mid ml2 nowrap mono"
                style={{paddingTop: 6}}>
                {cite(window.ship)}
              </p>
            </div>
          </Link>


    let activeClasses = (this.props.activeDrawer === "keybase") ? "" : "dn-s";

    return (
      <div className={"bn br-m br-l br-xl b--gray4 b--gray1-d lh-copy h-100 " +
       "flex-basis-30-ns flex-shrink-0 mw5-m mw5-l mw5-xl flex-basis-100-s " +
        "relative overflow-hidden pt3 pt0-m pt0-l pt0-xl " + activeClasses}>
        <a className="db dn-m dn-l dn-xl f8 pb6 pl3" href="/">⟵ Landscape</a>
        <div className="overflow-auto pb8 h-100">
          <Link to="/~keybase/new" className="dib">
            <p className="f9 pt4 pl4 green2 bn">Create Config</p>
          </Link>
          <Welcome proof={props.proof}/>
          <h2 className="f9 pt4 pr4 pb2 pl4 gray2 c-default">Your Config</h2>
          <Link to="/~keybase/config" className="dib">
            <p className="f9 ph4 pb2 fw6 gray3">config.json</p>
          </Link>
          <h2 className="f9 pt4 pr4 pb2 pl4 gray2 c-default">Your Proof</h2>

        </div>
      </div>
    );
  }
}
