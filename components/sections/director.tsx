
export default function director() {
  return (
    <section id="director" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Meet Our Director</h2>
            <div className="max-w-4xl mx-auto flex flex-col gap-6 rounded-xl border border-gray-300 py-6 shadow-sm">
                <div className="p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="flex-shrink-0">
                            <img
                            src="./malekalbawaih.png"
                            alt="Malek Albawaih - Founder and Director of Tared Ltd"
                            className="w-64 h-64 lg:w-80 lg:h-80 object-contain rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Malek Albawaih</h3>
                            <p className="font-medium mb-6 text-lg text-secondary">Founder & Director</p>
                            <blockquote className="text-gray-700 leading-relaxed text-lg italic border-l-4 pl-6 border-secondary">
                            "As the Founder and Director of Tared Ltd, I'm proud to welcome you to our digital home. I'm Malek
                            Albawaih, and I started this London-based design and advertising agency to help businesses build
                            powerful and remarkable brands. With a passion for creative strategy, visual storytelling, and smart
                            design, my goal is to guide our clients towards fresh ideas, strong identity, and real impact in a
                            fast-moving world. Thank you for visiting our website."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
