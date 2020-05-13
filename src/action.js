// Requires and variable definition
const log = require('loglevel')
const fs = require('fs')
const editJsonFile = require("edit-json-file");


// Uncomment this if you want to check if your local env variables are being set
// console.dir(process.env)

// Method that loads the workflow event JSON payload
let getEventData = function () {
  return JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'))
}

// Set default log level or read the environment setting
log.setLevel(process.env.LOG_LEVEL || 'info')

// Print out the event data
log.trace(`Event data: ${JSON.stringify(getEventData())}`)

let filename = process.env.FILE
if (filename == undefined ){
  log.info("no filename. Setting to test.json")
  filename = "test.json"
}
let key = process.env.KEY
if (key == undefined){
  log.info("no key. Setting to test")
  filename = "test.json"
  key = "test"
}
let value = process.env.VALUE
if (value == undefined){
  log.info("no value. Setting to test")
  filename = "test.json"
  value = "test"
}

log.info("loading file " + filename)
let file = editJsonFile(filename);
log.info("setting key:" + key + " to value:" + value)
file.set(key, value)
log.info("saving")
file.save()
