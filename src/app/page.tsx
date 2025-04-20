"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { HelpCircle, Globe, User, Menu, X } from "lucide-react"

const montserrat = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
})

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Initial check
    handleResize()

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [mobileMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [mobileMenuOpen])

  return (
    <div className={montserrat.className}>
      <header className="fixed top-0 left-0 w-full z-30 bg-transparent flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <div>
          <Image src="/images/tesla.png" alt="Tesla Logo" width={120} height={40} />
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-white font-medium">
            <li className="hover:opacity-80 transition cursor-pointer">Vehicles</li>
            <li className="hover:opacity-80 transition cursor-pointer">Energy</li>
            <li className="hover:opacity-80 transition cursor-pointer">Charging</li>
            <li className="hover:opacity-80 transition cursor-pointer">Discover</li>
            <li className="hover:opacity-80 transition cursor-pointer">Shop</li>
          </ul>
        </nav>

        {/* Desktop icons - hidden on mobile */}
        <div className="hidden md:block">
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="#" className="hover:opacity-80 transition">
                <HelpCircle size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-80 transition">
                <Globe size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-80 transition">
                <User size={24} />
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Mobile menu toggle button - positioned separately to stay above everything */}
      <button
        className="md:hidden fixed top-3 right-4 z-50 text-white p-1 bg-transparent"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu with improved animation */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[300px] bg-black/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-full overflow-y-auto`}
      >
        <div className="flex flex-col p-8 pt-24 text-white">
          <nav>
            <ul className="flex flex-col space-y-6 text-white font-medium">
              <li className="border-b border-white/20 pb-2">
                <a href="#" className="block py-2 hover:text-gray-300 transition">
                  Vehicles
                </a>
              </li>
              <li className="border-b border-white/20 pb-2">
                <a href="#" className="block py-2 hover:text-gray-300 transition">
                  Energy
                </a>
              </li>
              <li className="border-b border-white/20 pb-2">
                <a href="#" className="block py-2 hover:text-gray-300 transition">
                  Charging
                </a>
              </li>
              <li className="border-b border-white/20 pb-2">
                <a href="#" className="block py-2 hover:text-gray-300 transition">
                  Discover
                </a>
              </li>
              <li className="border-b border-white/20 pb-2">
                <a href="#" className="block py-2 hover:text-gray-300 transition">
                  Shop
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-8 flex flex-col space-y-4">
            <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition">
              <HelpCircle size={20} />
              <span>Support</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition">
              <Globe size={20} />
              <span>Language</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition">
              <User size={20} />
              <span>Account</span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay with improved handling */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-35 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <section>
        <div className="bg-[url(/images/Model-Y-2.avif)] bg-cover bg-center h-[110vh] relative">
          <div className="text-center text-white absolute top-[20%] sm:top-[25%] md:top-[20%] inset-x-0 px-4">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">Model Y</h2>
            <p className="text-base sm:text-lg md:text-xl  font-medium mt-2">
              Starting at $41,490
              <br />
              After $7,500 Federal Tax Credit
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4 sm:mt-6 justify-center items-center sm:gap-1">
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-black font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Order Now
              </button>
              <button className="bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url(/images/Model3Desktop.avif)] bg-cover bg-center h-[110vh] relative">
          <div className="text-center text-white absolute top-[20%] sm:top-[25%] md:top-[20%] inset-x-0 px-4">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl ">Model 3</h2>
            <p className="text-base sm:text-lg md:text-xl  mt-2">Lease for $299/mo with just $1,000 down</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4 sm:mt-6 justify-center items-center sm:gap-1">
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-black font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Order Now
              </button>
              <button className="bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url(/images/Cibertruck.avif)] bg-cover bg-center h-[110vh] relative">
          <div className="flex flex-col text-center text-white absolute top-[15%] sm:top-[20%] md:top-[15%] inset-x-0 px-4">
            <img
              src="/images/cyberlogo.png"
              alt="Cybertruck Logo"
              className="mx-auto w-[200px] sm:w-[300px] md:w-[400px]"
            />
            <p className="text-base sm:text-lg md:text-xl">
              Revolutionary design meets unmatched capability
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4 sm:mt-6 justify-center items-center sm:gap-1">
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-black font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Order Now
              </button>
              <button className="bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url(/images/Model-X.avif)] bg-cover bg-center h-[110vh] relative">
          <div className="text-center text-white absolute top-[20%] sm:top-[25%] md:top-[20%] inset-x-0 px-4">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl ">Model X</h2>
            <p className="text-base sm:text-lg md:text-xl  mt-2">Free Supercharging Offer Ending Soon</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4 sm:mt-6 justify-center items-center sm:gap-1">
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-black font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Order Now
              </button>
              <button className="bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url(/images/Model-S.avif)] bg-cover bg-center h-[110vh] relative">
          <div className="text-center text-white absolute top-[25%] sm:top-[25%] md:top-[20%] inset-x-0 px-4">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl ">Model S</h2>
            <p className="text-base sm:text-lg md:text-xl  mt-2">Experience Unparalleled Performance</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4 sm:mt-6 justify-center items-center sm:gap-1">
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-black font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Order Now
              </button>
              <button className="bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url(/images/SolarPanels.avif)] bg-cover bg-center h-[110vh] relative">
          <div className="text-center text-white absolute top-[25%] sm:top-[15%] md:top-[25%] inset-x-0 px-4">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl ">Solar Panels</h2>
            <p className="text-base sm:text-lg md:text-xl  mt-2">Produce Clean Energy From Your Roof</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4 sm:mt-6 justify-center items-center sm:gap-1">
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-black font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Order Now
              </button>
              <button className="bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url(/images/SolarRoof.avif)] bg-cover bg-center h-[110vh] relative">
          <div className="text-center text-white absolute top-[18%] sm:top-[25%] md:top-[20%] inset-x-0 px-4">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl ">Solar Roof</h2>
            <p className="text-base sm:text-lg md:text-xl  mt-2">Transform Your Roof and Power Your Home</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4 sm:mt-6 justify-center items-center sm:gap-1">
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-black font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Order Now
              </button>
              <button className="bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url(/images/batteryTesla.avif)] bg-cover bg-center h-[110vh] relative">
          <div className="text-center text-white absolute top-[25%] sm:top-[25%] md:top-[20%] inset-x-0 px-4">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl ">Powerwall</h2>
            <p className="text-base sm:text-lg md:text-xl  mt-2">Home Battery Backup for Peace of Mind</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4 sm:mt-6 justify-center items-center sm:gap-1">
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-black font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Order Now
              </button>
              <button className="bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url(/images/solarPanel1.avif)] bg-cover bg-center h-[110vh] relative">
          <div className="text-center text-white absolute top-[20%] sm:top-[30%] md:top-[25%] inset-x-0 px-4">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl ">Accessories</h2>
            <p className="text-base sm:text-lg md:text-xl  mt-2">Enhance Your Tesla Experience</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4 sm:mt-6 justify-center items-center sm:gap-1">
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-black font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Shop Now
              </button>
              <button className="bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="relative h-[110vh] w-full">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/images/teslaVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl ">Experience Tesla</h2>
            <p className="text-base sm:text-lg md:text-xl  mt-2">Schedule a Demo Drive Today</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 mt-4 sm:mt-6 justify-center items-center sm:gap-1">
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-black font-medium rounded py-2 px-4 sm:px-5 transition duration-300 w-[70%] mx-auto sm:mx-0 sm:w-auto sm:min-w-[130px] md:min-w-[160px] cursor-pointer text-sm sm:text-base">
                Demo Drive
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <style jsx global>{`
        . {
          : 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        /* Improve mobile menu scrolling */
        body.menu-open {
          overflow: hidden;
        }
        
        /* Responsive background positioning for mobile */
        @media (max-width: 640px) {
          .bg-cover {
            background-position: center 30%;
          }
        }
      `}</style>
    </div>
  )
}
