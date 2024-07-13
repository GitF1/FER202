// src/features/hotel/hotelSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hotel: null,
  status: "idle",
  error: null,
};

export const fetchHotel = createAsyncThunk("hotel/fetchHotel", async () => {
  const response = await axios.get("http://localhost:4000/hotel");
  return response.data;
});

export const updateRoom = createAsyncThunk(
  "hotel/updateRoom",
  async ({ roomId, room }) => {
    const response = await axios.get("http://localhost:4000/hotel");
    const hotel = response.data;
    const roomIndex = hotel.rooms.findIndex((r) => r.roomId === roomId);
    if (roomIndex !== -1) {
      hotel.rooms[roomIndex] = { ...hotel.rooms[roomIndex], ...room };
    }
    await axios.put("http://localhost:4000/hotel", hotel);
    return hotel.rooms[roomIndex];
  }
);

export const createRoom = createAsyncThunk("hotel/createRoom", async (room) => {
  const response = await axios.get("http://localhost:4000/hotel");
  const hotel = response.data;
  hotel.rooms.push(room);
  await axios.put("http://localhost:4000/hotel", hotel);
  return room;
});

export const deleteRoom = createAsyncThunk(
  "hotel/deleteRoom",
  async ({ roomId }) => {
    const response = await axios.get("http://localhost:4000/hotel");
    const hotel = response.data;

    if (!roomId) return;

    hotel.rooms = hotel.rooms.filter((r) => r.roomId !== roomId);

    await axios.put("http://localhost:4000/hotel", hotel);

    return roomId;
  }
);

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotel.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hotel = action.payload;
      })
      .addCase(fetchHotel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        const updatedRoom = action.payload;
        const index = state.hotel.rooms.findIndex(
          (room) => room.roomId === updatedRoom.roomId
        );
        state.hotel.rooms[index] = updatedRoom;
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        const roomId = action.payload;
        console.log({ roomId });
        state.hotel.rooms = state.hotel.rooms.filter(
          (room) => room.roomId !== roomId
        );
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.hotel.rooms.push(action.payload);
      });
  },
});

export default hotelSlice.reducer;
