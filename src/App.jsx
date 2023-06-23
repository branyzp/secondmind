import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import { DarkModeProvider } from './hooks/DarkModeContext';

function App() {
	return (
		<DarkModeProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</DarkModeProvider>
	);
}

export default App;
