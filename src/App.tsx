import { useState } from 'react'

type IconProps = { className?: string }

const Play = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.2v13.6a1 1 0 0 0 1.53.85l10.2-6.8a1 1 0 0 0 0-1.7L9.53 4.35A1 1 0 0 0 8 5.2Z" />
  </svg>
)

const Pause = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5Zm6 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5Z" />
  </svg>
)

const Arrow = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M14 7l5 5-5 5" />
  </svg>
)

const Dice = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
    <circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="8" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="8" cy="16" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)

const Upload = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
  </svg>
)

const Menu = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

const waves = [
  [28, 42, 58, 76, 46, 82, 62, 36, 72, 88, 54, 34, 68, 48, 78, 62, 40, 70, 86, 52, 32, 66, 80, 44],
  [20, 32, 48, 64, 38, 72, 52, 26, 58, 76, 44, 24, 62, 38, 66, 48, 30, 58, 72, 42, 24, 52, 68, 34],
  [14, 26, 36, 48, 28, 54, 42, 22, 44, 58, 34, 20, 46, 30, 50, 38, 24, 44, 56, 32, 18, 42, 52, 28],
]

function Waveform({ variant = 0, muted = false }: { variant?: number; muted?: boolean }) {
  return (
    <div className={`waveform ${muted ? 'opacity-25' : ''}`} aria-hidden="true">
      {waves[variant].map((height, index) => (
        <span key={index} style={{ height: `${height}%` }} />
      ))}
    </div>
  )
}

const layers = [
  { number: '01', instrument: 'Drums', name: 'mike_ko', color: '#d9ff43', avatar: 'MK' },
  { number: '02', instrument: 'Bass', name: 'nocturne', color: '#b76cff', avatar: 'NO' },
  { number: '03', instrument: 'Synth', name: 'anya.wav', color: '#ff7657', avatar: 'AW' },
  { number: '04', instrument: 'Your layer', name: 'Свободно', color: '#e9e9e5', avatar: '+' },
]

const projects = [
  { title: 'Midnight Tram', genre: 'Lo-fi · 82 BPM', layers: '3/5', people: '1.2K', variant: 0, color: '#d9ff43' },
  { title: 'Air Between Us', genre: 'Ambient · 68 BPM', layers: '2/6', people: '840', variant: 1, color: '#b76cff' },
  { title: 'No Signal', genre: 'Alt-pop · 112 BPM', layers: '4/5', people: '2.8K', variant: 2, color: '#ff7657' },
]

function App() {
  const [playing, setPlaying] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const scrollToChains = () => document.getElementById('chains')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main className="min-h-screen overflow-hidden bg-[#0c0d0c] text-[#f2f2ed]">
      <header className="relative z-50 mx-auto flex h-20 max-w-[1440px] items-center justify-between border-b border-white/10 px-5 md:px-10">
        <button className="flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="На главную">
          <span className="logo-mark"><i /><i /><i /></span>
          <span className="font-display text-lg font-semibold tracking-tight">СЛОЙ</span>
        </button>
        <nav className="hidden items-center gap-9 text-sm text-white/60 md:flex">
          <button onClick={scrollToChains} className="nav-link">Цепочки</button>
          <a href="#how" className="nav-link">Как это работает</a>
          <a href="#artists" className="nav-link">Для артистов</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full px-5 py-2.5 text-sm text-white/70 transition hover:text-white">Войти</button>
          <button onClick={scrollToChains} className="button-light">Начать создавать</button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 md:hidden" aria-label="Открыть меню">
          <Menu className="h-6 w-6" />
        </button>
        {menuOpen && (
          <div className="absolute left-4 right-4 top-[72px] rounded-2xl border border-white/10 bg-[#191b19] p-5 shadow-2xl md:hidden">
            <nav className="flex flex-col gap-4 text-sm">
              <button onClick={() => { scrollToChains(); setMenuOpen(false) }} className="text-left">Цепочки</button>
              <a href="#how" onClick={() => setMenuOpen(false)}>Как это работает</a>
              <a href="#artists" onClick={() => setMenuOpen(false)}>Для артистов</a>
              <button className="button-accent mt-2 justify-center">Начать создавать</button>
            </nav>
          </div>
        )}
      </header>

      <section className="relative mx-auto grid max-w-[1440px] gap-14 px-5 pb-24 pt-16 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:pb-32 lg:pt-24">
        <div className="hero-glow" />
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/55">
            <span className="inline-block h-2 w-2 rounded-full bg-[#d9ff43] shadow-[0_0_16px_#d9ff43]" />
            Асинхронная музыкальная платформа
          </div>
          <h1 className="font-display text-[clamp(3.4rem,7vw,6.7rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
            Твой слой.<br />
            <span className="text-[#d9ff43]">Общий трек.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-7 text-white/55 md:text-xl md:leading-8">
            Создавай музыку по цепочке. Добавь один слой — и передай дальше. Никаких правок. Только честный момент совместного творчества.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button onClick={scrollToChains} className="button-accent">
              <Upload className="h-5 w-5" /> Запустить цепочку <span className="ml-2 opacity-50">100 ₽</span>
            </button>
            <button onClick={() => setActiveProject(Math.floor(Math.random() * projects.length))} className="button-dark">
              <Dice className="h-5 w-5" /> Бросить кубик <span className="ml-2 text-white/35">50 ₽</span>
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-white/35">
            <span>12 480 музыкантов</span><span className="h-1 w-1 rounded-full bg-white/20" /><span>3 106 цепочек</span>
          </div>
        </div>

        <div className="relative z-10 lg:pl-4">
          <div className="player-shell">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/35">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d9ff43]" /> Цепочка набирает слой
                </div>
                <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">After the rain</h2>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/45">96 BPM · Dm</span>
            </div>
            <div className="space-y-3">
              {layers.map((layer, index) => (
                <div key={layer.number} className={`layer-row ${index === 3 ? 'layer-next' : ''}`}>
                  <span className="w-6 text-[10px] text-white/25">{layer.number}</span>
                  <span className="layer-avatar" style={{ borderColor: `${layer.color}55`, color: layer.color }}>{layer.avatar}</span>
                  <div className="w-16 md:w-20">
                    <div className="text-xs font-medium">{layer.instrument}</div>
                    <div className="mt-1 truncate text-[10px] text-white/30">{layer.name}</div>
                  </div>
                  <div className="min-w-0 flex-1"><Waveform variant={Math.min(index, 2)} muted={index === 3} /></div>
                  <span className="hidden w-8 text-right text-[10px] text-white/25 sm:block">{index === 3 ? '—' : `0:${(18 + index * 7).toString().padStart(2, '0')}`}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex items-center gap-4 border-t border-white/8 pt-6">
              <button onClick={() => setPlaying(!playing)} className="play-button" aria-label={playing ? 'Пауза' : 'Воспроизвести'}>
                {playing ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
              </button>
              <span className="font-mono text-xs text-white/40">{playing ? '0:24' : '0:00'}</span>
              <div className="relative h-px flex-1 bg-white/15">
                <div className={`absolute inset-y-0 left-0 bg-[#d9ff43] transition-all duration-700 ${playing ? 'w-[38%]' : 'w-0'}`} />
              </div>
              <span className="font-mono text-xs text-white/40">2:41</span>
            </div>
          </div>
          <div className="absolute -bottom-7 -right-4 rounded-2xl border border-white/10 bg-[#20221f] p-4 shadow-2xl md:-right-7">
            <div className="text-[10px] uppercase tracking-[0.15em] text-white/35">Твой ход</div>
            <div className="mt-1 flex items-center gap-2 text-sm font-medium"><span className="text-[#d9ff43]">04</span> Добавь голос</div>
          </div>
        </div>
      </section>

      <section id="chains" className="border-y border-white/10 bg-[#111210] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="section-label">Открытые сейчас</div>
              <h2 className="font-display mt-3 text-4xl font-medium tracking-[-0.04em] md:text-5xl">Найди свой следующий слой</h2>
            </div>
            <button className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white">
              Смотреть все 124 <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-card ${activeProject === index ? 'ring-1 ring-[#d9ff43]' : ''}`}>
                <div className="mb-10 flex items-start justify-between">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-white/45">{project.layers} слоёв</span>
                  <button
                    onClick={() => setActiveProject(activeProject === index ? null : index)}
                    className="small-play"
                    style={activeProject === index ? { backgroundColor: project.color, color: '#111' } : {}}
                    aria-label="Воспроизвести трек"
                  >
                    {activeProject === index ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
                  </button>
                </div>
                <div className="h-24"><Waveform variant={project.variant} /></div>
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-xl font-medium">{project.title}</h3>
                    <p className="mt-1.5 text-xs text-white/35">{project.genre}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs">{project.people}</div>
                    <div className="mt-1 text-[10px] text-white/30">слушают</div>
                  </div>
                </div>
                <button className="mt-7 flex w-full items-center justify-between border-t border-white/10 pt-5 text-sm text-white/55 transition hover:text-white">
                  Добавить слой <Arrow className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="section-label">Правила игры</div>
            <h2 className="font-display mt-4 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              Один человек.<br />Один слой.<br /><span className="text-white/25">Один шанс.</span>
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-t border-white/10">
            {[
              ['01', 'Начни с основы', 'Загрузи ритм, мелодию или любой другой слой. Это начало новой музыкальной истории.'],
              ['02', 'Передай дальше', 'Другой музыкант услышит весь микс и добавит только свой слой — без возможности изменить предыдущие.'],
              ['03', 'Раздели результат', 'После финала вклад каждого анализируется, а доход от релиза честно делится между участниками.'],
            ].map(([n, title, text]) => (
              <div key={n} className="grid gap-4 py-7 sm:grid-cols-[64px_180px_1fr] sm:items-start">
                <span className="font-mono text-xs text-[#d9ff43]">{n}</span>
                <h3 className="font-display text-lg font-medium">{title}</h3>
                <p className="max-w-md text-sm leading-6 text-white/45">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="artists" className="mx-4 mb-4 overflow-hidden rounded-[28px] bg-[#d9ff43] text-[#10110f] md:mx-6 md:rounded-[40px]">
        <div className="relative mx-auto grid max-w-[1360px] gap-10 px-6 py-16 md:px-14 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">Когда трек услышат</span>
            <h2 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-6xl">
              10 000 прослушиваний — и вы уже артисты.
            </h2>
          </div>
          <div className="lg:pl-14">
            <p className="max-w-md text-base leading-7 text-black/60">
              Мы сами отправим трек на стриминги. 85% дохода разделят авторы пропорционально звучанию их слоёв.
            </p>
            <button className="mt-8 flex items-center gap-3 rounded-full bg-[#10110f] px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.02]">
              Узнать о распределении <Arrow className="h-4 w-4" />
            </button>
          </div>
          <div className="absolute -bottom-16 right-[43%] hidden h-32 w-32 rounded-full border-[24px] border-black/8 lg:block" />
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 text-xs text-white/35 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-3 text-white">
          <span className="logo-mark scale-75"><i /><i /><i /></span><span className="font-display text-base font-semibold">СЛОЙ</span>
        </div>
        <div className="flex flex-wrap gap-6"><a href="#">Правила</a><a href="#">Роялти</a><a href="#">Для артистов</a><a href="#">Поддержка</a></div>
        <span>© 2025 СЛОЙ. Музыка между нами.</span>
      </footer>
    </main>
  )
}

export default App
