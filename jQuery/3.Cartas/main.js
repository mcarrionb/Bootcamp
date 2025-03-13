$("#card").hover(() =>{
    let side = $("#card").attr("src")
    console.log(side)
    
    if(side.includes("back")){
        $("#card").attr("src","img/front.png")
    }
    else if(side.includes("front")){
        $("#card").attr("src","img/back.png")
    }
})