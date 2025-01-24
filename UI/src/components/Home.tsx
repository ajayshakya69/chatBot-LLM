import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import ChatArea from "./ChatArea"
import InputArea from "./InputArea"
import QueryHistory from "./QueryHistory"

export interface Message {
  id: number
  text: string
  sender: "user" | "bot"
}



const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [queryHistory, setQueryHistory] = useState<string[]>([])

  const handleSend = (input: string) => {
    if (input.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: input.trim(),
        sender: "user",
      }
      setMessages((prevMessages) => [...prevMessages, newMessage])
      setQueryHistory((prevHistory) => [input.trim(), ...prevHistory.slice(0, 9)])

      
      setTimeout(() => {
        const botMessage: Message = {
          id: Date.now(),
          text: `You said: ${input.trim()}`,
          sender: "bot",
        }
        setMessages((prevMessages) => [...prevMessages, botMessage])
      }, 1000)
    }
  }

  return (
    <div className="container w-full mx-auto p-4">
      <h3 className="text-center w-full text-4xl font-bold">ChatBot</h3>
      <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen bg-white p-4 md:gap-2">
        <Card className="w-full lg:w-3/4 h-[80vh] flex flex-col  bg-white border-gray-400">
          <ChatArea messages={messages} />
          <InputArea onSend={handleSend} />
        </Card>
        <Card className="w-full lg:w-1/4 h-[80vh] bg-gray-[#28292a]">
          <QueryHistory queries={queryHistory} />
        </Card>
      </div>
    </div>
  )
}

export default Home

