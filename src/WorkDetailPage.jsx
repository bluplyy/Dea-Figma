import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

/* Project / Work detail data */
export const projectData = [
  {
    id: 1,
    slug: 'elara',
    title: 'JACQUEMUS SPRING/SUMMER',
    subtitle: 'ELARA',
    description: `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.`,
    images: [
      '/foto/2A7A4835.jpg',
      '/foto/71.jpg',
      '/foto/2A7A3153.jpg',
      '/foto/ANAYABLACK2.jpg',
      '/foto/CORABLACK2.jpg',
    ],
  },
  {
    id: 2,
    slug: 'seraphine',
    title: 'JACQUEMUS SPRING/SUMMER',
    subtitle: 'SERAPHINE',
    description: `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.`,
    images: [
      '/foto/2A7A4835.jpg',
      '/foto/71.jpg',
      '/foto/ANAYACREAM1.jpg',
      '/foto/ANNABLOUSECREAM8.jpg',
    ],
  },
  {
    id: 3,
    slug: 'aurora',
    title: 'JACQUEMUS SPRING/SUMMER',
    subtitle: 'AURORA',
    description: `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.`,
    images: [
      '/foto/71.jpg',
      '/foto/2A7A4835.jpg',
      '/foto/BADDA2.jpg',
      '/foto/DBL MAUVE 3.jpg',
    ],
  },
  {
    id: 4,
    slug: 'anaya',
    title: 'JACQUEMUS SPRING/SUMMER',
    subtitle: 'ANAYA',
    description: `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.`,
    images: [
      '/foto/ANAYABLACK2.jpg',
      '/foto/ANAYACREAM1.jpg',
      '/foto/2A7A4835.jpg',
      '/foto/71.jpg',
    ],
  },
  {
    id: 5,
    slug: 'lumiere',
    title: 'JACQUEMUS SPRING/SUMMER',
    subtitle: 'LUMIÈRE',
    description: `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.`,
    images: [
      '/foto/ANAYACREAM1.jpg',
      '/foto/ANNABLOUSECREAM8.jpg',
      '/foto/2A7A4835.jpg',
      '/foto/71.jpg',
    ],
  },
  {
    id: 6,
    slug: 'anna',
    title: 'JACQUEMUS SPRING/SUMMER',
    subtitle: 'ANNA',
    description: `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.`,
    images: [
      '/foto/ANNABLOUSECREAM8.jpg',
      '/foto/BADDA2.jpg',
      '/foto/2A7A4835.jpg',
      '/foto/71.jpg',
    ],
  },
  {
    id: 7,
    slug: 'badda',
    title: 'JACQUEMUS SPRING/SUMMER',
    subtitle: 'BADDA',
    description: `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.`,
    images: [
      '/foto/BADDA2.jpg',
      '/foto/CORABLACK2.jpg',
      '/foto/2A7A4835.jpg',
      '/foto/71.jpg',
    ],
  },
  {
    id: 8,
    slug: 'cora',
    title: 'JACQUEMUS SPRING/SUMMER',
    subtitle: 'CORA',
    description: `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.`,
    images: [
      '/foto/CORABLACK2.jpg',
      '/foto/DBL MAUVE 3.jpg',
      '/foto/2A7A4835.jpg',
      '/foto/71.jpg',
    ],
  },
  {
    id: 9,
    slug: 'mauve',
    title: 'JACQUEMUS SPRING/SUMMER',
    subtitle: 'MAUVE',
    description: `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.`,
    images: [
      '/foto/DBL MAUVE 3.jpg',
      '/foto/2A7A3153.jpg',
      '/foto/2A7A4835.jpg',
      '/foto/71.jpg',
    ],
  },
]

function WorkDetailPage() {
  const { id } = useParams()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [activeImageIdx, setActiveImageIdx] = useState(0)

  // Find project by id or fallback to first
  const projectIndex = Math.max(0, parseInt(id, 10) - 1 || 0)
  const project = projectData[projectIndex] || projectData[0]

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 800)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveImageIdx(0)
  }, [id])

  // Track scroll position on desktop to highlight active preview
  useEffect(() => {
    if (!isLargeScreen) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      let currentIdx = 0

      project.images.forEach((_, idx) => {
        const el = document.getElementById(`project-image-${idx}`)
        if (el && el.offsetTop <= scrollPosition) {
          currentIdx = idx
        }
      })

      setActiveImageIdx(currentIdx)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLargeScreen, project.images])

  return (
    <div className="bg-[#FFFFFF] min-h-screen font-nats text-[#1A1A1A] relative">
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

      {/* ===== TAMPILAN MOBILE (< 800PX): TEKS DI ATAS, GAMBAR DI BAWAH ===== */}
      <div className="min-[800px]:hidden w-full flex flex-col pt-[100px]">
        {/* Teks di atas: px-5, pb-[70px], font NATS 16px, letter-spacing -2%, line-height 85% */}
        <div className="w-full px-5 pb-[70px]">
          <h1
            className="font-nats uppercase text-[#1A1A1A] mb-8 text-left"
            style={{
              fontSize: '16px',
              letterSpacing: '-0.02em',
              lineHeight: '85%',
            }}
          >
            {project.title}
          </h1>
          <p
            className="font-nats uppercase text-[#1A1A1A] text-left"
            style={{
              fontSize: '16px',
              letterSpacing: '-0.02em',
              lineHeight: '85%',
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Gambar di bawah: full width stack, scrollable ke bawah */}
        <div className="w-full flex flex-col">
          {project.images.map((imgSrc, idx) => (
            <div key={idx} className="w-full">
              <img
                src={imgSrc}
                alt={`${project.subtitle} - ${idx + 1}`}
                className="w-full h-auto object-cover block select-none"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ===== TAMPILAN DESKTOP (>= 800PX): SPLIT LAYOUT DENGAN SISI KANAN STICKY & PREVIEW 42PX ===== */}
      <div className="hidden min-[800px]:block w-full relative">
        {/* SISI KIRI: GAMBAR-GAMBAR BISA DI-SCROLL KE BAWAH (+20% LEBAR: 70%) */}
        <div className="w-[70%] flex flex-col pt-0">
          {project.images.map((imgSrc, idx) => (
            <div
              key={idx}
              id={`project-image-${idx}`}
              className="w-full flex-shrink-0"
            >
              <img
                src={imgSrc}
                alt={`${project.subtitle} - ${idx + 1}`}
                className="w-full h-auto object-cover block select-none"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* PREVIEW STRIP: FIXED VERTIKAL, LEBAR 42PX DI DALAM TEPI KANAN FOTO (left: calc(70% - 42px)), DI TENGAH LAYAR */}
        <div
          className="fixed top-1/2 -translate-y-1/2 z-30 flex flex-col select-none"
          style={{
            left: 'calc(70% - 42px)',
            width: '42px',
          }}
        >
          {project.images.map((imgSrc, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                const target = document.getElementById(`project-image-${idx}`)
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="w-[42px] p-0 border-none bg-transparent cursor-pointer block overflow-hidden transition-opacity duration-200"
              style={{
                width: '42px',
                aspectRatio: '537 / 666',
                opacity: activeImageIdx === idx ? 1 : 0.45,
              }}
              title={`View photo ${idx + 1}`}
            >
              <img
                src={imgSrc}
                alt={`Preview ${idx + 1}`}
                className="w-full h-full object-cover block pointer-events-none select-none"
              />
            </button>
          ))}
        </div>

        {/* SISI KANAN: FIXED DI SISI KANAN LAYAR (LEBAR 30%), FONT NATS UKURAN 16, LETTER SPACING -2%, LINE HEIGHT 85%, RATA KIRI */}
        <div className="fixed top-0 right-0 w-[30%] h-screen h-[100dvh] flex flex-col justify-center px-6 xl:px-12 2xl:px-16 pointer-events-none select-text">
          <div className="max-w-[420px] text-left pointer-events-auto">
            <h1
              className="font-nats uppercase text-[#1A1A1A] mb-8 text-left"
              style={{
                fontSize: '16px',
                letterSpacing: '-0.02em',
                lineHeight: '85%',
              }}
            >
              {project.title}
            </h1>
            <p
              className="font-nats uppercase text-[#1A1A1A] text-left"
              style={{
                fontSize: '16px',
                letterSpacing: '-0.02em',
                lineHeight: '85%',
              }}
            >
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkDetailPage
