$(function(){
    console.log('hey');

    // date time picker lauched via button

    $('#nativeDateInput').hide();
    $('#nativeTimeInput').hide();

    $('.changeDateBtn').on('click', function(){
        $('#nativeDateInput').focus();
    });

    $('.changeTimeBtn').on('click', function(){
        $('#nativeTimeInput').focus();
    });

    $('#nativeDateInput').on('change', function(){
        $('#nativeDateValue').html(  $('#nativeDateInput').val() );
    });

    $('#nativeTimeInput').on('change', function(){
        $('#nativeTimeValue').html( $('#nativeTimeInput').val() );
    });

    // date picker
    $('#dateInput').on('change', function(){
        $('#dateValue').html(  $('#dateInput').val() );
    });

    //time picker
    $('#timeInput').on('change', function(){
        $('#timeValue').html( $('#timeInput').val() );
    });

    //$('#fuelDatePicker').datepicker();

});