import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Section from "./components/Section";
import Heading from "./components/Heading";
import { check } from "./assets";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Roadmap />
        <Section id="privacy" className="overflow-hidden">
          <div className="container">
            <Heading
              className="md:max-w-md lg:max-w-2xl"
              title="Privacy Policy"
              text="Your trust is our priority. Discover how we protect and manage your information."
            />

            <div className="relative mt-10">
              {/* Main Featured Card */}
              <div className="relative z-1 mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 bg-gradient-to-br from-n-7 to-n-8">
                <div className="relative z-1 max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <h4 className="h4 mb-4 text-n-1">Information We Collect</h4>
                      <p className="body-2 text-n-3 mb-6">
                        Essential data to deliver exceptional service and personalized experiences.
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-5 bg-n-8/80 backdrop-blur-sm border border-n-1/10 rounded-2xl hover:border-n-1/20 transition-all">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded"></div>
                          </div>
                          <h6 className="font-semibold mb-2 text-n-1">Personal Data</h6>
                          <p className="body-2 text-n-4 text-sm">Name, email, phone, and contact information</p>
                        </div>
                        <div className="p-5 bg-n-8/80 backdrop-blur-sm border border-n-1/10 rounded-2xl hover:border-n-1/20 transition-all">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded"></div>
                          </div>
                          <h6 className="font-semibold mb-2 text-n-1">Financial Info</h6>
                          <p className="body-2 text-n-4 text-sm">Secure payment and transaction details</p>
                        </div>
                        <div className="p-5 bg-n-8/80 backdrop-blur-sm border border-n-1/10 rounded-2xl hover:border-n-1/20 transition-all">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded"></div>
                          </div>
                          <h6 className="font-semibold mb-2 text-n-1">Technical Data</h6>
                          <p className="body-2 text-n-4 text-sm">Device info, IP address, and analytics</p>
                        </div>
                        <div className="p-5 bg-n-8/80 backdrop-blur-sm border border-n-1/10 rounded-2xl hover:border-n-1/20 transition-all">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mb-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded"></div>
                          </div>
                          <h6 className="font-semibold mb-2 text-n-1">Usage Patterns</h6>
                          <p className="body-2 text-n-4 text-sm">Browsing behavior and preferences</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Three Column Grid */}
              <div className="relative z-1 grid gap-5 lg:grid-cols-3">
                <div className="p-8 bg-n-7 border border-n-1/10 rounded-3xl">
                  <div className="mb-6 pb-6 border-b border-n-6">
                    <h5 className="h5 text-n-1">How We Use Data</h5>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <img width={20} height={20} src={check} alt="check" className="flex-shrink-0 mt-1" />
                      <div className="ml-3">
                        <p className="body-2 font-semibold text-n-2 mb-1">Service Delivery</p>
                        <p className="body-2 text-n-4 text-sm">Account and transaction management</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <img width={20} height={20} src={check} alt="check" className="flex-shrink-0 mt-1" />
                      <div className="ml-3">
                        <p className="body-2 font-semibold text-n-2 mb-1">Personalization</p>
                        <p className="body-2 text-n-4 text-sm">Customized features and content</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <img width={20} height={20} src={check} alt="check" className="flex-shrink-0 mt-1" />
                      <div className="ml-3">
                        <p className="body-2 font-semibold text-n-2 mb-1">Improvements</p>
                        <p className="body-2 text-n-4 text-sm">Platform optimization and bug fixes</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <img width={20} height={20} src={check} alt="check" className="flex-shrink-0 mt-1" />
                      <div className="ml-3">
                        <p className="body-2 font-semibold text-n-2 mb-1">Communication</p>
                        <p className="body-2 text-n-4 text-sm">Updates and notifications</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-8 bg-n-7 border border-n-1/10 rounded-3xl">
                  <div className="mb-6 pb-6 border-b border-n-6">
                    <h5 className="h5 text-n-1">Data Security</h5>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-n-8/50 border border-n-1/10 rounded-xl">
                      <p className="font-semibold text-n-2 mb-2 text-sm">Encryption</p>
                      <p className="body-2 text-n-4 text-xs">End-to-end SSL/TLS protection for all data transmissions</p>
                    </div>
                    <div className="p-4 bg-n-8/50 border border-n-1/10 rounded-xl">
                      <p className="font-semibold text-n-2 mb-2 text-sm">Authentication</p>
                      <p className="body-2 text-n-4 text-xs">Multi-factor verification for account security</p>
                    </div>
                    <div className="p-4 bg-n-8/50 border border-n-1/10 rounded-xl">
                      <p className="font-semibold text-n-2 mb-2 text-sm">Infrastructure</p>
                      <p className="body-2 text-n-4 text-xs">Secure data centers with 24/7 monitoring</p>
                    </div>
                    <div className="p-4 bg-n-8/50 border border-n-1/10 rounded-xl">
                      <p className="font-semibold text-n-2 mb-2 text-sm">Compliance</p>
                      <p className="body-2 text-n-4 text-xs">Adherence to international privacy standards</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-n-7 border border-n-1/10 rounded-3xl">
                  <div className="mb-6 pb-6 border-b border-n-6">
                    <h5 className="h5 text-n-1">Your Rights</h5>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-n-1 mb-2">Access & Control</p>
                      <p className="body-2 text-n-4 text-sm">View, update, or delete your data anytime through account settings.</p>
                    </div>
                    <div className="h-px bg-n-6"></div>
                    <div>
                      <p className="font-semibold text-n-1 mb-2">Data Portability</p>
                      <p className="body-2 text-n-4 text-sm">Request a copy of your personal information in standard format.</p>
                    </div>
                    <div className="h-px bg-n-6"></div>
                    <div>
                      <p className="font-semibold text-n-1 mb-2">Retention Period</p>
                      <p className="body-2 text-n-4 text-sm">Data stored only as long as necessary, then securely deleted.</p>
                    </div>
                    <div className="h-px bg-n-6"></div>
                    <div>
                      <p className="font-semibold text-n-1 mb-2">Policy Updates</p>
                      <p className="body-2 text-n-4 text-sm">Notification of changes via email or in-app alerts.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sharing Policy Footer */}
              <div className="relative z-1 mt-5 p-8 lg:p-12 bg-n-7 border border-n-1/10 rounded-3xl">
                <div className="max-w-4xl mx-auto text-center">
                  <h5 className="h5 text-n-1 mb-4">Data Sharing Policy</h5>
                  <p className="body-2 text-n-3 mb-8">
                    We maintain strict controls over data sharing to protect your privacy and comply with regulations.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="p-6 bg-n-8/50 border border-n-1/10 rounded-2xl">
                      <p className="font-semibold text-n-1 mb-2">With Consent</p>
                      <p className="body-2 text-n-4 text-sm">Shared only with your explicit permission</p>
                    </div>
                    <div className="p-6 bg-n-8/50 border border-n-1/10 rounded-2xl">
                      <p className="font-semibold text-n-1 mb-2">Service Providers</p>
                      <p className="body-2 text-n-4 text-sm">Limited to verified partners only</p>
                    </div>
                    <div className="p-6 bg-n-8/50 border border-n-1/10 rounded-2xl">
                      <p className="font-semibold text-n-1 mb-2">Legal Requirements</p>
                      <p className="body-2 text-n-4 text-sm">When mandated by law or regulation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section id="terms" className="overflow-hidden">
          <div className="container">
            <Heading
              className="md:max-w-md lg:max-w-2xl"
              title="Terms & Conditions"
              text="Essential guidelines for using our platform"
            />

            <div className="relative mt-10 max-w-4xl mx-auto">
              {/* Compact Card Layout */}
              <div className="relative z-1 grid md:grid-cols-2 gap-4">
                {/* Term 1 */}
                <div className="p-5 bg-n-7/50 backdrop-blur border border-n-1/10 rounded-2xl hover:bg-n-7 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-n-6 flex items-center justify-center flex-shrink-0">
                      <span className="text-n-1 font-bold text-sm">01</span>
                    </div>
                    <div>
                      <h6 className="text-n-1 font-semibold mb-1">One Account Per User</h6>
                      <p className="body-2 text-n-4 text-sm">Each user is allowed only one account. Multiple accounts will be suspended.</p>
                    </div>
                  </div>
                </div>

                {/* Term 2 */}
                <div className="p-5 bg-n-7/50 backdrop-blur border border-n-1/10 rounded-2xl hover:bg-n-7 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-n-6 flex items-center justify-center flex-shrink-0">
                      <span className="text-n-1 font-bold text-sm">02</span>
                    </div>
                    <div>
                      <h6 className="text-n-1 font-semibold mb-1">Cashback Requirements</h6>
                      <p className="body-2 text-n-4 text-sm">Use retailer links while logged in. Subject to merchant approval.</p>
                    </div>
                  </div>
                </div>

                {/* Term 3 */}
                <div className="p-5 bg-n-7/50 backdrop-blur border border-n-1/10 rounded-2xl hover:bg-n-7 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-n-6 flex items-center justify-center flex-shrink-0">
                      <span className="text-n-1 font-bold text-sm">03</span>
                    </div>
                    <div>
                      <h6 className="text-n-1 font-semibold mb-1">No Fraud Tolerance</h6>
                      <p className="body-2 text-n-4 text-sm">Fraudulent activity results in permanent ban and legal action.</p>
                    </div>
                  </div>
                </div>

                {/* Term 4 */}
                <div className="p-5 bg-n-7/50 backdrop-blur border border-n-1/10 rounded-2xl hover:bg-n-7 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-n-6 flex items-center justify-center flex-shrink-0">
                      <span className="text-n-1 font-bold text-sm">04</span>
                    </div>
                    <div>
                      <h6 className="text-n-1 font-semibold mb-1">Account Inactivity</h6>
                      <p className="body-2 text-n-4 text-sm">Inactive accounts (60+ days) are deleted with all pending rewards.</p>
                    </div>
                  </div>
                </div>

                {/* Term 5 */}
                <div className="p-5 bg-n-7/50 backdrop-blur border border-n-1/10 rounded-2xl hover:bg-n-7 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-n-6 flex items-center justify-center flex-shrink-0">
                      <span className="text-n-1 font-bold text-sm">05</span>
                    </div>
                    <div>
                      <h6 className="text-n-1 font-semibold mb-1">Email Communications</h6>
                      <p className="body-2 text-n-4 text-sm">We send updates and offers. Unsubscribe anytime via settings.</p>
                    </div>
                  </div>
                </div>

                {/* Term 6 */}
                <div className="p-5 bg-n-7/50 backdrop-blur border border-n-1/10 rounded-2xl hover:bg-n-7 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-n-6 flex items-center justify-center flex-shrink-0">
                      <span className="text-n-1 font-bold text-sm">06</span>
                    </div>
                    <div>
                      <h6 className="text-n-1 font-semibold mb-1">Terms Updates</h6>
                      <p className="body-2 text-n-4 text-sm">We may update terms anytime. Continued use means acceptance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Notice */}
              <div className="relative z-1 mt-8 p-6 bg-gradient-to-r from-n-7 to-n-8 border border-n-1/10 rounded-2xl text-center">
                <p className="body-2 text-n-3">
                  By using CouponPe, you agree to these terms. We reserve the right to suspend or terminate accounts for violations.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-n-8/50 border border-n-1/10">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-n-4">Last updated: December 2025</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Refund Section */}
        <Section id="refund" className="overflow-hidden">
          <div className="container">
            <Heading
              className="md:max-w-md lg:max-w-2xl"
              title="Refund & Exchange Policy"
              text="Flexible returns and transparent refund process"
            />

            <div className="relative mt-10 max-w-4xl mx-auto">
              <div className="relative z-1 space-y-5">
                {/* Returns & Exchanges */}
                <div className="p-6 lg:p-8 bg-n-7 border border-n-1/10 rounded-3xl">
                  <div className="mb-6">
                    <h5 className="h5 text-n-1 mb-3">Returns & Exchanges</h5>
                    <p className="body-2 text-n-3 mb-6">
                      We offer a very flexible return and exchange policy. If you are not satisfied with our offline services order, you can easily return or exchange the services using our email.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-n-8/50 border border-n-1/10 rounded-xl">
                      <p className="font-semibold text-n-1 mb-2 flex items-center gap-2">
                        <span>Email Contact</span>
                      </p>
                      <p className="body-2 text-n-3">info@couponpe.in</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-n-8/50 border border-n-1/10 rounded-xl">
                        <p className="font-semibold text-n-1 mb-2 flex items-center gap-2">
                          <span className="text-green-500">✓</span> Eligible Requests
                        </p>
                        <p className="body-2 text-n-4 text-sm">Refund requests must be made within 5 days of the order</p>
                      </div>

                      <div className="p-4 bg-n-8/50 border border-n-1/10 rounded-xl">
                        <p className="font-semibold text-n-1 mb-2 flex items-center gap-2">
                          <span className="text-red-500">✗</span> Service Access
                        </p>
                        <p className="body-2 text-n-4 text-sm">Once payment is refunded, access to those services will be revoked</p>
                      </div>
                    </div>

                    <div className="p-4 bg-n-8/50 border border-n-1/10 rounded-xl">
                      <p className="font-semibold text-n-1 mb-2">Customer Support</p>
                      <p className="body-2 text-n-3">For any queries, contact us via WhatsApp: <span className="text-n-1">+91-8881098282</span></p>
                    </div>
                  </div>
                </div>

                {/* Exchanges */}
                <div className="p-6 lg:p-8 bg-n-7 border border-n-1/10 rounded-3xl">
                  <h5 className="h5 text-n-1 mb-3">Exchange Process</h5>
                  <p className="body-2 text-n-3">
                    The fastest way to get what you want is to return the order you have, and once the return is accepted, make a separate purchase for the new order.
                  </p>
                </div>

                {/* Refund Process */}
                <div className="p-6 lg:p-8 bg-n-7 border border-n-1/10 rounded-3xl">
                  <h5 className="h5 text-n-1 mb-4">Refund Process</h5>
                  <p className="body-2 text-n-3 mb-6">
                    Once we have received and inspected your return, we will notify you and let you know if the refund was approved.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-n-8/50 border border-n-1/10 rounded-xl">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-500 font-bold">✓</span>
                        </div>
                        <div>
                          <p className="font-semibold text-n-1 mb-2">Approved Refunds</p>
                          <p className="body-2 text-n-4 text-sm">Upon approval, you will be automatically refunded to your original payment method</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-n-8/50 border border-n-1/10 rounded-xl">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-amber-500 font-bold">⏳</span>
                        </div>
                        <div>
                          <p className="font-semibold text-n-1 mb-2">Processing Time</p>
                          <p className="body-2 text-n-4 text-sm">It may take some time for your bank or credit card company to process and post the refund</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="overflow-hidden">
          <div className="container">
            <Heading
              className="md:max-w-md lg:max-w-2xl"
              title="Contact Us"
              text="Send us a message and we'll get back to you soon"
            />

            <div className="relative mt-10 max-w-3xl mx-auto">
              <div className="relative z-1 p-8 lg:p-10 bg-n-7 border border-n-1/10 rounded-3xl">
                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-n-1 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-n-8 border border-n-1/10 rounded-xl text-n-1 placeholder:text-n-4 focus:border-n-1/20 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-n-1 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-n-8 border border-n-1/10 rounded-xl text-n-1 placeholder:text-n-4 focus:border-n-1/20 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-n-1 font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      className="w-full px-4 py-3 bg-n-8 border border-n-1/10 rounded-xl text-n-1 placeholder:text-n-4 focus:border-n-1/20 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-n-1 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 bg-n-8 border border-n-1/10 rounded-xl text-n-1 placeholder:text-n-4 focus:border-n-1/20 focus:outline-none transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-n-1 text-n-8 font-semibold rounded-xl hover:bg-n-2 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>

                {/* Contact Info Footer */}
                <div className="mt-8 pt-8 border-t border-n-1/10">
                  <p className="text-center body-2 text-n-4 mb-4">
                    Or reach us directly at
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <a href="mailto:info@couponpe.in" className="text-n-3 hover:text-n-1 transition-colors">
                      info@couponpe.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
