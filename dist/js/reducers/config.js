import _ from 'lodash';


export class ConfigReducer {
    reduce(json, state) {
        let data = _.get(json, 'config', false);
        if (data) {
            state.config = data;
        }
    }
}
