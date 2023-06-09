import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Something() {
  const [templates, setTemplates] = useState([]);

  async function fetchTemplates() {
    try {
      const response = await axios.get('http://localhost:8080/api/templates')
      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchTemplates()
    .then((responseData) => setTemplates(responseData))
    .then(console.log(templates))
    .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <h1>I'm something else!</h1>
      {templates && templates.map((template) => (
        <p key={template.id}>ExampleCol: {template.exampleCol}</p>
      ))}
    </div>
  );
}
