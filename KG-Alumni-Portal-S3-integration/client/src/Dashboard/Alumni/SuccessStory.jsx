"use client"

import { useState, useEffect, useRef } from "react"
import {
  MapPin,
  Award,
  Briefcase,
  Code,
  Star,
  Search,
  ChevronRight,
  ChevronLeft,
  Linkedin,
  Twitter,
  Globe,
  Mail,
} from "lucide-react"

const SuccessStory = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInView, setIsInView] = useState({})
  const featuredRef = useRef(null)

  const alumniData = [
    {
      alumniImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Karan.jpg-drvOGxQNERLLYIUidLK5EWbgSScpRn.jpeg",
      name: "Ramesh Kumar",
      currentJob: "Software Engineer at Google",
      role: "Frontend Developer | React, JavaScript, TypeScript",
      achievements: "Winner of Tech Innovator Award 2024, Speaker at React Conf",
      description:
        "With over 5 years of experience in web development, I have contributed to multiple high-scale projects, specializing in building dynamic and interactive web applications that serve millions of users worldwide. My focus on performance optimization has resulted in significant improvements in application load times.",
      location: "San Francisco, USA",
      category: "Technology",
      featured: true,
      graduationYear: "2018",
      socialLinks: {
        linkedin: "https://linkedin.com/in/karan-sharma",
        twitter: "https://twitter.com/karansharma",
        website: "https://karansharma.dev",
      },
      testimonial:
        "The education and mentorship I received during my time at the university laid the foundation for my success in the tech industry. The practical approach to learning and emphasis on problem-solving skills has been invaluable in my career.",
    },
    {
      alumniImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aaditaya%20Kumar.jpg-oFrZVQsmzbRVB9yCQgvTLkruXtP76m.jpeg",
      name: "Aaditaya Kumar",
      currentJob: "Data Scientist at Amazon",
      role: "Machine Learning | AI | Python | Data Analytics",
      achievements: "Best Data Scientist Award 2023, Author of AI Trends Report",
      description:
        "Aaditaya has worked extensively in AI and machine learning, building data models that power recommendation systems and business insights. His work has directly contributed to a 15% increase in customer engagement and a 23% improvement in conversion rates for Amazon's product recommendations.",
      location: "Seattle, USA",
      category: "Data Science",
      featured: true,
      graduationYear: "2019",
      socialLinks: {
        linkedin: "https://linkedin.com/in/aaditaya-kumar",
        twitter: "https://twitter.com/aaditayak",
        website: "https://aaditayakumar.com",
      },
      testimonial:
        "The collaborative environment and cutting-edge curriculum prepared me for the challenges of working in data science. The professors' industry connections helped me secure internships that eventually led to my current position.",
    },
    {
      alumniImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anitha.jpg-XSCxKQ4a83KnhKsfYXNjYKFluRGMXR.jpeg",
      name: "Anitha Chen",
      currentJob: "Product Manager at Microsoft",
      role: "Product Strategy | UX | Agile | Roadmap Planning",
      achievements: "Led the launch of Microsoft Teams features, Forbes 30 Under 30",
      description:
        "Anitha transitioned from software development to product management, leading high-impact features that enhance user productivity. She has successfully managed cross-functional teams to deliver products that have improved collaboration for over 250,000 enterprise users.",
      location: "New York, USA",
      category: "Management",
      featured: false,
      graduationYear: "2017",
      socialLinks: {
        linkedin: "https://linkedin.com/in/anitha-chen",
        twitter: "https://twitter.com/anithachen",
        email: "anitha.chen@example.com",
      },
    },
    {
      alumniImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arjun.jpg-DGZvqlWOWGcBWuP8IhhB7j0Ff8xl2D.jpeg",
      name: "Arjun Williams",
      currentJob: "Cybersecurity Analyst at IBM",
      role: "Network Security | Ethical Hacking | Cloud Security",
      achievements: "Developed enterprise-grade security solutions, Featured in CyberSecurity Today",
      description:
        "Arjun has protected major financial institutions from cyber threats and is a key contributor to IBM's security research. His innovative approach to threat detection has prevented potential breaches worth millions in damages for Fortune 500 clients.",
      location: "Austin, USA",
      category: "Security",
      featured: false,
      graduationYear: "2020",
      socialLinks: {
        linkedin: "https://linkedin.com/in/arjun-williams",
        twitter: "https://twitter.com/arjunwilliams",
        website: "https://arjunwilliams.net",
      },
    },
    {
      alumniImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amudha%20Vanan.jpg-5v0AbELJXfqEtBY8DdomVGHJDFZ36B.jpeg",
      name: "Amudha Vanan",
      currentJob: "UI/UX Designer at Adobe",
      role: "Figma | Adobe XD | User Research | Visual Design",
      achievements: "Designed award-winning interfaces, Speaker at UX Global Summit",
      description:
        "Amudha focuses on creating intuitive and visually appealing designs that improve user engagement and experience. His design system implementation at Adobe has been adopted across multiple product lines, creating a cohesive experience for millions of creative professionals.",
      location: "Los Angeles, USA",
      category: "Design",
      featured: true,
      graduationYear: "2019",
      socialLinks: {
        linkedin: "https://linkedin.com/in/amudha-vanan",
        twitter: "https://twitter.com/amudhavanan",
        website: "https://amudhavanan.design",
      },
      testimonial:
        "The design program's emphasis on user-centered thinking and practical projects gave me the portfolio and skills I needed to land my dream job. The alumni network continues to be a valuable resource for professional growth.",
    },
  ]

  const categories = ["All", "Technology", "Data Science", "Management", "Security", "Design"]

  const filteredAlumni = alumniData.filter(
    (alumni) =>
      (selectedFilter === "All" || alumni.category === selectedFilter) &&
      (alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.currentJob.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.role.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.3 },
    )

    const elements = document.querySelectorAll(".alumni-card")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [filteredAlumni])

  useEffect(() => {
    const featuredAlumni = filteredAlumni.filter((alumni) => alumni.featured)
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === featuredAlumni.length - 1 ? 0 : prev + 1))
    }, 8000)

    return () => clearInterval(interval)
  }, [filteredAlumni])

  const featuredAlumni = filteredAlumni.filter((alumni) => alumni.featured)
  const regularAlumni = filteredAlumni.filter((alumni) => !alumni.featured)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === featuredAlumni.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? featuredAlumni.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Karan.jpg-drvOGxQNERLLYIUidLK5EWbgSScpRn.jpeg')] bg-cover bg-center blur-sm"></div>
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>

        {/* <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Alumni Success Stories</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Discover how our graduates are making an impact in their fields and inspiring the next generation of
              professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-all shadow-lg">
                Join Our Network
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all">
                Share Your Story
              </button>
            </div>
          </div>
        </div> */}

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, job, or skills..."
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Alumni Carousel */}
        {featuredAlumni.length > 0 && (
          <div className="mb-24" ref={featuredRef}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Star className="text-yellow-500 mr-3" size={28} />
              Featured Alumni
            </h2>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-lg transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>

              <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-lg transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="relative h-[600px] md:h-[500px]">
                {featuredAlumni.map((alumni, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === activeIndex ? "opacity-100 z-20" : "opacity-0 z-10"
                    }`}
                  >
                    <div className="h-full flex flex-col md:flex-row">
                      <div className="md:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 md:bg-gradient-to-r md:from-blue-900/80 md:to-transparent z-10"></div>
                        <img
                          src={alumni.alumniImage || "/placeholder.svg"}
                          alt={alumni.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="md:w-1/2 bg-gradient-to-r from-blue-800 to-indigo-900 p-8 md:p-12 flex flex-col justify-center relative">
                        <div className="absolute top-0 right-0 mt-8 mr-8">
                          <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center">
                            <Star size={12} className="mr-1" />
                            FEATURED ALUMNI
                          </span>
                        </div>

                        <div className="md:max-w-lg">
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{alumni.name}</h3>
                          <p className="text-blue-200 text-xl mb-1">{alumni.currentJob}</p>
                          <p className="text-blue-300 mb-6">Class of {alumni.graduationYear}</p>

                          <div className="bg-white/10 p-4 rounded-lg mb-6 backdrop-blur-sm">
                            <p className="text-white italic">"{alumni.testimonial}"</p>
                          </div>

                          <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                              <Code size={20} className="text-blue-300 mr-3 mt-1 flex-shrink-0" />
                              <p className="text-white">{alumni.role}</p>
                            </div>

                            <div className="flex items-start">
                              <Award size={20} className="text-blue-300 mr-3 mt-1 flex-shrink-0" />
                              <p className="text-white">{alumni.achievements}</p>
                            </div>

                            <div className="flex items-start">
                              <MapPin size={20} className="text-blue-300 mr-3 mt-1 flex-shrink-0" />
                              <p className="text-white">{alumni.location}</p>
                            </div>
                          </div>

                          <div className="flex space-x-3">
                            {alumni.socialLinks.linkedin && (
                              <a
                                href={alumni.socialLinks.linkedin}
                                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                              >
                                <Linkedin size={20} className="text-white" />
                              </a>
                            )}
                            {alumni.socialLinks.twitter && (
                              <a
                                href={alumni.socialLinks.twitter}
                                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                              >
                                <Twitter size={20} className="text-white" />
                              </a>
                            )}
                            {alumni.socialLinks.website && (
                              <a
                                href={alumni.socialLinks.website}
                                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                              >
                                <Globe size={20} className="text-white" />
                              </a>
                            )}
                            {alumni.socialLinks.email && (
                              <a
                                href={`mailto:${alumni.socialLinks.email}`}
                                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                              >
                                <Mail size={20} className="text-white" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-2">
                {featuredAlumni.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Regular Alumni Grid */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">All Alumni Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularAlumni.map((alumni, index) => (
              <div
                id={`alumni-card-${index}`}
                key={index}
                className={`alumni-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 ${
                  isInView[`alumni-card-${index}`] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-70"></div>
                  <img
                    src={alumni.alumniImage || "/placeholder.svg"}
                    alt={alumni.name}
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                      {alumni.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{alumni.name}</h3>
                    <p className="text-gray-200">{alumni.currentJob}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Code size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">ROLE & SKILLS</h4>
                        <p className="text-gray-800">{alumni.role}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Award size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">ACHIEVEMENTS</h4>
                        <p className="text-gray-800">{alumni.achievements}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Briefcase size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">EXPERIENCE</h4>
                        <p className="text-gray-800 line-clamp-3">{alumni.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MapPin size={18} className="text-blue-600 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">LOCATION</h4>
                        <p className="text-gray-800">{alumni.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                    <p className="text-sm text-gray-500">Class of {alumni.graduationYear}</p>

                    <div className="flex space-x-2">
                      {alumni.socialLinks.linkedin && (
                        <a
                          href={alumni.socialLinks.linkedin}
                          className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {alumni.socialLinks.twitter && (
                        <a
                          href={alumni.socialLinks.twitter}
                          className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                        >
                          <Twitter size={18} />
                        </a>
                      )}
                      {alumni.socialLinks.website && (
                        <a
                          href={alumni.socialLinks.website}
                          className="p-2 text-gray-500 hover:text-gray-800 transition-colors"
                        >
                          <Globe size={18} />
                        </a>
                      )}
                      {alumni.socialLinks.email && (
                        <a
                          href={`mailto:${alumni.socialLinks.email}`}
                          className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <Mail size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
            <div className="mb-6">
              <Search size={64} className="mx-auto text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No alumni found</h3>
            <p className="text-gray-600 mb-6">We couldn't find any alumni matching your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedFilter("All")
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      {/* <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Alumni Network</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Connect with fellow graduates, access exclusive resources, and stay updated on alumni events and
            opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-all shadow-lg">
              Register Now
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default SuccessStory;
