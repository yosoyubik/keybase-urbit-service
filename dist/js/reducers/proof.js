import _ from 'lodash';


export class ProofReducer {
  reduce(json, state) {
      let data = _.get(json, 'proof', false);
      if (data) {
          state.proofs.signatures.push(data);
      }
  }
}
