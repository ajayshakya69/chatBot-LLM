import type React from "react"
import { CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Message } from "./Home"

interface ChatAreaProps {
  messages: Message[]
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
  return (
    <CardContent className="flex-grow p-6 overflow-hidden bg-gray-[#28292a]">
      <ScrollArea className="h-full pr-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.sender === "bot" && (
              <Avatar className="mr-2">
                <AvatarFallback>Bot</AvatarFallback>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Bot Avatar" />
              </Avatar>
            )}
            <div
              className={`rounded-lg p-3 max-w-[70%] ${
                message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </div>
            {message.sender === "user" && (
              <Avatar className="ml-2">
                <AvatarFallback>You</AvatarFallback>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User Avatar" />
              </Avatar>
            )}
          </div>
        ))}
      </ScrollArea>
    </CardContent>
  )
}

export default ChatArea

