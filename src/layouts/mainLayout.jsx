import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {

  return (
    <>
      <Header/>
      <main className='pt-30'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
