import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

function ShopsList() {
	const shopData = useSelector((state) => state.shopList);

	return (
		<div className='mt-8 pb-8 mx-auto max-w-5xl grid justify-stretch items-center gap-2 md:grid-cols-2'>
			{ shopData
				.map(shop => <Card 
								key={shop.id}
								id={shop.id}
								name={shop.name} 
								area={shop.area} 
								category={shop.category} 
								openingDate={shop.openingDate} 
								closingDate={shop.closingDate}
							/>) 
			}
		</div>
	)
}

export default ShopsList