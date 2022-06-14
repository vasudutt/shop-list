import React from 'react';
import { useDispatch } from 'react-redux';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Accordion from './Accordion';
import { deleteShop } from '../../features/shopList/shopListSlice';

function Card({ id, name, area, category, openingDate, closingDate }) {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteShop(id));
	}

  return (
	<div className='bg-white w-11/12 mx-auto p-4 rounded-lg shadow-md'>
		<div className='flex justify-between items-center'>
			<div>
				<h1 className='font-bold text-lg'>{name}</h1>
				<p>{area}</p>
			</div>

			<div className='flex flex-col items-end'>
				<div className='flex justify-between pb-2 text-lg w-12'>
					<FiEdit className='cursor-pointer'/>
					<FiTrash className='cursor-pointer' onClick={handleDelete}/>
				</div>
				{(new Date() < new Date(closingDate).getTime())
					?<p className='text-xs px-2 border border-green-500 text-center rounded-full text-green-500 '>OPEN</p>
					:<p className='text-xs px-2 border border-red-500 text-center rounded-full text-red-500 '>CLOSED</p>
				}
			</div>
		</div>

		{ /* Accordion */ }
		<Accordion category={category} openingDate={openingDate} closingDate={closingDate} />
	</div>
  )
}

export default Card