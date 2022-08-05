import { configureStore } from '@reduxjs/toolkit';
import gitHubReactReducer from '../slice/githubSlice';

export default configureStore({
    reducer: {
        gitHubTopic: gitHubReactReducer,
    },
});