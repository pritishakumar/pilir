$("#bg-but").on("click", function(evt){
    evt.preventDefault();
    if(!$("#bg-color").val()){
        return alert("Please fill in the blank!");
    };
    const $bgColor = $("#bg-color").val();
    $("body").css({"background-color": $bgColor, "background-image":""});
    $("#bg-grad1").val("");
    $("#bg-grad2").val("");
});

$("#bg-grad-but").on("click", function(evt){
    evt.preventDefault();
    if(!$("#bg-grad1").val() && !$("#bg-grad2").val()){
        return alert("Please fill in both blanks!");
    };
    const $grad1 = $("#bg-grad1").val();
    const $grad2 = $("#bg-grad2").val();
    $("body").css({"background-image":`linear-gradient(${$grad1}, ${$grad2})`,"background-color":""});
    $("#bg-color").val("");
});

$("#text-but").on("click", function(evt){
    evt.preventDefault();
    if(!$("#text-color").val()){
        return alert("Please fill in the blank!");
    };
    const $textColor = $("#text-color").val();
    $("main").css("color",$textColor);
});

$("#text-bg-but").on("click", function(evt){
    evt.preventDefault();
    if(!$("#text-bg").val()){
        return alert("Please fill in the blank!");
    };
    const $textbg = $("#text-bg").val();
    $("section").css("background-color",$textbg);
});

$("#font-size-but").on("click", function(evt){
    evt.preventDefault();
    if(!$("#font-size").val()){
        return alert("Please fill in the blank!");
    };
    const $fontSize = $("#font-size").val();
    $("section").css("font-size",$fontSize);
});

$("#font-family-but").on("click", function(evt){
    evt.preventDefault();
    if(!$("#font-family").val()){
        return alert("Please fill in the blank!");
    };
    const $fontFamily = $("#font-family").val();
    $("section").css("font-family",$fontFamily);
});