import Hirebtn from "../ui/hire-btn";

export default function Hire() {
  return (
    <div id="hire" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Hire Us on Your Favorite Platform</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Connect with us on leading freelance platforms where we deliver exceptional design and advertising
                    services.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-300 py-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-green-600">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.142-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.457-5.439-5.457z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-primary">Upwork</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Connect with us on Upwork.com for comprehensive advertising campaigns and design projects. We bring
                            expertise and creativity to every collaboration.
                        </p>
                        <br />
                        <Hirebtn />
                    </div>
                </div>

                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-300 py-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="p-8 text-center">
                        <div
                        className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                        style={{ backgroundColor: "#1CBFFF" }}
                        >
                            <img
                                src="/images/freelancer-cyan-logo.png"
                                alt="Freelancer Logo"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-primary">Freelancer</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Find us on Freelancer.com for custom design solutions and advertising expertise. We compete to deliver
                            the best value and quality for your projects.
                        </p>
                        <Hirebtn />
                    </div>
                </div>

                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-300 py-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="p-8 text-center">
                        <div
                            className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                            style={{ backgroundColor: "#1DBF73" }}
                            >
                            <img src="/images/fiverr-brand-logo.png" alt="Fiverr Logo" className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-primary">Fiverr</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Discover our professional design services on Fiverr.com. From logo design to complete branding
                            packages, we deliver quality work with fast turnaround times.
                        </p>
                        <Hirebtn />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
