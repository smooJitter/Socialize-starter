import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SettingsPasswordSet from '../components/settings_password_set.jsx';

export const composer = ({context, clearErrors, location}, onData) => {
  //const {} = context();
  let {token} = location.query
  onData(null, {token});
  return clearErrors()
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  resetPassword: actions.users.resetPassword,
  clearErrors: actions.users.clearErrors
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SettingsPasswordSet);