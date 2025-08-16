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

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
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
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-blue-200/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Majid Khan
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                             <button
                 onClick={() => scrollToSection(homeRef)}
                 className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
               >
                 <span>Home</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
               <button
                 onClick={() => scrollToSection(aboutRef)}
                 className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
               >
                 <User className="w-4 h-4" />
                 <span>About</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
               <button
                 onClick={() => scrollToSection(experienceRef)}
                 className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
               >
                 <Briefcase className="w-4 h-4" />
                 <span>Experience</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
               <button
                 onClick={() => scrollToSection(projectsRef)}
                 className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
               >
                 <Code className="w-4 h-4" />
                 <span>Projects</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
               <button
                 onClick={() => scrollToSection(skillsRef)}
                 className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
               >
                 <Award className="w-4 h-4" />
                 <span>Skills</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
               <button
                 onClick={() => scrollToSection(contactRef)}
                 className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
               >
                 <Mail className="w-4 h-4" />
                 <span>Contact</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-blue-200/50 pt-4 animate-slideDown">
              <button
                onClick={() => scrollToSection(homeRef)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <User size={16} />
                  <span>About</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Briefcase size={16} />
                  <span>Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Code size={16} />
                  <span>Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
              <button
                onClick={() => scrollToSection(skillsRef)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Award size={16} />
                  <span>Skills</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
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
              <div className="inline-block p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full backdrop-blur-sm border border-white/10 mb-6 animate-float">
                <Rocket className="w-10 h-10 text-blue-400 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent neon-glow">
                  Majid Khan
                </span>
              </h1>
                             <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light animate-fadeInUp">
                 Associate Software Engineer
               </h2>
               <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
                 Final-year Computer Engineering student specializing in C, C++, and the MERN stack. 
                 Currently advancing skills in Next.js and TypeScript, crafting scalable, user-centric solutions.
               </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-full font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 animate-glow magnetic"
              >
                <span>Learn More</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
                             <button
                 onClick={() => scrollToSection(contactRef)}
                 className="group border border-blue-300 text-gray-700 px-10 py-5 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-3 magnetic"
               >
                 <span>Get In Touch</span>
                 <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent neon-glow">
              About Me
            </h2>
                         <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp">
               Get to know me better - my background, education, and what drives me in software development.
             </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* About Content */}
                         <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-200/50 hover:bg-white transition-all duration-300 shadow-lg">
               <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500/50 pb-3">Background</h3>
               <p className="text-gray-700 leading-relaxed mb-6">
                 I'm a final-year Computer Engineering student at COMSATS University, Lahore, with a passion for creating innovative software solutions. 
                 My journey in technology began with a strong foundation in programming fundamentals and has evolved into expertise in modern web development.
               </p>
               <p className="text-gray-700 leading-relaxed mb-6">
                 I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have experience with C and C++ programming. 
                 Currently, I'm expanding my skillset to include Next.js and TypeScript, while also exploring emerging technologies like AI, Web3, and blockchain.
               </p>
               <p className="text-gray-700 leading-relaxed">
                 My approach combines technical excellence with user-centric design, ensuring that every project I work on delivers both functionality and exceptional user experience.
               </p>
             </div>

            {/* Education & Contact Info */}
            <div className="space-y-8">
              {/* Education */}
                             <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-200/50 hover:bg-white transition-all duration-300 shadow-lg">
                 <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500/50 pb-3 flex items-center">
                   <GraduationCap className="w-6 h-6 mr-3 text-blue-500" />
                   Education
                 </h3>
                 <div className="space-y-6">
                   <div className="group hover:bg-blue-50 p-4 rounded-lg transition-all duration-300">
                     <h4 className="font-semibold text-gray-800 text-lg mb-2">Bachelor of Computer Engineering</h4>
                     <p className="text-blue-500 font-medium mb-1">COMSATS University, Lahore</p>
                     <p className="text-gray-600 text-sm mb-1">08/2022 - Present</p>
                     <p className="text-gray-700 text-sm">CGPA: 3.14</p>
                   </div>
                   <div className="group hover:bg-blue-50 p-4 rounded-lg transition-all duration-300">
                     <h4 className="font-semibold text-gray-800 text-lg mb-2">Intermediate in Computer Science</h4>
                     <p className="text-blue-400 font-medium mb-1">Government College University, Lahore</p>
                     <p className="text-gray-600 text-sm">08/2020 - 06/2022</p>
                   </div>
                 </div>
               </div>

              {/* Contact Info */}
                             <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-200/50 hover:bg-white transition-all duration-300 shadow-lg">
                 <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500/50 pb-3 flex items-center">
                   <Mail className="w-6 h-6 mr-3 text-blue-500" />
                   Contact Info
                 </h3>
                 <div className="space-y-4">
                   <div className="flex items-center space-x-4 group hover:bg-blue-50 p-3 rounded-lg transition-all duration-300">
                     <Mail className="text-blue-500 group-hover:scale-110 transition-transform" size={18} />
                     <span className="text-gray-800">khanmajid.dev@gmail.com</span>
                   </div>
                   <div className="flex items-center space-x-4 group hover:bg-blue-50 p-3 rounded-lg transition-all duration-300">
                     <Phone className="text-blue-400 group-hover:scale-110 transition-transform" size={18} />
                     <span className="text-gray-800">03274403260</span>
                   </div>
                   <div className="flex items-center space-x-4 group hover:bg-blue-50 p-3 rounded-lg transition-all duration-300">
                     <MapPin className="text-blue-300 group-hover:scale-110 transition-transform" size={18} />
                     <span className="text-gray-800">Lahore, Pakistan</span>
                   </div>
                   <div className="flex items-center space-x-4 group hover:bg-blue-50 p-3 rounded-lg transition-all duration-300">
                     <Github className="text-gray-600 group-hover:scale-110 transition-transform" size={18} />
                     <a href="https://github.com/Majid-1273" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                       github.com/Majid-1273
                     </a>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent neon-glow">
              Work Experience
            </h2>
                         <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp">
               My professional journey in software development and the companies I've had the privilege to work with.
             </p>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
                           <div key={index} className="group hover:bg-blue-50 p-8 rounded-3xl transition-all duration-300 border border-blue-200/50 backdrop-blur-xl hover:border-blue-500/30 bg-white/80 shadow-lg">
               <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                 <div className="flex items-start space-x-6">
                   <div className="p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl group-hover:scale-110 transition-transform">
                     {job.icon}
                   </div>
                   <div>
                     <h3 className="font-bold text-gray-800 text-2xl mb-2">{job.title}</h3>
                     <p className="text-blue-500 font-semibold text-lg">{job.company}</p>
                   </div>
                 </div>
                 <div className="flex flex-col lg:items-end mt-6 lg:mt-0">
                   <span className="text-gray-600 text-lg mb-3">{job.duration}</span>
                   <a 
                     href={job.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 text-lg transition-colors group/link"
                   >
                     <Globe size={16} />
                     <span className="group-hover/link:underline">View Site</span>
                   </a>
                 </div>
               </div>
               <p className="text-gray-700 text-lg leading-relaxed">{job.description}</p>
             </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent neon-glow">
              Personal Projects
            </h2>
                         <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp">
               A showcase of my technical projects and the technologies I've worked with.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                           <div key={index} className="group hover:bg-blue-50 p-8 rounded-3xl transition-all duration-300 border border-blue-200/50 backdrop-blur-xl hover:border-blue-500/30 hover:scale-105 bg-white/80 shadow-lg">
               <div className="flex items-start space-x-4 mb-6">
                 <div className="p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl group-hover:scale-110 transition-transform">
                   {project.icon}
                 </div>
                 <h3 className="font-bold text-gray-800 text-xl">{project.title}</h3>
               </div>
               <p className="text-gray-700 text-base leading-relaxed mb-6">{project.description}</p>
               <div className="flex flex-wrap gap-2">
                 {project.tech.map((tech, techIndex) => (
                   <span 
                     key={techIndex}
                     className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                   >
                     {tech}
                   </span>
                 ))}
               </div>
             </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent neon-glow">
              Skills & Technologies
            </h2>
                         <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp">
               My technical expertise across various programming languages, frameworks, and tools.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
                             <div key={category} className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-200/50 hover:bg-white transition-all duration-300 shadow-lg">
                 <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500/50 pb-3">{category}</h3>
                 <div className="flex flex-wrap gap-3">
                   {skillList.map((skill, index) => (
                     <span 
                       key={index}
                       className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-600 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                     >
                       {skill}
                     </span>
                   ))}
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent neon-glow">
              Get In Touch
            </h2>
                         <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp">
               Ready to collaborate on your next project? Let's create something amazing together.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
                         <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-200/50 hover:bg-white transition-all duration-300 shadow-lg">
               <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500/50 pb-3">Contact Information</h3>
               <div className="space-y-6">
                 <div className="flex items-center space-x-4 group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300">
                   <div className="p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg group-hover:scale-110 transition-transform">
                     <Mail className="text-blue-500" size={20} />
                   </div>
                   <span className="text-gray-800 text-lg">khanmajid.dev@gmail.com</span>
                 </div>
                 <div className="flex items-center space-x-4 group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300">
                   <div className="p-3 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                     <Phone className="text-blue-400" size={20} />
                   </div>
                   <span className="text-gray-800 text-lg">03274403260</span>
                 </div>
                 <div className="flex items-center space-x-4 group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300">
                   <div className="p-3 bg-gradient-to-r from-blue-300/20 to-blue-400/20 rounded-lg group-hover:scale-110 transition-transform">
                     <MapPin className="text-blue-300" size={20} />
                   </div>
                   <span className="text-gray-800 text-lg">Lahore, Pakistan</span>
                 </div>
                 <div className="flex items-center space-x-4 group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300">
                   <div className="p-3 bg-gradient-to-r from-gray-500/20 to-white/20 rounded-lg group-hover:scale-110 transition-transform">
                     <Github className="text-gray-600" size={20} />
                   </div>
                   <a href="https://github.com/Majid-1273" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-lg hover:text-blue-500 transition-colors">
                     github.com/Majid-1273
                   </a>
                 </div>
               </div>
             </div>

            {/* Contact Form */}
                         <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-200/50 hover:bg-white transition-all duration-300 shadow-lg">
               <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500/50 pb-3">Send a Message</h3>
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-3">Name</label>
                   <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleInputChange}
                     className="w-full px-4 py-4 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500 backdrop-blur-sm transition-all duration-300"
                     placeholder="Your Name"
                     required
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-3">Subject</label>
                   <input
                     type="text"
                     name="subject"
                     value={formData.subject}
                     onChange={handleInputChange}
                     className="w-full px-4 py-4 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500 backdrop-blur-sm transition-all duration-300"
                     placeholder="Subject of your message"
                     required
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-3">Message</label>
                   <textarea
                     name="message"
                     value={formData.message}
                     onChange={handleInputChange}
                     rows="5"
                     className="w-full px-4 py-4 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500 backdrop-blur-sm transition-all duration-300 resize-vertical"
                     placeholder="Your message here..."
                     required
                   />
                 </div>
                                 <button
                   type="submit"
                   className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-2xl animate-glow magnetic flex items-center justify-center space-x-2"
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
       <footer className="bg-white/80 backdrop-blur-md border-t border-blue-200/50 py-12">
         <div className="container mx-auto px-6 text-center">
           <div className="mb-8">
             <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
               Majid Khan
             </h3>
             <p className="text-gray-600">
               © 2025 Majid Khan. All rights reserved.
             </p>
           </div>
           
           <div className="flex justify-center space-x-8">
             <a href="https://github.com/Majid-1273" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
               <Github size={28} />
             </a>
             <a href="mailto:khanmajid.dev@gmail.com" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
               <Mail size={28} />
             </a>
           </div>
         </div>
       </footer>
    </div>
  );
};

export default Portfolio;