import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

/* Portfolio photos from foto folder with names */
const workItems = [
  { src: "/foto/2A7A3153.jpg", name: "ELARA" },
  { src: "/foto/2A7A4835.jpg", name: "SERAPHINE" },
  { src: "/foto/71.jpg", name: "AURORA" },
  { src: "/foto/ANAYABLACK2.jpg", name: "ANAYA" },
  { src: "/foto/ANAYACREAM1.jpg", name: "LUMIÈRE" },
  { src: "/foto/ANNABLOUSECREAM8.jpg", name: "ANNA" },
  { src: "/foto/BADDA2.jpg", name: "BADDA" },
  { src: "/foto/CORABLACK2.jpg", name: "CORA" },
  { src: "/foto/DBL MAUVE 3.jpg", name: "MAUVE" },
]

function WorkPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const carouselWrapperRef = useRef(null)
  const carouselTrackRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState(null)

  /* Check if desktop (>=1280px) */
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1280)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  const [scrollX, setScrollX] = useState(0)

  /* Horizontal scrolling via mouse wheel and touch without any page vertical scroll */
  useEffect(() => {
    const wrapper = carouselWrapperRef.current
    const track = carouselTrackRef.current
    if (!wrapper || !track) return

    const handleWheel = (e) => {
      // Prevent browser default vertical scroll
      e.preventDefault()

      const maxScroll = track.scrollWidth - wrapper.clientWidth
      if (maxScroll <= 0) return

      // Use deltaY (mouse wheel vertical) or deltaX (trackpad horizontal)
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY

      setScrollX((prev) => {
        const next = prev + delta
        return Math.max(0, Math.min(next, maxScroll))
      })
    }

    let touchStartX = 0
    let touchStartY = 0
    let initialScrollX = 0

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
      initialScrollX = scrollX
    }

    const handleTouchMove = (e) => {
      e.preventDefault()
      const deltaX = touchStartX - e.touches[0].clientX
      const maxScroll = track.scrollWidth - wrapper.clientWidth
      if (maxScroll <= 0) return
      const next = initialScrollX + deltaX
      setScrollX(Math.max(0, Math.min(next, maxScroll)))
    }

    wrapper.addEventListener('wheel', handleWheel, { passive: false })
    wrapper.addEventListener('touchstart', handleTouchStart, { passive: true })
    wrapper.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      wrapper.removeEventListener('wheel', handleWheel)
      wrapper.removeEventListener('touchstart', handleTouchStart)
      wrapper.removeEventListener('touchmove', handleTouchMove)
    }
  }, [scrollX])

  /* Track mouse position relative to the card for the custom cursor */
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setHoveredCard(index)
  }

  const handleMouseLeave = () => {
    setHoveredCard(null)
  }

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#FFFFFF] h-screen h-[100dvh] w-full overflow-hidden font-sans text-[#1A1A1A] relative flex flex-col justify-center">

      {/* ===== NAVBAR (FIXED TOP + BLEND MODE: DIFFERENCE) ===== */}
      <nav className="fixed top-0 left-0 z-50 w-full px-5 pt-5 pb-[30px] flex items-start justify-between mix-blend-difference pointer-events-none">
        <Link
          to="/"
          className="text-[16px] font-nats font-normal tracking-[0.15em] uppercase text-white hover:opacity-70 transition-opacity xl:w-[150px] xl:h-[16px] xl:leading-[16px] inline-flex items-center pointer-events-auto"
        >
          DEA RAHMAWATI
        </Link>

        {/* Desktop Navigation (>= 800px) */}
        <div className="hidden min-[800px]:flex items-center gap-8 pointer-events-auto">
          <Link to="/work" className="text-[16px] font-medium tracking-[0.15em] uppercase text-white hover:opacity-60 transition-opacity">
            Work
          </Link>
          <a href="/#about" className="text-[16px] font-medium tracking-[0.15em] uppercase text-white hover:opacity-60 transition-opacity">
            About
          </a>
          <a href="/#contact" className="text-[16px] font-medium tracking-[0.15em] uppercase text-white hover:opacity-60 transition-opacity">
            Contact
          </a>
        </div>

        {/* Mobile Navigation (< 800px) */}
        <div className="flex min-[800px]:hidden flex-col items-end pointer-events-auto select-none">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[16px] font-medium tracking-[0.15em] uppercase text-white hover:opacity-70 transition-opacity text-right bg-transparent border-none p-0 cursor-pointer"
          >
            Menu
          </button>

          {isMenuOpen && (
            <div className="flex flex-col items-end text-right mt-2 gap-1.5">
              <Link
                to="/work"
                onClick={() => setIsMenuOpen(false)}
                className="text-[16px] font-medium tracking-[0.15em] uppercase text-white hover:opacity-60 transition-opacity"
              >
                Work
              </Link>
              <a
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-[16px] font-medium tracking-[0.15em] uppercase text-white hover:opacity-60 transition-opacity"
              >
                About
              </a>
              <a
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-[16px] font-medium tracking-[0.15em] uppercase text-white hover:opacity-60 transition-opacity"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ===== WORK CAROUSEL (FIT 100VH - HORIZONTAL ONLY) ===== */}
      <div
        ref={carouselWrapperRef}
        className="relative w-full h-full flex items-center overflow-hidden pt-[70px] pb-[30px]"
      >
        <div
          ref={carouselTrackRef}
          className="flex items-start gap-[24px] pl-[20px] pr-[20px] will-change-transform"
          style={{
            transform: `translateX(-${scrollX}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {workItems.map((item, i) => (
            <div key={i} className="flex-shrink-0 flex flex-col items-start">
              {/* Photo container with custom cursor hover */}
              <div
                className="work-card relative overflow-hidden"
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="lazy"
                  draggable={false}
                />
                {/* Custom "look" cursor overlay — follows mouse */}
                {hoveredCard === i && (
                  <div
                    className="work-card-cursor"
                    style={{
                      left: `${mousePos.x}px`,
                      top: `${mousePos.y}px`,
                    }}
                  >
                    <span className="work-card-cursor-text">LOOK</span>
                  </div>
                )}
              </div>
              {/* Name below photo */}
              <span className="work-card-name">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkPage
