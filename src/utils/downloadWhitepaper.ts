/**
 * Opens the whitepaper PDF in a new tab.
 * In the future we can switch to dynamic html2pdf generation like the audit reports.
 */
export function downloadWhitepaper() {
  window.open('/whitepaper.pdf', '_blank');
}
