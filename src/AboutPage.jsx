import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#FFFFFF] w-full min-h-screen font-nats text-[#1A1A1A] relative flex flex-col items-center overflow-x-hidden">
      {/* ===== NAVBAR (FIXED TOP + BLEND MODE: DIFFERENCE) ===== */}
      <nav className="fixed top-0 left-0 z-50 w-full px-5 pt-5 pb-[30px] flex items-start justify-between mix-blend-difference pointer-events-none">
        <Link
          to="/"
          className="text-[16px] font-nats font-normal tracking-[0.15em] uppercase text-white xl:w-[150px] xl:h-[16px] xl:leading-[16px] inline-flex items-center pointer-events-auto"
        >
          DEA RAHMAWATI
        </Link>

        {/* Desktop Navigation (>= 800px) */}
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

        {/* Mobile Navigation (< 800px) */}
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

      {/* ===== TAMPILAN MOBILE (< 800PX): FIGMA SPEC W: 335, H: 210, FONT NATS 16, LH: 90%, LS: -2%, LEFT-ALIGNED ===== */}
      <main className="min-[800px]:hidden w-full flex flex-col items-center pt-[130px] pb-16 px-5">
        {/* CONTAINER KONTEN: LEBAR MAKSIMAL 335PX (SESUAI FIGMA) */}
        <div className="w-full max-w-[335px] flex flex-col items-center">
          {/* FOTO: 150x150PX */}
          <div
            className="w-[150px] h-[150px] overflow-hidden mb-8 flex-shrink-0"
            style={{
              width: '150px',
              height: '150px',
            }}
          >
            <img
              src="/about-photo.jpg"
              alt="Dea Rahmawati"
              className="w-full h-full object-cover select-none block"
              loading="eager"
            />
          </div>

          {/* TEKS DI BAWAH FOTO: FONT NATS REGULAR, UKURAN 16, LINE HEIGHT 90%, LETTER SPACING -2%, TEXT-JUSTIFY */}
          <div className="w-full text-justify">
            <p
              className="font-nats font-normal text-[#1A1A1A] text-justify"
              style={{
                fontSize: '16px',
                lineHeight: '90%',
                letterSpacing: '-0.02em',
                textAlign: 'justify',
              }}
            >
              Dea Rahmawati had always possessed an innate sense of style, but her journey to becoming Paris’s latest fashion sensation was anything but effortless. Born in a modest suburb, Amélie spent her childhood sketching designs in the corners of her school notebooks and stitching her own outfits from leftover fabrics her mother collected. After enrolling in a prestigious design academy, her talent quickly caught the eye of influential mentors. Amélie’s breakthrough came during Paris Fashion Week when she unveiled her debut collection, a masterful blend of flowing silks, bold metallic accents, and understated details that seemed to whisper elegance. The fashion world was captivated not only by her designs but also by Amélie herself—a striking figure who carried herself with effortless grace, turning every sidewalk into her personal runway.
            </p>
          </div>
        </div>
      </main>

      {/* ===== TAMPILAN DESKTOP (>= 800PX): CENTERED, FOTO 145x145PX, TEKS 18PX ===== */}
      <main className="hidden min-[800px]:flex w-full min-h-screen max-w-[800px] px-6 py-20 flex-col items-center justify-center text-center">
        {/* FOTO 145x145PX */}
        <div className="w-[145px] h-[145px] overflow-hidden mb-12 flex-shrink-0">
          <img
            src="/about-photo.jpg"
            alt="Dea Rahmawati"
            className="w-full h-full object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* TEKS DI BAWAH FOTO: FONT NATS, UKURAN 18PX, RATA TENGAH, LINE HEIGHT 115%, LETTER SPACING -2% */}
        <div className="w-full max-w-[620px]">
          <p
            className="font-nats font-normal text-[#1A1A1A] text-center"
            style={{
              fontSize: '18px',
              lineHeight: '115%',
              letterSpacing: '-0.02em',
            }}
          >
            Dea Rahmawati had always possessed an innate sense of style, but her journey to becoming Paris’s latest fashion sensation was anything but effortless. Born in a modest suburb, Amélie spent her childhood sketching designs in the corners of her school notebooks and stitching her own outfits from leftover fabrics her mother collected. After enrolling in a prestigious design academy, her talent quickly caught the eye of influential mentors. Amélie’s breakthrough came during Paris Fashion Week when she unveiled her debut collection, a masterful blend of flowing silks, bold metallic accents, and understated details that seemed to whisper elegance. The fashion world was captivated not only by her designs but also by Amélie herself—a striking figure who carried herself with effortless grace, turning every sidewalk into her personal runway.
          </p>
        </div>
      </main>
    </div>
  )
}

export default AboutPage
