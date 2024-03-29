module.exports = {
  darkTheme: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        'jose': ["Josefin Sans"],
        'peralta': ['Peralta'],
        'caveat': ['Caveat']
      },
      colors: {
        "background": "#201f24",
        'white': '#fff',
        'red': '#ff0000',
        'cyan': '#00ffff',
        'blue': '#1552F0',
        'lead': '#201f24',
        'gray': '#171717',
        'lightgray': '#202020',
        "medGray": "#9c9c9c",
        "chartGray": "#666",
        'almostBlack': "#141414",
        "pink": '#FFCCCC',
        "black": '#000000',
        'ghostwhite': '#f8f8ff',
        'silverPink': '#c4aead'
      }
    },
  },
  purge: {
    safelist: [
      'text-green-400',
      'text-red',
      'text-base',
      'text-center',
    ]
  }
}