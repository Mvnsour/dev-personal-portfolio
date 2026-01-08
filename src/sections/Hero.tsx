/* eslint-disable react-hooks/purity */
import { useMemo } from 'react';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faBluesky, faXTwitter } from '@fortawesome/free-brands-svg-icons'

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
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button size='lg'>
                Contact Me <ArrowRight className='w-5 h-5'/>
              </Button>
              <AnimatedBorderButton />
            </div>
            {/* Social links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground'> Follow me: </span>
              {[
                {icon: faLinkedinIn, href: 'https://www.linkedin.com/in/mansourmbengue/'},
                {icon: faGithub, href: 'https://github.com/Mvnsour'},
                {icon: faBluesky, href: 'https://bsky.app/profile/0xmchain.bsky.social'},
                {icon: faXTwitter, href: 'https://x.com/0xmchain'},
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'
                >
                  <FontAwesomeIcon icon={social.icon} className='text-md'/>
                </a>
              ))}
            </div>
          </div>
          {/* Profile Image - Right Column */}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* Profile Image */}
            <div className='relative max-w-md mx-auto'>
              <div
                className='absolute inset-0 rounded-3xl bg-linear-to-br 
                from-primary/30 via-transparent 
                to-primary/10 blur-2xl animate-pulse'
              />
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img 
                  src='./m-avatar-green-portrait.png' 
                  alt='Mansour Mbengue' 
                  className='w-full aspect-4/5 object-cover rounded-xl'
                />

                {/* Floating Badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl py-3 px-4 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                    <span className='text-sm font-medium'>Available for work</span>
                  </div> 
                </div>
                {/* Stats Badge */}
                  <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-xs text-muted-foreground">
                      Projects built
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
  </section>
}