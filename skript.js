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
    
];

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
            [0, '#EFEFFF'],
            [0.5, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.5).get()]
        ]
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
                default:
                    countryname = this.point.name;
            }
            return '<b>' + this.series.name + '</b><br>' +
                                'Země: ' + countryname + '<br>' +
                                'Index: ' + this.point.value;
        }
    },
    series: [{
        data: data,
        mapData: Highcharts.maps["custom/world"],
        name: 'Democracy Index',
        dataLabels: {
            enabled: false
        }
    }, {
        type: 'mapline',
        name: "Separators",
        data: Highcharts.geojson(Highcharts.maps["custom/world"], 'mapline'),
        nullColor: 'gray',
        showInLegend: false,
        enableMouseTracking: false
    }]
});
