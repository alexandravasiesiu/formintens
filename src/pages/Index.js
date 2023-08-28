import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import LabelSvg from '../components/svg/LabelSvg';
import { useNavigate } from 'react-router-dom';
import { ArrowDownSolid } from '../components/svg/ArrowDownSolid';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navigation />

        <div class="flex justify-center py-10">
          <img src="images/ss-transparent.png" alt="" class="w-2/4" /></div>

        <section id="about" class="bg-contain bg-no-repeat bg-center bg-gray-500 py-5" style={{ "background-image": "url('acros-assets/images/call-to-action/cta-1-bg.png')" }}><div class="container px-4 mx-auto">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="font-heading text-3xl sm:text-4xl text-white mt-2 mb-6">Cu ce ne ocupăm noi?</h1>
            <p class="max-w-2xl mx-auto text-lg leading-8 text-white mb-12 text-left">Suntem o firmă de consultanță în afaceri și management specializată în a oferi soluții personalizate și inovatoare atât pentru clienții din sectorul public, cât și pentru cei din sectorul privat. Echipa noastră de experți înțelege provocările specifice cu care vă confruntați și vă oferă servicii complete de strategie de afaceri, optimizare operațională, dezvoltare organizațională și multe altele.</p>
            <p class="max-w-2xl mx-auto text-lg leading-8 text-white mb-12 text-left">Indiferent de mărimea sau complexitatea afacerii dumneavoastră, suntem aici pentru a vă ghida spre succesul durabil și creșterea profitabilității. Lucrăm alături de dumneavoastră pentru a găsi cele mai bune soluții adaptate nevoilor și obiectivelor specifice ale companiei dumneavoastră.</p>
            <p class="max-w-2xl mx-auto text-lg leading-8 text-white mb-12 text-left">Alegeți să colaborați cu noi și beneficiați de expertiza noastră în domeniu, abordare orientată spre rezultate și angajamentul față de succesul afacerii dumneavoastră. Echipa Jam Business vă oferă soluții pragmatice și inovatoare pentru a vă transforma provocările în oportunități și a vă conduce spre excelență.</p>
          </div>
        </div>
        </section>

        <section id="experience" class="py-16 bg-gray-50"><div class="container px-4 mx-auto flex flex-wrap justify-center">
          <div class="max-w-2xl px-4 mb-12">
            <h2 class="max-w-3xl font-heading text-3xl sm:text-4xl mb-6 font-medium underline text-center">Experiență</h2>
          </div>
          <div class="flex flex-wrap -mx-4 -mb-12">
            <div class="w-full lg:w-1/3 px-4 mb-12">
              <div class="p-8 bg-white rounded max-w-sm mx-auto flex flex-wrap justify-center h-full">
                <div class="flex items-center justify-center w-16 h-16 mb-10 rounded bg-gray-500 rounded-full">
                  <LabelSvg />
                </div>
                <h3 class="font-heading text-lg font-medium mb-4 text-center">Experiență antreprenorială valoroasă:</h3>
                <p class="max-w-xxs leading-7">Cu o experiență solidă în derularea de proiecte cu finanțare europeană și prin prestarea serviciilor noastre actuale de integrare durabilă pe piața muncii a tinerilor, inclusiv a celor defavorizați, demonstrăm abilitatea noastră de a dezvolta și implementa soluții eficiente în domeniul antreprenoriatului.</p>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-4 mb-12">
              <div class="p-8 bg-white rounded max-w-sm mx-auto flex flex-wrap justify-center h-full">
                <div class="flex items-center justify-center w-16 h-16 mb-10 rounded-full bg-gray-500">
                  <LabelSvg />
                </div>
                <h3 class="font-heading text-lg font-medium mb-4 text-center">Accesare fonduri europene de succes:</h3>
                <p class="max-w-xxs leading-7">Suntem prezenți de peste 12 ani în domeniul accesării fondurilor europene nerambursabile, inclusiv prin măsuri precum PNDR, POR, POCU, POCA, POIM și POC. Experiența noastră în obținerea și administrarea cu succes a acestor fonduri atestă competența noastră și capacitatea de a sprijini dezvoltarea sustenabilă a afacerilor.</p>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-4 mb-12">
              <div class="p-8 bg-white rounded max-w-sm mx-auto flex flex-wrap justify-center h-full">
                <div class="flex items-center justify-center w-16 h-16 mb-10 rounded-full bg-gray-500">
                  <LabelSvg />
                </div>
                <h3 class="font-heading text-lg font-medium mb-4 text-center">Expertiză recunoscută pe piața muncii:</h3>
                <p class="max-w-xxs leading-7">Experiența acumulată constituie un atuu valoros, fiind un actor privat relevant pe piața muncii în Regiunea Centru, prin serviciile noastre de consultanță și îmbunătățirea nivelului de competențe pentru diverse categorii de beneficiari. Ne concentrăm pe oferirea de soluții practice și eficiente pentru a sprijini succesul afacerilor clienților noștri.</p>
              </div>
            </div>
          </div>
        </div>
        </section>

        <div>
          <img src="images/businessman-working-at-a-cafe-2022-12-15-23-22-16-utc.jpg" alt="" class="rounded shadow-md w-full" />
        </div>

        <section id="projects" class="py-16 bg-gray-50"><div class="container px-4 mx-auto flex flex-wrap justify-center">
          <div class="max-w-2xl px-4 mb-12">
            <h2 class="max-w-3xl font-heading text-3xl sm:text-4xl mb-6 underline font-medium">Proiecte</h2>
          </div>
          <div class="flex flex-wrap -mx-4 -mb-12">
            <div class="w-full px-4 mb-6">
              <div class="p-8 bg-white rounded mx-auto w-full lg:w-2/3">
                <div class="flex items-center justify-center w-16 h-16 mb-2 bg-gray-500 rounded-full">
                  <ArrowDownSolid />
                </div>
                <h3 class="font-heading text-lg font-medium mb-4">Realizări remarcabile în proiecte de ocupare și formare:</h3>
                <p class="leading-7">Am obținut rezultate remarcabile în cadrul programului POSDRU, AP 5 "Promovarea măsurilor active de ocupare". Am dezvoltat și implementat cu succes măsuri active de ocupare, contribuind la integrarea durabilă a persoanelor în piața muncii și facilitând accesul acestora la oportunități de angajare și dezvoltare profesională.</p>
              </div>
            </div>
            <div class="w-full px-4 mb-6">
              <div class="p-8 bg-white rounded mx-auto w-full lg:w-2/3">
                <div class="flex items-center justify-center w-16 h-16 mb-2 bg-gray-500 rounded-full">
                <ArrowDownSolid />
                </div>
                <h3 class="font-heading text-lg font-medium mb-4">Proiect de dezvoltare antreprenorială:</h3>
                <p class="leading-7">Proiect de succes: "Construim antreprenori responsabili pentru o dezvoltare durabilă!" În parteneriat și implementat în perioada ianuarie 2018 - februarie 2021, proiectul  a reprezentat un succes remarcabil. Am furnizat cursuri de formare antreprenorială pentru 320 de persoane din Regiunea Centru, iar în urma competiției planurilor de afaceri, am selectat și finanțat 80 de participanți. Acest proiect a contribuit la dezvoltarea unor antreprenori responsabili și la stimularea unei dezvoltări durabile în comunitate.</p>
              </div>
            </div>
            <div class="w-full px-4 mb-12">
              <div class="p-8 bg-white rounded mx-auto lg:w-2/3 w-full">
                <div class="flex items-center justify-center w-16 h-16 mb-2 rounded-full bg-gray-500">
                <ArrowDownSolid />
                </div>
                <h3 class="font-heading text-lg font-medium mb-4">Inițiative pentru tinerii NEETs:</h3>
                <p class="leading-7">Proiectul "Creșterea ocupării, precum și îmbunătățirea nivelului de competențe al tinerilor NEETs" se axează pe creșterea ocupării și dezvoltarea competențelor tinerilor șomeri NEETs, cu vârste cuprinse între 16 și 29 de ani, înregistrați la Serviciul Public de Ocupare din regiunea Centru. Prin intermediul acestui proiect, se oferă cursuri de formare în diverse domenii, precum cele de dezvoltare a competențelor antreprenoriale, lucrător în structuri pentru construcții, pavator, patiser, gestiunea deșeurilor și lucrător comercial, adresate unui număr de 380 de participanți. De asemenea, se intenționează facilitarea medierii pe piața muncii și finanțarea a 16 planuri de afaceri promițătoare. Obiectivul nostru este să contribuim la crearea unui viitor mai bun pentru tinerii NEETs, oferindu-le competențele și oportunitățile necesare pentru a se integra pe piața muncii și pentru a-și dezvolta carierele în mod durabil.</p>
                <a class="flex items-center text-yellow-400 mt-2 font-medium hover:underline bg-gray-800 rounded-sm text-lg py-2 px-2"
                  onClick={() => { navigate('/projectsprogress') }}
                >
                  <span class="mr-2 font-heading">Mai multe detalii despre progresul proiectului</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.71 12.71C15.801 12.6149 15.8724 12.5028 15.92 12.38C16.02 12.1365 16.02 11.8635 15.92 11.62C15.8724 11.4972 15.801 11.3851 15.71 11.29L12.71 8.29C12.5217 8.1017 12.2663 7.99591 12 7.99591C11.7337 7.99591 11.4783 8.1017 11.29 8.29C11.1017 8.4783 10.9959 8.7337 10.9959 9C10.9959 9.2663 11.1017 9.5217 11.29 9.71L12.59 11L9 11C8.73479 11 8.48043 11.1054 8.2929 11.2929C8.10536 11.4804 8 11.7348 8 12C8 12.2652 8.10536 12.5196 8.2929 12.7071C8.48043 12.8946 8.73479 13 9 13L12.59 13L11.29 14.29C11.1963 14.383 11.1219 14.4936 11.0711 14.6154C11.0203 14.7373 10.9942 14.868 10.9942 15C10.9942 15.132 11.0203 15.2627 11.0711 15.3846C11.1219 15.5064 11.1963 15.617 11.29 15.71C11.383 15.8037 11.4936 15.8781 11.6154 15.9289C11.7373 15.9797 11.868 16.0058 12 16.0058C12.132 16.0058 12.2627 15.9797 12.3846 15.9289C12.5064 15.8781 12.617 15.8037 12.71 15.71L15.71 12.71ZM22 12C22 10.0222 21.4135 8.08879 20.3147 6.4443C19.2159 4.79981 17.6541 3.51808 15.8268 2.7612C13.9996 2.00433 11.9889 1.80629 10.0491 2.19215C8.10929 2.578 6.32746 3.53041 4.92894 4.92893C3.53041 6.32746 2.578 8.10929 2.19215 10.0491C1.8063 11.9889 2.00433 13.9996 2.76121 15.8268C3.51809 17.6541 4.79981 19.2159 6.4443 20.3147C8.08879 21.4135 10.0222 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C19.9997 18.1425 20.7363 17.0401 21.2388 15.8268C21.7413 14.6136 22 13.3132 22 12ZM4 12C4 10.4177 4.4692 8.87103 5.34825 7.55544C6.2273 6.23985 7.47673 5.21446 8.93854 4.60896C10.4003 4.00346 12.0089 3.84504 13.5607 4.15372C15.1126 4.4624 16.538 5.22433 17.6569 6.34315C18.7757 7.46197 19.5376 8.88743 19.8463 10.4393C20.155 11.9911 19.9965 13.5997 19.391 15.0615C18.7855 16.5233 17.7602 17.7727 16.4446 18.6518C15.129 19.5308 13.5823 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84286 16.1566 4 14.1217 4 12Z" fill="currentColor"></path></svg></a>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section class="xl:pt-10 py-5 bg-gray-50"><div class="container px-4 mx-auto flex flex-wrap justify-center">
          <div class="w-full">
            <h3 class="mb-8 text-center font-medium text-3xl font-heading underline">Parteneri </h3>
          </div>
          <div class="flex -mx-4 justify-evenly w-auto flex-wrap">
            <a href="https://www.marinex-constructii.ro/"><img src="images/Marinex-Logo.png" alt="" class="rounded h-28 m-5" /></a>
            <a href="https://formintens.ro/"><img src="images/formintens-logo.png" alt="" class="h-28 m-5" /></a>
          </div>
        </div>
        </section>

        <section id="contact" class="py-6"><div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/2 px-4 order-last lg:order-none">
              <img class="block w-full max-w-md mx-auto h-100 rounded object-cover shadow-lg" src="images/Screenshot-20230704-125751.jpg" alt="" />
            </div>
            <div class="w-full lg:w-1/2 mb-16 lg:mb-0 px-4">
              <div class="max-w-md mx-auto">
                <h4 class="font-heading mt-2 mb-4 text-2xl font-medium">Doriți să discutați despre cum putem sprijini afacerea dvs?</h4>
                <p class="leading-7 text-lg mb-10">Contactați-ne astăzi și vom fi bucuroși să vă ajutăm.</p>
                <div class="flex flex-wrap -mx-2">
                  <div class="w-full sm:w-1/2 mb-8 sm:mb-0 px-4">
                    <div class="flex items-center justify-center w-14 h-14 mb-8 bg-gray-500 rounded-full">
                      <svg width="18" height="21" viewbox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.94336 1.7393C4.70278 1.7249 1.25342 5.15089 1.23901 9.39148V9.41756C1.30918 11.4599 2.01436 13.4296 3.2564 15.0523C4.64995 16.9133 6.36008 18.5145 8.30858 19.7828C8.65807 20.0851 9.17648 20.0851 9.52597 19.7828C10.833 18.939 12.0381 17.9469 13.1173 16.8263C15.0042 14.835 16.5434 12.2871 16.5955 9.53061V9.44365C16.6099 5.20306 13.1839 1.75371 8.94336 1.7393ZM8.99988 13.0002C10.9329 13.0002 12.4999 11.4332 12.4999 9.50024C12.4999 7.56725 10.9329 6.00024 8.99988 6.00024C7.06688 6.00024 5.49988 7.56725 5.49988 9.50024C5.49988 11.4332 7.06688 13.0002 8.99988 13.0002Z" fill="#fbbf24"></path><path d="M1.23901 9.39148L0.489014 9.38893V9.39148H1.23901ZM8.94336 1.7393L8.94081 2.4893L8.94336 1.7393ZM1.23901 9.41756H0.489014C0.489014 9.42615 0.489161 9.43473 0.489456 9.44332L1.23901 9.41756ZM3.2564 15.0523L3.85677 14.6028L3.85198 14.5965L3.2564 15.0523ZM8.30858 19.7828L8.79923 19.2155C8.77348 19.1933 8.74625 19.1728 8.71771 19.1542L8.30858 19.7828ZM9.52597 19.7828L9.11919 19.1527C9.0898 19.1717 9.06177 19.1927 9.03532 19.2155L9.52597 19.7828ZM13.1173 16.8263L13.6575 17.3465L13.6617 17.3421L13.1173 16.8263ZM16.5955 9.53061L17.3454 9.5448C17.3455 9.54007 17.3455 9.53534 17.3455 9.53061H16.5955ZM16.5955 9.44365L15.8455 9.4411V9.44365H16.5955ZM1.98901 9.39403C2.00201 5.56765 5.11444 2.4763 8.94081 2.4893L8.94591 0.989307C4.29111 0.973493 0.504833 4.73413 0.489018 9.38893L1.98901 9.39403ZM1.98901 9.41756V9.39148H0.489014V9.41756H1.98901ZM3.85198 14.5965C2.70474 13.0976 2.05338 11.2783 1.98857 9.39181L0.489456 9.44332C0.564977 11.6415 1.32399 13.7615 2.66083 15.5082L3.85198 14.5965ZM8.71771 19.1542C6.84296 17.9339 5.19755 16.3933 3.85674 14.6028L2.65607 15.5019C4.10235 17.4333 5.87721 19.0951 7.89945 20.4114L8.71771 19.1542ZM9.03532 19.2155C8.96754 19.2742 8.86701 19.2742 8.79923 19.2155L7.81792 20.35C8.44914 20.896 9.38541 20.896 10.0166 20.35L9.03532 19.2155ZM12.577 16.306C11.538 17.385 10.3777 18.3402 9.11919 19.1527L9.93275 20.4129C11.2884 19.5377 12.5383 18.5088 13.6575 17.3465L12.577 16.306ZM15.8457 9.51641C15.7985 12.0068 14.3986 14.3837 12.5729 16.3104L13.6617 17.3421C15.6099 15.2862 17.2882 12.5674 17.3454 9.5448L15.8457 9.51641ZM15.8455 9.44365V9.53061H17.3455V9.44365H15.8455ZM8.94081 2.4893C12.7672 2.5023 15.8585 5.61473 15.8455 9.4411L17.3455 9.4462C17.3613 4.7914 13.6007 1.00512 8.94591 0.989307L8.94081 2.4893ZM11.7499 9.50024C11.7499 11.019 10.5187 12.2502 8.99988 12.2502V13.7502C11.3471 13.7502 13.2499 11.8475 13.2499 9.50024H11.7499ZM8.99988 6.75024C10.5187 6.75024 11.7499 7.98146 11.7499 9.50024H13.2499C13.2499 7.15303 11.3471 5.25024 8.99988 5.25024V6.75024ZM6.24988 9.50024C6.24988 7.98146 7.48109 6.75024 8.99988 6.75024V5.25024C6.65267 5.25024 4.74988 7.15303 4.74988 9.50024H6.24988ZM8.99988 12.2502C7.48109 12.2502 6.24988 11.019 6.24988 9.50024H4.74988C4.74988 11.8475 6.65267 13.7502 8.99988 13.7502V12.2502Z" fill="#fbbf24"></path></svg>
                    </div>
                    <h5 class="font-heading font-medium text-lg mb-4">Adresa</h5>
                    <p class="leading-6">Str. Mihai Viteazul nr. 1A,</p>
                    <p class="leading-6">Alba Iulia, judetul Alba, România</p>
                  </div>
                  <div class="w-full sm:w-1/2 px-4">
                    <div class="flex items-center justify-center w-14 h-14 mb-8 bg-gray-500 rounded-full">
                      <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.990332 2.87254C1.30665 2.34878 3.0495 0.443765 4.29322 0.501275C4.665 0.532084 4.99364 0.756989 5.26067 1.01784C5.87379 1.61656 7.62896 3.88101 7.72859 4.35753C7.97096 5.52621 6.57833 6.1999 7.00454 7.37783C8.09112 10.0366 9.96337 11.9088 12.6233 12.9943C13.8003 13.4205 14.474 12.0279 15.6428 12.2713C16.1183 12.3709 18.3839 14.126 18.9826 14.7391C19.2425 15.0051 19.4684 15.3347 19.4992 15.7065C19.5454 17.0159 17.5222 18.7833 17.1278 19.0092C16.1974 19.6747 14.9834 19.6634 13.5035 18.9753C9.37387 17.2572 2.77426 10.7822 1.02422 6.49669C0.354608 5.02505 0.308393 3.80296 0.990332 2.87254Z" fill="#fbbf24"></path></svg>
                    </div>
                    <h5 class="font-heading font-medium text-lg mb-4">Contact</h5>
                    <p class="leading-6 font-heading font-medium">Email:</p>
                    <p class="leading-6">jam.business@yahoo.com</p>
                    <p class="leading-6 font-heading font-medium">Telefon/Fax:</p>
                    <p class="leading-6">0721 236 417</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <Footer />
      </>
    </React.Fragment>
  );
}

