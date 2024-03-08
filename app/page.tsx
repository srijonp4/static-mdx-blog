import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Architects_Daughter,
  Inconsolata,
  Concert_One,
} from 'next/font/google';

const inconsolata = Inconsolata({
  style: ['normal'],
  subsets: ['latin'],
});

const architectsDaughter = Architects_Daughter({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

const concertOne = Concert_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main>
      <div
        className={cn(
          'min-h-screen bg-background concertOne font-bold text-4xl ',
          concertOne.className
        )}
      >
        hello world
        <Button variant="destructive">hello</Button>
      </div>
    </main>
  );
}
