export const setUser = user => ({
    type: 'SET_USER',
    user: user
})

export default function userinfo(state = [{user:"unknown user"}], action){ //TODO
    switch (action.type) {
        case 'SET_USER':
            return [
                {
                  user: action.user
                }
              ]
        default:
          return state
      }
}