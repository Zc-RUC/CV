(() => {
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const toggle = document.querySelector('[data-language-toggle]');
  const description = document.querySelector('meta[name="description"]');

  const english = {
    'nav.research': 'Research',
    'nav.experience': 'Experience',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.meta': 'Renmin University of China · Interdisciplinary Business & Economics Program',
    'hero.name': 'Zhang Chong<span class="hero-period" aria-hidden="true">.</span>',
    'hero.lead': 'Between research, industry,<br />and talent, I look for questions worth pursuing.',
    'hero.description': 'An undergraduate at Renmin University of China, focused on empirical research, AI and deep-tech industries, and talent work for technical teams. This site brings together my research and practical experience.',
    'hero.cta': 'View my research <span aria-hidden="true">↗</span>',
    'proof.research': 'research projects',
    'proof.experience': 'industry roles',
    'proof.gpa': ' GPA',
    'proof.mapping': 'people mapped',
    'research.kicker': 'Selected research',
    'research.title': 'Using methods to answer real-world questions',
    'research.intro': 'From sustainable farming and manufacturing supply chains to labor markets, I use models and data to understand complex systems and stay attentive to how findings meet real industry and social questions.',
    'research.agri.type': 'Modeling study',
    'research.agri.title': 'Ecological and economic impacts of agricultural practices',
    'research.agri.body': 'As a core member, I handled data preprocessing, visualization, and paper writing. The study builds a multi-scale coupled model that combines dynamic systems theory, toxicology, and multi-objective optimization to quantify how chemical use and species introduction shape agricultural transition. A third-order differential food-web model examines ecological dynamics under chemical intervention, while an extended Lotka–Volterra model evaluates how edge-habitat restoration affects ecosystem stability, balancing biodiversity, soil health, and economic value.',
    'research.agri.note': '2024 Mathematical Contest in Modeling · S Prize',
    'research.tax.type': 'Empirical study',
    'research.tax.title': 'Fiscal policy and supply-chain resilience in advanced manufacturing',
    'research.tax.body': 'As the second author, I used 2015–2023 data on Chinese A-share advanced-manufacturing firms from the CSMAR database. We built a high-dimensional two-way fixed-effects model, treated the 2018 input VAT credit refund policy as a quasi-natural experiment, and used difference-in-differences to identify its effects. Python-based digitalization word-frequency measures and a multi-dimensional TOPSIS index were also constructed. The study finds that the policy significantly strengthens supply-chain resilience through digital transformation, lower financing constraints, and higher investment.',
    'research.tax.note': 'First Prize · Renmin University Innovation Cup',
    'research.age.type': 'Labor research',
    'research.age.title': 'Age as capital or cost? How age discrimination at 35 affects firm performance',
    'research.age.body': 'As the second author, I draw on Becker’s classic theory of discrimination and corporate recruitment text data to quantify “age discrimination at 35” with double-debiased machine learning. The study examines how age discrimination affects firm performance, identifies labor-allocation efficiency and innovation capability as mediating mechanisms, and tests R&D intensity as a moderating factor.',
    'research.age.note': 'Qiushi Academic · Shanshou Research Grant',
    'research.agri.link': 'Read research PDF ↗',
    'research.age.link': 'Read research PDF ↗',
    'research.footnote': 'PDF versions are available for two projects; use the links at the end of each entry to read them.',
    'experience.kicker': 'Experience',
    'experience.title': 'Learning industries from the field',
    'experience.intro': 'Across technical teams, investment firms, and research roles, I turn information gathering, data analysis, talent mapping, and collaboration into concrete work.',
    'experience.bytedance.title': 'ByteDance Seed',
    'experience.bytedance.role': 'AI Infra · HRBP Intern',
    'experience.bytedance.body1': 'Supported campus and experienced hiring for the Seed AI Infra team. For campus hiring, I reviewed 10+ resumes per day with an evaluation pass rate of about 80% and helped close 10 offers. I mapped 400+ master’s and PhD candidates from relevant labs for the 2027 cohort, combined multi-channel information with CCD scoring at about 90% accuracy, and produced a cohort talent report. For experienced hiring, I reviewed about five resumes per day, passed about three, and helped close seven offers. I also mapped authors of leading technical papers and screened talent in competitor teams.',
    'experience.bytedance.body2': 'Built Lab Mapper and Resume Screening Studio with MiniMax and OpenAI APIs to automate talent mapping and batch scoring, reducing repetitive screening work.',
    'experience.jiukun.title': '9B Capital',
    'experience.jiukun.role': 'Investment Operations Intern',
    'experience.jiukun.body': 'Independently tracked news and financing activity across AI, deep tech, embodied intelligence, advanced manufacturing, and low-altitude economy. Produced meeting and interview notes on humanoid robots, robotic arms, and dexterous hands. Filled eight roles in one month with 10+ resumes pushed per day and an interview rate of about 80%, covering investment, marketing, HR, and investment VP positions. Later led two HR interns through a recruiting SOP and several searches, while coordinating with headhunters.',
    'experience.xinliu.title': 'Xinliu Think Tank',
    'experience.xinliu.role': 'Industry Research Intern',
    'experience.xinliu.body': 'Tracked developments in semiconductors, embodied intelligence, AI, and intelligent driving. Used Wind, Bloomberg, company websites, and IT Juzi to collect and structure information, analyze company finances and new developments, and write dozens of research and media articles that together reached hundreds of thousands of views.',
    'experience.cmb.title': 'China Merchants Securities',
    'experience.cmb.role': 'Bond Underwriting Intern',
    'experience.cmb.body': 'Supported the drafting and review of offering memoranda, due-diligence reports, and project bids. Participated in on-site due diligence and roadshow materials, analyzed the debt-servicing capacity of Xi’an Bank and Jinneng Holding Group, and used Qichacha, Wind, and iFinD for risk checks and data work.',
    'about.kicker': 'About',
    'about.title': 'Keep learning, stay curious',
    'about.identity': 'Undergraduate at Renmin University of China · Interdisciplinary Business & Economics Program · Sep 2023–present',
    'about.intro': 'I’m Zhang Chong, currently studying at Renmin University of China. I work across empirical research, AI and deep-tech industries, and technical talent projects, connecting research methods with industry observations and real delivery.',
    'about.education.date': '2023–present',
    'about.education.heading': 'Education',
    'about.education.school': 'Renmin University of China',
    'about.education.program': 'Interdisciplinary Business & Economics Program · Sep 2023–present',
    'about.education.gpa': 'GPA 3.76 / 4.00 · Ranked 3rd in cohort',
    'about.honors.date': 'Selected',
    'about.honors.heading': 'Honors',
    'about.honors.body': 'Recognized as a Sanhao Student and Outstanding Student Cadre at Renmin University, and received the Second-Class Academic Excellence Scholarship, Second-Class Social Work and Volunteer Service Scholarship, Outstanding Student Union Volunteer award, and Talent Index Research Project Outstanding Researcher award. Also won the university A-League football championship, the Innovation Cup first prize, and a Qiushi Academic Shanshou research grant.',
    'about.tools.heading': 'Focus & tools',
    'about.tools.body': 'I focus on empirical research, AI and deep-tech industries, and technical talent work. I use Python, Stata, Wind, iFinD, and Bloomberg for research, text processing, analysis, and visualization, and work with Microsoft Office, LaTeX, ChatGPT, Grok, Xiumi, Canva, Audition, and Premiere for writing, design, and media.',
    'about.tools.date': 'Working set',
    'about.campus.date': 'Campus',
    'about.campus.heading': 'Campus',
    'about.campus.body': 'Core member of the RUC GEA Association; class monitor for Human Resource Management 2, Class of 2023; member of the School of Labor and Human Resources football team; core member of the Youth Volunteer Association; core member of the Student Union Rights Department; and deputy head of the School Student Union Practice Department.',
    'about.working.heading': 'How I work',
    'about.working.body': 'I value clear communication, teamwork, and reliable delivery. I bring resilience, self-direction, and time-management skills to ambiguous work, and keep learning as the problem changes.',
    'about.working.date': 'Working style',
    'contact.kicker': 'Contact',
    'contact.title': 'Let’s talk about questions worth studying.',
    'contact.body': 'Open to conversations about research, industry observations, and technical talent.',
    'contact.email': 'Email <span aria-hidden="true">↗</span>',
    'contact.cv': 'Download CV <span aria-hidden="true">↗</span>',
    'footer.top': 'Back to top ↑'
  };

  const chinese = new Map(nodes.map((node) => [node.dataset.i18n, node.innerHTML]));

  function applyLanguage(language) {
    const isEnglish = language === 'en';
    nodes.forEach((node) => {
      node.innerHTML = isEnglish ? english[node.dataset.i18n] : chinese.get(node.dataset.i18n);
    });
    document.documentElement.lang = isEnglish ? 'en' : 'zh-CN';
    document.title = isEnglish ? 'Zhang Chong | Research, Industry & Talent' : '张翀｜研究、产业与人才';
    if (description) {
      description.content = isEnglish
        ? 'Zhang Chong’s personal site, covering empirical research, industry observations, and AI talent work.'
        : '张翀的个人网站，记录研究、产业观察与 AI 人才相关经历。';
    }
    if (toggle) {
      toggle.textContent = isEnglish ? '中' : 'EN';
      toggle.setAttribute('aria-label', isEnglish ? '切换中文' : '切换英文');
      toggle.setAttribute('aria-pressed', String(isEnglish));
    }
    document.body.dataset.language = language;
    try { localStorage.setItem('site-language', language); } catch (_) {}
  }

  const savedLanguage = (() => {
    try { return localStorage.getItem('site-language'); } catch (_) { return null; }
  })();
  applyLanguage(savedLanguage === 'en' ? 'en' : 'zh');
  toggle?.addEventListener('click', () => {
    applyLanguage(document.body.dataset.language === 'en' ? 'zh' : 'en');
  });

  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const supportsIntersectionObserver = 'IntersectionObserver' in window;
  const revealTargets = [
    ...document.querySelectorAll('.section-intro, .proof-item, .research-item, .timeline-item, .about-item, .contact-inner')
  ];

  revealTargets.forEach((target, index) => {
    target.classList.add('reveal');
    target.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 70}ms`);
  });

  if (prefersReducedMotion || !supportsIntersectionObserver) {
    revealTargets.forEach((target) => target.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach((target) => revealObserver.observe(target));
  }

  const interactiveItems = [...document.querySelectorAll('.timeline-item, .about-item')];
  interactiveItems.forEach((item) => {
    item.addEventListener('mouseenter', () => item.classList.add('is-active'));
    item.addEventListener('mouseleave', () => item.classList.remove('is-active'));
    item.addEventListener('focusin', () => item.classList.add('is-active'));
    item.addEventListener('focusout', (event) => {
      if (!item.contains(event.relatedTarget)) item.classList.remove('is-active');
    });
  });

  if (!prefersReducedMotion && supportsIntersectionObserver && interactiveItems.length) {
    const activeRatios = new Map();
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => activeRatios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0));
      let current = null;
      let highestRatio = 0.2;
      activeRatios.forEach((ratio, item) => {
        if (ratio > highestRatio) {
          current = item;
          highestRatio = ratio;
        }
      });
      interactiveItems.forEach((item) => {
        const isHovered = item.matches(':hover') || item.matches(':focus-within');
        item.classList.toggle('is-active', item === current || isHovered);
      });
    }, { threshold: [0.25, 0.45, 0.7], rootMargin: '-20% 0px -45% 0px' });
    interactiveItems.forEach((item) => activeObserver.observe(item));
  }

  const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
  const navSections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if (supportsIntersectionObserver && navSections.length) {
    const navRatios = new Map();
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => navRatios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0));
      const visible = [...navRatios.entries()].filter(([, ratio]) => ratio > 0).sort((a, b) => b[1] - a[1]);
      if (!visible.length) return;
      const currentId = `#${visible[0][0].id}`;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute('href') === currentId;
        link.classList.toggle('is-current', isCurrent);
        if (isCurrent) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { threshold: [0, 0.2, 0.45, 0.7], rootMargin: '-12% 0px -42% 0px' });
    navSections.forEach((section) => navObserver.observe(section));
  }

  const hero = document.querySelector('.hero');
  const heroArt = document.querySelector('.hero-art');
  if (!prefersReducedMotion && hero && heroArt) {
    let frame = 0;
    let nextX = 0;
    let nextY = 0;
    const renderParallax = () => {
      frame = 0;
      heroArt.style.setProperty('--hero-shift-x', `${nextX.toFixed(2)}px`);
      heroArt.style.setProperty('--hero-shift-y', `${nextY.toFixed(2)}px`);
    };
    hero.addEventListener('pointermove', (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      const bounds = hero.getBoundingClientRect();
      nextX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
      nextY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
      if (!frame) frame = requestAnimationFrame(renderParallax);
    });
    hero.addEventListener('pointerleave', () => {
      nextX = 0;
      nextY = 0;
      if (!frame) frame = requestAnimationFrame(renderParallax);
    });
  }

  requestAnimationFrame(() => document.body.classList.add('motion-ready'));
})();
