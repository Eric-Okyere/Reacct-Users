

export const addUser = ( newUser) => {
    return {
      type: "ADD_USER",
      payload: newUser
    };
  };

  export const editedUser =(newInfo)=>{
    return {
      type:"EDIT_USER",
      payload:{newInfo}
    }
  
  }


  export const DeleteNewUser =(user_id)=>{
    return {
    type :"DELETE_USER",
    payload:user_id
    }
  
  }