import { Contact, Home, Projects, Skills, Testimonials } from 'components';
import { MainSection, Nav, PageWrapper } from 'Layout';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App font-roboto">
      <BrowserRouter>
        <PageWrapper>
          <Nav />
          <MainSection>
            <Home />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
          </MainSection>
        </PageWrapper>
      </BrowserRouter>
    </div>
  );
}
export default App;
