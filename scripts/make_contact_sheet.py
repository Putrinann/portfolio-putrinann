from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


SOURCE_DIR = Path("public/images/from-pdf")
PAGE_PREFIX = "page-07-image-*"
OUTPUT_PATH = SOURCE_DIR / "page07-contact-sheet.jpg"


def main():
    files = sorted(SOURCE_DIR.glob(PAGE_PREFIX))
    thumb_width = 240
    thumb_height = 170
    label_height = 28
    columns = 3
    rows = (len(files) + columns - 1) // columns

    sheet = Image.new("RGB", (thumb_width * columns, (thumb_height + label_height) * rows), (26, 36, 31))
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()

    for index, path in enumerate(files):
        image = Image.open(path).convert("RGB")
        image.thumbnail((thumb_width, thumb_height))
        x = (index % columns) * thumb_width
        y = (index // columns) * (thumb_height + label_height)
        sheet.paste(image, (x + (thumb_width - image.width) // 2, y))
        draw.text((x + 6, y + thumb_height + 4), path.name, fill=(246, 247, 245), font=font)

    sheet.save(OUTPUT_PATH)
    print(f"saved {OUTPUT_PATH} with {len(files)} files")


if __name__ == "__main__":
    main()
