
import Link from 'next/link';
import { ArrowRight, Bot, Target, Zap, TrendingUp, CheckCircle, Shield, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">AdSniper</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Login</Link>
            <Link href="/dashboard" className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-emerald-400 hover:scale-105 transition-all flex items-center gap-2">
              Launch App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Zap className="w-3 h-3" /> AI-Powered Ad Intelligence
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Stop Guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Start Sniping.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Genera anuncios virales, guiones de TikTok y análisis de competencia en segundos.
            El "Cerebro Creativo" que tu marca necesita para escalar en 2026.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link href="/dashboard" className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-bold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/40 flex items-center justify-center gap-2">
              <Bot className="w-5 h-5" />
              Try AdSniper Free
            </Link>
            <button className="w-full md:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-lg font-bold rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-24 relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
              alt="Dashboard Preview"
              className="w-full h-auto opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute bottom-10 left-10 right-10 z-20 text-left">
              <div className="inline-block px-4 py-2 bg-emerald-500 text-black font-bold rounded-lg text-sm mb-4">Live Analysis</div>
              <h3 className="text-2xl font-bold text-white mb-2">Real-time Competitor Tracking</h3>
              <p className="text-slate-300">Monitorea ads de la competencia y detecta patrones ganadores al instante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Growth Hackers</h2>
            <p className="text-slate-400 text-lg">Todo lo que necesitas para lanzar campañas ganadoras.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-slate-900 group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ad Intelligence</h3>
              <p className="text-slate-400 leading-relaxed">Espía legalmente a tu competencia. Descubre qué creativos están escalando y por qué.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-all hover:bg-slate-900 group">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Copywriter</h3>
              <p className="text-slate-400 leading-relaxed">Genera guiones de video y textos persuasivos basados en tu identidad de marca única.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-slate-900 group">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Viral Angles</h3>
              <p className="text-slate-400 leading-relaxed">Nuestro motor detecta tendencias virales y adapta tu producto a lo que funciona HOY.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-emerald-950/20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to dominate your niche?</h2>
          <p className="text-xl text-slate-400 mb-12">Join 1,000+ marketers using AdSniper to scale their brands.</p>
          <Link href="/dashboard" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black text-xl font-bold rounded-full hover:bg-emerald-400 transition-all hover:scale-105 shadow-xl shadow-emerald-500/10">
            Start Free Trial <ArrowRight className="w-6 h-6" />
          </Link>
          <div className="mt-8 flex items-center justify-center gap-6 text-slate-500 text-sm font-medium">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> No credit card required</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> 7-day free trial</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <Target className="w-5 h-5" />
            <span className="font-bold">AdSniper SaaS</span>
          </div>
          <p className="text-slate-600 text-sm">© 2026 AdSniper. Powered by GenerArise.</p>
        </div>
      </footer>
    </div>
  );
}
