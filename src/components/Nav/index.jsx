import React from 'react';

function Nav({setShowForm}) {
  return (
	<nav className='sticky z-30 bg-white flex justify-between items-center w-11/12 max-w-4xl top-4 mx-auto py-3 px-4 rounded-xl backdrop-filter backdrop-blur bg-opacity-50 border border-gray-200'>
		<h1 className='text-xl font-bold'>ShopList</h1>
		<button onClick={() => {setShowForm(true)}} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Add Shop</button>
	</nav>
  )
}

export default Nav