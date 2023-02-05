import React, {useEffect} from 'react'
import axios from 'axios';
import Logo from "../GFX/Logo.png";
import { Link } from 'react-router-dom';

export default function Master(props) {
	return (
		<div>
			<div className='absolute flex flex-row w-full h-[60px] items-center justify-between px-12'>
				<img src={Logo} className="w-[35px] h-[40px] " />
				<div className='flex flex-row h-[40] items-center gap-4'>
					<Link to="/Deck"><p className='text-[18px]'>Deck</p></Link>
					<Link to="/pre-order"><p className='text-[18px]'>Preorder</p></Link>
					<Link to="/urmom"><p className='text-[18px]'>ur mom</p></Link>
				</div>
			</div>

			{props.children}
		</div>
	)
}
