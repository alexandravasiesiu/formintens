import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/formintens-logo.png';
import { useState } from 'react';
import background from '../assets/flex-ui-assets/elements/pattern-white.svg';

export function ProjectNavigation() {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	return (<>
		<section 
		class="relative" 
		style={{
			backgroundImage: `url(${background})`, 
			backgroundPosition: "center"}}>
           <div class="container mx-auto">
                <nav class="container mx-auto inline-flex p-4">
			        <div class="flex w-full items-center container">
                        <div class="xl:w-1/3 w-full">
                            <Link class="block max-w-max" to='/'>
                                <img class="md:h-20" src={logo} alt="" />
							</Link>
                        </div>
                        <div class="w-1/2 xl:w-1/3">
                            <ul class="hidden xl:flex xl:justify-center gap-5">
							    <li><Link class="text-coolGray-500 font-medium hover:text-yellow-500 w-28 flex" to='/projectslanding'>Prima pagină</Link></li>
							    <li><Link class="text-coolGray-500 font-medium hover:text-yellow-500" to='/projectsacquisitions'>Achiziții</Link></li>
                                <li><Link class="text-coolGray-500 font-medium hover:text-yellow-500" to='/projectsbusiness'>Afaceri</Link></li>
                                <li><Link class="text-coolGray-500 font-medium hover:text-yellow-500" to='/projectsabout'>Despre</Link></li>
                                <li><Link class="text-coolGray-500 font-medium hover:text-yellow-500" to='/projectsevaluation'>Evaluare</Link></li>
                                <li><Link class="text-coolGray-500 font-medium hover:text-yellow-500" to='/projectsprogress'>Progres</Link></li> 
                                <li><Link class="text-coolGray-500 font-medium hover:text-yellow-500" to='/projectsdocuments'>Documente</Link></li>
								<li><Link class="text-coolGray-500 font-medium hover:text-yellow-500" to='/projectsmedia'>Media</Link></li>
                                <li><Link class="text-coolGray-500 font-medium hover:text-yellow-500" to='/projectscontact'>Contact</Link></li>
                            </ul>
			            </div>
                    </div>
                    <button class="navbar-burger self-center xl:hidden">
                        <a  className='navbar-burger inline-flex w-14 h-14 justify-center items-center bg-gray-50 hover:bg-gray-100 rounded-full'
							href='#'
							onClick={()=>setMenuOpen(true)}>
                            <svg width="35" height="35" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							    <rect class="text-white" width="32" height="32" rx="6" fill="#F59E0B"></rect>
							    <path class="text-coolGray-900" d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z" fill="currentColor"></path>
						    </svg>
                        </a>
					</button>
                </nav>
		        <div class={`${menuOpen?'':'hidden'} navbar-menu fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50`}>
                    <div class="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
                        <nav class="relative p-6 h-full overflow-y-auto">
							<div class="flex flex-col justify-between h-full">
                                <div class="flex justify-between">
                                    <Link class="inline-block" to='/'>
                                        <img class="h-20" src={logo} alt="" />
								    </Link>
                                    <a className='inline-block ml-4 mb-7 flex items-center' onClick={()=>setMenuOpen(false)}>
							            <svg 
							            xmlns="http://www.w3.org/2000/svg" 
							            fill="none" 
							            viewBox="0 0 24 24" 
							            stroke-width="1.5" 
							            stroke="currentColor" 
							            class="w-6 h-6">
            
                                        <path 
							            stroke-linecap="round" 
							            stroke-linejoin="round" 
							            d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </a>
                                </div>
                                <ul class="py-6">
								    <li><Link class="block py-3 px-4 text-coolGray-500 hover:text-yellow-500 font-medium hover:bg-coolGray-50 rounded-md" to='/projectslanding'>Prima pagină</Link></li>
                                    <li><Link class="block py-3 px-4 text-coolGray-500 hover:text-yellow-500 font-medium hover:bg-coolGray-50 rounded-md" to='/projectsacquisitions'>Achiziții</Link></li>
                                    <li><Link class="block py-3 px-4 text-coolGray-500 hover:text-yellow-500 font-medium hover:bg-coolGray-50 rounded-md" to='/projectsbusiness'>Afaceri</Link></li>
                                    <li><Link class="block py-3 px-4 text-coolGray-500 hover:text-yellow-500 font-medium hover:bg-coolGray-50 rounded-md" to='/projectsabout'>Despre</Link></li>
                                    <li><Link class="block py-3 px-4 text-coolGray-500 hover:text-yellow-500 font-medium hover:bg-coolGray-50 rounded-md" to='/projectsevaluation'>Evaluare</Link></li>
                                    <li><Link class="block py-3 px-4 text-coolGray-500 hover:text-yellow-500 font-medium hover:bg-coolGray-50 rounded-md" to='/projectsprogress'>Progres</Link></li>
                                    <li><Link class="block py-3 px-4 text-coolGray-500 hover:text-yellow-500 font-medium hover:bg-coolGray-50 rounded-md" to='/projectsdocuments'>Documente</Link></li>
									<li><Link class="block py-3 px-4 text-coolGray-500 hover:text-yellow-500 font-medium hover:bg-coolGray-50 rounded-md" to='/projectsmedia'>Media</Link></li>
                                    <li><Link class="block py-3 px-4 text-coolGray-500 hover:text-yellow-500 font-medium hover:bg-coolGray-50 rounded-md" to='/projectscontact'>Contact</Link></li>
                                </ul> 
                                <div className='w-full'>
							        <p className='text-md text-coolGray-400 font-medium px-4'>2023 © Formintens Centru</p>
						        </div>
			                </div>
                        </nav>
                    </div>
                </div> 
           </div>
        </section>
		<h2 className='mb-6 text-3xl leading-tight font-bold tracking-tight lg:text-5xl md:text-4xl text-center md:px-52 md:py-10 p-5'>
			Creșterea ocupării, precum și îmbunătățirea nivelului de competențe al
			tinerilor NEETs
		</h2>
	</>
	);
}