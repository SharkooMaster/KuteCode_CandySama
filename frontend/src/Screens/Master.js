import React, {useEffect} from 'react'
import axios from 'axios';
import Logo from "../GFX/Logo.png";
import LogoLight from "../GFX/LogoLight.png";
import { Link } from 'react-router-dom';

export default function Master(props) {
	return (
		<div>
			<div className='absolute flex flex-row w-full h-[60px] items-center justify-between px-12'>
				<Link to="/">{
					(props.light) ?
						<img src={LogoLight} className="w-[35px] h-[40px] " />
					:
						<img src={Logo} className="w-[35px] h-[40px] " />
				}</Link>
				<div className='flex flex-row h-[40] items-center gap-4'>
					<Link to="/Deck">		<p className={[(props.light) ? "text-white" : "" + ' text-[18px]']}>I love</p> 	</Link>
					<Link to="/pre-order">	<p className={[(props.light) ? "text-white" : "" + ' text-[18px]']}>you</p></Link>
					<Link to="/urmom">		<p className={[(props.light) ? "text-white" : "" + ' text-[18px]']}>muffin</p>	</Link>
				</div>
			</div>

			{props.children}
		</div>
	)
}
