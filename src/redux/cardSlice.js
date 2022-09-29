import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


import data from "../data/samplecards.json";
const urlNames = "https://randomuser.me/api"; 

export const getUser = createAsyncThunk("cards/getUser", async () => {
  const res = await axios(urlNames);
  if (res.status === 200){
    return res.data.results[0];
  }
})

//försöker spara
export const saveState = (user, cards, active) => {
  try {
    const userLocal = user.name;
    // console.log("this is now local storage:", userLocal)
    const firstName = userLocal.first;
    const lastName = userLocal.last;
    const userNameLocal = firstName + " " + lastName;
    localStorage.setItem("userLocal", userNameLocal);  
    localStorage.setItem("allCards",JSON.stringify(cards));
    localStorage.setItem("activeC", JSON.stringify(active));
    localStorage.setItem("test", cards);
  }
  catch (err){
    console.log(err)
  }
}


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
      console.log("payload", payload)
      if ([...state.allCards, state.activeC].length >= 4)
      {
        alert("Du får max ha fyra kort. Prova att ta bort ett inaktivt kort först innan du lägger till ett nytt.")
        return;
      } else {
        state.allCards = [...state.cards, payload];
        alert("Added card!")
        console.log("Message from reducer addNewCard: added card");
        return;
      }
    }
  },
  extraReducers: {
    [getUser.fulfilled]: (state, {payload}) => {
      if (state.user === null){
        state.loading =false;
        state.user = payload;
        const {cards} = JSON.parse(JSON.stringify(data));
        state.allCards = cards;
        state.activeC = state.allCards.shift();
        saveState(payload, state.allCards, state.activeC)
      }
    },
    [getUser.pending]: (state, payload) => {
      state.loading = true;
      
    }, 
    [getUser.rejected]: (state, payload) => {
      state.loading = false;
      state.error = true;
    }
  }
})

export const {initialCard, addCard, deleteCard, changeCard} = cardSlice.actions;

export default cardSlice.reducer;