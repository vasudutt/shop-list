import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addShop } from '../../features/shopList/shopListSlice';

function Form({setShowForm}) {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues:{
			name: '',
			area: '',
			category: '',
			openingDate: '',
			closingDate: ''
		},
		onSubmit: values => {
			setShowForm(false);
			dispatch(addShop(values));
		},
		validate: values => {
			let errors = {};

			if (!values.name) errors.name = 'Required';
			else if(! /^[a-zA-Z]+$/.test(values.name)) errors.name = 'Name can only contain Alphabets!';
			if (!values.area) errors.area = 'Required';
			if (!values.category) errors.category = 'Required';
			if (!values.openingDate) errors.openingDate = 'Required';
			if (!values.closingDate) {errors.closingDate = 'Required';}
			else if (new Date(values.closingDate).getTime() < new Date(values.openingDate).getTime()) errors.closingDate = 'Closing Date has to be after Opening Date!';

			return errors;
		}
	});

  return (
	<div className='absolute z-50 p-4 left-0 top-0 w-full h-full bg-gray-100 flex justify-center overflow-hidden'>
		<form className='flex flex-col w-1/2 mt-8' onSubmit={formik.handleSubmit} >
			<label className='py-2 font-semibold' htmlFor="name">Name :</label>
			<input 
				className='p-2 rounded-md shadow-md'
				type="text" 
				id='name' 
				onChange={formik.handleChange} 
				value={formik.values.name}
				onBlur={formik.handleBlur}
			/>
			{ formik.errors.name && formik.touched.name && <div className='text-sm font-semibold text-red-400 p-1'>{formik.errors.name}</div> }

			<label className='py-2 font-semibold' htmlFor="area">Area :</label>
			<input 
				className='p-2 rounded-md shadow-md'
				type="text" 
				list="areas" 
				id='area' 
				onChange={formik.handleChange} 
				value={formik.values.area} 
				onBlur={formik.handleBlur}
			/>
			{ formik.errors.area && formik.touched.area && <div className='text-sm font-semibold text-red-400 p-1'>{formik.errors.area}</div> }

			<datalist id="areas">
				<option value="Thane"/>
				<option value="Pune"/>
				<option value="Mumbai Suburban"/>
				<option value="Nashik"/>
				<option value="Nagpur"/>
				<option value="Ahmednagar"/>
				<option value="Solapur"/>
			</datalist>

			<label className='py-2 font-semibold' htmlFor="category">Category :</label>
			<input 
				className='p-2 rounded-md shadow-md'
				type="text" 
				list="categories" 
				id='category' 
				onChange={formik.handleChange} 
				value={formik.values.category} 
				onBlur={formik.handleBlur}
			/>
			{ formik.errors.category && formik.touched.category && <div className='text-sm font-semibold text-red-400 p-1'>{formik.errors.category}</div> }

			<datalist id="categories">
				<option>Grocery</option>
				<option>Butcher</option>
				<option>Baker</option>
				<option>Chemist</option>
				<option>Stationery Shop</option>
			</datalist>

			<label className='py-2 font-semibold' htmlFor="openingDate">Opening Date :</label>
 			<input 
				className='p-2 rounded-md shadow-md'
				type="date" 
				id="openingDate" 
				onChange={formik.handleChange} 
				value={formik.values.openingDate}
				onBlur={formik.handleBlur}
			/>
			{ formik.errors.openingDate && formik.touched.openingDate && <div className='text-sm font-semibold text-red-400 p-1'>{formik.errors.openingDate}</div> }

			<label className='py-2 font-semibold' htmlFor="closingDate">Closing Date :</label>
 			<input 
				className='p-2 rounded-md shadow-md'
				type="date" 
				id="closingDate" 
				onChange={formik.handleChange} 
				value={formik.values.closingDate}
				onBlur={formik.handleBlur}
			/>
			{ formik.errors.closingDate && formik.touched.closingDate && <div className='text-sm font-semibold text-red-400 p-1'>{formik.errors.closingDate}</div> }
			
			<div className='mt-6 flex justify-between items-center'>
				<div className='cursor-pointer border py-2 px-4 rounded-md font-semibold bg-red-300 border-red-400 hover:bg-red-400' onClick={()=>{setShowForm(false)}}>Cancel</div>
				<button className='cursor-pointer border py-2 px-8 rounded-md font-semibold bg-green-300 border-green-400 hover:bg-green-400' type='submit'>Add</button>
			</div>
		</form>
	</div>
  )
}

export default Form;