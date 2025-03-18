const express = require('express');
const cors = require('cors');

const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");
//creates an instance of express application
const app = express();

//this statement:- parse JSON payloads in request bodies
app.use(express.json());

//use so that it can handle requests from other origins
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Invoice Generator API is running...");
})

app.post("/generate-invoice",(req,res)=>{
    const invoiceData = req.body;

    const doc = new PDFDocument({margin:50});
    const filePath = path.join(__dirname,"invoice.pdf");
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    doc.fontSize(14).text("Anoop Trans-Solution",{align:"center",bold:true});
    doc.fontSize(12).text("Plot No.09 , Anganwadi Road, Morewasti Chikhali",{align:"center"});
    doc.text("Pune, Maharashtra , 411062 , India",{align:"center"});
    doc.text("9225224766/9370978925",{align:"center"});
    doc.text("EMAIL: anuptrans@gmail.com",{align:"center"});

    doc.moveDown();
    doc.fontSize(12).text(`FREIGHT BILL`,{align:"center",bold:true});

    doc.moveDown();
    doc.fontSize(12).text(`Invoice #: ${invoiceData.invoiceNumber}`);
    doc.text(`Invoice Date: ${invoiceData.invoiceDate}`);
    doc.text(`Due Date: ${invoiceData.dueDate}`);

    doc.moveDown();
    doc.fontSize(12).text(`Bill To: ${invoiceData.billTo}`, { bold: true });
    doc.text(`${invoiceData.billToAddress}`);

    doc.moveDown();
    doc.fontSize(12).text(`Work To: ${invoiceData.workTo}`, { bold: true });
    doc.text(`${invoiceData.workToAddress}`);

    doc.moveDown();
    doc.text(`LR NO: ${invoiceData.lrNumber}`);
    doc.text(`Date: ${invoiceData.lrDate}`);
    doc.text(`Item & Description: ${invoiceData.description}`);
    doc.text(`Weight: ${invoiceData.weight} Tonne`);
    doc.text(`Fixed Rate: ₹${invoiceData.fixedRate}`);
    doc.text(`Total Amount: ₹${invoiceData.totalAmount}`);

    doc.moveDown();
    doc.text(`Total in Words: ${invoiceData.amountInWords}`, { italic: true });

    doc.moveDown();
    doc.text("Authorized Signature:", { align: "right" });

    doc.end();

    stream.on("finish", () => {
        res.download(filePath, "invoice.pdf", (err) => {
            if (err) {
                res.status(500).send("Error downloading invoice.");
            }
           
        });
    });

})

const port = 3000;
app.listen(port,()=>console.log(`Server is up and running on address: http://localhost:${port}`));

