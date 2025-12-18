type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How can the 6 sectors be automated seamlessly?',
    answer:
      'AutoFabric integrates CRM, ERP, Financials, HR, Supply Chain, and Marketing automation into a unified platform. Our intelligent workflows ensure data flows seamlessly between sectors, eliminating silos and manual data entry.',
  },
  {
    question: 'What are the key benefits of cross-sector automation?',
    answer:
      'Seamless automation across the 6 sectors reduces operational costs by up to 40%, minimizes errors through intelligent data synchronization, and enables real-time insights for better decision-making across your entire business.',
  },
  {
    question: 'How does AutoFabric ensure data security across all sectors?',
    answer:
      'We implement enterprise-grade security protocols including end-to-end encryption, compliance with international standards (GDPR, HIPAA), and regular security audits. Your data remains protected whether flowing between CRM, ERP, or financial systems.',
  },
  {
    question: 'Can I start automating one sector and expand later?',
    answer:
      'Absolutely! AutoFabric is designed for scalable implementation. You can begin with any single sector (like CRM automation) and gradually integrate additional sectors as your business grows, ensuring seamless data connectivity throughout.',
  },
];
