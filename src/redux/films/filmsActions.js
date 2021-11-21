import { createAction } from "@reduxjs/toolkit";

export const getAllFilmsRequest = createAction("films/getAllfilms");
export const getAllFilmsSuccess = createAction("films/getAllFilmsSuccess");
export const getAllFilmsError = createAction("films/getAllfilmsError");

// export const selectFilm = createAction("films/addFilmName");
