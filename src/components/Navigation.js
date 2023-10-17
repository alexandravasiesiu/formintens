import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/formintens-logo.png';
import circle3Yellow from "../assets/flex-ui-assets/elements/circle3-yellow.svg";
import dots3Blue from '../assets/flex-ui-assets/elements/dots3-blue.svg';
import teacherImg from '../assets/images/young-confident-college-teacher-or-lecturer-explai-2022-08-10-22-37-48-utc.jpg';
import background from '../assets/flex-ui-assets/elements/pattern-white.svg';

export function Navigation() {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<section class="relative bg-white overflow-hidden"
			style={{
				backgroundImage: `url(${background})`,
				backgroundPosition: "center"
			}}
		>
			<div class="container mx-auto p-4">
				<nav class="container mx-auto inline-flex"><div class="flex w-full items-center container">
					<div class="xl:w-1/3 w-full">
						<Link class="block max-w-max" to='/'>
							<img class="h-20" src={logo} alt="" /></Link>
					</div>
				</div>
				</nav>
			</div>
			<div class="py-20">
				<div class="container px-4 mx-auto">
					<div class="flex flex-wrap xl:items-center -mx-4">
						<div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
							<h1 class="mb-6 text-3xl leading-tight font-bold tracking-tight lg:text-5xl md:text-4xl">Descoperă noi orizonturi profesionale cu Formintens!</h1>
							<p class="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Oferim cursuri de formare adaptate nevoilor tale, pentru a-ți dezvolta abilitățile și a-ți construi o carieră de succes. Contactează-ne acum și explorează potențialul tău la Formintens!</p>
							<div class="flex flex-wrap">
								<div class="w-full md:w-auto py-1 md:py-0">
									<a class="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border rounded-md shadow-sm border-yellow-600" href="#contact_section" contenteditable="false">Contact</a></div>
							</div>
						</div>
						<div class="w-full md:w-1/2 px-4">
							<div class="relative mx-auto md:mr-0 max-w-max">
								<img class="absolute z-10 -left-14 -top-12 w-28 md:w-auto" src={circle3Yellow} alt="" />
								<img class="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto" src={dots3Blue} alt="" />
								<img class="relative rounded-7xl" src={teacherImg} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}