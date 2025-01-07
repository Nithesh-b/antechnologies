import Image from 'next/image'
import SplineEmbed from './spline-embed'

interface ServiceSectionProps {
  title: string
  description: string
  imageUrl: string
  features: string[]
  reversed?: boolean
  isSplineEmbed?: boolean
}

export default function ServiceSection({ 
  title, 
  description, 
  imageUrl, 
  features, 
  reversed = false,
  isSplineEmbed = false
}: ServiceSectionProps) {
  return (
    <section className={`py-20 ${reversed ? 'bg-gray-50' : 'bg-white'}`}>
      <div className={`container mx-auto flex flex-wrap items-center ${reversed ? 'flex-row-reverse' : ''}`}>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          {isSplineEmbed ? (
            <SplineEmbed url={imageUrl} />
          ) : (
            <div className="relative w-full h-0 pb-[56.25%]">
              <Image 
                src={imageUrl} 
                alt={title} 
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 mb-6">{description}</p>
          <ul className="list-disc list-inside text-gray-600">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

