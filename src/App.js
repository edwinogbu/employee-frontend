import React, { useState, useEffect } from 'react'; // Added useEffect
import axios from 'axios';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import ViewUser from './user/ViewUser'; // Corrected typo
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetail ';
import Dashboard from './Dashboard ';
import AddFee from './fees/AddFee';
import EditFee from './fees/ViewFee';

function App({posts}) {

  
  // Define posts data using useState
  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: 'The Crucifixion of Jesus Christ: A Profound Symbol of Sacrifice and Redemption',
  //     content: ``,
  //     imageUrl: 'https://mdbootstrap.com/img/new/standard/nature/184.jpg',
  //     category:"religion",
  //   },
  //   {
  //     id: 2,
  //     title: 'Post 2',
  //     content: 'This is the content of Post 2.',
  //     imageUrl: 'https://mdbootstrap.com/img/new/standard/nature/023.jpg',
  //     category:"religion",
  //   },
  //   {
  //     id: 3,
  //     title: 'Post 3',
  //     content: 'This is the content of Post 3.',
  //     imageUrl: 'https://mdbootstrap.com/img/new/standard/nature/111.jpg',
  //     category:"sport",
  //   },
  //   {
  //     id: 4,
  //     title: 'The Crucifixion of Jesus Christ: A Profound Symbol of Sacrifice and Redemption',
  //     content: ``,
  //     imageUrl: 'https://mdbootstrap.com/img/new/standard/nature/184.jpg',
  //     category:"life style",
  //   },
  //   {
  //     id: 5,
  //     title: 'Post 5',
  //     content: 'This is the content of Post 2.',
  //     imageUrl: 'https://mdbootstrap.com/img/new/standard/nature/023.jpg',
  //     category:"politice",
  //   },
  //   {
  //     id: 6,
  //     title: 'Post 6',
  //     content: 'This is the content of Post 3.',
  //     imageUrl: 'https://mdbootstrap.com/img/new/standard/nature/111.jpg',
  //     category:"education",
  //   },
  // ]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

        <Route exact path='/home' element={<Home />} />
        <Route exact path='/dashboard' element={<Dashboard />} />

          <Route exact path='/adduser' element={<AddUser />} />
          <Route exact path='/edituser/:id' element={<EditUser />} />
          <Route exact path='/viewuser/:id' element={<ViewUser />} />
          <Route path="/blog" element={<Blog posts={posts} />} />


          <Route exact path='/addfee' element={<AddFee />} />
          <Route exact path='/editfee/:id' element={<EditFee />} />
          <Route exact path='/viewuser/:id' element={<ViewFee />} />


          <Route path="/blogDetail/:id" element={<PostDetail posts={posts} />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;


