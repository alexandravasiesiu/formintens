import ssTransparent from '../assets/images/ss-transparent.png';
import logo from '../assets/images/formintens-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import background from '../assets/flex-ui-assets/elements/pattern-white.svg';

export default function ProjectFooter() {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false)

	return (<>
		<div class="flex justify-center py-10">
			<img src={ssTransparent} alt="" class="md:w-1/3 w-1/2" /></div>

			<section 
			class="bg-white" 
			style={{
				backgroundImage: `url(${background})`,
				backgroundPosition: "center"}}>
				<div class="container px-4 mx-auto">
                    <div class="pb-5 mx-auto max-w-4xl pt-5 flex justify-center">
                            <Link class="block md:mx-auto mb-5 max-w-max" to='/'>
                                <img src="images/formintens-logo.png" alt="" class="h-20" />
								<path class="text-coolGray-900" d="M54.3157 6.71125V10.2982H46.8277V14.1731H52.4306V17.6552H46.8277V25.0909H42.3506V6.71125H54.3157Z" fill="currentColor"></path><path class="text-coolGray-900" d="M61.1459 5.71634V25.0909H56.6688V5.71634H61.1459Z" fill="currentColor"></path><path class="text-coolGray-900" d="M78.162 17.5505C78.162 17.9694 78.1358 18.4058 78.0835 18.8596H67.9511C68.0209 19.7672 68.3089 20.4654 68.8151 20.9542C69.3387 21.4254 69.9758 21.6611 70.7264 21.6611C71.8434 21.6611 72.6202 21.1898 73.0565 20.2472H77.8216C77.5773 21.2072 77.1322 22.0712 76.4864 22.8392C75.858 23.6072 75.0638 24.2094 74.1038 24.6458C73.1438 25.0822 72.0704 25.3003 70.8834 25.3003C69.4522 25.3003 68.178 24.9949 67.0609 24.384C65.9438 23.7731 65.0711 22.9003 64.4427 21.7658C63.8144 20.6312 63.5002 19.3047 63.5002 17.7862C63.5002 16.2676 63.8056 14.9411 64.4165 13.8065C65.0449 12.672 65.9176 11.7992 67.0347 11.1883C68.1518 10.5774 69.4347 10.272 70.8834 10.272C72.2973 10.272 73.554 10.5687 74.6536 11.1622C75.7533 11.7556 76.6085 12.6022 77.2195 13.7018C77.8478 14.8014 78.162 16.0843 78.162 17.5505ZM73.5802 16.3723C73.5802 15.6043 73.3184 14.9934 72.7947 14.5396C72.2711 14.0858 71.6165 13.8589 70.8311 13.8589C70.0805 13.8589 69.4434 14.0771 68.9198 14.5134C68.4136 14.9498 68.0994 15.5694 67.9773 16.3723H73.5802Z" fill="currentColor"></path><path class="text-coolGray-900" d="M89.1639 25.0909L86.3624 21.0327L84.0061 25.0909H79.1624L83.9799 17.6291L79.0315 10.4814H84.0584L86.8599 14.5134L89.2162 10.4814H94.0599L89.1639 17.8385L94.1908 25.0909H89.1639Z" fill="currentColor"></path><path d="M14.626 9.94598C19.0055 11.4917 23.7285 11.4058 28.0651 9.73131C28.108 7.97092 27.6357 6.21053 26.8199 4.62189L26.3906 3.76316C26.2618 3.8061 26.09 3.89198 26.0041 3.97785C22.054 5.86705 17.5886 6.12467 13.4238 4.6219C10.5042 3.59143 7.32687 3.84904 4.57895 5.223L3.72023 5.65236C3.76316 5.78117 3.84904 5.95291 3.93492 6.03878C4.45015 7.15513 4.87951 8.35735 5.18006 9.6025C8.1856 8.74377 11.5346 8.82964 14.626 9.94598Z" fill="currentColor"></path><path d="M3.93493 22.8698L4.87952 22.3546C6.7935 21.3976 8.90498 20.9343 11 20.9954C12.2888 21.033 13.5713 21.269 14.7978 21.7105C15.1973 21.8523 15.5981 21.9824 16 22.1011V26.6777C14.3376 26.3686 12.6547 26.3245 11 26.5375C9.28349 26.7585 7.59733 27.2562 5.99586 28.0221C5.90999 28.108 5.73824 28.1939 5.60943 28.2368L5.18007 27.3781C4.45015 25.9612 4.0208 24.4155 3.93493 22.8698Z" fill="currentColor"></path><path d="M4.45002 18.9197C8.0996 17.4169 12.1786 17.2881 15.914 18.6191C19.3489 19.8213 22.9985 20.036 26.4334 19.2631C26.3905 17.331 26.6481 15.4418 27.3351 13.5526C22.8267 14.8836 17.9749 14.7548 13.4666 13.1662C10.8905 12.2216 8.05667 12.2216 5.48049 13.0803C5.52343 14.9266 5.17995 16.8158 4.5359 18.662C4.5359 18.662 4.49296 18.7909 4.45002 18.9197Z" fill="currentColor"></path>
							</Link>
                    </div>
					<div class="xl:pb-5 mx-auto max-w-4xl xl:pt-5 flex justify-center">
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
					<button class="navbar-burger self-center xl:hidden px-10 mb-5 mx-auto max-w-4xl flex justify-center border bg-yellow-500 rounded-md">
						<a className='navbar-burger inline-flex justify-center items-center bg-gray-50 hover:bg-gray-100 rounded-full'
							href='#'
							onClick={()=>setMenuOpen(true)}>
                            <svg width="30" height="30" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						    	<rect class="text-white" width="32" height="32" rx="6" fill="#F59E0B"></rect>
						    	<path class="text-coolGray-900" d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z" fill="currentColor"></path>
						    </svg>
						</a>
					</button>
					<div class={`${menuOpen?'' : 'hidden'} navbar-menu fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50`}>
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
                <div class="border-b border-coolGray-100"></div>
                    <div class="container px-4 mx-auto">
                            <p class="text-lg md:text-xl text-coolGray-400 font-medium text-center py-5 md:pb-10">© 2023 Formintens Centru. Toate drepturile rezervate</p>
                    </div>
            </section>
	</>
	)
}