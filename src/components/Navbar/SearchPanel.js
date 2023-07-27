import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;
const onSearch = (value) => console.log(value);
const SearchPanel = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  </Space>
);
export default SearchPanel;
