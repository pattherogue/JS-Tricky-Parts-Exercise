function curriedAdd(total = 0) {
    const adder = (num) => {
      if (num === undefined) {
        return total;
      } else {
        return curriedAdd(total + num);
      }
    };
    return adder;
  }
  
  module.exports = { curriedAdd };
  