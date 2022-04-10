import express from "express"
import * as diaryServices from "../services/diaryServices"

const router = express.Router()

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.post("/", (_req, res) => {
  res.send("Creating a new entry diary")
})

export default router
