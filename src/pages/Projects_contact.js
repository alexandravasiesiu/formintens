import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProjectNavigation } from '../components/ProjectNavigation';
import  ProjectFooter from '../components/ProjectFooter';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ProjectsContact() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
      <ProjectNavigation />
        <section className=''>
          <div className='container px-4 mx-auto text-center'>
            <div className='max-w-3xl mx-auto'>
              <p className='mb-3 text-lg md:text-xl w-full font-heading'>
                Manager Proiect: Popa Felicia-Delia
              </p>
              <p className='mb-3 text-lg md:text-xl w-full font-heading'>
                Telefon: 0745.357.905
              </p>
              <p className='mb-3 text-lg md:text-xl w-full font-heading'>
                Email: scmarinexsrl@yahoo.com
              </p>
              <p className='mb-3 text-lg md:text-xl w-full font-heading'>
                Pentru informații legate de grupul țintă, recrutare:
                0739.162.605
              </p>
            </div>
          </div>
        </section>
        <ProjectFooter />
      </>
    </React.Fragment>
  );
}

