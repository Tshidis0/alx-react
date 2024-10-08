import { initialState } from './uiReducer';
import uiReducer from './uiReducer';
import * as actions from '../actions/uiActionTypes';

describe('Testing uiReducer', () => {
    it('should returns the initial state when no action is passed', () => {
        const result = uiReducer(initialState, {});
        expect(result).toEqual(initialState);
    });

  it('returns the initial state when the action SELECT_COURSE is passed', () => {
    const result = uiReducer(undefined, {type: "SELECT_COURSE"});
    expect(result).toStrictEqual(initialState);
  });

  it('changes the isNotificationDrawerVisible property to true when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const result = uiReducer(undefined, {type: actions.DISPLAY_NOTIFICATION_DRAWER});
    expect(result).toStrictEqual({ ...initialState, isNotificationDrawerVisible: true });
  });
});
