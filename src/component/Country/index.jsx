import React, { useState } from "react";
import { Table } from "antd";
import { Wrapper } from "./styles";

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Code", dataIndex: "code", key: "code" },
  { title: "Typename", dataIndex: "__typename", key: "__typename" },
];

const CountryTable = (props) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const handleExpend = (expanded, record) => {
    if (expanded) {
      setExpandedRowKeys(record.countries);
    }
  };
  const expandedRowRender = () => {
    const columns = [
      { title: "Code", dataIndex: "code", key: "code" },
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Currency", dataIndex: "currency", key: "currency" },
      { title: "Native", dataIndex: "native", key: "native" },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
        render: (record) => `+${record}`,
      },
      { title: "Emoji", dataIndex: "emoji", key: "emoji" },
      { title: "EmojiU", dataIndex: "emojiU", key: "emojiU" },
    ];

    return <Table columns={columns} dataSource={expandedRowKeys} bordered />;
  };
  return (
    <Wrapper>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        dataSource={props.data}
        expandable={{ expandedRowRender }}
        onExpand={(expanded, record) => handleExpend(expanded, record)}
        rowKey={(record) => record.code}
      />
    </Wrapper>
  );
};
export default CountryTable;
