import ssTransparent from '../assets/images/ss-transparent.png';
import logo from '../assets/images/logo-jam.png';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function ProjectFooter() {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false)

	return (<>
		<div class="flex justify-center py-10">
			<img src={ssTransparent} alt="" class="md:w-1/3 w-1/2" /></div>

		<section class="py-24 bg-gray-900">
			<div class="container px-4 mx-auto">
			 <div class="flex flex-wrap items-center justify-between -mx-4 px-4">
				<div class="xl:w-2/6 lg:mb-0 px-4 md:w-1/4">
					<a class="inline-block"  onClick={() => { navigate('/') }}>
						<img src={logo} alt="" class="h-20" /></a>
				</div>
				<div class="xl:w-auto xl:mr-20 px-4 lg:mb-0 hidden lg:block mt-2">
					<ul class="flex gap-5">
						<li class="mb-2"><a class="font-heading text-white hover:text-gray-100" onClick={() => { navigate('/projectslanding') }}>Prima pagină</a></li>
						<li class="mb-2"><a class="font-heading text-white hover:text-gray-100" onClick={() => { navigate('/projectsacquisitions') }}>Achiziții</a></li>
						<li class="mb-2"><a class="font-heading text-white hover:text-gray-100" onClick={() => { navigate('/projectsbusiness') }}>Afaceri</a></li>
						<li class="mb-2"><a class="font-heading text-white hover:text-gray-100" onClick={() => { navigate('/projectsabout') }}>Despre</a></li>
						<li><a class="font-heading text-white hover:text-gray-100" onClick={() => { navigate('/projectsevaluation') }}>Evaluare</a></li>
						<li><a class="font-heading text-white hover:text-gray-100" onClick={() => { navigate('/projectsprogress') }}>Progres</a></li>
						<li><a class="font-heading text-white hover:text-gray-100" onClick={() => { navigate('/projectsdocuments') }}>Documente</a></li>
						<li><a class="font-heading text-white hover:text-gray-100" onClick={() => { navigate('/projectsmedia') }}>Media</a></li>
						<li><a class="font-heading text-white hover:text-gray-100" onClick={() => { navigate('/projectscontact') }}>Contact</a></li>
					</ul><span class="block text-gray-300 mb-6 mt-2">2023 © Jam Business</span>
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
						<div className='w-full ml-4'>
							<p className='pl-2 font-heading'>2023 © Jam Business</p>
						</div>
					</div>
				</nav>
			</div>
		</section>
	</>
	)
}