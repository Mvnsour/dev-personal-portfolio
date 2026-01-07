/* eslint-disable react-hooks/purity */
import { useMemo } from 'react';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {

  const greenDots = useMemo(
    () => Array.from({ length: 30}, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    })),
    []
  )
  return <section className='relative min-h-screen flex items center overflow-hidden'>
    {/* Background */}
    <div className='absolute inset-0'>
      <img 
        src='/hero-bg.jpg' 
        alt='Hero background' 
        className='w-full h-full object-cover opacity-40' 
      />
      <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background'/>
    </div>

      {/* Green dots */}
       <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {greenDots.map((dot, i) => (
          <div
            key={i}
            className='absolute w-1.5 h-1.5 rounded-full opacity-60 '
            style={{
              backgroundColor: '#20B2A6',
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s` 
            }}
          />
        ))}
       </div>
       {/* Content */}
       <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Text Content - Left Column*/}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
                Web3 Frontend Developer
              </span>
            </div>

            {/* Headline */}
            <div className='space-y-6'>
              <h1 className='text-5-xl m:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Turning <span className='text-primary glowtext'>smart contracts</span>
                <br />
                into usable
                <br />
                <span className='font-serif italicfont-normal text-white'>
                  Web3 products.
                </span>
              </h1>
              <p
              className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'
              >
                Web3 Frontend Developer building decentralized 
                applications with React, Next.js, and TypeScript. I specialize in smart 
                contract integrations, multi-chain dApps, and creating user-friendly 
                interfaces for blockchain operations.
              </p>
            </div>

            {/* CTAs */}
            <Button size='lg'>
              Contact Me <ArrowRight className='w-5 h-5'/>
            </Button>
            <button>
              Download Resume
            </button>
          </div>
          {/* Profile Image - Right Column */}
        </div>
       </div>
  </section>
}