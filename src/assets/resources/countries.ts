export interface ICountry { name: string;
    code: string;
    emoji: string;
    unicode: string;
    image: string;
    countryCode: string;
}

const countries: ICountry[] = [
    {
        name: 'Ascension Island',
        code: 'AC',
        emoji: '🇦🇨',
        unicode: 'U+1F1E6 U+1F1E8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg',
        countryCode: '+290'
    },
    {
        name: 'Andorra',
        code: 'AD',
        emoji: '🇦🇩',
        unicode: 'U+1F1E6 U+1F1E9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg',
        countryCode: '+376'
    },
    {
        name: 'United Arab Emirates',
        code: 'AE',
        emoji: '🇦🇪',
        unicode: 'U+1F1E6 U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg',
        countryCode: '+971'
    },
    {
        name: 'Afghanistan',
        code: 'AF',
        emoji: '🇦🇫',
        unicode: 'U+1F1E6 U+1F1EB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg',
        countryCode: '+93'
    },
    {
        name: 'Antigua & Barbuda',
        code: 'AG',
        emoji: '🇦🇬',
        unicode: 'U+1F1E6 U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg',
        countryCode: '+1268'
    },
    {
        name: 'Anguilla',
        code: 'AI',
        emoji: '🇦🇮',
        unicode: 'U+1F1E6 U+1F1EE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg',
        countryCode: '+1264'
    },
    {
        name: 'Albania',
        code: 'AL',
        emoji: '🇦🇱',
        unicode: 'U+1F1E6 U+1F1F1',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg',
        countryCode: '+355'
    },
    {
        name: 'Armenia',
        code: 'AM',
        emoji: '🇦🇲',
        unicode: 'U+1F1E6 U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg',
        countryCode: '+374'
    },
    {
        name: 'Angola',
        code: 'AO',
        emoji: '🇦🇴',
        unicode: 'U+1F1E6 U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg',
        countryCode: '+244'
    },
    {
        name: 'Antarctica',
        code: 'AQ',
        emoji: '🇦🇶',
        unicode: 'U+1F1E6 U+1F1F6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg',
        countryCode: '+672'
    } /*,
    {
        name: 'Argentina',
        code: 'AR',
        emoji: '🇦🇷',
        unicode: 'U+1F1E6 U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg',
        countryCode: '+54'
    },
    {
        name: 'American Samoa',
        code: 'AS',
        emoji: '🇦🇸',
        unicode: 'U+1F1E6 U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg',
        countryCode: '+1684'
    },
    {
        name: 'Austria',
        code: 'AT',
        emoji: '🇦🇹',
        unicode: 'U+1F1E6 U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg',
        countryCode: '+43'
    },
    {
        name: 'Australia',
        code: 'AU',
        emoji: '🇦🇺',
        unicode: 'U+1F1E6 U+1F1FA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg',
        countryCode: '+61'
    },
    {
        name: 'Aruba',
        code: 'AW',
        emoji: '🇦🇼',
        unicode: 'U+1F1E6 U+1F1FC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg',
        countryCode: '+297'
    },
    {
        name: 'Åland Islands',
        code: 'AX',
        emoji: '🇦🇽',
        unicode: 'U+1F1E6 U+1F1FD',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg',
        countryCode: '+358'
    },
    {
        name: 'Azerbaijan',
        code: 'AZ',
        emoji: '🇦🇿',
        unicode: 'U+1F1E6 U+1F1FF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg',
        countryCode: '+994'
    },
    {
        name: 'Bosnia & Herzegovina',
        code: 'BA',
        emoji: '🇧🇦',
        unicode: 'U+1F1E7 U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg',
        countryCode: '+387'
    },
    {
        name: 'Barbados',
        code: 'BB',
        emoji: '🇧🇧',
        unicode: 'U+1F1E7 U+1F1E7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg',
        countryCode: '+1246'
    },
    {
        name: 'Bangladesh',
        code: 'BD',
        emoji: '🇧🇩',
        unicode: 'U+1F1E7 U+1F1E9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg',
        countryCode: '+880'
    },
    {
        name: 'Belgium',
        code: 'BE',
        emoji: '🇧🇪',
        unicode: 'U+1F1E7 U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg',
        countryCode: '+32'
    },
    {
        name: 'Burkina Faso',
        code: 'BF',
        emoji: '🇧🇫',
        unicode: 'U+1F1E7 U+1F1EB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg',
        countryCode: '+226'
    },
    {
        name: 'Bulgaria',
        code: 'BG',
        emoji: '🇧🇬',
        unicode: 'U+1F1E7 U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg',
        countryCode: '+359'
    },
    {
        name: 'Bahrain',
        code: 'BH',
        emoji: '🇧🇭',
        unicode: 'U+1F1E7 U+1F1ED',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg',
        countryCode: '+973'
    },
    {
        name: 'Burundi',
        code: 'BI',
        emoji: '🇧🇮',
        unicode: 'U+1F1E7 U+1F1EE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg',
        countryCode: '+257'
    },
    {
        name: 'Benin',
        code: 'BJ',
        emoji: '🇧🇯',
        unicode: 'U+1F1E7 U+1F1EF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg',
        countryCode: '+229'
    },
    {
        name: 'St. Barthélemy',
        code: 'BL',
        emoji: '🇧🇱',
        unicode: 'U+1F1E7 U+1F1F1',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg',
        countryCode: '+590'
    },
    {
        name: 'Bermuda',
        code: 'BM',
        emoji: '🇧🇲',
        unicode: 'U+1F1E7 U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg',
        countryCode: '+1441'
    },
    {
        name: 'Brunei',
        code: 'BN',
        emoji: '🇧🇳',
        unicode: 'U+1F1E7 U+1F1F3',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg',
        countryCode: '+673'
    },
    {
        name: 'Bolivia',
        code: 'BO',
        emoji: '🇧🇴',
        unicode: 'U+1F1E7 U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg',
        countryCode: '+591'
    },
    {
        name: 'Caribbean Netherlands',
        code: 'BQ',
        emoji: '🇧🇶',
        unicode: 'U+1F1E7 U+1F1F6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg',
        countryCode: '+599'
    },
    {
        name: 'Brazil',
        code: 'BR',
        emoji: '🇧🇷',
        unicode: 'U+1F1E7 U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg',
        countryCode: '+55'
    },
    {
        name: 'Bahamas',
        code: 'BS',
        emoji: '🇧🇸',
        unicode: 'U+1F1E7 U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg',
        countryCode: '+1242'
    },
    {
        name: 'Bhutan',
        code: 'BT',
        emoji: '🇧🇹',
        unicode: 'U+1F1E7 U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg',
        countryCode: '+975'
    },
    {
        name: 'Bouvet Island',
        code: 'BV',
        emoji: '🇧🇻',
        unicode: 'U+1F1E7 U+1F1FB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg',
        countryCode: '+47'
    },
    {
        name: 'Botswana',
        code: 'BW',
        emoji: '🇧🇼',
        unicode: 'U+1F1E7 U+1F1FC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg',
        countryCode: '+267'
    },
    {
        name: 'Belarus',
        code: 'BY',
        emoji: '🇧🇾',
        unicode: 'U+1F1E7 U+1F1FE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg',
        countryCode: '+375'
    },
    {
        name: 'Belize',
        code: 'BZ',
        emoji: '🇧🇿',
        unicode: 'U+1F1E7 U+1F1FF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg',
        countryCode: '+501'
    },
    {
        name: 'Canada',
        code: 'CA',
        emoji: '🇨🇦',
        unicode: 'U+1F1E8 U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg',
        countryCode: '+1'
    },
    {
        name: 'Cocos (Keeling) Islands',
        code: 'CC',
        emoji: '🇨🇨',
        unicode: 'U+1F1E8 U+1F1E8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg',
        countryCode: '+61'
    },
    {
        name: 'Congo - Kinshasa',
        code: 'CD',
        emoji: '🇨🇩',
        unicode: 'U+1F1E8 U+1F1E9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg',
        countryCode: '+243'
    },
    {
        name: 'Central African Republic',
        code: 'CF',
        emoji: '🇨🇫',
        unicode: 'U+1F1E8 U+1F1EB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg',
        countryCode: '+236'
    },
    {
        name: 'Congo - Brazzaville',
        code: 'CG',
        emoji: '🇨🇬',
        unicode: 'U+1F1E8 U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg',
        countryCode: '+242'
    },
    {
        name: 'Switzerland',
        code: 'CH',
        emoji: '🇨🇭',
        unicode: 'U+1F1E8 U+1F1ED',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg',
        countryCode: '+41'
    },
    {
        name: 'Côte d’Ivoire',
        code: 'CI',
        emoji: '🇨🇮',
        unicode: 'U+1F1E8 U+1F1EE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg',
        countryCode: '+225'
    },
    {
        name: 'Cook Islands',
        code: 'CK',
        emoji: '🇨🇰',
        unicode: 'U+1F1E8 U+1F1F0',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg',
        countryCode: '+682'
    },
    {
        name: 'Chile',
        code: 'CL',
        emoji: '🇨🇱',
        unicode: 'U+1F1E8 U+1F1F1',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg',
        countryCode: '+56'
    },
    {
        name: 'Cameroon',
        code: 'CM',
        emoji: '🇨🇲',
        unicode: 'U+1F1E8 U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg',
        countryCode: '+237'
    },
    {
        name: 'China',
        code: 'CN',
        emoji: '🇨🇳',
        unicode: 'U+1F1E8 U+1F1F3',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg',
        countryCode: '+86'
    },
    {
        name: 'Colombia',
        code: 'CO',
        emoji: '🇨🇴',
        unicode: 'U+1F1E8 U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg',
        countryCode: '+57'
    },
    {
        name: 'Clipperton Island',
        code: 'CP',
        emoji: '🇨🇵',
        unicode: 'U+1F1E8 U+1F1F5',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg',
        countryCode: '+55'
    },
    {
        name: 'Costa Rica',
        code: 'CR',
        emoji: '🇨🇷',
        unicode: 'U+1F1E8 U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg',
        countryCode: '+506'
    },
    {
        name: 'Cuba',
        code: 'CU',
        emoji: '🇨🇺',
        unicode: 'U+1F1E8 U+1F1FA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg',
        countryCode: '+53'
    },
    {
        name: 'Cape Verde',
        code: 'CV',
        emoji: '🇨🇻',
        unicode: 'U+1F1E8 U+1F1FB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg',
        countryCode: '+238'
    },
    {
        name: 'Curaçao',
        code: 'CW',
        emoji: '🇨🇼',
        unicode: 'U+1F1E8 U+1F1FC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg',
        countryCode: '+599'
    },
    {
        name: 'Christmas Island',
        code: 'CX',
        emoji: '🇨🇽',
        unicode: 'U+1F1E8 U+1F1FD',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg',
        countryCode: '+61'
    },
    {
        name: 'Cyprus',
        code: 'CY',
        emoji: '🇨🇾',
        unicode: 'U+1F1E8 U+1F1FE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg',
        countryCode: '+357'
    },
    {
        name: 'Czechia',
        code: 'CZ',
        emoji: '🇨🇿',
        unicode: 'U+1F1E8 U+1F1FF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg',
        countryCode: '+420'
    },
    {
        name: 'Germany',
        code: 'DE',
        emoji: '🇩🇪',
        unicode: 'U+1F1E9 U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg',
        countryCode: '+49'
    },
    {
        name: 'Diego Garcia',
        code: 'DG',
        emoji: '🇩🇬',
        unicode: 'U+1F1E9 U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg',
        countryCode: '+246'
    },
    {
        name: 'Djibouti',
        code: 'DJ',
        emoji: '🇩🇯',
        unicode: 'U+1F1E9 U+1F1EF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg',
        countryCode: '+253'
    },
    {
        name: 'Denmark',
        code: 'DK',
        emoji: '🇩🇰',
        unicode: 'U+1F1E9 U+1F1F0',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg',
        countryCode: '+45'
    },
    {
        name: 'Dominica',
        code: 'DM',
        emoji: '🇩🇲',
        unicode: 'U+1F1E9 U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg',
        countryCode: '+1767'
    },
    {
        name: 'Dominican Republic',
        code: 'DO',
        emoji: '🇩🇴',
        unicode: 'U+1F1E9 U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg',
        countryCode: '+1849'
    },
    {
        name: 'Algeria',
        code: 'DZ',
        emoji: '🇩🇿',
        unicode: 'U+1F1E9 U+1F1FF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg',
        countryCode: '+213'
    },
    {
        name: 'Ecuador',
        code: 'EC',
        emoji: '🇪🇨',
        unicode: 'U+1F1EA U+1F1E8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg',
        countryCode: '+593'
    },
    {
        name: 'Estonia',
        code: 'EE',
        emoji: '🇪🇪',
        unicode: 'U+1F1EA U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg',
        countryCode: '+372'
    },
    {
        name: 'Egypt',
        code: 'EG',
        emoji: '🇪🇬',
        unicode: 'U+1F1EA U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg',
        countryCode: '+20'
    },
    {
        name: 'Western Sahara',
        code: 'EH',
        emoji: '🇪🇭',
        unicode: 'U+1F1EA U+1F1ED',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg',
        countryCode: '+212'
    },
    {
        name: 'Eritrea',
        code: 'ER',
        emoji: '🇪🇷',
        unicode: 'U+1F1EA U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg',
        countryCode: '+291'
    },
    {
        name: 'Spain',
        code: 'ES',
        emoji: '🇪🇸',
        unicode: 'U+1F1EA U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg',
        countryCode: '+34'
    },
    {
        name: 'Ethiopia',
        code: 'ET',
        emoji: '🇪🇹',
        unicode: 'U+1F1EA U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg',
        countryCode: '+251'
    },
    {
        name: 'Finland',
        code: 'FI',
        emoji: '🇫🇮',
        unicode: 'U+1F1EB U+1F1EE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg',
        countryCode: '+358'
    },
    {
        name: 'Fiji',
        code: 'FJ',
        emoji: '🇫🇯',
        unicode: 'U+1F1EB U+1F1EF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg',
        countryCode: '+679'
    },
    {
        name: 'Falkland Islands',
        code: 'FK',
        emoji: '🇫🇰',
        unicode: 'U+1F1EB U+1F1F0',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg',
        countryCode: '+500'
    },
    {
        name: 'Micronesia',
        code: 'FM',
        emoji: '🇫🇲',
        unicode: 'U+1F1EB U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg',
        countryCode: '+691'
    },
    {
        name: 'Faroe Islands',
        code: 'FO',
        emoji: '🇫🇴',
        unicode: 'U+1F1EB U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg',
        countryCode: '+298'
    },
    {
        name: 'France',
        code: 'FR',
        emoji: '🇫🇷',
        unicode: 'U+1F1EB U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg',
        countryCode: '+33'
    },
    {
        name: 'Gabon',
        code: 'GA',
        emoji: '🇬🇦',
        unicode: 'U+1F1EC U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg',
        countryCode: '+241'
    },
    {
        name: 'United Kingdom',
        code: 'GB',
        emoji: '🇬🇧',
        unicode: 'U+1F1EC U+1F1E7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg',
        countryCode: '+44'
    },
    {
        name: 'Grenada',
        code: 'GD',
        emoji: '🇬🇩',
        unicode: 'U+1F1EC U+1F1E9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg',
        countryCode: '+1473'
    },
    {
        name: 'Georgia',
        code: 'GE',
        emoji: '🇬🇪',
        unicode: 'U+1F1EC U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg',
        countryCode: '+995'
    },
    {
        name: 'French Guiana',
        code: 'GF',
        emoji: '🇬🇫',
        unicode: 'U+1F1EC U+1F1EB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg',
        countryCode: '+594'
    },
    {
        name: 'Guernsey',
        code: 'GG',
        emoji: '🇬🇬',
        unicode: 'U+1F1EC U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg',
        countryCode: '+44'
    },
    {
        name: 'Ghana',
        code: 'GH',
        emoji: '🇬🇭',
        unicode: 'U+1F1EC U+1F1ED',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg',
        countryCode: '+233'
    },
    {
        name: 'Gibraltar',
        code: 'GI',
        emoji: '🇬🇮',
        unicode: 'U+1F1EC U+1F1EE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg',
        countryCode: '+350'
    },
    {
        name: 'Greenland',
        code: 'GL',
        emoji: '🇬🇱',
        unicode: 'U+1F1EC U+1F1F1',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg',
        countryCode: '+299'
    },
    {
        name: 'Gambia',
        code: 'GM',
        emoji: '🇬🇲',
        unicode: 'U+1F1EC U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg',
        countryCode: '+220'
    },
    {
        name: 'Guinea',
        code: 'GN',
        emoji: '🇬🇳',
        unicode: 'U+1F1EC U+1F1F3',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg',
        countryCode: '+224'
    },
    {
        name: 'Guadeloupe',
        code: 'GP',
        emoji: '🇬🇵',
        unicode: 'U+1F1EC U+1F1F5',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg',
        countryCode: '+590'
    },
    {
        name: 'Equatorial Guinea',
        code: 'GQ',
        emoji: '🇬🇶',
        unicode: 'U+1F1EC U+1F1F6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg',
        countryCode: '+240'
    },
    {
        name: 'Greece',
        code: 'GR',
        emoji: '🇬🇷',
        unicode: 'U+1F1EC U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg',
        countryCode: '+30'
    },
    {
        name: 'South Georgia & South Sandwich Islands',
        code: 'GS',
        emoji: '🇬🇸',
        unicode: 'U+1F1EC U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg',
        countryCode: '+500'
    },
    {
        name: 'Guatemala',
        code: 'GT',
        emoji: '🇬🇹',
        unicode: 'U+1F1EC U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg',
        countryCode: '+502'
    },
    {
        name: 'Guam',
        code: 'GU',
        emoji: '🇬🇺',
        unicode: 'U+1F1EC U+1F1FA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg',
        countryCode: '+1671'
    },
    {
        name: 'Guinea-Bissau',
        code: 'GW',
        emoji: '🇬🇼',
        unicode: 'U+1F1EC U+1F1FC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg',
        countryCode: '+245'
    },
    {
        name: 'Guyana',
        code: 'GY',
        emoji: '🇬🇾',
        unicode: 'U+1F1EC U+1F1FE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg',
        countryCode: '+595'
    },
    {
        name: 'Hong Kong SAR China',
        code: 'HK',
        emoji: '🇭🇰',
        unicode: 'U+1F1ED U+1F1F0',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg',
        countryCode: '+852'
    },
    {
        name: 'Honduras',
        code: 'HN',
        emoji: '🇭🇳',
        unicode: 'U+1F1ED U+1F1F3',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg',
        countryCode: '+504'
    },
    {
        name: 'Croatia',
        code: 'HR',
        emoji: '🇭🇷',
        unicode: 'U+1F1ED U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg',
        countryCode: '+385'
    },
    {
        name: 'Haiti',
        code: 'HT',
        emoji: '🇭🇹',
        unicode: 'U+1F1ED U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg',
        countryCode: '+509'
    },
    {
        name: 'Hungary',
        code: 'HU',
        emoji: '🇭🇺',
        unicode: 'U+1F1ED U+1F1FA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg',
        countryCode: '+36'
    },
    {
        name: 'Indonesia',
        code: 'ID',
        emoji: '🇮🇩',
        unicode: 'U+1F1EE U+1F1E9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg',
        countryCode: '+62'
    },
    {
        name: 'Ireland',
        code: 'IE',
        emoji: '🇮🇪',
        unicode: 'U+1F1EE U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg',
        countryCode: '+353'
    },
    {
        name: 'Israel',
        code: 'IL',
        emoji: '🇮🇱',
        unicode: 'U+1F1EE U+1F1F1',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg',
        countryCode: '+972'
    },
    {
        name: 'Isle of Man',
        code: 'IM',
        emoji: '🇮🇲',
        unicode: 'U+1F1EE U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg',
        countryCode: '+44'
    },
    {
        name: 'India',
        code: 'IN',
        emoji: '🇮🇳',
        unicode: 'U+1F1EE U+1F1F3',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
        countryCode: '+91'
    },
    {
        name: 'British Indian Ocean Territory',
        code: 'IO',
        emoji: '🇮🇴',
        unicode: 'U+1F1EE U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg',
        countryCode: '+246'
    },
    {
        name: 'Iraq',
        code: 'IQ',
        emoji: '🇮🇶',
        unicode: 'U+1F1EE U+1F1F6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg',
        countryCode: '+964'
    },
    {
        name: 'Iran',
        code: 'IR',
        emoji: '🇮🇷',
        unicode: 'U+1F1EE U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg',
        countryCode: '+98'
    },
    {
        name: 'Iceland',
        code: 'IS',
        emoji: '🇮🇸',
        unicode: 'U+1F1EE U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg',
        countryCode: '+354'
    },
    {
        name: 'Italy',
        code: 'IT',
        emoji: '🇮🇹',
        unicode: 'U+1F1EE U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg',
        countryCode: '+39'
    },
    {
        name: 'Jersey',
        code: 'JE',
        emoji: '🇯🇪',
        unicode: 'U+1F1EF U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg',
        countryCode: '+44'
    },
    {
        name: 'Jamaica',
        code: 'JM',
        emoji: '🇯🇲',
        unicode: 'U+1F1EF U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg',
        countryCode: '+1876'
    },
    {
        name: 'Jordan',
        code: 'JO',
        emoji: '🇯🇴',
        unicode: 'U+1F1EF U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg',
        countryCode: '+962'
    },
    {
        name: 'Japan',
        code: 'JP',
        emoji: '🇯🇵',
        unicode: 'U+1F1EF U+1F1F5',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg',
        countryCode: '+81'
    },
    {
        name: 'Kenya',
        code: 'KE',
        emoji: '🇰🇪',
        unicode: 'U+1F1F0 U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg',
        countryCode: '+254'
    },
    {
        name: 'Kyrgyzstan',
        code: 'KG',
        emoji: '🇰🇬',
        unicode: 'U+1F1F0 U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg',
        countryCode: '+996'
    },
    {
        name: 'Cambodia',
        code: 'KH',
        emoji: '🇰🇭',
        unicode: 'U+1F1F0 U+1F1ED',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg',
        countryCode: '+855'
    },
    {
        name: 'Kiribati',
        code: 'KI',
        emoji: '🇰🇮',
        unicode: 'U+1F1F0 U+1F1EE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg',
        countryCode: '+686'
    },
    {
        name: 'Comoros',
        code: 'KM',
        emoji: '🇰🇲',
        unicode: 'U+1F1F0 U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg',
        countryCode: '+269'
    },
    {
        name: 'St. Kitts & Nevis',
        code: 'KN',
        emoji: '🇰🇳',
        unicode: 'U+1F1F0 U+1F1F3',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg',
        countryCode: '+1869'
    },
    {
        name: 'North Korea',
        code: 'KP',
        emoji: '🇰🇵',
        unicode: 'U+1F1F0 U+1F1F5',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg',
        countryCode: '+850'
    },
    {
        name: 'South Korea',
        code: 'KR',
        emoji: '🇰🇷',
        unicode: 'U+1F1F0 U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg',
        countryCode: '+82'
    },
    {
        name: 'Kuwait',
        code: 'KW',
        emoji: '🇰🇼',
        unicode: 'U+1F1F0 U+1F1FC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg',
        countryCode: '+965'
    },
    {
        name: 'Cayman Islands',
        code: 'KY',
        emoji: '🇰🇾',
        unicode: 'U+1F1F0 U+1F1FE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg',
        countryCode: '+ 345'
    },
    {
        name: 'Kazakhstan',
        code: 'KZ',
        emoji: '🇰🇿',
        unicode: 'U+1F1F0 U+1F1FF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg',
        countryCode: '+77'
    },
    {
        name: 'Laos',
        code: 'LA',
        emoji: '🇱🇦',
        unicode: 'U+1F1F1 U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg',
        countryCode: '+856'
    },
    {
        name: 'Lebanon',
        code: 'LB',
        emoji: '🇱🇧',
        unicode: 'U+1F1F1 U+1F1E7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg',
        countryCode: '+961'
    },
    {
        name: 'St. Lucia',
        code: 'LC',
        emoji: '🇱🇨',
        unicode: 'U+1F1F1 U+1F1E8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg',
        countryCode: '+1758'
    },
    {
        name: 'Liechtenstein',
        code: 'LI',
        emoji: '🇱🇮',
        unicode: 'U+1F1F1 U+1F1EE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg',
        countryCode: '+423'
    },
    {
        name: 'Sri Lanka',
        code: 'LK',
        emoji: '🇱🇰',
        unicode: 'U+1F1F1 U+1F1F0',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg',
        countryCode: '+94'
    },
    {
        name: 'Liberia',
        code: 'LR',
        emoji: '🇱🇷',
        unicode: 'U+1F1F1 U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg',
        countryCode: '+231'
    },
    {
        name: 'Lesotho',
        code: 'LS',
        emoji: '🇱🇸',
        unicode: 'U+1F1F1 U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg',
        countryCode: '+266'
    },
    {
        name: 'Lithuania',
        code: 'LT',
        emoji: '🇱🇹',
        unicode: 'U+1F1F1 U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg',
        countryCode: '+370'
    },
    {
        name: 'Luxembourg',
        code: 'LU',
        emoji: '🇱🇺',
        unicode: 'U+1F1F1 U+1F1FA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg',
        countryCode: '+352'
    },
    {
        name: 'Latvia',
        code: 'LV',
        emoji: '🇱🇻',
        unicode: 'U+1F1F1 U+1F1FB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg',
        countryCode: '+371'
    },
    {
        name: 'Libya',
        code: 'LY',
        emoji: '🇱🇾',
        unicode: 'U+1F1F1 U+1F1FE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg',
        countryCode: '+218'
    },
    {
        name: 'Morocco',
        code: 'MA',
        emoji: '🇲🇦',
        unicode: 'U+1F1F2 U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg',
        countryCode: '+212'
    },
    {
        name: 'Monaco',
        code: 'MC',
        emoji: '🇲🇨',
        unicode: 'U+1F1F2 U+1F1E8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg',
        countryCode: '+377'
    },
    {
        name: 'Moldova',
        code: 'MD',
        emoji: '🇲🇩',
        unicode: 'U+1F1F2 U+1F1E9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg',
        countryCode: '+373'
    },
    {
        name: 'Montenegro',
        code: 'ME',
        emoji: '🇲🇪',
        unicode: 'U+1F1F2 U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg',
        countryCode: '+382'
    },
    {
        name: 'St. Martin',
        code: 'MF',
        emoji: '🇲🇫',
        unicode: 'U+1F1F2 U+1F1EB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg',
        countryCode: '+590'
    },
    {
        name: 'Madagascar',
        code: 'MG',
        emoji: '🇲🇬',
        unicode: 'U+1F1F2 U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg',
        countryCode: '+261'
    },
    {
        name: 'Marshall Islands',
        code: 'MH',
        emoji: '🇲🇭',
        unicode: 'U+1F1F2 U+1F1ED',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg',
        countryCode: '+692'
    },
    {
        name: 'North Macedonia',
        code: 'MK',
        emoji: '🇲🇰',
        unicode: 'U+1F1F2 U+1F1F0',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg',
        countryCode: '+389'
    },
    {
        name: 'Mali',
        code: 'ML',
        emoji: '🇲🇱',
        unicode: 'U+1F1F2 U+1F1F1',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg',
        countryCode: '+223'
    },
    {
        name: 'Myanmar (Burma)',
        code: 'MM',
        emoji: '🇲🇲',
        unicode: 'U+1F1F2 U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg',
        countryCode: '+95'
    },
    {
        name: 'Mongolia',
        code: 'MN',
        emoji: '🇲🇳',
        unicode: 'U+1F1F2 U+1F1F3',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg',
        countryCode: '+976'
    },
    {
        name: 'Macao SAR China',
        code: 'MO',
        emoji: '🇲🇴',
        unicode: 'U+1F1F2 U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg',
        countryCode: '+853'
    },
    {
        name: 'Northern Mariana Islands',
        code: 'MP',
        emoji: '🇲🇵',
        unicode: 'U+1F1F2 U+1F1F5',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg',
        countryCode: '+1670'
    },
    {
        name: 'Martinique',
        code: 'MQ',
        emoji: '🇲🇶',
        unicode: 'U+1F1F2 U+1F1F6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg',
        countryCode: '+596'
    },
    {
        name: 'Mauritania',
        code: 'MR',
        emoji: '🇲🇷',
        unicode: 'U+1F1F2 U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg',
        countryCode: '+222'
    },
    {
        name: 'Montserrat',
        code: 'MS',
        emoji: '🇲🇸',
        unicode: 'U+1F1F2 U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg',
        countryCode: '+1664'
    },
    {
        name: 'Malta',
        code: 'MT',
        emoji: '🇲🇹',
        unicode: 'U+1F1F2 U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg',
        countryCode: '+356'
    },
    {
        name: 'Mauritius',
        code: 'MU',
        emoji: '🇲🇺',
        unicode: 'U+1F1F2 U+1F1FA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg',
        countryCode: '+230'
    },
    {
        name: 'Maldives',
        code: 'MV',
        emoji: '🇲🇻',
        unicode: 'U+1F1F2 U+1F1FB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg',
        countryCode: '+960'
    },
    {
        name: 'Malawi',
        code: 'MW',
        emoji: '🇲🇼',
        unicode: 'U+1F1F2 U+1F1FC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg',
        countryCode: '+265'
    },
    {
        name: 'Mexico',
        code: 'MX',
        emoji: '🇲🇽',
        unicode: 'U+1F1F2 U+1F1FD',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg',
        countryCode: '+52'
    },
    {
        name: 'Malaysia',
        code: 'MY',
        emoji: '🇲🇾',
        unicode: 'U+1F1F2 U+1F1FE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg',
        countryCode: '+60'
    },
    {
        name: 'Mozambique',
        code: 'MZ',
        emoji: '🇲🇿',
        unicode: 'U+1F1F2 U+1F1FF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg',
        countryCode: '+258'
    },
    {
        name: 'Namibia',
        code: 'NA',
        emoji: '🇳🇦',
        unicode: 'U+1F1F3 U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg',
        countryCode: '+264'
    },
    {
        name: 'New Caledonia',
        code: 'NC',
        emoji: '🇳🇨',
        unicode: 'U+1F1F3 U+1F1E8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg',
        countryCode: '+687'
    },
    {
        name: 'Niger',
        code: 'NE',
        emoji: '🇳🇪',
        unicode: 'U+1F1F3 U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg',
        countryCode: '+227'
    },
    {
        name: 'Norfolk Island',
        code: 'NF',
        emoji: '🇳🇫',
        unicode: 'U+1F1F3 U+1F1EB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg',
        countryCode: '+672'
    },
    {
        name: 'Nigeria',
        code: 'NG',
        emoji: '🇳🇬',
        unicode: 'U+1F1F3 U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg',
        countryCode: '+234'
    },
    {
        name: 'Nicaragua',
        code: 'NI',
        emoji: '🇳🇮',
        unicode: 'U+1F1F3 U+1F1EE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg',
        countryCode: '+505'
    },
    {
        name: 'Netherlands',
        code: 'NL',
        emoji: '🇳🇱',
        unicode: 'U+1F1F3 U+1F1F1',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg',
        countryCode: '+31'
    },
    {
        name: 'Norway',
        code: 'NO',
        emoji: '🇳🇴',
        unicode: 'U+1F1F3 U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg',
        countryCode: '+47'
    },
    {
        name: 'Nepal',
        code: 'NP',
        emoji: '🇳🇵',
        unicode: 'U+1F1F3 U+1F1F5',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg',
        countryCode: '+977'
    },
    {
        name: 'Nauru',
        code: 'NR',
        emoji: '🇳🇷',
        unicode: 'U+1F1F3 U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg',
        countryCode: '+674'
    },
    {
        name: 'Niue',
        code: 'NU',
        emoji: '🇳🇺',
        unicode: 'U+1F1F3 U+1F1FA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg',
        countryCode: '+683'
    },
    {
        name: 'New Zealand',
        code: 'NZ',
        emoji: '🇳🇿',
        unicode: 'U+1F1F3 U+1F1FF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg',
        countryCode: '+64'
    },
    {
        name: 'Oman',
        code: 'OM',
        emoji: '🇴🇲',
        unicode: 'U+1F1F4 U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg',
        countryCode: '+968'
    },
    {
        name: 'Panama',
        code: 'PA',
        emoji: '🇵🇦',
        unicode: 'U+1F1F5 U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg',
        countryCode: '+507'
    },
    {
        name: 'Peru',
        code: 'PE',
        emoji: '🇵🇪',
        unicode: 'U+1F1F5 U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg',
        countryCode: '+51'
    },
    {
        name: 'French Polynesia',
        code: 'PF',
        emoji: '🇵🇫',
        unicode: 'U+1F1F5 U+1F1EB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg',
        countryCode: '+689'
    },
    {
        name: 'Papua New Guinea',
        code: 'PG',
        emoji: '🇵🇬',
        unicode: 'U+1F1F5 U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg',
        countryCode: '+675'
    },
    {
        name: 'Philippines',
        code: 'PH',
        emoji: '🇵🇭',
        unicode: 'U+1F1F5 U+1F1ED',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg',
        countryCode: '+63'
    },
    {
        name: 'Pakistan',
        code: 'PK',
        emoji: '🇵🇰',
        unicode: 'U+1F1F5 U+1F1F0',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg',
        countryCode: '+92'
    },
    {
        name: 'Poland',
        code: 'PL',
        emoji: '🇵🇱',
        unicode: 'U+1F1F5 U+1F1F1',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg',
        countryCode: '+48'
    },
    {
        name: 'St. Pierre & Miquelon',
        code: 'PM',
        emoji: '🇵🇲',
        unicode: 'U+1F1F5 U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg',
        countryCode: '+508'
    },
    {
        name: 'Pitcairn Islands',
        code: 'PN',
        emoji: '🇵🇳',
        unicode: 'U+1F1F5 U+1F1F3',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg',
        countryCode: '+872'
    },
    {
        name: 'Puerto Rico',
        code: 'PR',
        emoji: '🇵🇷',
        unicode: 'U+1F1F5 U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg',
        countryCode: '+1939'
    },
    {
        name: 'Palestinian Territories',
        code: 'PS',
        emoji: '🇵🇸',
        unicode: 'U+1F1F5 U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg',
        countryCode: '+970'
    },
    {
        name: 'Portugal',
        code: 'PT',
        emoji: '🇵🇹',
        unicode: 'U+1F1F5 U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg',
        countryCode: '+351'
    },
    {
        name: 'Palau',
        code: 'PW',
        emoji: '🇵🇼',
        unicode: 'U+1F1F5 U+1F1FC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg',
        countryCode: '+680'
    },
    {
        name: 'Paraguay',
        code: 'PY',
        emoji: '🇵🇾',
        unicode: 'U+1F1F5 U+1F1FE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg',
        countryCode: '+595'
    },
    {
        name: 'Qatar',
        code: 'QA',
        emoji: '🇶🇦',
        unicode: 'U+1F1F6 U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg',
        countryCode: '+974'
    },
    {
        name: 'Réunion',
        code: 'RE',
        emoji: '🇷🇪',
        unicode: 'U+1F1F7 U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg',
        countryCode: '+262'
    },
    {
        name: 'Romania',
        code: 'RO',
        emoji: '🇷🇴',
        unicode: 'U+1F1F7 U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg',
        countryCode: '+40'
    },
    {
        name: 'Serbia',
        code: 'RS',
        emoji: '🇷🇸',
        unicode: 'U+1F1F7 U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg',
        countryCode: '+381'
    },
    {
        name: 'Russia',
        code: 'RU',
        emoji: '🇷🇺',
        unicode: 'U+1F1F7 U+1F1FA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg',
        countryCode: '+7'
    },
    {
        name: 'Rwanda',
        code: 'RW',
        emoji: '🇷🇼',
        unicode: 'U+1F1F7 U+1F1FC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg',
        countryCode: '+250'
    },
    {
        name: 'Saudi Arabia',
        code: 'SA',
        emoji: '🇸🇦',
        unicode: 'U+1F1F8 U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg',
        countryCode: '+966'
    },
    {
        name: 'Solomon Islands',
        code: 'SB',
        emoji: '🇸🇧',
        unicode: 'U+1F1F8 U+1F1E7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg',
        countryCode: '+677'
    },
    {
        name: 'Seychelles',
        code: 'SC',
        emoji: '🇸🇨',
        unicode: 'U+1F1F8 U+1F1E8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg',
        countryCode: '+248'
    },
    {
        name: 'Sudan',
        code: 'SD',
        emoji: '🇸🇩',
        unicode: 'U+1F1F8 U+1F1E9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg',
        countryCode: '+249'
    },
    {
        name: 'Sweden',
        code: 'SE',
        emoji: '🇸🇪',
        unicode: 'U+1F1F8 U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg',
        countryCode: '+46'
    },
    {
        name: 'Singapore',
        code: 'SG',
        emoji: '🇸🇬',
        unicode: 'U+1F1F8 U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg',
        countryCode: '+65'
    },
    {
        name: 'St. Helena',
        code: 'SH',
        emoji: '🇸🇭',
        unicode: 'U+1F1F8 U+1F1ED',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg',
        countryCode: '+290'
    },
    {
        name: 'Slovenia',
        code: 'SI',
        emoji: '🇸🇮',
        unicode: 'U+1F1F8 U+1F1EE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg',
        countryCode: '+386'
    },
    {
        name: 'Svalbard & Jan Mayen',
        code: 'SJ',
        emoji: '🇸🇯',
        unicode: 'U+1F1F8 U+1F1EF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg',
        countryCode: '+47'
    },
    {
        name: 'Slovakia',
        code: 'SK',
        emoji: '🇸🇰',
        unicode: 'U+1F1F8 U+1F1F0',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg',
        countryCode: '+421'
    },
    {
        name: 'Sierra Leone',
        code: 'SL',
        emoji: '🇸🇱',
        unicode: 'U+1F1F8 U+1F1F1',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg',
        countryCode: '+232'
    },
    {
        name: 'San Marino',
        code: 'SM',
        emoji: '🇸🇲',
        unicode: 'U+1F1F8 U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg',
        countryCode: '+378'
    },
    {
        name: 'Senegal',
        code: 'SN',
        emoji: '🇸🇳',
        unicode: 'U+1F1F8 U+1F1F3',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg',
        countryCode: '+221'
    },
    {
        name: 'Somalia',
        code: 'SO',
        emoji: '🇸🇴',
        unicode: 'U+1F1F8 U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg',
        countryCode: '+252'
    },
    {
        name: 'Suriname',
        code: 'SR',
        emoji: '🇸🇷',
        unicode: 'U+1F1F8 U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg',
        countryCode: '+597'
    },
    {
        name: 'South Sudan',
        code: 'SS',
        emoji: '🇸🇸',
        unicode: 'U+1F1F8 U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg',
        countryCode: '+211'
    },
    {
        name: 'São Tomé & Príncipe',
        code: 'ST',
        emoji: '🇸🇹',
        unicode: 'U+1F1F8 U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg',
        countryCode: '+239'
    },
    {
        name: 'El Salvador',
        code: 'SV',
        emoji: '🇸🇻',
        unicode: 'U+1F1F8 U+1F1FB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg',
        countryCode: '+503'
    },
    {
        name: 'Sint Maarten',
        code: 'SX',
        emoji: '🇸🇽',
        unicode: 'U+1F1F8 U+1F1FD',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg',
        countryCode: '+721'
    },
    {
        name: 'Syria',
        code: 'SY',
        emoji: '🇸🇾',
        unicode: 'U+1F1F8 U+1F1FE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg',
        countryCode: '+963'
    },
    {
        name: 'Eswatini',
        code: 'SZ',
        emoji: '🇸🇿',
        unicode: 'U+1F1F8 U+1F1FF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg',
        countryCode: '+268'
    },
    {
        name: 'Tristan da Cunha',
        code: 'TA',
        emoji: '🇹🇦',
        unicode: 'U+1F1F9 U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg',
        countryCode: '+290'
    },
    {
        name: 'Turks & Caicos Islands',
        code: 'TC',
        emoji: '🇹🇨',
        unicode: 'U+1F1F9 U+1F1E8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg',
        countryCode: '+1649'
    },
    {
        name: 'Chad',
        code: 'TD',
        emoji: '🇹🇩',
        unicode: 'U+1F1F9 U+1F1E9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg',
        countryCode: '+235'
    },
    {
        name: 'Togo',
        code: 'TG',
        emoji: '🇹🇬',
        unicode: 'U+1F1F9 U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg',
        countryCode: '+228'
    },
    {
        name: 'Thailand',
        code: 'TH',
        emoji: '🇹🇭',
        unicode: 'U+1F1F9 U+1F1ED',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg',
        countryCode: '+66'
    },
    {
        name: 'Tajikistan',
        code: 'TJ',
        emoji: '🇹🇯',
        unicode: 'U+1F1F9 U+1F1EF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg',
        countryCode: '+992'
    },
    {
        name: 'Tokelau',
        code: 'TK',
        emoji: '🇹🇰',
        unicode: 'U+1F1F9 U+1F1F0',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg',
        countryCode: '+690'
    },
    {
        name: 'Timor-Leste',
        code: 'TL',
        emoji: '🇹🇱',
        unicode: 'U+1F1F9 U+1F1F1',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg',
        countryCode: '+670'
    },
    {
        name: 'Turkmenistan',
        code: 'TM',
        emoji: '🇹🇲',
        unicode: 'U+1F1F9 U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg',
        countryCode: '+993'
    },
    {
        name: 'Tunisia',
        code: 'TN',
        emoji: '🇹🇳',
        unicode: 'U+1F1F9 U+1F1F3',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg',
        countryCode: '+216'
    },
    {
        name: 'Tonga',
        code: 'TO',
        emoji: '🇹🇴',
        unicode: 'U+1F1F9 U+1F1F4',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg',
        countryCode: '+676'
    },
    {
        name: 'Turkey',
        code: 'TR',
        emoji: '🇹🇷',
        unicode: 'U+1F1F9 U+1F1F7',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg',
        countryCode: '+90'
    },
    {
        name: 'Trinidad & Tobago',
        code: 'TT',
        emoji: '🇹🇹',
        unicode: 'U+1F1F9 U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg',
        countryCode: '+1868'
    },
    {
        name: 'Tuvalu',
        code: 'TV',
        emoji: '🇹🇻',
        unicode: 'U+1F1F9 U+1F1FB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg',
        countryCode: '+688'
    },
    {
        name: 'Taiwan',
        code: 'TW',
        emoji: '🇹🇼',
        unicode: 'U+1F1F9 U+1F1FC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg',
        countryCode: '+886'
    },
    {
        name: 'Tanzania',
        code: 'TZ',
        emoji: '🇹🇿',
        unicode: 'U+1F1F9 U+1F1FF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg',
        countryCode: '+255'
    },
    {
        name: 'Ukraine',
        code: 'UA',
        emoji: '🇺🇦',
        unicode: 'U+1F1FA U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg',
        countryCode: '+380'
    },
    {
        name: 'Uganda',
        code: 'UG',
        emoji: '🇺🇬',
        unicode: 'U+1F1FA U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg',
        countryCode: '+256'
    },
    {
        name: 'United States',
        code: 'US',
        emoji: '🇺🇸',
        unicode: 'U+1F1FA U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg',
        countryCode: '+1'
    },
    {
        name: 'Uruguay',
        code: 'UY',
        emoji: '🇺🇾',
        unicode: 'U+1F1FA U+1F1FE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg',
        countryCode: '+598'
    },
    {
        name: 'Uzbekistan',
        code: 'UZ',
        emoji: '🇺🇿',
        unicode: 'U+1F1FA U+1F1FF',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg',
        countryCode: '+998'
    },
    {
        name: 'Vatican City',
        code: 'VA',
        emoji: '🇻🇦',
        unicode: 'U+1F1FB U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg',
        countryCode: '+379'
    },
    {
        name: 'St. Vincent & Grenadines',
        code: 'VC',
        emoji: '🇻🇨',
        unicode: 'U+1F1FB U+1F1E8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg',
        countryCode: '+1784'
    },
    {
        name: 'Venezuela',
        code: 'VE',
        emoji: '🇻🇪',
        unicode: 'U+1F1FB U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg',
        countryCode: '+58'
    },
    {
        name: 'British Virgin Islands',
        code: 'VG',
        emoji: '🇻🇬',
        unicode: 'U+1F1FB U+1F1EC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg',
        countryCode: '+1284'
    },
    {
        name: 'U.S. Virgin Islands',
        code: 'VI',
        emoji: '🇻🇮',
        unicode: 'U+1F1FB U+1F1EE',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg',
        countryCode: '+1340'
    },
    {
        name: 'Vietnam',
        code: 'VN',
        emoji: '🇻🇳',
        unicode: 'U+1F1FB U+1F1F3',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg',
        countryCode: '+84'
    },
    {
        name: 'Vanuatu',
        code: 'VU',
        emoji: '🇻🇺',
        unicode: 'U+1F1FB U+1F1FA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg',
        countryCode: '+678'
    },
    {
        name: 'Wallis & Futuna',
        code: 'WF',
        emoji: '🇼🇫',
        unicode: 'U+1F1FC U+1F1EB',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg',
        countryCode: '+681'
    },
    {
        name: 'Samoa',
        code: 'WS',
        emoji: '🇼🇸',
        unicode: 'U+1F1FC U+1F1F8',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg',
        countryCode: '+685'
    },
    {
        name: 'Kosovo',
        code: 'XK',
        emoji: '🇽🇰',
        unicode: 'U+1F1FD U+1F1F0',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg',
        countryCode: '+383'
    },
    {
        name: 'Yemen',
        code: 'YE',
        emoji: '🇾🇪',
        unicode: 'U+1F1FE U+1F1EA',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg',
        countryCode: '+967'
    },
    {
        name: 'Mayotte',
        code: 'YT',
        emoji: '🇾🇹',
        unicode: 'U+1F1FE U+1F1F9',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg',
        countryCode: '+262'
    },
    {
        name: 'South Africa',
        code: 'ZA',
        emoji: '🇿🇦',
        unicode: 'U+1F1FF U+1F1E6',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg',
        countryCode: '+27'
    },
    {
        name: 'Zambia',
        code: 'ZM',
        emoji: '🇿🇲',
        unicode: 'U+1F1FF U+1F1F2',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg',
        countryCode: '+260'
    },
    {
        name: 'Zimbabwe',
        code: 'ZW',
        emoji: '🇿🇼',
        unicode: 'U+1F1FF U+1F1FC',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg',
        countryCode: '+263'
    },
    {
        name: 'England',
        code: 'ENGLAND',
        emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg',
        countryCode: '+44'
    },
    {
        name: 'Scotland',
        code: 'SCOTLAND',
        emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg',
        countryCode: '+44'
    },
    {
        name: 'Wales',
        code: 'WALES',
        emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
        unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F',
        image: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg',
        countryCode: '+44'
    }*/
];

export default countries;
