$(function() {
    
    $('input[name="daterange"]').daterangepicker({
        autoUpdateInput: false,
        opens: 'right',
        // locale: {
        //     cancelLabel: 'Clear'
        // }
    },function(start, end, label) {
      $('.dateRange').val(`${start.format('YYYY-MM-DD')} - ${end.format('YYYY-MM-DD')}`) 
    });
  });