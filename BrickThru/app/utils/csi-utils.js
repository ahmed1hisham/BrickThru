import covariance from 'compute-covariance';
import calculateCorrelation from 'calculate-correlation';

export const calculateAmplitudeFromCSI = (csi) => {
  let imaginary = [];
  let real = [];
  let amplitudes = [];
  let phases = [];

  const tmp = csi[csi.length - 1].match(/\d/g);
  const integerArray = tmp.map((s) => Number(s));

  integerArray.forEach((value, i) => {
    if (i % 2 == 0) {
      imaginary.push(value);
    } else {
      real.push(value);
    }
  });

  for (let i = 0; i < Math.floor(real.length / 2); i++) {
    const amp = Math.sqrt(imaginary[i] ** 2 + real[i] ** 2);
    const pha = Math.atan2(imaginary[i], real[i]);
    amplitudes.push(amp);
    phases.push(pha);
  }

  return [amplitudes, phases];
};

export const parseCSI = (raw) => {
  const result = raw.csi.split(',').map((s) => Number(s) || s);
  return result;
};

export const calculateCovarriance = (x, y) => {
  return covariance(x, y);
};

export const calculateCorr = (x, y) => {
  return calculateCorrelation(x, y);
};

export const getTrimmedMean = (data, trimAmount) => {
  var trimCount = Math.floor(trimAmount * data.length);
  var trimData = data.sort().slice(trimCount, data.length - trimCount);
  return trimData.reduce((a, b) => a + b, 0) / trimData.length;
};

export const getArrayMax = (array) => {
  return Math.max.apply(null, array);
};
