$(function(){
    function getIframeStats(){
        var stats;

        stats = "window.innerWidth: " + window.innerWidth + "<br/>";
        stats += "window.innerHeight: " + window.innerHeight + "<br/>";

        stats += "screen.width: " + screen.width + "<br/>";
        stats += "screen.height: " + screen.height + "<br/>";


        stats += "$(document).width(): " + $(document).width() + "<br>";
        stats += "$(document).height():" + $(document).height() + "<br>";

        stats += "document.body.clientWidth: " + document.body.clientWidth + "<br>";
        stats += "document.body.clientHeight: " + document.body.clientHeight + "<br>";

        stats += "document.body.offsetWidth: " + document.body.offsetWidth + "<br>";
        stats += "document.body.offsetHeight: " + document.body.offsetHeight + "<br>";

        stats += "document.body.scrollWidth: " + document.body.scrollWidth + "<br>";
        stats += "document.body.scrollHeight: " + document.body.scrollHeight + "<br>";

        stats += "document.documentElement.clientWidth: " + document.documentElement.clientWidth + "<br>";
        stats += "document.documentElement.clientHeight: " + document.documentElement.clientHeight + "<br>";

        stats += "document.documentElement.offsetWidth: " + document.documentElement.offsetWidth + "<br>";
        stats += "document.documentElement.offsetHeight: " + document.documentElement.offsetHeight + "<br>";


        stats += "document.documentElement.scrollWidth: " + document.documentElement.scrollWidth + "<br>";
        stats += "document.documentElement.scrollHeight: " + document.documentElement.scrollHeight + "<br>";

        return stats;
    }

    $('.iframe1-info').html(getIframeStats())


});