var data = [
    ['no', 9.87],
    ['is', 9.58],
    ['se', 9.39],
    ['nz', 9.26],
    ['dk', 9.22],
    ['ie', 9.15],
    ['ca', 9.15],
    ['au', 9.09],
    ['fi', 9.03],
    ['ch', 9.03],

    ['nl', 8.89],
    ['lu', 8.81],
    ['de', 8.61],
    ['gb', 8.53],
    ['at', 8.42],
    ['mu', 8.22],
    ['mt', 8.15],
    ['uy', 8.12],
    ['es', 8.08],

    ['kr', 8.00],
    ['us', 7.98],
    ['it', 7.98],
    ['jp', 7.88],
    ['cv', 7.88],
    ['cr', 7.88],
    ['cl', 7.84],
    ['pt', 7.84],
    ['bw', 7.81],
    ['fr', 7.80],
    ['ee', 7.79],
    ['il', 7.79],
    ['be', 7.78],
    ['tw', 7.73],
    ['cz', 7.62],
    ['cy', 7.59],
    ['si', 7.50],
    ['lt', 7.41],
    ['gr', 7.29],
    ['jm', 7.29],
    ['lv', 7.25],
    ['za', 7.24],
    ['in', 7.23],
    ['tl', 7.19],
    ['sk', 7.16],
    ['pa', 7.08],
    ['tt', 7.04],
    ['bg', 7.03],

    ['ar', 6.96],
    ['br', 6.86],
    ['sr', 6.76],
    ['ph', 6.71],
    ['gh', 6.69],
    ['pl', 6.67],
    ['co', 6.67],
    ['do', 6.66],
    ['ls', 6.64],
    ['hu', 6.64],
    ['hr', 6.63],
    ['my', 6.54],
    ['mn', 6.50],
    ['pe', 6.49],
    ['lk', 6.48],
    ['gy', 6.46],
    ['ro', 6.44],
    ['sv', 6.43],
    ['rs', 6.41],
    ['mx', 6.41],
    ['id', 6.39],
    ['tn', 6.32],
    ['sg', 6.32],
    ['hk', 6.31],
    ['na', 6.31],
    ['py', 6.31],
    ['sn', 6.15],
    ['pg', 6.03],
    ['ec', 6.02],

    ['al', 5.98],
    ['md', 5.94],
    ['ge', 5.93],
    ['gt', 5.86],
    ['fj', 5.85],
    ['hn', 5.72],
    ['ua', 5.69],
    ['me', 5.69],
    ['zm', 5.68],
    ['ml', 5.64],
    ['bj', 5.61],
    ['mk', 5.57],
    ['bo', 5.49],
    ['mw', 5.49],
    ['tz', 5.47],
    ['bd', 5.43],
    ['lr', 5.23],
    ['np', 5.18],
    ['ke', 5.11],
    ['kg', 5.11],
    ['mg', 5.11],
    ['ug', 5.09],
    ['bt', 5.08],

    ['tr', 4.88],
    ['ma', 4.87],
    ['ba', 4.87],
    ['bf', 4.75],
    ['lb', 4.72],
    ['sl', 4.66],
    ['ni', 4.66],
    ['th', 4.63],
    ['we', 4.46],
    ['ng', 4.44],
    ['pk', 4.26],
    ['am', 4.11],
    ['ir', 4.09],
    ['gm', 4.06],
    ['ht', 4.03],
    ['mz', 4.02],

    ['ci', 3.93],
    ['jo', 3.87],
    ['ve', 3.87],
    ['kw', 3.85],
    ['mm', 3.83],
    ['mr', 3.82],
    ['ne', 3.76],
    ['km', 3.71],
    ['kh', 3.63],
    ['ao', 3.62],
    ['ga', 3.61],
    ['cm', 3.61],
    ['dz', 3.56],
    ['et', 3.42],
    ['eg', 3.36],
    ['cu', 3.31],
    ['cg', 3.25],
    ['qa', 3.19],
    ['rw', 3.19],
    ['ru', 3.17],
    ['zw', 3.16],
    ['gn', 3.14],
    ['by', 3.13],
    ['cn', 3.10],
    ['vn', 3.08],
    ['kz', 3.06],
    ['tg', 3.05],
    ['om', 3.04],
    ['sz', 3.03],

    ['dj', 2.76],
    ['bh', 2.71],
    ['ae', 2.69],
    ['az', 2.65],
    ['af', 2.55],
    ['ir', 2.45],
    ['er', 2.37],
    ['la', 2.37],
    ['bi', 2.33],
    ['ly', 2.32],
    ['sd', 2.15],
    ['ye', 2.07],

    ['gw', 1.98],
    ['uz', 1.95],
    ['sa', 1.93],
    ['tj', 1.93],
    ['gq', 1.81],
    ['tm', 1.72],
    ['cd', 1.61],
    ['cf', 1.52],
    ['td', 1.50],
    ['sy', 1.43],
    ['kp', 1.08],
    ];


Highcharts.chart('graf', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Index demokracie ve vybraných zemích'
    },
    xAxis: {
        categories: ["Norsko", "Kanada", "Německo", "Velká Británie",
         "Rakousko", "Španělsko", "USA", "Itálie", "Izrael", "Česko",
         "Řecko", "Slovensko", "Polsko", "Maďarsko", "Ukrajina", "Turecko",
         "Venezuela", "Egypt", "Kuba", "Rusko", "Čína", "Irán", "Saúdská Arábie", "Sýrie", "Severní Korea"]
    },
    yAxis: {
        max: 10,
        title: {
            text: null
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Index demokracie',
        data: [9.87, 9.15, 8.61, 8.53, 8.42, 8.08, 7.98, 7.98, 7.79,
         7.62, 7.29, 7.16, 6.67, 6.64, 5.69, 4.88, 3.87, 3.36, 3.31,
         3.17, 3.10, 2.45, 1.93, 1.43, 1.08]
    }]
});

Highcharts.chart('line', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Index demokracie v některých zemích v průběhu let'
    },
    xAxis: {
        categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017]
    },
    yAxis: {
        min: 6,
        max: 10,    
        title: {
            text: null
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Česko',
        data: [8.19, 8.19, 8.06, 7.94, 7.94, 7.82, 7.62]
    }, {
        name: 'Slovensko',
        data: [7.35, 7.35, 7.35, 7.35, 7.29, 7.29, 7.16]
    }, {
        name: 'Polsko',
        data: [7.12, 7.12, 7.12, 7.47, 7.09, 6.83, 6.67]
    }, {
        name: 'Maďarsko',
        data: [7.04, 6.96, 6.96, 6.90, 6.84, 6.72, 6.64]
    }, {
        name: 'USA',
        data: [8.11, 8.11, 8.11, 8.11, 8.05, 7.98, 7.98]
    }, {
        name: 'Něměcko',
        data: [8.34, 8.34, 8.31, 8.64, 8.64, 8.63, 8.61]
    }, {
        name: 'Švédsko',
        data: [9.50, 9.73, 9.73, 9.73, 9.45, 9.39, 9.39]
    }]
});

Highcharts.mapChart("container", {
    title: {
        text: null
    },

    mapNavigation: {
        enabled: true
    },

    colorAxis: {
        min: 0,
        stops: [ 
            [0, '#8B0000'],
            [0.5, '#FFFACD'],
            [0.9, '#006400']
        ]
    },
    credits: {
        text: "Zdroj dat: The Economist Intelligence Unit",
        mapText: "",
        href: "https://www.eiu.com/topic/democracy-index"
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'bottom'
    },
    tooltip: {
        formatter: function () {    
            var countryname;
            switch(this.point.name) {
                case "Norway":
                    countryname = "Norsko";
                    break;
                case "Iceland":
                    countryname = "Island";
                    break;
                case "Sweden":
                    countryname = "Švédsko";
                    break;
                case "New Zealand":
                    countryname = "Nový Zéland";
                    break;
                case "Denmark":
                    countryname = "Dánsko";
                    break;
                case "Ireland":
                    countryname = "Irsko";
                    break;
                case "Canada":
                    countryname = "Kanada";
                    break;            
                case "Australia":
                    countryname = "Austrálie";
                    break;
                case "Finland":
                    countryname = "Finsko";
                    break;
                case "Switzerland":
                    countryname = "Švýcarsko";
                    break;
                case "Netherlands":
                    countryname = "Nizozemsko";
                    break;
                case "Luxembourg":
                    countryname = "Lucembursk";
                    break;
                case "Germany":
                    countryname = "Německo";
                    break;
                case "United Kingdom":
                    countryname = "Velká Británie";
                    break;
                case "Austria":
                    countryname = "Rakousko";
                    break;
                case "Mauritius":
                    countryname = "Mauricius";
                    break;
                case "Spain":
                    countryname = "Španělsko";
                    break;
                case "South Korea":
                    countryname = "Jižní Korea";
                    break;
                case "United States of America":
                    countryname = "Spojené státy americké";
                    break;
                case "Italy":
                    countryname = "Itálie";
                    break;
                case "Japan":
                    countryname = "Japonsko";
                    break;
                case "Cape Verde":
                    countryname = "Kapverdy";
                    break;
                case "Costa Rica":
                    countryname = "Kostarika";
                    break;
                case "Portugal":
                    countryname = "Portugalsko";
                    break;
                case "France":
                    countryname = "Francie";
                    break;
                case "Estonia":
                    countryname = "Estonsko";
                    break;
                case "Israel":
                    countryname = "Izrael";
                    break;
                case "Belgium":
                    countryname = "Belgie";
                    break;
                case "Taiwan":
                    countryname = "Tchaj-wan";
                    break;
                case "Czech Republic":
                    countryname = "Česká republika";
                    break;
                case "Lithuania":
                    countryname = "Litva";
                    break;
                case "Greece":
                    countryname = "Řecko";
                    break;
                case "Jamaica":
                    countryname = "Jamajka";
                    break;
                case "Latvia":
                    countryname = "Lotyšsko";
                    break;
                case "India":
                    countryname = "Indie";
                    break;
                case "East Timor":
                    countryname = "Východní Timor";
                    break;
                case "Slovakia":
                    countryname = "Slovensko";
                    break;
                case "Trinidad and Tobago":
                    countryname = "Trinidad a Tobago";
                    break;
                case "Bulgaria":
                    countryname = "Bulharsko";
                    break;
                case "Brazil":
                    countryname = "Brazílie";
                    break;
                case "Suriname":
                    countryname = "Surinam";
                    break;
                case "Philippines":
                    countryname = "Filipíny";
                    break;
                case "Poland":
                    countryname = "Polsko";
                    break;
                case "Colombia":
                    countryname = "Kolumbie";
                    break;
                case "Dominican Republic":
                    countryname = "Dominikánská republika";
                    break;
                case "Hungary":
                    countryname = "Maďarsko";
                    break;
                case "Croatia":
                    countryname = "Chorvatsko";
                    break;
                case "Malaysia":
                    countryname = "Malajsie";
                    break;
                case "Mongolia":
                    countryname = "Mongolsko";
                    break;
                case "Romania":
                    countryname = "Rumunsko";
                    break;
                case "El Salvador":
                    countryname = "Salvador";
                    break;
                case "Republic of Serbia":
                    countryname = "Srbsko";
                    break;
                case "Mexico":
                    countryname = "Mexiko";
                    break;
                case "Indonesia":
                    countryname = "Indonésie";
                    break;
                case "Tunisia":
                    countryname = "Tunisko";
                    break;
                case "Singapore":
                    countryname = "Singapur";
                    break;
                case "Namibia":
                    countryname = "Namibie";
                    break;
                case "Papua New Guinea":
                    countryname = "Papua-Nová Guinea";
                    break;
                case "Ecuador":
                    countryname = "Ekvádor";
                    break;
                case "Albania":
                    countryname = "Albánie";
                    break;
                case "Moldova":
                    countryname = "Moldavsko";
                    break;
                case "Georgia":
                    countryname = "Gruzie";
                    break;
                case "Fiji":
                    countryname = "Fidži";
                    break;
                case "Ukraine":
                    countryname = "Ukrajina";
                    break;
                case "Montenegro":
                    countryname = "Černá Hora";
                    break;
                case "Zambia":
                    countryname = "Zambie";
                    break;
                case "Macedonia":
                    countryname = "Makedonie";
                    break;
                case "Bolivia":
                    countryname = "Bolívie";
                    break;
                case "United Republic of Tanzania":
                    countryname = "Tanzanie";
                    break;
                case "Bangladesh":
                    countryname = "Bangladéš";
                    break;
                case "Liberia":
                    countryname = "Libérie";
                    break;
                case "Nepal":
                    countryname = "Nepál";
                    break;
                case "Kenya":
                    countryname = "Keňa";
                    break;
                case "Kyrgyzstan":
                    countryname = "Kyrgyzstán";
                    break;
                case "Madagascar":
                    countryname = "Madagaskar";
                    break;
                case "Bhutan":
                    countryname = "Bhútán";
                    break;
                case "Turkey":
                    countryname = "Turecko";
                    break;
                case "Morocco":
                    countryname = "Maroko";
                    break;
                case "Bosnia and Herzegovina":
                    countryname = "Bosna a Hercegovina";
                    break;
                case "Lebanon":
                    countryname = "Libanon";
                    break;
                case "Nicaragua":
                    countryname = "Nikaragua";
                    break;
                case "Thailand":
                    countryname = "Thajsko";
                    break;
                case "West Bank":
                    countryname = "Palestina";
                    break;
                case "Nigeria":
                    countryname = "Nigérie";
                    break;
                case "Pakistan":
                    countryname = "Pákistán";
                    break;
                case "Armenia":
                    countryname = "Arménie";
                    break;
                case "Iraq":
                    countryname = "Irák";
                    break;
                case "Gambia":
                    countryname = "Gambie";
                    break;
                case "Mozambique":
                    countryname = "Mosambik";
                    break;
                case "Ivory Coast":
                    countryname = "Pobřeží slonoviny";
                    break;
                case "Jordan":
                    countryname = "Jordánsko";
                    break;
                case "Kuwait":
                    countryname = "Kuvajt";
                    break;
                case "Mauritania":
                    countryname = "Mauritánie";
                    break;
                case "Comoros":
                    countryname = "Komory";
                    break;
                case "Cambodia":
                    countryname = "Kambodža";
                    break;
                case "Cameroon":
                    countryname = "Kamerun";
                    break;
                case "Algeria":
                    countryname = "Alžírsko";
                    break;
                case "Ethiopia":
                    countryname = "Etiopie";
                    break;
                case "Cuba":
                    countryname = "Kuba";
                    break;
                case "Republic of Congo":
                    countryname = "Kongo";
                    break;
                case "Qatar":
                    countryname = "Katar";
                    break;
                case "Russia":
                    countryname = "Rusko";
                    break;
                case "Belarus":
                    countryname = "Bělorusko";
                    break;
                case "China":
                    countryname = "Čína";
                    break;
                case "Kazakhstan":
                    countryname = "Kazachstán";
                    break;
                case "Oman":
                    countryname = "Omán";
                    break;
                case "Swaziland":
                    countryname = "Svazijsko";
                    break;
                case "Djibouti":
                    countryname = "Džibuti";
                    break;
                case "Bahrain":
                    countryname = "Bahrajn";
                    break;
                case "United Arab Emirates":
                    countryname = "Spojené arabské emiráty";
                    break;
                case "Azerbaijan":
                    countryname = "Azerbajdžán";
                    break;
                case "Afghanistan":
                    countryname = "Afghánistán";
                    break;
                case "Iran":
                    countryname = "Irán";
                    break;
                case "Libya":
                    countryname = "Libye";
                    break;
                case "Sudan":
                    countryname = "Súdán";
                    break;
                case "Yemen":
                    countryname = "Jemen";
                    break;
                case "Uzbekistan":
                    countryname = "Uzbekistán";
                    break;
                case "Saudi Arabia":
                    countryname = "Saúdská Arábie";
                    break;
                case "Tajikistan":
                    countryname = "Tádžikistán";
                    break;
                case "Equatorial Guinea":
                    countryname = "Rovníková Guinea";
                    break;
                case "Turkmenistan":
                    countryname = "Turkmenistán";
                    break;
                case "Democratic Republic of the Congo":
                    countryname = "Demokratická republika Kongo";
                    break;
                case "Central African Republic":
                    countryname = "Středoafrická republika";
                    break;
                case "Chad":
                    countryname = "Čad";
                    break;
                case "Syria":
                    countryname = "Sýrie";
                    break;
                case "North Korea":
                    countryname = "Severní Korea";
                    break;
                default:
                    countryname = this.point.name;
            }
            return '<b>' + this.series.name + '</b><br>' +
                                'Země: ' + countryname + '<br>' +
                                'Index: ' + this.point.value.toString().replace(".",",");
        }
    },
    series: [{
        data: data,
        mapData: Highcharts.maps["custom/world-palestine"],
        name: 'Index demokracie',
        dataLabels: {
            enabled: false
        }
    }, {
        type: 'mapline',
        name: "Separators",
        data: Highcharts.geojson(Highcharts.maps["custom/world-palestine"], 'mapline'),
        nullColor: 'gray',
        showInLegend: false,
        enableMouseTracking: false
    }]
});
