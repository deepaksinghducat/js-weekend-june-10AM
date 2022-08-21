
import { useState } from "react";

export const useCounter = (value) => {
	const [counter, setCounter] = useState(value);

	return [counter,setCounter];
}