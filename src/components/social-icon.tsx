import clsx from 'clsx'
import React from 'react'

export function SocialIcon({
  href,
  icon,
  className,
  helpText,
}: {
  href: string
  icon: React.ReactNode
  className?: string
  helpText?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block transition-transform transform will-change-transform group"
    >
      {helpText && (
        <div className="absolute z-20 left-1/2 -translate-x-1/2 flex items-center justify-center w-auto p-3 min-w-[200px] max-w-[250px] text-center transition-all duration-700 border-2 shadow-lg opacity-0 pointer-events-none bg-white -top-1/2 rounded-2xl group-hover:opacity-[97%] group-hover:-top-8 font-[600] text-black">
          {helpText}
        </div>
      )}
      <div
        className={clsx(
          'z-0 relative flex items-center justify-center w-[124px] h-[124px] bg-white shadow-md rounded-2xl',
          className,
        )}
        style={{
          boxShadow: 'rgb(92, 77, 196) 8px 8px 0px 0px',
        }}
      >
        {/* Icon */}
        <div className="text-black">{icon}</div>
      </div>
    </a>
  )
}
