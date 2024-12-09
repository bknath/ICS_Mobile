import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
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
import AboutusPage from './pages/AboutusPage'
import CareerPage from './pages/CareerPage'
import Bloglandingpage from './pages/BlogsPage/Bloglandingpage'
import Csrpolicy from './pages/footerlinkpage/Csrpolicy'
import Privacy from './pages/footerlinkpage/Privacy'
import TermsCondition from './pages/footerlinkpage/TermsCondition'
import Demomodule from './pages/Demopage/Demomodule'
import Blogsinglepage from './pages/BlogsPage/Blogsinglepage'
import FbSignup from './pages/Fbsignuppage/FbSignup'
import FacebookLoginIntegration from './pages/Fbsignuppage/FacebookLoginIntegration'
const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/chatbot' element={<ChatBotpage />} />
                <Route path='/customer' element={<CustomerengagementPage />} />
                <Route path='/whatsapp' element={<ApiwhatsappPage />} />
                <Route path='/contact-us' element={<Contactuspage />} />
                <Route path='/fb-signup' element={<FbSignup/>}/>
                <Route path='/fb-signupnew' element={<FacebookLoginIntegration/>}/>
                <Route path='/smsgateway' element={<SMSgatewaypage />} />
                <Route path='/rcspage' element={<Rcstestpage />} />
                <Route path='/about-us' element={<AboutusPage />} />
                <Route path='/career' element={<CareerPage />} />
                <Route path='/demomodule' element={<Demomodule />} />
                <Route path='/services' element={<Demomodule/>}/>
            </Routes>
            <Routes>
                <Route path='/' element={<Hero />} />
            </Routes>
            <Routes>
                <Route path='/' element={<Product2 />} />
            </Routes>
            <Routes>
                <Route path='/' element={<Platform />} />
            </Routes>
            <Routes>
                <Route path='/' element={<Writings />} />
            </Routes>
            <Routes>
                <Route path='/' element={<Faqsection />} />
            </Routes>
            <Routes>
                <Route path='/' element={<Formsection />} />
            </Routes>
            <Routes>
                <Route path='/csrpolicy' element={<Csrpolicy />} />
                <Route path='/privacypolicy' element={<Privacy />} />
                <Route path='/termscondition' element={<TermsCondition />} />
            </Routes>

            <Routes>
                <Route path='/blog' element={<Bloglandingpage />} />
                <Route path='/blog/:id' element={<Blogsinglepage />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
