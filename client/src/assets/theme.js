const universalThemes = {
  breakpoint: {
    small: 575,
    medium: 767,
    big: 991,
    large: 1199,
  },
};

export const darkTheme = {
  color: {
    accent: {
      primary: '#cca43b',
    },
    background: {
      primary: '#141414',
      secondary: '#212121',
      tertiary: '#282828',
    },
    text: {
      primary: '#fefefe',
      secondary: '#c5c5c5',
    },
    actions: {
      negative: '#dc3545',
      positive: '#28a745',
    },
  },
  ...universalThemes,
};

export const lightTheme = {
  color: {
    accent: {
      primary: '#202a39',
    },
    background: {
      primary: '#979797',
      secondary: '#c5c5c5',
      tertiary: '#fefefe',
    },
    text: {
      primary: '#141414',
      secondary: '#212121',
    },
    actions: {
      negative: '#dc3545',
      positive: '#28a745',
    },
  },
  ...universalThemes,
};
