import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch applicants data
export const fetchApplicants = createAsyncThunk(
  "applicants/fetchApplicants",
  async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c73180f2f5bf490f9b0d5b3bb9f90643"
    ); // Replace with your API endpoint
    const data = await response.json();
    console.log(data.articles);
    if (data && data.status === "ok") {
      return data.articles;
    }

    return [];
  }
);

const applicantsSlice = createSlice({
  name: "applicants",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addApplicant: (state, action) => {
      state.data.push(action.payload);
    },
    updateApplicant: (state, action) => {
      const index = state.data.findIndex(
        (applicant) => applicant.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteApplicant: (state, action) => {
      state.data = state.data.filter((_, index) => index !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplicants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApplicants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchApplicants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addApplicant, updateApplicant, deleteApplicant } =
  applicantsSlice.actions;

export default applicantsSlice.reducer;
