const Q = 0.25;
const D = 0.1;
const Ni = 0.05;
const P = 0.01;
const coinCounter = 0;

const change = function (N) {
  while (N > 0) {
    if (N >= Q) {
      N - Q;
      coinCounter++;
      return N;
    }
  }
};
