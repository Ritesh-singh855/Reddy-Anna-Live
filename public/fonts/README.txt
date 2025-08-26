Place any self-hosted web fonts (WOFF2) in this folder and reference them in src/index.css.
Example:

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

Then in CSS assign font-family to body or relevant classes.

