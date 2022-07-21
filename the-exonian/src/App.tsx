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
		<div className="">
			<img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8" alt="" className="h-screen w-screen"/>
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
			</div>
		</div>
	);
}

export default App;
