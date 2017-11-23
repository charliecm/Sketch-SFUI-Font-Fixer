var validateFontName = function(layer) {
    var fontName = layer.fontPostscriptName();
    var fontWeight = fontName.split("-")[1];
    var fontSize = layer.fontSize();
    if (fontSize >= 20) {
        fontName = "SFProDisplay-" + fontWeight;
    } else {
        fontName = "SFProText-" + fontWeight;
    }
    layer.fontPostscriptName = fontName;
};

var validateFontSpacing = function(layer) {
    var fontSize = layer.fontSize();
    var characterSpacings = {
        6: 0.246,
        7: 0.223,
        8: 0.208,
        9: 0.171,
        10: 0.12,
        11: 0.06,
        12: 0,
        13: -0.078,
        14: -0.154,
        15: -0.24,
        16: -0.32,
        17: -0.408,
        18: -0.45,
        19: -0.49,
        20: 0.340402,
        21: 0.326660,
        22: 0.320731,
        23: 0.324079,
        24: 0.326451,
        25: 0.327846,
        26: 0.328265,
        27: 0.327706,
        28: 0.326172,
        29: 0.323661,
        30: 0.334821,
        31: 0.330845,
        32: 0.341518,
        33: 0.336077,
        34: 0.346261,
        35: 0.339355,
        36: 0.349051,
        37: 0.340681,
        38: 0.331334,
        39: 0.340053,
        40: 0.329241,
        41: 0.337472,
        42: 0.325195,
        43: 0.332938,
        44: 0.319196,
        45: 0.304478,
        46: 0.311244,
        47: 0.295061,
        48: 0.301339,
        49: 0.283691,
        50: 0.289481,
        51: 0.270368,
        52: 0.250279,
        53: 0.255092,
        54: 0.233538,
        55: 0.237863,
        56: 0.214844,
        57: 0.218680,
        58: 0.194196,
        59: 0.168736,
        60: 0.171596,
        61: 0.144671,
        62: 0.147042,
        63: 0.118652,
        64: 0.120536,
        65: 0.090681,
        66: 0.092076,
        67: 0.060756,
        68: 0.061663,
        69: 0.062570,
        70: 0.029297,
        71: 0.029715,
        72: 0.030134,
        73: -0.005092,
        74: -0.005162,
        75: -0.041853,
        76: -0.042411,
        77: -0.042969,
        78: -0.081613,
        79: -0.082659,
        80: -0.083705,
        81: -0.084752
    };
    var spacing = characterSpacings[fontSize];
    if (spacing != nil) {
        layer.characterSpacing = spacing;
    }
};

var validateLineHeight = function(layer) {
    var fontSize = layer.fontSize();
    var lineHeights = {
        6: 7.5,
        7: 9.5,
        8: 10.5,
        9: 11.5,
        10: 12,
        11: 13.5,
        12: 14.5,
        13: 16,
        14: 17,
        15: 18,
        16: 19.5,
        17: 20.5,
        18: 21.5,
        19: 23.5,
        20: 24,
        21: 25.5,
        22: 26.5,
        23: 28.5,
        24: 29.5,
        25: 30,
        26: 31.5,
        27: 34,
        28: 34.5,
        29: 35.5,
        30: 36,
        31: 37,
        32: 38.5
    };
    var height = lineHeights[fontSize];
    if (height != nil) {
        layer.setLineSpacing(height);
    }
};

var onRun = function(context) {
    var selectedLayers = context.selection;
    var loop = selectedLayers.objectEnumerator();
    while (layer = loop.nextObject()) {
        if (layer.isKindOfClass(MSTextLayer)) {
            var fontName = layer.fontPostscriptName();
            if (fontName.hasPrefix("SFPro") || fontName.hasPrefix("SFUI")) {
                validateFontName(layer);
                validateFontSpacing(layer);
                validateLineHeight(layer);
            }
        }
    }
};
