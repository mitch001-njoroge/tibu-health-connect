import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import CountySelector from "@/components/home/CountySelector";
import WhyWeBuiltThis from "@/components/home/WhyWeBuiltThis";
import ValueProposition from "@/components/home/ValueProposition";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CountySelector />
      <WhyWeBuiltThis />
      <ValueProposition />
      <Features />
      <Stats />
      <CTA />
    </Layout>
  );
};

export default Index;
