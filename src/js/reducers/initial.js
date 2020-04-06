import _ from 'lodash';


export class InitialReducer {
    reduce(json, state) {
        let data = _.get(json, 'keybase-initial', false);
        if (data) {
            state.config = data.config;
            state.proofs = data.proofs;
        }
    }
}
