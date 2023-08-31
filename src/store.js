
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './slices/counter';
import isEnabledReducer from './slices/isEnabled';
import themeReducer from './slices/theme';

export default configureStore({
  reducer: {
    counter: counterReducer,
    isEnabled: isEnabledReducer,
    theme: themeReducer
  }
});
