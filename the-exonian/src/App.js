import './index.css';
import logo from './img/exonian-logo.png';

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
		<div className="grid gap-3 grid-cols-12 h-fit min-h-[600px] max-w-[1200px] w-11/12">
			<div className="bg-teal-500 col-start-1 col-end-4"></div>
			<div className="bg-slate-400 col-start-4 col-end-10 row-start-1 row-end-3"></div>
			<div className="bg-rose-500 col-start-1 col-end-4"></div>
			<div className="bg-teal-500 col-start-10 col-end-13 row-start-1"></div>
			<div className="bg-rose-500 col-start-10 col-end-13"></div>
		</div>
	);
}


function App() {
	return (
		<div className="w-screen h-screen">
			<Nav></Nav>
			<div className="flex justify-center">
				<Grid>
				</Grid>
			</div>
		</div>
	);
}

export default App;
