import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../utils/Interfaces";

//Interfaces/types
export interface Player {
  name: String;
  completed: Array<Category>;
}

export interface PlayerState {
  players: Array<Player>;
  currentPlayer: number;
}

//Variables
const initialState: PlayerState = {
  players: [],
  currentPlayer: 0,
};

// Slice
const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<Player>) {
      const player: Player = action.payload;
      state.players.push(player);
    },
    deletePlayer(state, action: PayloadAction<number>) {
      const newState = { ...state };
      let newPlayers = [...state.players];
      newPlayers.splice(action.payload, 1);
      newState.players = newPlayers;
      return newState;
    },
    addScore(state, action: PayloadAction<number>) {
      const newArr = [...state.players];
      const index = state.currentPlayer;
      const player = newArr[index];
      //Check if player has already completed category
      if (player.completed.includes(action.payload)) {
        return state;
      }
      newArr[index].completed.push(action.payload);
      newArr[index].completed.sort();
      state.players = newArr;
    },
    advanceGame(state) {
      // let num = calcNextPlayer(state.players, state.currentPlayer);
      // const newState = { ...state };
      // newState.currentPlayer = num;
      // state = newState;
      state.currentPlayer =
        state.currentPlayer >= state.players.length - 1
          ? 0
          : state.currentPlayer + 1;
    },
    resetPlayerState() {
      return initialState;
    },
  },
});

//Exports
export const {
  addPlayer,
  deletePlayer,
  addScore,
  advanceGame,
  resetPlayerState,
} = playerSlice.actions;
export default playerSlice.reducer;
