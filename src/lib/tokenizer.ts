import { REGEX_TOKEN_VOCABULARY } from '@/constants/vocabulary';
import { RegexToken } from '@/types/token';

const sortVocabulary = (vocabulary: RegexToken[]): RegexToken[] => {
  return vocabulary.sort((a, b) => b.token.length - a.token.length);
};

const SORTED_VOCABULARY = sortVocabulary([...REGEX_TOKEN_VOCABULARY]);

export const tokenizeRegex = (regex: string): RegexToken[] => {
  if (!regex || regex.length === 0) {
    return [];
  }

  const tokens: RegexToken[] = [];
  let position = 0;

  while (position < regex.length) {
    let matched = false;

    for (const vocabularyToken of SORTED_VOCABULARY) {
      const tokenLength = vocabularyToken.token.length;

      if (position + tokenLength <= regex.length) {
        const substring = regex.slice(position, position + tokenLength);

        if (substring === vocabularyToken.token) {
          tokens.push(vocabularyToken);
          position += tokenLength;
          matched = true;
          break;
        }
      }
    }

    if (!matched) {
      const singleChar = regex[position];

      tokens.push({
        token: singleChar,
        translation: `literal character: ${singleChar}`,
      });
      position += 1;
    }
  }

  return tokens;
};
