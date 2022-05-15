import React from 'react';

import { Footer, Blog, Features, WhatHayesNutrition, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
	return (
	  <div className="App">
		<div className="gradient_bg">
			<Navbar />
			<Header />
		</div>
		<Brand />
		<WhatHayesNutrition />
		<Features />
		<CTA />
		<Blog />
		<Footer />
	  </div>
	)
	}

export default App
