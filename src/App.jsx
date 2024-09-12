import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Hero from './pages/Home/Hero/Hero'
import Product from './pages/Home/Product/Product'
import Platform from './pages/Home/Platform/Platform'
import Writings from './pages/Home/Latestwritings/Writings'
import Footer from './components/Footer/Footer'
import Faqsection from './components/Faqsection/Faqsection'
import ChatBotpage from './pages/Chatbotpage'
import Formsection from './components/Formsection/Formsection'
import CustomerengagementPage from './pages/CustomerengagementPage'
import ApiwhatsappPage from './pages/ApiwhatsappPage'
import Contactuspage from './pages/Contactuspage'
import SMSgatewaypage from './pages/SMSgatewaypage'
import Rcstestpage from './pages/Rcstestpage'
import Product2 from './pages/Home/Product/Product2'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/chatbot' element={<ChatBotpage/>}/>
        <Route path='/customer' element={<CustomerengagementPage/>}/>
        <Route path='/whatsapp' element={<ApiwhatsappPage/>}/>
        <Route path='/contact-us' element={<Contactuspage/>}/>
        <Route path='/smsgateway' element={<SMSgatewaypage/>}/>
        <Route path='/rcspage' element={<Rcstestpage/>}/>
      </Routes>
      {/* <Routes>
        <Route path='/' element={<Product />} />
      </Routes> */}
      <Routes>
        <Route path='/' element={<Product2/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Platform/>}/>
      </Routes> 
      <Routes>
        <Route path='/' element={<Writings/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Faqsection/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Formsection/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
