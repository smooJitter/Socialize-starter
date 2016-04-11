import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core'
import Component from '../components/overview.jsx'

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections} = context()
  if(Meteor.subscribe('conversations').ready()){
    const conversations = Meteor.conversations.find().fetch()

    onData(null, {conversations})
  } else {
    onData()
  }
}

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Component)
