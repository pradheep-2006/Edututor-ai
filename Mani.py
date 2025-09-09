from transformers import AutoModelForCausalLM, AutoTokenizer
import transformers
import torch

model_id = "ibleducation/ibl-neural-edu-tutor-7B"

tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
  model_id,
  device_map="auto",
)
pipeline = transformers.pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
)
prompt = "<s>[INST]Information Theory[/INST] "

response = pipeline(prompt)
print(response['generated_text'])
