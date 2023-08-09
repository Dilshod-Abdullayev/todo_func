import React, { useState } from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;

const SearchPanel = () => {
    const [data, setData] = useState();
    const onSearch = (value) => {
        setData(value);
    };
    console.log(data);
    return (
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
};

export default SearchPanel;