export const bookListReducer = (state = [], action) => {
   if (action.type === 'SET_BOOKS') {
     return action.payload;
   } else if (action.type === 'CLEAR_BOOKS') {
     return []
   }
   return state;
 }
