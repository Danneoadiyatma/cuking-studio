import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { devlog, games, socialLinks, studio } from './content';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Games', href: '#games' },
  { label: 'About', href: '#about' },
  { label: 'Devlog', href: '#devlog' },
  { label: 'Contact', href: '#contact' },
];

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <a href="#home" className="inline-flex items-center" aria-label="CUKING STUDIO home" data-testid="link-brand-home">
      <img
        src="/logo-cuking.png"
        alt="CUKING STUDIO cat logo"
        width="300"
        height="108"
        className={small ? 'h-9 w-auto' : 'h-11 w-auto'}
      />
    </a>
  );
}

function LandscapeIllustration() {
  return (
    <div className="hero-art relative mx-auto aspect-[1.08/1] w-full max-w-[570px]" aria-label="A quiet imagined landscape with a tiny cat on a hill" role="img">
      <div className="absolute inset-[4%] overflow-hidden rounded-[48%_52%_45%_55%/47%_43%_57%_53%] bg-[#efe3d1]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 540" fill="none" aria-hidden="true">
        <circle cx="424" cy="126" r="47" fill="#F4B77A" opacity=".9" />
        <path d="M71 230c32-36 82-36 114 0-31-4-43 11-57 27-15-18-30-28-57-27Z" fill="#FFFDF8"/>
        <path d="M397 203c23-26 59-26 82 0-22-3-31 8-41 19-11-12-22-21-41-19Z" fill="#FFFDF8"/>
        <path d="M30 351c64-112 175-160 300-125 82 23 137 80 240 79v235H30V351Z" fill="#D9BFA6"/>
        <path d="M0 407c102-82 189-103 286-62 89 38 172 24 314-45v240H0V407Z" fill="#B6B99A"/>
        <path d="M0 455c91-50 167-47 243-7 77 41 180 33 357-32v124H0V455Z" fill="#87937A"/>
        <path d="M344 367c23-41 59-58 99-43 29 11 51 39 62 74-51-13-98-17-161-31Z" fill="#7B846D"/>
        <path d="M343 364c3-31 17-54 37-58 20-5 38 11 44 40-28-3-54 4-81 18Z" fill="#95A184"/>
        <path d="M368 315c-4-14 0-24 9-26 9-1 16 7 18 20" stroke="#615B4D" strokeWidth="4" strokeLinecap="round"/>
        <path d="M227 397c-2-22 1-39 15-44 13-4 25 7 26 27" stroke="#615B4D" strokeWidth="4" strokeLinecap="round"/>
        <path d="M218 393c17-18 42-18 58 0" stroke="#615B4D" strokeWidth="3" strokeLinecap="round"/>
        <g className="float-soft">
          <path d="M151 364c0-20 13-37 31-43l7-35 30 28h25l28-28 8 37c13 7 21 21 21 39v43H151v-41Z" fill="#FFF8EA" stroke="#40332F" strokeWidth="5" strokeLinejoin="round"/>
          <path d="m173 328 11-27 21 21M260 322l20-21 6 30" fill="#F4B77A" stroke="#40332F" strokeWidth="4" strokeLinejoin="round"/>
          <path d="M181 358v13m50-13v13m-30 10c4 5 12 5 16 0m-34-1-13 4m68-4 13 4" stroke="#40332F" strokeWidth="4" strokeLinecap="round"/>
        </g>
        <path d="M89 268c8-9 17-9 25 0m5 0c8-9 17-9 25 0" stroke="#A99A8B" strokeWidth="3" strokeLinecap="round"/>
        <path d="m91 310 7-8 7 8m354-39 7-8 7 8" stroke="#F7F3EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="absolute bottom-[4%] right-[4%] rotate-[-7deg] rounded-full border border-[#b9a995] bg-[#fffdf8]/80 px-4 py-2 text-[11px] tracking-[.15em] text-[#67574b]">a world in the making</span>
      <span className="decorative-spark absolute left-[5%] top-[20%]" aria-hidden="true" />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="noise min-h-[100dvh] overflow-hidden">
      <header className="sticky top-0 z-30 border-b border-[#40332f]/10 bg-[#f7f3eb]/90 backdrop-blur-md">
        <div className="section-shell flex h-[76px] items-center justify-between">
          <BrandMark />
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link text-[13px] font-medium text-[#5c5149] hover:text-[#40332f]" data-testid={`nav-${item.label.toLowerCase()}`}>{item.label}</a>)}
          </nav>
          <a href="#games" className="button-link hidden items-center gap-2 rounded-full bg-[#40332f] px-5 py-3 text-xs font-semibold text-[#fffdf8] md:inline-flex" data-testid="button-explore-nav">
            Explore Games <ArrowRight size={14} aria-hidden="true" />
          </a>
          <button type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#40332f]/15 text-[#40332f] md:hidden" data-testid="button-mobile-menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="section-shell grid gap-1 border-t border-[#40332f]/10 py-4 md:hidden">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-[#e6d8c5]/50" data-testid={`mobile-nav-${item.label.toLowerCase()}`}>{item.label}</a>)}
          <a href="#games" onClick={closeMenu} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#40332f] px-5 py-3 text-sm font-semibold text-[#fffdf8]" data-testid="mobile-explore-games">Explore Games <ArrowRight size={15} /></a>
        </nav>}
      </header>

      <main>
        <section id="home" className="relative scroll-mt-24">
          <div className="section-shell grid min-h-[650px] items-center gap-6 py-16 md:grid-cols-[.92fr_1.08fr] md:py-20 lg:min-h-[720px]">
            <div className="relative z-10 max-w-[540px]">
              <div className="reveal eyebrow mb-7 inline-flex items-center gap-3 text-[#9c6d4d]"><span className="h-px w-8 bg-[#c28a63]" /> Independent game studio · Est. by Dan Neo</div>
              <h1 className="reveal serif max-w-[570px] text-[clamp(3.55rem,7vw,6.35rem)] leading-[.98] tracking-[-.055em] text-[#40332f]" data-testid="text-hero-heading">Small Studio.<br /><span className="relative inline-block">Big Stories.<i className="absolute -bottom-1 left-0 -z-10 h-[13px] w-[95%] rounded-full bg-[#f4b77a]/60" /></span></h1>
              <p className="reveal reveal-delay mt-7 max-w-[420px] text-[17px] leading-[1.8] text-[#695c52]">We create games filled with curious worlds, memorable characters, and stories worth experiencing.</p>
              <div className="reveal reveal-delay mt-9 flex flex-wrap items-center gap-4">
                <a href="#games" className="button-link inline-flex items-center gap-3 rounded-full bg-[#40332f] px-6 py-4 text-sm font-semibold text-[#fffdf8]" data-testid="button-explore-games">Explore Our Games <ArrowRight size={16} /></a>
                <a href="#about" className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-[#54463c] transition-colors hover:bg-[#e6d8c5]/50" data-testid="link-meet-studio">Meet the Studio <ArrowDown size={14} /></a>
              </div>
              <div className="mt-14 flex items-center gap-3 text-[#8e7762]"><span className="h-px w-9 bg-[#b7a18a]" /><span className="serif text-[15px] italic">Every Pixel Has a Story.</span></div>
            </div>
            <div className="reveal reveal-delay relative -mx-4 md:mx-0"><LandscapeIllustration /></div>
          </div>
          <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.22em] text-[#a99a8b] lg:flex"><span className="h-8 w-px bg-[#c6b6a5]" /> Scroll to explore</div>
        </section>

        <section id="games" className="scroll-mt-20 bg-[#fffdf8] py-24 md:py-32">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><p className="eyebrow mb-4 text-[#a46e4b]">01 — Our worlds</p><h2 className="serif text-4xl leading-tight tracking-[-.035em] md:text-5xl">Worlds We’ve Created</h2></div>
              <p className="max-w-[340px] text-[15px] leading-7 text-[#75675b]">Every game begins with an idea. Here’s where ours come to life.</p>
            </div>
            {games.length > 0 ? <div className="mt-12 grid gap-7 md:grid-cols-2">{games.map((game) => <article key={game.title} className="overflow-hidden rounded-[28px] border border-[#e6d8c5] bg-[#f7f3eb]"><img src={game.artwork} alt={`${game.title} cover artwork`} className="aspect-[16/9] w-full object-cover" loading="lazy" /><div className="p-7"><p className="eyebrow text-[#9c6d4d]">{game.genre} · {game.status}</p><h3 className="serif mt-3 text-3xl">{game.title}</h3><p className="mt-3 leading-7 text-[#695c52]">{game.description}</p>{game.href && <a className="mt-5 inline-flex items-center gap-2 font-semibold" href={game.href}>Learn More <ArrowUpRight size={15} /></a>}</div></article>)}</div> : <div className="relative mt-12 overflow-hidden rounded-[30px] border border-[#e7d7c5] bg-[#f7f3eb] px-7 py-12 md:px-14 md:py-14">
              <div className="absolute -right-12 -top-14 h-56 w-56 rounded-full border border-[#e0c8ad] md:right-8 md:top-[-100px] md:h-80 md:w-80" /><div className="absolute -right-2 top-3 h-40 w-40 rounded-full border border-[#e0c8ad] md:right-20 md:top-[-60px] md:h-64 md:w-64" />
              <div className="relative max-w-[650px]"><span className="eyebrow text-[#a46e4b]">The first chapter</span><h3 className="serif mt-5 text-3xl leading-tight tracking-[-.03em] md:text-[2.8rem]">Every great adventure<br className="hidden md:block" /> starts somewhere.</h3><p className="mt-5 max-w-[430px] leading-7 text-[#75675b]">We’re building our first worlds. Stay tuned for what’s next.</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#76543d] underline decoration-[#d0a27b] underline-offset-4 hover:text-[#40332f]" data-testid="link-games-contact">Say hello while we build <ArrowRight size={15} /></a></div>
              <div className="absolute bottom-7 right-8 hidden rotate-6 md:block"><img src="/logo-cuking.png" alt="" width="170" height="61" className="w-[170px] opacity-70" /></div>
            </div>}
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-24 md:py-32">
          <div className="section-shell grid gap-12 md:grid-cols-[.75fr_1.25fr] md:gap-20">
            <div className="relative flex min-h-[290px] items-center justify-center rounded-[32px] bg-[#eadbc8] p-8 md:min-h-[440px]">
              <div className="absolute left-6 top-6 eyebrow text-[#8b6a50]">A small note from the studio</div>
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-[#f7f3eb] shadow-[0_14px_40px_#40332f12]">
                <img src="/logo-cuking.png" alt="CUKING STUDIO cat mascot" width="300" height="108" className="w-[92%]" />
                <span className="decorative-spark absolute -right-2 -top-2 h-6 w-6 text-[#bd8059]" aria-hidden="true" />
              </div>
              <span className="absolute bottom-7 right-7 serif text-sm italic text-[#826c58]">curiosity lives here</span>
            </div>
            <div className="self-center">
              <p className="eyebrow mb-5 text-[#a46e4b]">02 — Who we are</p>
              <h2 className="serif max-w-[610px] text-4xl leading-[1.1] tracking-[-.04em] md:text-[3.5rem]">A Little Studio With Big Imagination</h2>
              <div className="mt-8 max-w-[620px] space-y-4 text-[15px] leading-[1.85] text-[#695c52]">{studio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className="mt-8 inline-flex items-center gap-3 border-t border-[#d9cabb] pt-5 text-sm text-[#897b6f]"><span className="h-2 w-2 rounded-full bg-[#d6986c]" /> Founded by <strong className="font-semibold text-[#40332f]">{studio.founder}</strong></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="founder-title" className="bg-[#eee5d8] py-20 md:py-24">
          <div className="section-shell">
            <div className="mx-auto grid max-w-[900px] gap-8 md:grid-cols-[.65fr_1.35fr] md:items-center">
              <div className="flex items-center justify-center">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-[#cdbda9] bg-[#f8f3e9] md:h-56 md:w-56">
                  <img src="/logo-cuking.png" alt="CUKING STUDIO cat emblem" width="300" height="108" className="w-[88%]" />
                  <span className="absolute -bottom-2 right-4 rounded-full border border-[#cdbda9] bg-[#fffdf8] px-3 py-1.5 text-[10px] uppercase tracking-[.15em] text-[#766451]">the human behind it</span>
                </div>
              </div>
              <div>
                <p className="eyebrow mb-4 text-[#9c6d4d]">03 — The developer</p>
                <h2 id="founder-title" className="serif text-3xl tracking-[-.03em] md:text-4xl">{studio.founder}</h2>
                <p className="mt-2 text-sm font-medium text-[#8b6e57]">{studio.role} <span className="mx-2 text-[#b39c83]">/</span> <span className="font-normal">@{studio.alias}</span></p>
                <p className="mt-5 max-w-[570px] text-[15px] leading-7 text-[#695c52]">{studio.bio}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#cbbba7] px-4 py-2.5 text-xs font-semibold text-[#55483e] transition-colors hover:bg-[#fffdf8]" data-testid={`social-${social.label.toLowerCase()}`}>{social.label}<ArrowUpRight size={13} /></a>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="devlog" className="scroll-mt-20 bg-[#fffdf8] py-24 md:py-32">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><p className="eyebrow mb-4 text-[#a46e4b]">04 — Notes from the making</p><h2 className="serif text-4xl tracking-[-.035em] md:text-5xl">Behind the Builds</h2></div>
              <p className="max-w-[340px] text-[15px] leading-7 text-[#75675b]">A little window into experiments, artwork, prototypes, and the work in between.</p>
            </div>
            {devlog.length > 0 ? <div className="mt-12 grid gap-6 md:grid-cols-3">{devlog.map((post) => <article key={post.title} className="overflow-hidden rounded-2xl border border-[#e6d8c5]"><img src={post.thumbnail} alt="" className="aspect-[16/10] w-full object-cover" loading="lazy" /><div className="p-6"><p className="text-xs text-[#8b7765]">{post.date}</p><h3 className="serif mt-2 text-2xl">{post.title}</h3><p className="mt-3 text-sm leading-6 text-[#695c52]">{post.excerpt}</p>{post.href && <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" href={post.href}>Read More <ArrowRight size={14} /></a>}</div></article>)}</div> : <div className="mt-12 grid overflow-hidden rounded-[28px] border border-[#e7d7c5] md:grid-cols-[.9fr_1.1fr]">
              <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden bg-[#e8dfd1]">
                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cbbba6]" /><div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cbbba6]" />
                <img src="/logo-cuking.png" alt="" width="300" height="108" className="relative w-[210px] opacity-80" />
                <span className="absolute bottom-5 left-6 eyebrow text-[#806c57]">Field notes · soon</span>
              </div>
              <div className="flex flex-col justify-center bg-[#f7f3eb] px-7 py-10 md:px-12">
                <p className="eyebrow text-[#a46e4b]">A page still being written</p><h3 className="serif mt-4 text-3xl leading-tight md:text-[2.5rem]">Something is taking shape behind the scenes.</h3><p className="mt-5 max-w-[440px] leading-7 text-[#75675b]">Check back soon for development notes, experiments, and little discoveries.</p>
                <a href="#contact" className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#76543d] underline decoration-[#d0a27b] underline-offset-4" data-testid="link-devlog-contact">Until then, come say hello <ArrowRight size={15} /></a>
              </div>
            </div>}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 px-4 py-20 md:px-8 md:py-28">
          <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[34px] bg-[#40332f] px-7 py-14 text-[#fff8ef] md:px-16 md:py-20">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#fff8ef]/10 md:right-16 md:top-[-180px] md:h-[470px] md:w-[470px]" /><div className="absolute -right-3 -top-12 h-56 w-56 rounded-full border border-[#fff8ef]/10 md:right-28 md:top-[-125px] md:h-[340px] md:w-[340px]" />
            <div className="relative max-w-[720px]">
              <p className="eyebrow mb-5 text-[#f4b77a]">05 — Open inbox, open mind</p>
              <h2 className="serif text-4xl leading-tight tracking-[-.04em] md:text-[4rem]">Have a Story<br className="hidden sm:block" /> to Share?</h2>
              <p className="mt-5 max-w-[490px] leading-7 text-[#e2d3c5]">For collaborations, questions, or just to say hello, we’d love to hear from you.</p>
              <a href={`mailto:${studio.email}`} className="button-link mt-8 inline-flex items-center gap-3 rounded-full bg-[#f4b77a] px-6 py-4 text-sm font-bold text-[#40332f]" data-testid="link-contact-email">{studio.email}<ArrowUpRight size={16} /></a>
              <div className="mt-10 flex items-center gap-4 border-t border-[#fff8ef]/15 pt-6">
                <span className="text-xs text-[#c7b7a9]">Find the studio around</span>
                {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#fff8ef] underline decoration-[#f4b77a]/70 underline-offset-4 hover:text-[#f4b77a]" data-testid={`contact-${social.label.toLowerCase()}`}>{social.label}</a>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#40332f]/10 bg-[#f1e9dd] py-9">
        <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3"><BrandMark small /><span className="serif pl-1 text-sm italic text-[#77675a]">{studio.tagline}</span></div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">{navItems.map((item) => <a key={item.href} href={item.href} className="text-xs text-[#67594f] transition-colors hover:text-[#40332f]" data-testid={`footer-${item.label.toLowerCase()}`}>{item.label}</a>)}</nav>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[#76675a]">
            <a href={`mailto:${studio.email}`} className="hover:text-[#40332f]" data-testid="footer-email">{studio.email}</a>
            {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#40332f]" data-testid={`footer-social-${social.label.toLowerCase()}`}>{social.label}</a>)}
            <span className="w-full text-[#928375] md:w-auto">© {new Date().getFullYear()} CUKING STUDIO</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
