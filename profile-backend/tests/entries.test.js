const entries = require('../entries')

test('check whether entries are being stored', () => {
    entry = {
        name: 'Utkarsh singh',
        email: 'test@gmail.com',
        message: 'ok',
    }
    entries.putEntry(entry)
    fetchedEntries = entries.getEntries()
    expect(fetchedEntries.pop()).toStrictEqual(entry)
})
