
// Google Analytics Event Tracking

/**
 * Track page views
 * @param {string} path - Current page path
 * @param {string} title - Page title
 */
export const trackPageView = (path: string, title: string) => {
  if (!window.gtag) return;
  window.gtag('config', 'G-TCF0HLDWDH', {
    page_path: path,
    page_title: title
  });
  console.log(`📊 Analytics: Page view tracked - ${title}`);
};

/**
 * Track navigation events
 * @param {string} linkName - Name of the clicked navigation link
 * @param {string} destination - Destination of the link (href)
 */
export const trackNavClick = (linkName: string, destination: string) => {
  if (!window.gtag) return;
  window.gtag('event', 'navigation_click', {
    'event_category': 'Navigation',
    'event_label': linkName,
    'destination': destination
  });
  console.log(`📊 Analytics: Navigation click tracked - ${linkName}`);
};

/**
 * Track external link clicks
 * @param {string} linkName - Name or description of the external link
 * @param {string} url - URL of the external link
 */
export const trackExternalLinkClick = (linkName: string, url: string) => {
  if (!window.gtag) return;
  window.gtag('event', 'external_link_click', {
    'event_category': 'Outbound',
    'event_label': linkName,
    'destination': url
  });
  console.log(`📊 Analytics: External link click tracked - ${linkName} (${url})`);
};

/**
 * Track accordion interaction
 * @param {string} accordionTitle - Title of the accordion item
 * @param {boolean} isOpen - Whether the accordion is being opened (true) or closed (false)
 */
export const trackAccordionInteraction = (accordionTitle: string, isOpen: boolean) => {
  if (!window.gtag) return;
  window.gtag('event', isOpen ? 'accordion_open' : 'accordion_close', {
    'event_category': 'Content Interaction',
    'event_label': accordionTitle
  });
  console.log(`📊 Analytics: Accordion ${isOpen ? 'opened' : 'closed'} - ${accordionTitle}`);
};

/**
 * Track carousel interactions
 * @param {number} slideIndex - Index of the slide being viewed
 * @param {string} slideCaption - Caption or title of the slide
 */
export const trackCarouselSlide = (slideIndex: number, slideCaption: string) => {
  if (!window.gtag) return;
  window.gtag('event', 'carousel_slide_view', {
    'event_category': 'Content Interaction',
    'event_label': `Slide ${slideIndex + 1}: ${slideCaption}`
  });
  console.log(`📊 Analytics: Carousel slide viewed - ${slideCaption}`);
};

/**
 * Track section visibility (when a section enters the viewport)
 * @param {string} sectionId - ID of the section
 * @param {string} sectionName - Human-readable name of the section
 */
export const trackSectionView = (sectionId: string, sectionName: string) => {
  if (!window.gtag) return;
  window.gtag('event', 'section_view', {
    'event_category': 'Content Visibility',
    'event_label': sectionName,
    'section_id': sectionId
  });
  console.log(`📊 Analytics: Section view tracked - ${sectionName}`);
};

/**
 * Track time on page events (anti-bounce)
 * @param {number} seconds - Seconds spent on page
 */
export const trackTimeOnPage = (seconds: number) => {
  if (!window.gtag) return;
  
  // Only track specific milestone times to avoid excessive events
  const milestones = [10, 30, 60, 120, 300];
  
  if (milestones.includes(seconds)) {
    window.gtag('event', 'time_on_page', {
      'event_category': 'Engagement',
      'event_label': `${seconds} seconds`,
      'value': seconds
    });
    console.log(`📊 Analytics: Time on page tracked - ${seconds} seconds`);
  }
};

/**
 * Track scroll depth
 * @param {number} depth - Scroll depth percentage
 */
export const trackScrollDepth = (depth: number) => {
  if (!window.gtag) return;
  
  // Only track specific depth percentages to avoid excessive events
  const depthMilestones = [25, 50, 75, 90];
  
  if (depthMilestones.includes(depth)) {
    window.gtag('event', 'scroll_depth', {
      'event_category': 'Engagement',
      'event_label': `${depth}%`,
      'value': depth
    });
    console.log(`📊 Analytics: Scroll depth tracked - ${depth}%`);
  }
};
