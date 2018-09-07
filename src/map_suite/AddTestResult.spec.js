import AddTestResult from './AddTestResult'
const expect = require('chai').expect

suite('AddTestResult Unit Tests', function () {
    test('Should successfully Add A Passing Test', function () {
        const testResult = {
            pass: true,
            fail: false,
            pending: false
        }
        let suiteResult = AddTestResult({tests: [], passes: []}, testResult)

        expect(suiteResult.tests.length).to.be.equal(1)
        expect(suiteResult.passes.length).to.be.equal(1)
    })
    test('Should successfully Add A Failing Test', function () {
        const testResult = {
            pass: false,
            fail: true,
            pending: false
        }
        let suiteResult = AddTestResult({tests: [], failures: []}, testResult)

        expect(suiteResult.tests.length).to.be.equal(1)
        expect(suiteResult.failures.length).to.be.equal(1)
    })
    test('Should successfully Add A Pending Test', function () {
        const testResult = {
            pass: false,
            fail: false,
            pending: true
        }
        let suiteResult = AddTestResult({tests: [], pending: []}, testResult)

        expect(suiteResult.tests.length).to.be.equal(1)
        expect(suiteResult.pending.length).to.be.equal(1)
    })
})
