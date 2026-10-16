import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#FFFFFF] w-full h-screen h-[100dvh] overflow-hidden font-nats text-[#1A1A1A] relative flex flex-col">
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

      {/* ===== TAMPILAN MOBILE (< 800PX): TIDAK BISA DI-SCROLL, TEKS DI ATAS, FOTO DI BAWAH ===== */}
      <div className="min-[800px]:hidden w-full h-full flex flex-col pt-[100px] overflow-hidden">
        {/* Teks di atas: px-5, font NATS, ukuran 16, rata kiri, letter-spacing -2%, line-height 200% */}
        <div className="w-full px-5 pb-6 flex-shrink-0">
          {/* DIV CONTACT */}
          <div className="mb-2">
            <h1
              className="font-nats font-normal uppercase text-[#1A1A1A] text-left"
              style={{
                fontSize: '16px',
                letterSpacing: '-0.02em',
                lineHeight: '200%',
              }}
            >
              CONTACT
            </h1>
          </div>

          {/* DIV INFORMASI EMAIL, INSTAGRAM, LINKEDIN (1 DIV, FONT NATS 16, LINE HEIGHT 200%, LETTER SPACING -2%) */}
          <div
            className="flex flex-col text-left font-nats font-normal uppercase text-[#1A1A1A]"
            style={{
              fontSize: '16px',
              lineHeight: '200%',
              letterSpacing: '-0.02em',
            }}
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dearahmawati900@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left hover:opacity-60 transition-opacity block"
            >
              EMAIL : DEARAHMAWATI900@GMAIL.COM
            </a>
            <a
              href="https://www.instagram.com/dearrhm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left hover:opacity-60 transition-opacity block"
            >
              INSTAGRAM: @DEARRHM
            </a>
            <a
              href="https://www.linkedin.com/in/dea-rahmawati-445846264/?isSelfProfile=false"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left hover:opacity-60 transition-opacity block"
            >
              LINKEDIN: LINKEDIN.COM/IN/DEA-RAHMAWATI-445846264
            </a>
          </div>
        </div>

        {/* Foto polkadot di bawah (mengisi sisa tinggi layar tanpa scroll) */}
        <div className="w-full flex-1 min-h-0 overflow-hidden">
          <img
            src="/contact-bg.jfif"
            alt="Contact Visual Asset"
            className="w-full h-full object-cover object-top select-none block"
            loading="eager"
          />
        </div>
      </div>

      {/* ===== TAMPILAN DESKTOP (>= 800PX): SPLIT 50% LEFT / 50% RIGHT (NO SCROLL) ===== */}
      <div className="hidden min-[800px]:flex w-full h-full overflow-hidden flex-row">
        {/* SISI KIRI: TEKS INFORMASI CONTACT */}
        <div className="w-1/2 h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 xl:px-20 2xl:px-24">
          {/* INDUK DIV: DIV CONTACT + DIV EMAIL/INSTA/LINKEDIN MENJADI 1 DIV */}
          <div className="w-full max-w-[560px] flex flex-col text-left">
            {/* DIV CONTACT (TINGGI AREA: 43PX) */}
            <div
              className="h-[43px] flex items-center"
              style={{ height: '43px' }}
            >
              <h1
                className="font-nats font-normal uppercase text-[#1A1A1A] text-left"
                style={{
                  fontSize: '24px',
                  letterSpacing: '-0.02em',
                  lineHeight: '130%',
                }}
              >
                CONTACT
              </h1>
            </div>

            {/* DIV EMAIL, INSTAGRAM, LINKEDIN (1 DIV, FONT NATS, UKURAN 24, RATA KIRI, LINE HEIGHT 130%, LETTER SPACING -2%) */}
            <div
              className="flex flex-col text-left font-nats font-normal uppercase text-[#1A1A1A] mt-4"
              style={{
                fontSize: '24px',
                lineHeight: '130%',
                letterSpacing: '-0.02em',
              }}
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dearahmawati900@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left hover:opacity-60 transition-opacity block"
              >
                EMAIL : DEARAHMAWATI900@GMAIL.COM
              </a>
              <a
                href="https://www.instagram.com/dearrhm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left hover:opacity-60 transition-opacity block"
              >
                INSTAGRAM: @DEARRHM
              </a>
              <a
                href="https://www.linkedin.com/in/dea-rahmawati-445846264/?isSelfProfile=false"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left hover:opacity-60 transition-opacity block"
              >
                LINKEDIN: LINKEDIN.COM/IN/DEA-RAHMAWATI-445846264
              </a>
            </div>
          </div>
        </div>

        {/* SISI KANAN: FOTO DARI ASET CONTACT */}
        <div className="w-1/2 h-full overflow-hidden">
          <img
            src="/contact-bg.jfif"
            alt="Contact Visual Asset"
            className="w-full h-full object-cover object-center select-none block"
            loading="eager"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
