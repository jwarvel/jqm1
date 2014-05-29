$(function(){
    console.log('hey');
    $('#dateInput').on('change', function(){
        $('#dateValue').html(  $('#dateInput').val() );
    });
    $('#timeInput').on('change', function(){
        $('#timeValue').html( $('#timeInput').val() );
    });
    $('#fuelDatePicker').datepicker();
});