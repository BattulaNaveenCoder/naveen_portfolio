import { useEffect, useState } from 'react';

// Observes section visibility and returns the currently active section id
export function useActiveSection(sectionIds, options = { rootMargin: '-40% 0px -55% 0px', threshold: 0 }) {
  const [active, setActive] = useState(sectionIds?.[0] || 'home');

  useEffect(() => {
    if (!Array.isArray(sectionIds) || sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      options
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [JSON.stringify(sectionIds)]); // eslint-disable-line react-hooks/exhaustive-deps

  return active;
}
