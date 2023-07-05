const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                // sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#696CFF',
                heading: '#545454',
                plain: '#757575',
                border: '#979797',
                secondary: '#8592A3',
                success: '#71DD37',
                danger: '#FF3E1D',
                warning: '#FFAB00',
                info:  '#03C3EC',
                gray: {
                    100: '#ECEEF1',
                    200: '#A1ACB8',
                    300: '#697A8D',
                    400: '#566A7F',
                    500: '#435971'
                }
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
