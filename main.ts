controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += 3
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += -3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jump = 1
})
let jump = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
let G = 0.5
let V = -10
forever(function () {
    if (jump == 1) {
        V = V + G
        mySprite.y += V
    }
    if (mySprite.y > 100) {
        jump = 0
        V = -10
    }
})
