import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IData } from "../Model/DataModel";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const DataTable: React.FC = () => {
  const { dataList } = useSelector((state: RootState) => state.data1);
  // Data typeları
  const columns: ColumnsType<IData> = [
    {
      title: "Sosyal Medya Linki",
      dataIndex: "link",
      key: "link",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Sosyal Medya Adı",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Açıklama",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
  ];
  const data: IData[] = dataList;
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          // pagination
          pageSizeOptions: ["5", "10", "20"],
        }}
      />
    </div>
  );
};

export default DataTable;
