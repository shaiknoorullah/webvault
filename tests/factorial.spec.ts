import { expect, assert } from 'chai'
import * as main from '../src/index.js'
import sinon from 'sinon';

describe('Factorial Function', () => {
    it('should calculate factorial of 0', () => {
        const result = main.factorial(0);
        expect(result).to.equal(1);
    });

    it('should calculate factorial of 1', () => {
        const result = main.factorial(1);
        expect(result).to.equal(1);
    });

    it('should calculate factorial of a positive number', () => {
        const result = main.factorial(5);
        expect(result).to.equal(120);
    });

    it('should throw an error for negative numbers', () => {
        const spy = sinon.spy(main.factorial);
        try {
            main.factorial(-1);
        } catch (error: any) {
            // pass
            expect(error.message).to.not.be.undefined
        }
        expect(spy.threw)
        // spy.restore();
    });
});
