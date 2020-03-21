$(document).ready(function () {
    var hitCount = 0;

    $("#theRona").click(function () {
        hitCount++;
        $("#hits").text("Hit Count: " + hitCount);

        switch (hitCount) {
            case 5:
                changeImgSize(150);
                break;
            case 10:
                changeImgSize(100);
                break;
            case 15:
                changeImgSize(50);
                break;
            case 20:
                changeImgSize(0);
                $("#successText").text("Congrats, You cured the Coronavirus!For more info on how to help others, click here");
                break;
            default:
                break;

        }
    });

    function changeImgSize(size) {
        $("#theRona").width(size);
        $("#theRona").height(size);


    }

});