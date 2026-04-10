import Head from "next/head";
import { Geist } from "next/font/google";
import { ChefHat, Utensils, Calendar, Users, Star, ArrowRight, Globe, Mail, Phone } from "lucide-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200`}>
      <Head>
        <title>The Chef&apos;s Pride | Private Personal Chef Booking</title>
        <meta name="description" content="Experience world-class culinary excellence in your own home. Book handpicked personal chefs for intimate dinners and private events." />
      </Head>
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-stone-200/50 bg-stone-50/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-12">
          <div className="flex items-center gap-2">
            <ChefHat className="h-8 w-8 text-stone-800" strokeWidth={1.5} />
            <span className="text-xl font-medium tracking-tight">The Chef&apos;s Pride</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
            <Link href="#how-it-works" className="hover:text-stone-900 transition-colors">How it works</Link>
            <Link href="#chefs" className="hover:text-stone-900 transition-colors">Our Chefs</Link>
            <Link href="#pricing" className="hover:text-stone-900 transition-colors">Services</Link>
          </div>
          <button className="rounded-full bg-stone-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-stone-800 hover:shadow-lg active:scale-95">
            Book a Chef
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-stone-200/40 blur-[120px]" />
            <div className="absolute -bottom-[10%] -right-[10%] h-[400px] w-[400px] rounded-full bg-stone-200/40 blur-[100px]" />
          </div>
          
          <div className="mx-auto max-w-7xl px-6 text-center sm:px-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/50 px-4 py-1.5 text-xs font-medium text-stone-600 backdrop-blur-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-stone-400" />
              Now available in major cities
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-light leading-[1.1] tracking-tight text-stone-900 sm:text-7xl">
              Extraordinary dining, <br />
              <span className="italic font-serif">crafted</span> in your kitchen.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
              The Chef&apos;s Pride connects you with world-class personal chefs for intimate dinners, 
              private events, and bespoke culinary experiences at home.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-8 text-base font-medium text-white transition-all hover:bg-stone-800 sm:w-auto">
                Explore Our Chefs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="flex h-14 w-full items-center justify-center rounded-full border border-stone-200 bg-white px-8 text-base font-medium transition-all hover:bg-stone-50 sm:w-auto">
                How it Works
              </button>
            </div>
            
            {/* Trusted by stats */}
            <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 grayscale opacity-60">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-stone-900" />
                <span className="text-sm font-semibold uppercase tracking-widest">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-widest">500+ Top Chefs</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-widest">10k+ Dinners Served</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-32" id="how-it-works">
          <div className="mx-auto max-w-7xl px-6 sm:px-12">
            <div className="grid gap-16 lg:grid-cols-3">
              <div className="space-y-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-stone-900">
                  <ChefHat className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium tracking-tight">World-Class Talent</h3>
                <p className="text-lg leading-relaxed text-stone-600">
                  Our chefs are rigorously vetted from Michelin-starred kitchens and top culinary institutes around the globe.
                </p>
              </div>
              <div className="space-y-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-stone-900">
                  <Utensils className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium tracking-tight">Bespoke Menus</h3>
                <p className="text-lg leading-relaxed text-stone-600">
                  Collaborate directly with your chef to design a personalized menu that fits your taste, dietary needs, and occasion.
                </p>
              </div>
              <div className="space-y-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-stone-900">
                  <Calendar className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium tracking-tight">Seamless Experience</h3>
                <p className="text-lg leading-relaxed text-stone-600">
                  From grocery shopping to the final cleanup, we handle every detail so you can focus on your guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-stone-900 py-32 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center sm:px-12">
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
              Ready to host an unforgettable evening?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-stone-400">
              Browse our community of talented chefs and book your next culinary journey in minutes.
            </p>
            <button className="mt-12 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-base font-medium text-stone-900 transition-all hover:bg-stone-100 active:scale-95">
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
            <div className="flex items-center gap-2">
              <ChefHat className="h-6 w-6 text-stone-800" strokeWidth={1.5} />
              <span className="text-lg font-medium tracking-tight">The Chef&apos;s Pride</span>
            </div>
            <div className="flex gap-8 text-sm text-stone-600">
              <Link href="#" className="hover:text-stone-900">About</Link>
              <Link href="#" className="hover:text-stone-900">Privacy</Link>
              <Link href="#" className="hover:text-stone-900">Terms</Link>
              <Link href="#" className="hover:text-stone-900">Contact</Link>
            </div>
            <div className="flex gap-4">
              <button className="rounded-full border border-stone-200 p-2.5 text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors">
                <Globe className="h-5 w-5" />
              </button>
              <button className="rounded-full border border-stone-200 p-2.5 text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
              <button className="rounded-full border border-stone-200 p-2.5 text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors">
                <Phone className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-16 text-center text-sm text-stone-400" suppressHydrationWarning>
            © {new Date().getFullYear()}{" "}The Chef&apos;s Pride. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
