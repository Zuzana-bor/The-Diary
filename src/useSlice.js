import {creareSLice}from 


export const usersSlice = createSlice({
  name: 'users',
  initialState: { currentUser: null },
  reducers: {
    setUser: (user, action) => {
      usersSlice.currentUser = action.payload;
    },
  },
});

export const {setUser}=usersSlice.actions
export const selectUsers=state=>state.users;
export default usersSlice.reducer

