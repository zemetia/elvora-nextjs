import { Metadata } from 'next';
import RoutineContent from './RoutineContent';

export const metadata: Metadata = {
  title: "Skincare Routines - Elvora",
};

export default function RoutinePage() {
  return <RoutineContent />;
}
