"use client";

import { GetStartedButton } from '@/components';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding-top: 6rem;
  padding-bottom: 4rem;
  background-color: #000000;
  color: #ffffff;

  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`;

const Layout = styled.div`
  display: flex;
  gap: 3rem;
  width: 92%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 300px;
  position: sticky;
  top: 8rem;
  height: fit-content;

  @media (max-width: 1024px) {
    width: 100%;
    top: 2rem;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: #f3f4f6;
    border-radius: 0.5rem;
  }
`;

const Content = styled.article`
  flex: 1;
  max-width: 800px;

  p {
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  section {
    margin-bottom: 4rem;
  }
`;

const TOCLink = styled.a`
  display: block;
  padding: 1rem 0;
  color: #9ca3af;
  font-size: 0.95rem;
  text-decoration: none;
  border-left: 3px solid transparent;
  padding-left: 1.25rem;
  line-height: 1.6;
  transition: all 0.3s ease;
  border-radius: 0 0.25rem 0.25rem 0;

  &:hover {
    color: #60a5fa;
    background-color: rgba(96, 165, 250, 0.1);
    border-left-color: #60a5fa;
    padding-left: 1.5rem;
  }
`;

const WhitepaperPage = () => {
  const sections = [
    { id: 'executive-summary', title: 'Executive Summary' },
    { id: 'crisis-fragmentation', title: '1. The Crisis of Fragmentation' },
    { id: 'market-context', title: '2. Market Context & Opportunity' },
    { id: 'automation-framework', title: '3. The Automation Framework' },
    { id: 'core-architecture', title: '4. Core Architecture' },
    { id: 'implementation', title: '5. Implementation Pathways' },
    { id: 'conclusion', title: '6. Conclusion' },
  ];

  const handleTOCClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to keep the section near the top of the viewport, just below the sticky TOC sidebar.
      const offset = 128; // Approx. 8rem (sidebar top offset) in pixels.
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <Wrapper>
      <Layout>
        {/* Table of Contents Sidebar */}
        <Sidebar>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Table of Contents</h4>
          <nav className="space-y-1">
            {sections.map((section) => (
              <TOCLink
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleTOCClick(e, section.id)}
              >
                {section.title}
              </TOCLink>
            ))}
          </nav>
          <div className="mt-10 p-4 bg-gray-800 rounded-lg border border-gray-600">
            <p className="text-xs text-gray-200 font-semibold mb-2">Request Full PDF</p>
            <GetStartedButton padding="0.5rem 1rem" />
          </div>
        </Sidebar>

        {/* Main Content */}
        <Content>
          <div className="mb-16">
            <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
              The Full Business OS – AutoFabric: <span className="text-blue-400">Unified Automation for Modern Enterprises</span>
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-300 border-t border-b border-gray-600 py-4">
              <span><strong>Version:</strong> 2.1</span>
              <span className="text-gray-500">|</span>
              <span><strong>Division:</strong> Gr8Builds Research</span>
              <span className="text-gray-500">|</span>
              <span><strong>Published:</strong> Dec 2025</span>
            </div>
          </div>

          <section id="executive-summary" className="mb-24 scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-400 rounded"></span>
              Executive Summary
            </h2>

            <p className="text-gray-200 leading-relaxed mb-8 text-xl font-light">
              Enterprise software has reached an inflection point. The era of point solutions—where businesses stitch together 40–60 disconnected tools—is economically and operationally unsustainable.
            </p>
            <p className="text-gray-200 leading-relaxed mb-8 text-lg">
              Most enterprises operate with 40–80 disconnected SaaS tools. Gartner's 2024 CIO survey reveals:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {[
                { label: 'Manual Workflows', val: '-60%' },
                { label: 'OpEx Reduction', val: '-45%' },
                { label: 'Revenue/Employee', val: '5x' }
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-gray-800 border border-gray-600 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-blue-400">{stat.val}</div>
                  <div className="text-xs text-gray-300 uppercase font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="crisis-fragmentation" className="mb-24 scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 border-b pb-3 border-gray-600">1. The Crisis of Fragmentation: Why Current Approaches Fail</h2>
            <h3 className="text-xl font-bold text-gray-100 mb-6">The True Cost of Point Solutions</h3>
            <p className="text-gray-200 leading-relaxed mb-8 text-lg">
              Most enterprises operate with 40–80 disconnected SaaS tools. Gartner&apos;s 2024 CIO survey reveals:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <li className="p-4 bg-red-900/20 text-red-200 rounded-lg text-sm border border-red-800"><strong>68%</strong> report critical data inconsistencies</li>
              <li className="p-4 bg-red-900/20 text-red-200 rounded-lg text-sm border border-red-800"><strong>54%</strong> of projects abandoned due to integration issues</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-600 shadow-sm hover:shadow-md transition">
                <h4 className="font-bold text-white mb-2 border-b pb-2 border-gray-500">ERP-Centric</h4>
                <p className="text-xs text-gray-300">High cost ($2M-$8M), 18-36 month timelines, rigid workflows.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-600 shadow-sm hover:shadow-md transition">
                <h4 className="font-bold text-white mb-2 border-b pb-2 border-gray-500">Salesforce/MSFT</h4>
                <p className="text-xs text-gray-300">Strong silos, weak in back-office, expensive licensing scaling.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-600 shadow-sm hover:shadow-md transition">
                <h4 className="font-bold text-white mb-2 border-b pb-2 border-gray-500">Middleware</h4>
                <p className="text-xs text-gray-300">Fragile connectivity, no unified data model, governance afterthought.</p>
              </div>
            </div>
          </section>

          <section id="market-context" className="mb-24 scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 border-b pb-3 border-gray-600">2. Market Context & Economic Opportunity</h2>
            <div className="overflow-x-auto mb-10 rounded-xl border border-gray-600 shadow-sm">
              <table className="w-full border-collapse bg-gray-800">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4 text-left text-sm font-medium">Domain</th>
                    <th className="p-4 text-left text-sm font-medium">2024 TAM (USD)</th>
                    <th className="p-4 text-left text-sm font-medium">Key Drivers</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200 text-sm">
                  <tr className="border-b border-gray-600"><td className="p-4 font-bold text-white">Sales & CRM</td><td className="p-4">$80–120B</td><td className="p-4">Lead scoring, pipeline intelligence</td></tr>
                  <tr className="border-b border-gray-600 bg-gray-700"><td className="p-4 font-bold text-white">Marketing & Growth</td><td className="p-4">$435–550B</td><td className="p-4">AI personalization, orchestration</td></tr>
                  <tr className="border-b border-gray-600"><td className="p-4 font-bold text-white">Finance & Admin</td><td className="p-4">$100–145B</td><td className="p-4">Compliance, AR/AP automation</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="automation-framework" className="mb-24 scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 border-b pb-3 border-gray-600">3. The Business Automation Framework</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
                <h4 className="font-bold text-white mb-2">Pillar 1: Sales & CRM</h4>
                <p className="text-sm text-gray-300">Intelligent lead management, revenue operations, and pipeline intelligence.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-purple-600 shadow-sm">
                <h4 className="font-bold text-white mb-2">Pillar 2: Marketing</h4>
                <p className="text-sm text-gray-300">Campaign orchestration and customer journey intelligence.</p>
              </div>
            </div>
          </section>

          <section id="core-architecture" className="mb-24 scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 border-b pb-3 border-gray-600">4. Core Architecture: How the Business OS Works</h2>
            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl mb-10">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">The Six Architectural Pillars</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Universal Data Layer (UDL)</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Unified semantic schema across all entities. Single source of truth that harmonizes customers and products.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">AI Reasoning Layer</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Intelligent, explainable decisions with human-in-the-loop controls for high-risk financial decisions.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="implementation" className="mb-24 scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 border-b pb-3 border-gray-600">5. Implementation Pathways</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-900/20 rounded-xl border border-blue-800">
                <span className="text-xs font-bold text-blue-300 uppercase">Pathway 01</span>
                <h4 className="font-bold mt-2 text-white">Incremental Rollout</h4>
                <p className="text-xs mt-2 text-blue-200">Phase-by-phase migration starting with Sales/Marketing.</p>
              </div>
              <div className="p-6 bg-green-900/20 rounded-xl border border-green-800">
                <span className="text-xs font-bold text-green-300 uppercase">Pathway 02</span>
                <h4 className="font-bold mt-2 text-white">Process-Led</h4>
                <p className="text-xs mt-2 text-green-200">Targeting high-impact processes like Quote-to-Cash first.</p>
              </div>
              <div className="p-6 bg-purple-900/20 rounded-xl border border-purple-800">
                <span className="text-xs font-bold text-purple-300 uppercase">Pathway 03</span>
                <h4 className="font-bold mt-2 text-white">Greenfield</h4>
                <p className="text-xs mt-2 text-purple-200">Direct deployment for new subsidiaries or startups.</p>
              </div>
            </div>
          </section>

          <section id="conclusion" className="mb-24 scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 border-b pb-3 border-gray-600">6. Conclusion: The Unified Enterprise Future</h2>
            <div className="prose prose-lg text-gray-200">
              <p className="mb-6">The shift from fragmented point solutions to a unified Business OS is not merely a technology upgrade—it is a fundamental rearchitecture of how enterprises operate.</p>
              <div className="p-10 bg-gradient-to-br from-blue-700 to-indigo-900 text-white rounded-3xl text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to unify your business?</h3>
                <p className="mb-8 opacity-90">Join the Gr8Builds Research network for exclusive insights.</p>
                <GetStartedButton padding="0.75rem 2rem" />
              </div>
            </div>
          </section>
        </Content>
      </Layout>
    </Wrapper>
  );
};

export default WhitepaperPage;
