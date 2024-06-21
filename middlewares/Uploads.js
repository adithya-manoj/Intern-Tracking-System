import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename); 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath;

    if (file.fieldname === 'courseimage') {
      uploadPath = path.join(__dirname, '../Uploads/Images');
    } else if (file.fieldname === 'syllabus') {
      uploadPath = path.join(__dirname, '../Uploads/Syllabus');
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

export const upload = multer({ storage: storage });
