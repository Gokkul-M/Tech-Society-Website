
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import WhyJoinSection from '../components/home/WhyJoinSection';
import EngagementSection from '../components/home/EngagementSection';
import CommunitySection from '../components/home/CommunitySection';
import ContactSection from '../components/home/ContactSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <WhyJoinSection />
      <EngagementSection />
      <CommunitySection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
