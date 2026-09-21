from pathlib import Path

from pypdf import PdfReader


PDF_PATH = Path(r"C:\Users\Hewlett-Packard\Downloads\PORTFOLIO2026_PUTRINURULANNISA (1) (2).pdf")
OUTPUT_DIR = Path("public/images/from-pdf")


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    reader = PdfReader(str(PDF_PATH))
    count = 0

    for page_index, page in enumerate(reader.pages, start=1):
        for image_index, image in enumerate(page.images, start=1):
            count += 1
            extension = Path(image.name).suffix or ".png"
            image_path = OUTPUT_DIR / f"page-{page_index:02d}-image-{image_index:02d}{extension}"
            image_path.write_bytes(image.data)

    print(f"extracted {count} images to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
