var person = "x",
    clickedArr = [],
    xClickedArr = [],
    allClickedArr = [],
    redWon = false,
    blueWon = false,
    uavgjort = false,
    listOfIds = ["en", "to", "tre", "fire", "fem", "seks", "syv", "atte", "ni"];

$(".rute").click(function () {
    trykke(this);
    if (person == "o") {
        if (redWon == false && blueWon == false && uavgjort == false) {
            randomClick();
        }
    }
});

function randomClick() {
    if (clickedArr.length >= 9) {
        return;
    }
    /*let randomNumber = Math.floor(Math.random() * 9);
      if (clickedArr.includes(listOfIds[randomNumber])) {
        randomClick();
      } else {
        $(`#${listOfIds[randomNumber]}`).click();
      }*/

    let rader = {
        enere: 0,
        toere: 0,
        treere: 0,
        alle: {
            enere: 0,
            toere: 0,
            treere: 0
        }
    };

    let kolonner = {
        enere: 0,
        toere: 0,
        treere: 0,
        alle: {
            enere: 0,
            toere: 0,
            treere: 0
        }
    };

    let skra = {
        ned: 0,
        opp: 0,
        alle: {
            ned: 0,
            opp: 0
        }
    };

    if ($("#en").hasClass("x")) {
        skra["ned"]++;
        skra["alle"]["ned"]++;
    }

    if ($("#ni").hasClass("x")) {
        skra["ned"]++;
        skra["alle"]["ned"]++;
    }

    if ($("#fem").hasClass("x")) {
        skra["opp"]++;
        skra["alle"]["opp"]++;
        skra["ned"]++;
        skra["alle"]["ned"]++;
    }

    if ($("#tre").hasClass("x")) {
        skra["opp"]++;
        skra["alle"]["opp"]++;
    }

    if ($("#syv").hasClass("x")) {
        skra["opp"]++;
        skra["alle"]["opp"]++;
    }

    if ($("#en").hasClass("o")) {
        skra["alle"]["ned"]++;
    }

    if ($("#ni").hasClass("o")) {
        skra["alle"]["ned"]++;
    }

    if ($("#fem").hasClass("o")) {
        skra["alle"]["ned"]++;
        skra["alle"]["opp"]++;
    }

    if ($("#tre").hasClass("o")) {
        skra["alle"]["opp"]++;
    }

    if ($("#syv").hasClass("o")) {
        skra["alle"]["opp"]++;
    }

    console.log('Skrå: ', skra);

    for (var i = 0; i < xClickedArr.length; i++) {
        let a = xClickedArr[i];

        if (a.kolonne == "1") {
            kolonner["enere"]++;
        } else if (a.kolonne == "2") {
            kolonner["toere"]++;
        } else if (a.kolonne == "3") {
            kolonner["treere"]++;
        }

        /*  ——  */

        if (a.rad == "1") {
            rader["enere"]++;
        } else if (a.rad == "2") {
            rader["toere"]++;
        } else if (a.rad == "3") {
            rader["treere"]++;
        }
    }

    for (var i = 0; i < allClickedArr.length; i++) {
        let a = allClickedArr[i];

        if (a.kolonne == "1") {
            kolonner["alle"]["enere"]++;
        } else if (a.kolonne == "2") {
            kolonner["alle"]["toere"]++;
        } else if (a.kolonne == "3") {
            kolonner["alle"]["treere"]++;
        }

        /*  ——  */

        if (a.rad == "1") {
            rader["alle"]["enere"]++;
        } else if (a.rad == "2") {
            rader["alle"]["toere"]++;
        } else if (a.rad == "3") {
            rader["alle"]["treere"]++;
        }
    }
    //console.log(kolonner);
    //console.log(rader);

    console.log("Kolonner: ", kolonner);
    console.log("Rader: ", rader);

    if (kolonner.alle.enere - kolonner.enere == 2 && kolonner.alle.enere !== 3) {
        if (clickedArr.includes(kolonne1[0])) {
            if (clickedArr.includes(kolonne1[1])) {
                $(`#${kolonne1[2]}`).click();
            } else {
                $(`#${kolonne1[1]}`).click();
            }
        } else {
            $(`#${kolonne1[0]}`).click();
        }
    } else if (kolonner.alle.toere - kolonner.toere == 2 && kolonner.alle.toere !== 3) {
        if (clickedArr.includes(kolonne2[0])) {
            if (clickedArr.includes(kolonne2[1])) {
                $(`#${kolonne2[2]}`).click();
            } else {
                $(`#${kolonne2[1]}`).click();
            }
        } else {
            $(`#${kolonne2[0]}`).click();
        }
    } else if (kolonner.alle.treere - kolonner.treere == 2 && kolonner.alle.treere !== 3) {
        if (clickedArr.includes(kolonne3[0])) {
            if (clickedArr.includes(kolonne3[1])) {
                $(`#${kolonne3[2]}`).click();
            } else {
                $(`#${kolonne3[1]}`).click();
            }
        } else {
            $(`#${kolonne3[0]}`).click();
        }
    } /*  ——  */
    else if (rader.alle.enere - rader.enere == 2 && rader.alle.enere !== 3) {
        if (clickedArr.includes(rad1[0])) {
            if (clickedArr.includes(rad1[1])) {
                $(`#${rad1[2]}`).click();
            } else {
                $(`#${rad1[1]}`).click();
            }
        } else {
            $(`#${rad1[0]}`).click();
        }
    } else if (rader.alle.toere - rader.toere == 2 && rader.alle.toere !== 3) {
        if (clickedArr.includes(rad2[0])) {
            if (clickedArr.includes(rad2[1])) {
                $(`#${rad2[2]}`).click();
            } else {
                $(`#${rad2[1]}`).click();
            }
        } else {
            $(`#${rad2[0]}`).click();
        }
    } else if (rader.alle.treere - rader.treere == 2 && rader.alle.treere !== 3) {
        if (clickedArr.includes(rad3[0])) {
            if (clickedArr.includes(rad3[1])) {
                $(`#${rad3[2]}`).click();
            } else {
                $(`#${rad3[1]}`).click();
            }
        } else {
            $(`#${rad3[0]}`).click();
        }
    } /*  ——  */
    else if (skra.alle.opp - skra.opp == 2 && skra.alle.opp !== 3) {
        if (clickedArr.includes(skraOpp[0])) {
            if (clickedArr.includes(skraOpp[1])) {
                $(`#${skraOpp[2]}`).click();
            } else {
                $(`#${skraOpp[1]}`).click();
            }
        } else {
            $(`#${skraOpp[0]}`).click();
        }
    } else if (skra.alle.ned - skra.ned == 2 && skra.alle.ned !== 3) {
        if (clickedArr.includes(skraNed[0])) {
            if (clickedArr.includes(skraNed[1])) {
                $(`#${skraNed[2]}`).click();
            } else {
                $(`#${skraNed[1]}`).click();
            }
        } else {
            $(`#${skraNed[0]}`).click();
        }
    } /*  ——  */
    else if (kolonner.enere == 2 && kolonner.alle.enere !== 3) {
        if (clickedArr.includes(kolonne1[0])) {
            if (clickedArr.includes(kolonne1[1])) {
                $(`#${kolonne1[2]}`).click();
            } else {
                $(`#${kolonne1[1]}`).click();
            }
        } else {
            $(`#${kolonne1[0]}`).click();
        }
    } else if (kolonner.toere == 2 && kolonner.alle.toere !== 3) {
        if (clickedArr.includes(kolonne2[0])) {
            if (clickedArr.includes(kolonne2[1])) {
                $(`#${kolonne2[2]}`).click();
            } else {
                $(`#${kolonne2[1]}`).click();
            }
        } else {
            $(`#${kolonne2[0]}`).click();
        }
    } else if (kolonner.treere == 2 && kolonner.alle.treere !== 3) {
        if (clickedArr.includes(kolonne3[0])) {
            if (clickedArr.includes(kolonne3[1])) {
                $(`#${kolonne3[2]}`).click();
            } else {
                $(`#${kolonne3[1]}`).click();
            }
        } else {
            $(`#${kolonne3[0]}`).click();
        }
    } /*  ——  */
    else if (rader.enere == 2 && rader.alle.enere !== 3) {
        if (clickedArr.includes(rad1[0])) {
            if (clickedArr.includes(rad1[1])) {
                $(`#${rad1[2]}`).click();
            } else {
                $(`#${rad1[1]}`).click();
            }
        } else {
            $(`#${rad1[0]}`).click();
        }
    } else if (rader.toere == 2 && rader.alle.toere !== 3) {
        if (clickedArr.includes(rad2[0])) {
            if (clickedArr.includes(rad2[1])) {
                $(`#${rad2[2]}`).click();
            } else {
                $(`#${rad2[1]}`).click();
            }
        } else {
            $(`#${rad2[0]}`).click();
        }
    } else if (rader.treere == 2 && rader.alle.treere !== 3) {
        if (clickedArr.includes(rad3[0])) {
            if (clickedArr.includes(rad3[1])) {
                $(`#${rad3[2]}`).click();
            } else {
                $(`#${rad3[1]}`).click();
            }
        } else {
            $(`#${rad3[0]}`).click();
        }
    } /*  ——  */
    else if (skra.opp == 2 && skra.alle.opp !== 3) {
        if (clickedArr.includes(skraOpp[0])) {
            if (clickedArr.includes(skraOpp[1])) {
                $(`#${skraOpp[2]}`).click();
            } else {
                $(`#${skraOpp[1]}`).click();
            }
        } else {
            $(`#${skraOpp[0]}`).click();
        }
    } else if (skra.ned == 2 && skra.alle.ned !== 3) {
        if (clickedArr.includes(skraNed[0])) {
            if (clickedArr.includes(skraNed[1])) {
                $(`#${skraNed[2]}`).click();
            } else {
                $(`#${skraNed[1]}`).click();
            }
        } else {
            $(`#${skraNed[0]}`).click();
        }
    } /*  ——  */
    else {
        let randomNumber = Math.floor(Math.random() * 9);
        if (clickedArr.includes(listOfIds[randomNumber])) {
            randomClick();
        } else {
            $(`#${listOfIds[randomNumber]}`).click();
        }
    }
}

var rad1 = ["en", "to", "tre"];
var rad2 = ["fire", "fem", "seks"];
var rad3 = ["syv", "atte", "ni"];

var kolonne1 = ["en", "fire", "syv"];
var kolonne2 = ["to", "fem", "atte"];
var kolonne3 = ["tre", "seks", "ni"];

var skraOpp = ["syv", "fem", "tre"];
var skraNed = ["en", "fem", "ni"];

function trykke(dette) {
    if ($(dette).hasClass("x") || $(dette).hasClass("o")) {
        return;
    }

    clickedArr.push($(dette).attr("id"));

    if (person == "x") {
        xClickedArr.push({
            id: $(dette).attr("id"),
            kolonne: $(dette).attr("kolonne"),
            rad: $(dette).attr("rad")
        });
        //console.log(xClickedArr);
    }

    allClickedArr.push({
        id: $(dette).attr("id"),
        kolonne: $(dette).attr("kolonne"),
        rad: $(dette).attr("rad")
    });

    /*  ——  */

    if (clickedArr.length >= 9 && !redWon && !blueWon) {
        uavgjort = true;
    }

    click(dette);

    /*  ——  */

    if (
        $("#en").hasClass("x") &&
        $("#to").hasClass("x") &&
        $("#tre").hasClass("x")
    ) {
        redWon = true;
        $(".brett").append('<div class="redLine lineRowOne"></div>');
    } else if (
        $("#fire").hasClass("x") &&
        $("#fem").hasClass("x") &&
        $("#seks").hasClass("x")
    ) {
        redWon = true;
        $(".brett").append('<div class="redLine lineRowTwo"></div>');
    } else if (
        $("#syv").hasClass("x") &&
        $("#atte").hasClass("x") &&
        $("#ni").hasClass("x")
    ) {
        redWon = true;
        $(".brett").append('<div class="redLine lineRowThree"></div>');
    } /*  ——  */
    else if (
        $("#en").hasClass("x") &&
        $("#fire").hasClass("x") &&
        $("#syv").hasClass("x")
    ) {
        redWon = true;
        $(".brett").append('<div class="redLine lineColumnOne"></div>');
    } else if (
        $("#to").hasClass("x") &&
        $("#fem").hasClass("x") &&
        $("#atte").hasClass("x")
    ) {
        redWon = true;
        $(".brett").append('<div class="redLine lineColumnTwo"></div>');
    } else if (
        $("#tre").hasClass("x") &&
        $("#seks").hasClass("x") &&
        $("#ni").hasClass("x")
    ) {
        redWon = true;
        $(".brett").append('<div class="redLine lineColumnThree"></div>');
    } /*  ——  */
    else if (
        $("#en").hasClass("x") &&
        $("#fem").hasClass("x") &&
        $("#ni").hasClass("x")
    ) {
        redWon = true;
        $(".brett").append('<div class="redLine lineBottomRight"></div>');
    } else if (
        $("#tre").hasClass("x") &&
        $("#fem").hasClass("x") &&
        $("#syv").hasClass("x")
    ) {
        redWon = true;
        $(".brett").append('<div class="redLine lineTopRight"></div>');
    } /*  —————————————————————————————  */
    else if (
        $("#en").hasClass("o") &&
        $("#to").hasClass("o") &&
        $("#tre").hasClass("o")
    ) {
        blueWon = true;
        $(".brett").append('<div class="blueLine lineRowOne"></div>');
    } else if (
        $("#fire").hasClass("o") &&
        $("#fem").hasClass("o") &&
        $("#seks").hasClass("o")
    ) {
        blueWon = true;
        $(".brett").append('<div class="blueLine lineRowTwo"></div>');
    } else if (
        $("#syv").hasClass("o") &&
        $("#atte").hasClass("o") &&
        $("#ni").hasClass("o")
    ) {
        blueWon = true;
        $(".brett").append('<div class="blueLine lineRowThree"></div>');
    } /*  ——  */
    else if (
        $("#en").hasClass("o") &&
        $("#fire").hasClass("o") &&
        $("#syv").hasClass("o")
    ) {
        blueWon = true;
        $(".brett").append('<div class="blueLine lineColumnOne"></div>');
    } else if (
        $("#to").hasClass("o") &&
        $("#fem").hasClass("o") &&
        $("#atte").hasClass("o")
    ) {
        blueWon = true;
        $(".brett").append('<div class="blueLine lineColumnTwo"></div>');
    } else if (
        $("#tre").hasClass("o") &&
        $("#seks").hasClass("o") &&
        $("#ni").hasClass("o")
    ) {
        blueWon = true;
        $(".brett").append('<div class="blueLine lineColumnThree"></div>');
    } /*  ——  */
    else if (
        $("#en").hasClass("o") &&
        $("#fem").hasClass("o") &&
        $("#ni").hasClass("o")
    ) {
        blueWon = true;
        $(".brett").append('<div class="blueLine lineBottomRight"></div>');
    } else if (
        $("#tre").hasClass("o") &&
        $("#fem").hasClass("o") &&
        $("#syv").hasClass("o")
    ) {
        blueWon = true;
        $(".brett").append('<div class="blueLine lineTopRight"></div>');
    }
    if (redWon == true || blueWon == true || uavgjort == true) {
        $(".restartButton").removeClass("hideButton").addClass("showButton");
        $(".div").addClass("blurPointerNone");
    }
    if (redWon == true) {
        $(".restartButton").addClass("colRed");
        $(".restartButton .whoWon").text("Rød Vant");
    } else if (blueWon == true) {
        $(".restartButton").addClass("colBlue");
        $(".restartButton .whoWon").text("Blå Vant");
    } else {
        $(".restartButton").addClass("colBlack");
        $(".restartButton .whoWon").text("Uavgjort");
    }

    if (redWon) {
        return;
    } else if (blueWon) {
        return;
    } else if (uavgjort) {
        return;
    }
}

function click(dette) {
    if (person == "x") {
        if ($(dette).hasClass("x") || $(dette).hasClass("o")) {
            return;
        }
        $(dette).addClass("x");
        person = "o";
    } else {
        if ($(dette).hasClass("x") || $(dette).hasClass("o")) {
            return;
        }
        $(dette).addClass("o");
        person = "x";
    }
}
