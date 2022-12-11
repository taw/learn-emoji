import {sampleSize, shuffle} from "lodash"

export function initEmojiGame(data) {
  return sampleSize(data, 12).map((row) => ({
    name: row[1],
    emoji: row[0],
    done: false,
  }))
}

export function initColorGame(data) {
  return sampleSize(data, 12).map((row) => ({
    name: row[1],
    color: row[0],
    done: false,
  }))
}

export function shuffleIndexes(data) {
  return shuffle(data.map((row, i) => i))
}
