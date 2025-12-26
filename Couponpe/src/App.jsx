import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
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
              text="Understanding your agreement with CouponPe"
            />

            <div className="relative mt-10">
              {/* Highlight Banner */}
              <div className="relative z-1 mb-10 overflow-hidden rounded-3xl border border-n-1/10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10"></div>
                <div className="relative p-8 lg:p-10 flex items-center gap-6">
                  <div className="hidden lg:flex w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 items-center justify-center flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="h5 text-n-1 mb-2">Your Agreement with Us</h4>
                    <p className="body-2 text-n-3">By using CouponPe, you agree to these terms. Violations may result in account suspension and loss of earnings.</p>
                  </div>
                </div>
              </div>

              {/* Terms List */}
              <div className="relative z-1 space-y-5">
                {/* Term 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-n-1/10 bg-n-8 hover:border-purple-500/30 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
                  <div className="p-6 lg:p-8 pl-8 lg:pl-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h5 className="h6 text-n-1">One Account Per User</h5>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Mandatory</span>
                    </div>
                    <p className="body-2 text-n-3 leading-relaxed">
                      Each person is allowed only one account. Creating multiple accounts will lead to immediate suspension of all your accounts without warning.
                    </p>
                  </div>
                </div>

                {/* Term 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-n-1/10 bg-n-8 hover:border-green-500/30 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-500"></div>
                  <div className="p-6 lg:p-8 pl-8 lg:pl-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h5 className="h6 text-n-1">How to Earn Cashback</h5>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Important</span>
                    </div>
                    <div className="space-y-3">
                      <p className="body-2 text-n-3 leading-relaxed flex items-start gap-3">
                        <span className="text-green-500 mt-1">•</span>
                        <span>You must be logged into www.couponpe.in and click our retailer links before shopping</span>
                      </p>
                      <p className="body-2 text-n-3 leading-relaxed flex items-start gap-3">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Transactions require retailer approval - processing times vary</span>
                      </p>
                      <p className="body-2 text-n-3 leading-relaxed flex items-start gap-3">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Refunded or canceled orders don't earn cashback</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Term 3 */}
                <div className="group relative overflow-hidden rounded-2xl border border-n-1/10 bg-n-8 hover:border-red-500/30 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-orange-500"></div>
                  <div className="p-6 lg:p-8 pl-8 lg:pl-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h5 className="h6 text-n-1">Zero Tolerance for Fraud</h5>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Critical</span>
                    </div>
                    <p className="body-2 text-n-3 leading-relaxed">
                      Any fraudulent activity including fake transactions, system manipulation, or unauthorized claims results in permanent account ban and potential legal action. All pending earnings will be forfeited.
                    </p>
                  </div>
                </div>

                {/* Term 4 */}
                <div className="group relative overflow-hidden rounded-2xl border border-n-1/10 bg-n-8 hover:border-amber-500/30 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 to-yellow-500"></div>
                  <div className="p-6 lg:p-8 pl-8 lg:pl-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h5 className="h6 text-n-1">Account Inactivity</h5>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Notice</span>
                    </div>
                    <p className="body-2 text-n-3 leading-relaxed">
                      Accounts inactive for 60+ days are automatically deleted. All pending earnings in deleted accounts are permanently forfeited.
                    </p>
                  </div>
                </div>

                {/* Term 5 */}
                <div className="group relative overflow-hidden rounded-2xl border border-n-1/10 bg-n-8 hover:border-blue-500/30 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                  <div className="p-6 lg:p-8 pl-8 lg:pl-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h5 className="h6 text-n-1">Email Communications</h5>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Info</span>
                    </div>
                    <p className="body-2 text-n-3 leading-relaxed">
                      We'll send you newsletters with updates, offers, and promotions. You can unsubscribe anytime through account settings or email links.
                    </p>
                  </div>
                </div>

                {/* Term 6 */}
                <div className="group relative overflow-hidden rounded-2xl border border-n-1/10 bg-n-8 hover:border-indigo-500/30 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-violet-500"></div>
                  <div className="p-6 lg:p-8 pl-8 lg:pl-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h5 className="h6 text-n-1">Terms May Change</h5>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Updates</span>
                    </div>
                    <p className="body-2 text-n-3 leading-relaxed">
                      We may update these terms anytime. You'll be notified of major changes via email. Continued use means you accept the updates.
                    </p>
                  </div>
                </div>

                {/* Term 7 */}
                <div className="group relative overflow-hidden rounded-2xl border border-n-1/10 bg-n-8 hover:border-pink-500/30 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-rose-500"></div>
                  <div className="p-6 lg:p-8 pl-8 lg:pl-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h5 className="h6 text-n-1">Termination Rights</h5>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">Policy</span>
                    </div>
                    <p className="body-2 text-n-3 leading-relaxed">
                      We reserve the right to suspend or terminate any account that violates these terms, without prior notice or refund of pending earnings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-10 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-n-7 border border-n-1/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="caption text-n-4">Last updated: December 2025</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Services />
        <Pricing />
        <Section id="refund" className="py-10">
          <div className="container">
            <h2 className="h2 mb-4">Refund Policy</h2>
            <p className="body-2 text-n-4">Refund policy content goes here.</p>
          </div>
        </Section>
        <Section id="contact" className="py-10">
          <div className="container">
            <h2 className="h2 mb-4">Contact Us</h2>
            <p className="body-2 text-n-4">Contact information goes here.</p>
          </div>
        </Section>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
