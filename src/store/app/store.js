import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/couterSlice";
import applicantsReducer from "../features/applicant/applicantSlice";
import userReducer from "../features/user/userSlice";
import hotelReducer from "../features/hotel/hotelReducer";
import projectReducer from "../features/projects/projectReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    applicants: applicantsReducer,
    user: userReducer,
    hotel: hotelReducer,
    project: projectReducer,
  },
});
