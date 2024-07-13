// src/features/project/hotelSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  projects: [],
  status: "idle",
  error: null,
};

export const fetchProjects = createAsyncThunk("projects/fetch", async () => {
  const response = await axios.get("http://localhost:9990/projects");
  return response?.data;
});

export const udpateProject = createAsyncThunk(
  "projects/update",
  async ({ project }) => {
    const response = await axios.get("http://localhost:9990/projects");
    const projects = response.data;
    const prjIdx = projects.findIndex((p) => p.id === project?.id);

    if (prjIdx !== -1) {
      projects[prjIdx] = { ...projects[prjIdx], ...project };
    }

    await axios.put("http://localhost:9990/projects", project);
    return project[prjIdx];
  }
);

const hotelSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action?.payload);
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(udpateProject.fulfilled, (state, action) => {
        const project = action.payload;

        state.projects.map((p) =>
          p.id === project.id ? { ...p, project } : p
        );
      });
  },
});

export default hotelSlice.reducer;
