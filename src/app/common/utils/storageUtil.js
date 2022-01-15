const storageUtil = {
  getItem: (item) => {
    try {
      return JSON.parse(localStorage.getItem(item));
    } catch (err) {
      return localStorage.getItem(item);
    }
  },

  setItem: (item, value) => {
    localStorage.setItem(item, JSON.stringify(value));
  },

  removeItem: (item) => {
    localStorage.removeItem(item);
  }
};

export default storageUtil;
