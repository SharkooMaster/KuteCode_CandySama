import React, {useEffect} from 'react'
import axios from 'axios';

// Animations
import { StyleSheet, css } from 'aphrodite';
import { fadeInUp } from "react-animations"

// Images
import Characters_home from "../GFX/Characters_home.png";
import Cards_home from "../GFX/Cards_home.png";

// Components
import Master from './Master';

export default function Home(props) {

	const styles = StyleSheet.create({
		fadeInUp: {
		  animationName: fadeInUp,
		  animationDuration: '1.5s'
		}
	})
	return (
		<Master>
			<div className='w-full pt-[70px] items-center justify-center flex overflow-hidden'>
				<img src={Characters_home} className={[]} /> {/* css(styles.fadeInUp) */}

				<div className={['w-full absolute h-[45%] bg-gradient-to-t bottom-0 to-[#37336142] from-[#09080F] rounded-t-[40px] items-center justify-center flex']}>
					<img src={Cards_home} className={["absolute mt-[-280px] z-0"]} />
					<h1 className='text-white text-[126px] z-10 drop-shadow-md mt-[140px]'>Candy-Sama</h1>
				</div>
			</div>
		</Master>
	)
}
