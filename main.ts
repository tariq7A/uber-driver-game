namespace SpriteKind {
    export const des = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 . . 
. . . . . 6 c 6 6 6 6 6 6 9 6 . 
. . . . 6 c c 6 6 6 6 6 6 9 c 6 
. . d 6 9 c c 6 9 9 9 9 9 9 c c 
. d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
. 6 6 6 9 b 8 8 b b b 8 b b 8 6 
. 6 6 6 6 6 8 b b b b 8 b b b 8 
. 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
. 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
. d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
. 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
. 8 8 8 8 f f f 8 8 8 8 f f f f 
. . . 8 f f f f f 8 8 f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 . . . . 
. . . . . 6 6 9 9 6 6 6 6 . . . 
. . . . . c 9 6 6 6 6 6 c . . . 
. . . . 6 c 9 6 6 6 6 6 c 6 . . 
. . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
. . . f 6 c 9 6 6 6 6 6 c 6 f . 
. . . f 8 c 6 6 6 6 6 6 c 8 f . 
. . . f 6 c 6 b b b b 6 c 6 f . 
. . . 8 6 6 b c c c c b 6 6 8 . 
. . . 8 8 b c c c c c c b 8 8 . 
. . . f 8 9 9 9 9 9 9 9 9 8 f . 
. . . f 8 d 6 6 6 6 6 6 d 8 f . 
. . . . 6 d d 6 6 6 6 d d 6 f . 
. . . . f 6 d 6 6 6 6 d 6 f . . 
. . . . . 8 6 6 6 6 6 6 8 . . . 
`)
})
function passenger () {
    if (var_2 == 1) {
        _var = 1
        tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorLight2)
        var_2 = 2
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.des, function (sprite, otherSprite) {
    passenger()
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    dest()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 9 6 6 6 6 6 6 c 6 . . . 
. . 6 c 9 6 6 6 6 6 6 c c 6 . . 
. 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
. 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
. 6 6 8 b b 8 b b b 8 8 b 9 6 6 
. 6 8 b b b 8 b b b b 8 6 6 6 6 
. 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
. 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
. 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
. 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
. 8 f f f f 8 8 8 8 f f f 8 8 8 
. . f f f f f 8 8 f f f f f 8 . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`)
})
function dest () {
    if (_var == 1) {
        tiles.placeOnRandomTile(mySprite3, sprites.dungeon.floorLight2)
        _var = 2
        var_2 = 1
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . . 8 8 c c 8 8 . . . . 
. . . . . 8 6 6 6 6 6 6 8 . . . 
. . . . 6 c 6 6 6 6 6 6 c 6 . . 
. . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
. . . f 6 6 9 6 6 6 6 6 c 6 f . 
. . . f 6 6 9 6 6 6 6 6 6 6 f . 
. . . f 6 6 9 6 6 6 6 6 6 6 f . 
. . . f 6 c 6 9 9 6 6 6 c 6 f . 
. . . 8 6 c 8 c c c c 8 c 6 8 . 
. . . 8 6 8 c b b b b c 8 6 8 . 
. . . 8 6 8 b b b b b b 8 6 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . f 8 d 8 8 8 8 8 8 d 8 f . 
. . . f 8 6 d 8 8 8 8 d 6 8 f . 
. . . f f 8 8 8 8 8 8 8 8 f f . 
. . . . f f . . . . . . f f . . 
`)
})
let _var = 0
let var_2 = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
let mySprite3: Sprite = null
mySprite3 = sprites.create(img`
. . . . . . 2 2 2 . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
`, SpriteKind.des)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 9 6 6 6 6 6 6 c 6 . . . 
. . 6 c 9 6 6 6 6 6 6 c c 6 . . 
. 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
. 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
. 6 6 8 b b 8 b b b 8 8 b 9 6 6 
. 6 8 b b b 8 b b b b 8 6 6 6 6 
. 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
. 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
. 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
. 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
. 8 f f f f 8 8 8 8 f f f 8 8 8 
. . f f f f f 8 8 f f f f f 8 . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b02010101020101020101010102020108030b0b0b030b0b030601010109030b03030b0b0b030b0b03030b0b0b03030b03030b0b0b030b0b03030b0b0b03030b0307020201040b0b03030b0b0609030b0303030701010101090502010903030b0303030b0b0b0b0b030b030b0509030b0303030b0b0b0b0b030b030b0b03030b0303030b0b0b0b060a08030b0b03030b03070a01010101090c070a01010a0a0109030b0b0b0b0b0502040b0b0b0b0b0b03030b0b0b0b0b0b030b0b0d0d0d0d0b0307010101010101090b0e0d0d0d0d0b03030b0b0b0b0b0b030b0b0b0b0b0b0b03050101010101010a0101010101010104`,
            img`
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection3,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection2,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection1,sprites.dungeon.floorLight2,sprites.dungeon.floorLight0,sprites.castle.tileDarkGrass1,sprites.dungeon.stairLadder],
            TileScale.Sixteen
        ))
mySprite2 = sprites.create(img`
. . . . f f f f . . . . 
. . f f e e e e f f . . 
. f f e e e e e e f f . 
f f f f 4 e e e f f f f 
f f f 4 4 4 e e f f f f 
f f f 4 4 4 4 e e f f f 
f 4 e 4 4 4 4 4 4 e 4 f 
f 4 4 f f 4 4 f f 4 4 f 
f e 4 d d d d d d 4 e f 
. f e d d b b d d e f . 
. f f e 4 4 4 4 e f f . 
e 4 f b 1 1 1 1 b f 4 e 
4 d f 1 1 1 1 1 1 f d 4 
4 4 f 6 6 6 6 6 6 f 4 4 
. . . f f f f f f . . . 
. . . f f . . f f . . . 
`, SpriteKind.Food)
var_2 = 1
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(16, 0))
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
passenger()
