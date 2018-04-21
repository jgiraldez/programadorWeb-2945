var classvalue = 0
var counter = 0

var inputTextNodes = $('.square')

inputTextNodes.click(function () {
    if(counter >= 9) {
        inputTextNodes.removeClass('circle').removeClass('cross')
        counter = 0
    } 
        
    if (classvalue === 0) {
            $(this).addClass('circle')
            classvalue = 1
            counter++
        } else {
            $(this).addClass('cross')   
            classvalue = 0     
            counter++
    }

})

