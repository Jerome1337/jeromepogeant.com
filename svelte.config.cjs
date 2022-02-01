module.exports = {
  preprocess: {
    style: async ({ _, attributes }) => {
      if (attributes.type !== 'text/postcss') return;
      return new Promise((resolve) => {
        resolve({ code: '', map: '' });
      });
    },
  },
};
