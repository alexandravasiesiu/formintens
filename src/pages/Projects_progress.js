import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProjectNavigation } from '../components/ProjectNavigation';
import ProjectPostWrapper from '../components/ProjectPostWrapper';
import ProjectFooter from '../components/ProjectFooter';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

const posts = require.context('../content/Posts/Progres', true, /\.js$/);

const allPostsList = posts.keys().reverse()

export default function ProjectsProgress() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <ProjectNavigation />
        <section className=''>
          <div className='container px-4 mx-auto'>
            <div className='max-w-3xl mx-auto'>
              <h3 className='font-heading text-2xl font-medium mb-8 text-center'>
                Imagini și video-uri de pe teren sau rezultatele produse prin
                practica, actualizări, testimoniale sau momente importante în
                evoluția proiectului
              </h3>
              {allPostsList.map((post) => {
                const Post = posts(post).default;
                return <ProjectPostWrapper
                  title={posts(post).options.title}
                  >
                  <Post></Post>
                </ProjectPostWrapper>
              })}
            </div >
          </div >
        </section >
        <ProjectFooter />
      </>
    </React.Fragment >
  );
}

