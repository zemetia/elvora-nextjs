import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: "Contact Us - Elvora",
};

export default function ContactPage() {
  return <ContactContent />;
}
