import React from 'react';
import Header from './Header';

const MainLayout = props => (
  <section className="main-layout-section">
    <Header />
    <main className="main-content">{props.children}</main>
  </section>
);

export default MainLayout;
