import { InitialReducer } from '/reducers/initial';
import { ConfigReducer } from '/reducers/config';
import { ProofReducer } from '/reducers/proof';


class Store {
    constructor() {
        this.state = {
            config: {},
            proofs: []
        };

        this.initialReducer = new InitialReducer();
        this.configReducer = new ConfigReducer();
        this.proofReducer = new ProofReducer();
        this.setState = () => { };
    }

    setStateHandler(setState) {
        this.setState = setState;
    }

    handleEvent(data) {
        let json = data.data;

        console.log(json);
        this.initialReducer.reduce(json, this.state);
        this.configReducer.reduce(json, this.state);
        this.proofReducer.reduce(json, this.state);
        this.setState(this.state);
    }
}

export let store = new Store();
window.store = store;
