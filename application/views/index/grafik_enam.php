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
    getGrafikColumn('pendaftar', <?= $grafik6 ?>, 'Grafik Jumlah Total yang Sudah bayar dan yang Belum berdasarkan Masing-masing Bank');

    function getGrafikColumn(selector, data, title) {

            Highcharts.chart(selector, {
        chart: {
        type: 'column'
        },
        title: {
            text: title
        },
        xAxis: {
            categories: ['BCA', 'Mandiri', 'BRI', 'BNI']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Sudah',
            data: [145, 149, 150, 155]
        }, {
            name: 'Belum',
            data: [18, 21, 23, 26]
        }]
    });
 }
</script>