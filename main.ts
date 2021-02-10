controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Deku_Link,
    assets.animation`Deku link ani1`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Deku_Link,
    assets.animation`Deku link ani2`,
    500,
    true
    )
})
let Deku_Link: Sprite = null
Deku_Link = sprites.create(assets.image`Deku Link`, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(Deku_Link, 100, 75)
scene.cameraFollowSprite(Deku_Link)
