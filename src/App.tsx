import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import HomePage from '@/pages/home';
import PapersPage from '@/pages/papers';
import MaterialsPage from '@/pages/materials';
import NeuralNetworksPage from '@/pages/materials/neural-networks';
import ComputerVisionPage from '@/pages/materials/computer-vision';
import NLPGuidePage from '@/pages/materials/nlp-guide';
import ReinforcementLearningPage from '@/pages/materials/reinforcement-learning';
import { OpenSource } from '@/pages/open-source';
import { ScrollToAnchor } from '@/components/ScrollToAnchor';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ScrollToAnchor />
        <div className="min-h-screen bg-black text-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/papers" element={<PapersPage />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/materials/neural-networks" element={<NeuralNetworksPage />} />
            <Route path="/materials/computer-vision" element={<ComputerVisionPage />} />
            <Route path="/materials/nlp-guide" element={<NLPGuidePage />} />
            <Route path="/materials/reinforcement-learning" element={<ReinforcementLearningPage />} />
            <Route path="/open-source" element={<OpenSource />} />
          </Routes>
          <Footer />
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;