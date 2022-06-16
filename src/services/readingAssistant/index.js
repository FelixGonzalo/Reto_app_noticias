const synth = window.speechSynthesis

const readText = ({ text, lang = 'es-ES' }) => {
  synth.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  synth.speak(utterance)
}

const readTextArray = ({ textArray = ['array', 'text'], lang = 'es-ES' }) => {
  const utterance_array = []
  textArray.forEach((text) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    utterance_array.push(utterance)
  })
  read_utterance_array(utterance_array)
}

const cancelReading = () => synth.cancel()

const pauseReading = () => synth.pause()

const resumeReading = () => synth.resume()

const read_utterance_array = (utterance_array) => {
  synth.cancel()
  utterance_array.forEach((utterance) => {
    synth.speak(utterance)
  })
}

export const readingAssistant = {
  readText,
  readTextArray,
  cancelReading,
  pauseReading,
  resumeReading,
}
