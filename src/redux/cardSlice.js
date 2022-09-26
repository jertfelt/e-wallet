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
    initialCard: (state) => {
      if (state.activeC === null){
        state.activeC = state.allCards.shift();
      }
    },
    
    deleteCard: (state, {payload}) => {
      state.allCards = state.allCards.filter(card => card.card_number !== payload);
      
    },
    changeCard: (state, {payload}) => {
      const thisCard = state.activeC;
      state.activeC = state.allCards.find(card => card.card_number  === payload)
      state.allCards.push(thisCard);
      state.allCards = state.allCards.filter(card => card.card_number  !== payload);
    },
    addCard: (state, {payload}) => {
      if ([...state.allCards, state.activeC].length >= 4){
        alert("Du får max ha fyra kort")
        return;
      }
      state.allCards = [...state.allCards, payload];
    }
  },
  extraReducers: {
    [getUser.fulfilled]: (state, {payload}) => {
      if (state.user === null){
        state.user = payload;
        const {cards} = JSON.parse(JSON.stringify(data));
        state.allCards = cards;
        state.activeC = state.allCards.shift();
      }
    }
  }
})

export const {initialCard, addCard, deleteCard, changeCard} = cardSlice.actions;

export default cardSlice.reducer;