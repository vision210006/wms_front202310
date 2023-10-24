import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const makePdf = () => {
  const converToImg = async () => {
    // html to imageFile
    const paper = document.querySelector(".div_container > .div_paper");

    const canvas = await html2canvas(paper);
    const imageFile = canvas.toDataURL("image/png", 1.0);

    return imageFile;
  };

  const converToPdf = (imageFile) => {
    // imageFile to pdf

    const doc = new jsPDF("p", "mm", "a4");

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.addImage(imageFile, "JPEG", 0, 0, pageWidth, pageHeight);

    // doc.save("test.pdf")

    window.open(doc.output("bloburl"));

    const pdf = new File([doc.output("blob")], "test.pdf", {
      type: "application/pdf",
    });

    return pdf;
  };

  return {
    viewWithPdf: async () => {
      // html to imageFile
      const imageFile = await converToImg();

      // imageFile to Pdf
      const pdf = converToPdf(imageFile);


    },
  };
};

