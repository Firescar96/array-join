import nestedLoopJoin from '../src/join.js';
import joinBench from './util/joinBench';

export default joinBench('Full Outer Joins Small', 10, nestedLoopJoin);
