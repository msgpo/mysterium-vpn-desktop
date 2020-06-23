/**
 * Copyright (c) 2020 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const countryNames: { [key: string]: string } = Object.freeze({
    af: "Afghanistan",
    al: "Albania",
    dz: "Algeria",
    as: "American Samoa",
    ad: "Andorra",
    ao: "Angola",
    ai: "Anguilla",
    aq: "Antarctica",
    ag: "Antigua and Barbuda",
    ar: "Argentina",
    am: "Armenia",
    aw: "Aruba",
    au: "Australia",
    at: "Austria",
    az: "Azerbaijan",
    bs: "Bahamas",
    bh: "Bahrain",
    bd: "Bangladesh",
    bb: "Barbados",
    by: "Belarus",
    be: "Belgium",
    bz: "Belize",
    bj: "Benin",
    bm: "Bermuda",
    bt: "Bhutan",
    bo: "Bolivia",
    ba: "Bosnia and Herzegovina",
    bw: "Botswana",
    br: "Brazil",
    vg: "British Virgin Islands",
    bn: "Brunei",
    bg: "Bulgaria",
    bf: "Burkina Faso",
    bi: "Burundi",
    kh: "Cambodia",
    cm: "Cameroon",
    ca: "Canada",
    cv: "Cape Verde",
    ky: "Cayman Islands",
    cf: "Central African Republic",
    td: "Chad",
    cl: "Chile",
    cn: "China",
    cx: "Christmas Island",
    cc: "Cocos (Keeling) Islands",
    co: "Colombia",
    km: "Comoros",
    ck: "Cook Islands",
    cr: "Costa Rica",
    hr: "Croatia",
    cu: "Cuba",
    cw: "Curaçao",
    cy: "Cyprus",
    cz: "Czech Republic",
    cd: "DR Congo",
    dk: "Denmark",
    dj: "Djibouti",
    dm: "Dominica",
    do: "Dominican Republic",
    ec: "Ecuador",
    eg: "Egypt",
    sv: "El Salvador",
    gq: "Equatorial Guinea",
    er: "Eritrea",
    ee: "Estonia",
    et: "Ethiopia",
    fk: "Falkland Islands",
    fo: "Faroe Islands",
    fj: "Fiji",
    fi: "Finland",
    fr: "France",
    pf: "French Polynesia",
    tf: "French Southern and Antarctic Lands",
    ga: "Gabon",
    gm: "Gambia",
    ge: "Georgia",
    de: "Germany",
    gh: "Ghana",
    gi: "Gibraltar",
    gr: "Greece",
    gl: "Greenland",
    gd: "Grenada",
    gu: "Guam",
    gt: "Guatemala",
    gg: "Guernsey",
    gn: "Guinea",
    gw: "Guinea-Bissau",
    gy: "Guyana",
    ht: "Haiti",
    hn: "Honduras",
    hk: "Hong Kong",
    hu: "Hungary",
    is: "Iceland",
    in: "India",
    id: "Indonesia",
    ir: "Iran",
    iq: "Iraq",
    ie: "Ireland",
    im: "Isle of Man",
    il: "Israel",
    it: "Italy",
    jm: "Jamaica",
    jp: "Japan",
    je: "Jersey",
    jo: "Jordan",
    kz: "Kazakhstan",
    ke: "Kenya",
    ki: "Kiribati",
    xk: "Kosovo",
    kw: "Kuwait",
    kg: "Kyrgyzstan",
    la: "Laos",
    lv: "Latvia",
    lb: "Lebanon",
    ls: "Lesotho",
    lr: "Liberia",
    ly: "Libya",
    li: "Liechtenstein",
    lt: "Lithuania",
    lu: "Luxembourg",
    mo: "Macau",
    mk: "Macedonia",
    mg: "Madagascar",
    mw: "Malawi",
    my: "Malaysia",
    mv: "Maldives",
    ml: "Mali",
    mt: "Malta",
    mh: "Marshall Islands",
    mq: "Martinique",
    mr: "Mauritania",
    mu: "Mauritius",
    yt: "Mayotte",
    mx: "Mexico",
    fm: "Micronesia",
    md: "Moldova",
    mc: "Monaco",
    mn: "Mongolia",
    me: "Montenegro",
    ms: "Montserrat",
    ma: "Morocco",
    mz: "Mozambique",
    mm: "Myanmar",
    na: "Namibia",
    nr: "Nauru",
    np: "Nepal",
    nl: "Netherlands",
    nc: "New Caledonia",
    nz: "New Zealand",
    ni: "Nicaragua",
    ne: "Niger",
    ng: "Nigeria",
    nu: "Niue",
    nf: "Norfolk Island",
    kp: "North Korea",
    mp: "Northern Mariana Islands",
    no: "Norway",
    om: "Oman",
    pk: "Pakistan",
    pw: "Palau",
    ps: "Palestine",
    pa: "Panama",
    pg: "Papua New Guinea",
    py: "Paraguay",
    pe: "Peru",
    ph: "Philippines",
    pn: "Pitcairn Islands",
    pl: "Poland",
    pt: "Portugal",
    pr: "Puerto Rico",
    qa: "Qatar",
    cg: "Republic of the Congo",
    ro: "Romania",
    ru: "Russia",
    rw: "Rwanda",
    re: "Réunion",
    bl: "Saint Barthélemy",
    kn: "Saint Kitts and Nevis",
    lc: "Saint Lucia",
    mf: "Saint Martin",
    vc: "Saint Vincent and the Grenadines",
    ws: "Samoa",
    sm: "San Marino",
    sa: "Saudi Arabia",
    sn: "Senegal",
    rs: "Serbia",
    sc: "Seychelles",
    sl: "Sierra Leone",
    sg: "Singapore",
    sx: "Sint Maarten",
    sk: "Slovakia",
    si: "Slovenia",
    sb: "Solomon Islands",
    so: "Somalia",
    za: "South Africa",
    gs: "South Georgia",
    kr: "South Korea",
    ss: "South Sudan",
    es: "Spain",
    lk: "Sri Lanka",
    sd: "Sudan",
    sr: "Suriname",
    sz: "Swaziland",
    se: "Sweden",
    ch: "Switzerland",
    sy: "Syria",
    tw: "Taiwan",
    tj: "Tajikistan",
    tz: "Tanzania",
    th: "Thailand",
    tg: "Togo",
    tk: "Tokelau",
    to: "Tonga",
    tt: "Trinidad and Tobago",
    tn: "Tunisia",
    tr: "Turkey",
    tm: "Turkmenistan",
    tc: "Turks and Caicos Islands",
    tv: "Tuvalu",
    ug: "Uganda",
    ua: "Ukraine",
    ae: "United Arab Emirates",
    gb: "United Kingdom",
    us: "United States",
    vi: "United States Virgin Islands",
    uy: "Uruguay",
    uz: "Uzbekistan",
    vu: "Vanuatu",
    va: "Vatican City",
    ve: "Venezuela",
    vn: "Vietnam",
    wf: "Wallis and Futuna",
    eh: "Western Sahara",
    ye: "Yemen",
    zm: "Zambia",
    zw: "Zimbabwe",
    ax: "Åland Islands",
})

export const countryName = (countryCode?: string): string => {
    countryCode = countryCode?.toLowerCase() ?? "unknown"
    const match = countryNames[countryCode]
    return match ?? "Unknown"
}

export const isUnknownCountry = (countryCode?: string): boolean => countryName(countryCode) === "Unknown"
