"use client";

import { useState, useCallback, useEffect } from "react";
import Variant2 from "./variants/variant-2";

const REPO_FULL_NAME = 'ibrahim-ansari-code/e';
const LAYER = 'layer-1';
const BEACON_URL = 'http://localhost:8000';

function sendCtaClick(ctaLabel?: string, ctaId?: string) {
  const w = window as unknown as { __landrightVariantId?: number };
  fetch(BEACON_URL + "/beacon", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event: "button_click",
      repo_full_name: REPO_FULL_NAME,
      layer: LAYER,
      variant_id: "2",
      cta_label: ctaLabel ?? undefined,
      cta_id: ctaId ?? undefined,
    }),
  }).catch(() => {});
}

export default function ClientPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    (window as unknown as { __landrightVariantId?: number }).__landrightVariantId = 2;
  }, []);
  
  const handleCtaClick = useCallback((e: React.MouseEvent) => {
    const t = (e.target as HTMLElement).closest("a, button");
    if (!t) return;
    const label = (t as HTMLElement).textContent?.trim();
    const id = (t as HTMLElement).id ?? (t as HTMLElement).getAttribute("data-cta-id") ?? undefined;
    sendCtaClick(label ?? undefined, id ?? undefined);
  }, []);
  
  if (!mounted) return <div style={{ minHeight: "100vh" }} />;
  
  return (
    <div
      data-repo-full-name={REPO_FULL_NAME}
      data-layer={LAYER}
      data-variant-id="2"
      onClick={handleCtaClick}
      role="presentation"
    >
      <Variant2 />
    </div>
  );
}