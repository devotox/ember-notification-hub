// is-equal helper is necessary to determine which option is currently selected.
import Ember from 'ember';

export function emberNotificationIsEqual(params) {
    return params[0] === params[1];
}

export default Ember.Helper.helper(emberNotificationIsEqual);
