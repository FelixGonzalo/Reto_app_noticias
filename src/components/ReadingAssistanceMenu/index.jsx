import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useShow } from '../../hooks/utils/useShow'
import { readingAssistant } from '../../services/readingAssistant'
import styles from './readingAssistanceMenu.module.css'

import {ImHeadphones, ImVolumeHigh} from 'react-icons/im';


export function ReadingAssistanceMenu({ getTextArray }) {
  const { show, switch_off, switch_on } = useShow()
  const {
    show: pauseActive,
    switch_on: pauseOn,
    switch_off: pauseOff,
  } = useShow()

  const startReading = () => {
    let textArray = getTextArray()
    if (textArray.length === 0) {
      textArray.push(
        'Al parecer no puedo leer noticias en estos momentos, inténtelo más tarde.'
      )
    }
    readingAssistant.readTextArray({ textArray })
    pauseOff()
  }

  const stopReading = () => {
    pauseOn()
    readingAssistant.pauseReading()
  }

  const resumeReading = () => {
    pauseOff()
    readingAssistant.resumeReading()
  }

  const closeReadingAssistance = () => {
    switch_off()
    readingAssistant.cancelReading()
    pauseOff()
  }

  useEffect(() => {
    return () => {
      closeReadingAssistance()
    }
  }, [])

  return (
    <div>
      {show &&
        createPortal(
          <div className={styles.readingAssistanceMenu}>
            <p className={styles.readingAssistanceMenu_title}>
              Asistente de lectura
              <button
                onClick={closeReadingAssistance}
                className={styles.readingAssistanceMenu_btnclose}
              >
                X
              </button>
            </p>

            <div className={styles.readingAssistanceMenu_options}>
              <button
                onClick={startReading}
                className={!pauseActive ? styles.active : styles.inactive}
              >
                <ImVolumeHigh style={{ color: 'red', fontSize: '20px' }} />
              </button>
              <button
                onClick={stopReading}
                className={pauseActive ? styles.active : styles.inactive}
              >
                🛑
              </button>
              <button
                onClick={resumeReading}
                className={pauseActive ? styles.active : styles.inactive}
              >
                🔉
              </button>
            </div>
          </div>,
          document.getElementById('root_modal')
        )}
      <button className={styles.switch_button} onClick={switch_on}>
        <ImHeadphones style={{ color: 'red', fontSize: '20px' }} />
      </button>
    </div>
  )
}
