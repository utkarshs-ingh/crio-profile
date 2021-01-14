const entries = require('../entries')

test('check whether entries are being stored', () => {
    entry = {
        name: 'Anas Khan',
        email: 'anas@gmail.com',
        message: 'I would love to work with you',
    }
    entries.putEntry(entry)
    fetchedEntries = entries.getEntries()
    expect(fetchedEntries.pop()).toBe(entry)
})
