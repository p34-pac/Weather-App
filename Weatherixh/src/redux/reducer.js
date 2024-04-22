/* eslint-disable no-unused-vars */


const initialState = {
    weather: {},
    location: null
}
export function reducer(state = initialState, action){
    switch(action.type){
        case "UPDATE_WEATHER":
            return {
                ...state,
                weather: action.weatherData
            }
        case "CHANGE_LOCATION":
            return {
                ...state,
                location: action.location
            }
        default:
            return state; // Return current state for unrecognized action types
    }
}