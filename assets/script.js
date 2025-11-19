document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('lang-toggle');
  const themeToggle = document.getElementById('theme-toggle');

  // Embedded Translations (No fetch needed)
  const translations = {
    "en": {
      "nav": {
        "home": "Home",
        "gdg": "GDG & DevFest",
        "mcp": "DevTools MCP",
        "profile": "Profile"
      },
      "home": {
        "title": "DevFest Workshop",
        "subtitle": "Building the Future with Chrome DevTools MCP",
        "cta": "Explore MCP",
        "welcome": "Welcome to the Workshop",
        "description": "Join us to explore the power of Chrome DevTools MCP Server. Learn how to build intelligent agents that can interact with the browser, analyze performance, and automate tasks."
      },
      "gdg": {
        "title": "About GDG & DevFest",
        "what_is_gdg": "What is GDG?",
        "gdg_desc": "Google Developer Groups (GDG) are community groups for developers who are interested in Google's developer technology. From Android to Google Cloud platforms, to Chrome and AI, GDG communities organize events to share knowledge and connect.",
        "what_is_devfest": "What is DevFest?",
        "devfest_desc": "DevFest is a global community-led developer conference hosted by Google Developer Groups (GDGs). It is focused on community building and learning about Google's technologies.",
        "values": "Community Values",
        "values_desc": "We believe in knowledge sharing, inclusivity, and the power of community to drive innovation.",
        "programs_title": "Global Programs",
        "gde_title": "Google Developer Experts",
        "gde_desc": "A global program to recognize individuals who are experts and thought leaders in one or more Google technologies.",
        "accelerator_title": "Google for Startups Accelerator",
        "accelerator_desc": "A program that connects top startups with the best of Google's people, network, and advanced technology.",
        "wtm_title": "Women Techmakers",
        "wtm_desc": "Google's program and global community for women in technology, providing visibility, community, and resources."
      },
      "mcp": {
        "title": "Chrome DevTools MCP",
        "overview": "Overview",
        "overview_desc": "Chrome DevTools MCP is a Model Context Protocol server that allows AI agents to interact with Chrome DevTools. It enables agents to inspect, debug, and modify data in the browser.",
        "installation_title": "Installation",
        "installation_desc": "Get started quickly by running the server using npx:",
        "concepts_title": "Core Concepts",
        "concepts_desc": "Understand how the server manages user profiles and connects to Chrome instances.",
        "features": "Key Features",
        "feature_1": "Performance Insights: Record traces and extract actionable insights.",
        "feature_2": "Browser Debugging: Analyze network requests, screenshots, and console logs.",
        "feature_3": "Reliable Automation: Use Puppeteer to automate actions and wait for results.",
        "tools": "Available Tools",
        "tools_desc": "The server provides tools for Input Automation (click, type, hover), Navigation (open, close, switch tabs), Emulation (viewport resizing), and Performance Analysis.",
        "config_title": "Configuration",
        "config_desc": "The server supports various configurations, including connecting to an existing Chrome instance via WebSocket or launching a new instance with custom flags and user data directories.",
        "resources_title": "Resources",
        "resources_desc": "Explore the official repository for comprehensive documentation, issue tracking, and contribution guidelines to help improve the tool."
      },
      "profile": {
        "title": "About Jabez",
        "role": "Java Developer",
        "bio": "Hi, I'm Jabez. I'm a passionate Java Developer with a deep interest in building scalable systems. Recently, I've been diving into the world of AI and Agentic workflows.",
        "hobbies": "Hobbies & Interests",
        "hobby_1": "🎸 Electric Bass Player - I love the groove!",
        "hobby_2": "🤖 Exploring AI & LLMs",
        "hobby_3": "💻 Open Source Contributing"
      }
    },
    "zh": {
      "nav": {
        "home": "首页",
        "gdg": "GDG 与 DevFest",
        "mcp": "DevTools MCP",
        "profile": "个人简介"
      },
      "home": {
        "title": "DevFest 工作坊",
        "subtitle": "使用 Chrome DevTools MCP 构建未来",
        "cta": "探索 MCP",
        "welcome": "欢迎来到工作坊",
        "description": "加入我们，探索 Chrome DevTools MCP Server 的强大功能。学习如何构建能够与浏览器交互、分析性能和自动化任务的智能 Agent。"
      },
      "gdg": {
        "title": "关于 GDG & DevFest",
        "what_is_gdg": "什么是 GDG？",
        "gdg_desc": "Google 开发者社区 (GDG) 是为对 Google 开发者技术感兴趣的开发者建立的社区小组。从 Android 到 Google Cloud 平台，再到 Chrome 和 AI，GDG 社区组织各种活动以分享知识和建立连接。",
        "what_is_devfest": "什么是 DevFest？",
        "devfest_desc": "DevFest 是由 Google 开发者社区 (GDG) 举办的全球性社区主导的开发者大会。它专注于社区建设和学习 Google 的技术。",
        "values": "社区价值观",
        "values_desc": "我们相信知识分享、包容性以及社区推动创新的力量。",
        "programs_title": "全球项目",
        "gde_title": "Google 开发者专家 (GDE)",
        "gde_desc": "一项全球计划，旨在表彰在一种或多种 Google 技术方面具有专长和思想领导力的个人。",
        "accelerator_title": "Google 初创企业加速器",
        "accelerator_desc": "该计划将顶尖初创企业与 Google 最优秀的人才、网络和先进技术联系起来。",
        "wtm_title": "Women Techmakers",
        "wtm_desc": "Google 面向科技领域女性的计划和全球社区，提供知名度、社区和资源。"
      },
      "mcp": {
        "title": "Chrome DevTools MCP",
        "overview": "概览",
        "overview_desc": "Chrome DevTools MCP 是一个模型上下文协议服务器，允许 AI Agent 与 Chrome DevTools 交互。它使 Agent 能够检查、调试和修改浏览器中的数据。",
        "installation_title": "安装",
        "installation_desc": "使用 npx 快速启动服务器：",
        "concepts_title": "核心概念",
        "concepts_desc": "了解服务器如何管理用户配置文件以及如何连接到 Chrome 实例。",
        "features": "核心特性",
        "feature_1": "性能洞察：记录追踪并提取可操作的洞察。",
        "feature_2": "浏览器调试：分析网络请求、截图和控制台日志。",
        "feature_3": "可靠自动化：使用 Puppeteer 自动化操作并等待结果。",
        "tools": "可用工具",
        "tools_desc": "该服务器提供用于输入自动化（点击、输入、悬停）、导航（打开、关闭、切换标签页）、模拟（视口调整）和性能分析的工具。",
        "config_title": "配置",
        "config_desc": "该服务器支持多种配置，包括通过 WebSocket 连接到现有的 Chrome 实例，或使用自定义标志和用户数据目录启动新实例。",
        "resources_title": "资源",
        "resources_desc": "探索官方仓库以获取全面的文档、问题跟踪和贡献指南，帮助改进该工具。"
      },
      "profile": {
        "title": "关于 Jabez",
        "role": "Java 开发者",
        "bio": "你好，我是 Jabez。我是一名充满激情的 Java 开发者，热衷于构建可扩展的系统。最近，我正在深入研究 AI 和 Agent 工作流的世界。",
        "hobbies": "爱好与兴趣",
        "hobby_1": "🎸 电贝斯手 - 我爱律动！",
        "hobby_2": "🤖 探索 AI & LLM",
        "hobby_3": "💻 开源贡献"
      }
    }
  };

  // State
  let currentLang = localStorage.getItem('lang') || 'en';
  let currentTheme = localStorage.getItem('theme') || 'dark';

  // Initialize
  applyTheme(currentTheme);
  updateContent();
  initSpotlight();
  initTextEffects();

  // Event Listeners
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('lang', currentLang);
    updateContent();
  });

  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.textContent = '☀️'; // Sun icon for switching to light
    } else {
      document.body.classList.remove('dark-mode');
      themeToggle.textContent = '🌙'; // Moon icon for switching to dark
    }
  }

  function updateContent() {
    // Update Language Button Text
    langToggle.textContent = currentLang === 'en' ? '中文' : 'English';

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const keys = key.split('.');
      let value = translations[currentLang];

      for (const k of keys) {
        if (value) value = value[k];
      }

      if (value) {
        // Simple fade effect for text change
        element.style.opacity = '0';
        setTimeout(() => {
          element.textContent = value;
          element.style.opacity = '1';
        }, 200);
      }
    });
  }

  // Spotlight Effect
  function initSpotlight() {
    const cards = document.querySelectorAll('.card');

    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;

      // Update cards
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });

      // Update grid spotlight (on body)
      document.body.style.setProperty('--mouse-x', `${clientX}px`);
      document.body.style.setProperty('--mouse-y', `${clientY}px`);
    });
  }

  // Text Scramble/Typewriter Effect (Simplified for performance)
  function initTextEffects() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
      heroTitle.classList.add('scramble-text');
    }
  }

  // Mobile Menu Logic
  function initMobileMenu() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const navControls = document.querySelector('.nav-controls');

    // Create Toggle Button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'menu-toggle';
    toggleBtn.innerHTML = '☰';
    toggleBtn.ariaLabel = 'Toggle Menu';

    // Insert before controls (or append to nav, depending on layout preference)
    // Here we insert it before the controls so it sits to the left of them, or we can just append to nav
    // Given flex: space-between, we probably want it visible. Let's append to nav but hide on desktop via CSS.
    // Actually, let's put it inside nav-controls for better alignment or just outside.
    // Let's place it in the nav, but we need to ensure CSS hides it on desktop.
    // Wait, CSS for .menu-toggle is only in @media (max-width: 768px), so it's hidden by default (display: block is inside media query).
    // But we need to make sure it's hidden on desktop.
    toggleBtn.style.display = 'none'; // Default hidden

    // We need to add a style rule for desktop to hide it, or just rely on the media query.
    // The CSS I wrote only has .menu-toggle { display: block } inside the media query.
    // It doesn't define .menu-toggle outside. So it might be visible if I don't set display: none inline or in global CSS.
    // Let's add a global rule in JS or just rely on the fact that I didn't define it globally? 
    // Browser default for button is inline-block. So it will show.
    // I should update CSS to hide it globally first. 
    // For now, I'll set it to display: none, and let the media query override it? 
    // Inline styles have high specificity. Media query won't override inline style unless !important.
    // Better to add a class that handles visibility.

    // Let's just append it and rely on the CSS I just wrote. 
    // Wait, I missed adding the global "display: none" for .menu-toggle in the CSS step.
    // I should fix that in CSS or just add it here.
    // Let's add it to nav-controls for alignment.
    navControls.prepend(toggleBtn);

    toggleBtn.addEventListener('click', () => {
      const isActive = navLinks.classList.toggle('active');
      toggleBtn.innerHTML = isActive ? '✕' : '☰';
      document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggleBtn.innerHTML = '☰';
        document.body.style.overflow = '';
      });
    });

    // Handle resize to reset
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        navLinks.classList.remove('active');
        toggleBtn.innerHTML = '☰';
        document.body.style.overflow = '';
        toggleBtn.style.display = 'none';
      } else {
        toggleBtn.style.display = 'block';
      }
    });

    // Initial check
    if (window.innerWidth <= 1024) {
      toggleBtn.style.display = 'block';
    }
  }

  // Scroll Navigation Logic (Hide on down, Show on up)
  function initScrollNav() {
    const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const navLinks = document.querySelector('.nav-links');
          const isMenuOpen = navLinks.classList.contains('active');

          // Only hide if menu is NOT open
          if (!isMenuOpen) {
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
              // Scrolling down & past top
              nav.classList.add('nav-hidden');
            } else {
              // Scrolling up
              nav.classList.remove('nav-hidden');
            }
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  initMobileMenu();
  initScrollNav();
});
