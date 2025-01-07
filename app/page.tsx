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
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to AN Technologies</h1>
            <p className="text-xl mb-8">Empowering businesses with cutting-edge technology solutions</p>
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
          imageUrl="/placeholder.svg?height=400&width=400&text=Fullstack+Development"
          features={[
            "Custom web application development",
            "Mobile app development (iOS and Android)",
            "Frontend development with modern frameworks",
            "Backend development and API integration"
          ]}
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

