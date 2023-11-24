import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Login from './pages/Login';
import {Layout} from 'antd';
import Logo from './components/Sidebar/Logo';
import MenuList from './components/Sidebar/MenuList';


const {Sider} =Layout;

const App = () => {
  return (
    <Layout>
    <Router>
      
      <Sider className='sidebar'>
        <Logo/>
        <MenuList/>
      </Sider>
     
      <Header />
      <div className='container mt-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>
    </Router>
    </Layout>
  )
}

export default App