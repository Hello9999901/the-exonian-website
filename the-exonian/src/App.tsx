import './index.css';
import logo from './img/exonian-logo.png';
import React from 'react';

function Nav() {
	return (
		<div>
			<div className="flex flex-row justify-center py-4">
				<img src={logo} alt="Logo" className="w-1/5 min-w-[150px] max-w-[400px]" />
			</div>
			<hr className="border-gray-300"></hr>
			<Sublinks></Sublinks>
		</div>
	);
}

function Sublinks() {
	return (
		<div className="flex flex-row flex-wrap justify-center py-3 font-normal text-sm">
				<a href="https://www.google.com" className="mx-5 ul-hover">About</a>
				<a href="https://www.google.com" className="mx-5 ul-hover">News</a>
				<a href="https://www.google.com" className="mx-5 ul-hover">Life</a>
				<a href="https://www.google.com" className="mx-5 ul-hover">Opinions</a>
				<a href="https://www.google.com" className="mx-5 ul-hover">Sports</a>
				<a href="https://www.google.com" className="mx-5 ul-hover">Humor</a>
				<a href="https://www.google.com" className="mx-5 ul-hover">Archives</a>
				<a href="https://www.google.com" className="mx-5 ul-hover">Opinions</a>
		</div>
	);
}

function Grid() {
	return (
		<div className="grid gap-5 grid-cols-12 h-full max-w-[1270px] w-11/12 relative">
			<div className="col-start-4 col-end-10 row-start-1 row-end-3">
				<ArticleLink title="When You Realize Talking is More Than Speaking" author="Byran Huang" link="https://www.google.com" alt="People Talking" img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"></ArticleLink>
			</div>
			<div className="col-start-1 col-end-4 pr-4 border-r">
				<ArticleLink title="When You Realize Talking is More Than Speaking" author="Byran Huang" link="https://www.google.com"></ArticleLink>
				<ArticleLink title="When You Realize Talking is More Than Speaking" author="Byran Huang" link="https://www.google.com"></ArticleLink>
			</div>
			<div className="col-start-10 col-end-13 pl-4 border-l">
				<ArticleLink title="When You Realize Talking is More Than Speaking" author="Byran Huang" link="https://www.google.com"></ArticleLink>
				<ArticleLink title="When You Realize Talking is More Than Speaking" author="Byran Huang" link="https://www.google.com"></ArticleLink>
			</div>
		</div>
	);
}

function Hero() {
	return (
		<div className="py-5">
			<img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8" alt="" className="h-screen w-screen"/>
		</div>
	);
}

function Footer() {
	return (
		<div className="mt-16 h-64 w-screen bg-black absolute b-0 text-white items-center px-10 flex">
			<div className="flex flex-col">
				<h1 className="font-serif text-5xl py-2">Subscribe to our newsletter.</h1>
				<div>
					<input type="email" autoComplete="email" placeholder="E-Mail Address" className="text-gray-700 duration-300 ease-in-out" />
					<button className="border-2 border-white mx-5 p-1 hover:bg-white hover:text-black hover:scale-105 duration-300 ease-in-out">Sign Up</button>
				</div>
			</div>
			<div className="absolute w-auto h-max right-0 px-10 text-right font-serif">
				<h1 className="font-bold">Contact Us:</h1>
				<p>20 Main Street, Exeter, New Hampshire 03833</p>
				<div className="flex justify-end items-center py-2">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Instagram_font_awesome.svg" alt="" className="invert w-9 h-9 mx-1" />
					<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Facebook_icon_%28black%29.svg" alt="" className="invert w-8 h-8 mx-1" />
				</div>
			</div>
            <p className="absolute bottom-0 p-2 border-t">2022 © The Exonian. All Rights Reserved. New Website Preview - Development Purposes Only. Designed By Byran Huang '25, (Tailwind CSS + React JS Experimental Branch)</p>
		</div>
	);
}

function ArticleLink(input: any) {
	return (
		<div className="py-2">
			<img src={input.img} alt={input.alt}/>
			<a href={input.link} className="text-4xl font-serif font-semibold hover:text-neutral-600 ease-in-out duration-200">{input.title}</a>
			<p className="pb-5">By: {input.author}</p>
			<hr/>
		</div>
	);
}

function App() {
	return (
		<div className="w-screen h-screen">
			<Nav></Nav>
			<div className="flex flex-col items-center">
				<Grid></Grid>
				<Hero></Hero>
				<Grid></Grid>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default App;
