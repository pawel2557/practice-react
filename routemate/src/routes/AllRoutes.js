import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, ProductList, ProductDetail, Admin, Contact, ContactEu, ContactIn, ContactUs, PageNotFound } from '../pages/';
export const AllRoutes = ({user}) => {
  return (
    <>
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
    </>
  )
}
