$(function(){
    function getStats(){
        var stats;

        stats = "window.innerHeight: " + window.innerHeight + "<br/>";
        stats += "window.innerWidth: " + window.innerWidth + "<br/>";

        stats += "device.height: " + window.innerHeight + "<br/>";
        stats += "devide.width: " + window.innerWidth + "<br/>";

        return stats;
    }

    $('.info').html(getStats())


});