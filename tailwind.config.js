/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1142px',
        },
        fontFamily: {
            mulish: ['Mulish', 'sans-serif'],
            reey: ['reey', 'sans-serif'],
            andada: ['Andada', 'serif']
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#08111F',
            primary: '#D3A953',
            secondary: '#DDB203',
            gray: {
                DEFAULT: '#7780A1',
                dark: '#1C2331',
            },
        },
        extend: {
            animation: {
                'spin-slow': 'spin 5s linear infinite',
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray'),
                        fontSize: '1.125rem',
                    },
                },
            }),
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require('@tailwindcss/line-clamp'), rotateX,require('@tailwindcss/typography')],
};
