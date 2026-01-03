/* eslint-disable react-hooks/purity */
import { useMemo } from 'react';

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
    </div>
  </section>
}