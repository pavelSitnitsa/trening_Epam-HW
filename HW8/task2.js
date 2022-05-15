function division(a, b) {
  try {
    if (b == 0) {
      throw new Error("на ноль делить нельзя");
    }
  } catch (error) {
    console.log(error.message);
  }

  return a / b;
}

console.log(division(1, 0));
