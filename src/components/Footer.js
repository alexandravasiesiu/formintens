import logo from '../assets/images/logo-jam.png';
import { useNavigate } from 'react-router-dom';

export function Footer(){
	const navigate = useNavigate();
	
	return (
		
		<section class="py-24 bg-gray-900"><div class="container px-4 mx-auto">
		<div class="flex flex-wrap justify-between -mx-4 px-4">
		  <div class="w-full lg:w-1/4 xl:w-2/6 px-4 lg:mb-0">
		    <a class="inline-block mb-4" href="#" onClick={() => { navigate('/') }}>
		      <img src={logo} alt="" class="h-20"/></a>
		  </div>
		  <div class="w-full sm:w-1/2 lg:w-1/4 xl:w-auto xl:mr-20 px-4 lg:mb-0">
		    <ul class="flex gap-5"><li class="mb-6"><a class="font-heading text-white hover:text-gray-100" href="#">Acasă</a></li>
		      <li class="mb-6"><a class="font-heading text-white hover:text-gray-100" href="#about">Despre</a></li>
		      <li class="mb-6"><a class="font-heading text-white hover:text-gray-100" href="#experience">Experiență</a></li>
		      <li><a class="font-heading text-white hover:text-gray-100" href="#projects">Proiecte</a></li>
		    </ul><span class="block text-gray-300 mb-6">2023 © Jam Business</span>
		  </div>
		</div>
		</div>
	      </section>
	)
}