// import Loader from '../Loader/Loader';
import { Route, Routes } from 'react-router-dom';
// import css from './App.module.css';
import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import AddPage from 'pages/AddPage/AddPage';
import Layout from 'components/Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Layout>
  );
};
