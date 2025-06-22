import { RegexToken } from '@/types/token';

export const REGEX_TOKEN_VOCABULARY: RegexToken[] = [
  // Phone number patterns
  { token: '\\d{3}-\\d{3}-\\d{4}', translation: 'a US phone number like 123-456-7890' },
  { token: '\\(\\d{3}\\)\\s?\\d{3}-\\d{4}', translation: 'a US phone number like (123) 456-7890' },
  {
    token: '^\\+1[\\s.-]?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$',
    translation: 'a US phone number with country code like +1 (123) 456-7890',
  },
  {
    token: '^\\d{3}[\\s.-]?\\d{3}[\\s.-]?\\d{4}$',
    translation: 'a US phone number with flexible separators like 123.456.7890',
  },
  {
    token: '^\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$',
    translation: 'a US phone number with optional parentheses like (123) 456-7890',
  },
  {
    token: '^1[\\s.-]?\\d{3}[\\s.-]?\\d{3}[\\s.-]?\\d{4}$',
    translation: 'a US phone number with leading 1 like 1-123-456-7890',
  },

  // International phone patterns
  {
    token: '^\\+\\d{1,3}[\\s.-]?\\d{4,14}$',
    translation: 'an international phone number with country code like +44 1234567890',
  },
  {
    token: '^\\+\\d{1,3}[\\s.-]?\\(?\\d{1,4}\\)?[\\s.-]?\\d{1,4}[\\s.-]?\\d{1,9}$',
    translation: 'a flexible international phone number format',
  },

  // UK phone numbers
  {
    token: '^\\+44[\\s.-]?\\d{2}[\\s.-]?\\d{4}[\\s.-]?\\d{4}$',
    translation: 'a UK phone number like +44 20 1234 5678',
  },
  { token: '^0\\d{2}[\\s.-]?\\d{4}[\\s.-]?\\d{4}$', translation: 'a UK domestic phone number like 020 1234 5678' },
  { token: '^\\+44[\\s.-]?7\\d{3}[\\s.-]?\\d{6}$', translation: 'a UK mobile number like +44 7123 456789' },
  { token: '^07\\d{3}[\\s.-]?\\d{6}$', translation: 'a UK domestic mobile number like 07123 456789' },

  // German phone numbers
  { token: '^\\+49[\\s.-]?\\d{2,5}[\\s.-]?\\d{5,12}$', translation: 'a German phone number like +49 30 12345678' },
  { token: '^0\\d{2,5}[\\s.-]?\\d{5,12}$', translation: 'a German domestic phone number like 030 12345678' },
  { token: '^\\+49[\\s.-]?1[5-7]\\d[\\s.-]?\\d{7,8}$', translation: 'a German mobile number like +49 151 12345678' },

  // French phone numbers
  {
    token: '^\\+33[\\s.-]?[1-9][\\s.-]?\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}$',
    translation: 'a French phone number like +33 1 23 45 67 89',
  },
  {
    token: '^0[1-9][\\s.-]?\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}$',
    translation: 'a French domestic phone number like 01 23 45 67 89',
  },
  {
    token: '^\\+33[\\s.-]?[67][\\s.-]?\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}$',
    translation: 'a French mobile number like +33 6 12 34 56 78',
  },

  // Italian phone numbers
  { token: '^\\+39[\\s.-]?\\d{2,4}[\\s.-]?\\d{4,8}$', translation: 'an Italian phone number like +39 06 12345678' },
  { token: '^\\+39[\\s.-]?3\\d{2}[\\s.-]?\\d{6,7}$', translation: 'an Italian mobile number like +39 333 1234567' },

  // Spanish phone numbers
  {
    token: '^\\+34[\\s.-]?[6-9]\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}$',
    translation: 'a Spanish phone number like +34 612 34 56 78',
  },
  {
    token: '^[6-9]\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}[\\s.-]?\\d{2}$',
    translation: 'a Spanish domestic phone number like 612 34 56 78',
  },

  // Canadian phone numbers
  {
    token: '^\\+1[\\s.-]?\\d{3}[\\s.-]?\\d{3}[\\s.-]?\\d{4}$',
    translation: 'a Canadian phone number like +1 416 123 4567',
  },
  {
    token: '^\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$',
    translation: 'a Canadian domestic phone number like (416) 123-4567',
  },

  // Australian phone numbers
  {
    token: '^\\+61[\\s.-]?[2-478][\\s.-]?\\d{4}[\\s.-]?\\d{4}$',
    translation: 'an Australian landline like +61 2 1234 5678',
  },
  {
    token: '^\\+61[\\s.-]?4\\d{2}[\\s.-]?\\d{3}[\\s.-]?\\d{3}$',
    translation: 'an Australian mobile number like +61 412 345 678',
  },
  { token: '^0[2-478][\\s.-]?\\d{4}[\\s.-]?\\d{4}$', translation: 'an Australian domestic landline like 02 1234 5678' },
  { token: '^04\\d{2}[\\s.-]?\\d{3}[\\s.-]?\\d{3}$', translation: 'an Australian domestic mobile like 0412 345 678' },

  // Japanese phone numbers
  {
    token: '^\\+81[\\s.-]?\\d{1,4}[\\s.-]?\\d{1,4}[\\s.-]?\\d{4}$',
    translation: 'a Japanese phone number like +81 3 1234 5678',
  },
  {
    token: '^0\\d{1,4}[\\s.-]?\\d{1,4}[\\s.-]?\\d{4}$',
    translation: 'a Japanese domestic phone number like 03-1234-5678',
  },
  {
    token: '^\\+81[\\s.-]?[789]0[\\s.-]?\\d{4}[\\s.-]?\\d{4}$',
    translation: 'a Japanese mobile number like +81 90 1234 5678',
  },

  // Chinese phone numbers
  {
    token: '^\\+86[\\s.-]?1[3-9]\\d[\\s.-]?\\d{4}[\\s.-]?\\d{4}$',
    translation: 'a Chinese mobile number like +86 138 1234 5678',
  },
  { token: '^1[3-9]\\d[\\s.-]?\\d{4}[\\s.-]?\\d{4}$', translation: 'a Chinese domestic mobile like 138 1234 5678' },
  { token: '^\\+86[\\s.-]?\\d{2,4}[\\s.-]?\\d{7,8}$', translation: 'a Chinese landline like +86 10 12345678' },

  // Indian phone numbers
  { token: '^\\+91[\\s.-]?[6-9]\\d{9}$', translation: 'an Indian mobile number like +91 9876543210' },
  { token: '^[6-9]\\d{9}$', translation: 'an Indian domestic mobile like 9876543210' },
  { token: '^\\+91[\\s.-]?\\d{2,4}[\\s.-]?\\d{6,8}$', translation: 'an Indian landline like +91 11 12345678' },

  // Brazilian phone numbers
  {
    token: '^\\+55[\\s.-]?\\d{2}[\\s.-]?[9]?\\d{4}[\\s.-]?\\d{4}$',
    translation: 'a Brazilian phone number like +55 11 91234-5678',
  },
  {
    token: '^\\(\\d{2}\\)[\\s.-]?[9]?\\d{4}[\\s.-]?\\d{4}$',
    translation: 'a Brazilian domestic phone like (11) 91234-5678',
  },

  // Mexican phone numbers
  {
    token: '^\\+52[\\s.-]?1?[\\s.-]?\\d{3}[\\s.-]?\\d{3}[\\s.-]?\\d{4}$',
    translation: 'a Mexican phone number like +52 1 123 456 7890',
  },
  { token: '^\\d{3}[\\s.-]?\\d{3}[\\s.-]?\\d{4}$', translation: 'a Mexican domestic phone like 123 456 7890' },

  // Russian phone numbers
  {
    token: '^\\+7[\\s.-]?\\d{3}[\\s.-]?\\d{3}[\\s.-]?\\d{2}[\\s.-]?\\d{2}$',
    translation: 'a Russian phone number like +7 123 456 78 90',
  },
  {
    token: '^8[\\s.-]?\\d{3}[\\s.-]?\\d{3}[\\s.-]?\\d{2}[\\s.-]?\\d{2}$',
    translation: 'a Russian domestic phone like 8 123 456 78 90',
  },

  // South Korean phone numbers
  {
    token: '^\\+82[\\s.-]?\\d{1,2}[\\s.-]?\\d{3,4}[\\s.-]?\\d{4}$',
    translation: 'a South Korean phone number like +82 2 1234 5678',
  },
  {
    token: '^0\\d{1,2}[\\s.-]?\\d{3,4}[\\s.-]?\\d{4}$',
    translation: 'a South Korean domestic phone like 02-1234-5678',
  },
  {
    token: '^\\+82[\\s.-]?10[\\s.-]?\\d{4}[\\s.-]?\\d{4}$',
    translation: 'a South Korean mobile number like +82 10 1234 5678',
  },

  // General patterns
  { token: '^\\d{10}$', translation: 'a 10-digit phone number like 1234567890' },
  { token: '^\\d{11}$', translation: 'an 11-digit phone number like 12345678901' },
  { token: '^[\\d\\s\\(\\)\\+\\.-]{7,15}$', translation: 'any phone number format (7-15 digits with separators)' },
  {
    token: '^\\+[1-9]\\d{0,3}[\\s\\.-]?\\(?\\d{1,4}\\)?[\\s\\.-]?\\d{1,4}[\\s\\.-]?\\d{1,9}$',
    translation: 'any international phone number format',
  },

  // Email address patterns
  { token: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}', translation: 'a basic email address' },
  {
    token: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
    translation: 'a complete email address like user@example.com',
  },
  {
    token: '^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?\\.[a-zA-Z]{2,}$',
    translation: 'a strict email address (no leading/trailing dots or hyphens)',
  },
  {
    token: '^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,253}\\.[a-zA-Z]{2,}$',
    translation: 'an email address with length limits (RFC compliant)',
  },
  { token: '^[a-zA-Z0-9._%+-]+@gmail\\.com$', translation: 'a Gmail address like user@gmail.com' },
  { token: '^[a-zA-Z0-9._%+-]+@yahoo\\.com$', translation: 'a Yahoo email address like user@yahoo.com' },
  { token: '^[a-zA-Z0-9._%+-]+@outlook\\.com$', translation: 'an Outlook email address like user@outlook.com' },
  { token: '^[a-zA-Z0-9._%+-]+@hotmail\\.com$', translation: 'a Hotmail email address like user@hotmail.com' },
  {
    token: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(com|org|net|edu|gov|mil)$',
    translation: 'an email with common TLDs (.com, .org, .net, etc.)',
  },
  {
    token: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(co\\.uk|com\\.au|ca|de|fr|jp|cn)$',
    translation: 'an email with country-specific domains',
  },
  {
    token: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$',
    translation: 'an email address with 2-4 character TLD',
  },
  {
    token: '^[\\w._%+-]+@[\\w.-]+\\.[a-zA-Z]{2,}$',
    translation: 'a simple email pattern (allows underscores and word characters)',
  },
  {
    token: '^[a-zA-Z0-9]([a-zA-Z0-9._-])*[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9.-])*[a-zA-Z0-9]\\.[a-zA-Z]{2,}$',
    translation: 'a professional email format (no leading/trailing special chars)',
  },
  {
    token: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]*localhost[a-zA-Z0-9.-]*$',
    translation: 'a localhost email address for testing',
  },
  {
    token: '^[a-zA-Z0-9._%+-]+@\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$',
    translation: 'an email with IP address domain like user@192.168.1.1',
  },
  {
    token: '^[a-zA-Z0-9._%+-]+@\\[[0-9a-fA-F:]+\\]$',
    translation: 'an email with IPv6 address domain like user@[2001:db8::1]',
  },
  {
    token: '^[a-zA-Z0-9._%+-]+\\+[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
    translation: 'an email with plus addressing like user+tag@example.com',
  },
  {
    token: '^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
    translation: 'an email allowing percent signs in local part',
  },
  {
    token: '^"[^"\\\\]*(?:\\\\.[^"\\\\]*)*"@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
    translation: 'a quoted email address like "user name"@example.com',
  },
  {
    token: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(xn--[a-zA-Z0-9]+|[a-zA-Z]{2,})$',
    translation: 'an email with internationalized domain (IDN)',
  },
  {
    token: '^[\\u00a1-\\uffff0-9a-zA-Z._%+-]+@[\\u00a1-\\uffff0-9a-zA-Z.-]+\\.[a-zA-Z]{2,}$',
    translation: 'an internationalized email address (Unicode characters)',
  },
  {
    token: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z]{2,}$',
    translation: 'an email with subdomain support like user@mail.example.com',
  },
  {
    token: '^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
    translation: 'an email starting with a letter (no numbers first)',
  },
  {
    token: '^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{3,}\\.[a-zA-Z]{2,}$',
    translation: 'an email with minimum 3 characters in local and domain parts',
  },
  {
    token: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.(com|org|net|edu|gov|info|biz|co)$',
    translation: 'a business email with common professional TLDs',
  },

  { token: 'https?://[^\\s]+', translation: 'a website link starting with http or https' },
  { token: 'www\\.[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}', translation: 'a website address starting with www' },

  // IP Address patterns
  { token: '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}', translation: 'an IPv4 address like 192.168.1.1' },
  {
    token: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
    translation: 'a valid IPv4 address (0.0.0.0 to 255.255.255.255)',
  },
  { token: '^192\\.168\\.\\d{1,3}\\.\\d{1,3}$', translation: 'a private IPv4 address (192.168.x.x)' },
  { token: '^10\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$', translation: 'a private IPv4 address (10.x.x.x)' },
  {
    token: '^172\\.(1[6-9]|2[0-9]|3[01])\\.\\d{1,3}\\.\\d{1,3}$',
    translation: 'a private IPv4 address (172.16.x.x to 172.31.x.x)',
  },
  { token: '^127\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$', translation: 'a localhost IPv4 address (127.x.x.x)' },
  { token: '^169\\.254\\.\\d{1,3}\\.\\d{1,3}$', translation: 'a link-local IPv4 address (169.254.x.x)' },
  { token: '^224\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$', translation: 'a multicast IPv4 address (224.x.x.x)' },
  { token: '^0\\.0\\.0\\.0$', translation: 'the default route IPv4 address (0.0.0.0)' },
  { token: '^255\\.255\\.255\\.255$', translation: 'the broadcast IPv4 address (255.255.255.255)' },

  // IPv6 patterns
  {
    token: '^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$',
    translation: 'a full IPv6 address like 2001:0db8:85a3:0000:0000:8a2e:0370:7334',
  },
  { token: '^([0-9a-fA-F]{1,4}:){1,7}:$', translation: 'an IPv6 address with trailing double colon' },
  { token: '^:([0-9a-fA-F]{1,4}:){1,7}$', translation: 'an IPv6 address with leading double colon' },
  { token: '^([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$', translation: 'an IPv6 address with one double colon' },
  { token: '^::1$', translation: 'the IPv6 localhost address (::1)' },
  { token: '^::$', translation: 'the IPv6 unspecified address (::)' },
  { token: '^fe80:', translation: 'an IPv6 link-local address (starts with fe80:)' },
  { token: '^fc00:', translation: 'an IPv6 unique local address (starts with fc00:)' },
  { token: '^fd00:', translation: 'an IPv6 unique local address (starts with fd00:)' },
  { token: '^2001:db8:', translation: 'an IPv6 documentation address (starts with 2001:db8:)' },
  { token: '^ff00:', translation: 'an IPv6 multicast address (starts with ff00:)' },
  {
    token:
      '^([0-9a-fA-F]{1,4}:){6}((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
    translation: 'an IPv6 address with embedded IPv4 (like ::ffff:192.168.1.1)',
  },
  { token: '^([0-9a-fA-F]{0,4}:){0,7}[0-9a-fA-F]{0,4}$', translation: 'any IPv6 address format (simplified pattern)' },

  // IP with port patterns
  {
    token: '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}:\\d{1,5}',
    translation: 'an IPv4 address with port like 192.168.1.1:8080',
  },
  {
    token: '\\[([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}\\]:\\d{1,5}',
    translation: 'an IPv6 address with port like [2001:db8::1]:8080',
  },

  { token: '^[a-zA-Z0-9]{6,}$', translation: 'letters and numbers only, at least 6 characters long' },
  { token: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)', translation: 'must contain lowercase, uppercase, and a number' },
  {
    token: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])',
    translation: 'must contain lowercase, uppercase, number, and special character',
  },
  { token: '\\b\\w+\\b', translation: 'a complete word' },

  // Color code patterns
  { token: '^#[0-9a-fA-F]{6}$', translation: 'a hex color code like #FF5733' },
  { token: '^#[0-9a-fA-F]{3}$', translation: 'a short hex color code like #F53' },
  { token: '^#[0-9a-fA-F]{8}$', translation: 'a hex color code with alpha like #FF5733AA' },
  { token: '^#[0-9a-fA-F]{4}$', translation: 'a short hex color code with alpha like #F53A' },
  {
    token:
      '^rgb\\(\\s*(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\s*,\\s*(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\s*,\\s*(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\s*\\)$',
    translation: 'an RGB color like rgb(255, 87, 51)',
  },
  {
    token:
      '^rgba\\(\\s*(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\s*,\\s*(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\s*,\\s*(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\s*,\\s*(?:0|1|0?\\.[0-9]+)\\s*\\)$',
    translation: 'an RGBA color like rgba(255, 87, 51, 0.8)',
  },
  {
    token: '^rgb\\(\\s*(?:100|[1-9]?[0-9])%\\s*,\\s*(?:100|[1-9]?[0-9])%\\s*,\\s*(?:100|[1-9]?[0-9])%\\s*\\)$',
    translation: 'an RGB color with percentages like rgb(80%, 34%, 20%)',
  },
  {
    token:
      '^rgba\\(\\s*(?:100|[1-9]?[0-9])%\\s*,\\s*(?:100|[1-9]?[0-9])%\\s*,\\s*(?:100|[1-9]?[0-9])%\\s*,\\s*(?:0|1|0?\\.[0-9]+)\\s*\\)$',
    translation: 'an RGBA color with percentages like rgba(80%, 34%, 20%, 0.8)',
  },
  {
    token:
      '^hsl\\(\\s*(?:360|3[0-5][0-9]|[12]?[0-9]?[0-9])\\s*,\\s*(?:100|[1-9]?[0-9])%\\s*,\\s*(?:100|[1-9]?[0-9])%\\s*\\)$',
    translation: 'an HSL color like hsl(14, 80%, 60%)',
  },
  {
    token:
      '^hsla\\(\\s*(?:360|3[0-5][0-9]|[12]?[0-9]?[0-9])\\s*,\\s*(?:100|[1-9]?[0-9])%\\s*,\\s*(?:100|[1-9]?[0-9])%\\s*,\\s*(?:0|1|0?\\.[0-9]+)\\s*\\)$',
    translation: 'an HSLA color like hsla(14, 80%, 60%, 0.8)',
  },
  {
    token:
      '^hwb\\(\\s*(?:360|3[0-5][0-9]|[12]?[0-9]?[0-9])\\s*,\\s*(?:100|[1-9]?[0-9])%\\s*,\\s*(?:100|[1-9]?[0-9])%\\s*\\)$',
    translation: 'an HWB color like hwb(14 25% 35%)',
  },
  {
    token:
      '^lab\\(\\s*(?:100|[1-9]?[0-9])%?\\s*,\\s*-?(?:125|1[01][0-9]|[1-9]?[0-9])\\s*,\\s*-?(?:125|1[01][0-9]|[1-9]?[0-9])\\s*\\)$',
    translation: 'a LAB color like lab(60% 25 -15)',
  },
  {
    token:
      '^lch\\(\\s*(?:100|[1-9]?[0-9])%?\\s*,\\s*(?:150|1[0-4][0-9]|[1-9]?[0-9])\\s*,\\s*(?:360|3[0-5][0-9]|[12]?[0-9]?[0-9])\\s*\\)$',
    translation: 'an LCH color like lch(60% 45 14)',
  },
  {
    token: '^oklab\\(\\s*(?:1|0|0?\\.[0-9]+)\\s*,\\s*-?(?:0?\\.[0-9]+|0)\\s*,\\s*-?(?:0?\\.[0-9]+|0)\\s*\\)$',
    translation: 'an OKLAB color like oklab(0.6 0.15 -0.1)',
  },
  {
    token:
      '^oklch\\(\\s*(?:1|0|0?\\.[0-9]+)\\s*,\\s*(?:0?\\.[0-9]+|0)\\s*,\\s*(?:360|3[0-5][0-9]|[12]?[0-9]?[0-9])\\s*\\)$',
    translation: 'an OKLCH color like oklch(0.6 0.2 14)',
  },
  {
    token: '^color\\(\\s*srgb\\s+(?:1|0|0?\\.[0-9]+)\\s+(?:1|0|0?\\.[0-9]+)\\s+(?:1|0|0?\\.[0-9]+)\\s*\\)$',
    translation: 'a color() function with sRGB like color(srgb 0.8 0.34 0.2)',
  },
  {
    token: '^color\\(\\s*display-p3\\s+(?:1|0|0?\\.[0-9]+)\\s+(?:1|0|0?\\.[0-9]+)\\s+(?:1|0|0?\\.[0-9]+)\\s*\\)$',
    translation: 'a color() function with Display P3 like color(display-p3 0.8 0.34 0.2)',
  },
  {
    token: '^color\\(\\s*rec2020\\s+(?:1|0|0?\\.[0-9]+)\\s+(?:1|0|0?\\.[0-9]+)\\s+(?:1|0|0?\\.[0-9]+)\\s*\\)$',
    translation: 'a color() function with Rec2020 like color(rec2020 0.8 0.34 0.2)',
  },
  {
    token:
      '^(?:red|green|blue|yellow|orange|purple|pink|brown|black|white|gray|grey|cyan|magenta|lime|maroon|navy|olive|teal|silver|aqua|fuchsia)$',
    translation: 'a CSS named color like red, blue, or green',
  },
  { token: '^transparent$', translation: 'the transparent color keyword' },
  { token: '^currentColor$', translation: 'the currentColor keyword (inherits text color)' },

  { token: '\\d{4}-\\d{2}-\\d{2}', translation: 'a date like 2023-12-25' },
  { token: '\\d{1,2}/\\d{1,2}/\\d{4}', translation: 'a date like 12/25/2023' },
  { token: '\\d{1,2}-\\d{1,2}-\\d{4}', translation: 'a date like 12-25-2023' },
  { token: '^\\s*$', translation: 'empty text or just spaces' },

  // License plate formats by country
  { token: '^[A-Z]{2,3}\\d{2,4}$', translation: 'a basic license plate format' },
  { token: '^[A-Z]{3}\\s?\\d{3}$', translation: 'a US license plate like ABC 123' },
  { token: '^\\d[A-Z]{3}\\s?\\d{3}$', translation: 'a US license plate like 1ABC 123' },
  { token: '^[A-Z]{2}\\s?\\d{2}\\s?[A-Z]{3}$', translation: 'a UK license plate like AB 12 CDE' },
  { token: '^[A-Z]{1,2}\\s?\\d{1,4}\\s?[A-Z]{1,3}$', translation: 'a German license plate like B AB 123' },
  { token: '^\\d{2,4}\\s?[A-Z]{2,3}\\s?\\d{2}$', translation: 'a French license plate like 123 AB 45' },
  { token: '^[A-Z]{2}\\s?\\d{3}\\s?[A-Z]{2}$', translation: 'an Italian license plate like AB 123 CD' },
  { token: '^[A-Z]\\s?\\d{3}\\s?[A-Z]{3}$', translation: 'a Spanish license plate like A 123 BCD' },
  { token: '^[A-Z]{3}\\s?\\d{2}\\s?\\d{2}$', translation: 'a Canadian license plate like ABC 12 34' },
  { token: '^\\d{3}\\s?[A-Z]{3}$', translation: 'an Australian license plate like 123 ABC' },
  { token: '^[A-Z]{2}\\s?\\d{2}\\s?\\d{2}$', translation: 'a Japanese license plate like AB 12 34' },
  { token: '^[A-Z]\\s?\\d{4}$', translation: 'a simple license plate like A 1234' },
  { token: '^\\d{3}\\s?[A-Z]{2}\\s?\\d{3}$', translation: 'a Brazilian license plate like 123 AB 456' },

  { token: '\\d{3}-\\d{2}-\\d{4}', translation: 'a Social Security Number like 123-45-6789' },
  { token: '\\d{5}(-\\d{4})?', translation: 'a ZIP code like 12345 or 12345-6789' },
  { token: '^[A-Z][0-9A-Z]{10}$', translation: 'a Vehicle ID Number (VIN)' },
  { token: '\\$\\d+(\\.\\d{2})?', translation: 'a dollar amount like $25 or $25.99' },
  { token: '\\b\\d{13,19}\\b', translation: 'a credit card number' },
  { token: '^[a-zA-Z\\s]+$', translation: 'letters and spaces only' },
  { token: '^\\d+$', translation: 'numbers only' },
  { token: '^[a-zA-Z0-9_]+$', translation: 'letters, numbers, and underscores only' },

  // Lookaheads and lookbehinds
  { token: '(?=pattern)', translation: "followed by (but don't include it)" },
  { token: '(?!pattern)', translation: 'NOT followed by' },
  { token: '(?<=pattern)', translation: "comes after (but don't include it)" },
  { token: '(?<!pattern)', translation: 'does NOT come after' },

  // Grouping
  { token: '(pattern)', translation: 'group and remember this part' },
  { token: '(?:pattern)', translation: "group this part (but don't remember it)" },
  { token: '(?<name>pattern)', translation: 'group and name this part' },
  { token: '(?>pattern)', translation: 'group this part (no backtracking)' },
  { token: '(?#comment)', translation: 'a comment (ignored when matching)' },

  // Conditional patterns
  { token: '(?(condition)yes|no)', translation: 'if condition is true, match "yes", otherwise match "no"' },
  { token: '(?(1)yes|no)', translation: 'if group 1 matched, use "yes", otherwise use "no"' },

  // Case modifiers
  { token: '(?i)', translation: 'ignore upper/lower case from here on' },
  { token: '(?-i)', translation: 'pay attention to upper/lower case from here on' },

  // Multiline modifiers
  { token: '(?m)', translation: 'treat each line separately' },
  { token: '(?s)', translation: 'let dot (.) match line breaks too' },
  { token: '(?x)', translation: 'ignore spaces and allow comments' },
  { token: '(?u)', translation: 'use Unicode rules' },

  // Flag combinations
  { token: '(?ims)', translation: 'ignore case, treat lines separately, and let dot match line breaks' },
  { token: '(?-ims)', translation: 'turn off case ignoring, multiline, and dot-matches-all modes' },

  // Character ranges and sets
  { token: '[a-z]', translation: 'any lowercase letter' },
  { token: '[A-Z]', translation: 'any uppercase letter' },
  { token: '[0-9]', translation: 'any number from 0 to 9' },
  { token: '[a-zA-Z]', translation: 'any letter (upper or lowercase)' },
  { token: '[a-zA-Z0-9]', translation: 'any letter or number' },
  { token: '[^\\d]', translation: 'anything except a number' },
  { token: '[^\\s]', translation: 'anything except a space' },
  { token: '[^a-z]', translation: 'anything except lowercase letters' },
  { token: '[abc]', translation: 'the letter a, b, or c' },
  { token: '[^abc]', translation: 'any character except a, b, or c' },

  // POSIX character classes
  { token: '[[:alnum:]]', translation: 'any letter or number' },
  { token: '[[:alpha:]]', translation: 'any letter' },
  { token: '[[:blank:]]', translation: 'a space or tab' },
  { token: '[[:digit:]]', translation: 'any number' },
  { token: '[[:lower:]]', translation: 'any lowercase letter' },
  { token: '[[:upper:]]', translation: 'any uppercase letter' },
  { token: '[[:punct:]]', translation: 'any punctuation mark' },
  { token: '[[:space:]]', translation: 'any whitespace (space, tab, etc.)' },
  { token: '[[:xdigit:]]', translation: 'any hexadecimal digit (0-9, A-F)' },

  // Unicode categories
  { token: '\\p{L}', translation: 'any letter in any language' },
  { token: '\\p{N}', translation: 'any number in any language' },
  { token: '\\p{P}', translation: 'any punctuation mark' },
  { token: '\\p{S}', translation: 'any symbol' },
  { token: '\\p{M}', translation: 'any accent or modifier mark' },
  { token: '\\p{Z}', translation: 'any kind of space or separator' },
  { token: '\\p{C}', translation: 'any control character' },
  { token: '\\P{L}', translation: 'anything except letters' },

  // Specific quantifiers
  { token: '{n}', translation: 'exactly n times' },
  { token: '{n,}', translation: 'n or more times' },
  { token: '{n,m}', translation: 'between n and m times' },
  { token: '{0,1}', translation: 'zero or one time (optional)' },
  { token: '{1,}', translation: 'one or more times' },
  { token: '{0,}', translation: 'zero or more times' },
  { token: '{2}', translation: 'exactly 2 times' },
  { token: '{3,}', translation: '3 or more times' },
  { token: '{2,5}', translation: 'between 2 and 5 times' },

  // Basic character classes
  { token: '\\d', translation: 'any number (0-9)' },
  { token: '\\D', translation: 'anything except a number' },
  { token: '\\w', translation: 'any letter, number, or underscore' },
  { token: '\\W', translation: 'anything except letters, numbers, or underscores' },
  { token: '\\s', translation: 'any whitespace (space, tab, etc.)' },
  { token: '\\S', translation: 'anything except whitespace' },
  { token: '.', translation: 'any character (except line break)' },

  // Basic quantifiers
  { token: '+', translation: 'one or more times' },
  { token: '*', translation: 'zero or more times' },
  { token: '?', translation: 'zero or one time (optional)' },

  // Lazy quantifiers
  { token: '+?', translation: 'one or more times (but as few as possible)' },
  { token: '*?', translation: 'zero or more times (but as few as possible)' },
  { token: '??', translation: 'zero or one time (prefer zero)' },
  { token: '{n,m}?', translation: 'between n and m times (but as few as possible)' },

  // Possessive quantifiers
  { token: '++', translation: "one or more times (don't give back matches)" },
  { token: '*+', translation: "zero or more times (don't give back matches)" },
  { token: '?+', translation: "zero or one time (don't give back matches)" },

  // Anchors
  { token: '^', translation: 'start of text or line' },
  { token: '$', translation: 'end of text or line' },
  { token: '\\A', translation: 'very beginning of text' },
  { token: '\\Z', translation: 'very end of text' },
  { token: '\\z', translation: 'absolute end of text' },
  { token: '\\G', translation: 'where the last match ended' },

  // Alternation
  { token: '|', translation: 'or' },

  // Special characters
  { token: '\\n', translation: 'a line break' },
  { token: '\\t', translation: 'a tab character' },
  { token: '\\r', translation: 'a carriage return' },
  { token: '\\f', translation: 'a form feed character' },
  { token: '\\v', translation: 'a vertical tab' },
  { token: '\\0', translation: 'a null character' },
  { token: '\\a', translation: 'a bell character' },
  { token: '\\e', translation: 'an escape character' },

  // Word boundaries
  { token: '\\b', translation: 'word boundary (start or end of a word)' },
  { token: '\\B', translation: 'not a word boundary' },

  // Backreferences
  { token: '\\1', translation: 'repeat what was matched in group 1' },
  { token: '\\2', translation: 'repeat what was matched in group 2' },
  { token: '\\k<name>', translation: 'repeat what was matched in the named group' },

  // Escaped literals
  { token: '\\.', translation: 'a literal dot (.)' },
  { token: '\\(', translation: 'a literal opening parenthesis (' },
  { token: '\\)', translation: 'a literal closing parenthesis )' },
  { token: '\\[', translation: 'a literal opening bracket [' },
  { token: '\\]', translation: 'a literal closing bracket ]' },
  { token: '\\{', translation: 'a literal opening brace {' },
  { token: '\\}', translation: 'a literal closing brace }' },
  { token: '\\|', translation: 'a literal pipe |' },
  { token: '\\+', translation: 'a literal plus sign +' },
  { token: '\\*', translation: 'a literal asterisk *' },
  { token: '\\?', translation: 'a literal question mark ?' },
  { token: '\\^', translation: 'a literal caret ^' },
  { token: '\\$', translation: 'a literal dollar sign $' },
  { token: '\\\\', translation: 'a literal backslash \\' },
  { token: '\\"', translation: 'a literal double quote "' },
  { token: "\\'", translation: "a literal single quote '" },
] as const;
