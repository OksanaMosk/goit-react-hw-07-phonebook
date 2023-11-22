// import Loader from '../Loader/Loader';
import { Route, Routes } from 'react-router-dom';
// import css from './App.module.css';
import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import AddPage from 'pages/AddPage/AddPage';
import Layout from 'components/Layout/Layout';
// import { lazy } from 'react';

// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const AddPage = lazy(() => import('pages/AddPage/AddPage'));
// const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

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
