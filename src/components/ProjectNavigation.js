import { useNavigate } from 'react-router';
import logo from '../assets/images/logo-jam.png';
import { useState } from 'react';

export function ProjectNavigation() {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	return (<>
		<section>
			<nav className='py-4 bg-white'>
				<div className='container mx-auto'>
					<div className='relative items-center justify-between flex px-4'>
						<div className='w-auto'>
							<a className='inline-block'  onClick={() => { navigate('/') }}>
								<img
									src={logo}
									alt=''
									className='h-20'
								/>
							</a>
						</div>
						<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block'>
							<ul className='flex gap-5 items-center'>
								<li className='font-heading text-gray-900 w-28'>
									<a className='hover:text-black' onClick={() => { navigate('/projectslanding') }}>
										Prima pagină
									</a>
								</li>
								<li className='font-heading text-gray-900'>
									<a className='hover:text-black' onClick={() => { navigate('/projectsacquisitions') }}>
										Achiziții
									</a>
								</li>
								<li className='font-heading text-gray-900'>
									<a className='hover:text-black' onClick={() => { navigate('/projectsbusiness') }}>
										Afaceri
									</a>
								</li>
								<li className='font-heading text-gray-900'>
									<a className='hover:text-black' onClick={() => { navigate('/projectsabout') }}>
										Despre
									</a>
								</li>
								<li className='font-heading text-gray-900'>
									<a className='hover:text-black' onClick={() => { navigate('/projectsevaluation') }}>
										Evaluare
									</a>
								</li>
								<li className='font-heading text-gray-900'>
									<a className='hover:text-black' onClick={() => { navigate('/projectsprogress') }}>
										Progres
									</a>
								</li>
								<li className='font-heading text-gray-900'>
									<a className='hover:text-black' onClick={() => { navigate('/projectsdocuments') }}>
										Documente
									</a>
								</li>
								<li className='font-heading text-gray-900'>
									<a className='hover:text-black' onClick={() => { navigate('/projectsmedia') }}>
										Media
									</a>
								</li>
								<li className='font-heading text-gray-900'>
									<a className='hover:text-black' onClick={() => { navigate('/projectscontact') }}>
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div className='w-auto lg:hidden'>
							<a
								className='navbar-burger inline-flex w-14 h-14 justify-center items-center bg-gray-50 hover:bg-gray-100 rounded-full'
								href='#'
								onClick={()=>setMenuOpen(true)}
							>
								<svg
									width={20}
									height={10}
									viewBox='0 0 20 10'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M19 9H1M19 1H1'
										stroke='black'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</nav>
			<div className={`${menuOpen?'':'hidden'} navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}>
				<div className='fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80' />
				<nav className='relative pt-7 pb-8 bg-white h-full overflow-y-auto'>
					<div className='flex flex-col px-6 h-full'>
					<div className='flex justify-between'>
						<a className='inline-block ml-4 mb-7' onClick={() => { navigate('/') }}>
							<img
								src={logo}
								alt=''
								className='h-20'
							/>
						</a>
						<a className='inline-block ml-4 mb-7' onClick={()=>setMenuOpen(false)}>
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
						<ul className='w-full mb-auto pb-16'>
							<li>
								<a
									className='font-heading block text-base font-medium py-4 px-6 rounded-sm'
									onClick={() => { navigate('/') }}
								>
									Acasă
								</a>
							</li>
							<li>
								<a
									className='font-heading block text-base py-4 px-6 rounded-sm'
									onClick={() => { navigate('/projectslanding') }}
								>
									Prima pagină
								</a>
							</li>
							<li>
								<a
									className='font-heading block text-base py-4 px-6 rounded-sm'
									onClick={() => { navigate('/projectsacquisitions') }}
								>
									Achiziții
								</a>
							</li>
							<li>
								<a
									className='font-heading block text-base py-4 px-6 rounded-sm'
									onClick={() => { navigate('/projectsbusiness') }}
								>
									Afaceri
								</a>
							</li>
							<li>
								<a
									className='font-heading block text-base py-4 px-6 rounded-sm'
									onClick={() => { navigate('/projectsabout') }}
								>
									Despre
								</a>
							</li>
							<li>
								<a
									className='font-heading block text-base py-4 px-6 rounded-sm'
									onClick={() => { navigate('/projectsevaluation') }}
								>
									Evaluare
								</a>
							</li>
							<li>
								<a
									className='font-heading block text-base py-4 px-6 rounded-sm'
									onClick={() => { navigate('/projectsprogress') }}
								>
									Progres
								</a>
							</li>
							<li>
								<a
									className='font-heading block text-base py-4 px-6 rounded-sm'
									onClick={() => { navigate('/projectsdocuments') }}
								>
									Documente
								</a>
							</li>
							<li>
								<a
									className='font-heading block text-base py-4 px-6 rounded-sm'
									onClick={() => { navigate('/projectsmedia') }}
								>
									Media
								</a>
							</li>
							<li>
								<a
									className='font-heading block text-base py-4 px-6 rounded-sm'
									onClick={() => { navigate('/projectscontact') }}
								>
									Contact
								</a>
							</li>
						</ul>
						<div className='w-full'>
							<p className='pl-2 font-heading'>2023 © Jam Business</p>
						</div>
					</div>
				</nav>
			</div>
		</section>
		<h2 className='mb-6 text-3xl lg:text-5xl md:text-4xl py-10 text-center font-heading lg:px-40 px-10'>
			Creșterea ocupării, precum și îmbunătățirea nivelului de competențe al
			tinerilor NEETs
		</h2>
	</>
	);
}