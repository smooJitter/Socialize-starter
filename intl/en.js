/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
  locales: [ 'en', 'en-US' ],
  sitename: 'Socialize-starter',
  'site.description': 'Socialize-starter is a base Meteor Mantra Application from which to start developing your social app.',
  'common.signin': 'Login',
  'common.signup': 'Register',
  'common.signout': 'Logout',
  'common.dashboard': 'Dashboard',
  'common.blog': 'Blog',
  'common.blogs': 'Blogs',
  'common.pm': 'Messages',
  'common.settings': 'Settings',
  'common.options': 'Options',
  'common.profile': 'Profile',
  'common.about': 'About us',
  'common.accessdenied': 'Access denied',
  'common.accessdenied.msg': 'You don\'t have access rights to this area.',
  'common.loading': 'Loading...',
  'common.add': 'Add',
  'common.save': 'Save',
  'common.email': 'E-mail',
  'common.soon': 'Coming soon...',
  'common.search': 'Search',
  'common.search.do': 'Search',
  'common.searchin': 'Searching...',
  'common.report': 'Report',
  'common.user': 'User',
  'common.users': 'Users',
  'common.showmore': 'Show more',
  'common.futurefeature': 'Future feature',
  'common.futurefeature.text': 'We are sorry, but this feature is not available at this time. We are working hard to make it available as soon as possible.',
  'common.nothingfound': 'Nothing found',
  'common.explore': 'Explore',
  'common.by': 'by ', // keep the space at the end as username follows
  'common.scratchpad': 'Scratchpad',
  'common.scratchpad.own': 'Your scratchpad',
  'common.news': 'News',
  'common.post': 'Post',
  'common.lang.select': 'Select language',
  'common.submit': 'Submit',
  'common.close': 'Close',
  'common.comment': 'Comment',
  'common.comments': 'Comments',
  404: 'Page not found',
  'search.users': 'Search for users',
  'common.help': 'Help',

  'settings.biography': 'Biography',
  'settings.biography.placeholder': 'A little bit about yourself to be shown on your profile.',
  'settings.avatar': 'Avatar',
  'settings.avatar.own': 'Your avatar',
  'settings.avatar.upload': 'Select image',
  'settings.email': 'E-mails',
  'settings.email.msg': 'E-mails associated with your account',
  'settings.email.verified.not': 'not verified',
  'settings.email.add': 'Add e-mail',
  'settings.languages': 'Language settings',
  'settings.languages.notice': 'Please note that English is currently the only oficially supported language. Other languages are available thanks to volunteers and might be incomplete.',
  'settings.languages.join': 'You can help with translation.',
  'settings.name': 'Real name',
  'settings.name.given': 'Given name',
  'settings.name.family': 'Family name',
  'settings.username': 'Change username',
  'settings.username.label': 'Username',
  'settings.patreon': 'Patreon', // name of a service, don't translate
  'settings.patreon.label': 'URL to your Patreon page',
  'settings.password': 'Change password',
  'settings.password.current': 'Current password',
  'settings.password.new': 'New password',
  'settings.password.new.repeat': 'Repeat your new password',
  'settings.password.nomatch': 'New password does not match!',
  'settings.password.badlength': 'Password must be at least {legth} characters long.',
  'common.account.create': 'Create an account',
  'signup.username': 'Username',
  'signup.email': 'Your e-mail',
  'signup.password': 'Your password',
  'signup.password.repeat': 'Repeat your password',
  'common.password': 'Password',
  'signin.password.forgot': 'Forgot password?',

  'password.reset': 'Reset your password',
  'email.verification': 'E-mail verification',
  'email.verifying': 'Veryfing your e-mail. This will take just a moment...',
  'email.verified': 'Your e-mail has been verified!',
  'dashboard.whatsnew': 'What is new',
  'dashboard.blog': 'Your blog',

  'common.legal.tos': 'Terms of Service',
  'common.legal.guidelines': 'Community Guidelines',
  'common.legal.privacy': 'Privacy Policy',
  'common.legal.copyright': 'Copyright Agreement',
  'common.legal.disclaimer': '© {year} All rights reserved, all texts belong to their respective authors.',

  'pm.conversation': 'Conversation',
  'pm.showolder': 'Show older messages.',
  'pm.errors.saysomething': 'You should really say something...',
  'pm.errors.addrecipient': 'You need to add at least one other user.',
  'pm.message': 'Message',
  'pm.send.message': 'Send message',
  'pm.messages.own': 'Your messages',
  'pm.conversations.none': 'You are currently not conversing with anyone.',
  'pm.to': 'To:',

  'user.friend.request': 'Add to friends',
  'user.friend.requests': `You have {num} new friend {num, plural,
    zero {requests}
    one {request}
    many {requests}
  }`,
  'user.friend.unfriend': 'Unfriend',
  'user.block': 'Block',
  'user.unblock': 'Unblock',
  'user.joined': `{gender, select,
    male {Joined}
    female {Joined}
    other {Joined}} on `, // keep the space at the end
  'user.friend.request.accept': 'Accept friendship request',
  'user.friend.request.deny': 'Deny friendship',
  'user.listing': 'User listing',
  'user.profile.visit': 'Visit {user}\'s profile.',
  'user.friend.requests.title': 'Friendships requests',
  'user.friend.norequests': 'You have no requests for friendship.',

  feed: 'Stream',
  'feed.post.new': 'New post',
  'feed.post.like': 'Like post',
  'feed.post.unlike': 'Unlike post',
  'feed.post.send': 'Post',
  'feed.empty': 'No entries in the feed.',

  'comment.write': 'Write your comment',
  'comments.none': 'Sorry, no comments to show.',
  'comments.total': `There {count, plural,
    =0 {are no comments}
    one {is 1 comment}
    other {are # comments}
  }.`,
  'comments.show.older': 'Show older comments',

  copyrights: 'Copyrights',

  // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
  // but don't forget to adjust
  'simpleschema.required': '{label} is required',
  'simpleschema.minString': '{label} must be at least {min} characters',
  'simpleschema.maxString': '{label} cannot exceed {max} characters',
  'simpleschema.minNumber': '{label} must be at least {min}',
  'simpleschema.maxNumber': '{label} cannot exceed {max}',
  'simpleschema.minNumberExclusive': '{label} must be greater than {min}',
  'simpleschema.maxNumberExclusive': '{label} must be less than {max}',
  'simpleschema.minDate': '{label} must be on or after {min}',
  'simpleschema.maxDate': '{label} cannot be after {max}',
  'simpleschema.badDate': '{label} is not a valid date',
  'simpleschema.minCount': 'You must specify at least {minCount} values',
  'simpleschema.maxCount': 'You cannot specify more than {maxCount} values',
  'simpleschema.noDecimal': '{label} must be an integer',
  'simpleschema.notAllowed': '{label} is not an allowed value',
  'simpleschema.expectedString': '{label} must be a string',
  'simpleschema.expectedNumber': '{label} must be a number',
  'simpleschema.expectedBoolean': '{label} must be a boolean',
  'simpleschema.expectedArray': '{label} must be an array',
  'simpleschema.expectedObject': '{label} must be an object',
  'simpleschema.expectedConstructor': '{label} must be a {type}',
  'simpleschema.keyNotInSchema': '{key} is not allowed by the schema',
  'simpleschema.notUnique': '{label} must be unique',
  'simpleschema.regEx.0': '{label} failed regular expression validation',
  'simpleschema.regEx.1': '{label} must be a valid e-mail address',
  'simpleschema.regEx.2': '{label} must be a valid e-mail address',
  'simpleschema.regEx.3': '{label} must be a valid domain',
  'simpleschema.regEx.4': '{label} must be a valid domain',
  'simpleschema.regEx.5': '{label} must be a valid IPv4 or IPv6 address',
  'simpleschema.regEx.6': '{label} must be a valid IPv4 address',
  'simpleschema.regEx.7': '{label} must be a valid IPv6 address',
  'simpleschema.regEx.8': '{label} must be a valid URL',
  'simpleschema.regEx.9': '{label} must be a valid alphanumeric ID',

  'common.feedback': 'Feedback',
  'feedback.home': 'Help center',
  'feedback.bugs': 'Issues',
  'feedback.bugs.desc': 'Did you encounter an error or something else that is wrong or out of place. Let us know here!',
  'feedback.features': 'Ideas & Proposals',
  'feedback.features.desc': 'Have ideas for new features or how to make the site better? Let us know!',
  'feedback.help': 'Help & Tutorials',
  'feedback.help.desc': 'How do you _____? Go here to find the answers.',
  'feedback.desc': 'Welcome to our help center!',
  'feedback.open': 'Open',
  'feedback.closed': 'Closed',
  'feedback.accepted': 'Accepted',
  'feedback.inprogress': 'In progress',
  'feedback.completed': 'Completed',
  'feedback.fixed': 'Fixed',
  'feedback.new.bugs': 'Report new issue',
  'feedback.new.features': 'Suggest a new feature',
  'feedback.lang.nosupport': 'Your current language is not supported for feedback, please write in English. Thank you!',
  'feedback.new.thanks': 'Thank you for the notice! We will look at it shorty.',
  'common.createdon': 'Created on ',
  admin: 'Admin',
  'pm.send': 'Send',
  goodbye: 'Thank you! See you again!',

  // languages names
  'af-NA': 'Afrikaans (Namibia)',
  'af-ZA': 'Afrikaans (South Africa)',
  af: 'Afrikaans',
  'ak-GH': 'Akan (Ghana)',
  ak: 'Akan',
  'sq-AL': 'Albanian (Albania)',
  sq: 'Albanian',
  'am-ET': 'Amharic (Ethiopia)',
  am: 'Amharic',
  'ar-DZ': 'Arabic (Algeria)',
  'ar-BH': 'Arabic (Bahrain)',
  'ar-EG': 'Arabic (Egypt)',
  'ar-IQ': 'Arabic (Iraq)',
  'ar-JO': 'Arabic (Jordan)',
  'ar-KW': 'Arabic (Kuwait)',
  'ar-LB': 'Arabic (Lebanon)',
  'ar-LY': 'Arabic (Libya)',
  'ar-MA': 'Arabic (Morocco)',
  'ar-OM': 'Arabic (Oman)',
  'ar-QA': 'Arabic (Qatar)',
  'ar-SA': 'Arabic (Saudi Arabia)',
  'ar-SD': 'Arabic (Sudan)',
  'ar-SY': 'Arabic (Syria)',
  'ar-TN': 'Arabic (Tunisia)',
  'ar-AE': 'Arabic (United Arab Emirates)',
  'ar-YE': 'Arabic (Yemen)',
  ar: 'Arabic',
  'hy-AM': 'Armenian (Armenia)',
  hy: 'Armenian',
  'as-IN': 'Assamese (India)',
  as: 'Assamese',
  'asa-TZ': 'Asu (Tanzania)',
  asa: 'Asu',
  'az-Cyrl': 'Azerbaijani (Cyrillic)',
  'az-Cyrl-AZ': 'Azerbaijani (Cyrillic, Azerbaijan)',
  'az-Latn': 'Azerbaijani (Latin)',
  'az-Latn-AZ': 'Azerbaijani (Latin, Azerbaijan)',
  az: 'Azerbaijani',
  'bm-ML': 'Bambara (Mali)',
  bm: 'Bambara',
  'eu-ES': 'Basque (Spain)',
  eu: 'Basque',
  'be-BY': 'Belarusian (Belarus)',
  be: 'Belarusian',
  'bem-ZM': 'Bemba (Zambia)',
  bem: 'Bemba',
  'bez-TZ': 'Bena (Tanzania)',
  bez: 'Bena',
  'bn-BD': 'Bengali (Bangladesh)',
  'bn-IN': 'Bengali (India)',
  bn: 'Bengali',
  'bs-BA': 'Bosnian (Bosnia and Herzegovina)',
  bs: 'Bosnian',
  'bg-BG': 'Bulgarian (Bulgaria)',
  bg: 'Bulgarian',
  'my-MM': 'Burmese (Myanmar [Burma])',
  my: 'Burmese',
  'ca-ES': 'Catalan (Spain)',
  ca: 'Catalan',
  'tzm-Latn': 'Central Morocco Tamazight (Latin)',
  'tzm-Latn-MA': 'Central Morocco Tamazight (Latin, Morocco)',
  tzm: 'Central Morocco Tamazight',
  'chr-US': 'Cherokee (United States)',
  chr: 'Cherokee',
  'cgg-UG': 'Chiga (Uganda)',
  cgg: 'Chiga',
  'zh-Hans': 'Chinese (Simplified Han)',
  'zh-Hans-CN': 'Chinese (Simplified Han, China)',
  'zh-Hans-HK': 'Chinese (Simplified Han, Hong Kong SAR China)',
  'zh-Hans-MO': 'Chinese (Simplified Han, Macau SAR China)',
  'zh-Hans-SG': 'Chinese (Simplified Han, Singapore)',
  'zh-Hant': 'Chinese (Traditional Han)',
  'zh-Hant-HK': 'Chinese (Traditional Han, Hong Kong SAR China)',
  'zh-Hant-MO': 'Chinese (Traditional Han, Macau SAR China)',
  'zh-Hant-TW': 'Chinese (Traditional Han, Taiwan)',
  zh: 'Chinese',
  'kw-GB': 'Cornish (United Kingdom)',
  kw: 'Cornish',
  'hr-HR': 'Croatian (Croatia)',
  hr: 'Croatian',
  'cs-CZ': 'Czech (Czech Republic)',
  cs: 'Czech',
  'da-DK': 'Danish (Denmark)',
  da: 'Danish',
  'nl-BE': 'Dutch (Belgium)',
  'nl-NL': 'Dutch (Netherlands)',
  nl: 'Dutch',
  'ebu-KE': 'Embu (Kenya)',
  ebu: 'Embu',
  'en-AS': 'English (American Samoa)',
  'en-AU': 'English (Australia)',
  'en-BE': 'English (Belgium)',
  'en-BZ': 'English (Belize)',
  'en-BW': 'English (Botswana)',
  'en-CA': 'English (Canada)',
  'en-GU': 'English (Guam)',
  'en-HK': 'English (Hong Kong SAR China)',
  'en-IN': 'English (India)',
  'en-IE': 'English (Ireland)',
  'en-JM': 'English (Jamaica)',
  'en-MT': 'English (Malta)',
  'en-MH': 'English (Marshall Islands)',
  'en-MU': 'English (Mauritius)',
  'en-NA': 'English (Namibia)',
  'en-NZ': 'English (New Zealand)',
  'en-MP': 'English (Northern Mariana Islands)',
  'en-PK': 'English (Pakistan)',
  'en-PH': 'English (Philippines)',
  'en-SG': 'English (Singapore)',
  'en-ZA': 'English (South Africa)',
  'en-TT': 'English (Trinidad and Tobago)',
  'en-UM': 'English (U.S. Minor Outlying Islands)',
  'en-VI': 'English (U.S. Virgin Islands)',
  'en-GB': 'English (United Kingdom)',
  'en-US': 'English (United States)',
  'en-ZW': 'English (Zimbabwe)',
  en: 'English',
  eo: 'Esperanto',
  'et-EE': 'Estonian (Estonia)',
  et: 'Estonian',
  'ee-GH': 'Ewe (Ghana)',
  'ee-TG': 'Ewe (Togo)',
  ee: 'Ewe',
  'fo-FO': 'Faroese (Faroe Islands)',
  fo: 'Faroese',
  'fil-PH': 'Filipino (Philippines)',
  fil: 'Filipino',
  'fi-FI': 'Finnish (Finland)',
  fi: 'Finnish',
  'fr-BE': 'French (Belgium)',
  'fr-BJ': 'French (Benin)',
  'fr-BF': 'French (Burkina Faso)',
  'fr-BI': 'French (Burundi)',
  'fr-CM': 'French (Cameroon)',
  'fr-CA': 'French (Canada)',
  'fr-CF': 'French (Central African Republic)',
  'fr-TD': 'French (Chad)',
  'fr-KM': 'French (Comoros)',
  'fr-CG': 'French (Congo - Brazzaville)',
  'fr-CD': 'French (Congo - Kinshasa)',
  'fr-CI': 'French (Côte d’Ivoire)',
  'fr-DJ': 'French (Djibouti)',
  'fr-GQ': 'French (Equatorial Guinea)',
  'fr-FR': 'French (France)',
  'fr-GA': 'French (Gabon)',
  'fr-GP': 'French (Guadeloupe)',
  'fr-GN': 'French (Guinea)',
  'fr-LU': 'French (Luxembourg)',
  'fr-MG': 'French (Madagascar)',
  'fr-ML': 'French (Mali)',
  'fr-MQ': 'French (Martinique)',
  'fr-MC': 'French (Monaco)',
  'fr-NE': 'French (Niger)',
  'fr-RW': 'French (Rwanda)',
  'fr-RE': 'French (Réunion)',
  'fr-BL': 'French (Saint Barthélemy)',
  'fr-MF': 'French (Saint Martin)',
  'fr-SN': 'French (Senegal)',
  'fr-CH': 'French (Switzerland)',
  'fr-TG': 'French (Togo)',
  fr: 'French',
  'ff-SN': 'Fulah (Senegal)',
  ff: 'Fulah',
  'gl-ES': 'Galician (Spain)',
  gl: 'Galician',
  'lg-UG': 'Ganda (Uganda)',
  lg: 'Ganda',
  'ka-GE': 'Georgian (Georgia)',
  ka: 'Georgian',
  'de-AT': 'German (Austria)',
  'de-BE': 'German (Belgium)',
  'de-DE': 'German (Germany)',
  'de-LI': 'German (Liechtenstein)',
  'de-LU': 'German (Luxembourg)',
  'de-CH': 'German (Switzerland)',
  de: 'German',
  'el-CY': 'Greek (Cyprus)',
  'el-GR': 'Greek (Greece)',
  el: 'Greek',
  'gu-IN': 'Gujarati (India)',
  gu: 'Gujarati',
  'guz-KE': 'Gusii (Kenya)',
  guz: 'Gusii',
  'ha-Latn': 'Hausa (Latin)',
  'ha-Latn-GH': 'Hausa (Latin, Ghana)',
  'ha-Latn-NE': 'Hausa (Latin, Niger)',
  'ha-Latn-NG': 'Hausa (Latin, Nigeria)',
  ha: 'Hausa',
  'haw-US': 'Hawaiian (United States)',
  haw: 'Hawaiian',
  'he-IL': 'Hebrew (Israel)',
  he: 'Hebrew',
  'hi-IN': 'Hindi (India)',
  hi: 'Hindi',
  'hu-HU': 'Hungarian (Hungary)',
  hu: 'Hungarian',
  'is-IS': 'Icelandic (Iceland)',
  is: 'Icelandic',
  'ig-NG': 'Igbo (Nigeria)',
  ig: 'Igbo',
  'id-ID': 'Indonesian (Indonesia)',
  id: 'Indonesian',
  'ga-IE': 'Irish (Ireland)',
  ga: 'Irish',
  'it-IT': 'Italian (Italy)',
  'it-CH': 'Italian (Switzerland)',
  it: 'Italian',
  'ja-JP': 'Japanese (Japan)',
  ja: 'Japanese',
  'kea-CV': 'Kabuverdianu (Cape Verde)',
  kea: 'Kabuverdianu',
  'kab-DZ': 'Kabyle (Algeria)',
  kab: 'Kabyle',
  'kl-GL': 'Kalaallisut (Greenland)',
  kl: 'Kalaallisut',
  'kln-KE': 'Kalenjin (Kenya)',
  kln: 'Kalenjin',
  'kam-KE': 'Kamba (Kenya)',
  kam: 'Kamba',
  'kn-IN': 'Kannada (India)',
  kn: 'Kannada',
  'kk-Cyrl': 'Kazakh (Cyrillic)',
  'kk-Cyrl-KZ': 'Kazakh (Cyrillic, Kazakhstan)',
  kk: 'Kazakh',
  'km-KH': 'Khmer (Cambodia)',
  km: 'Khmer',
  'ki-KE': 'Kikuyu (Kenya)',
  ki: 'Kikuyu',
  'rw-RW': 'Kinyarwanda (Rwanda)',
  rw: 'Kinyarwanda',
  'kok-IN': 'Konkani (India)',
  kok: 'Konkani',
  'ko-KR': 'Korean (South Korea)',
  ko: 'Korean',
  'khq-ML': 'Koyra Chiini (Mali)',
  khq: 'Koyra Chiini',
  'ses-ML': 'Koyraboro Senni (Mali)',
  ses: 'Koyraboro Senni',
  'lag-TZ': 'Langi (Tanzania)',
  lag: 'Langi',
  'lv-LV': 'Latvian (Latvia)',
  lv: 'Latvian',
  'lt-LT': 'Lithuanian (Lithuania)',
  lt: 'Lithuanian',
  'luo-KE': 'Luo (Kenya)',
  luo: 'Luo',
  'luy-KE': 'Luyia (Kenya)',
  luy: 'Luyia',
  'mk-MK': 'Macedonian (Macedonia)',
  mk: 'Macedonian',
  'jmc-TZ': 'Machame (Tanzania)',
  jmc: 'Machame',
  'kde-TZ': 'Makonde (Tanzania)',
  kde: 'Makonde',
  'mg-MG': 'Malagasy (Madagascar)',
  mg: 'Malagasy',
  'ms-BN': 'Malay (Brunei)',
  'ms-MY': 'Malay (Malaysia)',
  ms: 'Malay',
  'ml-IN': 'Malayalam (India)',
  ml: 'Malayalam',
  'mt-MT': 'Maltese (Malta)',
  mt: 'Maltese',
  'gv-GB': 'Manx (United Kingdom)',
  gv: 'Manx',
  'mr-IN': 'Marathi (India)',
  mr: 'Marathi',
  'mas-KE': 'Masai (Kenya)',
  'mas-TZ': 'Masai (Tanzania)',
  mas: 'Masai',
  'mer-KE': 'Meru (Kenya)',
  mer: 'Meru',
  'mfe-MU': 'Morisyen (Mauritius)',
  mfe: 'Morisyen',
  'naq-NA': 'Nama (Namibia)',
  naq: 'Nama',
  'ne-IN': 'Nepali (India)',
  'ne-NP': 'Nepali (Nepal)',
  ne: 'Nepali',
  'nd-ZW': 'North Ndebele (Zimbabwe)',
  nd: 'North Ndebele',
  'nb-NO': 'Norwegian Bokmål (Norway)',
  nb: 'Norwegian Bokmål',
  'nn-NO': 'Norwegian Nynorsk (Norway)',
  nn: 'Norwegian Nynorsk',
  'nyn-UG': 'Nyankole (Uganda)',
  nyn: 'Nyankole',
  'or-IN': 'Oriya (India)',
  or: 'Oriya',
  'om-ET': 'Oromo (Ethiopia)',
  'om-KE': 'Oromo (Kenya)',
  om: 'Oromo',
  'ps-AF': 'Pashto (Afghanistan)',
  ps: 'Pashto',
  'fa-AF': 'Persian (Afghanistan)',
  'fa-IR': 'Persian (Iran)',
  fa: 'Persian',
  'pl-PL': 'Polish (Poland)',
  pl: 'Polish',
  'pt-BR': 'Portuguese (Brazil)',
  'pt-GW': 'Portuguese (Guinea-Bissau)',
  'pt-MZ': 'Portuguese (Mozambique)',
  'pt-PT': 'Portuguese (Portugal)',
  pt: 'Portuguese',
  'pa-Arab': 'Punjabi (Arabic)',
  'pa-Arab-PK': 'Punjabi (Arabic, Pakistan)',
  'pa-Guru': 'Punjabi (Gurmukhi)',
  'pa-Guru-IN': 'Punjabi (Gurmukhi, India)',
  pa: 'Punjabi',
  'ro-MD': 'Romanian (Moldova)',
  'ro-RO': 'Romanian (Romania)',
  ro: 'Romanian',
  'rm-CH': 'Romansh (Switzerland)',
  rm: 'Romansh',
  'rof-TZ': 'Rombo (Tanzania)',
  rof: 'Rombo',
  'ru-MD': 'Russian (Moldova)',
  'ru-RU': 'Russian (Russia)',
  'ru-UA': 'Russian (Ukraine)',
  ru: 'Russian',
  'rwk-TZ': 'Rwa (Tanzania)',
  rwk: 'Rwa',
  'saq-KE': 'Samburu (Kenya)',
  saq: 'Samburu',
  'sg-CF': 'Sango (Central African Republic)',
  sg: 'Sango',
  'seh-MZ': 'Sena (Mozambique)',
  seh: 'Sena',
  'sr-Cyrl': 'Serbian (Cyrillic)',
  'sr-Cyrl-BA': 'Serbian (Cyrillic, Bosnia and Herzegovina)',
  'sr-Cyrl-ME': 'Serbian (Cyrillic, Montenegro)',
  'sr-Cyrl-RS': 'Serbian (Cyrillic, Serbia)',
  'sr-Latn': 'Serbian (Latin)',
  'sr-Latn-BA': 'Serbian (Latin, Bosnia and Herzegovina)',
  'sr-Latn-ME': 'Serbian (Latin, Montenegro)',
  'sr-Latn-RS': 'Serbian (Latin, Serbia)',
  sr: 'Serbian',
  'sn-ZW': 'Shona (Zimbabwe)',
  sn: 'Shona',
  'ii-CN': 'Sichuan Yi (China)',
  ii: 'Sichuan Yi',
  'si-LK': 'Sinhala (Sri Lanka)',
  si: 'Sinhala',
  'sk-SK': 'Slovak (Slovakia)',
  sk: 'Slovak',
  'sl-SI': 'Slovenian (Slovenia)',
  sl: 'Slovenian',
  'xog-UG': 'Soga (Uganda)',
  xog: 'Soga',
  'so-DJ': 'Somali (Djibouti)',
  'so-ET': 'Somali (Ethiopia)',
  'so-KE': 'Somali (Kenya)',
  'so-SO': 'Somali (Somalia)',
  so: 'Somali',
  'es-AR': 'Spanish (Argentina)',
  'es-BO': 'Spanish (Bolivia)',
  'es-CL': 'Spanish (Chile)',
  'es-CO': 'Spanish (Colombia)',
  'es-CR': 'Spanish (Costa Rica)',
  'es-DO': 'Spanish (Dominican Republic)',
  'es-EC': 'Spanish (Ecuador)',
  'es-SV': 'Spanish (El Salvador)',
  'es-GQ': 'Spanish (Equatorial Guinea)',
  'es-GT': 'Spanish (Guatemala)',
  'es-HN': 'Spanish (Honduras)',
  'es-419': 'Spanish (Latin America)',
  'es-MX': 'Spanish (Mexico)',
  'es-NI': 'Spanish (Nicaragua)',
  'es-PA': 'Spanish (Panama)',
  'es-PY': 'Spanish (Paraguay)',
  'es-PE': 'Spanish (Peru)',
  'es-PR': 'Spanish (Puerto Rico)',
  'es-ES': 'Spanish (Spain)',
  'es-US': 'Spanish (United States)',
  'es-UY': 'Spanish (Uruguay)',
  'es-VE': 'Spanish (Venezuela)',
  es: 'Spanish',
  'sw-KE': 'Swahili (Kenya)',
  'sw-TZ': 'Swahili (Tanzania)',
  sw: 'Swahili',
  'sv-FI': 'Swedish (Finland)',
  'sv-SE': 'Swedish (Sweden)',
  sv: 'Swedish',
  'gsw-CH': 'Swiss German (Switzerland)',
  gsw: 'Swiss German',
  'shi-Latn': 'Tachelhit (Latin)',
  'shi-Latn-MA': 'Tachelhit (Latin, Morocco)',
  'shi-Tfng': 'Tachelhit (Tifinagh)',
  'shi-Tfng-MA': 'Tachelhit (Tifinagh, Morocco)',
  shi: 'Tachelhit',
  'dav-KE': 'Taita (Kenya)',
  dav: 'Taita',
  'ta-IN': 'Tamil (India)',
  'ta-LK': 'Tamil (Sri Lanka)',
  ta: 'Tamil',
  'te-IN': 'Telugu (India)',
  te: 'Telugu',
  'teo-KE': 'Teso (Kenya)',
  'teo-UG': 'Teso (Uganda)',
  teo: 'Teso',
  'th-TH': 'Thai (Thailand)',
  th: 'Thai',
  'bo-CN': 'Tibetan (China)',
  'bo-IN': 'Tibetan (India)',
  bo: 'Tibetan',
  'ti-ER': 'Tigrinya (Eritrea)',
  'ti-ET': 'Tigrinya (Ethiopia)',
  ti: 'Tigrinya',
  'to-TO': 'Tonga (Tonga)',
  to: 'Tonga',
  'tr-TR': 'Turkish (Turkey)',
  tr: 'Turkish',
  'uk-UA': 'Ukrainian (Ukraine)',
  uk: 'Ukrainian',
  'ur-IN': 'Urdu (India)',
  'ur-PK': 'Urdu (Pakistan)',
  ur: 'Urdu',
  'uz-Arab': 'Uzbek (Arabic)',
  'uz-Arab-AF': 'Uzbek (Arabic, Afghanistan)',
  'uz-Cyrl': 'Uzbek (Cyrillic)',
  'uz-Cyrl-UZ': 'Uzbek (Cyrillic, Uzbekistan)',
  'uz-Latn': 'Uzbek (Latin)',
  'uz-Latn-UZ': 'Uzbek (Latin, Uzbekistan)',
  uz: 'Uzbek',
  'vi-VN': 'Vietnamese (Vietnam)',
  vi: 'Vietnamese',
  'vun-TZ': 'Vunjo (Tanzania)',
  vun: 'Vunjo',
  'cy-GB': 'Welsh (United Kingdom)',
  cy: 'Welsh',
  'yo-NG': 'Yoruba (Nigeria)',
  yo: 'Yoruba',
  'zu-ZA': 'Zulu (South Africa)',
  zu: 'Zulu'
};
/* eslint-enable max-len */
