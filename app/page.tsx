import Header from './components/header'
import Footer from './components/footer'
import ServiceSection from './components/service-section'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background with curved edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800">
            {/* Curved edge at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16">
              <svg 
                className="absolute bottom-0 w-full h-16" 
                preserveAspectRatio="none" 
                viewBox="0 0 1440 54"
              >
                <path 
                  fill="white" 
                  d="M0 54h1440V28.5C1360 10 1120 0 720 0S80 10 0 28.5V54z"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-6 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Welcome to AN Technologies
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Empowering businesses with cutting-edge technology solutions
              </p>
              
              {/* Call-to-action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200">
                  Get Started
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
          </div>
        </section>

        {/* Services Sections */}
        <ServiceSection 
          title="Cloud Computing" 
          description="Scalable and flexible cloud solutions to meet your business needs."
          imageUrl="https://my.spline.design/techinspired3dassetscloudcomputing-123184dabc0789cc095d893848013842/"
          features={[
            "Infrastructure as a Service (IaaS)",
            "Platform as a Service (PaaS)",
            "Cloud migration and optimization",
            "Multi-cloud and hybrid cloud solutions"
          ]}
          isSplineEmbed={true}
        />
        <ServiceSection 
          title="DevOps" 
          description="Streamline your development and operations with our expert DevOps services."
          imageUrl="https://my.spline.design/retrofuturisticcircuitloop-4a787dfe6e1c14bd8f6145a8069037ee/"
          features={[
            "Continuous Integration and Continuous Deployment (CI/CD)",
            "Infrastructure as Code (IaC)",
            "Containerization and orchestration",
            "Monitoring and logging solutions"
          ]}
          isSplineEmbed={true}
          reversed
        />
        <ServiceSection 
          title="Platform Engineering" 
          description="Build robust and scalable platforms tailored to your requirements."
          imageUrl="https://my.spline.design/matrix-b664bff0ceac7cb4bb1e5310abce5c31/"
          features={[
            "Microservices architecture design",
            "API development and management",
            "Scalable database solutions",
            "Performance optimization and tuning"
          ]}
          isSplineEmbed={true}
        />
        <ServiceSection 
          title="Data and AI" 
          description="Harness the power of data and artificial intelligence to drive your business forward."
          imageUrl="https://my.spline.design/droid-68eb6bd81b9d500f22271ba3d0b605c0/"
          features={[
            "Big data processing and analytics",
            "Machine Learning model development",
            "Natural Language Processing (NLP) solutions",
            "AI-powered business intelligence"
          ]}
          isSplineEmbed={true}
          reversed
        />
        <ServiceSection 
          title="Fullstack Development" 
          description="End-to-end development services to bring your ideas to life."
          imageUrl="https://my.spline.design/robotfollowcursorforlandingpage-98974077951ecf1a7f476e9228da599b/"
          features={[
            "Custom web application development",
            "Mobile app development (iOS and Android)",
            "Frontend development with modern frameworks",
            "Backend development and API integration"
          ]}
          isSplineEmbed={true}
        />

        {/* Call to Action Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">Contact us today to learn how AN Technologies can help you achieve your goals.</p>
          </div>
        </section>
      </main>
      <Footer />
      <Link href={process.env.NODE_ENV === 'production' ? '/antechnologies/about' : '/about'}>
        About
      </Link>
    </div>
  )
}

