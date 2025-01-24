import type React from "react"
import { useState } from "react"
import { CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface InputAreaProps {
  onSend: (input: string) => void
}

const InputArea: React.FC<InputAreaProps> = ({ onSend }) => {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSend(input)
    setInput("")
  }

  return (
    <CardFooter className="p-4 bg-gray-300 border-gray-400 bg-gray-[#28292a]">
      <form className="flex w-full space-x-2" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Send</Button>
      </form>
    </CardFooter>
  )
}

export default InputArea

