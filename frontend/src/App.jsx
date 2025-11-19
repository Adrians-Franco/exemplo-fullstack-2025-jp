import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Users from './pages/Users'
import Home from './pages/Home'
import CreateUser from './pages/Users/create'
import UpdateUser from './pages/Users/update'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create/user' element={<CreateUser />} />
        <Route path='/update/user' element={<UpdateUser />} />
      </Routes>
      
      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: '50%' }}
      />

      <Footer />
    </>
  )
}

export default App
