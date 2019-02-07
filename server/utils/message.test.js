var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Mark';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from, text });

    });
});

describe('generateLocationMethod', () => {
    it('should generate correct location object', () => {
        var from = 'Bud';
        var latitude = 15;
        var longitude = 19;
        var url = `https://www.google.com/maps/@${latitude},${longitude}`;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from, url });
    });
});