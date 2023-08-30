import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProjectNavigation } from '../components/ProjectNavigation';
import  ProjectFooter  from '../components/ProjectFooter';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ProjectsDocuments() {
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
              <h3 className='font-semibold font-heading md:text-3xl text-2xl mb-2'>
                Grup țintă
              </h3>
              <h5 className='mb-2 text-xl md:text-2xl font-semibold font-heading'>
                Metodologie selecție grup țintă:
              </h5>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/A4_iul.22_Metodologie-selectie-GT-154155-final.pdf'
                className='flex items-center hover:text-red-500 text-lg underline mb-6'
              >
                A4_iul.22_Metodologie-selectie-GT-154155-final
              </a>
              <h5 className='mb-2 text-xl md:text-2xl font-semibold font-heading'>
                Calendar recrutare grup țintă:
              </h5>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/10/Calendar-recrutare-site.pdf'
                className='flex items-center hover:text-red-500 text-lg underline mb-6'
              >
                Calendar-recrutare-grup-tinta
              </a>
              <h3 className='text-2xl md:text-3xl font-semibold mb-2 font-heading'>
                Concurs planuri de afaceri
              </h3>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Metodologie-concurs-planuri-de-afaceri.pdf'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Metodologie-concurs-planuri-de-afaceri
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-1-Cerere-inscriere.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-1-Cerere-inscriere
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-2-Declaratie-AE.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-2-Declaratie-AE
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-3-Declaratie-dubla-finantare.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-3-Declaratie-dubla-finantare
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-4-Declaratie-conflict-interese.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-4-Declaratie-conflict-interese
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-5-Plan-Afaceri-model.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-5-Plan-Afaceri-model
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-6-Instructiuni-Plan-Afaceri.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-6-Instructiuni-Plan-Afaceri
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-7-Grila-EA.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-7-Grila-EA
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-8-Grila-ETF.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-8-Grila-ETF
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-9-Declaratie-juriu.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-9-Declaratie-juriu
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-10-Contestatie.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-10-Contestatie
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-11-Notificare-rezultat.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-11-Notificare-rezultat
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-12-Declaratie-eligibilitate.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-12-Declaratie-eligibilitate
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-13-Cerere-retragere.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-13-Cerere-retragere
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-14-Contract-subventie.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-14-Contract-subventie
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Macheta-financiara.xlsx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Macheta financiara
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-15-Cerere-de-finantare.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-15-Cerere-de-finantare
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-16-Declaratie-de-interese-pentru-achizitii.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-16-Declaratie-de-interese-pentru-achizitii
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-17-Cerere-de-plata.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-17-Cerere-de-plata
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-18-Cerere-de-rambursare.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-18-Cerere-de-rambursare
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-19-Solicitare-Act-Aditional.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-19-Solicitare-Act-Aditional
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-20-Solicitare-Notificare-Modificari.docx'
                className='flex items-center hover:text-red-500 text-lg underline'
              >
                Anexa-20-Solicitare-Notificare-Modificari
              </a>
            </div>
          </div>
        </section>
        <ProjectFooter />
      </>
    </React.Fragment>
  );
}

