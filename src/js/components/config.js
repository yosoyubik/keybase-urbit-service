import React, { Component } from 'react'

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
      <div className="h-100 w-100 mw6 pa3 pt4 overflow-x-hidden bg-gray0-d white-d flex flex-column">
        <div className="w-100 dn-m dn-l dn-xl inter pt1 pb6 f8">
          <Link to="/~keybase/">{"⟵ Keybase"}</Link>
        </div>
        <div className="w-100 mb4 pr6 pr0-l pr0-xl">

          <div className={"fl ma2 bg-white bg-gray0-d white-d overflow-hidden " +
          "ba b--black b--gray1-d pa2 w-100 lh-copy"}>
            <p className="f9">To send us the config, you can send us the public URL for your config file or attach it directly in a Keybase chat message to @mlsteele or email miles@keyba.se.</p>
            <p className="f9 pt2">In our example the file is hosted at https://keybase.io/.well-known/example-proof-config.json.</p>
          </div>
          <div className={"fl ma2 bg-white bg-gray0-d white-d overflow-hidden " +
          "ba b--black b--gray1-d pa2 w-100 lh-copy"}>
            <code>{JSON.stringify(props.config, null, 2)}</code>
          </div>
        </div>
      </div>
    );
  }
}
