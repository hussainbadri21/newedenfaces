import alt from '../alt';
import FooterActions from "../actions/FooterActions";

class FooterStore {
    constructor() {
        this.bindActions(FooterActions);
        this.characters = [];
    }

    onGetTopCharachterSucsess(data) {
        this.charachters = data.splice(0, 5);
    }

    onGetTopCharactersFail(jqXhr) {
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
}

export default alt.createStore(FooterStore);