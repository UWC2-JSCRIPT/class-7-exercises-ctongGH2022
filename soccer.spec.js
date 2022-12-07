/**
 * Cecilia Tong
 * Class 7 Exercise & Homework
 * Nov 29, 2022
 * Soccer Spec
 */

describe('Test for the Soccer Game', () => {
    for (let i = 0; i < 10; i++) {
        describe('Test the getTotalPoints Method', () => {
            it('should return correct point total', () => {
                const points = getTotalPoints('wwdl')
                expect(points).toBe(7)
                expect(getTotalPoints('dddl')).toBe(3)
                expect(getTotalPoints('lll')).toBe(0)
                expect(getTotalPoints('www')).toBe(9)
                expect(getTotalPoints('dddw')).toBe(6)
                expect(getTotalPoints('lllw')).toBe(3)
                expect(getTotalPoints('lwd')).toBe(4)
                expect(getTotalPoints('llldddw')).toBe(6)
                expect(getTotalPoints('llldddw')).not.toBe(10)
                expect(getTotalPoints('llldddw')).not.toBe(61)
            })
        }) //end test getTotalPoints Method
    }//end for loop


    //{name: 'Sounders', results: 'wwlwdd'}
    for (let i = 0; i < 10; i++) {
        describe('Test the orderTeams method', () => {
            it('should return standingsString += `${team.name}: ${points}`', () => {
                expect(orderTeams({ name: 'Sounders', results: 'wwdl' })).toBe(`Sounders: 7`);
                expect(orderTeams({ name: 'Galaxy', results: 'wlld' })).toBe(`Galaxy: 4`);
                expect(orderTeams({ name: 'A', results: 'ww' }, { name: 'B', results: 'lld' })).toBe(`A: 6\nB: 1`);
                expect(orderTeams({ name: 'A', results: 'wlwl' }, { name: 'B', results: 'wwwlld' }, { name: 'C', results: 'wwwl' })).toBe(`A: 6\nB: 10\nC: 9`);
            })
        }) //end test getTotalPoints Method
    } // end for loop

})