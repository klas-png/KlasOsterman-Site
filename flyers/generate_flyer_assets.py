from pathlib import Path

import cv2
import qrcode
from PIL import Image


ROOT = Path(__file__).resolve().parent
FINAL = ROOT / "final"
A4_SIZE = (2480, 3508)
FINAL.mkdir(exist_ok=True)


def make_qr(value: str, size: int, output_name: str) -> Image.Image:
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=16,
        border=4,
    )
    qr.add_data(value)
    qr.make(fit=True)
    image = qr.make_image(fill_color="black", back_color="white").convert("RGB")
    image = image.resize((size, size), Image.Resampling.NEAREST)
    image.save(ROOT / output_name, dpi=(300, 300))
    return image


def compose(source_name: str, output_stem: str, qr: Image.Image, box: tuple[int, int, int, int]) -> None:
    source = Image.open(ROOT / source_name).convert("RGB")
    canvas = source.resize(A4_SIZE, Image.Resampling.LANCZOS)
    x, y, width, height = box
    canvas.paste(Image.new("RGB", (width, height), "white"), (x, y))
    qr_for_flyer = qr.resize((width, height), Image.Resampling.NEAREST)
    canvas.paste(qr_for_flyer, (x, y))
    png_path = FINAL / f"{output_stem}.png"
    pdf_path = FINAL / f"{output_stem}.pdf"
    canvas.save(png_path, dpi=(300, 300), optimize=True)
    canvas.save(pdf_path, "PDF", resolution=300.0, quality=95)


def decode(path: Path) -> str:
    image = cv2.imread(str(path))
    value, _, _ = cv2.QRCodeDetector().detectAndDecode(image)
    return value


artist_url = "https://klasosterman.se/"
duo_url = "https://klasosterman.se/duo/"

artist_qr = make_qr(artist_url, 500, "qr-klas-flyer.png")
duo_qr = make_qr(duo_url, 500, "qr-duo-flyer.png")

compose(
    "klas-roslagen-flyer-draft-v2.png",
    "klas-roslagen-a4",
    artist_qr,
    (1815, 2850, 500, 500),
)
compose(
    "duovi-vigsel-flyer-draft-v1.png",
    "duovi-vigsel-a4",
    duo_qr,
    (1830, 2865, 500, 500),
)
compose(
    "duovi-event-flyer-draft-v1.png",
    "duovi-fest-event-a4",
    duo_qr,
    (1830, 2865, 500, 500),
)
compose(
    "duovi-mobile-photo-flyer-draft-v1.png",
    "duovi-allround-mobilbild-a4",
    duo_qr,
    (1830, 2865, 500, 500),
)

checks = {
    "qr-klas-flyer.png": artist_url,
    "qr-duo-flyer.png": duo_url,
    "final/klas-roslagen-a4.png": artist_url,
    "final/duovi-vigsel-a4.png": duo_url,
    "final/duovi-fest-event-a4.png": duo_url,
    "final/duovi-allround-mobilbild-a4.png": duo_url,
}

for filename, expected in checks.items():
    actual = decode(ROOT / filename)
    if actual != expected:
        raise RuntimeError(f"QR verification failed for {filename}: {actual!r}")
    print(f"Verified {filename}: {actual}")
