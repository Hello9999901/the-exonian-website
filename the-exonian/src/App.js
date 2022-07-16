import './index.css';
import logo from './img/exonian-logo.png';

function Nav() {
	return (
		<div>
			<div className="flex flex-row justify-center py-4">
				<img src={logo} alt="Logo" className="w-1/5" />
			</div>
			<hr className="border-gray-300"></hr>
			<div className="flex flex-row justify-center py-2 font-normal text-sm">
				<a href="https://www.google.com" className="mx-5">About</a>
				<a href="https://www.google.com" className="mx-5">News</a>
				<a href="https://www.google.com" className="mx-5">Life</a>
				<a href="https://www.google.com" className="mx-5">Opinions</a>
				<a href="https://www.google.com" className="mx-5">Sports</a>
				<a href="https://www.google.com" className="mx-5">Humor</a>
				<a href="https://www.google.com" className="mx-5">Archives</a>
				<a href="https://www.google.com" className="mx-5">Opinions</a>
			</div>
		</div>
	);
}

function App() {
	return (
		<div className="w-screen h-screen">
			<Nav></Nav>
		</div>
	);
}

export default App;
