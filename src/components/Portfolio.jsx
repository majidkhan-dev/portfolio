import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, ExternalLink, Menu, X, Code, Briefcase, GraduationCap, Award, User, Download, Globe, ArrowRight, Star, Zap, Target, Rocket } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const resumeRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the email content with the user's name at the end
    const emailBody = `${formData.message}\n\nBest regards,\n${formData.name}`;
    
    // Create Gmail URL with pre-filled information
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=khanmajid.dev@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', subject: '', message: '' });
  };

  const workExperience = [
    {
      title: "Frontend Developer - React.js",
      company: "Samandarpaar",
      duration: "08/2025 - 08/2025",
      url: "https://samandarpaar.com/",
      description: "Developed responsive React.js site for UK customers to order from Pakistani brands. Implemented best SEO practices for higher visibility.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Full Stack Developer - MERN",
      company: "Innovix99",
      duration: "06/2025 - 07/2025",
      url: "https://innovix99.com/",
      description: "Added admin dashboard for CRUD & dynamic SEO updates.",
      icon: <Code className="w-6 h-6" />
    },
    // {
    //   title: "Full Stack Developer - MERN",
    //   company: "Farmer App",
    //   duration: "04/2025 - 06/2025",
    //   url: "https://vetcare-frontend.vercel.app/",
    //   description: "Managed chicken batches, health, vaccination schedules and auto located nearby veterinary services.",
    //   icon: <Target className="w-6 h-6" />
    // },
    {
      title: "Frontend Developer - React.js",
      company: "Layali Clothing Brand",
      duration: "10/2024 - 11/2024",
      url: "https://layaliart.com/",
      description: "Built bilingual clothing site (Arabic & English) with responsive layouts with interactive product displays.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Frontend Developer - React.js",
      company: "Ontrac IT Solutions",
      duration: "08/2023 - 10/2023",
      url: "https://ontrac.biz/",
      description: "Developed a bilingual (Arabic & English) IT solutions website using React.js to showcase services and collect client inquiries.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const projects = [
    {
      title: "E-commerce Backend Project",
      description: "Developed with Express.js and MSSQL for an eCommerce platform. Features: User authentication, product management, orders, and ACID-compliant transactions.",
      tech: ["Express.js", "MSSQL", "Node.js"],
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "Library Management System",
      description: "Developed in C as a Programming Fundamentals project. Features: Book issuance, return tracking, and inventory management.",
      tech: ["C", "Data Structures", "File Handling"],
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Sale Purchase App",
      description: "Created in C++ as an Object-Oriented Programming project. Features: Product catalog, purchase and sales tracking, and user authentication.",
      tech: ["C++", "OOP", "Data Management"],
      icon: <Target className="w-8 h-8" />
    }
  ];

  const skills = {
    "Frontend": ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    "Backend": ["Express.js", "Node.js", "EJS"],
    "Database": ["MongoDB", "MSSQL"],
    "Programming": ["C", "C++", "JavaScript"],
    "Tools": ["AutoDesk AutoCAD", "Git", "VS Code"],
    "Learning": ["Next.js", "TypeScript", "AI", "Web3", "Blockchain", "ML"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Floating Particles */}
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Majid Khan
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection(homeRef)}
                className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection(resumeRef)}
                className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
              >
                <User className="w-4 h-4" />
                <span>Resume</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-slideDown">
              <button
                onClick={() => scrollToSection(homeRef)}
                className="block w-full text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
              <button
                onClick={() => scrollToSection(resumeRef)}
                className="block w-full text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <User size={16} />
                  <span>Resume</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="block w-full text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Mail size={16} />
                  <span>Contact</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={homeRef} className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="inline-block p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/10 mb-6 animate-float">
                <Rocket className="w-10 h-10 text-blue-400 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-glow">
                  Majid Khan
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/80 mb-8 font-light animate-fadeInUp">
                Associate Software Engineer
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
                Final-year Computer Engineering student specializing in C, C++, and the MERN stack. 
                Currently advancing skills in Next.js and TypeScript, crafting scalable, user-centric solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection(resumeRef)}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 animate-glow magnetic"
              >
                <span>View Resume</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="group border border-white/20 text-white px-10 py-5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-3 magnetic"
              >
                <span>Get In Touch</span>
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section ref={resumeRef} className="py-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Resume Document */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover-lift">
            {/* Header with Download Button */}
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm p-8 relative border-b border-white/10">
              <a 
                href="/resume/Resume-Majid.pdf" 
                download="Resume-Majid.pdf"
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm border border-white/20 hover:scale-105"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Download PDF</span>
              </a>
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Majid Khan
                </h1>
                <h2 className="text-xl md:text-2xl text-white/80 mb-6">Associate Software Engineer</h2>
                <p className="text-white/70 leading-relaxed max-w-3xl text-lg">
                  Final-year Computer Engineering student specializing in C, C++, and the MERN stack. 
                  Currently advancing skills in Next.js and TypeScript, with a focus on full-stack 
                  development and crafting scalable, user-centric solutions.
                </p>
              </div>
            </div>

            {/* Resume Content */}
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Left Column */}
              <div className="lg:col-span-1 bg-white/5 backdrop-blur-sm p-8 border-r border-white/10">
                {/* Contact Info */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-blue-500/50 pb-3">CONTACT</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                      <Mail className="text-blue-400 mt-1 group-hover:scale-110 transition-transform" size={18} />
                      <div>
                        <p className="text-sm text-white/60">Email</p>
                        <p className="text-sm font-medium text-white">khanmajid.dev@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                      <Phone className="text-green-400 mt-1 group-hover:scale-110 transition-transform" size={18} />
                      <div>
                        <p className="text-sm text-white/60">Phone</p>
                        <p className="text-sm font-medium text-white">03274403260</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                      <MapPin className="text-purple-400 mt-1 group-hover:scale-110 transition-transform" size={18} />
                      <div>
                        <p className="text-sm text-white/60">Location</p>
                        <p className="text-sm font-medium text-white">Lahore, Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                      <Github className="text-white/80 mt-1 group-hover:scale-110 transition-transform" size={18} />
                      <div>
                        <p className="text-sm text-white/60">GitHub</p>
                        <a href="https://github.com/Majid-1273" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                          github.com/Majid-1273
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-blue-500/50 pb-3">EDUCATION</h3>
                  <div className="space-y-6">
                    <div className="group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
                      <h4 className="font-semibold text-white text-sm mb-2">Bachelor of Computer Engineering</h4>
                      <p className="text-blue-400 font-medium text-sm mb-1">COMSATS University, Lahore</p>
                      <p className="text-white/60 text-xs mb-1">08/2022 - Present</p>
                      <p className="text-white/80 text-xs">CGPA: 3.14</p>
                    </div>
                    <div className="group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
                      <h4 className="font-semibold text-white text-sm mb-2">Intermediate in Computer Science</h4>
                      <p className="text-purple-400 font-medium text-sm mb-1">Government College University, Lahore</p>
                      <p className="text-white/60 text-xs">08/2020 - 06/2022</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-blue-500/50 pb-3">SKILLS</h3>
                  <div className="space-y-6">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <div key={category} className="group">
                        <h4 className="font-semibold text-white text-sm mb-3">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill, index) => (
                            <span 
                              key={index}
                              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-blue-500/50 pb-3">LANGUAGES</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                      <span className="text-sm font-medium text-white">English</span>
                      <span className="text-xs text-white/60">Professional</span>
                    </div>
                    <div className="flex justify-between items-center group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                      <span className="text-sm font-medium text-white">Urdu</span>
                      <span className="text-xs text-white/60">Native</span>
                    </div>
                    <div className="flex justify-between items-center group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                      <span className="text-sm font-medium text-white">German</span>
                      <span className="text-xs text-white/60">Limited Working</span>
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-blue-500/50 pb-3">INTERESTS</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "AI", "Web3", "Blockchain", "ML"].map((interest, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 p-8">
                {/* Work Experience */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-blue-500/50 pb-3">WORK EXPERIENCE</h3>
                  <div className="space-y-8">
                    {workExperience.map((job, index) => (
                      <div key={index} className="group hover:bg-white/5 p-6 rounded-xl transition-all duration-300 border-l-4 border-blue-500/50 hover:border-blue-400">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                              {job.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-white text-lg mb-1">{job.title}</h4>
                              <p className="text-blue-400 font-semibold">{job.company}</p>
                            </div>
                          </div>
                          <div className="flex flex-col sm:items-end mt-4 sm:mt-0">
                            <span className="text-white/60 text-sm mb-2">{job.duration}</span>
                            <a 
                              href={job.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm transition-colors group/link"
                            >
                              <Globe size={14} />
                              <span className="group-hover/link:underline">View Site</span>
                            </a>
                          </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">{job.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal Projects */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-blue-500/50 pb-3">PERSONAL PROJECTS</h3>
                  <div className="space-y-8">
                    {projects.map((project, index) => (
                      <div key={index} className="group hover:bg-white/5 p-6 rounded-xl transition-all duration-300 border-l-4 border-green-500/50 hover:border-green-400">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="p-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                            {project.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-white text-lg mb-2">{project.title}</h4>
                            <p className="text-white/70 text-sm leading-relaxed mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certificates */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-blue-500/50 pb-3">CERTIFICATES</h3>
                  <div className="space-y-8">
                    <div className="group hover:bg-white/5 p-6 rounded-xl transition-all duration-300 border-l-4 border-orange-500/50 hover:border-orange-400">
                      <h4 className="font-bold text-white text-lg mb-2">Complete 2024 Web Dev Bootcamp</h4>
                      <p className="text-orange-400 font-semibold mb-2">Udemy</p>
                      <p className="text-white/60 text-sm mb-3">01/2024 - 10/2024</p>
                      <a 
                        href="https://www.udemy.com/certificate/UC-ac4dff8d-66e7-4ee4-a42f-d1f5f37633b3/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 text-sm transition-colors group/link"
                      >
                        <ExternalLink size={14} />
                        <span className="group-hover/link:underline">View Certificate</span>
                      </a>
                    </div>
                    <div className="group hover:bg-white/5 p-6 rounded-xl transition-all duration-300 border-l-4 border-red-500/50 hover:border-red-400">
                      <h4 className="font-bold text-white text-lg mb-2">MERN Stack Developer</h4>
                      <p className="text-red-400 font-semibold mb-2">PNY Trainings</p>
                      <p className="text-white/60 text-sm">03/2024 - 09/2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-glow">
              Get In Touch
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto animate-fadeInUp">
              Ready to collaborate on your next project? Let's create something amazing together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-white border-b-2 border-blue-500/50 pb-3">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <span className="text-white text-lg">khanmajid.dev@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="text-green-400" size={20} />
                  </div>
                  <span className="text-white text-lg">03274403260</span>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <span className="text-white text-lg">Lahore, Pakistan</span>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-gray-500/20 to-white/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Github className="text-white/80" size={20} />
                  </div>
                  <a href="https://github.com/Majid-1273" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-blue-400 transition-colors">
                    github.com/Majid-1273
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-white border-b-2 border-blue-500/50 pb-3">Send a Message</h3>
                             <form onSubmit={handleSubmit} className="space-y-6">
                                   <div>
                    <label className="block text-sm font-medium text-white/80 mb-3">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                 <div>
                   <label className="block text-sm font-medium text-white/80 mb-3">Subject</label>
                   <input
                     type="text"
                     name="subject"
                     value={formData.subject}
                     onChange={handleInputChange}
                     className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300"
                     placeholder="Subject of your message"
                     required
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-white/80 mb-3">Message</label>
                   <textarea
                     name="message"
                     value={formData.message}
                     onChange={handleInputChange}
                     rows="5"
                     className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 resize-vertical"
                     placeholder="Your message here..."
                     required
                   />
                 </div>
                                 <button
                   type="submit"
                   className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-2xl animate-glow magnetic flex items-center justify-center space-x-2"
                 >
                   <Mail className="w-5 h-5" />
                   <span>Open in Gmail</span>
                 </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Majid Khan
            </h3>
            <p className="text-white/60">
              © 2025 Majid Khan. All rights reserved.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/Majid-1273" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
              <Github size={28} />
            </a>
            <a href="mailto:khanmajid.dev@gmail.com" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;