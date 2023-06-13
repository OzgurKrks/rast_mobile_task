import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from '../components/Model/DataModel';

export interface DataState {
  dataList: IData[];
}

// datayı localstoragedan alma
const dataArray = localStorage.getItem("table_data");
const parsedData: IData[] = dataArray ? JSON.parse(dataArray) : [];

const initialState: DataState = {
  dataList: parsedData,
};

const dataSlice = createSlice({
  name: "data1",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<IData>) => {
      state.dataList.push(action.payload);
      localStorage.setItem('table_data', JSON.stringify(state.dataList));
    },
    // search için data dizisini değiştirme
    changeData: (state, action: PayloadAction<IData[]>) => {
      state.dataList = action.payload;
    },
  },
});

export const { addData, changeData } = dataSlice.actions;
export default dataSlice.reducer;
