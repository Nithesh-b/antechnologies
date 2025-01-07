"use client"

import { useEffect, useRef } from 'react'

interface SplineEmbedProps {
  url: string
}

export default function SplineEmbed({ url }: SplineEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        const width = iframeRef.current.offsetWidth
        iframeRef.current.style.height = `${width * 0.5625}px` // 16:9 aspect ratio
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial resize

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="w-full">
      <iframe
        ref={iframeRef}
        src={url}
        frameBorder="0"
        width="100%"
        height="100%"
        className="rounded-lg"
      />
    </div>
  )
}

