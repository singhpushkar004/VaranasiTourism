import { useState } from 'react'
import {BrowserRouter as Router, Routes ,Route } from 'react-router';

import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import Services from './pages/Services';
import Package from './pages/Package';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Addash from './pages/admin/Addash';
import UserManagement from './pages/admin/UserMgmt';
import TouristPlaceManagement from './pages/admin/TouristPlaceManagement';
import HotelRestaurantManagement from './pages/admin/HotelRestaurantManagement';
import BookingManagement from './pages/admin/BookingManagement';
import MediaGalleryManagement from './pages/admin/MediaGalleryManagement';
import FeedbackAndComplaintsManagement from './pages/admin/Feed&CMgmt';
import UserDash from './pages/user/UserDash';
import ExplorePlaces from './pages/user/ExplorePlaces';
import HotelListings from './pages/user/HotelListings ';
import MyBookings from './pages/user/MyBookings';
import UserMediaGallery from './pages/user/UserMediaGallery';
import UserFeedbackComplaints from './pages/user/UserFeedbackComplaints ';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Services/>}></Route>
          <Route path='/package' element={<Package/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          {/* Admin Route */}
          <Route path='/admin/dashboard' element={<Addash/>}>
            <Route path='usermgmt' element={<UserManagement/>}></Route>
            <Route path='toutrismgmt' element={<TouristPlaceManagement/>}></Route>
            <Route path='hotelmgmt' element={<HotelRestaurantManagement/>}></Route>
            <Route path='bookingmgmt' element={<BookingManagement/>}></Route>
            <Route path='gallerymgmt' element={<MediaGalleryManagement/>}></Route>
            <Route path='feed&comp' element={<FeedbackAndComplaintsManagement/>}></Route>
            <Route path='logout' element={<MediaGalleryManagement/>}></Route>
          </Route>

          {/* User Route */}
          <Route path='/user/dashboard' element={<UserDash/>}>
            <Route path='exploreplace' element={<ExplorePlaces/>}></Route>
            <Route path='hotellist' element={<HotelListings/>}></Route>
            <Route path='myboking' element={<MyBookings/>}></Route>
            <Route path='usergallery' element={<UserMediaGallery/>}></Route>
            <Route path='feed' element={<UserFeedbackComplaints/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
