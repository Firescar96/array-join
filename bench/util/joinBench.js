import Chance from 'chance';

/**
 * Generate a join bench test.
 *
 * @param  {String} name
 * @param  {Number} size
 * @param  {Function} hashJoin
 * @param  {Function} sortedMergeJoin
 * @param  {Function} nestedLoopJoin
 * @returns {Benchmark.Suite}
 */
export default function joinBench (name, size, nestedLoopJoin) {
    const chance = new Chance();
    chance.mixin({row: () => ({id: chance.character({pool: 'aeiouy'})})});
    const left = chance.n(chance.row, size),
        right = chance.n(chance.row, size),
        accessor = obj => obj.id
    return {
        name,
        tests: {
            'Nested Loop Join': () => nestedLoopJoin(left, right, {key: 'id'})
        }
    };
}
