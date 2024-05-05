import logo from "../assets/logo.svg"

const Footer = () => {
    return (
		<footer className="footer lg:max-w-[1320px] mx-auto">
			<aside>
				<img src={logo} alt="logo" />
				<p>Car Doctor is a reliable place for your repair of cars.</p>
			</aside>
			<nav>
				<h6 className="footer-title">About</h6>
				<a className="link link-hover">Home</a>
				<a className="link link-hover">Services</a>
				<a className="link link-hover">Contact</a>
			</nav>
			<nav>
				<h6 className="footer-title">Company</h6>
				<a className="link link-hover">Why Car Doctor</a>
				<a className="link link-hover">About</a>
			</nav>
			<nav>
				<h6 className="footer-title">Support</h6>
				<a className="link link-hover">Support Center</a>
				<a className="link link-hover">Feedback</a>
				<a className="link link-hover">Accessibility</a>
			</nav>
		</footer>
	);
};

export default Footer;