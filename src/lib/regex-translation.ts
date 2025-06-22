export interface RegexTranslation {
  pattern: string;
  explanation: string;
}

const REGEX_TRANSLATIONS: RegexTranslation[] = [
  // Character classes
  { pattern: '\\d', explanation: 'any digit (0-9)' },
  { pattern: '\\D', explanation: 'any non-digit' },
  { pattern: '\\w', explanation: 'any word character (letter, digit, or underscore)' },
  { pattern: '\\W', explanation: 'any non-word character' },
  { pattern: '\\s', explanation: 'any whitespace character' },
  { pattern: '\\S', explanation: 'any non-whitespace character' },
  { pattern: '.', explanation: 'any character' },

  // Quantifiers
  { pattern: '+', explanation: ' one or more times' },
  { pattern: '*', explanation: ' zero or more times' },
  { pattern: '?', explanation: ' zero or one time (optional)' },
  { pattern: '{1}', explanation: ' exactly once' },
  { pattern: '{2}', explanation: ' exactly 2 times' },
  { pattern: '{3}', explanation: ' exactly 3 times' },
  { pattern: '{1,}', explanation: ' one or more times' },
  { pattern: '{2,}', explanation: ' two or more times' },
  { pattern: '{1,3}', explanation: ' 1 to 3 times' },
  { pattern: '{2,4}', explanation: ' 2 to 4 times' },

  // Character sets
  { pattern: '[a-z]', explanation: 'any lowercase letter' },
  { pattern: '[A-Z]', explanation: 'any uppercase letter' },
  { pattern: '[0-9]', explanation: 'any digit' },
  { pattern: '[a-zA-Z]', explanation: 'any letter' },
  { pattern: '[a-zA-Z0-9]', explanation: 'any letter or digit' },

  // Special characters
  { pattern: '\\n', explanation: 'newline character' },
  { pattern: '\\t', explanation: 'tab character' },
  { pattern: '\\r', explanation: 'carriage return' },
  { pattern: '\\.', explanation: 'literal dot' },
  { pattern: '\\(', explanation: 'literal opening parenthesis' },
  { pattern: '\\)', explanation: 'literal closing parenthesis' },
  { pattern: '\\[', explanation: 'literal opening bracket' },
  { pattern: '\\]', explanation: 'literal closing bracket' },
  { pattern: '\\{', explanation: 'literal opening brace' },
  { pattern: '\\}', explanation: 'literal closing brace' },
  { pattern: '\\|', explanation: 'literal pipe' },
  { pattern: '\\+', explanation: 'literal plus sign' },
  { pattern: '\\*', explanation: 'literal asterisk' },
  { pattern: '\\?', explanation: 'literal question mark' },
  { pattern: '\\^', explanation: 'literal caret' },
  { pattern: '\\$', explanation: 'literal dollar sign' },
];

export const translateRegex = (regexString: string): string => {
  const pattern = removeRegexDelimiters(regexString);
  const { explanation: baseExplanation, pattern: cleanPattern } = parseRegexAnchors(pattern);

  const explanation = baseExplanation || 'Match ';

  if (isLiteralString(cleanPattern)) {
    return `${explanation}the literal text "${cleanPattern}"`;
  }

  let translatedPattern = applyBasicTranslations(cleanPattern);

  translatedPattern = handleCharacterSets(translatedPattern);
  translatedPattern = handleNegatedCharacterSets(translatedPattern);

  const alternationResult = handleAlternation(translatedPattern, explanation);

  if (alternationResult) {
    return alternationResult;
  }

  translatedPattern = handleGroups(translatedPattern);
  translatedPattern = cleanupExplanation(translatedPattern);

  return `${explanation}${translatedPattern}`;
};

const removeRegexDelimiters = (regexString: string): string => {
  return regexString.replace(/^\/|\/[gimuy]*$/g, '');
};

const parseRegexAnchors = (pattern: string): RegexTranslation => {
  if (pattern.startsWith('^') && pattern.endsWith('$')) {
    return {
      explanation: 'Match exactly ',
      pattern: pattern.slice(1, -1),
    };
  } else if (pattern.startsWith('^')) {
    return {
      explanation: 'Match at the beginning ',
      pattern: pattern.slice(1),
    };
  } else if (pattern.endsWith('$')) {
    return {
      explanation: 'Match at the end ',
      pattern: pattern.slice(0, -1),
    };
  }

  return {
    explanation: '',
    pattern,
  };
};

const isLiteralString = (pattern: string): boolean => {
  return !/[\\.*+?^${}()|[\]]/.test(pattern);
};

const applyBasicTranslations = (pattern: string): string => {
  let translatedPattern = pattern;

  for (const { pattern: regexPattern, explanation } of REGEX_TRANSLATIONS) {
    const escapedPattern = regexPattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedPattern, 'g');

    translatedPattern = translatedPattern.replace(regex, explanation);
  }

  return translatedPattern;
};

const handleCharacterSets = (pattern: string): string => {
  return pattern.replace(/\[([^\]]+)\]/g, (match, chars) => {
    if (chars.includes('-')) {
      return `any character in the range [${chars}]`;
    }

    return `any of these characters: ${chars.split('').join(', ')}`;
  });
};

const handleNegatedCharacterSets = (pattern: string): string => {
  return pattern.replace(/\[\^([^\]]+)\]/g, (match, chars) => {
    return `any character except: ${chars.split('').join(', ')}`;
  });
};

const handleAlternation = (pattern: string, explanation: string): string | null => {
  if (!pattern.includes('|')) {
    return null;
  }

  const parts = pattern.split('|');

  if (parts.length === 2) {
    return `${explanation}either "${parts[0].trim()}" or "${parts[1].trim()}"`;
  } else {
    return `${explanation}any of: ${parts.map((part) => `"${part.trim()}"`).join(', ')}`;
  }
};

const handleGroups = (pattern: string): string => {
  return pattern.replace(/\(([^)]+)\)/g, (match, group) => {
    return `group containing: ${group}`;
  });
};

const cleanupExplanation = (explanation: string): string => {
  return explanation.replace(/\s+/g, ' ').trim();
};
