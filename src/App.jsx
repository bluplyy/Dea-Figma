import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

/* Hero images */
const heroImage = "/foto/2A7A4835.jpg"
const heroPortrait = "/foto/71.jpg"

/* Portfolio photos dari folder foto */
const localPhotos = [
  "/foto/2A7A3153.jpg",
  "/foto/2A7A4835.jpg",
  "/foto/71.jpg",
  "/foto/ANAYABLACK2.jpg",
  "/foto/ANAYACREAM1.jpg",
  "/foto/ANNABLOUSECREAM8.jpg",
  "/foto/BADDA2.jpg",
  "/foto/CORABLACK2.jpg",
  "/foto/DBL MAUVE 3.jpg",
]

/* Diulang agar tetap mengisi 21 slot project sesuai desain */
const photos = [
  ...localPhotos,
  ...localPhotos,
  localPhotos[0],
  localPhotos[1],
  localPhotos[2],
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-[#E5E3D4] min-h-screen font-sans text-[#1A1A1A]">

      {/* ===== NAVBAR (FIXED TOP + BLEND MODE: DIFFERENCE) ===== */}
      <nav className="fixed top-0 left-0 z-50 w-full px-5 pt-5 pb-[30px] flex items-start justify-between mix-blend-difference pointer-events-none">
        <Link
          to="/"
          className="text-[16px] font-nats font-normal tracking-[0.15em] uppercase text-white xl:w-[150px] xl:h-[16px] xl:leading-[16px] inline-flex items-center pointer-events-auto"
        >
          DEA RAHMAWATI
        </Link>

        {/* Desktop Navigation (>= 800px): Horizontal row */}
        <div className="hidden min-[800px]:flex items-center gap-8 pointer-events-auto">
          <Link to="/work" className="text-[16px] font-medium tracking-[0.15em] uppercase text-white">
            Work
          </Link>
          <Link to="/about" className="text-[16px] font-medium tracking-[0.15em] uppercase text-white">
            About
          </Link>
          <Link to="/contact" className="text-[16px] font-medium tracking-[0.15em] uppercase text-white">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation (< 800px): 'MENU' di rata kanan, diklik muncul 3 baris rata kanan */}
        <div className="flex min-[800px]:hidden flex-col items-end pointer-events-auto select-none">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[16px] font-medium tracking-[0.15em] uppercase text-white text-right bg-transparent border-none p-0 cursor-pointer"
          >
            Menu
          </button>

          {isMenuOpen && (
            <div className="flex flex-col items-end text-right mt-2 gap-1.5">
              <Link
                to="/work"
                onClick={() => setIsMenuOpen(false)}
                className="text-[16px] font-medium tracking-[0.15em] uppercase text-white"
              >
                Work
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-[16px] font-medium tracking-[0.15em] uppercase text-white"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-[16px] font-medium tracking-[0.15em] uppercase text-white"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* ===== HERO SECTION (DESKTOP MODE: 20PX PADDING) ===== */}
      <header className="relative w-full h-[623px] px-5 pt-[70px] mb-[50px]">
        <div className="relative w-full h-full">
          {/* Portrait Photo: Pinned bottom-left, 285x369px on desktop (>=1280px), 216x279px on 800-1279px */}
          <div className="absolute bottom-0 left-0 w-[216px] h-[279px] xl:w-[285px] xl:h-[369px] max-[799px]:w-[167px] max-[799px]:h-[216px] overflow-hidden">
            <img
              src={heroPortrait}
              alt="DEA RAHMAWATI Portrait"
              className="w-full h-full object-cover select-none"
            />
          </div>

          {/* DEA RAHMAWATI Title: Centered horizontally and vertically with Difference blend mode */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 whitespace-nowrap pointer-events-none mix-blend-difference flex items-center justify-center xl:w-[221px] xl:h-[35px]">
            <h1 className="text-[24px] font-nats font-normal tracking-[0.2em] uppercase text-white select-none text-center xl:leading-[35px]">
              DEA RAHMAWATI
            </h1>
          </div>

          {/* Runway Model Hero Photo: Pinned top-right, 525x498px on desktop (>=1280px), 414x393px on 800-1279px, 252x239px on <800px */}
          <div className="absolute top-0 right-0 w-[414px] h-[393px] xl:w-[525px] xl:h-[498px] max-[799px]:w-[252px] max-[799px]:h-[239px] overflow-hidden">
            <img
              src={heroImage}
              alt="DEA RAHMAWATI Runway Collection"
              className="w-full h-full object-cover select-none"
            />
          </div>
        </div>
      </header>

      {/* ===== 21 PROJECTS / DISCOVER MORE (HEIGHT 254PX & ALIGN CENTER) ===== */}
      <section className="w-full h-[254px] px-5 mb-[50px] flex flex-col items-center justify-center text-center select-none">
        <p className="text-[16px] font-nats font-normal tracking-[0.15em] uppercase text-[#1A1A1A] leading-tight">
          21 Projects<br />Discover More
        </p>
        <svg
          className="mt-3.5 text-[#1A1A1A]"
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
        >
          <path d="M4 5L0.5 0.5H7.5L4 5Z" fill="currentColor" />
        </svg>
      </section>

      {/* ===== PHOTO GRID (FIGMA AUTO LAYOUT: W-1240, GAP-X: 8PX, GAP-Y: 16PX, PB: 10PX, PHOTOS: 159x159PX WITH HOVER ANIMATION) ===== */}
      <section id="work" className="w-full px-5 mb-[50px] flex justify-center">
        <div
          className="w-full max-w-[1240px] flex flex-wrap justify-center items-center pb-[10px]"
          style={{
            columnGap: '8px',
            rowGap: '16px',
          }}
        >
          {photos.map((src, i) => (
            <div
              key={i}
              className="group relative w-[159px] h-[159px] flex-shrink-0 overflow-hidden cursor-pointer"
            >
              {/* Photo Image */}
              <img
                src={src}
                alt={`Project ${i + 1}`}
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />

              {/* Figma Hover Overlay: Solid Taupe/Olive background with centered 'ENTER' text (Desktop >= 1280px only) */}
              <div className="absolute inset-0 bg-[#6F6E63] hidden xl:flex items-center justify-center opacity-0 xl:group-hover:opacity-100 transition-opacity duration-200 ease-in-out select-none pointer-events-none">
                <span className="text-white text-[15px] font-normal tracking-[0.08em] uppercase font-nats">
                  ENTER
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER (FIGMA SPEC: CARD WITH 20PX MARGIN/PADDING KANAN-KIRI & BAWAH) ===== */}
      <div className="w-full px-5 pb-5">
        <footer className="w-full min-h-[467px] h-auto min-[800px]:h-[467px] bg-[#6A695E] text-white pt-8 pb-3 px-5 sm:px-8 flex flex-col justify-between overflow-hidden">
          {/* Row 1: Brand / Location */}
          <div className="flex justify-between items-center text-[16px] font-medium tracking-[0.15em] uppercase pb-8 min-[800px]:pb-[100px]">
            <span className="text-left">DEA RAHMAWATI</span>
            <span className="text-right">JAKARTA, INDONESIA</span>
          </div>

          {/* Grouped Div: EMAIL, INSTA, LINKEDIN & MADE BY (HEIGHT: 168PX) */}
          <div className="w-full h-[168px] flex flex-col items-center justify-between">
            {/* Links: Email / Insta / LinkedIn */}
            <div className="w-full grid grid-cols-3 text-[16px] font-medium tracking-[0.15em] uppercase">
              <div className="text-left">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dearahmawati900@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  EMAIL
                </a>
              </div>
              <div className="text-center">
                <a href="https://www.instagram.com/dearrhm/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  INSTA
                </a>
              </div>
              <div className="text-right">
                <a href="https://www.linkedin.com/in/dea-rahmawati-445846264/?isSelfProfile=false" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  LINKEDIN
                </a>
              </div>
            </div>

            {/* Label: MADE BY */}
            <div className="text-center">
              <span className="text-[16px] font-medium tracking-[0.18em] uppercase text-white/90">
                MADE BY
              </span>
            </div>
          </div>

          {/* Row 3: Large Footer Brand Name (Tinggi 290px/300px, align-center) */}
          <div className="w-full h-[150px] xl:w-[1080px] mx-auto select-none leading-none flex items-center justify-center">
            <h2 className="w-full h-full font-nats font-normal uppercase text-white flex items-center justify-between min-[800px]:justify-center min-[800px]:text-[110px] xl:text-[170px] min-[800px]:tracking-[-0.02em]">
              <span className="min-[800px]:hidden text-[200px] leading-none text-left">D</span>
              <span className="min-[800px]:hidden text-[200px] leading-none text-center">.</span>
              <span className="min-[800px]:hidden text-[200px] leading-none text-right">R</span>
              <span className="hidden min-[800px]:inline whitespace-nowrap">DEA RAHMAWATI</span>
            </h2>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
