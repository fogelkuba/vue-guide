import * as types from './types';

export const signIn = ({commit}, user_payload) => {
    commit(types.SIGN_IN, user_payload)
};
