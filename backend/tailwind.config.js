import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                slideOnce: {
                    '0%': { transform: 'translateX(-100%)', opacity: 0 },
                    '50%': { opacity: 0.1 },
                    '100%': { transform: 'translateX(100%)', opacity: 0 },
                },
            },
            animation: {
                'slide-once': 'slideOnce 3.5s ease-in-out 1',
            },
        },
    },
    plugins: [forms],
};
