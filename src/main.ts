import k from "./kaplayCtx";

k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platforms", "graphics/platforms.png");

k.scene("game", () => {
  const bgPieceWidth = 2880;
  const bgPieces = [
    k.add([k.sprite("chemical-bg"), k.pos(0, 0), k.opacity(0.8), k.scale(1.5)]),
    k.add([
      k.sprite("chemical-bg"),
      k.pos(bgPieceWidth, 0),
      k.opacity(0.8),
      k.scale(1.5),
    ]),
  ];

  k.onUpdate(() => {
    if (bgPieces[1].pos.x < 0) {
      bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth * 2, 0);
      const frontBgPiece = bgPieces.shift();
      if (frontBgPiece) bgPieces.push(frontBgPiece);
    }

    bgPieces[0].move(-100, 0);
    bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth * 2, 0);
  });
});

k.scene("game-over", () => {});

k.go("game");
