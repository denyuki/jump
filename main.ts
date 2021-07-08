function Grabity () {
    if (Gravity == 1) {
        if (VY < 5) {
            VY = VY + G
        }
        mySprite.y += VY
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.oceanDepths0)) {
        Gravity = 0
        VY = 0
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
        Gravity = 1
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    VY = -7
    Gravity = 1
})
let Gravity = 0
let VY = 0
let G = 0
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
G = 0.3
VY = 0
Gravity = 1
tiles.setTilemap(tilemap`レベル1`)
forever(function () {
    Grabity()
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 100)
})
