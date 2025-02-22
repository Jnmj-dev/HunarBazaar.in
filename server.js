const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import cors

const app = express();
const PORT = 5000;

app.use(cors()); // Use cors middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ dest: 'uploads/' });

let jobs = [];

// Load jobs from file if it exists
const jobsFilePath = path.join(__dirname, 'jobs.json');
if (fs.existsSync(jobsFilePath)) {
  const jobsData = fs.readFileSync(jobsFilePath);
  jobs = JSON.parse(jobsData);
}

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/api/jobs', upload.single('image'), (req, res) => {
  const { title, description, budget, location, mobile } = req.body;
  const newJob = {
    id: jobs.length + 1,
    title,
    description,
    budget,
    location,
    mobile,
    date: new Date().toISOString(),
    image: req.file ? `/uploads/${req.file.filename}` : null,
  };
  jobs.push(newJob);

  // Save jobs to file
  fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2));

  res.json(newJob);
});

app.delete('/api/jobs/:id', (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  jobs = jobs.filter(job => job.id !== jobId);

  // Save jobs to file
  fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2));

  res.sendStatus(204);
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});