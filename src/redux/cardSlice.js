import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


import data from "../data/samplecards.json";
const urlNames = "https://randomuser.me/api/"; 

export const getUser = createAsyncThunk("cards/getUser", async () => {
  const res = await axios(urlNames);
  if (res.status === 200){
    return res.data.results[0];
  }
  else {
    return {
      "default": [
        {
          "name":{
            "first": "Erik",
            "last" : "Eriksson"
          }
        }
      ]
    }
  }

})

//?The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array. 

export const cardSlice = createSlice({
  name: "cards",
  initialState: {
    user: null,
    allCards: [] , 
    activeC: null,
  },
  reducers: {
    initialC: (state) => {
      if (state.activeC === null){
        state.activeC = state.allCards.shift();
      }
    },
    addC: (state, {payload}) => {
      if ([...state.allCards, state.activeC].length >= 4){
        alert("Du får max ha fyra kort")
        return;
      }
      state.allCards = [...state.allCards, payload];
    },
    deleteC: (state, {payload}) => {
      state.allCards = state.allCards.filter(card => card.cardNumber !== payload);
    },
    changeC: (state, {payload}) => {
      const thisCard = state.activeC;
      state.activeC = state.allCards.find(card => card.cardNumber === payload)
      state.allCards.push(thisCard);
      state.allCards = state.allCards.filter(card => card.cardNumber !== payload);
    }
  },
  extraReducers: {
    [getUser.fulfilled]: (state, {payload}) => {
      if (state.user ===null){
        state.user = payload;
        const {cards} = JSON.parse(JSON.parse(JSON.stringify(data)));
        state.allCards = cards;
        state.activeC = state.allCards.shift();
      }
    }
  }
})

export const {initialC, addC, deleteC, changeC} = cardSlice.actions;

export default cardSlice.reducer;