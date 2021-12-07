export const bookListReducer = (state = [], action) => {
   console.log(action, state);
   if (action.type === 'SET_BOOKS') {
     return action.payload;
   } else if (action.type === 'CLEAR_BOOKS') {
     return []
   }
   return state;
 }