import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Volume2, 
  VolumeX, 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Check, 
  Camera, 
  Sparkles, 
  Sliders, 
  Calendar, 
  User, 
  Menu,
  Heart,
  Compass
} from "lucide-react";

// Curated High-End Unsplash Assets for Indian Weddings
const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=1920&auto=format&fit=crop",
    title: "WEAVING LEGACIES INTO",
    highlight: "TIMELESS ART",
    tagline: "ROYAL RAJASTHAN WEDDINGS • UDAIPUR"
  },
  {
    url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1920&auto=format&fit=crop",
    title: "THE ULTIMATE SHIELD OF",
    highlight: "PURE EMOTIONS",
    tagline: "EDITORIAL DESTINATION WEDDINGS • WORLDWIDE"
  },
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1920&auto=format&fit=crop",
    title: "SAKRED RITUALS &",
    highlight: "GOLDEN HEIRLOOMS",
    tagline: "COUTURE PHOTOGRAPHY & FILMS FOR THE HEIR"
  }
];

const FEATURED_STORIES = [
  {
    id: "meera-aditya",
    title: "Ananya & Rishabh",
    location: "The Jagmandir Palace, Udaipur",
    description: "An opulent three-day celebration blending Rajput heritage with modern high-fashion aesthetics. Framed against the shimmering ripples of Lake Pichola, every frame captures a story of royalty, laughter, and timeless promise.",
    heroImage: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    quote: "“Ajinkya and his team didn't just take photos; they archived our ancestors’ dreams and our future memories.”",
    camera: "Leica SL3 + Summilux 50mm f/1.4",
    gallery: [
      "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200"
    ]
  },
  {
    id: "priya-shlok",
    title: "Priya & Shlok",
    location: "Suryagarh Palace, Jaisalmer",
    description: "Whispering sands and sun-drenched laughter along the majestic fortresses of Jaisalmer, captured on premium fine-art analog film. An intimate yet grand testament to love, surrounded by amber dunes and classic folk poetry.",
    heroImage: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=1200&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
    quote: "“Every frame feels like a scene from a classic vintage cinema. Simply breathtaking.”",
    camera: "Hasselblad H6D-100c + HC 80mm",
    gallery: [
      "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=1200",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200"
    ]
  },
  {
    id: "zara-kabir",
    title: "Meera & Dev",
    location: "Taj Exotica Resort & Spa, Goa",
    description: "A breezy coastal retreat that seamlessly shifted from serene afternoon pheras under floral canopies to an explosive starlit ballroom reception. True editorial storytelling in its most natural, effortless element.",
    heroImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=800&auto=format&fit=crop",
    quote: "“The warmth, the lighting, the sheer passion they captured. We are eternally grateful.”",
    camera: "Sony A1 + 35mm & 85mm G-Master II",
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200",
      "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=1200",
      "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1200",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200"
    ]
  }
];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: "portraits",
    title: "The Royal Veil",
    meta: "Leica M11 • 50mm f/0.95 Noctilux",
    location: "Umaid Bhawan, Jodhpur",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "rituals",
    title: "The Sacred Fire",
    meta: "Sony A1 • 24-70mm f/2.8 GM II",
    location: "Suryagarh Jaisalmer",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "emotions",
    title: "Whispers of Forever",
    meta: "Leica SL2 • 90mm f/2 Apo-Summicron",
    location: "Lake Palace, Udaipur",
    image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "grandeur",
    title: "The Glass Pavilion",
    meta: "Hasselblad X2D • 38mm f/2.5",
    location: "Taj Exotica, Goa",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "portraits",
    title: "The Maharani Portrait",
    meta: "Sony A1 • 85mm f/1.2 GM",
    location: "Jaipur Palace, Rajasthan",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "grandeur",
    title: "Symphony of Lights",
    meta: "Sony A1 • 35mm f/1.4 GM",
    location: "The Leela Palace, Udaipur",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 7,
    category: "emotions",
    title: "The Sacred Haldi Tears",
    meta: "Leica SL2 • 50mm Summilux",
    location: "ITC Grand Bharat, Gurugram",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 8,
    category: "rituals",
    title: "Anointing the Crown",
    meta: "Sony A1 • 70-200mm f/2.8 GM II",
    location: "Amãra Palace, Delhi",
    image: "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1200&auto=format&fit=crop"
  }
];

const CINEMATIC_VIDEOS = [
  {
    id: "v1",
    title: "The Desert Symphony",
    location: "Suryagarh Palace, Jaisalmer",
    duration: "4:12 Min",
    thumbnail: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c05c03c5d6e2467d58fa667c29fb7be0&profile_id=165&oauth2_token_id=57447761"
  },
  {
    id: "v2",
    title: "Vows of Azure & Gold",
    location: "The Leela Palace, Udaipur",
    duration: "5:45 Min",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7f3299c565d8338e914f6b0f19c9e830e071720d&profile_id=165&oauth2_token_id=57447761"
  },
  {
    id: "v3",
    title: "The Imperial Promise",
    location: "Umaid Bhawan Palace, Jodhpur",
    duration: "6:30 Min",
    thumbnail: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://player.vimeo.com/external/481977717.sd.mp4?s=2df10c4fa47cf4b087093208799db6ff8d8b136c&profile_id=165&oauth2_token_id=57447761"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Ajinkya Jadhav has an unparalleled eye for quiet moments. Amidst the chaos of our Jodhpur wedding, he captured frames that feel like renaissance paintings. His calm presence and obsessive attention to lighting is legendary.",
    author: "Radhika & Vikram Malhotra",
    venue: "Umaid Bhawan, Jodhpur"
  },
  {
    id: 2,
    quote: "If you want photographs that live and breathe luxury, choose Ajinkya. He captured the pure majesty of our venue without losing the absolute, tearful warmth of our parents' smiles. A masterpiece portfolio.",
    author: "Ishita & Rohan Vaswani",
    venue: "The Oberoi Udaivilas, Udaipur"
  },
  {
    id: 3,
    quote: "Working with them was the highlight of our planning. They treated our three-day destination celebration like an absolute film production, but remained almost invisible to our guests. Truly a luxury standard.",
    author: "Sneha & Kabir Goel",
    venue: "Alila Diwa, Goa"
  }
];

export default function App() {
  // Navigation & Scroll states
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero Carousel State
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Audio Ambient Player State
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Portfolio Filters
  const [activeCategory, setActiveCategory] = useState("all");

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Video Film Player Modal State
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState<string>("");

  // Testimonial Carousel State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Editorial Story Modal Gallery
  const [activeStoryGallery, setActiveStoryGallery] = useState<typeof FEATURED_STORIES[0] | null>(null);

  // Inquiry Form & Estimator State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    partnerName: "",
    email: "",
    phone: "",
    venue: "",
    packageType: "both",
    weddingDate: "",
    story: "",
    budget: "luxury"
  });

  // Calculate scrolling state for premium styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Autoplay Hero banner background slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Initialize and toggle Ambient Audio Sitar/Flute track
  useEffect(() => {
    audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleAmbientAudio = () => {
    if (!audioRef.current) return;
    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      setIsAudioPlaying(true);
    }
  };

  // Filtered Portfolio items
  const filteredPortfolio = activeCategory === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  // Lightbox handlers
  const openLightbox = (id: number) => {
    const idx = PORTFOLIO_ITEMS.findIndex(item => item.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % PORTFOLIO_ITEMS.length);
    }
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length);
    }
  };

  // Handle Form Submission with confetti and custom instant quotation logic
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please enter your name, email, and contact number to let us tailor your wedding legacy.");
      return;
    }
    setFormSubmitted(true);
    // Auto scroll view slightly to show success message clearly
    setTimeout(() => {
      const el = document.getElementById("atelier-success-view");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  // Luxury live budget & customized experience response builder
  const getCustomGreeter = () => {
    const venueText = formData.venue ? `in ${formData.venue}` : "for your grand celebration";
    let tierText = "A Bespoke Legacy Package";
    if (formData.budget === "royal") {
      tierText = "The Royal Imperial Cinematography & Photography Commission";
    } else if (formData.budget === "luxury") {
      tierText = "The Fine-Art Heritage Portfolio Commission";
    } else {
      tierText = "The Intimate Avant-Garde Editorial Commission";
    }
    return { venueText, tierText };
  };

  const { venueText, tierText } = getCustomGreeter();

  return (
    <div className="min-h-screen bg-[#0B0A0A] text-[#EAE6DF] font-jakarta selection:bg-[#C5A880] selection:text-[#0B0A0A] relative overflow-hidden">
      
      {/* Background ambient pattern texture (Cinematic Fine Grain overlay) */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* 1. Transparent Top Navbar */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#0B0A0A]/90 backdrop-blur-xl border-b border-[#2D2722] py-4" 
          : "bg-gradient-to-b from-[#0b0a0a]/80 to-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo brand */}
          <a href="#" className="flex flex-col tracking-[0.25em] text-left group">
            <span className="font-cinzel text-xl md:text-2xl font-semibold text-[#EAE6DF] transition-colors duration-300 group-hover:text-[#C5A880]">
              AJINKYA JADHAV
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-[#C5A880] mt-0.5">
              PHOTOGRAPHY &amp; FILMS
            </span>
          </a>

          {/* Desktop Menu links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="font-sans-clean text-xs uppercase tracking-[0.2em] text-[#EAE6DF] hover:text-[#C5A880] transition-colors duration-300 relative py-1 group">
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A880] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#featured" className="font-sans-clean text-xs uppercase tracking-[0.2em] text-[#EAE6DF] hover:text-[#C5A880] transition-colors duration-300 relative py-1 group">
              Cover Stories
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A880] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#portfolio" className="font-sans-clean text-xs uppercase tracking-[0.2em] text-[#EAE6DF] hover:text-[#C5A880] transition-colors duration-300 relative py-1 group">
              Archives
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A880] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#films" className="font-sans-clean text-xs uppercase tracking-[0.2em] text-[#EAE6DF] hover:text-[#C5A880] transition-colors duration-300 relative py-1 group">
              Cinematography
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A880] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#testimonials" className="font-sans-clean text-xs uppercase tracking-[0.2em] text-[#EAE6DF] hover:text-[#C5A880] transition-colors duration-300 relative py-1 group">
              Praise
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A880] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#inquire" className="font-sans-clean text-xs uppercase tracking-[0.2em] text-[#EAE6DF] hover:text-[#C5A880] transition-colors duration-300 relative py-1 group">
              The Atelier
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A880] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </nav>

          {/* Right actions: Consultation CTA & Audio controller */}
          <div className="hidden sm:flex items-center space-x-6">
            {/* Ambient Sound Trigger */}
            <button 
              onClick={toggleAmbientAudio} 
              className="flex items-center space-x-2 text-[#C5A880] hover:text-white transition-colors duration-300 text-xs tracking-widest bg-white/5 px-3 py-2 rounded-full border border-white/10"
              title="Experience with Ambient Wedding Scores"
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-bounce text-emerald-400" />
                  <span className="text-[10px]">MUSIC ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[10px] text-white/50">MUSIC OFF</span>
                </>
              )}
            </button>

            <a 
              href="#inquire" 
              className="border border-[#C5A880] hover:bg-[#C5A880] hover:text-[#0B0A0A] text-[#C5A880] px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500 font-medium"
            >
              INQUIRE NOW
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#EAE6DF] hover:text-[#C5A880] transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            className="fixed inset-0 bg-[#0B0A0A] z-50 flex flex-col justify-between p-8"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col tracking-[0.25em] text-left">
                <span className="font-cinzel text-xl font-semibold text-[#EAE6DF]">AJINKYA JADHAV</span>
                <span className="text-[9px] tracking-[0.4em] text-[#C5A880] mt-0.5">PHOTOGRAPHY &amp; FILMS</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-white/5 rounded-full border border-white/10 text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 text-center my-auto">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-cinzel text-2xl tracking-widest text-[#EAE6DF] hover:text-[#C5A880] transition-colors"
              >
                THE STUDIO
              </a>
              <a 
                href="#featured" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-cinzel text-2xl tracking-widest text-[#EAE6DF] hover:text-[#C5A880] transition-colors"
              >
                COVER STORIES
              </a>
              <a 
                href="#portfolio" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-cinzel text-2xl tracking-widest text-[#EAE6DF] hover:text-[#C5A880] transition-colors"
              >
                THE ARCHIVES
              </a>
              <a 
                href="#films" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-cinzel text-2xl tracking-widest text-[#EAE6DF] hover:text-[#C5A880] transition-colors"
              >
                CINEMATOGRAPHY
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-cinzel text-2xl tracking-widest text-[#EAE6DF] hover:text-[#C5A880] transition-colors"
              >
                CLIENT PRAISE
              </a>
              <a 
                href="#inquire" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-cinzel text-2xl tracking-widest text-[#C5A880] hover:text-white transition-colors"
              >
                BOOK ATELIER
              </a>
            </nav>

            <div className="flex flex-col items-center space-y-4">
              <button 
                onClick={() => {
                  toggleAmbientAudio();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-[#C5A880] text-xs uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10"
              >
                {isAudioPlaying ? <Volume2 className="w-4 h-4 animate-bounce" /> : <VolumeX className="w-4 h-4" />}
                <span>{isAudioPlaying ? "Mute Background Music" : "Play Background Music"}</span>
              </button>
              <div className="text-xs text-stone-500 tracking-wider">
                Mumbai • Udaipur • London • Dubai
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 2. Cinematic Hero Banner */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Dynamic Image Slideshow Container */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={HERO_IMAGES[currentHeroIndex].url} 
                alt="Luxury Indian Wedding Photography Portfolio Background" 
                className="w-full h-full object-cover object-center opacity-70 filter brightness-[0.75] contrast-[1.05]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Masterful Luxury Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0A] via-transparent to-[#0B0A0A]/85 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

        {/* Cinematic dust particles simulation background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.08)_0%,transparent_70%)] z-10 pointer-events-none"></div>

        {/* Center-aligned Heading content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full mt-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex items-center space-x-2 mb-4 md:mb-6"
          >
            <span className="w-6 h-[1px] bg-[#C5A880]"></span>
            <span className="font-jakarta text-[11px] md:text-[13px] tracking-[0.45em] uppercase text-[#C5A880] font-semibold">
              {HERO_IMAGES[currentHeroIndex].tagline}
            </span>
            <span className="w-6 h-[1px] bg-[#C5A880]"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="text-4xl sm:text-6xl md:text-8xl tracking-[0.1em] text-[#EAE6DF] leading-tight mb-8 font-cinzel font-normal uppercase"
          >
            {HERO_IMAGES[currentHeroIndex].title} <br />
            <span className="font-cormorant italic text-gold-gradient tracking-wide block capitalize mt-2 md:mt-4 font-light select-none">
              {HERO_IMAGES[currentHeroIndex].highlight}
            </span>
          </motion.h1>

          {/* Luxury CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4"
          >
            <a 
              href="#featured" 
              className="bg-gradient-to-r from-[#C5A880] to-[#AA8E65] text-[#0B0A0A] font-jakarta font-medium text-xs tracking-[0.2em] px-8 py-4 uppercase rounded-sm shadow-xl hover:shadow-[0_0_30px_rgba(197,168,128,0.4)] transition-all duration-300 group flex items-center space-x-2"
            >
              <span>EXPLORE STORIES</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            
            <a 
              href="#inquire" 
              className="bg-transparent text-white border border-white/20 hover:border-[#C5A880] hover:bg-white/5 transition-all duration-300 font-jakarta text-xs tracking-[0.2em] px-8 py-4 uppercase rounded-sm"
            >
              RESERVE YOUR DATES
            </a>
          </motion.div>
        </div>

        {/* Ambient Carousel Indicator */}
        <div className="absolute bottom-16 left-6 md:left-12 z-20 hidden md:flex items-center space-x-3">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHeroIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === currentHeroIndex ? "w-10 bg-[#C5A880]" : "w-2 bg-white/20 hover:bg-white/40"}`}
              title={`Go to slide ${i+1}`}
            />
          ))}
        </div>

        {/* Rotating Circular Scroll Badge */}
        <div className="absolute bottom-12 right-6 md:right-12 z-20 flex flex-col items-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="relative w-20 h-20 items-center justify-center hidden md:flex cursor-pointer"
            onClick={() => {
              const el = document.getElementById("about");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              <text className="font-cinzel text-[7px] tracking-[0.25em] fill-white/40 font-semibold uppercase">
                <textPath href="#circlePath" startOffset="0%">
                  • AJINKYA JADHAV PHOTOGRAPHY • SCROLL TO EXPLORE
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-[#C5A880] rounded-full"></div>
          </motion.div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A880] to-transparent mt-2"></div>
        </div>
      </section>


      {/* 2.5 Dynamic Studio Stats & Quote Segment */}
      <section id="about" className="relative py-24 bg-[#0B0A0A] border-b border-[#1C1713] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/5 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A880]/3 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Fine Art Manifesto Text */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="font-cinzel text-xs tracking-[0.4em] text-[#C5A880] uppercase block">
                THE STUDIO MANIFESTO
              </span>
              <h2 className="font-cormorant text-4xl md:text-6xl text-[#EAE6DF] leading-tight font-light">
                Crafting heirlooms for the <span className="font-cinzel italic text-gold">discerning few</span> who view weddings as historic poetry.
              </h2>
              <p className="font-jakarta text-[#9C958E] leading-relaxed text-sm md:text-base max-w-2xl font-light">
                Led by internationally celebrated photographer Ajinkya Jadhav, our boutique studio specializes in high-fidelity luxury destination weddings. We balance raw emotional architecture with fine-art portraiture. Every subtle sigh, grand palace reflection, and teardrop of joy is permanently captured with breathtaking sharpness, rich cinematic color scales, and ultimate elegance.
              </p>
              <div className="pt-4">
                <a href="#inquire" className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] text-[#C5A880] font-semibold hover:text-white transition-colors duration-300">
                  <span>MEET THE MAESTRO</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Asymmetric Stats Table */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 bg-[#141211]/90 border border-[#2D2722] p-8 md:p-12 relative"
            >
              <div className="absolute -top-3 -left-3 text-[#C5A880] text-3xl font-serif">“</div>
              <div className="space-y-8">
                
                <div className="grid grid-cols-2 gap-8 border-b border-white/5 pb-6">
                  <div>
                    <h3 className="font-cinzel text-3xl md:text-4xl text-[#C5A880]">350+</h3>
                    <p className="font-jakarta text-[11px] text-stone-500 uppercase tracking-widest mt-1">Royal Marriages Captured</p>
                  </div>
                  <div>
                    <h3 className="font-cinzel text-3xl md:text-4xl text-[#C5A880]">15+</h3>
                    <p className="font-jakarta text-[11px] text-stone-500 uppercase tracking-widest mt-1">Countries Explored</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 border-b border-white/5 pb-6">
                  <div>
                    <h3 className="font-cinzel text-3xl md:text-4xl text-[#C5A880]">12+</h3>
                    <p className="font-jakarta text-[11px] text-stone-500 uppercase tracking-widest mt-1">Years of Storytelling</p>
                  </div>
                  <div>
                    <h3 className="font-cinzel text-3xl md:text-4xl text-[#C5A880]">100%</h3>
                    <p className="font-jakarta text-[11px] text-stone-500 uppercase tracking-widest mt-1">Hand-colored Legacy</p>
                  </div>
                </div>

                 <div className="pt-2 text-center lg:text-left">
                  <p className="font-cormorant italic text-sm text-[#C5A880]/80">
                    "Featured globally in Vogue India, Harper's Bazaar Bride, and Condé Nast Traveller."
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 3. Featured Wedding Showcase (Editorial Alternating Layout) */}
      <section id="featured" className="py-24 bg-[#0B0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-cinzel text-xs tracking-[0.5em] text-[#C5A880] uppercase block">
              COVER STORIES
            </span>
            <h2 className="font-cormorant text-4xl md:text-6xl text-[#EAE6DF] font-light">
              Featured Ceremonies
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4"></div>
            <p className="font-jakarta text-xs md:text-sm text-[#9C958E] uppercase tracking-widest leading-relaxed">
              EXPLORE RECENT WEDDINGS CAPTURED THROUGH AN EDITORIAL MAGAZINE LENS
            </p>
          </div>

          {/* Alternating Asymmetric Story Cards */}
          <div className="space-y-36">
            {FEATURED_STORIES.map((story, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={story.id} 
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-stretch`}
                >
                  
                  {/* Left Column (Huge main photo + metadata overlay) */}
                  <div className="w-full lg:w-7/12 relative group overflow-hidden bg-stone-900">
                    <div className="absolute top-4 left-4 z-20 bg-black/75 px-3 py-1.5 border border-[#C5A880]/30 text-[10px] text-[#C5A880] tracking-widest uppercase">
                      {story.camera}
                    </div>
                    
                    <div className="overflow-hidden aspect-[4/3] md:aspect-[3/2] h-full min-h-[350px] md:min-h-[500px]">
                      <img 
                        src={story.heroImage} 
                        alt={`${story.title} Wedding Story`} 
                        className="w-full h-full object-cover object-center transform transition-transform duration-1000 scale-100 group-hover:scale-105 filter brightness-[0.9]"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-mono">
                        Captured at {story.location}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (The storytelling & interactive details) */}
                  <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-6 md:space-y-8 relative">
                    <div className="space-y-2">
                      <span className="font-cinzel text-xs tracking-widest text-[#C5A880] uppercase">
                        {story.location}
                      </span>
                      <h3 className="font-cinzel text-3xl md:text-5xl font-medium text-[#EAE6DF] leading-tight">
                        {story.title}
                      </h3>
                    </div>

                    <p className="font-jakarta text-[#9C958E] text-sm md:text-base leading-relaxed font-light">
                      {story.description}
                    </p>

                    <blockquote className="border-l-2 border-[#C5A880] pl-4 italic font-cormorant text-lg text-white/90">
                      {story.quote}
                    </blockquote>

                    {/* Secondary overlapping detail image preview on desktop */}
                    <div className="hidden md:block relative h-40 w-full overflow-hidden border border-white/5 bg-stone-950">
                      <img 
                        src={story.secondaryImage} 
                        alt="Macro Detail" 
                        className="w-full h-full object-cover object-center filter brightness-[0.8] hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase font-bold">RAW ATMOSPHERIC DETAIL</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button 
                        onClick={() => setActiveStoryGallery(story)}
                        className="border-b border-[#C5A880] text-[#C5A880] hover:text-[#EAE6DF] hover:border-white transition-all pb-1 text-xs tracking-[0.25em] font-semibold uppercase flex items-center space-x-2"
                      >
                        <span>VIEW PHOTO ALBUM ({story.gallery.length} PLATES)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Story Gallery Popup Modal */}
      <AnimatePresence>
        {activeStoryGallery && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
            <div className="absolute inset-0" onClick={() => setActiveStoryGallery(null)}></div>
            
            <div className="bg-[#0F0E0D] border border-white/10 rounded-sm w-full max-w-5xl overflow-hidden relative z-10 my-8">
              
              {/* Close Button */}
              <button 
                onClick={() => setActiveStoryGallery(null)}
                className="absolute top-6 right-6 z-20 bg-black/55 p-3 rounded-full border border-white/10 text-white hover:text-[#C5A880] transition-colors"
                title="Close Gallery"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12 space-y-6">
                <div>
                  <span className="font-cinzel text-xs tracking-widest text-[#C5A880] uppercase">{activeStoryGallery.location}</span>
                  <h3 className="font-cinzel text-2xl md:text-3xl font-medium text-white">{activeStoryGallery.title} Portfolio</h3>
                  <p className="text-xs text-stone-400 mt-1 uppercase tracking-widest">Master plates shot with {activeStoryGallery.camera}</p>
                </div>

                {/* Grid of high-res plates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeStoryGallery.gallery.map((imgUrl, i) => (
                    <div key={i} className="group relative overflow-hidden bg-stone-900 aspect-[3/2]">
                      <img 
                        src={imgUrl} 
                        alt="Editorial Wedding Frame" 
                        className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-102 transition-transform duration-700"
                      />
                      <div className="absolute top-3 right-3 bg-black/75 px-2.5 py-1 text-[9px] tracking-widest text-white uppercase rounded-sm font-mono">
                        Plate 0{i + 1}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-between items-center border-t border-white/5">
                  <span className="text-xs text-stone-500 font-serif italic">“The authentic preservation of royal sentiment.”</span>
                  <button 
                    onClick={() => {
                      const coupleName = activeStoryGallery.title;
                      setActiveStoryGallery(null);
                      setFormData({
                        ...formData,
                        story: `I would love styling similar to the wedding of ${coupleName}!`
                      });
                      const el = document.getElementById("inquire");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-[#C5A880] hover:bg-[#B3966F] text-black text-[10px] tracking-[0.2em] font-bold px-5 py-2.5 uppercase rounded-sm"
                  >
                    INQUIRE SIMILAR STYLE
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>


      {/* 4. Portfolio Grid (With Interactive Masonry & Lightbox) */}
      <section id="portfolio" className="py-24 bg-[#0F0E0D] border-t border-b border-[#241E19]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-cinzel text-xs tracking-[0.4em] text-[#C5A880] uppercase block mb-2">
                THE ARCHIVES
              </span>
              <h2 className="font-cinzel text-3xl md:text-5xl text-[#EAE6DF] font-light uppercase tracking-wide">
                Fine Art Gallery
              </h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-4 pb-2 border-b border-white/5">
              {[
                { key: "all", label: "ALL PLATES" },
                { key: "portraits", label: "PORTRAITS" },
                { key: "rituals", label: "SACRED RITUALS" },
                { key: "emotions", label: "EMOTIONS" },
                { key: "grandeur", label: "GRANDEUR & VENUES" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold py-2 px-3 transition-all duration-300 relative ${
                    activeCategory === tab.key 
                      ? "text-[#C5A880] border-b border-[#C5A880]" 
                      : "text-stone-400 hover:text-[#EAE6DF]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="group relative cursor-pointer overflow-hidden bg-stone-900 border border-[#2D2722] transition-all duration-500 hover:shadow-[0_0_30px_rgba(197,168,128,0.15)] rounded-sm aspect-[4/5]"
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.85] transition-all duration-1000 ease-out group-hover:scale-105 group-hover:brightness-[0.95]"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                  
                  {/* Top: Tech metadata */}
                  <div className="text-right">
                    <span className="text-[9px] font-mono tracking-widest text-[#C5A880] uppercase bg-black/85 px-2 py-1 rounded-sm">
                      {item.meta}
                    </span>
                  </div>

                  {/* Bottom: Caption details */}
                  <div className="space-y-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase font-semibold">
                      {item.location}
                    </span>
                    <h4 className="font-cinzel text-lg text-white font-medium">
                      {item.title}
                    </h4>
                    <p className="text-[9px] text-stone-400 tracking-wider">
                      Click to reveal full resolution plate
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-16 text-center">
            <p className="font-cormorant italic text-xl text-[#9C958E] max-w-xl mx-auto mb-6">
              "We curate your gallery like a museum exhibition, selecting only the frames that hold eternal soul."
            </p>
            <a 
              href="#inquire" 
              className="inline-block border-b border-[#C5A880] text-[#C5A880] hover:text-white transition-colors uppercase text-xs tracking-[0.25em] font-bold pb-1"
            >
              COMMISSION OUR WORK FOR YOUR WEDDING
            </a>
          </div>

        </div>
      </section>


      {/* 5. Couple Story Sections (How We Tell Your Story - Walkthrough) */}
      <section className="py-24 bg-[#0B0A0A] relative overflow-hidden">
        
        {/* Abstract golden luxury circles decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.02] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#C5A880]/[0.02] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-cinzel text-xs tracking-[0.5em] text-[#C5A880] uppercase block">
              THE ARTISTIC APPROACH
            </span>
            <h2 className="font-cormorant text-4xl md:text-6xl text-[#EAE6DF] font-light">
              How We Write Your Story
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {[
              {
                num: "01",
                title: "The Silent Symphony",
                desc: "Before we trigger a single shutter, we read your chemistry. We capture the unscripted space between deep breaths, subtle whispers, and spontaneous smiles.",
                icon: <Heart className="w-5 h-5 text-[#C5A880]" />
              },
              {
                num: "02",
                title: "Architectural Grandeur",
                desc: "We balance the soft details of human contact with the epic scale of your venue—composing massive, timeless frames of royal architecture.",
                icon: <Compass className="w-5 h-5 text-[#C5A880]" />
              },
              {
                num: "03",
                title: "Raw Cinematic Depth",
                desc: "Using state-of-the-art Leica and cinema cameras, we gather physical grain, light flares, and organic textures that look stunning on heirloom paper.",
                icon: <Camera className="w-5 h-5 text-[#C5A880]" />
              },
              {
                num: "04",
                title: "Couture Post-Grading",
                desc: "Every select photograph undergoes an extensive bespoke color grading process to emulate classic Kodak/Fujifilm cinematic warmth.",
                icon: <Sparkles className="w-5 h-5 text-[#C5A880]" />
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-[#110F0E] border border-[#231D19] p-8 space-y-6 relative hover:border-[#C5A880]/50 transition-colors duration-500 rounded-sm"
              >
                <div className="flex justify-between items-start">
                  <span className="text-stone-600 font-cinzel text-2xl tracking-widest">{step.num}</span>
                  <div className="p-2.5 bg-black/50 rounded-full border border-white/5">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-cinzel text-base tracking-widest text-[#EAE6DF] font-semibold uppercase">
                    {step.title}
                  </h3>
                  <p className="font-jakarta text-xs text-[#9C958E] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* Immersive quote block banner */}
          <div className="mt-20 relative rounded-sm overflow-hidden h-[350px] md:h-[450px] flex items-center justify-center bg-stone-900 border border-[#2D2722]">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop" 
              alt="Emotional Indian Wedding Detail" 
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] blur-[1px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center px-6 space-y-6">
              <span className="text-[#C5A880] text-xl font-semibold tracking-widest font-cinzel block">THE HEIRLOOM PHILOSOPHY</span>
              <p className="font-cormorant text-2xl md:text-4xl text-white italic font-light leading-snug">
                “A luxury photograph shouldn’t just remind you of what you wore. It should evoke the exact scent of jasmine, the weight of the gold, and the nervous warmth of their hand.”
              </p>
              <div className="flex justify-center items-center space-x-3">
                <span className="w-8 h-[1px] bg-[#C5A880]"></span>
                <span className="text-xs tracking-[0.25em] text-[#C5A880] uppercase">Ajinkya Jadhav</span>
                <span className="w-8 h-[1px] bg-[#C5A880]"></span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 6. Video Film Showcase (Cinematic Showreel) */}
      <section id="films" className="py-24 bg-[#0F0E0D] border-t border-[#1C1713]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="font-cinzel text-xs tracking-[0.5em] text-[#C5A880] uppercase block">
              CINEMATIC FILM COUTURE
            </span>
            <h2 className="font-cinzel text-3xl md:text-5xl text-[#EAE6DF] font-light uppercase tracking-wide">
              The Showreels
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4"></div>
            <p className="font-jakarta text-xs text-[#9C958E] uppercase tracking-widest">
              Moving pictures that breath life, music, and grand narrative into your love legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CINEMATIC_VIDEOS.map((video) => (
              <div 
                key={video.id}
                className="group relative bg-[#131110] border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(197,168,128,0.2)]"
              >
                {/* Thumbnail Container */}
                <div className="aspect-[16/9] relative overflow-hidden bg-stone-900">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover filter brightness-[0.75] transition-all duration-1000 group-hover:scale-105 group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => {
                        setActiveVideoUrl(video.videoUrl);
                        setActiveVideoTitle(video.title);
                      }}
                      className="w-16 h-16 rounded-full bg-white/10 hover:bg-[#C5A880] text-white hover:text-black transition-all duration-500 flex items-center justify-center border border-white/20 hover:border-transparent scale-90 group-hover:scale-100 shadow-2xl"
                      title={`Play ${video.title}`}
                    >
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </button>
                  </div>

                  {/* Duration pill */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-[10px] text-white font-mono tracking-widest px-2 py-1 rounded-sm uppercase border border-white/10">
                    {video.duration}
                  </div>
                </div>

                {/* Text Context */}
                <div className="p-6 space-y-2">
                  <div className="flex justify-between items-center text-xs tracking-wider text-[#C5A880]">
                    <span className="font-cinzel font-semibold uppercase">{video.location}</span>
                    <span className="font-serif italic font-light">4K UltraHD</span>
                  </div>
                  <h4 className="font-cinzel text-lg text-[#EAE6DF] font-medium tracking-wide">
                    {video.title}
                  </h4>
                  <p className="font-jakarta text-xs text-[#9C958E] leading-relaxed font-light">
                    A multi-angle custom choreographed fine-art film grade with bespoke musical scores and native instruments.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Cinematic Video Player Modal Overlay */}
      <AnimatePresence>
        {activeVideoUrl && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
            <div className="absolute inset-0" onClick={() => setActiveVideoUrl(null)}></div>
            
            <div className="bg-[#0F0E0D] border border-white/15 w-full max-w-4xl relative z-10 overflow-hidden shadow-2xl rounded-sm">
              <div className="p-4 bg-[#141211] border-b border-white/5 flex justify-between items-center">
                <span className="font-cinzel text-xs tracking-widest text-[#C5A880] uppercase">
                  NOW PLAYING: {activeVideoTitle}
                </span>
                <button 
                  onClick={() => setActiveVideoUrl(null)}
                  className="p-1.5 text-stone-400 hover:text-white"
                  title="Close Showreel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* HTML5 Video Element playing Vimeo/Stock high quality loop to demonstrate function */}
              <div className="aspect-[16/9] bg-black">
                <video 
                  src={activeVideoUrl} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 bg-[#141211] text-xs text-[#9C958E] text-center font-serif italic">
                “Every showreel is custom color-graded frame-by-frame and synchronized with custom orchestration.”
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>


      {/* 7. Testimonial Section (Words of Grace) */}
      <section id="testimonials" className="py-24 bg-[#0B0A0A] relative overflow-hidden">
        
        {/* Visual Background Glow */}
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#C5A880]/5 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          
          <span className="font-cinzel text-xs tracking-[0.5em] text-[#C5A880] uppercase block mb-2">
            WORDS OF GRACE
          </span>
          <h2 className="font-cinzel text-2xl md:text-4xl text-white uppercase tracking-wider mb-16">
            Praise from noble couples
          </h2>

          <div className="relative min-h-[300px] flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.6 }}
                className="bg-[#131110]/80 backdrop-blur-md border border-[#2D2722] p-8 md:p-14 relative rounded-sm shadow-xl"
              >
                {/* Golden star badge */}
                <div className="flex justify-center space-x-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-3.5 h-3.5 text-[#C5A880]" />
                  ))}
                </div>

                <p className="font-cormorant text-xl md:text-3xl text-[#EAE6DF] leading-relaxed italic mb-8 font-light">
                  {TESTIMONIALS[currentTestimonial].quote}
                </p>

                <div className="space-y-1">
                  <h4 className="font-cinzel text-xs md:text-sm tracking-widest text-[#C5A880] uppercase font-semibold">
                    {TESTIMONIALS[currentTestimonial].author}
                  </h4>
                  <p className="text-[10px] tracking-widest text-stone-500 uppercase">
                    {TESTIMONIALS[currentTestimonial].venue}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Testimonial Controls */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="p-3 bg-stone-900 border border-[#2D2722] text-[#C5A880] hover:text-white hover:bg-[#C5A880]/15 transition-all duration-300 rounded-full"
              title="Previous Praise"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs text-stone-500 font-mono tracking-widest">
              0{currentTestimonial + 1} / 0{TESTIMONIALS.length}
            </div>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
              className="p-3 bg-stone-900 border border-[#2D2722] text-[#C5A880] hover:text-white hover:bg-[#C5A880]/15 transition-all duration-300 rounded-full"
              title="Next Praise"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>


      {/* 8. Contact / Booking Section (The Inquiry Atelier) */}
      <section id="inquire" className="py-24 bg-[#0B0A0A] border-t border-[#1C1713] relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(197,168,128,0.03)_0%,transparent_80%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side text & address guidelines */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <span className="font-cinzel text-xs tracking-[0.5em] text-[#C5A880] uppercase block">
                  THE INQUIRY ATELIER
                </span>
                <h2 className="font-cinzel text-3xl md:text-5xl text-[#EAE6DF] font-light uppercase tracking-wide">
                  Commission Us
                </h2>
                <div className="w-12 h-[1px] bg-[#C5A880]"></div>
              </div>

              <p className="font-jakarta text-[#9C958E] text-sm md:text-base leading-relaxed font-light">
                To maintain our obsessive focus on cinematic color detail, timing, and bespoke heirloom delivery, our studio only accepts a limited number of commissions each season. 
              </p>

              <div className="space-y-6 pt-4 border-t border-white/5">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-stone-900 border border-[#2D2722] text-[#C5A880] rounded-sm mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs tracking-widest text-[#C5A880] uppercase font-bold">Studio Addresses</h4>
                    <p className="text-xs text-[#9C958E] leading-relaxed mt-1">
                      <strong>Mumbai Flagship:</strong> Juhu Tara Road, Juhu, Mumbai, 400049<br />
                      <strong>Udaipur Pavilion:</strong> Lake Pichola Walkway, Rajasthan, 313001<br />
                      <strong>London Studio:</strong> Mayfair, London W1J 8AQ, UK
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-stone-900 border border-[#2D2722] text-[#C5A880] rounded-sm mt-1">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs tracking-widest text-[#C5A880] uppercase font-bold">Direct Inquiries</h4>
                    <p className="text-xs text-stone-400 mt-0.5">commissions@ajinkyajadhav.com</p>
                    <p className="text-[10px] text-stone-500 uppercase mt-0.5">Response timeframe: Under 12 Hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-stone-900 border border-[#2D2722] text-[#C5A880] rounded-sm mt-1">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs tracking-widest text-[#C5A880] uppercase font-bold">Private Concierge Desk</h4>
                    <p className="text-xs text-stone-400 mt-0.5">+91 98334 09832 (International Call line)</p>
                    <p className="text-xs text-stone-400 mt-0.5">+91 22 4930 2039 (Office Desk)</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#141211] border border-[#2D2722] p-6 space-y-3">
                <span className="text-[10px] tracking-widest text-[#C5A880] uppercase block font-bold">CURRENT AVAILABILITY</span>
                <p className="text-xs text-[#9C958E] leading-relaxed">
                  Now reserving editorial photography commissions for the Autumn/Winter 2026-27 wedding calendar. Very few select dates remain available for destination commissions.
                </p>
              </div>

            </div>

            {/* Right side form */}
            <div className="lg:col-span-7 bg-[#110F0E] border border-[#2D2722] p-8 md:p-12 rounded-sm relative">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <form onSubmit={handleInquirySubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      <div className="space-y-2">
                        <label className="text-[10px] tracking-widest text-stone-400 uppercase font-bold flex items-center space-x-1.5">
                          <User className="w-3 h-3 text-[#C5A880]" />
                          <span>YOUR FULL NAME *</span>
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="e.g. Radhika Sen"
                          className="w-full bg-black/60 border border-stone-800 focus:border-[#C5A880] outline-none text-sm text-[#EAE6DF] px-4 py-3 transition-colors rounded-sm font-jakarta"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] tracking-widest text-stone-400 uppercase font-bold">
                          PARTNER’S NAME
                        </label>
                        <input 
                          type="text"
                          value={formData.partnerName}
                          onChange={(e) => setFormData({...formData, partnerName: e.target.value})}
                          placeholder="e.g. Vikram Malhotra"
                          className="w-full bg-black/60 border border-stone-800 focus:border-[#C5A880] outline-none text-sm text-[#EAE6DF] px-4 py-3 transition-colors rounded-sm font-jakarta"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      <div className="space-y-2">
                        <label className="text-[10px] tracking-widest text-stone-400 uppercase font-bold flex items-center space-x-1.5">
                          <Mail className="w-3 h-3 text-[#C5A880]" />
                          <span>EMAIL ADDRESS *</span>
                        </label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="radhika@example.com"
                          className="w-full bg-black/60 border border-stone-800 focus:border-[#C5A880] outline-none text-sm text-[#EAE6DF] px-4 py-3 transition-colors rounded-sm font-jakarta"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] tracking-widest text-stone-400 uppercase font-bold flex items-center space-x-1.5">
                          <Phone className="w-3 h-3 text-[#C5A880]" />
                          <span>CONTACT NUMBER (WITH COUNTRY CODE) *</span>
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 98334 xxxxx"
                          className="w-full bg-black/60 border border-stone-800 focus:border-[#C5A880] outline-none text-sm text-[#EAE6DF] px-4 py-3 transition-colors rounded-sm font-jakarta"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      <div className="space-y-2">
                        <label className="text-[10px] tracking-widest text-stone-400 uppercase font-bold flex items-center space-x-1.5">
                          <Calendar className="w-3 h-3 text-[#C5A880]" />
                          <span>WEDDING DATE *</span>
                        </label>
                        <input 
                          type="date"
                          required
                          value={formData.weddingDate}
                          onChange={(e) => setFormData({...formData, weddingDate: e.target.value})}
                          className="w-full bg-black/60 border border-stone-800 focus:border-[#C5A880] outline-none text-sm text-[#EAE6DF] px-4 py-3 transition-colors rounded-sm font-jakarta"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] tracking-widest text-stone-400 uppercase font-bold">
                          PROPOSED VENUE / CITY
                        </label>
                        <input 
                          type="text"
                          value={formData.venue}
                          onChange={(e) => setFormData({...formData, venue: e.target.value})}
                          placeholder="e.g. Umaid Bhawan Palace, Jodhpur"
                          className="w-full bg-black/60 border border-stone-800 focus:border-[#C5A880] outline-none text-sm text-[#EAE6DF] px-4 py-3 transition-colors rounded-sm font-jakarta"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      <div className="space-y-2">
                        <label className="text-[10px] tracking-widest text-stone-400 uppercase font-bold flex items-center space-x-1.5">
                          <Sliders className="w-3 h-3 text-[#C5A880]" />
                          <span>DESIRED COVERAGE</span>
                        </label>
                        <select 
                          value={formData.packageType}
                          onChange={(e) => setFormData({...formData, packageType: e.target.value})}
                          className="w-full bg-black/60 border border-stone-800 focus:border-[#C5A880] outline-none text-sm text-[#EAE6DF] px-4 py-3 transition-colors rounded-sm font-jakarta"
                        >
                          <option value="photography">Fine-Art Photography Only</option>
                          <option value="cinematography">Premium Cinematography Only</option>
                          <option value="both">Both (Photography &amp; Cinema Showreel)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] tracking-widest text-stone-400 uppercase font-bold">
                          ESTIMATED VALUE RANGE
                        </label>
                        <select 
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          className="w-full bg-black/60 border border-stone-800 focus:border-[#C5A880] outline-none text-sm text-[#EAE6DF] px-4 py-3 transition-colors rounded-sm font-jakarta"
                        >
                          <option value="royal">Imperial Luxury Commission (₹25L+ / $30k+)</option>
                          <option value="luxury">Signature Heritage Commission (₹15L - ₹25L)</option>
                          <option value="editorial">Intimate Editorial Celebration (₹8L - ₹15L)</option>
                        </select>
                      </div>

                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] tracking-widest text-stone-400 uppercase font-bold">
                        TELL US YOUR STORY (YOUR DRESS STYLE, THE THEME, WHAT YOU VALUE IN PHOTOGRAPHY)
                      </label>
                      <textarea 
                        rows={4}
                        value={formData.story}
                        onChange={(e) => setFormData({...formData, story: e.target.value})}
                        placeholder="Share your wedding theme, details of your couturier (Sabyasachi, Manish Malhotra, Raw Mango), your destination goals, etc."
                        className="w-full bg-black/60 border border-stone-800 focus:border-[#C5A880] outline-none text-sm text-[#EAE6DF] px-4 py-3 transition-colors rounded-sm font-jakarta resize-none"
                      />
                    </div>

                    {/* Dynamic Cost Estimate Greeting Indicator */}
                    <div className="bg-[#191512] p-4 rounded-sm border border-[#C5A880]/15">
                      <span className="text-[9px] font-mono tracking-widest text-[#C5A880] uppercase block">PREMIUM PRE-QUALIFICATION</span>
                      <p className="text-[11px] text-[#C5A880] mt-1">
                        You have selected <strong className="underline text-white">{tierText}</strong> {venueText}. We will check maestro schedule alignment and provide initial proposal within 12 hours.
                      </p>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#C5A880] text-[#0B0A0A] font-jakarta font-bold text-xs tracking-[0.3em] uppercase rounded-sm hover:bg-[#D5B890] transition-colors duration-300 shadow-lg flex items-center justify-center space-x-2"
                    >
                      <span>TRANSMIT COMMISION INQUIRY</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                  </form>
                ) : (
                  <motion.div 
                    id="atelier-success-view"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#C5A880] to-[#AA8E65] text-[#0B0A0A] rounded-full flex items-center justify-center mx-auto shadow-xl">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>

                    <div className="space-y-3">
                      <span className="font-cinzel text-xs tracking-[0.4em] text-[#C5A880] uppercase block">INQUIRY TRANSMITTED</span>
                      <h3 className="font-cinzel text-3xl font-medium text-white">Your Legacy Awaits, {formData.fullName}</h3>
                      <p className="text-xs text-stone-400 max-w-lg mx-auto leading-relaxed">
                        We have successfully logged your desire for the <strong className="text-white">{tierText}</strong> {venueText} planned for <strong className="text-white">{formData.weddingDate}</strong>.
                      </p>
                    </div>

                    <div className="bg-stone-900 border border-[#2D2722] p-6 max-w-md mx-auto text-left space-y-3 rounded-sm">
                      <p className="text-xs text-stone-300 font-serif leading-relaxed italic">
                        "Every union is a royal legacy that deserves bespoke archival curation. A Senior Client Coordinator is now validating maestro availability and our creative alignment."
                      </p>
                      <div className="pt-2 border-t border-white/5 text-[10px] text-stone-500 uppercase tracking-widest">
                        ESTIMATED PROPOSAL DIRECTLY SENT TO: <strong className="text-[#C5A880]">{formData.email}</strong>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          fullName: "",
                          partnerName: "",
                          email: "",
                          phone: "",
                          venue: "",
                          packageType: "both",
                          weddingDate: "",
                          story: "",
                          budget: "luxury"
                        });
                      }}
                      className="text-xs text-[#C5A880] hover:text-white underline tracking-widest uppercase mt-4"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>


      {/* 9. Elegant Aesthetic Footer */}
      <footer className="bg-[#070606] text-[#EAE6DF] border-t border-[#1C1713] pt-20 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
            
            {/* Left Column (Brand) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex flex-col tracking-[0.25em] text-left">
                <span className="font-cinzel text-2xl font-semibold text-white">AJINKYA JADHAV</span>
                <span className="text-[10px] tracking-[0.4em] text-[#C5A880] mt-0.5">PHOTOGRAPHY &amp; FILMS</span>
              </div>
              
              <p className="font-jakarta text-stone-500 text-xs leading-relaxed max-w-sm">
                Luxury Indian wedding storytelling for couples who view life as art. Based in Mumbai &amp; Rajasthan, traversing the globe to document raw, uncompromised human emotion.
              </p>

              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-stone-900 border border-[#2D2722] text-[#C5A880] hover:text-white hover:bg-[#C5A880]/10 rounded-full transition-colors"
                  title="Follow us on Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a 
                  href="mailto:commissions@ajinkyajadhav.com" 
                  className="p-2.5 bg-stone-900 border border-[#2D2722] text-[#C5A880] hover:text-white hover:bg-[#C5A880]/10 rounded-full transition-colors"
                  title="Email our team"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a 
                  href="tel:+919833409832" 
                  className="p-2.5 bg-stone-900 border border-[#2D2722] text-[#C5A880] hover:text-white hover:bg-[#C5A880]/10 rounded-full transition-colors"
                  title="Call Studio"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Middle Column 1 (Quick Links) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-cinzel text-xs tracking-widest text-[#C5A880] uppercase font-bold">
                Navigational Archival
              </h4>
              <ul className="space-y-2.5 text-xs text-stone-400">
                <li><a href="#" className="hover:text-[#C5A880] transition-colors">Return to Top</a></li>
                <li><a href="#about" className="hover:text-[#C5A880] transition-colors">The Studio Philosophy</a></li>
                <li><a href="#featured" className="hover:text-[#C5A880] transition-colors">Featured Cover Stories</a></li>
                <li><a href="#portfolio" className="hover:text-[#C5A880] transition-colors">Fine Art Gallery Archives</a></li>
                <li><a href="#films" className="hover:text-[#C5A880] transition-colors">Cinematography Showreels</a></li>
                <li><a href="#testimonials" className="hover:text-[#C5A880] transition-colors">Client Praises &amp; Letters</a></li>
                <li><a href="#inquire" className="hover:text-[#C5A880] transition-colors">Commission Inquiry Atelier</a></li>
              </ul>
            </div>

            {/* Middle Column 2 (Global Venues Covered) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-cinzel text-xs tracking-widest text-[#C5A880] uppercase font-bold">
                Legacy Venues Documented
              </h4>
              <ul className="space-y-2.5 text-xs text-stone-400">
                <li>Umaid Bhawan Palace, Jodhpur</li>
                <li>The Taj Mahal Palace, Mumbai</li>
                <li>Taj Lake Palace &amp; Udaivilas, Udaipur</li>
                <li>Suryagarh Palace, Jaisalmer</li>
                <li>Rambagh Palace, Jaipur</li>
                <li>Amalfi Coast, Venice &amp; Como, Italy</li>
                <li>One&amp;Only Royal Mirage, Dubai</li>
              </ul>
            </div>

            {/* Right Column (Newsletter subscription / brand badge) */}
            <div className="lg:col-span-2 flex flex-col justify-between items-start md:items-end text-left md:text-right">
              <div className="w-16 h-16 border border-[#C5A880]/40 rounded-full flex items-center justify-center mb-4">
                <span className="font-cinzel text-lg text-[#C5A880] font-bold">AJ</span>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-stone-500 uppercase">MEMBER OF</p>
                <p className="text-[11px] text-[#C5A880] tracking-wider uppercase font-semibold">WORLD FINE-ART WEDDING PHOTOGRAPHERS</p>
                <p className="text-[10px] text-stone-500 mt-1">ESTABLISHED 2014</p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Fine Prints */}
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[11px] text-stone-500 tracking-wider">
            <div className="text-center md:text-left space-y-1">
              <p>© 2026 AJINKYA JADHAV PHOTOGRAPHY &amp; FILMS. ALL RIGHTS RESERVED.</p>
              <p className="text-[9px] text-stone-600">HANDCRAFTED EDITORIAL WEB PERFORMANCE COMMISSION.</p>
            </div>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">PRIVACY AGREEMENT</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">TERMS OF PATRONAGE</a>
              <span>•</span>
              <a href="#inquire" className="hover:text-white transition-colors text-[#C5A880]">PARTNER PORTAL</a>
            </div>
          </div>

        </div>
      </footer>


      {/* 10. WhatsApp floating button for immediate client inquiries */}
      <a 
        href="https://wa.me/919833409832?text=Hello%20Ajinkya%20Jadhav%20Photography%20Atelier,%20I%20would%20love%20to%20inquire%20about%20a%20luxury%20wedding%20commission..." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 rounded-full flex items-center space-x-2 shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105"
        title="Direct VIP Inquiry via WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <span className="text-xs tracking-wider uppercase font-bold">WhatsApp Inquire</span>
      </a>


      {/* Premium Lightbox Modal for Gallery Plate Archival Zooming */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/98 flex flex-col justify-between p-4 md:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div className="flex justify-between items-center text-white z-10">
              <div className="space-y-0.5">
                <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase">
                  {PORTFOLIO_ITEMS[lightboxIndex].location}
                </span>
                <h4 className="font-cinzel text-sm md:text-base font-semibold">
                  {PORTFOLIO_ITEMS[lightboxIndex].title}
                </h4>
              </div>
              
              <div className="flex items-center space-x-6">
                <span className="text-xs font-mono text-stone-400">
                  {lightboxIndex + 1} / {PORTFOLIO_ITEMS.length}
                </span>
                <button 
                  onClick={() => setLightboxIndex(null)}
                  className="p-2.5 bg-white/5 rounded-full border border-white/10 hover:text-[#C5A880] transition-colors"
                  title="Close Archival Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Central Media Zoom Area */}
            <div className="relative flex-1 flex items-center justify-center my-4">
              
              {/* Prev Button */}
              <button 
                onClick={prevLightbox}
                className="absolute left-2 md:left-6 p-4 bg-black/60 hover:bg-[#C5A880]/20 rounded-full text-white border border-white/10 hover:border-[#C5A880] transition-all duration-300"
                title="Previous Plate"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <motion.img 
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                src={PORTFOLIO_ITEMS[lightboxIndex].image} 
                alt={PORTFOLIO_ITEMS[lightboxIndex].title} 
                className="max-h-[75vh] max-w-[85vw] object-contain shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/5"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next Button */}
              <button 
                onClick={nextLightbox}
                className="absolute right-2 md:right-6 p-4 bg-black/60 hover:bg-[#C5A880]/20 rounded-full text-white border border-white/10 hover:border-[#C5A880] transition-all duration-300"
                title="Next Plate"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
            </div>

            {/* Bottom Meta & Spec guidelines */}
            <div className="text-center pb-2 text-stone-400 z-10" onClick={(e) => e.stopPropagation()}>
              <p className="text-xs tracking-widest font-mono uppercase text-[#C5A880]">
                CAMERA SPECIFICATIONS: {PORTFOLIO_ITEMS[lightboxIndex].meta}
              </p>
              <p className="text-[10px] text-stone-500 mt-1 uppercase tracking-wider">
                RAW MASTER ARCHIVE PLATE • HAND-GRADED BY AJINKYA JADHAV STUDIO
              </p>
            </div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
