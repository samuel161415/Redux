import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./counterApi";

const initialState = {
    value : 0,
    status : 'idel'
}

export const incrementAsycnc = createAsyncThunk('counter/fetchData',
    async (amount) => {
        const response = await fetchData(amount)
        return response.data
    }

)

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers : {
        increment : (state) =>{
            state.value += 1
        },
        decrement : (state) =>{
            state.value -= 1
        },
        incrementByValue : (state,action) =>{
            state.value += action.payload
        },
        incrementIfOdd : (state,action) =>{
            console.log('is odd', state.value % 2 !== 0);
            if (state.value % 2 !== 0 )
            state.value += action.payload
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(incrementAsycnc.pending,(state)=>{
            state.status = 'loading'
        })

        .addCase(incrementAsycnc.fulfilled,(state,action) =>{
            state.status = 'idle';
            state.value += action.payload;
        })


    }
})

export const {increment,decrement,incrementByValue,incrementIfOdd} = counterSlice.actions
export default counterSlice.reducer