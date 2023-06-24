import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import { DarkModeProvider } from './hooks/DarkModeContext';
import Resources from './pages/Resources';

function App() {
	return (
		<DarkModeProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/resources" element={<Resources />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</DarkModeProvider>
	);
}

export default App;
