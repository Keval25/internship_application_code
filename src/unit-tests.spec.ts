// Mocha with chai is used for as tesing framework
import { solution, Dictionary } from './solution';
import { expect } from 'chai';
import 'mocha';
 
describe('First test', () => {
    // Months and days are not written in "octal" form i.e. "01", "02"..."09" is written as "1", "2"..."9"
    // because there were some internal functional problem it was converting "01" into "1" and that was creating problems
    // Login remains the same.
    var input_dictionary1: Dictionary = {
        '2019-1-1': 100,
        '2019-1-4': 115,
    };
    const expected_dictionary1: Dictionary = {
        '2019-1-1': 100,
        '2019-1-2': 105,
        '2019-1-3': 110,
        '2019-1-4': 115
    }
    it('should return dictionary same as expected_dictionary1', () => {
        const result = solution(input_dictionary1);
        expect(JSON.stringify(result)).to.equal(JSON.stringify(expected_dictionary1));
    });
});

describe('Second test', () => {
    var input_dictionary2: Dictionary = {
        '2019-1-10': 10,
        '2019-1-11': 20,
        '2019-1-13': 10
    };
    const expected_dictionary2: Dictionary = {
        '2019-1-10': 10,
        '2019-1-11': 20,
        '2019-1-12': 15,
        '2019-1-13': 10
    }
    it('should return dictionary same as expected_dictionary2', () => {
        const result = solution(input_dictionary2);
        expect(JSON.stringify(result)).to.equal(JSON.stringify(expected_dictionary2));
    });
});

describe('Second test', () => {
    var input_dictionary3: Dictionary = {
        '2019-1-10': 10,
        '2019-1-11': 15,
        '2019-1-13': 25,
        '2019-1-16': 40
    };
    const expected_dictionary3: Dictionary = {
        '2019-1-10': 10,
        '2019-1-11': 15,
        '2019-1-12': 20,
        '2019-1-13': 25,
        '2019-1-14': 30,
        '2019-1-15': 35,
        '2019-1-16': 40,

    }
    it('should return dictionary same as expected_dictionary3', () => {
        const result = solution(input_dictionary3);
        expect(JSON.stringify(result)).to.equal(JSON.stringify(expected_dictionary3));
    });
});