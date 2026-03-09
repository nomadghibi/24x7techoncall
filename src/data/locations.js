// US cities served by 24/7 Tech On Call
// slug format: city-state (lowercase, hyphenated)

export const locations = [
  // Northeast
  { slug: 'new-york-ny',      city: 'New York',       state: 'New York',        stateAbbr: 'NY', region: 'Northeast' },
  { slug: 'boston-ma',        city: 'Boston',         state: 'Massachusetts',   stateAbbr: 'MA', region: 'Northeast' },
  { slug: 'philadelphia-pa',  city: 'Philadelphia',   state: 'Pennsylvania',    stateAbbr: 'PA', region: 'Northeast' },
  { slug: 'pittsburgh-pa',    city: 'Pittsburgh',     state: 'Pennsylvania',    stateAbbr: 'PA', region: 'Northeast' },
  { slug: 'hartford-ct',      city: 'Hartford',       state: 'Connecticut',     stateAbbr: 'CT', region: 'Northeast' },
  { slug: 'providence-ri',    city: 'Providence',     state: 'Rhode Island',    stateAbbr: 'RI', region: 'Northeast' },
  { slug: 'manchester-nh',    city: 'Manchester',     state: 'New Hampshire',   stateAbbr: 'NH', region: 'Northeast' },
  { slug: 'portland-me',      city: 'Portland',       state: 'Maine',           stateAbbr: 'ME', region: 'Northeast' },
  { slug: 'burlington-vt',    city: 'Burlington',     state: 'Vermont',         stateAbbr: 'VT', region: 'Northeast' },
  { slug: 'albany-ny',        city: 'Albany',         state: 'New York',        stateAbbr: 'NY', region: 'Northeast' },
  { slug: 'buffalo-ny',       city: 'Buffalo',        state: 'New York',        stateAbbr: 'NY', region: 'Northeast' },

  // Mid-Atlantic
  { slug: 'baltimore-md',     city: 'Baltimore',      state: 'Maryland',        stateAbbr: 'MD', region: 'Mid-Atlantic' },
  { slug: 'washington-dc',    city: 'Washington',     state: 'DC',              stateAbbr: 'DC', region: 'Mid-Atlantic' },
  { slug: 'newark-nj',        city: 'Newark',         state: 'New Jersey',      stateAbbr: 'NJ', region: 'Mid-Atlantic' },
  { slug: 'jersey-city-nj',   city: 'Jersey City',    state: 'New Jersey',      stateAbbr: 'NJ', region: 'Mid-Atlantic' },
  { slug: 'wilmington-de',    city: 'Wilmington',     state: 'Delaware',        stateAbbr: 'DE', region: 'Mid-Atlantic' },

  // Southeast
  { slug: 'miami-fl',         city: 'Miami',          state: 'Florida',         stateAbbr: 'FL', region: 'Southeast' },
  { slug: 'orlando-fl',       city: 'Orlando',        state: 'Florida',         stateAbbr: 'FL', region: 'Southeast' },
  { slug: 'tampa-fl',         city: 'Tampa',          state: 'Florida',         stateAbbr: 'FL', region: 'Southeast' },
  { slug: 'jacksonville-fl',  city: 'Jacksonville',   state: 'Florida',         stateAbbr: 'FL', region: 'Southeast' },
  { slug: 'atlanta-ga',       city: 'Atlanta',        state: 'Georgia',         stateAbbr: 'GA', region: 'Southeast' },
  { slug: 'savannah-ga',      city: 'Savannah',       state: 'Georgia',         stateAbbr: 'GA', region: 'Southeast' },
  { slug: 'charlotte-nc',     city: 'Charlotte',      state: 'North Carolina',  stateAbbr: 'NC', region: 'Southeast' },
  { slug: 'raleigh-nc',       city: 'Raleigh',        state: 'North Carolina',  stateAbbr: 'NC', region: 'Southeast' },
  { slug: 'charleston-sc',    city: 'Charleston',     state: 'South Carolina',  stateAbbr: 'SC', region: 'Southeast' },
  { slug: 'columbia-sc',      city: 'Columbia',       state: 'South Carolina',  stateAbbr: 'SC', region: 'Southeast' },
  { slug: 'nashville-tn',     city: 'Nashville',      state: 'Tennessee',       stateAbbr: 'TN', region: 'Southeast' },
  { slug: 'memphis-tn',       city: 'Memphis',        state: 'Tennessee',       stateAbbr: 'TN', region: 'Southeast' },
  { slug: 'louisville-ky',    city: 'Louisville',     state: 'Kentucky',        stateAbbr: 'KY', region: 'Southeast' },
  { slug: 'lexington-ky',     city: 'Lexington',      state: 'Kentucky',        stateAbbr: 'KY', region: 'Southeast' },
  { slug: 'richmond-va',      city: 'Richmond',       state: 'Virginia',        stateAbbr: 'VA', region: 'Southeast' },
  { slug: 'virginia-beach-va',city: 'Virginia Beach', state: 'Virginia',        stateAbbr: 'VA', region: 'Southeast' },
  { slug: 'birmingham-al',    city: 'Birmingham',     state: 'Alabama',         stateAbbr: 'AL', region: 'Southeast' },
  { slug: 'jackson-ms',       city: 'Jackson',        state: 'Mississippi',     stateAbbr: 'MS', region: 'Southeast' },

  // Midwest
  { slug: 'chicago-il',       city: 'Chicago',        state: 'Illinois',        stateAbbr: 'IL', region: 'Midwest' },
  { slug: 'springfield-il',   city: 'Springfield',    state: 'Illinois',        stateAbbr: 'IL', region: 'Midwest' },
  { slug: 'indianapolis-in',  city: 'Indianapolis',   state: 'Indiana',         stateAbbr: 'IN', region: 'Midwest' },
  { slug: 'columbus-oh',      city: 'Columbus',       state: 'Ohio',            stateAbbr: 'OH', region: 'Midwest' },
  { slug: 'cleveland-oh',     city: 'Cleveland',      state: 'Ohio',            stateAbbr: 'OH', region: 'Midwest' },
  { slug: 'cincinnati-oh',    city: 'Cincinnati',     state: 'Ohio',            stateAbbr: 'OH', region: 'Midwest' },
  { slug: 'detroit-mi',       city: 'Detroit',        state: 'Michigan',        stateAbbr: 'MI', region: 'Midwest' },
  { slug: 'grand-rapids-mi',  city: 'Grand Rapids',   state: 'Michigan',        stateAbbr: 'MI', region: 'Midwest' },
  { slug: 'milwaukee-wi',     city: 'Milwaukee',      state: 'Wisconsin',       stateAbbr: 'WI', region: 'Midwest' },
  { slug: 'minneapolis-mn',   city: 'Minneapolis',    state: 'Minnesota',       stateAbbr: 'MN', region: 'Midwest' },
  { slug: 'kansas-city-mo',   city: 'Kansas City',    state: 'Missouri',        stateAbbr: 'MO', region: 'Midwest' },
  { slug: 'st-louis-mo',      city: 'St. Louis',      state: 'Missouri',        stateAbbr: 'MO', region: 'Midwest' },
  { slug: 'des-moines-ia',    city: 'Des Moines',     state: 'Iowa',            stateAbbr: 'IA', region: 'Midwest' },
  { slug: 'omaha-ne',         city: 'Omaha',          state: 'Nebraska',        stateAbbr: 'NE', region: 'Midwest' },
  { slug: 'wichita-ks',       city: 'Wichita',        state: 'Kansas',          stateAbbr: 'KS', region: 'Midwest' },
  { slug: 'sioux-falls-sd',   city: 'Sioux Falls',    state: 'South Dakota',    stateAbbr: 'SD', region: 'Midwest' },
  { slug: 'fargo-nd',         city: 'Fargo',          state: 'North Dakota',    stateAbbr: 'ND', region: 'Midwest' },

  // South / Southwest
  { slug: 'dallas-tx',        city: 'Dallas',         state: 'Texas',           stateAbbr: 'TX', region: 'South' },
  { slug: 'houston-tx',       city: 'Houston',        state: 'Texas',           stateAbbr: 'TX', region: 'South' },
  { slug: 'san-antonio-tx',   city: 'San Antonio',    state: 'Texas',           stateAbbr: 'TX', region: 'South' },
  { slug: 'austin-tx',        city: 'Austin',         state: 'Texas',           stateAbbr: 'TX', region: 'South' },
  { slug: 'fort-worth-tx',    city: 'Fort Worth',     state: 'Texas',           stateAbbr: 'TX', region: 'South' },
  { slug: 'new-orleans-la',   city: 'New Orleans',    state: 'Louisiana',       stateAbbr: 'LA', region: 'South' },
  { slug: 'baton-rouge-la',   city: 'Baton Rouge',    state: 'Louisiana',       stateAbbr: 'LA', region: 'South' },
  { slug: 'oklahoma-city-ok', city: 'Oklahoma City',  state: 'Oklahoma',        stateAbbr: 'OK', region: 'South' },
  { slug: 'little-rock-ar',   city: 'Little Rock',    state: 'Arkansas',        stateAbbr: 'AR', region: 'South' },

  // Mountain / West
  { slug: 'denver-co',        city: 'Denver',         state: 'Colorado',        stateAbbr: 'CO', region: 'Mountain' },
  { slug: 'colorado-springs-co', city: 'Colorado Springs', state: 'Colorado',  stateAbbr: 'CO', region: 'Mountain' },
  { slug: 'phoenix-az',       city: 'Phoenix',        state: 'Arizona',         stateAbbr: 'AZ', region: 'Mountain' },
  { slug: 'tucson-az',        city: 'Tucson',         state: 'Arizona',         stateAbbr: 'AZ', region: 'Mountain' },
  { slug: 'albuquerque-nm',   city: 'Albuquerque',    state: 'New Mexico',      stateAbbr: 'NM', region: 'Mountain' },
  { slug: 'salt-lake-city-ut',city: 'Salt Lake City', state: 'Utah',            stateAbbr: 'UT', region: 'Mountain' },
  { slug: 'las-vegas-nv',     city: 'Las Vegas',      state: 'Nevada',          stateAbbr: 'NV', region: 'Mountain' },
  { slug: 'reno-nv',          city: 'Reno',           state: 'Nevada',          stateAbbr: 'NV', region: 'Mountain' },
  { slug: 'boise-id',         city: 'Boise',          state: 'Idaho',           stateAbbr: 'ID', region: 'Mountain' },
  { slug: 'billings-mt',      city: 'Billings',       state: 'Montana',         stateAbbr: 'MT', region: 'Mountain' },
  { slug: 'cheyenne-wy',      city: 'Cheyenne',       state: 'Wyoming',         stateAbbr: 'WY', region: 'Mountain' },

  // Pacific
  { slug: 'los-angeles-ca',   city: 'Los Angeles',    state: 'California',      stateAbbr: 'CA', region: 'Pacific' },
  { slug: 'san-francisco-ca', city: 'San Francisco',  state: 'California',      stateAbbr: 'CA', region: 'Pacific' },
  { slug: 'san-diego-ca',     city: 'San Diego',      state: 'California',      stateAbbr: 'CA', region: 'Pacific' },
  { slug: 'sacramento-ca',    city: 'Sacramento',     state: 'California',      stateAbbr: 'CA', region: 'Pacific' },
  { slug: 'san-jose-ca',      city: 'San Jose',       state: 'California',      stateAbbr: 'CA', region: 'Pacific' },
  { slug: 'fresno-ca',        city: 'Fresno',         state: 'California',      stateAbbr: 'CA', region: 'Pacific' },
  { slug: 'seattle-wa',       city: 'Seattle',        state: 'Washington',      stateAbbr: 'WA', region: 'Pacific' },
  { slug: 'spokane-wa',       city: 'Spokane',        state: 'Washington',      stateAbbr: 'WA', region: 'Pacific' },
  { slug: 'portland-or',      city: 'Portland',       state: 'Oregon',          stateAbbr: 'OR', region: 'Pacific' },
  { slug: 'eugene-or',        city: 'Eugene',         state: 'Oregon',          stateAbbr: 'OR', region: 'Pacific' },
  { slug: 'anchorage-ak',     city: 'Anchorage',      state: 'Alaska',          stateAbbr: 'AK', region: 'Pacific' },
  { slug: 'honolulu-hi',      city: 'Honolulu',       state: 'Hawaii',          stateAbbr: 'HI', region: 'Pacific' },
];

export const regionOrder = ['Northeast', 'Mid-Atlantic', 'Southeast', 'Midwest', 'South', 'Mountain', 'Pacific'];

export const locationsByRegion = regionOrder.reduce((acc, region) => {
  acc[region] = locations.filter((loc) => loc.region === region);
  return acc;
}, {});

export const locationBySlug = locations.reduce((acc, loc) => {
  acc[loc.slug] = loc;
  return acc;
}, {});
