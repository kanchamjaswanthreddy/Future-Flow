// React Theme — extracted from https://slope-wcopilot.webflow.io/home-1
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '11': string;
    '12': string;
    '14': string;
    '16': string;
    '18': string;
    '20': string;
    '22': string;
    '24': string;
    '27': string;
    '40': string;
    '50': string;
    '60': string;
 *   };
 *   space: {
    '5': string;
    '24': string;
    '30': string;
    '40': string;
    '50': string;
    '70': string;
    '80': string;
    '100': string;
    '128': string;
    '140': string;
    '395': string;
 *   };
 *   radii: {
    xs: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    lg: string;
    xl: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#4353ff",
    "secondary": "#ffd5bf",
    "accent": "#ccf6ea",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#0e0e0e",
    "neutral100": "#222222",
    "neutral200": "#ffffff",
    "neutral300": "#000000",
    "neutral400": "#333333",
    "neutral500": "#9a9a9a",
    "neutral600": "#eaeaea"
  },
  "fonts": {
    "body": "'Poppins', sans-serif"
  },
  "fontSizes": {
    "11": "11px",
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "22": "22px",
    "24": "24px",
    "27": "27px",
    "40": "40px",
    "50": "50px",
    "60": "60px"
  },
  "space": {
    "5": "5px",
    "24": "24px",
    "30": "30px",
    "40": "40px",
    "50": "50px",
    "70": "70px",
    "80": "80px",
    "100": "100px",
    "128": "128px",
    "140": "140px",
    "395": "395px"
  },
  "radii": {
    "xs": "2px",
    "md": "9px",
    "lg": "16px",
    "xl": "20px",
    "full": "50px"
  },
  "shadows": {
    "lg": "rgba(0, 0, 0, 0.33) 0px 0px 30px 0px",
    "xl": "rgba(0, 0, 0, 0.05) 0px 0px 35px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#4353ff",
      "light": "hsl(235, 100%, 78%)",
      "dark": "hsl(235, 100%, 48%)"
    },
    "secondary": {
      "main": "#ffd5bf",
      "light": "hsl(21, 100%, 95%)",
      "dark": "hsl(21, 100%, 72%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#0e0e0e"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#0e0e0e"
    }
  },
  "typography": {
    "fontFamily": "'Lato', sans-serif",
    "h1": {
      "fontSize": "40px",
      "fontWeight": "600",
      "lineHeight": "48px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "400",
      "lineHeight": "16px"
    },
    "h3": {
      "fontSize": "22px",
      "fontWeight": "600",
      "lineHeight": "26.4px"
    }
  },
  "shape": {
    "borderRadius": 9
  },
  "shadows": [
    "rgba(0, 0, 0, 0.25) 0px 5px 25px 0px",
    "rgba(0, 0, 0, 0.33) 0px 0px 30px 0px",
    "rgba(0, 0, 0, 0.05) 0px 0px 35px 0px"
  ]
};

export default theme;
