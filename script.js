

const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your key

async function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');

  const userMessage = input.value;
  if (!userMessage) return;

  chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
  input.value = '';

  // Call OpenAI API
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }]
    })
  });

  const data = await response.json();
  const aiMessage = data.choices[0].message.content;

  chatBox.innerHTML += `<p><strong>Edututor:</strong> ${aiMessage}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}