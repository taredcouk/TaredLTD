"use client"

interface OutlineBtnProps {
  text: string;
  href: string;
}

const OutlineBtn = ({ text, href }: OutlineBtnProps) => {

    const scrollToSection = (href: string) => {

    setTimeout(() => {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }, 100)
  }

    return (
    <div>
        <button
        className="px-8 py-1.5 border-2 text-white border-white hover:bg-white hover:text-primary rounded-md bg-transparent transition-all duration-300 hover:cursor-pointer"
        onClick={() => scrollToSection(href)}
        >
            {text}
        </button>
    </div>
  )
}

export default OutlineBtn