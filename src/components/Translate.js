import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const languages = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]

const Translate = (props) => {
  const [language, setLanguage] = useState(languages[0])
  const [text, setText] = useState('')

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        options={languages}
        selected={language}
        onSelectedChange={setLanguage}
        label={'Select a Language'}
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert
        language={language}
        text={text}
      />
    </div>
  )
}

export  default Translate