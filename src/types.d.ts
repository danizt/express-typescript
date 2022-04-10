export type Weather =
  | "sunny"
  | "cloudy"
  | "rainy"
  | "snowy"
  | "windy"
  | "stormy"
export type Visibility = "great" | "good" | "ok" | "poor" | "bad"

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, "id" | "date" | "weather" | "visibility">

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">

export type NewDiaryEntry = Omit<DiaryEntry, "id">
