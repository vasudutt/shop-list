import React, { useState, useRef } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

function Accordion({category, openingDate, closingDate}) {
	const [isOpened, setOpened] = useState(false)
  	const [height, setHeight] = useState("0px")
  	const contentElement = useRef(null)

	const handleOpening = () => {
		setOpened(!isOpened)
		setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
	}

	return (
		<div onClick={handleOpening}>
			<div className={"flex justify-between items-center cursor-pointer border-t pt-2 mt-2"}>
				<p>{category}</p>
				{isOpened ? <AiOutlineUp /> : <AiOutlineDown />}
			</div>
			<div
				ref={contentElement}
				style={{ height: height }}
				className="overflow-hidden transition-all duration-200"
			>
				<div className='py-2 flex items-center justify-between'>
					<p>{openingDate}</p>
					<p>{closingDate}</p>
				</div>
			</div>
		</div>
	)

	/* return (
		<div className='flex justify-between items-center cursor-pointer border-t pt-2 mt-2'>
			<p>Category</p>
			<AiOutlineDown />
		</div>
	); */
}

export default Accordion