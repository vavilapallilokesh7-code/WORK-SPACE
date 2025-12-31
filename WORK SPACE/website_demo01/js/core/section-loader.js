const loadSection = async (sectionName) => {
    try {
      const response = await fetch(`sections/${sectionName}.html`);
      if (!response.ok) throw new Error(`Failed to load ${sectionName}`);
      return await response.text();
    } catch (err) {
      console.error(err);
      return '';
    }
  };
  
  const loadSections = async () => {
    const sections = [
      'header',
      'hero',
      'chapter',
      'reviews',
      'audio',
      'promo',
      'order',
      'about',
      'footer'
    ];
  
    for (const name of sections) {
      const container = document.getElementById(name);
      if (!container) continue;
  
      const html = await loadSection(name);
      container.innerHTML = html;
    }
  
    // Init JS AFTER sections load
    if (window.initNavbar) initNavbar();
    if (window.initScrollAnimations) initScrollAnimations();
    if (window.initHomePage) initHomePage();
  };
  
  window.loadSections = loadSections;
  