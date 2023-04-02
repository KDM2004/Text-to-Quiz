import openai
import random

# Set up OpenAI API credentials
openai.api_key = "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"

# The original text
text = "The quick brown fox jumps over the lazy dog. This is a well-known sentence often used for typing practice."

# Generate quiz questions using OpenAI GPT-3
prompt = f"Generate quiz questions based on the following text: '{text}'\n\nQuestion 1:"
completions = openai.Completion.create(
    engine="davinci",
    prompt=prompt,
    max_tokens=1024,
    n=10,
    stop=None,
    temperature=0.7,
)

# Filter and format the quiz questions
questions = []
for c in completions.choices:
    text = c.text.strip()
    if text.startswith("Question "):
        questions.append(text)
random.shuffle(questions)

# Print the questions
for i in range(len(questions)):
    print(f"Question {i+1}:")
    print(questions[i])
    print()