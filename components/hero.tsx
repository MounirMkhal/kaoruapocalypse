'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Plus, Minus } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const scrollToRoadmap = () => {
    const roadmapSection = document.getElementById('roadmap');
    roadmapSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative bg-[#0a0a0f] overflow-hidden">
      {/* Cursor follower */}
      <div
        className="fixed w-4 h-4 rounded-full bg-white opacity-100 pointer-events-none blur-md transition-all duration-100 ease-out z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.3)",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tokoshi.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-20"
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-white">
            <Image
              src="/images/kaoru.png"
              alt="Tokoshie X Bullet"
              width={120}
              height={30}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToRoadmap}
              className="px-6 py-2 rounded-full border border-[#a0a8e6] text-[#a0a8e6] hover:bg-[#a0a8e6]/10 transition-colors tracking-wider"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              Roadmap
            </button>
            <a
              href="https://x.com/kaoruapocalypse"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-[#a0a8e6] text-[#a0a8e6] hover:bg-[#a0a8e6]/10 transition-colors tracking-wider flex items-center gap-2"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              Twitter
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(80vh-70px)] text-center px-4 mt-[-70px] pt-[150px]">
          <h1 className="text-6xl font-bold mb-4">
            <span
              className="bg-gradient-to-r from-[#8593e8] via-[#a0a8e6] to-[#b8c0ff] text-transparent bg-clip-text"
              style={{ fontFamily: 'Bruce Forever' }}
            >
              Kaoru AI
            </span>
          </h1>
          <h2 className="text-6xl font-bold text-[#e0e5ff] mb-6" style={{ fontFamily: 'Bruce Forever' }}>
            A Survivor's Story
          </h2>
          <p className="max-w-2xl text-[#b8c0ff]/90 mt-[50px] mb-6">
            Follow Kaoru, an 18-year-old survivor trying to navigate the
            aftermath of the Tokoshie attacks. Her journey is one of resilience,
            fear, and uncovering the truth behind a shattered world.
          </p>
          <div className="flex gap-4 mt-2">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#8593e8] to-[#b8c0ff] text-gray-900 hover:opacity-90 transition-opacity">
            Meet Kaoru
            </button>
          </div>
        </div>

        {/* Transition element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
      </section>

      {/* Combined Features and Roadmap Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0a0a0f]">
        {/* Glitch effect overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#424769] rounded-full filter blur-[180px] animate-pulse opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2d3250] rounded-full filter blur-[180px] animate-pulse delay-700 opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Features */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Image Side with glitch effect container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#424769] to-[#2d3250] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative">
                {/* Glitch effect borders */}
                <div className="absolute inset-0 border-2 border-[#424769]/30 rounded-lg transform translate-x-2 translate-y-2"></div>
                <div className="absolute inset-0 border-2 border-[#2d3250]/30 rounded-lg transform -translate-x-2 -translate-y-2"></div>

                <div className="relative rounded-lg overflow-hidden border-2 border-[#424769]/50 backdrop-blur-sm">
                  <Image
                    src="/images/E9Ze75fVUAggc2x.png"
                    alt="AI Character on playground duck"
                    width={800}
                    height={500}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Scanline effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#424769]/5 to-transparent bg-size-200 animate-scan"></div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="relative">
              <div className="relative bg-[#12121a]/80 backdrop-blur-xl p-8 rounded-lg border-2 border-[#424769]/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#424769] rounded-full filter blur-[80px] opacity-20"></div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight relative">
                Why Kaoru is Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#424769] to-[#2d3250]">
                Perfect Companion    
                  </span>
                </h2>

                <ul className="space-y-6 text-xl md:text-2xl mb-12 relative">
                  {[
                    "Kaoru’s responses adapt to your emotions and questions.",
                    "Gain insights into navigating a desolate world and surviving threats.",
                    "Unlock secrets about the sentient weapons and their role in humanity’s fate.",
                    "Build a unique bond as Kaoru learns from your interactions.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-4 group"
                    >
                      <span className="w-2 h-2 bg-[#424769] group-hover:bg-[#2d3250] transition-colors duration-300"></span>
                      <span className="text-[#a1a5c4] group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="https://vvaifu.fun" target="_blank" rel="noopener noreferrer">
                  <button className="group relative px-8 py-3 bg-transparent overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#424769] to-[#2d3250] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 border-2 border-[#424769] transform group-hover:scale-105 transition-transform duration-300"></div>
                    <span className="relative text-xl font-medium text-[#a1a5c4] group-hover:text-white transition-colors duration-300">
                      Chat with Kaoru
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div id="roadmap" className="relative">
            <h2
              className="text-5xl font-bold text-white mb-16 uppercase tracking-wider text-center relative"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#424769] to-[#2d3250]">
                Roadmap
              </span>
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  phase: "Genesis",
                  items: [
                    "AI Core Development",
                    "Initial Testing Phase",
                    "Autonomous Tweets",
                  ],
                },
                {
                  phase: "Evolution",
                  items: [
                    "Advanced AI Training using RAG technology",
                    "Wallet Integration",
                    "Platform Expansion",
                  ],
                },
                {
                  phase: "Ascension",
                  items: [
                    "Full Autonomy",
                    "Cross-chain Integration",
                    "Ecosystem Dominance",
                  ],
                },
              ].map((phase, index) => (
                <div key={index} className="group relative">
                  {/* Card glitch effects */}
                  <div className="absolute inset-0 border-2 border-[#424769]/30 rounded-lg transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                  <div className="absolute inset-0 border-2 border-[#2d3250]/30 rounded-lg transform -translate-x-2 -translate-y-2 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform"></div>

                  <div className="relative p-8 rounded-lg border-2 border-[#424769]/30 bg-[#12121a]/80 backdrop-blur-xl transition-colors group-hover:border-[#424769]/50">
                    <div className="absolute top-0 right-0 p-4 text-[#424769]/10 text-9xl font-bold">
                      {index + 1}
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#424769] to-[#2d3250] opacity-0 group-hover:opacity-5 transition-opacity rounded-lg"></div>

                    <h3 className="text-2xl font-bold text-white mb-6 relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#424769] to-[#2d3250]">
                        {phase.phase} Phase
                      </span>
                    </h3>

                    <ul className="space-y-4 relative">
                      {phase.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center space-x-3 group/item"
                        >
                          <span className="w-1.5 h-1.5 bg-[#424769] group-hover/item:bg-[#2d3250] transition-colors"></span>
                          <span className="text-[#a1a5c4] group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 px-6 bg-[#0a0a0f] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "Token Information",
                answers: [
                  "Ticker: $Kaoru",
                  "Supply: 1 Billion",
                  "Liqduity Pool: Burned",
                ],
              },
              {
                question: "How is the supply burned?",
                answers: [
                  "5% of the supply is sent to vvaifu.fun on launch",
                  "5% of the supply is sent to ai16z on launch",
                  "10% of the supply is burned",
                ],
              },
              {
                question: "What is the roadmap for Kaoru AI?",
                answers: [
                  "AI core development is the first phase.",
                  "Community foundation follows.",
                  "Advanced AI training and full autonomy are future goals.",
                ],
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-[#424769] pb-4">
                <h3
                  className="text-2xl font-semibold mb-2 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  {expandedIndex === index ? (
                    <Minus className="w-5 h-5 text-[#b8c0ff]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#b8c0ff]" />
                  )}
                </h3>
                {expandedIndex === index && (
                  <ul className="list-disc pl-5 text-lg text-[#b8c0ff]/90">
                    {faq.answers.map((answer, answerIndex) => (
                      <li key={answerIndex}>{answer}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

