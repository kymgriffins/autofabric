import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Autofabric has revolutionized our operations across all departments. Their CRM automation streamlined our sales process, while ERP integration unified our entire business workflow. We've seen productivity increases we never thought possible.",
    person: 'Kiprop Ngetich',
    avatar: robert_fox,
  },
  {
    testimony:
      "Implementing Autofabric's automation suite was a game-changer for our HR and supply chain management. The seamless integration between systems eliminated data silos and reduced manual errors by 80%. Our team can now focus on strategic growth.",
    person: 'Muthoni Wanjiku',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Autofabric's comprehensive automation platform transformed our financial operations and marketing efforts. Automated reporting and campaign management have given us real-time insights and freed up valuable time for our core business activities.",
    person: 'Achieng Oduya',
    avatar: esther_howard,
  },
  {
    testimony:
      "The unified automation approach from Autofabric connected our six core business sectors flawlessly. From customer relationship management to supply chain optimization, we've achieved operational excellence that drives real competitive advantage.",
    person: 'Kipchoge Rotich',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Autofabric's intelligent automation tools have transformed how we manage our business processes. The platform's ability to integrate CRM, ERP, and financial systems has created a truly unified operation that scales with our growth.",
    person: 'Wanjiku Maina',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Join thousands of', 'businesses automating'];
