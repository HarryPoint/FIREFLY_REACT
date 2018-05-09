import typeToReducer from 'type-to-reducer';
import update from 'immutability-helper';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

const apiReducer = (actionType, initData = []) => typeToReducer({
  [actionType]: {
    [PENDING]: (state, action) => update(state, {loading: { $set: true }}),
    [REJECTED]: (state, action) => update(state, {loading: { $set: false }, error: { $set: action.payload}}),
    [FULFILLED]: (state, action) => update(state, {loading: { $set: false }, data: { $set: action.payload.data.data}}),
  }
}, {
  data: initData,
  error: null,
  loading: false
})

export default apiReducer
