import * as actions from '../../actions';
import * as types from '../../constants/action-types';

describe('actions', () => {
  it('should create an action to set auth user state', () => {
    const payload = 'sets user state object to true with value'
    const expectedAction = {
      type: types.LOGIN_USER,
      payload
    }
    expect(actions.loginUser(payload)).toEqual(expectedAction)
  })
});
describe('actions', () => {
    it('should create an action to remove auth user state', () => {
      const payload = 'Sets user state object to false'
      const expectedAction = {
        type: types.LOGOUT_USER,
        payload
      }
      expect(actions.logoutUser(payload)).toEqual(expectedAction)
    })
});