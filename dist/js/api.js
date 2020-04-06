import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class UrbitApi {
  setAuthTokens(authTokens) {
    this.authTokens = authTokens;
    this.bindPaths = [];

    this.config = {
      save: this.configSave.bind(this),
    };

    this.proof = {
      add: this.proofAdd.bind(this),
    };
  }

  bind(path, method, ship = this.authTokens.ship, appl = "keybase", success, fail) {
    this.bindPaths = _.uniq([...this.bindPaths, path]);

    window.subscriptionId = window.urb.subscribe(ship, appl, path,
      (err) => {
        fail(err);
      },
      (event) => {
        success({
          data: event,
          from: {
            ship,
            path
          }
        });
      },
      (err) => {
        fail(err);
      });
  }

  keybase(data) {
    this.action("keybase", "json", data);
  }

  action(appl, mark, data) {
    return new Promise((resolve, reject) => {
      window.urb.poke(ship, appl, mark, data,
        (json) => {
          resolve(json);
        },
        (err) => {
          reject(err);
        });
    });
  }

  configSave(config, badges) {
    console.log(config, badges);
    return this.action("keybase", "keybase-action", {
      save: {
        config: config,
        badges: badges
      }
    });
  }

  proofAdd(keybaseUsername, token) {
    console.log(config, badges);
    return this.action("keybase", "keybase-action", {
      add: {
        "kb_username": keybaseUsername,
        "sug_hash": token
      }
    });
  }

  // configRemove() {
  //   return this.action("keybase", "keybase-action", {
  //     remove: { members: ships, path }
  //   })
  // }

}
export let api = new UrbitApi();
window.api = api;
