


const initialState = {
  users: [],
 
};

const userReducer = (state = initialState, action) => {
 
  switch (action.type) {
   
    case "ADD_USER":
        console.log(action.payload)
      return { ...state, users: [...state.users, action.payload] };

      case "EDIT_USER":
       
    const editedUsers = state.users.map((user)=>{
      if(user.id === action.payload.newInfo.id){
        return action.payload.newInfo
      }
      else return user
    })
    return { ...state, users: editedUsers };
    






      case "DELETE_USER":
			const keepUsers = state.users.filter(
				(user) => user.id !== action.payload
			);
			return { ...state, users:  keepUsers };
			


    default:
      return state;
  }
};

export default userReducer;