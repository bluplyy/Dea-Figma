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
  const [isMobile, setIsMobile] = useState(false)
  const carouselWrapperRef = useRef(null)
  const carouselTrackRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState(null)

  /* Check viewport width */
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280)
      setIsMobile(window.innerWidth < 800)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [scrollX, setScrollX] = useState(0)
  const scrollXRef = useRef(0)
  const [isSwipingState, setIsSwipingState] = useState(false)

  /* Horizontal scrolling via mouse wheel and touch (only for >= 800px) */
  useEffect(() => {
    if (isMobile) return
    const wrapper = carouselWrapperRef.current
    const track = carouselTrackRef.current
    if (!wrapper || !track) return

    // Wheel scroll (desktop / trackpad)
    const handleWheel = (e) => {
      e.preventDefault()
      const maxScroll = track.scrollWidth - wrapper.clientWidth
      if (maxScroll <= 0) return

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      const next = Math.max(0, Math.min(scrollXRef.current + delta, maxScroll))
      scrollXRef.current = next
      setScrollX(next)
    }

    // Touch events for mobile/tablet swipe gesture
    let touchStartX = 0
    let touchStartY = 0
    let startScrollX = 0
    let isSwiping = false

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
      startScrollX = scrollXRef.current
      isSwiping = false
    }

    const handleTouchMove = (e) => {
      const currentX = e.touches[0].clientX
      const currentY = e.touches[0].clientY
      const diffX = touchStartX - currentX
      const diffY = touchStartY - currentY

      if (!isSwiping) {
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 6) {
          isSwiping = true
          setIsSwipingState(true)
        }
      }

      if (isSwiping) {
        if (e.cancelable) e.preventDefault()
        const maxScroll = track.scrollWidth - wrapper.clientWidth
        if (maxScroll <= 0) return
        const next = Math.max(0, Math.min(startScrollX + diffX, maxScroll))
        scrollXRef.current = next
        setScrollX(next)
      }
    }

    const handleTouchEnd = () => {
      isSwiping = false
      setIsSwipingState(false)
    }

    wrapper.addEventListener('wheel', handleWheel, { passive: false })
    wrapper.addEventListener('touchstart', handleTouchStart, { passive: true })
    wrapper.addEventListener('touchmove', handleTouchMove, { passive: false })
    wrapper.addEventListener('touchend', handleTouchEnd, { passive: true })
    wrapper.addEventListener('touchcancel', handleTouchEnd, { passive: true })

    return () => {
      wrapper.removeEventListener('wheel', handleWheel)
      wrapper.removeEventListener('touchstart', handleTouchStart)
      wrapper.removeEventListener('touchmove', handleTouchMove)
      wrapper.removeEventListener('touchend', handleTouchEnd)
      wrapper.removeEventListener('touchcancel', handleTouchEnd)
    }
  }, [isMobile])

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
    <div className={`bg-[#FFFFFF] w-full font-sans text-[#1A1A1A] relative flex flex-col justify-center ${
      isMobile ? 'min-h-screen overflow-y-auto' : 'h-screen h-[100dvh] overflow-hidden'
    }`}>

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
          <Link to="/contact" className="text-[16px] font-medium tracking-[0.15em] uppercase text-white hover:opacity-60 transition-opacity">
            Contact
          </Link>
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
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-[16px] font-medium tracking-[0.15em] uppercase text-white hover:opacity-60 transition-opacity"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* ===== WORK CONTENT (VERTICAL ON <800px, HORIZONTAL CAROUSEL ON >=800px) ===== */}
      <div
        ref={carouselWrapperRef}
        className={`relative w-full ${
          isMobile
            ? 'pt-[90px] pb-[60px] px-5 flex justify-center'
            : 'h-full flex items-center overflow-hidden pt-[70px] pb-[30px] touch-pan-x select-none'
        }`}
      >
        <div
          ref={carouselTrackRef}
          className={
            isMobile
              ? 'flex flex-col items-center gap-[48px] w-full max-w-[500px]'
              : 'flex items-start gap-[24px] pl-[20px] pr-[20px] will-change-transform'
          }
          style={
            isMobile
              ? {}
              : {
                  transform: `translateX(-${scrollX}px)`,
                  transition: isSwipingState ? 'none' : 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
                }
          }
        >
          {workItems.map((item, i) => {
            const cardContent = (
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
                {/* Custom "look" cursor overlay — follows mouse (Desktop >= 1280px only) */}
                {isDesktop && hoveredCard === i && (
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
            )

            return (
              <div key={i} className={isMobile ? 'w-full flex flex-col items-start' : 'flex-shrink-0 flex flex-col items-start'}>
                {/* Clickable link to /work/:id */}
                <Link
                  to={`/work/${i + 1}`}
                  className="block w-full cursor-pointer outline-none select-none"
                  onClick={(e) => {
                    if (isSwipingState) {
                      e.preventDefault()
                    }
                  }}
                >
                  {cardContent}
                </Link>
                {/* Name below photo */}
                <span className="work-card-name">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WorkPage
