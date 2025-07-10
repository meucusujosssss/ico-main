// Custom module declarations for libraries without bundled TypeScript types

// html2pdf.js currently ships without its own type definitions
declare module 'html2pdf.js';

// Some IDEs fail to resolve the re-export path "chart.js/auto" even though
// the main chart.js package includes types. This stub fixes the import path.
declare module 'chart.js/auto' {
  import ChartJS from 'chart.js';
  export default ChartJS;
}
