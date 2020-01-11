const initialState = {
    type: "INIT",
    user: "unknown user"
}

export const setUser = user => ({
    type: 'SET_USER',
    user: user
  })

export default function userinfo(state = [{user:"unknown user"}], action){
    switch (action.type) {
        case 'SET_USER':
            debugger;
            return [
                {
                  user: action.user
                }
              ]
        default:
          return state
      }
}