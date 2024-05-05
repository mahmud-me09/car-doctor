import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
	const sliderStyle = "absolute flex  left-5 justify-end gap-4 right-5 bottom-5 ";
	const imgStyle = "w-full relative";
	const overlayText = (h1Text, pText) => (
		<>
			<div className="absolute hero-overlay  bg-gradient-to-r from-black opacity-80"></div>
			<div className="z-10 absolute left-40 text-left text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold leading-normal ">
						{h1Text}
					</h1>
					<p className="mb-5">{pText}</p>
					<button className="btn btn-error mr-6 text-white">
						Discover More
					</button>
					<button className="btn btn-outline border-white text-white">
						Latest Project
					</button>
				</div>
			</div>
		</>
	);
	return (
		<div className="carousel w-full">
			<div id="slide1" className="carousel-item hero  relative w-full">
				<img src={img1} className={imgStyle} />
				{overlayText(
					"Affordable Price for Car Servicing",
					"There are may variation of services are available. You can choose from the available services as per your need."
				)}
				<div className={sliderStyle}>
					<a href="#slide4" className="btn btn-error btn-circle">
						❮
					</a>
					<a href="#slide2" className="btn btn-error btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item hero relative w-full">
				<img src={img2} className={imgStyle} />
				{overlayText(
					"Affordable Price for Car Servicing",
					"There are may variation of services are available. You can choose from the available services as per your need."
				)}
				<div className={sliderStyle}>
					<a href="#slide1" className="btn btn-error btn-circle">
						❮
					</a>
					<a href="#slide3" className="btn btn-error btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item hero relative w-full">
				<img src={img3} className={imgStyle} />
				{overlayText(
					"Affordable Price for Car Servicing",
					"There are may variation of services are available. You can choose from the available services as per your need."
				)}
				<div className={sliderStyle}>
					<a href="#slide2" className="btn btn-error btn-circle">
						❮
					</a>
					<a href="#slide4" className="btn btn-error btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item hero relative w-full">
				<img src={img4} className={imgStyle} />
				{overlayText(
					"Affordable Price for Car Servicing",
					"There are may variation of services are available. You can choose from the available services as per your need."
				)}
				<div className={sliderStyle}>
					<a href="#slide3" className="btn btn-error btn-circle">
						❮
					</a>
					<a href="#slide5" className="btn btn-error btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide5" className="carousel-item hero relative w-full">
				<img src={img5} className={imgStyle} />
				{overlayText(
					"Affordable Price for Car Servicing",
					"There are may variation of services are available. You can choose from the available services as per your need."
				)}
				<div className={sliderStyle}>
					<a href="#slide4" className="btn btn-error btn-circle">
						❮
					</a>
					<a href="#slide6" className="btn btn-error btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide6" className="carousel-item hero relative w-full">
				<img src={img6} className={imgStyle} />
				{overlayText(
					"Affordable Price for Car Servicing",
					"There are may variation of services are available. You can choose from the available services as per your need."
				)}
				<div className={sliderStyle}>
					<a href="#slide5" className="btn btn-error btn-circle">
						❮
					</a>
					<a href="#slide1" className="btn btn-error btn-circle">
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;
