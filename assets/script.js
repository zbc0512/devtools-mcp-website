// Minimal i18n and theme + link management for the static DevFest site
(function(){
  const locales = {
    en: {
      site_title: 'DevFest Workshop — Chrome DevTools MCP Server',
      hero_title: 'Chrome DevTools MCP Workshop',
      hero_lead: 'A hands-on workshop at DevFest focused on the Chrome DevTools MCP Server — exploring how developer tools and model context protocols connect.',
      cta_mcp: 'Learn about DevTools MCP',
      cta_gdg: 'About GDG & DevFest',
      section_sessions: 'Workshop highlights',
      card_setup_title: 'Setup & Demo',
      card_setup_desc: 'Run a local MCP server, connect to DevTools, and try examples that integrate models with browser tooling.',
      card_arch_title: 'Architecture',
      card_arch_desc: 'Understand the protocol, server components, and how DevTools exposes context and actions to external agents.',
      card_hands_title: 'Hands-on Labs',
      card_hands_desc: 'Guided labs where attendees implement small automations and instrumentation using DevTools and MCP primitives.',

      nav_gdg: 'GDG & DevFest',
      nav_mcp: 'DevTools MCP',
      nav_about: 'About',

      gdg_title: 'GDG & DevFest — DevFest Workshop',
      gdg_heading: 'What are GDG and DevFest?',
      gdg_section_title: 'Google Developer Groups (GDG)',
      gdg_section_desc: 'GDG (Google Developer Groups) are community groups for developers who are interested in Google developer technologies. They are community-run chapters where developers meet to learn, share knowledge, and build real projects together. Chapters typically run regular meetups, codelabs, and mentoring sessions to help members improve their technical skills, network, and collaborate on open-source initiatives.',
      gdg_benefits: 'Common GDG activities include workshops, speaker sessions, hackathons, and networking. GDG fosters local developer communities and encourages inclusion and learning.',
      devfest_section_title: 'DevFest',
      devfest_desc: 'DevFest is the flagship developer conference organized by GDG chapters worldwide. DevFest events are typically day-long or multi-day gatherings featuring keynote talks, technical sessions, workshops, and hands-on labs.',
      devfest_more: 'For more about GDG and DevFest, see the official GDG page and local chapter announcements. (See: https://developers.google.com/community)',
      gdg_how_participate: 'How to participate',
      gdg_join: 'Join your local GDG chapter and attend meetups.',
      gdg_volunteer: 'Volunteer to speak, organize events or run workshops.',
      gdg_contribute: 'Contribute to community projects and open-source demos.',
      gdg_values: 'Community values',
      gdg_values_desc: 'GDG chapters prioritize inclusivity, learning, and hands-on practice. They welcome developers of all skill levels and backgrounds.',

      mcp_title: 'Chrome DevTools MCP — DevFest Workshop',
      mcp_heading: 'Chrome DevTools MCP Server',
      mcp_intro: 'The Chrome DevTools MCP Server provides a bridge between external agents (including model-driven agents) and the browser\'s DevTools. It implements the Model Context Protocol (MCP) to expose context, actions, and debugging capabilities to outside tools and services.',
      mcp_features_title: 'Key features',
      mcp_feature_1: 'Protocol server that enables structured access to DevTools context.',
      mcp_feature_2: 'APIs for inspecting DOM, network, performance, and console logs.',
      mcp_feature_3: 'Examples and demo integrations showing automation workflows and model-powered tooling.',
      mcp_install_title: 'Getting started',
      mcp_install_desc: 'The project typically provides installation steps, example servers, and demo clients on its GitHub repository: https://github.com/ChromeDevTools/chrome-devtools-mcp/ — consult the README and examples for local setup and usage.',
      mcp_contrib: 'If you\'d like to explore the source, review issues, or contribute, the repository includes contribution guidelines and sample code to get started.',
      mcp_security_title: 'Security & privacy',
      mcp_security_desc: 'When exposing DevTools to external agents, be mindful of the security implications. MCP server deployments should be run in trusted environments, with authentication and explicit user consent for actions that can inspect or control browsing contexts.',
  mcp_repo_title: 'Project & resources',
  mcp_repo_desc: 'The Chrome DevTools MCP project is hosted on GitHub and contains docs, examples, and a tool reference. It provides configuration options (including --isolated, --headless, and --wsEndpoint) and a comprehensive tool list for automations such as click, fill, navigate, and performance tracing.',
  mcp_quickstart_title: 'Quick start (summary)',
  mcp_quickstart_1: 'Install via npm: use the package or run with `npx chrome-devtools-mcp@latest`.',
  mcp_quickstart_2: 'The server will start a Chrome instance; use `--isolated` to avoid reusing an existing profile.',
  mcp_quickstart_3: 'Use the tool reference to call input/navigation/performance tools from your MCP client.',

  gdg_find_title: 'Find events & get involved',
  gdg_find_desc: 'Look up local chapters and upcoming DevFest events on the official community pages. Many chapters post event schedules, volunteer opportunities, and codelabs for newcomers. If no chapter exists in your area you can apply to start one.',

      about_title: 'About — Jabez',
      about_heading: 'About Jabez',
      about_role: 'Java developer',
      about_bio_title: 'Bio',
      about_bio: 'I work primarily in Java, building backend services and tools. In my free time I enjoy playing electric bass and exploring AI-powered developer tools. This workshop at DevFest focuses on the intersection of DevTools and model-driven automation.',
      about_contact_title: 'Contact',
      about_contact: 'Email: zbc0512@gmail.com'
    },
    zh: {
      site_title: 'DevFest 工作坊 — Chrome DevTools MCP Server',
      hero_title: 'Chrome DevTools MCP 工作坊',
      hero_lead: '一次在 DevFest 的实践工作坊，聚焦 Chrome DevTools MCP Server，探索开发者工具与模型上下文协议的结合。',
      cta_mcp: '了解 DevTools MCP',
      cta_gdg: '关于 GDG 与 DevFest',
      section_sessions: '工作坊亮点',
      card_setup_title: '环境与演示',
      card_setup_desc: '运行本地 MCP 服务，连接 DevTools，并尝试将模型与浏览器工具集成的示例。',
      card_arch_title: '架构',
      card_arch_desc: '理解协议、服务组件，以及 DevTools 如何向外部代理暴露上下文和动作。',
      card_hands_title: '动手实验',
      card_hands_desc: '引导式实验，参与者实现小型自动化与监测，使用 DevTools 与 MCP 原语。',

      nav_gdg: 'GDG 与 DevFest',
      nav_mcp: 'DevTools MCP',
      nav_about: '关于',

      gdg_title: 'GDG 与 DevFest — DevFest 工作坊',
      gdg_heading: '什么是 GDG 与 DevFest？',
      gdg_section_title: 'Google Developer Groups (GDG)',
      gdg_section_desc: 'GDG（Google Developer Groups）是面向对 Google 开发者技术感兴趣的开发者的社区团体。它们由社区组织运营，定期举办线下/线上活动、codelab 与分享，以帮助成员学习并协作构建项目。',
      gdg_benefits: '常见活动包括工作坊、主题分享、黑客松与社交网络活动。GDG 致力于本地社区成长与包容。',
      devfest_section_title: 'DevFest',
      devfest_desc: 'DevFest 是由 GDG 章节在全球组织的开发者大会，通常包含主题演讲、技术分会、工作坊与动手实验。',
      devfest_more: '更多关于 GDG 与 DevFest 的信息，可以参阅官方 GDG 页面与本地章节公告。(参见: https://developers.google.com/community)',
      gdg_how_participate: '如何参与',
      gdg_join: '加入本地 GDG 章节并参加线下/线上聚会。',
      gdg_volunteer: '作为志愿者参与演讲、组织活动或主持工作坊。',
      gdg_contribute: '为社区项目与开源示例贡献代码与文档。',
      gdg_values: '社区价值',
      gdg_values_desc: 'GDG 强调包容、学习与动手实践，欢迎不同背景与技能水平的开发者。',

      mcp_title: 'Chrome DevTools MCP — DevFest 工作坊',
      mcp_heading: 'Chrome DevTools MCP Server',
      mcp_intro: 'Chrome DevTools MCP Server 提供外部代理（包括模型驱动代理）与浏览器 DevTools 之间的桥接。它实现了 Model Context Protocol (MCP)，以向外部工具和服务暴露上下文、动作和调试能力。',
      mcp_features_title: '主要特性',
      mcp_feature_1: '作为协议服务器，支持对 DevTools 上下文的结构化访问。',
      mcp_feature_2: '提供检查 DOM、网络、性能与控制台日志的 API。',
      mcp_feature_3: '包含示例与演示集成，展示自动化流程与模型驱动工具。',
      mcp_install_title: '快速开始',
      mcp_install_desc: '仓库通常包含安装步骤、示例服务与演示客户端，请查看 GitHub 上的 README 与示例以获取本地部署与使用说明: https://github.com/ChromeDevTools/chrome-devtools-mcp/',
      mcp_contrib: '若想查看源码、提交 issue 或贡献代码，仓库包含贡献指南与样例代码以便入门。',
      mcp_security_title: '安全与隐私',
      mcp_security_desc: '将 DevTools 暴露给外部代理时需注意安全与隐私风险。MCP 服务应在受信环境中运行，并结合认证与明确授权，避免未授权访问或控制浏览上下文。',
  mcp_repo_title: '项目与资源',
  mcp_repo_desc: 'Chrome DevTools MCP 项目托管在 GitHub，上面包含文档、示例与工具参考。它提供配置选项（例如 --isolated、--headless 和 --wsEndpoint）以及用于自动化的工具列表（如 click、fill、navigate 与性能追踪）。',
  mcp_quickstart_title: '快速开始（摘要）',
  mcp_quickstart_1: '通过 npm 安装：使用包或运行 `npx chrome-devtools-mcp@latest`。',
  mcp_quickstart_2: '服务将启动一个 Chrome 实例；使用 `--isolated` 可以避免重用现有配置文件。',
  mcp_quickstart_3: '在您的 MCP 客户端中使用工具参考以调用输入/导航/性能相关工具。',

  gdg_find_title: '查找活动并参与',
  gdg_find_desc: '在官方社区页面查找本地分会与即将到来的 DevFest 活动。许多分会会发布活动日程、志愿者机会与面向新手的 codelab。如果您所在地区没有分会，也可以申请发起一个。',

      about_title: '关于 — Jabez',
      about_heading: '关于 Jabez',
      about_role: 'Java 程序员',
      about_bio_title: '简介',
      about_bio: '我主要使用 Java 开发后端服务与工具。业余喜欢弹电贝斯，并且对 AI 驱动的开发者工具很感兴趣。本次 DevFest 工作坊聚焦 DevTools 与模型驱动自动化的交汇。',
      about_contact_title: '联系方式',
      about_contact: '电子邮件: zbc0512@gmail.com'
    }
  };

  function getParam(name){
    try{const u=new URL(window.location.href);return u.searchParams.get(name)}catch(e){return null}
  }

  function getPreferredLang(){
    const urlLang = getParam('lang');
    if(urlLang && (urlLang==='en' || urlLang==='zh')) return urlLang;
    const stored = localStorage.getItem('site_lang');
    if(stored) return stored;
    return navigator.language && navigator.language.startsWith('zh') ? 'zh' : 'en';
  }

  function applyTranslations(lang){
    const dict = locales[lang] || locales.en;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[key]) el.textContent = dict[key];
    });
    document.title = dict.site_title || document.title;
  }

  function updateLinksWithLang(lang){
    document.querySelectorAll('a[href]').forEach(a=>{
      try{
        const href = a.getAttribute('href');
        // only update same-origin relative links
        if(href && !href.startsWith('http') && !href.startsWith('mailto:')){
          const u = new URL(href, window.location.href);
          u.searchParams.set('lang', lang);
          a.setAttribute('href', u.pathname + u.search + u.hash);
        }
      }catch(e){}
    });
  }

  function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site_theme', theme);
    const btn = document.getElementById('theme-toggle');
    if(btn) btn.textContent = theme==='dark' ? '☀️' : '🌙';
  }

  function init(){
    const lang = getPreferredLang();
    applyTranslations(lang);
    updateLinksWithLang(lang);
    const selects = document.querySelectorAll('#lang-select');
    selects.forEach(s=>{ s.value = lang; s.addEventListener('change', (e)=>{
      const v = e.target.value; localStorage.setItem('site_lang', v); // update links & translations
      applyTranslations(v); updateLinksWithLang(v);
      // update URL param without reload
      const url = new URL(window.location.href); url.searchParams.set('lang', v); history.replaceState({},'',url);
    })});

    const savedTheme = localStorage.getItem('site_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
    const themeBtn = document.getElementById('theme-toggle');
    if(themeBtn) themeBtn.addEventListener('click', ()=> applyTheme(document.documentElement.getAttribute('data-theme')==='dark' ? 'light':'dark'));

    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if(menuBtn && mainNav){
      menuBtn.addEventListener('click', (e)=>{
        e.stopPropagation();
        mainNav.classList.toggle('open');
      });
      // close menu when clicking a nav link
      mainNav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> mainNav.classList.remove('open')));
      // close when clicking outside
      document.addEventListener('click', (ev)=>{
        if(!mainNav.contains(ev.target) && !menuBtn.contains(ev.target)) mainNav.classList.remove('open');
      });
    }

    // set year
    const y = new Date().getFullYear(); document.getElementById('year') && (document.getElementById('year').textContent = y);
  }

  // Run after DOM ready
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

})();
