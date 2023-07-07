import {selector} from "recoil"
import { todoState } from "../atoms/TodoState";

export const totalTodos = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const ts = get(todoState);
  
      return ts.length;
    },
  });