// test-runner.js

/**
 * Executes a single test.
 * @param {function} test - The test function to run.
 * @returns {Object} - The result of the test execution.
 */
function runTest(test) {
    try {
        const result = test();
        return { success: true, result: result };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

/**
 * Analyzes the result of a test case.
 * @param {Object} result - The result object from a test.
 * @returns {Object} - Analysis containing pass/fail and severity.
 */
function analyzeResult(result) {
    if (result.success) {
        return { pass: true, severity: 'none' };
    } else {
        // You can implement more sophisticated severity assessment.
        return { pass: false, severity: 'high', message: result.error };
    }
}

/**
 * Executes all test cases in batches.
 * @param {Array<function>} tests - An array of test functions to run.
 * @returns {Array<Object>} - The results of all test executions.
 */
function runAllTests(tests) {
    return tests.map(runTest).map(analyzeResult);
}

module.exports = { runTest, analyzeResult, runAllTests };