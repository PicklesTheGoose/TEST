

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["04cdb68f-7c91-40d8-91bb-c87f0c8bc041","9c54f05e-d3c8-4c6d-b3c3-c883f80020a2","77fa1c4a-20e8-4d35-8632-97a98bff33ac","5b76f45a-4d6e-488c-8f65-db92566213ce","a516c493-ab01-436e-bfae-1136e1f6ef8f","0292b45c-b23f-474b-8278-814bc16c923e","047fae2a-60fc-494a-bd71-7bcd1abebf47","86a5d034-3a04-4c45-b0c0-13d2eec543ab","4b82b771-0e39-4032-8adf-5fdd44fa2279","db35e9e2-5f88-4f93-85f4-8b74296d5433","6d687f73-9d04-40b6-b8df-7c1f50128092"],"propsByKey":{"04cdb68f-7c91-40d8-91bb-c87f0c8bc041":{"name":"twig","sourceUrl":null,"frameSize":{"x":50,"y":95},"frameCount":1,"looping":true,"frameDelay":12,"version":"Rmb9iVSgSNpHQYIi.ALQWQhGkXRmp9O4","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":95},"rootRelativePath":"assets/04cdb68f-7c91-40d8-91bb-c87f0c8bc041.png"},"9c54f05e-d3c8-4c6d-b3c3-c883f80020a2":{"name":"point","sourceUrl":null,"frameSize":{"x":15,"y":1},"frameCount":1,"looping":true,"frameDelay":12,"version":"8pHLRJgmr.K1MgfAbr7vmvhtvhX.C2rt","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":1},"rootRelativePath":"assets/9c54f05e-d3c8-4c6d-b3c3-c883f80020a2.png"},"77fa1c4a-20e8-4d35-8632-97a98bff33ac":{"name":"ground","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"hIbca9KeZqlmam.zSwEriC13UgwjkNDT","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/77fa1c4a-20e8-4d35-8632-97a98bff33ac.png"},"5b76f45a-4d6e-488c-8f65-db92566213ce":{"name":"bullet","sourceUrl":null,"frameSize":{"x":8,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"r5_gVrlVihbz1OIMsjODf8rLobyz51.j","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":3},"rootRelativePath":"assets/5b76f45a-4d6e-488c-8f65-db92566213ce.png"},"a516c493-ab01-436e-bfae-1136e1f6ef8f":{"name":"akR","sourceUrl":null,"frameSize":{"x":30,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"l_q_UXn42PQoG13NedNUptM5pU96SndK","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":14},"rootRelativePath":"assets/a516c493-ab01-436e-bfae-1136e1f6ef8f.png"},"0292b45c-b23f-474b-8278-814bc16c923e":{"name":"akL","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"oZ9ML8.TTJ.AsZuL950xM0G3zCnSlPwb","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/0292b45c-b23f-474b-8278-814bc16c923e.png"},"047fae2a-60fc-494a-bd71-7bcd1abebf47":{"name":"walls","sourceUrl":null,"frameSize":{"x":100,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"VdjzYqPR1.do.JEZm4n.U3uqStM2pzIA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":400},"rootRelativePath":"assets/047fae2a-60fc-494a-bd71-7bcd1abebf47.png"},"86a5d034-3a04-4c45-b0c0-13d2eec543ab":{"name":"loading","sourceUrl":null,"frameSize":{"x":49,"y":10},"frameCount":3,"looping":true,"frameDelay":12,"version":"agCgoaiSMaThpyUD0Iv7AAVPxDXsvBUs","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":30},"rootRelativePath":"assets/86a5d034-3a04-4c45-b0c0-13d2eec543ab.png"},"4b82b771-0e39-4032-8adf-5fdd44fa2279":{"name":"mainMenu","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"gcwpO7fNDLdfPkOwubx8pz1XakisEuoN","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/4b82b771-0e39-4032-8adf-5fdd44fa2279.png"},"db35e9e2-5f88-4f93-85f4-8b74296d5433":{"name":"playButton","sourceUrl":null,"frameSize":{"x":100,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"f9HMj32Q96R5DF4BzjL_zXyRIk.Ii9hX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":50},"rootRelativePath":"assets/db35e9e2-5f88-4f93-85f4-8b74296d5433.png"},"6d687f73-9d04-40b6-b8df-7c1f50128092":{"name":"loading bar","sourceUrl":null,"frameSize":{"x":450,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"gPjjIqkIG_IPCxlrfnsMssRjcOyYvr39","loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":15},"rootRelativePath":"assets/6d687f73-9d04-40b6-b8df-7c1f50128092.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var level = 0;
var wall = createGroup();
var wallR = createSprite(500, 200);
wallR.setAnimation("walls");
var wallL = createSprite(-50, 200);
wallL.setAnimation("walls");
wall.add(wallL);
wall.add(wallR);
var ground = createGroup();
var player = createSprite(200, 200);
player.setAnimation("twig");
player.scale = 0.5;
var gun = createSprite(200, 200);
gun.setAnimation("akR");
var point1 = createSprite(player.x, player.y);
point1.setAnimation("point");
point1.visible = false;
var platform = createSprite(200, 450);
platform.setAnimation("ground");
platform.scale = 2;
ground.add(platform);
var bg = createSprite(200, 200);
bg.setAnimation("mainMenu");
bg.visible = false;
var play = createSprite(200, 275);
play.setAnimation("playButton");
play.visible = false;
var loading = createSprite(200, 200);
loading.setAnimation("loading");
loading.visible = false;
loading.scale = 2;
var bar = createSprite(-250, 350);
bar.setAnimation("loading bar");
var bullet = [];
for (var i = 0; i < 9; i++) {
  bullet[i] = createSprite(1000, 1000);
  bullet[i].setAnimation("bullet");
}
var j = 0;
var canJump = true;
var gravity = 2;
var dir;
var cooldown = 0;
function resetLevel() {
  if (level == 1) {
    player.x = 370;
    player.y = 289;
  }
}
function movePlayer() {
  player.collide(ground);
  if (keyDown("r")) {
    resetLevel();
  }
  if (keyDown("a")) {
    player.x = player.x-10;
  }
  if (keyDown("d")) {
    player.x = player.x+10;
  }
  camera.x = (player.x + camera.x)/2;
  camera.y = (player.y + camera.y)/2;
  if (player.y > 200) {
    camera.y = 200;
  }
  point1.x = player.x;
  point1.y = player.y + 25;
  if (point1.isTouching(ground)) {
    canJump = true;
  } else {
    canJump = false;
  }
  if (canJump) {
    if (keyDown("w")) {
      player.velocityY = player.velocityY-20;
    }
  }
  player.velocityY = player.velocityY + gravity;
  wallR.x = player.x + 300;
  wallL.x = player.x - 300;
}
function Gun() {
  dir = gun.rotation;
  gun.x = player.x;
  gun.y = player.y - 5;
  if (keyDown("right")) {
    gun.rotation = gun.rotation + 10;
  }
  if (keyDown("left")) {
    gun.rotation = gun.rotation - 10;
  }
  cooldown = cooldown - 1;
  if (j == 9) {
    j = 0;
  }
  if (keyDown("up") && cooldown <= 0) {
    bullet[j].x = gun.x;
    bullet[j].y = gun.y;
    bullet[j].setSpeedAndDirection(30, dir);
    bullet[j].rotation = gun.rotation;
    cooldown = 10;
    j = j + 1;
  }
  if (gun.rotation > 90 & gun.rotation < 270) {
    gun.setAnimation("akL");
  } else {
    gun.setAnimation("akR");
  }
  if (gun.rotation > 360) {
    gun.rotation = 10;
  }
  if (gun.rotation < 0) {
    gun.rotation = 350;
  }
  for (var i = 0; i < 9; i++) {
    if (bullet[i].isTouching(wall)) {
      bullet[i].x = 1000;
      bullet[i].y = 1000;
      bullet[i].velocityX = 0;
      bullet[i].velocityY = 0;
    }
    if (bullet[i].isTouching(ground)) {
      bullet[i].x = 1000;
      bullet[i].y = 1000;
      bullet[i].velocityX = 0;
      bullet[i].velocityY = 0;
    }
  }
}
function draw() {
  background("white");
  if (level == 0) {
    bg.visible = true;
    play.visible = true;
    if (mousePressedOver(play)) {
      level = -1;
      play.visible = false;
      loading.visible = true;
      bar.velocityX = 20;
    }
  }
  if (bar.isTouching(wallR)) {
    level = 1;
    bg.visible = false;
    loading.visible = false;
    bar.destroy();
  }
  if (level > 0) {
    movePlayer();
    Gun();
  }
  drawSprites();
  if (level == 0) {
    fill("white");
    textSize(50);
    textFont("Dongle");
    textAlign(CENTER, CENTER);
    text("Ascend.", 200, 50);
    textSize(30);
    text("Play", 200, 275);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
