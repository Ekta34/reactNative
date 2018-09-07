import update from "immutability-helper";
import client from 'js/apolloClient'
import gql from 'graphql-tag';

export const NAME = 'firsttab';
export const SET_EMPLOYEE_FEED = 'SET_EMPLOYEE_FEED' + ' ' + NAME;

// ------------------------------------
// Actions
// ------------------------------------
// PURE ACTIONS

export const setEmployeeFeed = (data) => {
    return {
        type:SET_EMPLOYEE_FEED,
        data:data
    }
}


// THUNKS

export const getEmployeFeed = () => {
    return (dispatch, getState) => {
        
        client.query({
            query: gql`
                query employeeFeed {
                    employeeFeed {
                        employeeId,
                        firstName,
                        lastName
                    }
                }
            `,
          }).then((result) => {
                dispatch(setEmployeeFeed(result.data.employeeFeed));
          }).catch((err) => {
              console.log('err');
          });

    }
}
// ------------------------------------
// Reducer Handlers
// ------------------------------------

const REDUCER_HANDLERS = {
    [SET_EMPLOYEE_FEED]: (state,action) => {
        return update(state,{employees:{$set:action.data}});
    }
};
const initialState = {
    employees : []
};

export default function myReducer (state = initialState, action) {
    const handler = REDUCER_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}