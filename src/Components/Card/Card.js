import React, { useState } from "react";
import "./Card.scss";
const Card = ({ elem }) => {
	const [saved, SetSaved] = useState(false);
	return (
		<div className='card'>
			<div className='cardImg'>
				<img src='./assets/card.svg' alt='' />

				<div onClick={() => SetSaved(!saved)} className='save'>
					{saved ? (
						<>
							<img src='./assets/redHeart.svg' alt='' />
							<p>Saved</p>
						</>
					) : (
						<>
							<img src='./assets/heart.svg' alt='' />
							<p>Save</p>
						</>
					)}
				</div>
			</div>
			<div className='images hideScrollBar'>
				{elem.images.map((image, index) => {
					return <img src={image} alt='' key={index} />;
				})}
			</div>
			<div onClick={() => SetSaved(!saved)} className='save hide'>
				{saved ? (
					<>
						<img src='./assets/redHeart.svg' alt='' />
					</>
				) : (
					<>
						<img src='./assets/heart.svg' alt='' />
					</>
				)}
			</div>

			<div className='cardContent'>
				<h1>{elem.title}</h1>
				<div className='cardContent-location'>
					<img src='./assets/locationIcon.svg' alt='' />
					<p>Alibaug, Maharashtra </p>
				</div>
				<div className='flex'>
					<span>Entire Villa</span>
					<img src='./assets/line.svg' alt='' />
					<span>3 Bedroom</span>
					<img src='./assets/line.svg' alt='' />

					<span>6 Guests</span>
				</div>
				<div className='flex'>
					<p>Pet-friendly</p>
					<p>Pet-friendly</p>
				</div>
				<div className='flex'>
					<h2>4.5</h2>
					<div className='flex flex-star'>
						<img src='./assets/star.svg' alt='' />
						<img src='./assets/star.svg' alt='' />
						<img src='./assets/star.svg' alt='' />
						<img src='./assets/star.svg' alt='' />
						<img src='./assets/starGrey.svg' alt='' />
					</div>
					<img src='./assets/line.svg' alt='' />
					<h5>{elem.reviews}</h5>
				</div>
			</div>
			<hr />
			{/* <img src='./assets/horizontalLine.svg' alt='' /> */}
			<div className='cardBottom'>
				<div className='cardBottomPrice'>
					<h2>
						₹{elem.price} <span> per night</span>
					</h2>
					<h3>₹40,499 </h3>
				</div>
				<button>View Details</button>
			</div>
		</div>
	);
};

export default Card;
