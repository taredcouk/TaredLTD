"use client"

interface PrimaryBtnProps {
  text: string;
  href: string;
}

const PrimaryBtn = ({ text, href }: PrimaryBtnProps) => {

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
        className="bg-secondary hover:bg-secondary-shade border-secondary hover:border-secondary-shade px-8 py-1.5 border-2 text-white font-medium rounded-md transition-colors hover:cursor-pointer"
        onClick={() => scrollToSection(href)}
        >
            {text}
        </button>
    </div>
  )
}

export default PrimaryBtn