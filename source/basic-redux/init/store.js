// Core
import { createStore } from "redux";

// Reducers
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer)