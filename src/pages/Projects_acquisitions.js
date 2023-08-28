import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProjectNavigation } from '../components/ProjectNavigation';
import ProjectFooter from '../components/ProjectFooter';
import ProjectPostWrapper from '../components/ProjectPostWrapper';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

const posts = require.context('../content/Posts/Achizitii', true, /\.js$/);

const allPostsList = posts.keys().reverse()

export default function ProjectsAcquisitions() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
      <ProjectNavigation/>
        <section className=''>
          <div className='container px-4 mx-auto'>
            <div className='max-w-3xl mx-auto'>
              <h3 className='font-heading text-2xl font-medium mb-8 text-center'>
                Anunțuri privind procedura de achiziție a materialelor și
                serviciilor necesare pentru implementarea proiectului
              </h3>
              {allPostsList.map((post) => {
                const Post = posts(post).default;
                return <ProjectPostWrapper
                  title={posts(post).options.title}
                  >
                  <Post></Post>
                </ProjectPostWrapper>
              })}
            </div>
          </div>
        </section>
        <ProjectFooter />
      </>
    </React.Fragment>
  );
}

