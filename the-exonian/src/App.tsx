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
				<a href="https://www.google.com" className="mx-5">About</a>
				<a href="https://www.google.com" className="mx-5">News</a>
				<a href="https://www.google.com" className="mx-5">Life</a>
				<a href="https://www.google.com" className="mx-5">Opinions</a>
				<a href="https://www.google.com" className="mx-5">Sports</a>
				<a href="https://www.google.com" className="mx-5">Humor</a>
				<a href="https://www.google.com" className="mx-5">Archives</a>
				<a href="https://www.google.com" className="mx-5">Opinions</a>
		</div>
	);
}

function Grid() {
	return (
		<div className="grid gap-4 grid-cols-12 h-fit max-w-[1200px] w-11/12 py-2 relative">
			<div className="col-start-4 col-end-10 row-start-1 row-end-3">
				<img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt=""/>
				<ArticleLink title="When You Realize Talking is More Than Speaking" author="Byran Huang"></ArticleLink>
			</div>
			<div className="col-start-1 col-end-4">
				<ArticleLink title="When You Realize Talking is More Than Speaking" author="Byran Huang"></ArticleLink>
				<ArticleLink title="When You Realize Talking is More Than Speaking" author="Byran Huang"></ArticleLink>
			</div>
			<div className="col-start-10 col-end-13">
				<ArticleLink title="When You Realize Talking is More Than Speaking" author="Byran Huang"></ArticleLink>
				<ArticleLink title="When You Realize Talking is More Than Speaking" author="Byran Huang"></ArticleLink>
			</div>
		</div>
	);
}

function ArticleLink(input: any) {
	return (
		<div>
			<h1 className="text-4xl font-serif font-semibold">{input.title}</h1>
			<p>By: {input.author}</p>
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
