$("#interruptor").click(() => {
    let estado = $("#interruptor").attr("src");
    console.log(estado);

    if(estado.includes("off")){
        $("#bombilla").attr("src","img/on.jpg");
        $("#interruptor").attr("src","img/bon.jpg");
    }
    else if(estado.includes("on")){
        $("#bombilla").attr("src","img/off.jpg");
        $("#interruptor").attr("src","img/boff.jpg");
    }
})