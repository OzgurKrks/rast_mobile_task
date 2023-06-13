import React from "react";
import DataTable from "../Table/DataTable";
import SearchBox from "../SearchBox/SearchBox";
import DataModal from "../Modal/DataModal";
import style from "../Content/Content.module.css";
const Content: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrap}>
        <div className={style.head}>
          <SearchBox />
          <DataModal />
        </div>
        <div>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Content;
