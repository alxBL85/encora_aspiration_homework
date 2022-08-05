import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTopicsService } from '../services';

// ---------------------------------------------------------------

export const requestTopicsThunk = createAsyncThunk('requestTopicsThunk', async (topic, thunkApi) => {
   try {
    const response = await getTopicsService(topic);
    response.requestId = thunkApi.requestId;
    return response.data.data;
    }
    catch( error )
    {
        return { error };
    }
});

// -------------------------------------------------------------------------------------------------

const initialState = {
  topic: "",
  relatedTopics: [],
  stargazerCount: 0,
  isLoading: false,
  error: '',  
};

export const gitHubTopicSlice = createSlice({
    name: 'gitHubTopicSlice',
    initialState,
    reducers: {
        setTopic: (state, action) => {
            state.topic = action.payload.topic;
        },
        clearTopic: (state) => {
            state.topic = '';
        }
    },

    extraReducers: {

    [requestTopicsThunk.pending]: (state) => {
        state.topic = "";
        state.relatedTopics = [];
        state.stargazerCount = 0;
        state.error = '';
        state.isLoading = true;
    },

    [requestTopicsThunk.fulfilled]: (state, action) => {
        if(action.payload.error)
        {
            state.error = action.payload.error?.message;
        }
        else if (action.payload?.topic)
        {
            const { topic } = action.payload; 
            state.topic = topic.name;
            state.relatedTopics = topic.relatedTopics;
            state.stargazerCount = topic.stargazerCount;
            state.error = '';
        }
        
        state.isLoading = false;        
    },

    [requestTopicsThunk.rejected]: (state, action) => {
        state.topic = "";
        state.relatedTopics = [];
        state.stargazerCount = 0;
        state.error = action.error;
        state.isLoading = false;
    },

    }
});

// ------------- Action Creators: -------------------

export const { setTopic, clearTopic } = gitHubTopicSlice.actions;

// ------------- Selectors: -------------------------

export const getTopic = (state) => state.gitHubTopic.topic;
export const getStargazerCount = (state) => state.gitHubTopic.stargazerCount;
export const getRelatedTopics = (state) => state.gitHubTopic.relatedTopics;
export const isLoading = (state) => state.gitHubTopic.isLoading;
export const getError = (state) => state.gitHubTopic.error;

export const getSelectedDescription = (state) => state.gitHubTopic.selectedDescription;

// ------------- Reducer: ---------------------------

export default gitHubTopicSlice.reducer;