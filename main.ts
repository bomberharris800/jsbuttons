basic.forever(function () {
	
})
input.onButtonPressed(Button.A,  () => {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, () => {
basic.showIcon(IconNames.Sad)    
})
input.onButtonPressed(Button.AB, () => {
basic.showIcon(IconNames.Asleep)    
})