import type React from "react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface QueryHistoryProps {
  queries: string[]
}

const QueryHistory: React.FC<QueryHistoryProps> = ({ queries }) => {
  return (
    <>
      <CardHeader>
        <CardTitle>Recent Queries</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(80vh-5rem)] pr-4">
          {queries.map((query, index) => (
            <div key={index} className="mb-2 p-2 bg-gray-100 rounded-lg">
              {query}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </>
  )
}

export default QueryHistory

