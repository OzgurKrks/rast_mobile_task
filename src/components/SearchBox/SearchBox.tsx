import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import style from "./SearchBox.module.css";
import search from "../../images/search.svg";
import filter from "../../images/filter.svg";
import { changeData } from "../../features/Slice";
import { IData } from "../Model/DataModel";
const SearchBox: React.FC = () => {
  const [inp, setInp] = useState<string | null>("");
  const dispatch = useDispatch();
  const { dataList } = useSelector((state: RootState) => state.data1);
  const dataArray = localStorage.getItem("table_data");
  const parsedData: IData[] = dataArray ? JSON.parse(dataArray) : [];
  useEffect(() => {
    // search filter işlemi
    if (inp != null) {
      dispatch(
        changeData(
          dataList.filter(
            (m) =>
              m.name.includes(inp) ||
              m.link.includes(inp) ||
              m.description.includes(inp)
          )
        )
      );
    }
    // search işlemi bitmiş ise datayı tekrar getir
    if (inp === null || inp === "") {
      dispatch(changeData(parsedData));
    }
  }, [inp, dispatch]);

  return (
    <div className={style.wrapper}>
      <div className={style.searchBox}>
        <input
          type='text'
          className={style.search}
          placeholder='Search objects...'
          // kullanıcı küçük veya büyük harf girebilir
          onChange={(e) => {
            setInp(e.target.value.toLowerCase().trim());
          }}
        />
        <span className={style.searchButton}>
          <img src={search} alt='search' />
        </span>
      </div>
      <span className={style.filterImage}>
        <img src={filter} alt='filter' />
      </span>
    </div>
  );
};

export default SearchBox;
