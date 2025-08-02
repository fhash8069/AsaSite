import React from 'react'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  variant?: 'full' | 'icon' | 'text'
}

const Logo = ({ size = 'md', className = '', variant = 'full' }: LogoProps) => {
  const sizeClasses = {
    sm: { container: 'w-10 h-10', imageSize: 40 },
    md: { container: 'w-16 h-16', imageSize: 64 },
    lg: { container: 'w-24 h-24', imageSize: 96 },
    xl: { container: 'w-36 h-36', imageSize: 144 }
  }

  const currentSize = sizeClasses[size]

  if (variant === 'icon') {
    return (
      <div className={`relative ${currentSize.container} ${className}`}>
        <Image
          src={getImagePath("/472730964_992003129423015_6355583218082061287_n (1).jpg")}
          alt="AsaSite Logo"
          width={currentSize.imageSize}
          height={currentSize.imageSize}
          className="w-full h-full object-contain rounded-lg shadow-md"
          priority={size === 'xl'} // Prioritize loading for large hero logo
        />
      </div>
    )
  }

  if (variant === 'text') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className={`relative ${currentSize.container} mb-2`}>
          <Image
            src={getImagePath("/472730964_992003129423015_6355583218082061287_n (1).jpg")}
            alt="AsaSite Logo"
            width={currentSize.imageSize}
            height={currentSize.imageSize}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="text-maroon-700 text-xs font-semibold arabic-text">
          منظمة أطلس العرب
        </div>
      </div>
    )
  }

  // Full logo (default)
  return (
    <div className={`relative ${currentSize.container} ${className}`}>
      <Image
        src={getImagePath("/472730964_992003129423015_6355583218082061287_n (1).jpg")}
        alt="AsaSite - منظمة أطلس العرب"
        width={currentSize.imageSize}
        height={currentSize.imageSize}
        className="w-full h-full object-contain rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        priority={size === 'xl'} // Prioritize loading for large displays
        sizes={`${currentSize.imageSize}px`}
      />
    </div>
  )
}

export default Logo 