from pathlib import Path

import cv2
import qrcode
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parent
FINAL = ROOT / "final"
FINAL.mkdir(exist_ok=True)

# 90 × 55 mm finished size plus 3 mm bleed on every side: 96 × 61 mm at 300 dpi.
BLEED_SIZE = (1134, 720)
PREVIEW_GAP = 80


def make_qr(value: str, size: int) -> Image.Image:
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=16,
        border=4,
    )
    qr.add_data(value)
    qr.make(fit=True)
    image = qr.make_image(fill_color="black", back_color="white").convert("RGB")
    return image.resize((size, size), Image.Resampling.NEAREST)


def compose(source_name: str, output_stem: str, qr: Image.Image, qr_box: tuple[int, int, int, int]) -> Image.Image:
    source = Image.open(ROOT / source_name).convert("RGB")
    card = ImageOps.fit(source, BLEED_SIZE, method=Image.Resampling.LANCZOS)
    x, y, width, height = qr_box
    card.paste(Image.new("RGB", (width, height), "white"), (x, y))
    card.paste(qr.resize((width, height), Image.Resampling.NEAREST), (x, y))
    card.save(FINAL / f"{output_stem}.png", dpi=(300, 300), optimize=True)
    card.save(FINAL / f"{output_stem}.pdf", "PDF", resolution=300.0, quality=95)
    return card


def decode(path: Path) -> str:
    image = cv2.imread(str(path))
    value, _, _ = cv2.QRCodeDetector().detectAndDecode(image)
    return value


artist_url = "https://klasosterman.se/"
duovi_url = "https://klasosterman.se/duo/"

artist_qr = make_qr(artist_url, 180)
duovi_qr = make_qr(duovi_url, 180)

klas = compose("klas-side-draft-v1.png", "klas-framsida-96x61mm", artist_qr, (875, 445, 180, 180))
duovi = compose("duovi-side-draft-v1.png", "duovi-baksida-96x61mm", duovi_qr, (870, 430, 180, 180))

preview = Image.new("RGB", (BLEED_SIZE[0], BLEED_SIZE[1] * 2 + PREVIEW_GAP), "#e9e5dd")
preview.paste(klas, (0, 0))
preview.paste(duovi, (0, BLEED_SIZE[1] + PREVIEW_GAP))
preview.save(FINAL / "klas-duovi-kort-preview.png", optimize=True)

checks = {
    FINAL / "klas-framsida-96x61mm.png": artist_url,
    FINAL / "duovi-baksida-96x61mm.png": duovi_url,
}
for path, expected in checks.items():
    actual = decode(path)
    if actual != expected:
        raise RuntimeError(f"QR verification failed for {path.name}: {actual!r}")
    print(f"Verified {path.name}: {actual}")
