import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProjectNavigation } from '../components/ProjectNavigation';
import ProjectFooter from '../components/ProjectFooter';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ProjectsAbout() {
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
              <h3 className='font-heading mb-4 font-semibold md:text-3xl text-2xl'>
                Despre
              </h3>
              <p className='mb-2 text-base md:text-lg'>
                Proiect cofinanțat din FONDUL SOCIAL EUROPEAN
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Programul Operațional Capital Uman 2014-2020
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Axa prioritară 1 – Inițiativa “Locuri de muncă pentru tineri”
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Obiectiv specific 1.1: <br /> Creșterea ocupării tinerilor NEETs
                șomeri cu vârsta între 16 – 29 ani, înregistrați la Serviciul
                Public de Ocupare, cu rezidența în regiunile eligibile
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Obiectivul Specific 1.2: <br /> Îmbunătățirea nivelului de
                competențe, inclusiv prin evaluarea și certificarea
                competențelor dobândite în sistem non-formal și informal al
                tinerilor NEETs șomeri cu vârsta între 16 – 29 ani, înregistrați
                la Serviciul Public de Ocupare, cu rezidența în regiunile
                eligibile
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Titlul proiectului: <br /> Creșterea ocupării, precum si
                îmbunătățirea nivelului de competențe al tinerilor NEETs
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Contract POCU/991/1/3/154155
              </p>
              <h3 className='font-heading mb-4 font-semibold md:text-3xl text-2xl'>
                Descriere
              </h3>
              <p className='text-base md:text-lg mb-4'>
                Scopul prezentului proiect este creșterea ocupării, precum si
                îmbunătățirea nivelului de competențe al tinerilor NEETs șomeri
                cu vârsta între 16 – 29 ani, înregistrați la Serviciul Public de
                Ocupare, cu rezidența în regiunea Centru prin: derularea
                cursului de formare Lucrător în structuri pentru construcții
                pentru 40 persoane, a cursului de formare Montator rigips pentru
                40 persoane, a cursului de formare Lucrător în alimentație
                pentru 40 persoane, a cursului de formare Gestiunea deșeurilor
                pentru 120 persoane, derularea cursului de Competente
                Antreprenoriale pentru 140 persoane, derularea programelor de
                mediere pe piața muncii pentru 380 persoane si finanțarea a 16
                planuri de afaceri cu sume de pana la 25.000 euro.
              </p>
              <p className='mb-4 text-base md:text-lg'>
                Proiectul prezintă valoare adăugată, aducând următoarele
                beneficii suplimentare GT ca urmare a participării la
                activitățile proiectului:
              </p>
              <ol className='list-decimal list-inside md:px-5 mb-4 text-base md:text-lg text-coolGray-500'>
                <li className='list-disc mb-2'>
                  ca urmare a participării la cursurile de formare profesională:
                  dezvoltarea competențelor profesionale în domeniul
                  construcțiilor, domeniului alimentației, gestiunea deșeurilor,
                  respectiv în ceea ce privește antreprenorialul; creșterea
                  angajabilității și a competitivității pe piața muncii prin
                  dezvoltarea de competențe relevante pentru piața muncii în
                  acest domeniu, dar și prin obținerea certificărilor finale;
                </li>
                <li className='list-disc mb-2'>
                  ca urmare a utilizării platformei de e-learning în cadrul
                  programelor de formare: dezvoltarea competentelor digitale,
                  dezvoltarea suplimentară a competențelor profesionale
                  relevante pentru cursurile în care va fi utilizată platforma;
                </li>
                <li className='list-disc mb-2'>
                  ca urmare a participării la programul de mediere pe piața
                  muncii: identificarea de posibile locuri de muncă și
                  integrarea pe piața muncii (angajarea);
                </li>
                <li className='list-disc'>
                  ca urmare a schemei de grant: implementarea planului de
                  afaceri și primirea unei subvenții în valoarea de maximum
                  25.000 euro pentru fiecare plan de afaceri selectat, creșterea
                  șanselor de supraviețuire și dezvoltare în piață a ideii de
                  afacere;
                </li>
              </ol>
              <h3 className='font-heading mb-4 font-semibold md:text-3xl text-2xl'>
                Echipa de implementare a proiectului
              </h3>
              <p className='mb-2 text-base md:text-lg'>
                Felicia-Delia POPA – Manager Proiect
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Alina CORB-ORĂȘAN – Coordonator partener 1
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Irina-Maria MARCU – Coordonator partener 2
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Teodora-Eugenia BALDEA – Expert grup țintă 1
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Corina-Elena BOTEZAN – Expert grup țintă 2
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Marian IGNA-BOȚA – Expert grup țintă 3
              </p>
              <p className='mb-2 text-base md:text-lg'>
                Maria-Loredana GROZA – Expert grup țintă 4
              </p>
              <h3 className='font-heading mb-4 font-semibold md:text-3xl text-2xl'>
                Justificare
              </h3>
              <p className='text-base md:text-lg mb-4'>
                Grupul țintă și nevoile sale specifice au fost identificate
                utilizând atât date furnizate de studiile de profil la nivel
                național și regional, cât și date furnizate de INSSE și
                Eurostat. Strategia Națională pentru Ocuparea Forței de Muncă
                2014-2020 precizează că din perspectiva datelor privind
                populația ocupată în vârstă de muncă (15-64 ani), regiunea de
                dezvoltare Centru a înregistrat evoluții negative în perioada
                2000-2012 (o scădere de peste 107 mii de persoane). Conform
                datelor Eurostat din 2018, regiunea Centru este una dintre
                regiunile cu cele mai mari rate ale șomajului de lungă durată
                (5.8%) în rândul persoanelor cu vârsta cuprinsă între 15-29 ani.
              </p>
              <p className='mb-4 text-base md:text-lg'>
                Problemele care justifica direcțiile de acțiune propuse în
                cadrul prezentului proiect au fost identificate prin intermediul
                unui chestionar aplicat și diseminat la nivelul regiunii Centru.
                Conform răspunsurilor respondenților, PROBLEMELE IDENTIFICATE la
                nivelul persoanelor care vor intra în grupul țintă, justificând
                intervențiile prezentului proiect sunt:
              </p>
              <ol className='list-decimal list-inside md:px-5 mb-4 text-base md:text-lg text-coolGray-500'>
                <li className='list-disc mb-2'>
                  Lipsa de informare în ceea ce privește demararea unei afaceri,
                  sprijin financiar pentru înființarea unei afaceri și
                  competențe antreprenoriale
                </li>
                <li className='list-disc mb-2'>
                  Lipsa de dezvoltare de competente relevante pentru piața
                  muncii
                </li>
                <li className='list-disc'>
                  Lipsa de asistență pentru găsirea unui loc de muncă
                </li>
              </ol>
              <h3 className='font-heading mb-4 font-semibold md:text-3xl text-2xl'>
                Obiective
              </h3>
              <ol className='list-decimal list-inside md:px-5 mb-4 text-base md:text-lg text-coolGray-500'>
                <li className='list-disc mb-2'>
                  OS1. – Dezvoltarea competentelor profesionale ale membrilor GT
                  prin derularea programelor de FPC Lucrător în structuri pentru
                  construcții pentru 40 persoane, Montator rigips pentru 40
                  persoane, Lucrător în alimentație pentru 40 persoane,
                  Gestiunea deșeurilor pentru 120 persoane pe o perioada de 16
                  luni.
                </li>
                <li className='list-disc mb-2'>
                  OS2. – Susținerea antreprenorialului și a ocupării pe cont
                  propriu în rândul membrilor GT prin derularea programului de
                  FPC Competente Antreprenoriale pentru 140 persoane pe o
                  perioada de 4 luni, respectiv prin sprijinirea înființării și
                  demarării afacerii, monitorizarea implementării și
                  sustenabilității planurilor de afaceri și decontarea de
                  granturi de maxim 25.000 euro pentru 16 persoane din GT pe o
                  perioada de 14 luni.
                </li>
                <li className='list-disc'>
                  OS3 – Integrarea pe piața muncii a 380 de persoane prin
                  participarea la programul de mediere pe piața muncii pe o
                  durata de 17 luni.
                </li>
              </ol>
              <h3 className='font-heading mb-4 font-semibold md:text-3xl text-2xl'>
                Indicatori
              </h3>
              <h5 className='mb-2 text-xl font-semibold md:text-2xl font-heading'>
                Indicatori prestabiliți de rezultat:
              </h5>
              <p className='mb-2 text-base md:text-lg'>
                164 Participanți șomeri care, la încetarea calității de
                participant, primesc o ofertă de muncă, de participare la un
                program de formare continuă, ucenicie sau de stagiu
              </p>
              <p className='mb-2 text-base md:text-lg'>
                190 Participanți șomeri care, la încetarea calității de
                participant, urmează un program de educație/formare, sunt în
                curs de a obține o calificare sau au un loc de muncă, inclusiv
                ca independenți
              </p>
              <p className='mb-2 text-base md:text-lg'>
                304 Participanți șomeri care participă la intervenția sprijinită
                de YEI până la finalizarea sa
              </p>
              <p className='mb-2 text-base md:text-lg'>
                89 Participanți șomeri de lungă durată care participă la
                intervenția sprijinită de YEI până la finalizarea sa
              </p>
              <p className='mb-2 text-base md:text-lg'>
                33 Participanți șomeri de lungă durată care, la încetarea
                calității de participant, primesc o ofertă de muncă, de
                participare la un program de formare continuă, ucenicie sau de
                stagiu
              </p>
              <p className='mb-2 text-base md:text-lg'>
                38 Participanți șomeri de lungă durată care, la încetarea
                calității de participant, urmează o formă de educație/formare,
                obțin o calificare sau au un loc de muncă, inclusiv ca
                activitate independentă
              </p>
              <p className='mb-2 text-base md:text-lg'>
                1 Participanți inactivi care nu urmează studii sau cursuri de
                formare, care participă la intervenția sprijinită de YEI până la
                finalizarea ei
              </p>
              <p className='mb-2 text-base md:text-lg mb-4'>
                1 Participanți inactivi care nu urmează studii sau cursuri de
                formare și care primesc o ofertă de muncă, de participare la un
                program de educație continuă, ucenicie sau de stagiu la
                încetarea calității de participant
              </p>
              <h5 className='mb-2 text-xl md:text-2xl font-semibold font-heading'>
                Indicatori prestabiliți de realizare:
              </h5>
              <p className='mb-2 text-base md:text-lg'>
                1 Participanți inactivi care nu urmează un program de educație
                sau de formare, care, la încetarea calității de participant,
                urmează un program de educație/formare, sunt în curs de a obține
                o calificare sau care au un loc de muncă, inclusiv ca activitate
                independentă
              </p>
              <p className='mb-2 text-base md:text-lg'>
                58 Persoanele care, în termen de șase luni de la încetarea
                calității de participant, urmează programe de educație continuă,
                de formare în vederea obținerii unei calificări, de ucenicie sau
                de stagiu
              </p>
              <p className='mb-2 text-base md:text-lg'>
                164 Persoanele care, în termen de șase luni de la încetarea
                calității de participant, obțin un loc de muncă
              </p>
              <p className='mb-2 text-base md:text-lg'>
                16 Persoanele care încep o activitate independentă în termen de
                șase luni de la încetarea calității de participant
              </p>
              <h3 className='font-heading mb-4 font-semibold md:text-3xl text-2xl'>
                Parteneri
              </h3>
              <h5 className='mb-2 text-coolGray-800 text-xl md:text-2xl font-semibold font-heading'>
                FORMINTENS CENTRU S.R.L.
              </h5>
              <p className='mb-2 text-base md:text-lg'>
                este o societate comercială cu răspundere limitată din regiunea
                de dezvoltare Centru – Alba Iulia. Firma este specializată în
                domeniul serviciilor de formare, având drept activitate
                principală cod CAEN 8559 – Alte forme de învățământ. Conform
                deciziei nr. 612 din 15.10.2019, FORMINTENS CENTRU S.R.L. este
                autorizat în calitate de furnizor de formare profesională a
                adulților pentru a desfășura activitatea de formare profesională
                a adulților pentru programul de calificare Lucrător în structuri
                pentru construcții.
              </p>
              <h5 className='mb-2 text-xl md:text-2xl font-semibold font-heading'>
                MARINEX S.R.L.
              </h5>
              <p className='mb-2 text-base md:text-lg'>
                Marinex din Alba Iulia efectuează lucrări de construcţii civile
                şi industriale, structuri, hidroizolaţii, amenajări interioare
                şi finisaje de excepţie. Înfiinţată în anul 1993, firma are o
                vastă experienţă în domeniul construcţiilor, iar certificările
                conform standardelor şi investiţiile strategice au permis
                societăţii MARINEX SRL să abordeze lucrări diverse.
              </p>
            </div>
          </div>
        </section>
        <ProjectFooter />
      </>
    </React.Fragment>
  );
}

