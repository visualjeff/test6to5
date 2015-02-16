function toUTF16(codePoint) {
        var TEN_BITS = parseInt('1111111111', 2);
        function u(codeUnit) {
            return '\\u'+codeUnit.toString(16).toUpperCase();
        }

        if (codePoint <= 0xFFFF) {
            return u(codePoint);
        }
        codePoint -= 0x10000;
        
        // Shift right to get to most significant 10 bits
        var leadSurrogate = 0xD800 + (codePoint >> 10);

        // Mask to get least significant 10 bits
        var tailSurrogate = 0xDC00 + (codePoint & TEN_BITS);

        return u(leadSurrogate) + u(tailSurrogate);
    }

console.log(toUTF16(0x1F404));
