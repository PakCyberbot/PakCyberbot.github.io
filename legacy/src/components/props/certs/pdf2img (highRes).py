import fitz  # PyMuPDF
import os
from PIL import Image

def pdf_to_image(pdf_path, output_folder, dpi=300):
    # Open the PDF file
    pdf_document = fitz.open(pdf_path)

    # Assuming there's only one page in the PDF
    page = pdf_document.load_page(0)

    # Get the PDF filename without the extension
    pdf_filename = os.path.splitext(os.path.basename(pdf_path))[0]

    # Define the image options with the desired DPI (resolution)
    image_options = page.get_pixmap(matrix=fitz.Matrix(dpi/72, dpi/72))

    # Save the image as a temporary file
    temp_image_path = os.path.join(output_folder, f"{pdf_filename}_temp.png")
    image_options.save(temp_image_path)

    # Open the image using Pillow and save it with the desired DPI
    image = Image.open(temp_image_path)
    image.save(os.path.join(output_folder, f"{pdf_filename}.png"), dpi=(dpi, dpi))

    # Close the PDF file
    pdf_document.close()

    # Remove the temporary image file
    os.remove(temp_image_path)

def convert_pdfs_in_directory(directory):
    # Get a list of all files in the current directory
    files = os.listdir(directory)

    # Filter PDF files
    pdf_files = [file for file in files if file.endswith(".pdf")]

    for pdf_file in pdf_files:
        pdf_path = os.path.join(directory, pdf_file)
        output_directory = "output_images"  # Use a single directory for all images

        # Create the output directory if it doesn't exist
        os.makedirs(output_directory, exist_ok=True)

        # Convert the PDF to an image with higher resolution and save it with the PDF filename
        pdf_to_image(pdf_path, output_directory, dpi=300)

if __name__ == "__main__":
    current_directory = os.getcwd()  # Get the current working directory
    convert_pdfs_in_directory(current_directory)
