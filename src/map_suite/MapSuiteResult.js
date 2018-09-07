import uuidV4 from 'uuid/v4'

export default (isRoot, data, saniCaps) => {
    let suite = {
        'title': '',
        'suites': [],
        'tests': [],
        'pending': [],
        'root': isRoot,
        'fullFile': '',
        'file': '',
        'passes': [],
        'failures': [],
        'skipped': [],
        'hasTests': false,
        'hasSuites': false,
        'totalTests': 0,
        'totalPasses': 0,
        'totalFailures': 0,
        'totalPending': 0,
        'totalSkipped': 0,
        'hasPasses': false,
        'hasFailures': false,
        'hasPending': false,
        'hasSkipped': false,
        'duration': 0,
        'rootEmpty': data.rootEmpty,
        '_timeout': 0,
        'uuid': uuidV4(),
        'hasBeforeHooks': false,
        'beforeHooks': [],
        'hasAfterHooks': false,
        'afterHooks': []
    }

    if (!isRoot) {
        suite.title = data.title

        if (saniCaps) {
            suite.title = `${suite.title} (${saniCaps})`
        }

        if (data._duration) {
            suite.duration = data._duration
        }
    }

    return suite
}
