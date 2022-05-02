const createJob = (req, res) => {
  res.send('Create Job')
}

const getAllJobs = (req, res) => {
  res.send('Get all Jobs')
}

const deleteJob = (req, res) => {
  res.send('Delete Job')
}
const updateJob = (req, res) => {
  res.send('Update Job')
}

const showStats = (req, res) => {
  res.send('Show Stats')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }
