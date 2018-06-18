
export const UPDATE_USER = 'user:updateUser'; // 👈🏼 avoid collision with other components

export function updateUser(newUser){
  return {
    type: UPDATE_USER,
    payload: {
      user:newUser
    }
  }
}