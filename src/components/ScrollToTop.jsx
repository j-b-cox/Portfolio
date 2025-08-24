// src/components/ScrollToTop.jsx
import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const rafRef = useRef([]);
  const timeoutRef = useRef(null);

  useLayoutEffect(() => {
    // Prevent browser restoring prior scroll positions
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Temporarily disable smooth scrolling that might slow/offset the jump
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const header = document.querySelector("header.sticky");
    const headerOffset = header ? header.offsetHeight : 0;

    const doScroll = () => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo(0, y);
          return;
        }
      }
      window.scrollTo(0, 0);
      // Belt & suspenders for different engines:
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // 1) Do it synchronously before paint
    doScroll();

    // 2) Retry on next frames to defeat layout/animation shifts
    rafRef.current.push(requestAnimationFrame(doScroll));
    rafRef.current.push(requestAnimationFrame(() => requestAnimationFrame(doScroll)));

    // 3) Guard: poll briefly until we’re truly near the top (e.g., < 4px)
    let attempts = 0;
    const ensureTop = () => {
      const y = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (y > 4 && attempts < 10) {
        attempts += 1;
        doScroll();
        timeoutRef.current = setTimeout(ensureTop, 50); // up to ~500ms
      }
    };
    ensureTop();

    // 4) One more after images/fonts load
    window.addEventListener("load", doScroll, { once: true });

    return () => {
      // Restore smooth scroll setting
      html.style.scrollBehavior = previousScrollBehavior || "";
      // Cleanup
      rafRef.current.forEach(cancelAnimationFrame);
      rafRef.current = [];
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("load", doScroll);
    };
  }, [pathname, hash]);

  return null;
}
