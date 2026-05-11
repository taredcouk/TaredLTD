
const Whatsapp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp w-6 h-6 text-secondary" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
)

const Phone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone w-6 h-6 text-secondary" viewBox="0 0 16 16">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
    </svg>
)

const Mail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope w-6 h-6 text-secondary" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
    </svg>
)

const Mappin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt w-6 h-6 text-secondary" viewBox="0 0 16 16">
    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
)

export default function Contact() {
  return (
    <div id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Ready to elevate your brand? Contact us today to discuss your design and advertising needs. We're here
                        to help bring your vision to life.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-secondary/20">
                            <Whatsapp />
                            </div>
                            <div>
                                <p className="font-bold mb-1 text-primary">WhatsApp</p>
                                <p className="text-gray-600">
                                    <a href="https://wa.me/+447378537393" className="hover:underline">
                                        +44 7378 537393
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-secondary/20">
                                <Phone />
                            </div>
                            <div>
                                <p className="font-bold mb-1 text-primary">Phone Numbers</p>
                                <p className="text-gray-600">
                                    Landline:{" "}
                                    <a href="tel:+442033932142" className="hover:underline">
                                        +44 20 3393 2142
                                    </a>
                                </p>
                                <p className="text-gray-600">
                                    Mobile:{" "}
                                    <a href="tel:+447378537393" className="hover:underline">
                                        +44 7378 537393
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-secondary/20">
                                <Mail />
                            </div>
                            <div>
                                <p className="font-bold mb-1 text-primary">Email</p>
                                <p className="text-gray-600">
                                    <a href="mailto:support@tared.co.uk" className="hover:underline">
                                        support@tared.co.uk
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-6 rounded-xl border border-gray-300 py-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="p-8">
                        <h3 className="text-xl font-bold mb-6 text-primary">Business Hours</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Monday - Friday</span>
                                <span className="font-medium text-primary">9:00 AM - 5:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Saturday</span>
                                <span className="font-medium text-primary">Closed</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Sunday</span>
                                <span className="font-medium text-primary">Closed</span>
                            </div>
                            
                            <br />
                            <h3 className="text-xl font-bold mb-6 text-primary">Location</h3>
                            <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-secondary/20">
                                <Mappin />
                            </div>
                            <div>
                                <p className="font-bold mb-1 text-primary">Address</p>
                                <p className="text-gray-600 leading-relaxed">
                                    Office 8240, 321-323 High Road,
                                    <br />
                                    Chadwell Heath, Essex RM6 6AX,
                                    <br />
                                    United Kingdom
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
