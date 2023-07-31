import React, { useState } from 'react';
import '../styles/style.css';
import { Input, Space, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { dataAction } from '../redux/action/dataAction';
import Users from './Users';
const { Search } = Input;
const info = () => {
    message.info('Xabar muafaqqiyatli qoshildi');
};

export default function CreatePage() {
    const arr = useSelector((state) => state.dataReducer)
    const dispatch = useDispatch();
    function AddElement(val) {
        if (val === '') {
            console.log('hh');
        } else {
            dispatch(dataAction(val)); // Dispatch the action with the input value as the payload
            info();
        }
    }

    const onSearch = (value) => AddElement(value);
    return (
        <div className='create__page'>
            <Space direction='vertical'>
                <Search
                    placeholder='Ismni yozing'
                    allowClear
                    enterButton='Qo`shish'
                    size='large'
                    onSearch={onSearch}
                />
                ``
            </Space>
            <Users/>
        </div>
    );
}
