import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import AddPage from 'pages/AddPage/AddPage';
import Layout from 'components/Layout/Layout';
import Page404 from 'pages/Page404/Page404';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/contacts/404" element={<Page404 />} />
      </Routes>
    </Layout>
  );
};
