import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../components/Main';
import Users from '../Page/Users';
import CreatePage from '../Page/CreatePage';
import Layout from '../Layout/Layout';
import SearchPanel from '../Page/SearchPanel';

export default function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/users" element={<Users />} />
          <Route path="/createpage" element={<CreatePage />} />
          <Route path="/search" element={<SearchPanel />} />
        </Route>
      </Routes>
    </div>
  );
}
