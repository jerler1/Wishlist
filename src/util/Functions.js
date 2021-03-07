const functions = {
  randomColor() {
    const colors = [
      "has-background-primary-dark",
      "has-background-link-dark",
      "has-background-success-dark",
      "has-background-warning-dark",
      "has-background-danger-dark",
    ];
    const randomValue = Math.floor(Math.random() * colors.length);
    return colors[randomValue];
  },
};

export default functions;
