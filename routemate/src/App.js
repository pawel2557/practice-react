import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Admin } from './components/Admin';
import { PageNotFound } from './components/PageNotFound';
import { ContactEu } from './components/ContactEu';
import { ContactIn } from './components/ContactIn';
import { ContactUs } from './components/ContactUs';
import './App.css';

function App() {
  const user = true;
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<ProductList />}></Route>
          <Route path="products/:id" element={<ProductDetail />}></Route>
          <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />}/>
            <Route path="eu" element={<ContactEu />}/>
            <Route path="us" element={<ContactUs />}/>
          </Route>
          <Route path="admin" element={ user ? <Admin/> : <Navigate to="/" />}></Route>
          <Route path="*" element={<PageNotFound title="404"></PageNotFound>}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;