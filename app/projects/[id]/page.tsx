import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Calendar, Users, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {Tooltip} from "antd"

const projectsData = {
  1: {
    name: "Emergi Mentors",
    description:
      "A comprehensive scalable mentorship web platform designed to connect mentors and mentees for personalized guidance and professional development, featuring real-time booking, user profiles, and integrated payment processing.",
    bannerImage: "/images/projects/emergimentors-banner.png",
    featuredImage: "/images/projects/emergi-featured-600.png",
    brandColor: "from-purple-600 to-indigo-700",
    images: [
      {
        url: '/emergi/homepage.png',
        title: "Platform Homepage",
        description: "Clean, professional homepage showcasing mentorship opportunities and featured mentors",
      },
      {
        url: '/emergi/mentor-directory.png',
        title: "Mentor Directory",
        description: "Comprehensive mentor profiles with expertise, ratings, availability, and booking options",
      },
      {
        url: '/emergi/booking.png',
        title: "Booking & Scheduling",
        description: "Advanced calendar integration with real-time availability and instant booking confirmation",
      },
      {
        url: '/emergi/real-time-communication.png',
        title: "Real-time Communication",
        description: "Socket.io powered live chat system for seamless mentor-mentee communication",
      },
      {
        url: '/emergi/payment.png',
        title: "Payment Processing",
        description: "Secure Stripe integration for session payments and subscription management",
      },
      {
        url: '/emergi/dashboard.png',
        title: "Analytics Dashboard",
        description: "Comprehensive reporting system for mentors and platform administrators",
      },
    ],
    tags: ["Laravel", "Node.js", "Next.js", "Socket.io", "Stripe"],
    category: "Mentorship Platform",
    industry: "Education & Professional Development",
    country: "🇦🇺 Australia",
    overview:
      "Emergi Mentors is a robust platform aimed at connecting mentors and mentees for personalized guidance and professional development. The platform leverages modern technologies to ensure scalability, performance, and security, creating a seamless experience for professional growth and knowledge sharing.",
    goals: [
      "Create a scalable mentorship platform connecting professionals globally",
      "Implement real-time booking system with calendar integration",
      "Build secure payment processing for mentorship sessions",
      "Develop real-time communication features for seamless interaction",
      "Create comprehensive user profiles and rating systems",
      "Implement resource sharing and product marketplace functionality",
    ],
    outcome:
      "Successfully launched in Australia with 500+ registered mentors and 2,000+ mentees. Platform facilitates over 1,000 mentorship sessions monthly with 95% user satisfaction rate. Integrated payment system processes $50K+ monthly transactions with zero security incidents.",
    features: [
      "User Management System",
      "1:1 Consultation Management",
      "Booking/Scheduling & Calendar Integration",
      "Resource Sharing/Product Marketplace",
      "Asset Management System",
      "Real-Time Communication Chat",
      "Comprehensive Dashboards and Reporting",
      "Full-fledged User Profiles",
      "Stripe Payment Processing Integration",
      "Availability and Notification Settings",
      "Ratings and Testimonials System",
    ],
    techStack: [
      { name: "Laravel", description: "Backend framework for robust API development and business logic" },
      { name: "Node.js", description: "Real-time server for chat functionality and live updates" },
      { name: "Next.js", description: "Frontend framework for server-side rendering and optimal performance" },
      { name: "Socket.io", description: "Real-time bidirectional communication for live chat features" },
      { name: "Stripe", description: "Secure payment processing and subscription management" },
    ],
    liveDemo: "https://emergimentors.com.au/",
    duration: "4 months",
    teamSize: "4 developers",
  },
  2: {
    name: "Alhanna Clinic",
    description:
      "A comprehensive healthcare web and mobile platform for UAE's premier dermatology and aesthetics clinic, featuring online appointment booking, multilingual support, and integrated patient management system.",
    bannerImage: "/images/projects/alhanna-banner.png",
    featuredImage: "/images/projects/alhanna-featured-600.png",
    brandColor: "from-green-600 to-emerald-700",
    images: [
      {
        url: "/alhanna/homepage.png",
        title: "Multilingual Homepage",
        description: "Professional healthcare website with Arabic and English language support",
      },
      {
        url: "/alhanna/admin-panel-detail-order-managment.jpg",
        title: "Admin Panel - Order Management",
        description: "Efficiently manage patient orders, appointments, and service requests through a user-friendly admin interface.",
      },
      {
        url: "/alhanna/services-detail-page.png",
        title: "Add to cart Process",
        description: "Easily select healthcare services, add them to your cart, and view available time slots for seamless appointment booking.",
      },
      {
        url: "/alhanna/dashboard-managment.jpg",
        title: "Admin Panel - Dashboard Management",
        description: "Overview of key metrics, patient statistics, and service performance.",
      },
      {
        url: "/alhanna/mobile.png",
        title: "Mobile Application",
        description: "Flutter-based mobile app for iOS and Android with native performance",
      },
      {
        url: "/alhanna/checkout-system-tabby-tamara.png",
        title: "Checkout System",
        description: "Complete your booking with a secure checkout, instant appointment confirmation, and direct WhatsApp support for assistance.",
      },
    ],
    tags: ["Next.js", "Laravel", "React.js", "Flutter"],
    category: "Healthcare Platform",
    industry: "Healthcare & Medical Services",
    country: "🇦🇪 UAE",
    overview:
      "The Al Hanna Clinic website and Mobile App offers comprehensive healthcare services for dermatology and aesthetics. The platform provides seamless patient experience with online appointment booking, multilingual support, and integrated communication systems, serving UAE's diverse population with cutting-edge medical technology.",
    goals: [
      "Develop multilingual healthcare platform for UAE market",
      "Create seamless online appointment booking system",
      "Build mobile application for enhanced patient accessibility",
      "Implement comprehensive service listings and doctor profiles",
      "Integrate WhatsApp communication for patient support",
      "Showcase treatment results with before-after galleries",
    ],
    outcome:
      "Successfully serving 10,000+ patients across UAE with 40% increase in online bookings. Mobile app downloaded 5,000+ times with 4.8-star rating. Multilingual support increased international patient inquiries by 60%. WhatsApp integration handles 200+ daily patient queries.",
    features: [
      "Online Appointment Booking System",
      "Comprehensive Service Listings",
      "Doctor Profiles with Specializations",
      "Contact Forms and Patient Inquiries",
      "Clinic Location with Interactive Maps",
      "WhatsApp Chat Support Integration",
      "Patient Testimonials and Reviews",
      "Before-After Treatment Galleries",
      "Multilingual Support (Arabic/English)",
      "Mobile-Responsive Design",
      "SEO-Optimized Content Structure",
    ],
    techStack: [
      { name: "Next.js", description: "Frontend framework for fast, SEO-optimized web application" },
      { name: "Laravel", description: "Backend API for appointment management and patient data" },
      { name: "React.js", description: "Interactive UI components for enhanced user experience" },
      { name: "Flutter", description: "Cross-platform mobile app for iOS and Android" },
    ],
    liveDemo: "https://alhannaclinic.ae/",
    duration: "3 months",
    teamSize: "3 developers",
  },
  3: {
    name: "Hot Seats",
    description:
      "An innovative AI-powered platform that gives fans exclusive, real-time access to events, restaurants, and local experiences through geo-based offers and event discovery with city-wide activations.",
    bannerImage: "/images/projects/hotseats-banner.png",
    featuredImage: "/images/projects/hotseats-featured-600.png",
    brandColor: "from-red-600 to-rose-700",
    images: [
      {
        url: "/hotseat/hotseat.jpg",
        title: "App Onboarding",
        description: "Sleek onboarding experience designed for speed, simplicity, and spontaneous discovery",
      },
      {
        url: "/hotseat/heatmap.jpeg",
        title: "Geo-Powered Heatmap",
        description: "Real-time location-based offers visualization with AI-powered recommendations",
      },
      {
        url: "/hotseat/dashboard2.jpg",
        title: "Event Discovery",
        description: "AI-curated event feed based on user preferences and location data",
      },
      {
        url: "/hotseat/fast-pass.jpg",
        title: "Fast Pass Experience",
        description: "Quick booking system with VIP access and skip-the-line functionality",
      },
      {
        url: "/hotseat/dashboard.jpg",
        title: "Business Backend",
        description: "Comprehensive dashboard for businesses to manage offers and track engagement",
      },
      {
        url: "/hotseat/qr-code.jpg",
        title: "QR Code & Loyalty",
        description: "QR code activation system with fan loyalty rewards and real-time city activations",
      },
    ],
    tags: ["React Native", "Next.js", "Node.js", "AI"],
    category: "Event Discovery Platform",
    industry: "Entertainment & Hospitality",
    country: "🇺🇸 USA",
    overview:
      "Hot Seats is an AI-powered platform designed to give fans exclusive, real-time access to events, restaurants, and local experiences. The platform combines artificial intelligence with geolocation technology to create spontaneous and unforgettable experiences, revolutionizing how people discover and engage with their city.",
    goals: [
      "Develop AI-powered event and experience discovery platform",
      "Create real-time geo-based offer system with heatmap visualization",
      "Build fast-pass booking system for VIP experiences",
      "Implement business dashboard for offer management",
      "Develop QR code activation and loyalty reward system",
      "Create city-wide real-time activation network",
    ],
    outcome:
      "Launched in 5 major US cities with 50,000+ active users. AI recommendation engine achieves 85% user engagement rate. Platform partners with 500+ venues and events. QR loyalty system drives 40% repeat customer rate. Real-time activations generate $2M+ in venue revenue monthly.",
    features: [
      "Location-Based Offers Discovery",
      "Geo-Powered Heatmap & Real-time Alerts",
      "AI-Powered Event Recommendations",
      "Fast Pass Booking Experience",
      "VIP Access and Skip-the-Line Cards",
      "Business Backend Dashboard",
      "QR Code Activation System",
      "Fan Loyalty Rewards Program",
      "Real-time City-wide Activations",
      "Spontaneous Experience Matching",
      "Social Sharing and Community Features",
    ],
    techStack: [
      { name: "React Native", description: "Cross-platform mobile app for iOS and Android with native performance" },
      { name: "Next.js", description: "Web platform and business dashboard with server-side rendering" },
      { name: "Node.js", description: "Backend API for real-time data processing and AI integration" },
      { name: "AI/ML", description: "Machine learning algorithms for personalized recommendations and predictions" },
    ],
    liveDemo: "https://hotseats.io/",
    duration: "3 months",
    teamSize: "3 developers",
  },
  4: {
    name: "Mountain West Anesthesia",
    description:
      "A professional healthcare website for Utah's largest anesthesiology group, serving 180+ certified providers across 17 hospitals and surgical centers with comprehensive anesthesia services and patient-centered care.",
    bannerImage: "/images/projects/mountainwest-banner.png",
    featuredImage: "/images/projects/mountainwest-featured-600.png",
    brandColor: "from-blue-600 to-cyan-700",
    images: [
    {
      url: "/mwa/homepage.png",
      title: "Professional Homepage",
      description: "Clean, trustworthy design emphasizing clinical excellence and patient safety",
    },
    {
      url: "/mwa/dashboard.png",
      title: "Dashboard & Calendar",
      description: "Centralized dashboard with calendar view for scheduling and managing anesthesia services",
    },
    {
      url: "/mwa/billing.png",
      title: "Billing & Coding",
      description: "Streamlined billing and coding interface for efficient document management",
    },
    {
      url: "/mwa/dr-directory.jpg",
      title: "Doctors Directory",
      description: "Comprehensive directory of certified providers and specialists",
    },
    {
      url: "/mwa/mobile-calendar.jpg",
      title: "Mobile Experience",
      description: "Mobile-optimized calendar and dashboard for healthcare professionals on the go",
    },
    {
      url: "/mwa/doctor-onboarding.jpg",
      title: "Doctor Onboarding",
      description: "Streamlined onboarding process for new healthcare providers",
    },
  ],
    tags: ["Next.js", "UI/UX", "Healthcare", "Responsive"],
    category: "Healthcare Website",
    industry: "Healthcare & Medical Services",
    country: "🇺🇸 USA",
    overview:
      "Mountain West Anesthesia website represents one of Utah's largest anesthesiology groups with over 180 certified providers across 17 hospitals and surgical centers. The platform emphasizes trust, clinical excellence, and patient-centered care while providing easy navigation and accessibility for both patients and medical staff.",
    goals: [
      "Create professional healthcare website reflecting clinical excellence",
      "Showcase comprehensive anesthesia services and specializations",
      "Provide easy access to provider information and hospital locations",
      "Ensure mobile responsiveness for healthcare professionals",
      "Implement patient education resources and preparation guides",
      "Maintain HIPAA compliance and healthcare industry standards",
    ],
    outcome:
      "Successfully launched serving Utah's largest anesthesiology network. Website receives 10,000+ monthly visits from patients and healthcare professionals. Improved patient preparation compliance by 35% through educational resources. Mobile optimization increased healthcare professional access by 50%.",
    features: [
      "Comprehensive Anesthesia Service Listings",
      "Provider Directory with 180+ Specialists",
      "Hospital and Surgical Center Locations",
      "General, Pediatric, Obstetric, and Cardiac Care Information",
      "Patient Education and Preparation Resources",
      "Contact Pathways for Different User Types",
      "Location-based Service Access",
      "Mobile-Responsive Healthcare Design",
      "Accessibility Compliance (WCAG)",
      "HIPAA-Compliant Information Architecture",
      "Professional Medical Staff Portal",
    ],
    techStack: [
      { name: "Next.js", description: "React framework optimized for healthcare website performance and SEO" },
      { name: "UI/UX Design", description: "Healthcare-focused design system emphasizing trust and accessibility" },
      { name: "Responsive Design", description: "Mobile-first approach for healthcare professionals and patients" },
      { name: "Healthcare Compliance", description: "HIPAA-compliant architecture and security measures" },
    ],
    liveDemo: "https://mountainwestanesthesia.com/",
    duration: "3 months",
    teamSize: "3 developers",
  },
  5: {
    name: "OnlyOneOutlier",
    description:
      "A specialized career coaching platform designed for new graduates and early professionals in data science, offering structured roadmaps, hands-on projects, expert mentorship, and integrated learning resources.",
    bannerImage: "/images/projects/onlyoneoutlier-banner.png",
    featuredImage: "/images/projects/onlyoneoutlier-featured-600.png",
    brandColor: "from-blue-600 to-indigo-700",
    images: [
      {
        url: "/outlier/homepage.jpg",
        title: "Coaching Platform Homepage",
        description: "Professional coaching platform focused on data science career development",
      },
      {
        url: "/outlier/admin-panel-dashboard.jpg",
        title: "Admin Panel Dashboard",
        description: "Comprehensive admin dashboard for managing users, content, and coaching programs",
      },
      {
        url: "/outlier/login.jpg",
        title: "Login & Registration",
        description: "Secure login and registration system for users and mentors",
      },
    ],
    tags: ["Next.js", "Laravel", "Coaching", "Data Science"],
    category: "Educational Platform",
    industry: "Education & Professional Development",
    country: "🇺🇸 USA",
    overview:
      "OnlyOneOutlier is a career coaching platform specifically designed for new graduates and early professionals in data science. The platform provides a structured approach to career development with hands-on projects, expert mentorship, and comprehensive learning resources integrated with popular content platforms.",
    goals: [
      "Create specialized coaching platform for data science professionals",
      "Develop structured career roadmap with milestone tracking",
      "Implement hands-on project system for practical learning",
      "Integrate expert mentorship and guidance features",
      "Connect YouTube and Substack content for comprehensive learning",
      "Build secure payment system for coaching services",
    ],
    outcome:
      "Successfully launched with 1,000+ data science professionals enrolled. 90% completion rate for structured roadmap programs. Mentorship program connects 200+ mentees with industry experts. Integrated content platform receives 50,000+ monthly views. 85% of graduates report career advancement within 6 months.",
    features: [
      "Structured Career Roadmap for Data Science",
      "Hands-on Monthly Projects",
      "Expert Mentorship Matching System",
      "YouTube Content Integration",
      "Substack Newsletter Platform",
      "Secure Payment Processing",
      "Podcast and Blog Content Library",
      "Career Guidance and Job Market Insights",
      "Portfolio Building Tools",
      "Community Forums and Networking",
      "Progress Tracking and Certifications",
    ],
    techStack: [
      { name: "Next.js", description: "Frontend framework for fast, interactive learning platform" },
      { name: "Laravel", description: "Backend API for user management, content delivery, and payment processing" },
      { name: "Content Integration", description: "YouTube and Substack API integration for seamless content access" },
      { name: "Payment Processing", description: "Secure payment system for coaching services and subscriptions" },
    ],
    liveDemo: "https://onlyoneoutlier.com/",
    duration: "3 months",
    teamSize: "3 developers",
  },
  6: {
    name: "Dialog AI Intelligens",
    description:
      "A comprehensive AI chatbot platform with advanced admin dashboard for managing chatbot flows, user conversations, and performance metrics, completely redesigned and redeveloped from scratch with scalable architecture.",
    bannerImage: "/images/projects/dialogai-banner.png",
    featuredImage: "/images/projects/dialogai-featured-600.png",
    brandColor: "from-purple-600 to-violet-700",
    images: [
      {
        url: "/ai-chatbot/chatbot-interface.png",
        title: "AI Chatbot Interface",
        description: "Intelligent chatbot interface with natural language processing and contextual responses",
      },
      {
        url: "/ai-chatbot/conversation.png",
        title: "Admin Dashboard",
        description: "Comprehensive admin dashboard for chatbot management and analytics",
      },
      {
        url: "/ai-chatbot/6.png",
        title: "Flow Builder",
        description: "Visual conversation flow builder with drag-and-drop interface for chatbot logic",
      },
      {
        url: "/ai-chatbot/2.png",
        title: "Conversation Management",
        description: "Real-time user conversation monitoring and management system",
      },
      {
        url: "/ai-chatbot/perform-analytics.png",
        title: "Performance Analytics",
        description: "Detailed analytics and performance metrics for chatbot optimization",
      },
      {
        url: "/ai-chatbot/login.png",
        title: "Login & Security (DSC)",
        description: "Scalable, secure cloud deployment on Render with high availability",
      },
    ],
    tags: ["Next.js", "Node.js", "AI", "Dashboard"],
    category: "AI Platform",
    industry: "Artificial Intelligence & Technology",
    country: "🇩🇰 Denmark",
    overview:
      "A complete AI chatbot platform redesigned and redeveloped from scratch, featuring advanced conversation management, intelligent flow building, and comprehensive analytics. The Dialog AI Intelligens platform provides businesses with powerful tools to create, manage, and optimize AI-powered customer interactions.",
    goals: [
      "Redesign and redevelop entire chatbot platform from scratch",
      "Create intuitive admin dashboard for chatbot management",
      "Implement advanced conversation flow builder",
      "Develop real-time user conversation monitoring",
      "Build comprehensive performance analytics system",
      "Deploy scalable, secure cloud infrastructure",
    ],
    outcome:
      "Successfully deployed on Render with 99.9% uptime. Platform handles 100,000+ conversations monthly across multiple clients. Admin dashboard reduces chatbot setup time by 70%. AI optimization features improve response accuracy by 45%. Scalable architecture supports unlimited concurrent users.",
    features: [
      "AI-Powered Natural Language Processing",
      "Visual Conversation Flow Builder",
      "Real-time User Conversation Monitoring",
      "Comprehensive Admin Dashboard",
      "Performance Metrics and Analytics",
      "Multi-language Support",
      "Integration APIs for Third-party Platforms",
      "Automated Response Optimization",
      "User Behavior Analytics",
      "Scalable Cloud Infrastructure",
      "Security and Data Protection",
    ],
    techStack: [
      { name: "Next.js", description: "Frontend framework for responsive admin dashboard and user interface" },
      { name: "Node.js", description: "Backend server for AI processing, conversation management, and APIs" },
      { name: "AI/ML", description: "Natural language processing and machine learning for intelligent responses" },
      { name: "Cloud Deployment", description: "Scalable deployment on Render with high availability and security" },
    ],
    liveDemo: null,
    duration: "3 months",
    teamSize: "3 developers",
  },
  7: {
    name: "TeamPlay",
    description:
      "A comprehensive browser-based team management platform that helps teams stay productive and aligned through task creation, real-time time tracking, daily standups, and progress reporting with intuitive collaboration tools.",
    bannerImage: "/images/projects/teamplay-banner.png",
    featuredImage: "/images/projects/teamplay-featured-600.png",
    brandColor: "from-cyan-600 to-blue-700",
    images: [
      {
        url: "/teamplay/dashboard-and-analytics.jpg",
        title: "Team Dashboard & Analytics",
        description: "Overview of team performance, improvement tracker, and work analytics in TeamPlay.",
      },
      {
        url: "/teamplay/login.jpg",
        title: "Login Screen",
        description: "Secure login interface for TeamPlay platform access.",
      },
      {
        url: "/teamplay/homepage.jpg",
        title: "Homepage & Motivation",
        description: "Landing page highlighting team motivation, strategy, and app download options.",
      },
    ],
    tags: ["Laravel", "Team Management", "Productivity"],
    category: "Team Management Platform",
    industry: "Productivity & Collaboration",
    country: "🇮🇩 Indonesia",
    overview:
      "TeamPlay is a browser-based team management platform designed to help modern teams stay productive and aligned. The platform offers comprehensive features for task management, time tracking, and team collaboration, making it ideal for both remote and in-house teams seeking efficient project coordination.",
    goals: [
      "Create intuitive browser-based team management platform",
      "Implement comprehensive task creation and assignment system",
      "Develop real-time time tracking with productivity insights",
      "Build digital daily standup coordination features",
      "Create detailed progress reporting and analytics",
      "Implement role-based access control for team security",
    ],
    outcome:
      "Successfully deployed serving 500+ teams across Indonesia and Southeast Asia. Platform manages 10,000+ active tasks monthly. Time tracking features improve team productivity by 30%. Daily standup coordination reduces meeting time by 50%. Progress reporting increases project visibility by 80%.",
    features: [
      "Task Creation and Assignment System",
      "Real-time Time Tracking",
      "Daily Standup Coordination",
      "Progress Reporting and Analytics",
      "Team Creation and Management",
      "Activity Logs and Monitoring",
      "Project Status Tracking",
      "Role-based Access Control",
      "Minimalist UI Focused on Productivity",
      "Browser-based Accessibility",
      "Team Collaboration Tools",
    ],
    techStack: [
      { name: "Laravel", description: "Full-stack PHP framework for robust backend and frontend development" },
      { name: "Team Management", description: "Specialized features for team coordination and project management" },
      { name: "Real-time Tracking", description: "Live time tracking and activity monitoring capabilities" },
      { name: "Analytics", description: "Comprehensive reporting and analytics for team performance insights" },
    ],
    liveDemo: "https://teamplay.work/",
    duration: "2 months",
    teamSize: "3 developers",
  },
  8: {
    name: "TGFC Hartman Garden Furniture",
    description:
      "A comprehensive e-commerce platform for The Garden Furniture Company (TGFC), UK's specialist retailer of Hartman garden furniture, featuring extensive product catalog, customer reviews, and seamless online shopping experience.",
    bannerImage: "/images/projects/tgfc-banner.png",
    featuredImage: "/images/projects/tgfc-featured-600.png",
    brandColor: "from-green-600 to-lime-700",
    images: [
      {
        url: "/tgfc/homepage.jpg",
        title: "E-commerce Homepage",
        description: "Professional homepage showcasing Hartman garden furniture collections and seasonal offers",
      },
      {
        url: "/tgfc/products-catalogue.jpg",
        title: "Products Catalogue",
        description: "Extensive product catalogue with dining sets, loungers, pergolas, and parasols",
      },
      {
        url: "/tgfc/secure-checkout.jpg",
        title: "Secure Checkout",
        description: "Streamlined checkout process with secure payment options and delivery tracking",
      },
    ],
    tags: ["React.js", "Laravel", "E-commerce", "UK"],
    category: "E-commerce Platform",
    industry: "Retail & E-commerce",
    country: "🇬🇧 UK",
    overview:
      "The Garden Furniture Company (TGFC) is a UK-based specialist retailer of Hartman garden furniture, offering an extensive range through a user-friendly online store and a spacious 800m² showroom. The platform provides transparent product information, customer reviews, secure checkout, and reliable delivery across mainland UK.",
    goals: [
      "Create comprehensive e-commerce platform for garden furniture retail",
      "Implement extensive product catalog with detailed specifications",
      "Build customer review and rating system for transparency",
      "Develop secure online checkout with multiple payment options",
      "Integrate showroom information and location services",
      "Implement UK-wide delivery tracking and management",
    ],
    outcome:
      "Successfully launched serving UK garden furniture market with 5,000+ products online. E-commerce platform processes 1,000+ orders monthly. Customer review system increases purchase confidence by 40%. Showroom integration drives 30% increase in physical visits. Free delivery service covers 95% of mainland UK with 5-10 day delivery guarantee.",
    features: [
      "Extensive Hartman Furniture Product Catalog",
      "Dining Sets, Loungers, Pergolas, and Parasols",
      "Customer Reviews and Rating System",
      "Transparent Product Information and Pricing",
      "Secure Online Checkout Process",
      "Multiple Payment Options Integration",
      "UK-wide Delivery Tracking System",
      "800m² Showroom Location Integration",
      "Dedicated Sales Team Contact Portal",
      "Free Standard Delivery (Mainland UK)",
      "Personalized Product Advice System",
    ],
    techStack: [
      { name: "React.js", description: "Frontend framework for interactive e-commerce user interface" },
      { name: "Laravel", description: "Backend framework for product management, orders, and customer data" },
      { name: "E-commerce", description: "Full e-commerce functionality with payment processing and inventory" },
      { name: "UK Integration", description: "UK-specific delivery, payment, and location services integration" },
    ],
    liveDemo: "https://tgfc.co.uk/",
    duration: "2 months",
    teamSize: "3 developers",
  },
}

interface ProjectDetailPageProps {
  params: {
    id: any;
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData[params?.id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Back Button - Reduced top padding */}
      <div className="container mx-auto px-4 pt-8 pb-4">
        <Link href="/projects">
          <Button variant="outline" className="bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Banner Image - No padding/margin, edge-to-edge */}
      <section className="w-full">
        <div className="relative w-full aspect-[3/1]">
          <Image
            src={project.bannerImage || "/placeholder.svg"}
            alt={`${project.name} banner`}
            fill
            priority
          />
        </div>
      </section>

      {/* Project Header with Brand Color Background */}
      <section className={`bg-gradient-to-r ${project.brandColor} text-white py-16`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">{project.category}</Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">{project.country}</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{project.name}</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Meta */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-cyan-600 mr-2" />
              <span className="font-semibold text-gray-900 dark:text-white">Duration</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{project.duration}</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center mb-2">
              <Users className="h-5 w-5 text-purple-600 mr-2" />
              <span className="font-semibold text-gray-900 dark:text-white">Team Size</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{project.teamSize}</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center mb-2">
              <Target className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold text-gray-900 dark:text-white">Industry</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{project.industry}</p>
          </Card>
        </div>
      </section>

      {/* Project Screenshots Gallery */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Project Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full aspect-[3/2]">
                <Image src={image.url || "/placeholder.svg"} alt={image.title} fill  />
              </div>
              <div className="p-6">
                <Tooltip title={image.title} placement="top">
                <h3 className="truncate font-semibold text-gray-900 dark:text-white mb-2 text-xl">{image.title}</h3>
                </Tooltip>
                <Tooltip title={image.description} placement="top">
                <p className="text-gray-600 line-clamp-2 dark:text-gray-300 leading-relaxed">{image.description}</p>
                </Tooltip>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.overview}</p>
            </Card>

            {/* Goals */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Goals</h2>
              <ul className="space-y-3">
                {project.goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{goal}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Features */}
            {project.features && (
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Outcome */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Results & Impact</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.outcome}</p>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Tech Stack */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Tech Stack</h3>
              <div className="space-y-4">
                {project.techStack.map((tech, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{tech.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tags */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Links */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Project Links</h3>
              <div className="space-y-3">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
