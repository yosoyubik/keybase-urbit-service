import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom';
import { sigil, stringRenderer } from 'urbit-sigil-js'
import { deSig } from '/lib/util';
import urbitOb from 'urbit-ob';

export class SubmitProof extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keybaseUsername: this.props.keybaseUsername,
      token: this.props.token,
    }
  }

  onClickSave() {
    const { props, state } = this;

    this.setState({
      error: false,
      success: true,
      awaiting: true
    }, () => {
      props.api.proof.add(props.keybaseUsername, props.token)
        .then(() => {
        this.setState({awaiting: false});
        // props.history.push(`/~keybase/proof`);
      })
    });
  }

  render() {
    let displayNameErrElem = (<span />);
    if (this.props.patp === ship) {
      displayNameErrElem = (
        <span className="f9 inter red2 ml3 mt1 db">
          This is not the ship we were looking for...
        </span>
        );
    }

    return (
      <div className="h-100 w-100 mw6 pa3 pt4 overflow-x-hidden bg-gray0-d white-d flex flex-column">
        <div className="w-100 dn-m dn-l dn-xl inter pt1 pb6 f8">
          <Link to="/~keybase/">{"⟵ All Groups"}</Link>
        </div>
        <div className="w-100 mb4 pr6 pr0-l pr0-xl">

          <div className={"fl ma2 bg-white bg-gray0-d white-d overflow-hidden " +
          "ba b--black b--gray1-d pa2 w-100 lh-copy"}>
            <p className="f9">This proof should be stored forever unless it is updated or deleted by the user.</p>
            <p className="f9 pt2">The Identity Service validates the signature with Keybase and saves this data so it can be served during the Proof Checking flow.</p>
            <p className="f9 pt2">You need to review that your Keybase username is correct.</p>
            <p className="f9 pt2">Then by clicking "Store Proof" you will authorizes the cryptographic connection and store the proof on your ship.</p>

            <h2 className="f8 pt6">Proof Validation</h2>

            <h2 className="f8">Keybase Username</h2>
            <textarea
              className={
                "f7 ba b--gray3 b--gray2-d bg-gray0-d white-d pa3 db w-100 mt2 " +
                "focus-b--black focus-b--white-d"
              }
              readOnly
              defaultValue={this.props.keybaseUsername}
              rows={1}
              style={{
                resize: "none",
                height: 48,
                paddingTop: 14
              }}
            >
            </textarea>
            {displayNameErrElem}

            <h2 className="f8 pt6">Token</h2>
            <textarea
              className={
                "f7 ba b--gray3 b--gray2-d bg-gray0-d white-d pa3 db w-100 mt2 " +
                "focus-b--black focus-b--white-d"
              }
              readOnly
              defaultValue={this.props.token}
              rows={1}
              style={{
                resize: "none",
                height: 48,
                paddingTop: 14
              }}
              >
              </textarea>

            <button
              onClick={this.onClickSave.bind(this)}
              className="f9 ba pa2 b--green2 green2 pointer bg-transparent">
              Store Proof
            </button>
          </div>
        </div>
      </div>
    );
  }
}
