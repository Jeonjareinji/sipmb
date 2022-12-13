<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2"><?php echo !empty($title) ? $title : null ?></h1>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div id="pendaftar"></div>
        </div>
    </div>
</main>
<script>
    getGrafikColumn('pendaftar', <?= $grafik5 ?>, 'Grafik Pendapatan dari Masing-masing Bank');

    function getGrafikColumn(selector, data, title) {
       
        Highcharts.chart(selector, {
        chart: {
        type: 'column'
        },
        title: {
            text: title
        },
        subtitle: {
        text: 'Total Pendapatan : Rp. 98.400.000'
        },
        xAxis: {
            categories: ['BCA', 'Mandiri', 'BRI', 'BNI']
        },
        yAxis: {
        title: {
            text: 'Total Pendapatan'
        }},
        credits: {
            enabled: false
        },
        series: [{
            name: 'Pendapatan',
            data: [26400000, 24300000, 26250000, 21450000]
        }]
    });
  }
</script>