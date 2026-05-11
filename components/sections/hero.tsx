import OutlineBtn from "../ui/outline-btn"
import PrimaryBtn from "../ui/primary-btn"

export default function hero() {
  return (
    <section id="home" className="px-4 py-20 bg-primary">
        <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
                <div className="mb-6">
                    <div className="text-white/80 text-lg font-medium mb-4">Welcome to Tared Ltd</div>
                    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-balance leading-tight">
                        Design and Advertising Agency
                    </h1>
                    <div className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Elevating brands through creative strategy and impactful design. We guide businesses towards greater
                        recognition, engagement, and success.
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <PrimaryBtn text={"Hire us"} href={"#hire"}/>
                <OutlineBtn text={"Contact"} href={"#contact"}/>
                <a href="#contact"></a>
            </div>
        </div>
    </section>
  )
}
