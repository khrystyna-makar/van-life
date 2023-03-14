import React from 'react';
import ReactDOM from 'react-dom/client'
import { Route, 
        RouterProvider, 
        createBrowserRouter, 
        createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import './index.css'
import "./server.js"
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanInfo from './pages/Host/HostVanInfo';
import NotFound from './components/NotFound';
import Error from './components/Error';
import Login from './pages/Login'
import AuthRequired from './pages/AuthRequired';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path="vans/:id" element={<VanDetail />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} />
    <Route element={<AuthRequired />}>
      <Route path="host" element={<HostLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetail/>}>
          <Route index element={<HostVanInfo/>} />
          <Route path='pricing' element={<HostVanPricing />} />
          <Route path='photos' element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);