import clsx from 'clsx';

import { IconType, iconTypes } from '@/types/config';

type IconProps = {
  icon: string;
  iconType?: IconType;
  className?: string;
  color?: string;
  overrideColor?: boolean;
};

export default function Icon({ icon, iconType, className, color }: IconProps) {
  const type = isBrandsIcon(icon) ? 'brands' : iconType ?? 'regular';

  return (
    <svg
      className={className}
      style={{
        WebkitMaskImage: `url(https://mintlify.b-cdn.net/${type}/${icon}.svg)`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        backgroundColor: color,
      }}
    ></svg>
  );
}

export function ComponentIcon({ icon, iconType, className, color, overrideColor }: IconProps) {
  if (!iconType) {
    return null;
  }

  // Validate the types
  if (!iconTypes.includes(iconType)) {
    console.log(
      `Invalid iconType ${iconType} expected a string equal to one of: brands, duotone, light, regular, sharp-solid, solid, thin`
    );
    return null;
  }

  return (
    <Icon
      icon={icon}
      iconType={iconType}
      className={clsx(className, !color && !overrideColor && 'bg-slate-800 dark:bg-slate-100')}
      color={color}
    />
  );
}

// Currently used to support backwards compability with Font Awesome dynamic imports
// TODO: remove when everyone has been migrated
export function solid(icon: string) {
  return icon;
}

export function regular(icon: string) {
  return icon;
}

export function light(icon: string) {
  return icon;
}

export function thin(icon: string) {
  return icon;
}

export function duotone(icon: string) {
  return icon;
}

export function brands(icon: string) {
  return icon;
}

function isBrandsIcon(icon?: string): boolean {
  if (!icon) return false;

  const brands = [
    '500px',
    'accessible-icon',
    'accusoft',
    'acquisitions-incorporated',
    'adn',
    'adversal',
    'affiliatetheme',
    'airbnb',
    'algolia',
    'alipay',
    'amazon',
    'amazon-pay',
    'amilia',
    'android',
    'angellist',
    'angrycreative',
    'angular',
    'app-store',
    'app-store-ios',
    'apper',
    'apple',
    'apple-pay',
    'artstation',
    'asymmetrik',
    'atlassian',
    'audible',
    'autoprefixer',
    'avianex',
    'aviato',
    'aws',
    'bandcamp',
    'battle-net',
    'behance',
    'behance-square',
    'bimobject',
    'bitbucket',
    'bitcoin',
    'bity',
    'black-tie',
    'blackberry',
    'blogger',
    'blogger-b',
    'bluetooth',
    'bluetooth-b',
    'bootstrap',
    'btc',
    'buffer',
    'buromobelexperte',
    'buy-n-large',
    'buysellads',
    'canadian-maple-leaf',
    'cc-amazon-pay',
    'cc-amex',
    'cc-apple-pay',
    'cc-diners-club',
    'cc-discover',
    'cc-jcb',
    'cc-mastercard',
    'cc-paypal',
    'cc-stripe',
    'cc-visa',
    'centercode',
    'centos',
    'chrome',
    'chromecast',
    'cloudflare',
    'cloudscale',
    'cloudsmith',
    'cloudversify',
    'codepen',
    'codiepie',
    'confluence',
    'connectdevelop',
    'contao',
    'cotton-bureau',
    'cpanel',
    'creative-commons',
    'creative-commons-by',
    'creative-commons-nc',
    'creative-commons-nc-eu',
    'creative-commons-nc-jp',
    'creative-commons-nd',
    'creative-commons-pd',
    'creative-commons-pd-alt',
    'creative-commons-remix',
    'creative-commons-sa',
    'creative-commons-sampling',
    'creative-commons-sampling	f4f1',
    'creative-commons-share',
    'creative-commons-zero',
    'critical-role',
    'css3',
    'css3-alt',
    'cuttlefish',
    'd-and-d',
    'd-and-d-beyond',
    'dailymotion',
    'dashcube',
    'deezer',
    'delicious',
    'deploydog',
    'deskpro',
    'dev',
    'deviantart',
    'dhl',
    'diaspora',
    'digg',
    'digital-ocean',
    'discord',
    'discourse',
    'dochub',
    'docker',
    'draft2digital',
    'dribbble',
    'dribbble-square',
    'dropbox',
    'drupal',
    'dyalog',
    'earlybirds',
    'ebay',
    'edge',
    'edge-legacy',
    'elementor',
    'ello',
    'ember',
    'empire',
    'envira',
    'erlang',
    'ethereum',
    'etsy',
    'evernote',
    'expeditedssl',
    'facebook',
    'facebook-f',
    'facebook-messenger',
    'facebook-square',
    'fantasy-flight-games',
    'fedex',
    'fedora',
    'figma',
    'firefox',
    'firefox-browser',
    'first-order',
    'first-order-alt',
    'firstdraft',
    'flickr',
    'flipboard',
    'fly',
    'font-awesome',
    'font-awesome-alt',
    'font-awesome-flag',
    'fonticons',
    'fonticons-fi',
    'fort-awesome',
    'fort-awesome-alt',
    'forumbee',
    'foursquare',
    'free-code-camp',
    'freebsd',
    'fulcrum',
    'galactic-republic',
    'galactic-senate',
    'get-pocket',
    'gg',
    'gg-circle',
    'git',
    'git-alt',
    'git-square',
    'github',
    'github-alt',
    'github-square',
    'gitkraken',
    'gitlab',
    'gitter',
    'glide',
    'glide-g',
    'gofore',
    'goodreads',
    'goodreads-g',
    'google',
    'google-drive',
    'google-pay',
    'google-play',
    'google-plus',
    'google-plus-g',
    'google-plus-square',
    'google-wallet',
    'golang',
    'gratipay',
    'grav',
    'gripfire',
    'grunt',
    'guilded',
    'gulp',
    'hacker-news',
    'hacker-news-square',
    'hackerrank',
    'hips',
    'hire-a-helper',
    'hive',
    'hooli',
    'hornbill',
    'hotjar',
    'houzz',
    'html5',
    'hubspot',
    'ideal',
    'imdb',
    'innosoft',
    'instagram',
    'instagram-square',
    'instalod',
    'intercom',
    'internet-explorer',
    'invision',
    'ioxhost',
    'itch-io',
    'itunes',
    'itunes-note',
    'java',
    'jedi-order',
    'jenkins',
    'jira',
    'joget',
    'joomla',
    'js',
    'js-square',
    'jsfiddle',
    'kaggle',
    'keybase',
    'keycdn',
    'kickstarter',
    'kickstarter-k',
    'korvue',
    'laravel',
    'lastfm',
    'lastfm-square',
    'leanpub',
    'less',
    'line',
    'linkedin',
    'linkedin-in',
    'linode',
    'linux',
    'lyft',
    'magento',
    'mailchimp',
    'mandalorian',
    'markdown',
    'mastodon',
    'maxcdn',
    'mdb',
    'medapps',
    'medium',
    'medium-m',
    'medrt',
    'meetup',
    'megaport',
    'mendeley',
    'microblog',
    'microsoft',
    'mix',
    'mixcloud',
    'mixer',
    'mizuni',
    'modx',
    'monero',
    'napster',
    'neos',
    'nimblr',
    'node',
    'node-js',
    'npm',
    'ns8',
    'nutritionix',
    'octopus-deploy',
    'odnoklassniki',
    'odnoklassniki-square',
    'old-republic',
    'opencart',
    'openid',
    'opera',
    'optin-monster',
    'orcid',
    'osi',
    'page4',
    'pagelines',
    'palfed',
    'patreon',
    'paypal',
    'penny-arcade',
    'perbyte',
    'periscope',
    'phabricator',
    'phoenix-framework',
    'phoenix-squadron',
    'php',
    'pied-piper',
    'pied-piper-alt',
    'pied-piper-hat',
    'pied-piper-pp',
    'pied-piper-square',
    'pinterest',
    'pinterest-p',
    'pinterest-square',
    'playstation',
    'product-hunt',
    'pushed',
    'python',
    'qq',
    'quinscape',
    'quora',
    'r-project',
    'raspberry-pi',
    'ravelry',
    'react',
    'reacteurope',
    'readme',
    'rebel',
    'red-river',
    'reddit',
    'reddit-alien',
    'reddit-square',
    'redhat',
    'renren',
    'replyd',
    'researchgate',
    'resolving',
    'rev',
    'rocketchat',
    'rockrms',
    'rust',
    'safari',
    'salesforce',
    'sass',
    'schlix',
    'scribd',
    'searchengin',
    'sellcast',
    'sellsy',
    'servicestack',
    'shirtsinbulk',
    'shopify',
    'shopware',
    'simplybuilt',
    'sistrix',
    'sith',
    'sketch',
    'skyatlas',
    'skype',
    'slack',
    'slack-hash',
    'slideshare',
    'snapchat',
    'snapchat-ghost',
    'snapchat-square',
    'soundcloud',
    'sourcetree',
    'speakap',
    'speaker-deck',
    'spotify',
    'squarespace',
    'stack-exchange',
    'stack-overflow',
    'stackpath',
    'staylinked',
    'steam',
    'steam-square',
    'steam-symbol',
    'sticker-mule',
    'strava',
    'stripe',
    'stripe-s',
    'studiovinari',
    'stumbleupon',
    'stumbleupon-circle',
    'superpowers',
    'supple',
    'suse',
    'swift',
    'symfony',
    'teamspeak',
    'telegram',
    'telegram-plane',
    'tencent-weibo',
    'the-red-yeti',
    'themeco',
    'themeisle',
    'think-peaks',
    'tiktok',
    'trade-federation',
    'trello',
    'tumblr',
    'tumblr-square',
    'twitch',
    'twitter',
    'twitter-square',
    'typo3',
    'uber',
    'ubuntu',
    'uikit',
    'umbraco',
    'uncharted',
    'uniregistry',
    'unity',
    'unsplash',
    'untappd',
    'ups',
    'usb',
    'usps',
    'ussunnah',
    'vaadin',
    'viacoin',
    'viadeo',
    'viadeo-square',
    'viber',
    'vimeo',
    'vimeo-square',
    'vimeo-v',
    'vine',
    'vk',
    'vnv',
    'vuejs',
    'watchman-monitoring',
    'waze',
    'weebly',
    'weibo',
    'weixin',
    'whatsapp',
    'whatsapp-square',
    'whmcs',
    'wikipedia-w',
    'windows',
    'wix',
    'wizards-of-the-coast',
    'wodu',
    'wolf-pack-battalion',
    'wordpress',
    'wordpress-simple',
    'wpbeginner',
    'wpexplorer',
    'wpforms',
    'wpressr',
    'xbox',
    'xing',
    'xing-square',
    'yahoo',
    'y-combinator',
    'yandex',
    'yammer',
    'yarn',
    'yandex-international',
    'yoast',
    'yelp',
    'youtube',
    'youtube-square',
    'zhihu',
  ];
  return brands.includes(icon.toLowerCase());
}
