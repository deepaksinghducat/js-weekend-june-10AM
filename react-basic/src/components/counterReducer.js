
export const CounterReducer = (state,action) => {
	console.log(action);
 
	if(action.type === 'increment') {
	  return {
		 counter: state.counter + action.payload
	  }
	}
 
	if(action.type === 'decrement') {
	 return {
		counter: state.counter - action.payload
	 }
   }
 
	 return state;
 }
 