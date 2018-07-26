import autoprefixer from 'autoprefixer';
import { browsers } from '../config';

export default {
  plugins: [autoprefixer({ browsers })]
};
