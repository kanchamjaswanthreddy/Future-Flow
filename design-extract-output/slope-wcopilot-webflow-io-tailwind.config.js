/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(NaN, NaN%, 97%)',
            '100': 'hsl(NaN, NaN%, 94%)',
            '200': 'hsl(NaN, NaN%, 86%)',
            '300': 'hsl(NaN, NaN%, 76%)',
            '400': 'hsl(NaN, NaN%, 64%)',
            '500': 'hsl(NaN, NaN%, 50%)',
            '600': 'hsl(NaN, NaN%, 40%)',
            '700': 'hsl(NaN, NaN%, 32%)',
            '800': 'hsl(NaN, NaN%, 24%)',
            '900': 'hsl(NaN, NaN%, 16%)',
            '950': 'hsl(NaN, NaN%, 10%)',
            DEFAULT: '#4353ff'
        },
        secondary: {
            '50': 'hsl(NaN, NaN%, 97%)',
            '100': 'hsl(NaN, NaN%, 94%)',
            '200': 'hsl(NaN, NaN%, 86%)',
            '300': 'hsl(NaN, NaN%, 76%)',
            '400': 'hsl(NaN, NaN%, 64%)',
            '500': 'hsl(NaN, NaN%, 50%)',
            '600': 'hsl(NaN, NaN%, 40%)',
            '700': 'hsl(NaN, NaN%, 32%)',
            '800': 'hsl(NaN, NaN%, 24%)',
            '900': 'hsl(NaN, NaN%, 16%)',
            '950': 'hsl(NaN, NaN%, 10%)',
            DEFAULT: '#ffd5bf'
        },
        accent: {
            '50': 'hsl(NaN, NaN%, 97%)',
            '100': 'hsl(NaN, NaN%, 94%)',
            '200': 'hsl(NaN, NaN%, 86%)',
            '300': 'hsl(NaN, NaN%, 76%)',
            '400': 'hsl(NaN, NaN%, 64%)',
            '500': 'hsl(NaN, NaN%, 50%)',
            '600': 'hsl(NaN, NaN%, 40%)',
            '700': 'hsl(NaN, NaN%, 32%)',
            '800': 'hsl(NaN, NaN%, 24%)',
            '900': 'hsl(NaN, NaN%, 16%)',
            '950': 'hsl(NaN, NaN%, 10%)',
            DEFAULT: '#ccf6ea'
        },
        'neutral-50': '#0e0e0e',
        'neutral-100': '#222222',
        'neutral-200': '#ffffff',
        'neutral-300': '#000000',
        'neutral-400': '#333333',
        'neutral-500': '#9a9a9a',
        'neutral-600': '#eaeaea',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Manrope',
            'sans-serif'
        ],
        body: [
            'Poppins',
            'sans-serif'
        ],
        font2: [
            'sans-serif',
            'sans-serif'
        ]
    },
    fontSize: {
        '11': [
            '11px',
            {
                lineHeight: '18px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: '15.6px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '21px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '27px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '30px'
            }
        ],
        '22': [
            '22px',
            {
                lineHeight: '26.4px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '16px'
            }
        ],
        '27': [
            '27px',
            {
                lineHeight: '32.4px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '48px'
            }
        ],
        '50': [
            '50px',
            {
                lineHeight: '60px'
            }
        ],
        '60': [
            '60px',
            {
                lineHeight: '60px',
                letterSpacing: '-3px'
            }
        ]
    },
    spacing: {
        '12': '24px',
        '15': '30px',
        '20': '40px',
        '25': '50px',
        '35': '70px',
        '40': '80px',
        '50': '100px',
        '64': '128px',
        '70': '140px',
        '5px': '5px',
        '395px': '395px'
    },
    borderRadius: {
        xs: '2px',
        md: '9px',
        lg: '16px',
        xl: '20px',
        full: '50px'
    },
    boxShadow: {
        lg: 'rgba(0, 0, 0, 0.33) 0px 0px 30px 0px',
        xl: 'rgba(0, 0, 0, 0.05) 0px 0px 35px 0px'
    },
    screens: {
        md: '768px',
        xl: '1280px',
        '1440px': '1440px',
        '1920px': '1920px'
    },
    transitionDuration: {
        '200': '0.2s',
        '300': '0.3s'
    },
    container: {
        center: true,
        padding: '15px'
    },
    maxWidth: {
        container: '1200px'
    }
},
  },
};
